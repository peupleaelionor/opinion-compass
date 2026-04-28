import { Link } from "react-router-dom";
import { ArrowRight, Copy, Globe2, Sparkles, UsersRound } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BrandBackdrop } from "@/components/zawios/BrandBackdrop";
import { LocaleSwitch } from "@/components/zawios/LocaleSwitch";
import { signals, topAnalysts } from "@/data/zawios";
import atlasImage from "@/assets/zawios-perspective-atlas.png";

const Index = () => {
  const featured = signals[0];
  return (
    <div className="relative pb-24 md:pb-10"><BrandBackdrop />
      <section className="safe-shell mx-auto grid min-h-[calc(100vh-4rem)] max-w-6xl content-start gap-8 py-7 md:grid-cols-[0.98fr_1.02fr] md:items-center md:py-12">
        <div className="animate-rise-in">
          <div className="mb-6 flex items-center gap-3"><span className="z-pill"><Sparkles className="mr-1 h-3.5 w-3.5" />Mesurer le futur sans crier</span><LocaleSwitch /></div>
          <div className="mb-5 flex items-center gap-4">
            <img src="/brand/zawios-mark.svg" alt="Marque ZAWIOS" className="h-14 w-14 rounded-2xl shadow-card" />
            <span className="z-micro-label">Opinion signals / reputation layer</span>
          </div>
          <h1 className="max-w-3xl font-display text-5xl font-bold leading-[0.96] tracking-normal text-foreground md:text-7xl">ZAWIOS</h1>
          <p className="mt-5 max-w-xl text-lg leading-8 text-muted-foreground">Votez sur des signaux d’actualité, comparez votre lecture à la foule et bâtissez une réputation de précision, de nuance et de cohérence.</p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row"><Button asChild variant="hero" size="lg"><Link to="/signals">Explorer les signaux <ArrowRight /></Link></Button><Button asChild variant="outline" size="lg"><Link to="/onboarding">Commencer en invité</Link></Button></div>
          <div className="mt-8 grid max-w-xl grid-cols-3 gap-3">
            {[["70", "signaux"], ["25+", "seuil régional"], ["FR/EN", "bilingue"]].map(([value, label]) => <div key={label} className="z-glass p-3"><p className="font-display text-xl font-bold text-primary">{value}</p><p className="text-xs font-bold text-muted-foreground">{label}</p></div>)}
          </div>
        </div>
        <div className="space-y-4 animate-rise-in md:pt-10">
          <div className="z-perspective relative min-h-[18rem] overflow-hidden rounded-lg border border-line bg-card shadow-perspective md:min-h-[23rem]">
            <img src={atlasImage} alt="Atlas visuel ZAWIOS en perspective" className="absolute inset-0 h-full w-full object-cover" width={1600} height={1120} />
            <div className="absolute inset-0 bg-gradient-to-t from-background/92 via-background/20 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 z-glass p-4">
              <div className="mb-3 flex items-center justify-between gap-3"><span className="z-micro-label">Live atlas</span><span className="z-pill">+{featured.tension} tension</span></div>
              <h2 className="font-display text-lg font-bold leading-snug md:text-xl">{featured.title.fr}</h2>
              <div className="mt-4 flex h-2 overflow-hidden rounded-full bg-secondary"><span className="bg-success" style={{ width: `${featured.yes}%` }} /><span className="bg-destructive" style={{ width: `${featured.no}%` }} /><span className="bg-neutral-vote" style={{ width: `${featured.neutral}%` }} /></div>
            </div>
          </div>
          <div className="z-card p-4"><div className="mb-3 flex items-center justify-between"><h2 className="font-display text-lg font-bold">Top analysts</h2><Button asChild variant="ghost" size="sm"><Link to="/leaderboard">Voir</Link></Button></div><div className="space-y-2">{topAnalysts.slice(0,3).map((a, i) => <div key={a.username} className="flex min-h-12 items-center justify-between rounded-lg bg-surface px-3"><span className="font-semibold">{i + 1}. {a.username}</span><span className="text-sm font-bold text-primary">{a.score}</span></div>)}</div></div>
        </div>
      </section>
      <section className="safe-shell mx-auto grid max-w-6xl gap-4 pb-10 md:grid-cols-3">
        <div className="z-card p-5"><Globe2 className="mb-3 h-5 w-5 text-primary" /><h2 className="font-display text-xl font-bold">World View sûr</h2><p className="mt-2 text-sm leading-6 text-muted-foreground">Comparaison régionale en opt-in, avec seuil minimum avant affichage des divergences.</p></div>
        <div className="z-card p-5"><Copy className="mb-3 h-5 w-5 text-primary" /><h2 className="font-display text-xl font-bold">Partage viral</h2><p className="mt-2 text-sm leading-6 text-muted-foreground">Cartes propres avec résultat, pourcentage et badge réputation, prêtes pour l’OG.</p></div>
        <div className="z-card p-5"><UsersRound className="mb-3 h-5 w-5 text-primary" /><h2 className="font-display text-xl font-bold">Communauté calme</h2><p className="mt-2 text-sm leading-6 text-muted-foreground">Mini-avis, commentaires, likes et report avec garde-fous non toxiques.</p></div>
      </section>
    </div>
  );
};
export default Index;
