import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PWAInstallPrompt from "@/components/PWAInstallPrompt";
import OfflineIndicator from "@/components/OfflineIndicator";
import Index from "./pages/Index";
import CEOVision from "./pages/CEOVision";
import LeadershipJourney from "./pages/LeadershipJourney";
import MudiamePartnership from "./pages/partnerships/Mudiame";
import CrossAIPartnership from "./pages/partnerships/CrossAI";
import IntechWealthPartnership from "./pages/partnerships/IntechWealth";
import NotFound from "./pages/NotFound";
import PressIndex from "./pages/press/Index";
import PressMudiamePartnership from "./pages/press/MudiamePartnership";
import CompanyLaunch from "./pages/press/CompanyLaunch";
import GlobalPartnerships from "./pages/press/GlobalPartnerships";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <BrowserRouter>
        <OfflineIndicator />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/ceo-vision" element={<CEOVision />} />
          <Route path="/leadership-journey" element={<LeadershipJourney />} />
          <Route path="/partnerships/mudiame" element={<MudiamePartnership />} />
          <Route path="/partnerships/cross-ai" element={<CrossAIPartnership />} />
          <Route path="/partnerships/intech-wealth" element={<IntechWealthPartnership />} />
          <Route path="/press" element={<PressIndex />} />
          <Route path="/press/mudiame-partnership" element={<PressMudiamePartnership />} />
          <Route path="/press/company-launch" element={<CompanyLaunch />} />
          <Route path="/press/global-partnerships" element={<GlobalPartnerships />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <PWAInstallPrompt />
      </BrowserRouter>
      <Toaster />
      <Sonner />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
