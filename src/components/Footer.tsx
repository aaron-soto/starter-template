import LanguageSwitcher from '@/components/LanguageSwitcher';
import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="border-t py-8">
      <div className="container flex justify-between items-center text-sm">
        <span>
          © 2024{' '}
          <Link
            href="https://ayezeewebdesigns.com"
            className="underline hover:text-blue-500"
          >
            AyeZeeWebDesigns LLC
          </Link>
          . All rights reserved.
        </span>
        <LanguageSwitcher></LanguageSwitcher>
      </div>
    </footer>
  );
};
