import Image from "next/image";
import { events } from "@/lib/constants/meetup";
import { notFound } from "next/navigation";
import { SectionContainer } from "@/components/landing/SectionContainer";
import { Badge } from "@/components/ui/badge";
import { CalendarIcon, MapPinIcon, ClockIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return events
    .filter((event) => event.slug)
    .map((event) => ({
      slug: event.slug,
    }));
}

export default async function EventPage({ params }: PageProps) {
  const { slug } = await params;
  const event = events.find((e) => e.slug === slug);

  if (!event) {
    notFound();
  }

  return (
    <div className="min-h-screen pt-20 pb-12 w-full">
      <SectionContainer>
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Header */}
          <div className="space-y-6 text-center md:text-left">
            <Link href="/" className="text-muted-foreground hover:text-primary mb-8 inline-block font-mono text-sm">
                &larr; Torna alla Home
            </Link>

            <Badge variant="outline" className="border-secondary text-secondary font-mono font-bold tracking-widest uppercase mb-4">
               {event.type}
            </Badge>

            <h1 className="text-4xl md:text-6xl font-bold font-mono uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-foreground via-primary to-foreground">
              {event.title}
            </h1>
            {event.subtitle && (
                <h2 className="text-2xl md:text-3xl font-mono text-primary/80">
                    {event.subtitle}
                </h2>
            )}

            <div className="flex flex-col md:flex-row gap-6 text-lg text-muted-foreground font-mono pt-4 justify-center md:justify-start">
               <div className="flex items-center gap-2">
                 <CalendarIcon className="w-5 h-5 text-primary" />
                 <span>{event.date}</span>
               </div>
               <div className="flex items-center gap-2">
                 <ClockIcon className="w-5 h-5 text-primary" />
                 <span>{event.time}</span>
               </div>
               <div className="flex items-center gap-2">
                 <MapPinIcon className="w-5 h-5 text-primary" />
                 {event.locationLink ? (
                    <a href={event.locationLink} target="_blank" rel="noopener noreferrer" className="hover:text-primary underline decoration-dashed transition-colors">
                        {event.location}
                    </a>
                 ) : (
                    <span>{event.location}</span>
                 )}
               </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 border-t border-border pt-12">
             <div className="md:col-span-2 space-y-8">
                <div className="prose dark:prose-invert max-w-none">
                    <h3 className="text-2xl font-mono text-foreground mb-4">Il Tema</h3>
                    <p className="text-lg leading-relaxed text-muted-foreground">{event.description}</p>
                </div>

                {event.image ? (
                   <div className="relative w-full rounded-lg overflow-hidden border border-border shadow-[0_0_20px_rgba(34,197,94,0.1)] group">
                      <Image
                         src={event.image}
                         alt={`Locandina: ${event.title}`}
                         width={800}
                         height={600}
                         className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                         priority
                      />
                   </div>
                ) : event.posterPrompt && (
                    <div className="p-4 rounded-lg border border-dashed border-border text-xs font-mono text-muted-foreground">
                        <span className="block text-foreground mb-2 uppercase tracking-wider font-bold">Visione Estetica</span>
                        {event.posterPrompt}
                    </div>
                )}
             </div>

             <div className="space-y-6">
                <div className="bg-primary/5 border border-primary/20 p-6 rounded-lg text-center space-y-4">
                    <h3 className="font-mono text-primary">Partecipa all{`'`}evento</h3>
                    <p className="text-sm text-muted-foreground">
                        L{`'`}ingresso è libero. Unisciti al gruppo Telegram per aggiornamenti last-minute.
                    </p>
                    <Button className="w-full font-mono bg-primary text-black hover:bg-primary/90" asChild>
                         <a href="https://t.me/ethbologna" target="_blank" rel="noopener noreferrer">
                            Entra su Telegram
                         </a>
                    </Button>
                </div>
             </div>
          </div>
        </div>
      </SectionContainer>
    </div>
  );
}
