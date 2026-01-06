# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
# Setup
bun install                    # Install dependencies

# Development
bun dev                       # Start development server on localhost:3000
bun lint                      # Run ESLint checks
bun format                    # Format code with Prettier
bun typecheck                 # Check TypeScript without emitting

# Production
bun build                     # Create optimized production build
bun start                     # Serve production build
```

## Project Architecture

This is a Next.js 15 community website for ETH Bologna with Web3 integration. Key architectural patterns:

### Framework & Routing
- **Next.js App Router** - All pages in `/src/app/` follow file-based routing
- Pages are client components (marked with `'use client'`) for interactivity
- Root layout at `/src/app/layout.tsx` wraps all pages with providers

### Provider Stack
All providers are centralized in `/src/providers/AppProviders.tsx`:
- `ThemeProvider` (next-themes) - Dark/light mode with system preference
- `WagmiProvider` - Web3 wallet connections
- `QueryClientProvider` - Data fetching and caching
- `RainbowKitProvider` - Wallet connection UI

### Component Organization
```
/src/components/
├── ui/              # Base shadcn/ui components (unstyled, Tailwind-based)
├── pages/           # Page-specific components (e.g., meetup/)
└── common/          # Cross-page reusable components
```

### Key Configuration
- **TypeScript**: Strict mode enabled, path alias `@/*` → `./src/*`
- **Tailwind**: Custom breakpoints (xxs: 256px, xs: 384px, s: 512px), CSS variables for theming
- **Web3**: Multi-chain support (Mainnet, Arbitrum, Base, optional Sepolia testnet)
- **Styling**: CSS variables in `/src/assets/styles/globals.scss` for theme system

### Data Management
- Event data stored in `/src/lib/constants/meetup.ts` (16 ETH Bologna meetups)
- Navigation config in `/src/lib/constants/navigation.ts`
- Type definitions in `/src/lib/types/` for all data structures

### Web3 Integration
- RainbowKit configured for 11+ wallets (MetaMask, Rainbow, Rabby, Ledger, etc.)
- wagmi hooks for Ethereum interactions
- RPC fallbacks configured for reliability
- Testnet support controlled by `NEXT_PUBLIC_ENABLE_TESTNETS` env var

### Common Patterns
- Use `cn()` utility from `/src/lib/utils/index.ts` for conditional classnames
- All components are TypeScript with strict typing
- Mobile-first responsive design with Tailwind
- CSS variables for light/dark theme switching
- Server components for static content, client components for interactivity