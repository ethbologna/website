'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeSwitch from '@/components/features/ThemeSwitch';
import { NAVIGATION } from '@/lib/constants/navigation';
import { NavigationProps } from '@/lib/types/layout';

export default function Sidebar({ isOpen, toggleOpen }: NavigationProps) {
  const pathname = usePathname();

  return (
    <aside
      className={`z-50 mt-[73px] min-w-full h-[calc(100vh-73px)] transition-transform p-4 fixed overflow-y-auto 
          ${isOpen ? '-translate-x-0 sm:-translate-x-full shadow-xl' : '-translate-x-full'} 
          duration-300 bg-background border-r`}
    >
      <div className="relative h-full p-4 rounded-xl flex flex-col justify-between overflow-y-auto">
        <ul className="space-y-2 font-medium">
          {NAVIGATION.map(({ name, href, icon: Icon }) => (
            <li key={name}>
              <Link
                href={href}
                className={`
                  flex items-center px-6 py-4 rounded-lg
                  transition-colors duration-200
                  ${
                    pathname === href
                      ? 'bg-accent text-accent-foreground'
                      : 'text-foreground hover:bg-accent hover:text-accent-foreground'
                  }
                `}
                onClick={toggleOpen}
              >
                {Icon && (
                  <Icon
                    className={`w-6 h-6 ${
                      pathname === href ? 'text-accent-foreground' : ''
                    }`}
                  />
                )}
                <span className="ml-3">{name}</span>
              </Link>
            </li>
          ))}
        </ul>

        <ThemeSwitch className="mx-auto" />
      </div>
    </aside>
  );
}