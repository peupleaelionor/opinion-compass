import { Link, NavLink, Outlet } from "react-router-dom";
import { BarChart3, Trophy, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const nav = [
  { to: "/signals", label: "Signaux", icon: BarChart3 },
  { to: "/leaderboard", label: "Classements", icon: Trophy },
  { to: "/methodology", label: "Méthode", icon: ShieldCheck },
];

export function AppShell() {
  return (
    <div className="min-h-screen bg-[#F7F8FC] text-[#0B1020]">
      <header className="sticky top-0 z-40 border-b border-border/50 bg-white/80 backdrop-blur-md">
        <div className="safe-shell mx-auto flex h-16 max-w-5xl items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-display text-lg font-bold tracking-tight">
            <img src="/brand/zawios-mark.svg" alt="ZAWIOS" className="h-7 w-7" />
            <span>ZAWIOS</span>
          </Link>
          
          <nav className="hidden items-center gap-8 md:flex">
            {nav.map((item) => (
              <NavLink 
                key={item.to} 
                to={item.to} 
                className={({ isActive }) => `text-[11px] font-bold uppercase tracking-widest transition-colors ${isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"}`}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Button asChild variant="ghost" size="sm" className="hidden h-9 text-[11px] font-bold uppercase tracking-widest sm:flex">
              <Link to="/login">Login</Link>
            </Button>
            <Button asChild size="sm" className="h-9 px-5 text-[11px] font-bold uppercase tracking-widest">
              <Link to="/signup">Join</Link>
            </Button>
          </div>
        </div>
      </header>
      
      <main><Outlet /></main>

      {/* Mobile Nav */}
      <nav className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-white/90 px-6 pb-safe pt-3 backdrop-blur-md md:hidden">
        <div className="flex justify-between items-center">
          {nav.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink 
                key={item.to} 
                to={item.to} 
                className={({ isActive }) => `flex flex-col items-center gap-1 transition-colors ${isActive ? "text-primary" : "text-muted-foreground"}`}
              >
                <Icon className="h-5 w-5" />
                <span className="text-[9px] font-bold uppercase tracking-tighter">{item.label}</span>
              </NavLink>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
