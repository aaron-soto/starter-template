import LanguageSwitcher from '@/components/LanguageSwitcher';
import ThemeToggle from '@/components/ThemeToggle';
import { Button, buttonVariants } from '@/components/ui/button';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="border-b sticky h-[60px] top-0 z-10 bg-white/30 dark:bg-black/30 backdrop-blur-md">
      <div className="container">
        <nav className="flex items-center justify-between py-2">
          <Link
            href="/"
            className={buttonVariants({
              variant: 'link',
              size: 'sm',
              className: 'text-primary font-semibold text-xl',
            })}
          >
            Logo
          </Link>
          <div className="flex gap-2">
            <Link
              href="/"
              className={buttonVariants({
                variant: 'ghost',
                size: 'sm',
                className: 'text-primary font-normal',
              })}
            >
              Home
            </Link>
            <Link
              href="/contact"
              className={buttonVariants({
                variant: 'ghost',
                size: 'sm',
                className: 'text-primary font-normal',
              })}
            >
              Contact
            </Link>
            <ThemeToggle size="sm" />
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
