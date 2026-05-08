import { useMemo, useState } from "react";
import { SlidersHorizontal, CheckCircle2 } from "lucide-react";
import { SignalCard } from "@/components/zawios/SignalCard";
import { signals, type Category, type Region, type VoteChoice } from "@/data/zawios";
import { Button } from "@/components/ui/button";

const feedFilters = ["Trending", "Nouveau", "Résolus", "Tension élevée"] as const;
const regions: Region[] = ["Monde", "Afrique", "Europe", "France", "USA"];
const categories: Category[] = ["News", "Tech", "Business", "Crypto", "Sport", "Culture", "Société"];

export default function Signals() {
  const [feed, setFeed] = useState<(typeof feedFilters)[number]>("Trending");
  const [region, setRegion] = useState<Region | "Toutes">("Toutes");
  const [category, setCategory] = useState<Category | "Toutes">("Toutes");
  const [feedback, setFeedback] = useState<string>("");

  const filtered = useMemo(() => 
    signals.filter((s) => 
      (feed === "Trending" ? true : s.trend === feed) && 
      (region === "Toutes" || s.region === region) && 
      (category === "Toutes" || s.category === category)
    ).slice(0, 24), 
  [feed, region, category]);

  const vote = (choice: VoteChoice) => {
    const messages = {
      yes: "Position enregistrée. Alignement avec la tendance majoritaire.",
      no: "Position enregistrée. Signal de divergence comptabilisé.",
      neutral: "Abstention notée. Données insuffisantes pour conclure."
    };
    setFeedback(messages[choice]);
    setTimeout(() => setFeedback(""), 3000);
  };

  return (
    <div className="min-h-screen bg-[#F7F8FC] pb-32">
      <div className="safe-shell mx-auto max-w-6xl pt-20">
        {/* Header Monumental */}
        <div className="mb-16 space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-2">
              <span className="z-micro-label">Flux de Données</span>
              <h1 className="font-display text-6xl font-bold tracking-tighter text-[#0B1020]">Signaux.</h1>
            </div>
            {feedback && (
              <div className="animate-rise-in flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-[11px] font-bold text-white shadow-lg">
                <CheckCircle2 className="h-3.5 w-3.5" />
                {feedback}
              </div>
            )}
          </div>
          
          {/* Filtres Épurés */}
          <div className="flex flex-wrap gap-8 border-b border-border/50 pb-8">
            <div className="space-y-3">
              <p className="z-micro-label opacity-40">État</p>
              <div className="flex gap-2">
                {feedFilters.map((f) => (
                  <button 
                    key={f} 
                    onClick={() => setFeed(f)}
                    className={`text-[11px] font-bold uppercase tracking-widest transition-colors ${feed === f ? "text-primary" : "text-muted-foreground/40 hover:text-foreground"}`}
                  >
                    {f}
                  </button>
                ))}
              </div>
            </div>
            <div className="h-12 w-px bg-border/50" />
            <div className="space-y-3">
              <p className="z-micro-label opacity-40">Région</p>
              <div className="flex gap-2">
                <button 
                  onClick={() => setRegion("Toutes")}
                  className={`text-[11px] font-bold uppercase tracking-widest transition-colors ${region === "Toutes" ? "text-primary" : "text-muted-foreground/40 hover:text-foreground"}`}
                >
                  Toutes
                </button>
                {regions.map((r) => (
                  <button 
                    key={r} 
                    onClick={() => setRegion(r)}
                    className={`text-[11px] font-bold uppercase tracking-widest transition-colors ${region === r ? "text-primary" : "text-muted-foreground/40 hover:text-foreground"}`}
                  >
                    {r}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Grille de Signaux */}
        {filtered.length ? (
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((signal) => (
              <SignalCard key={signal.id} signal={signal} onVote={vote} />
            ))}
          </div>
        ) : (
          <div className="py-32 text-center space-y-4">
            <h2 className="font-display text-3xl font-bold tracking-tighter text-[#0B1020]">Aucun signal détecté.</h2>
            <p className="text-muted-foreground">Ajustez vos filtres pour explorer d'autres segments.</p>
            <Button variant="outline" onClick={() => { setFeed("Trending"); setRegion("Toutes"); setCategory("Toutes"); }}>
              Réinitialiser
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
