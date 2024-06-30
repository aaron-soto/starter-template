import LanguageSwitcher from '@/components/LanguageSwitcher';
import ThemeToggle from '@/components/ThemeToggle';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  return (
    <div className="border-b sticky top-0 z-10 bg-white/30 dark:bg-black/30 backdrop-blur-md">
      <div className="container">
        <nav className="flex items-center justify-between py-2">
          <div>
            <a href="#" className="text-primary font-semibold text-xl">
              Logo
            </a>
          </div>
          <div>
            <div className="flex">
              <div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-primary font-normal"
                >
                  Home
                </Button>
              </div>
              <div className="h-full">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-primary font-normal"
                >
                  Contact
                </Button>
              </div>
              <div className="flex">
                <ThemeToggle size="sm" />
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
