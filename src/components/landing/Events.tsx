import { events } from "@/lib/constants/meetup";
import { EventType } from "@/lib/types/meetup";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CalendarIcon, MapPinIcon, VideoIcon } from "lucide-react";
import { SectionContainer } from "@/components/landing/SectionContainer";

export const Events = () => {
  // Sort events by date descending to find the next one
  // Simple logic: find the first event where date >= today
  const today = new Date().toISOString().split('T')[0];

  // Sort by date ascending to find the earliest upcoming event
  const upcomingEvents = events
    .filter(event => event.date >= today)
    .sort((a, b) => a.date.localeCompare(b.date));

  const nextEvent = upcomingEvents.length > 0 ? upcomingEvents[0] : null;

  return (
    <SectionContainer className="py-24">
      <div className="flex flex-col items-center text-center space-y-8">
        <h2 className="text-3xl md:text-5xl font-mono font-bold uppercase tracking-tighter">
          Prossimo <span className="text-primary glitch-effect" data-text="Evento">Evento</span>
        </h2>

        {nextEvent ? (
          <div className="w-full max-w-2xl bg-card border border-primary/20 p-8 rounded-xl relative overflow-hidden group hover:border-primary/50 transition-colors">
            {/* Corner decorations */}
            <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-primary"></div>
            <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-primary"></div>
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-primary"></div>
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-primary"></div>

            <div className="space-y-6">
              <div className="flex items-center justify-center gap-2">
                 <Badge variant="outline" className="border-primary text-primary font-mono animate-pulse">
                    INCOMING SIGNAL
                 </Badge>
                 <span className="text-xs font-mono text-muted-foreground">{nextEvent.date}</span>
              </div>

              <h3 className="text-3xl font-bold font-mono">{nextEvent.title}</h3>

              <div className="flex flex-col md:flex-row gap-4 justify-center items-center text-muted-foreground font-mono text-sm">
                <div className="flex items-center gap-2">
                    <CalendarIcon className="w-4 h-4 text-primary" />
                    <span>{nextEvent.date} @ {nextEvent.time}</span>
                </div>
                <div className="flex items-center gap-2">
                    {nextEvent.type === EventType.ONLINE ? <VideoIcon className="w-4 h-4 text-secondary" /> : <MapPinIcon className="w-4 h-4 text-secondary" />}
                    <span>{nextEvent.location}</span>
                </div>
              </div>

              <p className="text-lg">{nextEvent.description}</p>

              {nextEvent.link && (
                <Button className="mt-4 font-mono bg-secondary text-white hover:bg-secondary/90" asChild>
                    <a href={nextEvent.link} target="_blank" rel="noopener noreferrer">
                        Partecipa
                    </a>
                </Button>
              )}

               {/* Fallback for TBD link - usually Telegram */}
               {!nextEvent.link && (
                 <p className="text-xs font-mono text-muted-foreground pt-4">
                    Link e dettagli verranno annunciati su <a href="https://t.me/ethbologna" className="text-white hover:underline">Telegram</a>
                 </p>
               )}
            </div>
          </div>
        ) : (
          <div className="p-12 border border-dashed border-white/20 rounded-lg text-center font-mono">
            <p className="text-xl">Nessun evento pianificato al momento.</p>
            <p className="text-muted-foreground mt-2">Rimani sintonizzato sul canale Telegram.</p>
          </div>
        )}

        <div className="pt-8">
            <Button variant="link" className="text-muted-foreground hover:text-primary font-mono" asChild>
                <a href="/meetup">Vedi archivio eventi -&gt;</a>
            </Button>
        </div>
      </div>
    </SectionContainer>
  );
};
