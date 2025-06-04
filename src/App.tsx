
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider, useTheme } from "@/contexts/ThemeContext";
import Index from "./pages/Index";
import PricingPage from "./pages/PricingPage";
import GetStarted from "./pages/GetStarted";
import NotFound from "./pages/NotFound";
import TemplatesPage from "./pages/TemplatesPage";
import WebsitesPage from "./pages/WebsitesPage";
import CheckoutPage from "./pages/CheckoutPage";

const queryClient = new QueryClient();

const AppContent = () => {
  const { getBackgroundClasses } = useTheme();
  
  return (
    <div className={`min-h-screen ${getBackgroundClasses()}`}>
      <div className="absolute inset-0 bg-black/5 backdrop-blur-[1px]" />
      <div className="relative z-10 min-h-screen">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/get-started" element={<GetStarted />} />
            <Route path="/templates" element={<TemplatesPage />} />
            <Route path="/websites" element={<WebsitesPage />} />
            <Route path="/apps" element={<GetStarted />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <AppContent />
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
