import { Link } from "react-router-dom";
import { Clock, Gauge, MessageCircle } from "lucide-react";
import type { Signal, VoteChoice } from "@/data/zawios";
import { Button } from "@/components/ui/button";

const voteMeta: Record<VoteChoice, { label: string; variant: "voteYes" | "voteNo" | "voteNeutral" }> = {
  yes: { label: "OUI", variant: "voteYes" },
  no: { label: "NON", variant: "voteNo" },
  neutral: { label: "TROP TÔT", variant: "voteNeutral" },
};

export function ResultBars({ signal }: { signal: Signal }) {
  return (
    <div className="space-y-2" aria-label="Répartition des votes">
      <div className="flex h-2.5 overflow-hidden rounded-full bg-secondary">
        <span className="bg-success" style={{ width: `${signal.yes}%` }} />
        <span className="bg-destructive" style={{ width: `${signal.no}%` }} />
        <span className="bg-neutral-vote" style={{ width: `${signal.neutral}%` }} />
      </div>
      <div className="grid grid-cols-3 gap-2 text-xs font-bold text-muted-foreground">
        <span className="text-success">Oui {signal.yes}%</span>
        <span className="text-destructive">Non {signal.no}%</span>
        <span className="text-neutral-vote">Trop tôt {signal.neutral}%</span>
      </div>
    </div>
  );
}

export function SignalCard({ signal, compact = false, onVote }: { signal: Signal; compact?: boolean; onVote?: (choice: VoteChoice) => void }) {
  return (
    <article className="z-card group overflow-hidden p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-soft">
      <div className="mb-3 flex flex-wrap items-center gap-2">
        <span className="z-pill">{signal.category}</span><span className="z-pill">{signal.region}</span><span className="z-pill"><Clock className="mr-1 h-3.5 w-3.5" />{signal.horizon}</span>
      </div>
      <Link to={`/signals/${signal.slug}`} className="block rounded-lg">
        <h2 className="font-display text-lg font-bold leading-snug tracking-normal text-foreground group-hover:text-primary">{signal.title.fr}</h2>
        {!compact && <p className="mt-2 text-sm leading-6 text-muted-foreground">{signal.summary.fr}</p>}
      </Link>
      <div className="mt-4"><ResultBars signal={signal} /></div>
      <div className="mt-4 flex items-center justify-between gap-3 text-xs font-semibold text-muted-foreground">
        <span className="inline-flex items-center gap-1"><Gauge className="h-4 w-4" />Tension {signal.tension}</span>
        <span className="inline-flex items-center gap-1"><MessageCircle className="h-4 w-4" />{signal.votes.toLocaleString("fr-FR")} votes</span>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-2">
        {(Object.keys(voteMeta) as VoteChoice[]).map((choice) => <Button key={choice} variant={voteMeta[choice].variant} size="sm" onClick={() => onVote?.(choice)}>{voteMeta[choice].label}</Button>)}
      </div>
    </article>
  );
}
