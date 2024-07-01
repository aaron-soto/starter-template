'use client';

import ThemeToggle from '@/components/ThemeToggle';
import { Button } from '@/components/ui/button';
import { Session } from 'next-auth';
import { signIn, signOut, useSession } from 'next-auth/react';

const Navbar = () => {
  const { data: session } = useSession() as { data: Session };

  return (
    <div className="border-b sticky top-0 z-10 bg-white/30 dark:bg-black/30 backdrop-blur-md">
      <div className="container">
        <nav className="flex items-center justify-between py-2">
          <div>
            <a href="#" className="text-primary font-semibold text-xl">
              Logo
            </a>
          </div>
          <div className="flex gap-2">
            <Button variant="ghost" size="sm">
              Home
            </Button>
            <Button variant="ghost" size="sm">
              Contact
            </Button>
            {session ? (
              <>
                <Button variant="link" size="xs" className="my-auto text-xs">
                  {session?.user?.name}
                </Button>
                <Button variant="outline" size="sm" onClick={() => signOut()}>
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => signIn('google')}
                >
                  Login with Google
                </Button>
              </>
            )}
            <div className="flex">
              <ThemeToggle size="sm" />
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
