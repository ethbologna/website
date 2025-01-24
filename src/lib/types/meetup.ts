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

// Defines the structure and properties required for an event entity
export type Event = {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  type: EventType;
  speakers?: string[];
  link?: string;
};