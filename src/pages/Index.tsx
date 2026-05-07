import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Zap, Globe2, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { signals } from "@/data/zawios";
import { SignalCard } from "@/components/zawios/SignalCard";

const Index = () => {
  const featuredSignals = signals.slice(0, 6);

  return (
    <div className="min-h-screen bg-[#F7F8FC]">
      {/* Hero Section Vibrante */}
      <section className="safe-shell relative mx-auto max-w-5xl pt-24 pb-20 text-center overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-30">
          <div className="absolute top-10 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-slow-float" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-slow-float" style={{ animationDelay: '2s' }} />
        </div>

        <div className="animate-rise-in space-y-8">
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 shadow-soft border border-border/50">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-success"></span>
              </span>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#0B1020]">
                Live: 1,240 votes cette heure
              </span>
            </div>
          </div>
          
          <h1 className="mx-auto max-w-4xl font-display text-6xl font-bold leading-[1.05] tracking-tight text-[#0B1020] md:text-8xl">
            Comprendre <span className="text-primary">ensemble.</span><br />
            Décider <span className="text-primary">mieux.</span>
          </h1>
          
          <p className="mx-auto max-w-2xl text-xl text-muted-foreground leading-relaxed">
            ZAWIOS est l'infrastructure de mesure de l'intelligence collective. 
            Détectez les signaux faibles, mesurez la divergence et bâtissez votre réputation.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row pt-4">
            <Button asChild size="lg" className="h-14 px-10 text-base shadow-brand group">
              <Link to="/signals" className="flex items-center gap-2">
                Explorer les signaux 
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-14 px-10 text-base bg-white">
              <Link to="/methodology">Méthodologie</Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 max-w-3xl mx-auto">
            <div className="flex flex-col items-center gap-1">
              <span className="text-2xl font-bold text-[#0B1020]">47K</span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60">Analystes</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <span className="text-2xl font-bold text-[#0B1020]">94</span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60">Pays</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <span className="text-2xl font-bold text-[#0B1020]">1.5M</span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60">Signaux</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <span className="text-2xl font-bold text-[#0B1020]">24/7</span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60">Live Feed</span>
            </div>
          </div>
        </div>
      </section>

      {/* Flux de Signaux avec Vitalité */}
      <section className="safe-shell mx-auto max-w-6xl pb-24">
        <div className="mb-12 flex items-end justify-between border-b border-border pb-6">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-primary">
              <TrendingUp className="h-4 w-4" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Signaux Actifs</span>
            </div>
            <h2 className="font-display text-3xl font-bold text-[#0B1020]">Intelligence en direct</h2>
          </div>
          <Link to="/signals" className="group flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary">
            Voir tout le flux
            <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredSignals.map((signal) => (
            <SignalCard key={signal.id} signal={signal} />
          ))}
        </div>
      </section>

      {/* Section "Startup Sérieuse" - Preuve de concept */}
      <section className="bg-white py-24 border-y border-border">
        <div className="safe-shell mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-lg bg-primary/5 px-3 py-1 text-primary">
                <Zap className="h-4 w-4" />
                <span className="text-xs font-bold uppercase tracking-wider">Technologie ZAWIOS</span>
              </div>
              <h2 className="font-display text-4xl font-bold text-[#0B1020] leading-tight">
                Une mesure objective de la divergence.
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Notre algorithme de "Signal Intelligence" calcule en temps réel la tension intellectuelle sur chaque sujet. 
                Nous ne cherchons pas le consensus, nous mesurons la vérité là où elle diverge.
              </p>
              <ul className="space-y-4 pt-4">
                {[
                  "Indice de divergence propriétaire",
                  "Pondération par réputation historique",
                  "Détection de signaux faibles par IA",
                  "Transparence totale des données"
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm font-semibold text-[#0B1020]">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="z-card bg-[#F7F8FC] p-8 space-y-6 border-2 border-primary/10">
                <div className="flex items-center justify-between">
                  <span className="z-micro-label">Visualisation de Tension</span>
                  <Globe2 className="h-5 w-5 text-primary/40" />
                </div>
                <div className="h-48 flex items-end gap-2">
                  {[40, 70, 45, 90, 65, 80, 35, 60].map((h, i) => (
                    <div 
                      key={i} 
                      className="flex-1 bg-primary/20 rounded-t-sm transition-all hover:bg-primary" 
                      style={{ height: `${h}%` }} 
                    />
                  ))}
                </div>
                <div className="pt-4 border-t border-border flex justify-between items-center">
                  <span className="text-xs font-bold text-muted-foreground">Moyenne Mondiale</span>
                  <span className="text-xl font-bold text-primary">74.2</span>
                </div>
              </div>
              {/* Floating element for "vibrant" look */}
              <div className="absolute -bottom-6 -right-6 z-card bg-primary text-white p-6 shadow-xl animate-slow-float">
                <p className="text-[10px] font-bold uppercase tracking-widest opacity-80">Précision</p>
                <p className="text-2xl font-bold">99.8%</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Startup */}
      <footer className="safe-shell mx-auto max-w-5xl py-20">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2 font-display text-xl font-bold">
            <img src="/brand/zawios-mark.svg" alt="ZAWIOS" className="h-8 w-8" />
            <span>ZAWIOS</span>
          </div>
          <div className="flex gap-8 text-[11px] font-bold uppercase tracking-widest text-muted-foreground">
            <Link to="/signals" className="hover:text-primary transition-colors">Signaux</Link>
            <Link to="/leaderboard" className="hover:text-primary transition-colors">Classements</Link>
            <Link to="/methodology" className="hover:text-primary transition-colors">Méthodologie</Link>
            <Link to="/support" className="hover:text-primary transition-colors">Support</Link>
          </div>
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/40">
            © 2026 ZAWIOS.IO — Infrastructure de Vérité
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
