import React from 'react';
import Image from 'next/image';
import { FaTelegramPlane } from 'react-icons/fa';
import { Button } from '@/components/ui/button';

export const Hero = () => {
  return (
    <div className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden border-b border-border">
      {/* Background Grid - CSS Only */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      {/* Radial Gradient for Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,var(--background)_100%)] pointer-events-none"></div>

      <div className="z-10 flex flex-col items-center space-y-8 text-center max-w-4xl px-4">
        <div className="relative group">
          <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary to-secondary opacity-75 blur-lg group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
          <div className=" relative bg-background dark:bg-black rounded-full p-1 border border-border">
            <Image
              src="/img/logo.png"
              alt="ETH Bologna Logo"
              width={180}
              height={180}
              priority
            />
          </div>
        </div>

        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold font-mono tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-foreground via-primary to-foreground animate-pulse" data-text="ETH Bologna">
            ETH Bologna
          </h1>
          <p className="text-xl md:text-2xl font-mono text-primary/80 glitch-effect" data-text="Movimento Cyberpunk / Digitale Libero">
            Movimento Cyberpunk / Digitale Libero
          </p>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg pt-4 leading-relaxed">
            Costruiamo <span className="text-secondary font-bold">garden infiniti</span> nella blockchain italiana.
            Lottiamo per la privacy e i diritti digitali.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 pt-8">
          <Button
            className="h-12 px-8 text-lg font-mono bg-primary text-black hover:bg-primary/90 hover:shadow-[0_0_20px_rgba(34,197,94,0.5)] transition-all border border-transparent"
            asChild
          >
            <a href="https://t.me/ethbologna" target="_blank" rel="noopener noreferrer">
              <FaTelegramPlane className="mr-2 text-xl" />
              Unisciti al Network
            </a>
          </Button>

          <Button
            variant="outline"
            className="h-12 px-8 text-lg font-mono border-primary/50 text-foreground hover:bg-primary/10 hover:border-primary transition-all"
            asChild
          >
             <a href="#manifesto">
              Scopri il Manifesto
            </a>
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 animate-bounce text-primary/50">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 13l5 5 5-5M7 6l5 5 5-5"/>
        </svg>
      </div>
    </div>
  );
};
