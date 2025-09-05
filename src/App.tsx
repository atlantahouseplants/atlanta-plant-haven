
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import { FormProvider } from "@/components/forms/FormContext";
import FormModal from "@/components/forms/FormModal";
import ChatWidget from "@/components/chatbot/ChatWidget";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import OfficePlants from "./pages/OfficePlants";
import PlantDoctor from "./pages/PlantDoctor";
import ColorPlanters from "./pages/ColorPlanters";
import Corporate from "./pages/Corporate";
import HomeDesign from "./pages/HomeDesign";
import Contact from "./pages/Contact";
import SucculentsForSmiles from "./pages/SucculentsForSmiles";
import Resources from "./pages/Resources";
import About from "./pages/About";
import OurWork from "./pages/OurWork";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <FormProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/office-plants" element={<OfficePlants />} />
            <Route path="/corporate" element={<Corporate />} />
            <Route path="/plant-doctor" element={<PlantDoctor />} />
            <Route path="/color-planters" element={<ColorPlanters />} />
            <Route path="/home-design" element={<HomeDesign />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/our-work" element={<OurWork />} />
            <Route path="/succulents-for-smiles" element={<SucculentsForSmiles />} />
            <Route path="/resources" element={<Resources />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <FormModal />
          <ChatWidget />
        </BrowserRouter>
        <Analytics />
      </FormProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
