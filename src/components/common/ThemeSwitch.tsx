'use client';

import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from 'next-themes';

export default function ThemeSwitch({ className }: { className?: string }) {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  function switchTheme(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    theme === 'dark' ? setTheme('light') : setTheme('dark');
  }

  if (!mounted) {
    return (
      <button 
        className={`
          relative overflow-hidden rounded-full p-2
          transition-colors duration-200
          ${className}
        `}
      >
        <div className="h-6 w-6" />
      </button>
    );
  }

  return (
    <button
      className={`
        relative overflow-hidden rounded-full p-2
        transition-all duration-200 ease-in-out
        ${className}
      `}
      title="Switch Theme"
      onClick={switchTheme}
    >
      <div className="relative">
        <Moon 
          className={`
            h-6 w-6 
            transition-all duration-500
            ${resolvedTheme === 'dark' 
              ? 'rotate-0 scale-100 text-primary' 
              : 'rotate-90 scale-0 absolute'
            }
          `}
        />
        <Sun 
          className={`
            h-6 w-6
            transition-all duration-500
            ${resolvedTheme === 'dark'
              ? '-rotate-90 scale-0 absolute'
              : 'rotate-0 scale-100 text-primary'
            }
          `}
        />
      </div>
    </button>
  );
}
