import type { FC } from 'react';
import type { IconBaseProps } from 'react-icons';
import { FaXTwitter } from 'react-icons/fa6';
import {
  IoLogoGithub,
  IoPlanet,
  IoHomeOutline,
  IoNewspaperOutline,
  IoCalendarOutline,
} from 'react-icons/io5';

interface SiteConfig {
  name: string;
  website: string;
  github: string;
}

interface SocialLink {
  href: string;
  icon: FC<IconBaseProps>;
  label: string;
  hoverColor: string;
}

interface NavigationItem {
  name: string;
  href: string;
  icon?: FC<IconBaseProps>;
}

export const SITE_CONFIG: SiteConfig = {
  name: 'ETH Bologna',
  website: 'https://www.ethbologna.com/',
  github: 'https://github.com/ethbologna/website',
};

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: SITE_CONFIG.github,
    icon: IoLogoGithub,
    label: 'Github',
    hoverColor: 'hover:text-black hover:dark:text-black',
  },
  {
    href: 'https://x.com/ethbologna',
    icon: FaXTwitter,
    label: 'Twitter',
    hoverColor: 'hover:text-blue-600 hover:dark:text-blue-600',
  },
  {
    href: SITE_CONFIG.website,
    icon: IoPlanet,
    label: 'Website',
    hoverColor: 'hover:text-green-500 hover:dark:text-green-500',
  },
];

export const NAVIGATION: NavigationItem[] = [
  {
    name: 'Home',
    href: '/',
    icon: IoHomeOutline,
  },
  {
    name: 'Eventi',
    href: '/meetup',
    icon: IoCalendarOutline,
  },
];

export type { SiteConfig, SocialLink, NavigationItem };
