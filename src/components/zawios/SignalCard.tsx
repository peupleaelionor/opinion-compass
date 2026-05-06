import { Link } from "react-router-dom";
import { Clock, Gauge, MessageCircle, Sparkle } from "lucide-react";
import type { Signal, VoteChoice } from "@/data/zawios";
import { Button } from "@/components/ui/button";

const voteMeta: Record<VoteChoice, { label: string; variant: "voteYes" | "voteNo" | "voteNeutral" }> = {
  yes: { label: "OUI", variant: "voteYes" },
  no: { label: "NON", variant: "voteNo" },
  neutral: { label: "TROP TÔT", variant: "voteNeutral" },
};

export function ResultBars({ signal }: { signal: Signal }) {
  return (
    <div className="space-y-3" aria-label="Répartition des votes">
      <div className="flex h-3 overflow-hidden rounded-full bg-secondary/50">
        <span className="bg-success transition-all duration-500" style={{ width: `${signal.yes}%` }} />
        <span className="bg-destructive transition-all duration-500" style={{ width: `${signal.no}%` }} />
        <span className="bg-neutral-vote transition-all duration-500" style={{ width: `${signal.neutral}%` }} />
      </div>
      <div className="flex justify-between text-[11px] font-bold uppercase tracking-wider">
        <span className="text-success">{signal.yes}% OUI</span>
        <span className="text-neutral-vote">{signal.neutral}% —</span>
        <span className="text-destructive">{signal.no}% NON</span>
      </div>
    </div>
  );
}

export function SignalCard({ signal, compact = false, onVote }: { signal: Signal; compact?: boolean; onVote?: (choice: VoteChoice) => void }) {
  return (
    <article className="z-card group relative flex flex-col overflow-hidden p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-perspective bg-white">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
          <span className="z-micro-label text-primary">Signal {signal.id.replace("sig-", "").padStart(2, "0")}</span>
        </div>
        <span className="z-pill bg-primary/5 text-primary border-none text-[10px] font-bold">
          <Sparkle className="mr-1 h-3 w-3" />
          {signal.trend}
        </span>
      </div>

      <div className="mb-4 flex flex-wrap gap-2">
        <span className="z-pill bg-[#F1F3FA] text-[#475569] border-none">{signal.category}</span>
        <span className="z-pill bg-[#F1F3FA] text-[#475569] border-none">{signal.region}</span>
        <span className="z-pill bg-[#F1F3FA] text-[#475569] border-none">
          <Clock className="mr-1.5 h-3 w-3" />
          {signal.horizon}
        </span>
      </div>

      <Link to={`/signals/${signal.slug}`} className="mb-4 block flex-1">
        <h2 className="font-display text-xl font-bold leading-tight text-[#0B1020] group-hover:text-primary transition-colors">
          {signal.title.fr}
        </h2>
        {!compact && (
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground line-clamp-2">
            {signal.summary.fr}
          </p>
        )}
      </Link>

      <div className="mt-auto space-y-6">
        <ResultBars signal={signal} />
        
        <div className="flex items-center justify-between border-t border-border pt-4 text-[11px] font-bold uppercase tracking-widest text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <Gauge className="h-3.5 w-3.5" />
            Tension {signal.tension}
          </span>
          <span className="flex items-center gap-1.5">
            <MessageCircle className="h-3.5 w-3.5" />
            {signal.votes.toLocaleString("fr-FR")} votes
          </span>
        </div>

        <div className="grid grid-cols-3 gap-2">
          {(Object.keys(voteMeta) as VoteChoice[]).map((choice) => (
            <Button 
              key={choice} 
              variant={voteMeta[choice].variant} 
              size="sm" 
              className="h-10 text-[11px] font-bold"
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
