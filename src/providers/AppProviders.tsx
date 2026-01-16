'use client';

import { type JSX } from 'react';
import { ThemeProvider } from 'next-themes';

type ProvidersProps = {
  children: JSX.Element | JSX.Element[] | string | null;
};

export default function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  );
}
