import { upcomingSeries } from "@/lib/constants/meetup";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPinIcon, ArrowRight } from "lucide-react";
import { SectionContainer } from "@/components/landing/SectionContainer";
import Link from "next/link";

export const Events = () => {
  return (
    <SectionContainer containerClassName="py-24">
      <div className="flex flex-col items-center space-y-12">
        <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-mono font-bold uppercase tracking-tighter">
            Prossimi <span className="text-primary glitch-effect" data-text="Eventi">Eventi</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
                La serie &quot;Birra & Blockchain&quot;: informali, coinvolgenti e incentrati sui valori Regen.
            </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {upcomingSeries.map((event) => (
                <div key={event.id} className="bg-card border border-white/5 rounded-xl overflow-hidden hover:border-primary/50 transition-all group flex flex-col">
                    <div className="p-6 flex-1 space-y-4">
                        <div className="flex justify-between items-start">
                             <Badge variant="secondary" className="font-mono text-xs">
                                {event.date === "TBD" ? "DA CONFERMARE" : event.date}
                             </Badge>
                             <div className="flex items-center text-xs text-muted-foreground font-mono gap-1">
                                <ClockIcon className="w-3 h-3" /> {event.time}
                             </div>
                        </div>

                        <div className="space-y-2">
                             <h3 className="text-xl font-bold font-mono group-hover:text-primary transition-colors">
                                {event.title}
                             </h3>
                             {event.subtitle && (
                                <p className="text-sm text-secondary font-mono">{event.subtitle}</p>
                             )}
                        </div>

                        <p className="text-muted-foreground text-sm line-clamp-3">
                            {event.description}
                        </p>

                         <div className="flex items-center gap-2 text-xs text-muted-foreground pt-2">
                            <MapPinIcon className="w-4 h-4 text-primary/50" />
                            <span>{event.location}</span>
                         </div>
                    </div>

                    <div className="p-6 pt-0 mt-auto">
                        <Button variant="outline" className="w-full border-white/10 hover:border-primary hover:bg-primary/5 group/btn" asChild>
                            <Link href={`/events/${event.slug}`}>
                                Dettagli Evento <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                            </Link>
                        </Button>
                    </div>
                </div>
            ))}
        </div>

        <div className="pt-8 text-center">
            <Button variant="link" className="text-muted-foreground hover:text-primary font-mono" asChild>
                <a href="https://t.me/ethbologna" target="_blank" rel="noopener noreferrer">
                   Rimani aggiornato su Telegram -&gt;
                </a>
            </Button>
        </div>
      </div>
    </SectionContainer>
  );
};

function ClockIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}
