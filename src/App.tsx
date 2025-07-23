import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PWAInstallPrompt from "@/components/PWAInstallPrompt";
import OfflineIndicator from "@/components/OfflineIndicator";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PressIndex from "./pages/press/Index";
import MudiamePartnership from "./pages/press/MudiamePartnership";
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
          <Route path="/press" element={<PressIndex />} />
          <Route path="/press/mudiame-partnership" element={<MudiamePartnership />} />
          <Route path="/press/company-launch" element={<CompanyLaunch />} />
          <Route path="/press/global-partnerships" element={<GlobalPartnerships />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
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
