import { useMemo, useState } from "react";
import { SlidersHorizontal } from "lucide-react";
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
  const filtered = useMemo(() => signals.filter((s) => (feed === "Trending" ? true : s.trend === feed) && (region === "Toutes" || s.region === region) && (category === "Toutes" || s.category === category)).slice(0, 24), [feed, region, category]);
  const vote = (choice: VoteChoice) => setFeedback(choice === "neutral" ? "Abstention comptabilisée. Votre nuance reste utile." : choice === "yes" ? "Vote enregistré. Vous êtes proche de la majorité actuelle." : "Vote enregistré. Position minoritaire mais signal fort.");
  return <div className="safe-shell mx-auto max-w-6xl pb-24 pt-6 md:pb-12"><div className="mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between"><div><span className="z-pill"><SlidersHorizontal className="mr-1 h-3.5 w-3.5" />Feed structuré</span><h1 className="mt-3 font-display text-4xl font-bold md:text-5xl">Signals</h1><p className="mt-2 max-w-2xl text-muted-foreground">Questions d’actualité filtrées par tension, région et catégorie.</p></div>{feedback && <div className="z-card max-w-sm border-primary/30 bg-brand-soft p-3 text-sm font-semibold text-primary">{feedback}</div>}</div><div className="mb-5 space-y-3"><div className="flex gap-2 overflow-x-auto pb-1">{feedFilters.map((f) => <Button key={f} variant={feed === f ? "default" : "outline"} size="sm" onClick={() => setFeed(f)}>{f}</Button>)}</div><div className="flex gap-2 overflow-x-auto pb-1"><Button variant={region === "Toutes" ? "default" : "outline"} size="sm" onClick={() => setRegion("Toutes")}>Toutes régions</Button>{regions.map((r) => <Button key={r} variant={region === r ? "default" : "outline"} size="sm" onClick={() => setRegion(r)}>{r}</Button>)}</div><div className="flex gap-2 overflow-x-auto pb-1"><Button variant={category === "Toutes" ? "default" : "outline"} size="sm" onClick={() => setCategory("Toutes")}>Toutes catégories</Button>{categories.map((c) => <Button key={c} variant={category === c ? "default" : "outline"} size="sm" onClick={() => setCategory(c)}>{c}</Button>)}</div></div>{filtered.length ? <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">{filtered.map((signal) => <SignalCard key={signal.id} signal={signal} onVote={vote} />)}</div> : <div className="z-card p-8 text-center"><h2 className="font-display text-2xl font-bold">Aucun signal</h2><p className="mt-2 text-muted-foreground">Essayez un filtre moins strict.</p></div>}</div>;
}
