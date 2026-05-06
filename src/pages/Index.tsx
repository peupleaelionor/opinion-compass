import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { signals } from "@/data/zawios";
import { SignalCard } from "@/components/zawios/SignalCard";

const Index = () => {
  const featuredSignals = signals.slice(0, 6);

  return (
    <div className="min-h-screen bg-[#F7F8FC]">
      {/* Hero Minimaliste */}
      <section className="safe-shell mx-auto max-w-5xl pt-20 pb-16 text-center">
        <div className="animate-rise-in space-y-6">
          <div className="flex justify-center">
            <span className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-primary/60">
              <Sparkles className="h-3 w-3" />
              Intelligence Collective
            </span>
          </div>
          
          <h1 className="mx-auto max-w-3xl font-display text-5xl font-bold leading-tight tracking-tight text-[#0B1020] md:text-6xl">
            Analyse collective mondiale.
          </h1>
          
          <p className="mx-auto max-w-xl text-lg text-muted-foreground">
            Compare, décide et anticipe les signaux qui façonnent le monde.
          </p>

          <div className="flex justify-center gap-4 pt-4">
            <Button asChild size="lg" className="h-12 px-8 shadow-brand">
              <Link to="/signals">Explorer les signaux</Link>
            </Button>
          </div>
          
          <div className="flex items-center justify-center gap-6 pt-8 text-[11px] font-bold uppercase tracking-widest text-muted-foreground/50">
            <span>47K Analystes</span>
            <span className="h-1 w-1 rounded-full bg-border" />
            <span>94 Pays</span>
            <span className="h-1 w-1 rounded-full bg-border" />
            <span>Temps Réel</span>
          </div>
        </div>
      </section>

      {/* Flux de Signaux Épuré */}
      <section className="safe-shell mx-auto max-w-5xl pb-24">
        <div className="mb-8 flex items-center justify-between border-b border-border pb-4">
          <h2 className="font-display text-xl font-bold text-[#0B1020]">En direct</h2>
          <Link to="/signals" className="text-xs font-bold uppercase tracking-widest text-primary hover:opacity-70 transition-opacity">
            Voir tout →
          </Link>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredSignals.map((signal) => (
            <SignalCard key={signal.id} signal={signal} compact />
          ))}
        </div>
      </section>

      {/* Footer Minimaliste */}
      <footer className="safe-shell mx-auto max-w-5xl py-12 border-t border-border text-center">
        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground/40">
          ZAWIOS — Infrastructure Stratégique
        </p>
      </footer>
    </div>
  );
};

export default Index;
