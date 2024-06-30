'use client';

import { useState, useEffect } from 'react';
import { Button, buttonVariants } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { Laptop, Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

const ThemeToggle = ({
  size,
}: {
  size?: 'default' | 'sm' | 'lg' | 'icon' | null | undefined;
}) => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const cycleToNextTheme = () => {
    const themes = ['light', 'dark', 'system'];
    const currentThemeIndex = themes.indexOf(theme || 'system');
    const nextThemeIndex = (currentThemeIndex + 1) % themes.length;
    setTheme(themes[nextThemeIndex]);
  };

  if (!mounted) return null;

  return (
    <Tooltip>
      <TooltipTrigger
        onClick={cycleToNextTheme}
        className={buttonVariants({
          variant: 'outline',
          size: size || 'default',
          className: 'f-full p-0 aspect-square',
        })}
      >
        {theme === 'system' && <Laptop height={20} width={20} />}
        {theme === 'light' && <Sun height={20} width={20} />}
        {theme === 'dark' && <Moon height={20} width={20} />}
      </TooltipTrigger>
      <TooltipContent>
        <p className="text-xs">
          {theme === 'system' && 'System'}
          {theme === 'light' && 'Light'}
          {theme === 'dark' && 'Dark'}
        </p>
      </TooltipContent>
    </Tooltip>
  );
};

export default ThemeToggle;
