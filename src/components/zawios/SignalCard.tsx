import { Link } from "react-router-dom";
import { MessageCircle } from "lucide-react";
import type { Signal, VoteChoice } from "@/data/zawios";
import { Button } from "@/components/ui/button";
import { computeDivergenceIndex } from "@/lib/intelligence/signal-intelligence";

const voteMeta: Record<VoteChoice, { label: string; variant: "voteYes" | "voteNo" | "voteNeutral" }> = {
  yes: { label: "OUI", variant: "voteYes" },
  no: { label: "NON", variant: "voteNo" },
  neutral: { label: "—", variant: "voteNeutral" },
};

export function ResultBars({ signal }: { signal: Signal }) {
  return (
    <div className="space-y-3">
      <div className="flex h-1 overflow-hidden rounded-full bg-secondary/30">
        <span className="bg-primary transition-all duration-1000" style={{ width: `${signal.yes}%` }} />
        <span className="bg-destructive/40" style={{ width: `${signal.no}%` }} />
        <span className="bg-neutral-vote/20" style={{ width: `${signal.neutral}%` }} />
      </div>
      <div className="flex justify-between text-[10px] font-bold tracking-tighter text-muted-foreground/40">
        <span>{signal.yes}% AFFIRMATIF</span>
        <span>{signal.no}% NÉGATIF</span>
      </div>
    </div>
  );
}

export function SignalCard({ signal, compact = false, onVote }: { signal: Signal; compact?: boolean; onVote?: (choice: VoteChoice) => void }) {
  const divergence = computeDivergenceIndex(signal.yes, signal.no);

  return (
    <article className="group flex flex-col transition-all duration-500">
      <div className="mb-6 flex items-center justify-between">
        <span className="z-micro-label">Signal {signal.id.replace("sig-", "").padStart(2, "0")}</span>
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-bold text-primary">{divergence}</span>
          <div className="h-px w-4 bg-primary/20" />
        </div>
      </div>

      <Link to={`/signals/${signal.slug}`} className="mb-8 block flex-1">
        <h2 className="font-display text-2xl font-bold leading-[1.1] tracking-tighter text-[#0B1020] group-hover:text-primary transition-colors">
          {signal.title.fr}
        </h2>
      </Link>

      <div className="space-y-8">
        <ResultBars signal={signal} />
        
        <div className="flex items-center justify-between border-t border-border/50 pt-6">
          <div className="flex items-center gap-4 text-[10px] font-bold text-muted-foreground/40">
            <span className="flex items-center gap-1">
              <MessageCircle className="h-3 w-3" />
              {signal.votes.toLocaleString()}
            </span>
            <span>{signal.category}</span>
          </div>
          <div className="flex gap-1">
            {(Object.keys(voteMeta) as VoteChoice[]).map((choice) => (
              <Button 
                key={choice} 
                variant="ghost"
                size="sm" 
                className="h-8 px-3 text-[10px] font-bold hover:bg-primary hover:text-white rounded-full transition-all"
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
      </div>
    </article>
  );
}
