// src/components/pages/meetup/MeetupTabs.tsx
import { isUpcoming } from '@/lib/utils/dateUtils';
import EventCard from '@/components/pages/meetup/EventCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { events } from '@/lib/constants/meetup';

export default function MeetupTabs() {
  const upcomingEvents = events
    .filter((event) => isUpcoming(event.date))
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  const pastEvents = events
    .filter((event) => !isUpcoming(event.date))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <Tabs defaultValue="upcoming" className="w-full">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
        <TabsTrigger value="past">Past Events</TabsTrigger>
      </TabsList>

      <div className="mt-8">
        <TabsContent value="upcoming">
          {upcomingEvents.length > 0 ? (
            upcomingEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))
          ) : (
            <p className="text-center text-muted-foreground">
              No upcoming events scheduled. Stay tuned!
            </p>
          )}
        </TabsContent>

        <TabsContent value="past">
          {pastEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </TabsContent>
      </div>
    </Tabs>
  );
}
