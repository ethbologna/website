import type { Metadata, Viewport } from 'next';

export const viewport: Viewport = {
  themeColor: '#f2f2f7',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

const siteConfig = {
  title: 'ETH Bologna - Infinity Gardens',
  description: 'Un movimento cyberpunk per un digitale libero. Costruiamo infinite gardens nella blockchain italiana. Unisciti alla lotta per i diritti digitali, la privacy e sistemi decentralizzati.',
  url: 'https://www.ethbologna.com',
  image: '/img/logo.png',
  keywords: ['Ethereum, Bologna, Web3, Blockchain, Community, Cyberpunk, Regen, Privacy, Diritti Digitali, SpaghettETH, Italia, DeFi, NFT, Smart Contracts'], 
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: siteConfig.title,
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  manifest: '/manifest.json',
  icons: {
    icon: [
      { url: '/img/favicon.ico', sizes: 'any' },
      { url: '/img/icon.svg', type: 'image/svg+xml' },
    ],
    apple: { url: '/img/apple-icon.png' },
    other: [
      {
        url: '/img/web-app-manifest-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        url: '/img/web-app-manifest-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  },
  openGraph: {
    type: 'website',
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [{ url: siteConfig.image }],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.image],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: siteConfig.title,
  },
};