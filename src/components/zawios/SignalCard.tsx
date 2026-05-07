import { Link } from "react-router-dom";
import { MessageCircle, Zap, Activity } from "lucide-react";
import type { Signal, VoteChoice } from "@/data/zawios";
import { Button } from "@/components/ui/button";
import { computeDivergenceIndex, getDivergenceLabel } from "@/lib/intelligence/signal-intelligence";

const voteMeta: Record<VoteChoice, { label: string; variant: "voteYes" | "voteNo" | "voteNeutral" }> = {
  yes: { label: "OUI", variant: "voteYes" },
  no: { label: "NON", variant: "voteNo" },
  neutral: { label: "—", variant: "voteNeutral" },
};

export function ResultBars({ signal }: { signal: Signal }) {
  return (
    <div className="space-y-2">
      <div className="flex h-1.5 overflow-hidden rounded-full bg-secondary/50">
        <span className="bg-success transition-all duration-1000 ease-out" style={{ width: `${signal.yes}%` }} />
        <span className="bg-destructive transition-all duration-1000 ease-out" style={{ width: `${signal.no}%` }} />
        <span className="bg-neutral-vote transition-all duration-1000 ease-out" style={{ width: `${signal.neutral}%` }} />
      </div>
      <div className="flex justify-between text-[9px] font-bold text-muted-foreground/60">
        <span className="flex items-center gap-1"><span className="h-1 w-1 rounded-full bg-success" /> {signal.yes}% OUI</span>
        <span className="flex items-center gap-1">{signal.no}% NON <span className="h-1 w-1 rounded-full bg-destructive" /></span>
      </div>
    </div>
  );
}

export function SignalCard({ signal, compact = false, onVote }: { signal: Signal; compact?: boolean; onVote?: (choice: VoteChoice) => void }) {
  const divergence = computeDivergenceIndex(signal.yes, signal.no);
  const { label: divLabel, color: divColor } = getDivergenceLabel(divergence);

  return (
    <article className="group relative flex flex-col bg-white p-6 rounded-2xl border border-border/50 transition-all duration-300 hover:border-primary/30 hover:shadow-perspective overflow-hidden">
      {/* Vitality Indicator: Animated background pulse for trending signals */}
      {signal.trend === "Trending" && (
        <div className="absolute top-0 right-0 p-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
        </div>
      )}

      <div className="mb-4 flex items-center justify-between text-[9px] font-bold uppercase tracking-[0.2em]">
        <div className="flex items-center gap-2">
          <span className="text-muted-foreground/40">{signal.category}</span>
          <span className="h-1 w-1 rounded-full bg-border" />
          <span className="flex items-center gap-1 text-primary">
            <Activity className="h-3 w-3" />
            {signal.region}
          </span>
        </div>
        <span className="flex items-center gap-1 text-muted-foreground/40">
          <MessageCircle className="h-3 w-3" />
          {signal.votes.toLocaleString()}
        </span>
      </div>

      <Link to={`/signals/${signal.slug}`} className="mb-6 block flex-1">
        <h2 className="font-display text-lg font-bold leading-tight text-[#0B1020] group-hover:text-primary transition-colors">
          {signal.title.fr}
        </h2>
      </Link>

      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-1">
            <span className="text-[8px] font-bold uppercase tracking-widest text-muted-foreground/50">Indice de Divergence</span>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold" style={{ color: divColor }}>{divergence}</span>
              <span className="text-[9px] font-medium text-muted-foreground/60">{divLabel}</span>
            </div>
          </div>
          {signal.tension > 70 && (
            <div className="flex items-center gap-1 rounded-full bg-destructive/5 px-2 py-0.5 text-[9px] font-bold text-destructive">
              <Zap className="h-3 w-3" />
              TENSION ÉLEVÉE
            </div>
          )}
        </div>

        <ResultBars signal={signal} />
        
        <div className="grid grid-cols-3 gap-2">
          {(Object.keys(voteMeta) as VoteChoice[]).map((choice) => (
            <Button 
              key={choice} 
              variant={voteMeta[choice].variant} 
              size="sm" 
              className="h-10 text-[10px] font-bold border-none transition-transform active:scale-95"
              onClick={(e) => {
                e.preventDefault();
                onVote?.(choice);
              }}
            >
              {voteMeta[choice].label}
            </Button>
          ))}
        </div>
      </div>
    </article>
  );
}
