'use client';

import Image from 'next/image';
import { FaTelegramPlane } from 'react-icons/fa';
import { IoLogoGithub } from 'react-icons/io5';

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center justify-center space-y-8">
      <div className="flex flex-col items-center space-y-4">
        <Image
          src="/img/logo.png"
          alt="ETH Bologna Logo"
          width={180}
          height={180}
          priority
          className="w-[140px] md:w-[180px] h-[140px] md:h-[180px] mb-4"
        />
        <h1 className="text-3xl md:text-4xl font-bold text-foreground text-center">
          ETH Bologna
        </h1>
      </div>

      <p className="text-lg md:text-xl text-muted-foreground text-center max-w-md md:max-w-2xl">
        Un movimento cyberpunk per un digitale libero. Costruiamo infinite gardens nella blockchain italiana.
      </p>

      <div className="flex items-center space-x-6">
        <a
          href="https://github.com/ethbologna/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center p-2 rounded-full
                     hover:bg-secondary transition-colors duration-200"
          aria-label="GitHub"
        >
          <IoLogoGithub className="w-7 h-7" />
        </a>
        <a
          href="https://t.me/ethbologna"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center p-2 rounded-full
                     hover:bg-secondary transition-colors duration-200"
          aria-label="Telegram"
        >
          <FaTelegramPlane className="w-7 h-7" />
        </a>
      </div>

      <div className="mt-6 text-center">
        <p className="text-sm text-muted-foreground max-w-xs md:max-w-md mx-auto">
          Unisciti alla lotta per i diritti digitali, la privacy e sistemi decentralizzati. Siamo parte di SpaghettETH.
        </p>
      </div>
    </div>
  );
}
