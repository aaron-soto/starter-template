import LanguageSwitcher from '@/components/LanguageSwitcher';
import ThemeToggle from '@/components/ThemeToggle';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const Navbar = () => {
  const user = null;

  return (
    <div className="border-b sticky top-0 z-10 bg-white/30 dark:bg-black/30 backdrop-blur-md">
      <div className="container">
        <nav className="flex items-center justify-between py-2">
          <div>
            <a href="#" className="font-semibold text-xl">
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
            {user ? null : (
              <Button variant="outline" size="sm">
                <Link href="/login">Login</Link>
              </Button>
            )}
            {user ? null : (
              <Button size="sm">
                <Link href="/register">Sign Up</Link>
              </Button>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
