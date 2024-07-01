import { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { connectMongoDB } from "./mongodb";
import User from "@/models/user";

export const authOptions: AuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: 'jwt',
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({ user, account }): Promise<any> {
      if (account!.provider === 'google') {
        const { name, email, image } = user;

        try {
          await connectMongoDB();

          const res = await fetch('http://localhost:3000/api/user', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              name: user.name,
              email: user.email,
              image: user.image,
            })
          });

          if (res.ok) {
            return true;
          }

        } catch (error) {
          console.log(error);
        }
      }

      return true;
    },
    async session({ session, token }) {
      await connectMongoDB();
      const user = await User.findOne({ email: token.email });
      if (user) {
        session.user = {
          name: user.name,
          email: user.email,
          image: user.image,
          role: user.role,
        };
      }
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
      }
      return token;
    },
  },
};
