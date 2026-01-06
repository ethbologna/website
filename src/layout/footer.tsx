'use client';

import Link from 'next/link';
import { SITE_CONFIG, SOCIAL_LINKS } from '@/lib/constants/navigation';

export default function Footer() {
  return (
    <footer className="bg-background border-t border-white/10 z-40 py-6">
      <div className="flex flex-col md:flex-row items-center justify-between px-6 gap-4 max-w-7xl mx-auto">
        <div className="flex flex-col items-center md:items-start">
            <p className="text-xs md:text-sm text-center text-muted-foreground font-mono">
            &copy; {new Date().getFullYear()}{' '}
            <Link href="/" className="hover:text-primary transition-colors">
                {SITE_CONFIG.name}
            </Link>
            {' • '} <span className="text-primary/70">Infinite Gardens</span>
            </p>
        </div>

        <div className="flex justify-center items-center space-x-4">
          {SOCIAL_LINKS.map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex justify-center p-2 text-muted-foreground rounded-lg cursor-pointer hover:text-primary hover:bg-primary/10 transition-all`}
            >
              <Icon className="w-5 h-5" />
              <span className="sr-only">{label}</span>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}