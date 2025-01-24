'use client';

import Image from 'next/image';

export default function Notes() {
  return (
    <div className="w-full flex flex-col items-center justify-center space-y-8 py-12 px-4">
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
          Notes
        </h1>
      </div>

      <p className="text-lg md:text-xl text-muted-foreground text-center">
        Coming Soon
      </p>
    </div>
  );
}