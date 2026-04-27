import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AppShell } from "@/components/zawios/AppShell";
import Index from "./pages/Index.tsx";
import Signals from "./pages/Signals.tsx";
import SignalDetail from "./pages/SignalDetail.tsx";
import Leaderboard from "./pages/Leaderboard.tsx";
import Profile from "./pages/Profile.tsx";
import Onboarding from "./pages/Onboarding.tsx";
import Support from "./pages/Support.tsx";
import Admin from "./pages/Admin.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<AppShell />}>
            <Route path="/" element={<Index />} />
            <Route path="/signals" element={<Signals />} />
            <Route path="/signals/:id" element={<SignalDetail />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/profile/:username" element={<Profile />} />
            <Route path="/onboarding" element={<Onboarding />} />
            <Route path="/support" element={<Support />} />
            <Route path="/admin" element={<Admin />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
