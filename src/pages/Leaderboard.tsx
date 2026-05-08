import { Medal, Trophy, Star } from "lucide-react";
import { topAnalysts } from "@/data/zawios";

export default function Leaderboard() {
  return (
    <div className="min-h-screen bg-[#F7F8FC] pb-32">
      <div className="safe-shell mx-auto max-w-6xl pt-20">
        {/* Header Monumental */}
        <div className="mb-20 space-y-4">
          <span className="z-micro-label">Performance Collective</span>
          <h1 className="font-display text-7xl font-bold tracking-tighter text-[#0B1020] md:text-8xl">Scores.</h1>
          <p className="text-2xl text-muted-foreground max-w-2xl tracking-tight">
            Les analystes les plus précis de l'infrastructure ZAWIOS. 
            La réputation se bâtit sur la durée et la nuance.
          </p>
        </div>

        {/* Top 3 Monumental */}
        <div className="grid gap-12 md:grid-cols-3 mb-24">
          {topAnalysts.slice(0, 3).map((a, i) => (
            <div key={a.username} className="group relative flex flex-col p-8 bg-white rounded-[32px] border border-border/50 transition-all hover:shadow-perspective">
              <div className="absolute -top-6 left-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-white shadow-lg">
                  {i === 0 ? <Trophy className="h-6 w-6" /> : <Medal className="h-6 w-6" />}
                </div>
              </div>
              <div className="mt-4 space-y-6">
                <div>
                  <p className="z-micro-label opacity-40">Rang {i + 1}</p>
                  <h2 className="font-display text-3xl font-bold tracking-tighter text-[#0B1020]">@{a.username}</h2>
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-bold text-primary">{a.badge}</p>
                  <p className="text-xs text-muted-foreground font-medium">{a.accuracy}% de précision historique</p>
                </div>
                <div className="pt-6 border-t border-border/50">
                  <p className="font-display text-5xl font-bold tracking-tighter text-[#0B1020]">{a.score}</p>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/40">Points de Réputation</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Liste Épurée */}
        <div className="space-y-4">
          <div className="px-8 mb-4 flex justify-between text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/30">
            <span>Analyste</span>
            <span>Score de Précision</span>
          </div>
          {topAnalysts.concat(topAnalysts).map((a, i) => (
            <div key={`${a.username}-${i}`} className="group flex items-center justify-between p-6 bg-white rounded-2xl border border-border/30 transition-all hover:border-primary/20">
              <div className="flex items-center gap-6">
                <span className="text-lg font-bold text-muted-foreground/20 w-6">{i + 1}</span>
                <div className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center text-primary">
                  <Star className="h-4 w-4" />
                </div>
                <div>
                  <p className="font-bold text-[#0B1020]">@{a.username}</p>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/40">{a.badge} · Streak {a.streak}j</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-display text-2xl font-bold text-[#0B1020]">{a.score}</p>
                <p className="text-[9px] font-bold uppercase tracking-widest text-success">{a.accuracy}% Accuracy</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
