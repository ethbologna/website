'use client';

import Image from 'next/image';
import Link from 'next/link';
import ThemeSwitch from '@/components/common/ThemeSwitch';
import { NAVIGATION } from '@/lib/constants/navigation';
import { NavigationProps } from '@/lib/types/layout';

export default function NavBar({ isOpen, toggleOpen }: NavigationProps) {
  return (
    <header className="bg-background border-b w-full h-20">
      <nav className="flex items-center justify-between px-4 xs:px-6 md:px-8 h-20">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/img/logo.png"
            alt="logo"
            width={60}
            height={60}
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {NAVIGATION.map(({ name, href }) => (
            <Link
              key={name}
              href={href}
              className="text-foreground hover:text-primary text-lg font-medium transition-colors"
            >
              {name}
            </Link>
          ))}
          <ThemeSwitch />
        </div>

        {/* Mobile Navigation */}
        <div className="flex items-center md:hidden">
          <button
            onClick={() => toggleOpen()}
            className="text-foreground"
            aria-label="Toggle Menu"
          >
            <div
              className={`hamburger flex flex-col justify-between w-6 h-5 ${
                isOpen ? 'open' : ''
              }`}
            >
              <span className="line" />
              <span className="line" />
              <span className="line" />
            </div>
          </button>
        </div>
      </nav>
    </header>
  );
}