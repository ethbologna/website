import { CalendarDays, MapPin, Clock, ArrowUpRight, Users } from 'lucide-react';
import { isUpcoming } from '@/lib/utils/dateUtils';
import { Badge } from '@/components/ui/badge';
import { BadgeProps } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Event, EventType } from '@/lib/types/meetup';

type EventCardProps = {
  event: Event;
};

export const getEventTypeVariant = (
  type: EventType
): NonNullable<BadgeProps['variant']> => {
  switch (type) {
    case EventType.CONFERENCE:
      return 'success';
    case EventType.EXHIBITION:
      return 'warning';
    case EventType.WORKSHOP:
      return 'sky';
    case EventType.TALK:
      return 'blue';
    case EventType.HACKATHON:
      return 'indigo';
    case EventType.MEETUP:
      return 'cyan';
    case EventType.ONLINE:
      return 'blue';
    case EventType.SHOWCASE:
      return 'lightBlue';
    case EventType.SOCIAL:
      return 'slate';
    default:
      return 'default';
  }
};

export default function EventCard({ event }: EventCardProps) {
  const upcoming = isUpcoming(event.date);

  return (
    <Card className="mb-6">
      <CardHeader className="pb-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="space-y-2">
            {/* Status Badge */}
            <div className="flex items-center gap-2">
              <Badge
                variant={upcoming ? 'default' : 'secondary'}
                className="uppercase text-xs tracking-wider"
              >
                {upcoming ? 'Upcoming' : 'Past'}
              </Badge>
              <Badge
                variant={getEventTypeVariant(event.type)}
                className="uppercase text-xs tracking-wider"
              >
                {event.type}
              </Badge>
            </div>

            {/* Title */}
            <CardTitle className="text-xl md:text-2xl font-bold">
              {event.title}
            </CardTitle>

            {/* Date and Time */}
            <CardDescription className="flex flex-wrap items-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <CalendarDays className="h-4 w-4 text-primary" />
                {new Date(event.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary" />
                {event.time}
              </div>
            </CardDescription>
          </div>

          {/* Registration Button */}
          {event.link && upcoming && (
            <div className="flex-shrink-0">
              <a href={event.link} target="_blank" rel="noopener noreferrer">
                <Button variant="default" className="w-full md:w-auto group">
                  <span className="mr-1">{event.type === EventType.ONLINE ? 'Join' : 'Register Now'}</span>
                  <ArrowUpRight className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </Button>
              </a>
            </div>
          )}
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Description */}
        <p className="text-sm text-muted-foreground leading-relaxed">
          {event.description}
        </p>

        <div className="space-y-4">
          {/* Location */}
          <div className="flex items-center gap-2 text-sm">
            <MapPin className="h-4 w-4 text-primary" />
            <span className="text-muted-foreground">{event.location}</span>
          </div>

          {/* Speakers */}
          {event.speakers && event.speakers.length > 0 && (
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm font-medium">
                <Users className="h-4 w-4 text-primary" />
                <span>Speakers</span>
              </div>
              <div className="flex flex-wrap gap-2 max-w-full">
                {event.speakers.map((speaker, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="text-xs py-1 px-2 break-all"
                  >
                    {speaker}
                  </Badge>
                ))}
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
