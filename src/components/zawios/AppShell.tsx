import { Link, NavLink, Outlet } from "react-router-dom";
import { BarChart3, Home, Search, ShieldCheck, Trophy, UsersRound } from "lucide-react";
import { Button } from "@/components/ui/button";

const nav = [
  { to: "/", label: "Home", icon: Home },
  { to: "/signals", label: "Signals", icon: BarChart3 },
  { to: "/leaderboard", label: "Scores", icon: Trophy },
  { to: "/support", label: "Support", icon: UsersRound },
];

export function AppShell() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <header className="sticky top-0 z-40 border-b border-line bg-background/86 backdrop-blur-xl supports-[backdrop-filter]:bg-background/72">
        <div className="safe-shell mx-auto flex h-16 max-w-6xl items-center justify-between gap-3">
          <Link to="/" className="flex min-h-11 items-center gap-2 rounded-lg font-display text-lg font-bold tracking-normal">
            <img src="/brand/zawios-mark.svg" alt="ZAWIOS" className="h-8 w-8 rounded-lg" />
            ZAWIOS
          </Link>
          <div className="hidden items-center gap-1 md:flex">
            {nav.map((item) => (
              <NavLink key={item.to} to={item.to} className={({ isActive }) => `rounded-lg px-3 py-2 text-sm font-semibold transition-colors ${isActive ? "bg-secondary text-foreground" : "text-muted-foreground hover:bg-secondary hover:text-foreground"}`}>{item.label}</NavLink>
            ))}
          </div>
          <div className="hidden items-center gap-2 sm:flex">
            <div className="hidden h-10 items-center gap-2 rounded-lg border border-line bg-surface px-3 text-sm font-semibold text-muted-foreground lg:flex"><Search className="h-4 w-4" /> Rechercher</div>
            <Button asChild variant="outline" size="sm"><Link to="/admin"><ShieldCheck /> Admin</Link></Button>
          </div>
        </div>
      </header>
      <main><Outlet /></main>
      <nav className="fixed inset-x-0 bottom-0 z-50 border-t border-line bg-card/94 px-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] pt-2 backdrop-blur-xl md:hidden">
        <div className="mx-auto grid max-w-md grid-cols-4 gap-1">
          {nav.map((item) => {
            const Icon = item.icon;
            return <NavLink key={item.to} to={item.to} className={({ isActive }) => `flex min-h-12 flex-col items-center justify-center rounded-lg text-[11px] font-semibold transition-colors ${isActive ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-secondary hover:text-foreground"}`}><Icon className="mb-0.5 h-4 w-4" />{item.label}</NavLink>;
          })}
        </div>
      </nav>
    </div>
  );
}
