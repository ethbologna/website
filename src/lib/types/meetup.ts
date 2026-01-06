// Represents the different categories of events that can be organized
export enum EventType {
  WORKSHOP = 'workshop',
  TALK = 'talk',
  HACKATHON = 'hackathon',
  MEETUP = 'meetup',
  CONFERENCE = 'conference',
  ONLINE = 'online',
  EXHIBITION = 'exhibition',
  SHOWCASE = 'showcase',
  SOCIAL = 'social',
}

export type FacilitationGame = {
  title: string;
  description: string;
  rules?: string;
};

// Defines the structure and properties required for an event entity
export type Event = {
  id: number | string;
  slug?: string;
  title: string;
  subtitle?: string;
  date: string;
  time: string;
  location: string;
  locationLink?: string;
  description: string;
  type: EventType;
  speakers?: string[];
  link?: string;
  facilitation?: FacilitationGame;
  metafora?: string;
  posterPrompt?: string; // Legacy or Prompt description
  image?: string;
};
