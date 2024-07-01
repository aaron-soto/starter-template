import NextAuth from "next-auth";

declare module "next-auth" {
  interface User {
    role: string;
    logins: number;
  }

  interface Session {
    user: {
      name: string;
      email: string;
      image: string;
      role: string;
      logins?: number;
    };
  }
}
