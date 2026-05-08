import { Link } from "react-router-dom";
import { ArrowRight, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import { signals } from "@/data/zawios";
import { SignalCard } from "@/components/zawios/SignalCard";

const Index = () => {
  const featuredSignals = signals.slice(0, 6);

  return (
    <div className="min-h-screen bg-[#F7F8FC]">
      {/* Hero Monumental */}
      <section className="safe-shell mx-auto max-w-6xl pt-32 pb-24">
        <div className="animate-rise-in space-y-12">
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-primary">
              <Activity className="h-4 w-4" />
              <span className="z-micro-label">Infrastructure de Vérité</span>
            </div>
            <h1 className="font-display text-7xl font-bold leading-[0.95] tracking-tighter text-[#0B1020] md:text-9xl">
              Mesurer<br />
              l'intelligence.
            </h1>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-end">
            <p className="text-2xl text-muted-foreground leading-relaxed tracking-tight">
              ZAWIOS est l'instrument de précision pour décoder les signaux mondiaux. 
              Une clarté absolue dans un monde de bruit.
            </p>
            <div className="flex justify-start md:justify-end gap-6">
              <Button asChild size="lg" className="h-16 px-10 text-lg rounded-full shadow-brand">
                <Link to="/signals">Explorer</Link>
              </Button>
              <Button asChild variant="ghost" size="lg" className="h-16 px-10 text-lg rounded-full">
                <Link to="/methodology">Méthode</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Flux de Signaux Épuré à l'extrême */}
      <section className="safe-shell mx-auto max-w-6xl pb-32">
        <div className="mb-16 flex items-baseline justify-between">
          <h2 className="font-display text-4xl font-bold tracking-tighter text-[#0B1020]">Signaux.</h2>
          <span className="z-micro-label">Temps Réel / 47,204 Analystes</span>
        </div>
        
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {featuredSignals.map((signal) => (
            <SignalCard key={signal.id} signal={signal} />
          ))}
        </div>

        <div className="mt-20 text-center">
          <Link to="/signals" className="group inline-flex items-center gap-4 text-xl font-bold tracking-tight text-primary">
            Accéder à l'intégralité du flux
            <ArrowRight className="h-6 w-6 transition-transform group-hover:translate-x-2" />
          </Link>
        </div>
      </section>

      {/* Section Puissance - Minimalisme Radical */}
      <section className="bg-[#0B1020] py-40 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] border border-white rounded-full" />
        </div>

        <div className="safe-shell mx-auto max-w-6xl relative z-10">
          <div className="max-w-3xl space-y-12">
            <span className="z-micro-label text-white/40">Algorithme Propriétaire</span>
            <h2 className="font-display text-6xl font-bold leading-tight tracking-tighter">
              La vérité n'est pas un consensus.<br />
              C'est une divergence mesurée.
            </h2>
            <div className="grid grid-cols-2 gap-12 pt-8">
              <div className="space-y-2">
                <p className="text-4xl font-bold tracking-tighter">99.8%</p>
                <p className="text-xs font-bold uppercase tracking-widest opacity-40">Précision de Signal</p>
              </div>
              <div className="space-y-2">
                <p className="text-4xl font-bold tracking-tighter">12ms</p>
                <p className="text-xs font-bold uppercase tracking-widest opacity-40">Latence de Calcul</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Minimaliste */}
      <footer className="safe-shell mx-auto max-w-6xl py-24">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2 font-display text-2xl font-bold">
              <img src="/brand/zawios-mark.svg" alt="ZAWIOS" className="h-8 w-8" />
              <span>ZAWIOS</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              Infrastructure mondiale de mesure de l'intelligence collective.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-20">
            <div className="space-y-4">
              <p className="z-micro-label">Navigation</p>
              <ul className="space-y-2 text-sm font-bold">
                <li><Link to="/signals" className="hover:text-primary transition-colors">Signaux</Link></li>
                <li><Link to="/leaderboard" className="hover:text-primary transition-colors">Classements</Link></li>
                <li><Link to="/methodology" className="hover:text-primary transition-colors">Méthode</Link></li>
              </ul>
            </div>
            <div className="space-y-4">
              <p className="z-micro-label">Légal</p>
              <ul className="space-y-2 text-sm font-bold">
                <li><Link to="/privacy" className="hover:text-primary transition-colors">Confidentialité</Link></li>
                <li><Link to="/terms" className="hover:text-primary transition-colors">Conditions</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-24 pt-8 border-t border-border flex justify-between items-center">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground/30">
            © 2026 ZAWIOS.IO — TOUS DROITS RÉSERVÉS
          </p>
          <div className="flex gap-4">
            <div className="h-2 w-2 rounded-full bg-success" />
            <span className="text-[9px] font-bold uppercase tracking-widest text-success">Système Opérationnel</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
