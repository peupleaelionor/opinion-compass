import { Link } from "react-router-dom";
import { ArrowRight, Globe2, Sparkles, UsersRound, BarChart3, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BrandBackdrop } from "@/components/zawios/BrandBackdrop";
import { signals } from "@/data/zawios";
import { SignalCard } from "@/components/zawios/SignalCard";

const Index = () => {
  const featuredSignals = signals.slice(0, 3);

  return (
    <div className="relative min-h-screen bg-[#F7F8FC]">
      <BrandBackdrop />
      
      {/* Hero Section */}
      <section className="safe-shell relative mx-auto max-w-6xl pt-16 pb-24 text-center md:pt-24 md:pb-32">
        <div className="animate-rise-in space-y-8">
          <div className="flex justify-center">
            <div className="z-pill bg-white/80 px-4 py-1.5 shadow-soft backdrop-blur-md">
              <span className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.15em] text-primary">
                <Sparkles className="h-3.5 w-3.5" />
                Intelligence Collective Mondiale
              </span>
            </div>
          </div>
          
          <div className="space-y-4">
            <h1 className="mx-auto max-w-4xl font-display text-5xl font-bold leading-[1.1] tracking-tight text-[#0B1020] md:text-7xl">
              Analyse collective mondiale.<br />
              <span className="text-primary">Compare. Décide. Anticipe.</span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              ZAWIOS mesure l'intelligence collective mondiale sur les sujets qui façonnent nos vies. 
              Sans bruit. Sans manipulation. Avec clarté, nuance et impact.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="h-14 px-8 text-base shadow-brand">
              <Link to="/signals" className="flex items-center gap-2">
                Explorer les signaux <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-14 px-8 text-base bg-white">
              <Link to="/methodology">Voir la méthodologie</Link>
            </Button>
          </div>

          <div className="flex items-center justify-center gap-8 pt-8">
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold text-[#0B1020]">47,000+</span>
              <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Analystes actifs</span>
            </div>
            <div className="h-8 w-px bg-border" />
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold text-[#0B1020]">94</span>
              <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Pays représentés</span>
            </div>
            <div className="h-8 w-px bg-border" />
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold text-[#0B1020]">24/7</span>
              <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">En temps réel</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Signals */}
      <section className="safe-shell mx-auto max-w-6xl pb-24">
        <div className="mb-12 flex items-end justify-between">
          <div className="space-y-2">
            <span className="z-micro-label">Signal du moment</span>
            <h2 className="font-display text-3xl font-bold text-[#0B1020]">En direct</h2>
          </div>
          <Button asChild variant="link" className="text-primary font-bold">
            <Link to="/signals" className="flex items-center gap-1">
              Voir tout <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
        
        <div className="grid gap-6 md:grid-cols-3">
          {featuredSignals.map((signal) => (
            <SignalCard key={signal.id} signal={signal} />
          ))}
        </div>
      </section>

      {/* Methodology / Pillars */}
      <section className="bg-white py-24 border-y border-border">
        <div className="safe-shell mx-auto max-w-6xl">
          <div className="mb-16 text-center space-y-4">
            <span className="z-micro-label">Méthodologie</span>
            <h2 className="font-display text-4xl font-bold text-[#0B1020]">Trois piliers.</h2>
          </div>
          
          <div className="grid gap-12 md:grid-cols-3">
            <div className="space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <BarChart3 className="h-6 w-6" />
              </div>
              <h3 className="font-display text-xl font-bold text-[#0B1020]">01. Signal structuré</h3>
              <p className="text-muted-foreground leading-relaxed">
                Chaque vote est accompagné d'un contexte analytique. Les données brutes deviennent une position argumentée, traçable et comparable.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3 className="font-display text-xl font-bold text-[#0B1020]">02. Réputation pondérée</h3>
              <p className="text-muted-foreground leading-relaxed">
                La précision historique de chaque analyste pondère l'impact de son signal. Plus tu es exact, plus ton vote compte.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Globe2 className="h-6 w-6" />
              </div>
              <h3 className="font-display text-xl font-bold text-[#0B1020]">03. Corrélation comparative</h3>
              <p className="text-muted-foreground leading-relaxed">
                Les signaux sont agrégés par région, catégorie et période. La divergence entre zones géographiques est mesurée et exposée.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="safe-shell mx-auto max-w-6xl py-24 text-center">
        <div className="z-card bg-primary p-12 md:p-20 space-y-8 overflow-hidden relative">
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
          <div className="relative z-10 space-y-4">
            <h2 className="font-display text-4xl font-bold text-white">
              Commence à construire ta réputation.
            </h2>
            <p className="text-primary-foreground/80 text-lg max-w-xl mx-auto">
              Rejoins 47 000 analystes qui votent chaque jour pour décrypter les signaux du monde.
            </p>
            <div className="pt-4">
              <Button asChild size="lg" variant="secondary" className="h-14 px-10 text-base bg-white text-primary hover:bg-white/90">
                <Link to="/signup">Commencer gratuitement</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
