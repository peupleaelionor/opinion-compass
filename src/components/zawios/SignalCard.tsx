import { Link } from "react-router-dom";
import { MessageCircle } from "lucide-react";
import type { Signal, VoteChoice } from "@/data/zawios";
import { Button } from "@/components/ui/button";

const voteMeta: Record<VoteChoice, { label: string; variant: "voteYes" | "voteNo" | "voteNeutral" }> = {
  yes: { label: "OUI", variant: "voteYes" },
  no: { label: "NON", variant: "voteNo" },
  neutral: { label: "—", variant: "voteNeutral" },
};

export function ResultBars({ signal }: { signal: Signal }) {
  return (
    <div className="space-y-2">
      <div className="flex h-1.5 overflow-hidden rounded-full bg-secondary/50">
        <span className="bg-success" style={{ width: `${signal.yes}%` }} />
        <span className="bg-destructive" style={{ width: `${signal.no}%` }} />
        <span className="bg-neutral-vote" style={{ width: `${signal.neutral}%` }} />
      </div>
      <div className="flex justify-between text-[9px] font-bold text-muted-foreground/60">
        <span>{signal.yes}% OUI</span>
        <span>{signal.no}% NON</span>
      </div>
    </div>
  );
}

export function SignalCard({ signal, compact = false, onVote }: { signal: Signal; compact?: boolean; onVote?: (choice: VoteChoice) => void }) {
  return (
    <article className="group relative flex flex-col bg-white p-6 rounded-2xl border border-border/50 transition-all hover:border-primary/20 hover:shadow-soft">
      <div className="mb-4 flex items-center justify-between text-[9px] font-bold uppercase tracking-[0.2em] text-muted-foreground/40">
        <span>{signal.category}</span>
        <span className="flex items-center gap-1">
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
        <ResultBars signal={signal} />
        
        <div className="grid grid-cols-3 gap-2">
          {(Object.keys(voteMeta) as VoteChoice[]).map((choice) => (
            <Button 
              key={choice} 
              variant={voteMeta[choice].variant} 
              size="sm" 
              className="h-9 text-[10px] font-bold border-none"
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
