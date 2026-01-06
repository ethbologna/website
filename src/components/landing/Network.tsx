import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionContainer } from "@/components/landing/SectionContainer";

export const Network = () => {
    return (
        <SectionContainer className="bg-white/5 border-b border-white/5">
            <div className="max-w-3xl mx-auto text-center space-y-8">
                <h2 className="text-3xl md:text-4xl font-mono font-bold">
                    Nodo del Network <span className="text-primary">SpaghettETH</span>
                </h2>

                <p className="text-lg text-muted-foreground">
                    EthBologna non è un&apos;isola. Siamo un nodo attivo di una rete nazionale più grande:
                    <a href="https://www.spaghett-eth.com/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors mx-1 underline decoration-primary/50 underline-offset-4">SpaghettETH</a>.
                </p>

                <p className="text-muted-foreground">
                    Un&apos;organizzazione no-profit che coordina le community italiane che lavorano con la tecnologia Ethereum.
                    Ciò che ci unisce non è il codice, ma una visione comune.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
                     {/* Pseudo-nodes grid visual */}
                     {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="flex flex-col items-center p-4 bg-black/40 border border-white/5 rounded-lg hover:border-primary/50 transition-colors group">
                            <div className="w-12 h-12 rounded-full border-2 border-white/20 group-hover:border-primary flex items-center justify-center mb-3 bg-black">
                                <span className="font-mono text-xs text-white/50 group-hover:text-primary">0x{i}</span>
                            </div>
                            <span className="text-xs font-mono text-muted-foreground">NODE_ACTIVE</span>
                        </div>
                     ))}
                </div>

                <div className="pt-8">
                    <Link href="https://www.spaghett-eth.com/" target="_blank" className="inline-flex items-center text-primary font-mono hover:text-primary/80 transition-colors">
                        Esplora la rete nazionale <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                </div>
            </div>
        </SectionContainer>
    );
}
