'use client';

import Link from 'next/link';
import { SITE_CONFIG, SOCIAL_LINKS } from '@/lib/constants/navigation';

export default function Footer() {
  return (
    <footer className="bg-background border-t z-40 h-10 md:h-16">
      <div className="flex flex-row items-center justify-between px-4 h-10 md:h-16">
        <p className="text-xs md:text-sm text-center text-muted-foreground">
          &copy; {new Date().getFullYear()}{' '}
          <Link href="/" className="hover:underline">
            {SITE_CONFIG.name}
          </Link>
        </p>

        <div className="flex justify-center items-center space-x-0.5 md:space-x-1">
          {SOCIAL_LINKS.map(({ href, icon: Icon, label, hoverColor }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex justify-center p-1.5 md:p-2 text-muted-foreground rounded-lg cursor-pointer ${hoverColor} hover:bg-accent`}
            >
              <Icon className="w-4 h-4 md:w-5 md:h-5" />
              <span className="sr-only">{label}</span>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}