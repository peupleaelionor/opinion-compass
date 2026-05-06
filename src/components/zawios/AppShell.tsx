import { Link, NavLink, Outlet } from "react-router-dom";
import { BarChart3, Home, Search, ShieldCheck, Trophy, UsersRound } from "lucide-react";
import { Button } from "@/components/ui/button";

const nav = [
  { to: "/", label: "Signaux", icon: BarChart3 },
  { to: "/leaderboard", label: "Classements", icon: Trophy },
  { to: "/insights", label: "Insights", icon: BarChart3 },
  { to: "/methodology", label: "Méthodologie", icon: ShieldCheck },
];

export function AppShell() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <header className="sticky top-0 z-40 border-b border-border bg-background/86 backdrop-blur-xl supports-[backdrop-filter]:bg-background/72">
        <div className="safe-shell mx-auto flex h-16 max-w-6xl items-center justify-between gap-3">
          <Link to="/" className="flex min-h-11 items-center gap-2.5 rounded-lg font-display text-xl font-bold tracking-tight">
            <img src="/brand/zawios-mark.svg" alt="ZAWIOS" className="h-9 w-9" />
            <span className="text-[#0B1020] dark:text-white">ZAWIOS</span>
          </Link>
          <div className="hidden items-center gap-1 md:flex">
            {nav.map((item) => (
              <NavLink key={item.to} to={item.to} className={({ isActive }) => `rounded-lg px-4 py-2 text-sm font-semibold transition-colors ${isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"}`}>{item.label}</NavLink>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <Button asChild variant="ghost" size="sm" className="hidden sm:flex">
              <Link to="/login">Se connecter</Link>
            </Button>
            <Button asChild variant="default" size="sm">
              <Link to="/signup">Commencer</Link>
            </Button>
          </div>
        </div>
      </header>
      <main><Outlet /></main>
      <nav className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-card/94 px-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] pt-2 backdrop-blur-xl md:hidden">
        <div className="mx-auto grid max-w-md grid-cols-4 gap-1">
          {nav.map((item) => {
            const Icon = item.icon;
            return <NavLink key={item.to} to={item.to} className={({ isActive }) => `flex min-h-12 flex-col items-center justify-center rounded-lg text-[11px] font-semibold transition-colors ${isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"}`}><Icon className="mb-0.5 h-4 w-4" />{item.label}</NavLink>;
          })}
        </div>
      </nav>
    </div>
  );
}
