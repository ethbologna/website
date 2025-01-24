'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="w-full flex flex-col items-center justify-center gap-8 p-4">
      <div className="flex flex-col items-center gap-4">
        <Image
          src="/img/logo.png"
          alt="ETH Bologna Logo"
          width={120}
          height={120}
          priority
          className="my-4"
        />
      </div>

      <div className="text-center max-w-lg">
        <h2 className="text-2xl font-medium mb-4">Page not found</h2>
        <p className="text-xl text-muted-foreground italic mb-1">
          &ldquo;Nel centro di Bologna non si perde neanche un bambino&rdquo;
        </p>
        <p className="text-base text-muted-foreground mb-2">
          In the center of Bologna, not even a child gets lost
        </p>
        <p className="text-sm text-muted-foreground mt-2">
          - Lucio Dalla
        </p>
      </div>

      <button 
        onClick={() => router.push('/')}
        className="mt-4 px-6 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
      >
        Back to home
      </button>
    </div>
  );
}