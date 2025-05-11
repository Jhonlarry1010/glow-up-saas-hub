
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import PricingPage from "./pages/PricingPage";
import GetStarted from "./pages/GetStarted";
import NotFound from "./pages/NotFound";
import TemplatesPage from "./pages/TemplatesPage";
import WebsitesPage from "./pages/WebsitesPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/get-started" element={<GetStarted />} />
          <Route path="/templates" element={<TemplatesPage />} />
          <Route path="/websites" element={<WebsitesPage />} />
          <Route path="/apps" element={<GetStarted />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
