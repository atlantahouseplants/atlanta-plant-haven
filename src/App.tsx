
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import OfficePlants from "./pages/OfficePlants";
import PlantDoctor from "./pages/PlantDoctor";
import ColorPlanters from "./pages/ColorPlanters";
import Corporate from "./pages/Corporate";
import HomeDesign from "./pages/HomeDesign";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/office-plants" element={<OfficePlants />} />
          <Route path="/plant-doctor" element={<PlantDoctor />} />
          <Route path="/color-planters" element={<ColorPlanters />} />
          <Route path="/corporate" element={<Corporate />} />
          <Route path="/home-design" element={<HomeDesign />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
