import Image from "next/image";
import { events } from "@/lib/constants/meetup";
import { parseDate } from "@/lib/utils/dateUtils";
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
                 <span>
                    {parseDate(event.date)?.toLocaleDateString('it-IT', {
                        day: '2-digit',
                        month: '2-digit',
                        year: 'numeric'
                    }).replace(/\//g, '.') || event.date}
                 </span>
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
                    <div className="text-lg leading-relaxed text-muted-foreground whitespace-pre-wrap">
                      {event.description}
                    </div>
                </div>

                {event.facilitation && (
                  <div className="prose dark:prose-invert max-w-none pt-8 border-t border-border/50">
                    <h3 className="text-2xl font-mono text-foreground mb-4">
                      {event.facilitation.title || "Workshop & Networking"}
                    </h3>
                    <p className="text-lg leading-relaxed text-muted-foreground">
                      {event.facilitation.description}
                    </p>
                    {event.facilitation.rules && (
                       <div className="mt-4 p-4 bg-secondary/5 border-l-4 border-secondary/30 text-sm italic">
                          {event.facilitation.rules}
                       </div>
                    )}
                  </div>
                )}

                <div className="prose dark:prose-invert max-w-none pt-8 border-t border-border/50">
                    <h3 className="text-xl font-mono text-foreground mb-4">Format dell{`'`}incontro</h3>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2">
                      <li><span className="text-foreground font-bold">Intro tematica:</span> Il concetto filosofico/sociale della serata.</li>
                      <li><span className="text-foreground font-bold">Testimonianza:</span> Un esperto o un "builder" che racconta un caso d'uso reale.</li>
                      <li><span className="text-foreground font-bold">Workshop/Networking:</span> Un momento pratico o di dibattito aperto per toccare con mano la tecnologia.</li>
                    </ul>
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
                <div className="bg-primary/5 border border-primary/20 p-6 rounded-lg space-y-6">
                  <div className="text-center space-y-2">
                    <h3 className="text-xl font-mono font-bold uppercase tracking-tight text-primary">
                      Come Partecipare
                    </h3>
                    <p className="text-muted-foreground font-mono text-xs">
                      Posti limitati (max 30 per evento).
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="space-y-1">
                      <div className="text-primary font-mono font-bold text-sm">
                        01. REGISTER
                      </div>
                      <p className="text-xs text-muted-foreground">
                        Iscriviti al modulo a questo{" "}
                        <a
                          href="https://forms.gle/EN5Tpv7sd2nyr6Ft6"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline"
                        >
                          LINK
                        </a>
                      </p>
                    </div>
                    <div className="space-y-1">
                      <div className="text-primary font-mono font-bold text-sm">
                        02. PING
                      </div>
                      <p className="text-xs text-muted-foreground">
                        Entra nel gruppo Telegram.
                      </p>
                    </div>
                    <div className="space-y-1">
                      <div className="text-primary font-mono font-bold text-sm">
                        03. COLLECT
                      </div>
                      <p className="text-xs text-muted-foreground">
                        Ricevi il tuo POAP a fine evento.
                      </p>
                    </div>
                  </div>

                  <div className="pt-2">
                    <Button
                      className="w-full font-mono bg-primary !text-black hover:bg-primary/90 text-sm"
                      asChild
                    >
                      <a
                        href="https://t.me/ethbologna"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Entra su Telegram
                      </a>
                    </Button>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </SectionContainer>
    </div>
  );
}
