import { Badge } from "@/components/ui/badge";
import { SectionContainer } from "@/components/landing/SectionContainer";

export const Manifesto = () => {
  return (
    <SectionContainer id="manifesto" className="border-b border-white/5 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 p-4 text-xs font-mono text-primary/20 select-none">
            SYS.INIT: REGEN_PROTOCOL_V1
        </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <Badge variant="outline" className="border-secondary text-secondary font-mono tracking-widest uppercase">
            Il Nostro Credo
          </Badge>
          <h2 className="text-3xl md:text-5xl font-mono font-bold leading-tight">
            Rigenerazione <span className="text-secondary">Cyberpunk</span>
          </h2>

          <div className="space-y-4 text-muted-foreground text-lg leading-relaxed font-light">
            <p>
              Siamo un gruppo di persone animate da ideali quasi <span className="text-white font-medium">&quot;cyberpunk&quot;</span>,
              che tenta di costruire un internet più aperto e accessibile a tutti.
            </p>
            <p>
              Nel mondo blockchain, questo movimento è conosciuto come <span className="text-primary font-mono">Regen</span>.
              Ci poniamo l&apos;obiettivo di creare sistemi decentralizzati e non gerarchici — &quot;infinite gardens&quot; —
              in netta contrapposizione a un sistema finanziario e digitale chiuso e controllato da pochi.
            </p>
            <p className="border-l-2 border-primary pl-4 italic text-white/80">
              &quot;Crediamo che la lotta per i diritti digitali, la privacy e la creazione di sistemi aperti siano battaglie profondamente sociali e attuali.&quot;
            </p>
          </div>
        </div>

        <div className="relative mt-8 md:mt-0">
          <div className="absolute inset-0 bg-primary/5 blur-3xl rounded-full"></div>
          <div className="bg-black/50 backdrop-blur-sm border border-primary/30 p-6 rounded-lg font-mono text-sm shadow-[0_0_30px_rgba(34,197,94,0.1)]">
            <div className="flex gap-2 mb-4 border-b border-white/10 pb-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="ml-auto text-xs text-muted-foreground">bash</span>
            </div>
            <div className="space-y-2 text-green-500/90">
              <p><span className="text-blue-400">user@ethbologna</span>:<span className="text-blue-500">~</span>$ init regen-protocol</p>
              <p className="text-white/70">{`> Loading modules...`}</p>
              <p className="text-white/70">{`> [OK] Privacy Layers`}</p>
              <p className="text-white/70">{`> [OK] Decentralized Governance`}</p>
              <p className="text-white/70">{`> [OK] Open Source Ethos`}</p>
              <p className="text-white/70">{`> [OK] Infinite Games`}</p>
              <p className="animate-pulse">_</p>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};
