'use client';

import { Events } from '@/components/landing/Events';
import { Hero } from '@/components/landing/Hero';
import { Manifesto } from '@/components/landing/Manifesto';
import { Network } from '@/components/landing/Network';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <Manifesto />
      <Network />
      <Events />
    </div>
  );
}
