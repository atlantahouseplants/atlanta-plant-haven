
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ServicesOverview from "@/components/ServicesOverview";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { FormProvider } from "@/components/forms/FormContext";
import FormModal from "@/components/forms/FormModal";

const Index = () => {
  return (
    <FormProvider>
      <div className="min-h-screen bg-background">
        <Navigation />
        <Hero />
        <ServicesOverview />
        <Contact />
        <Footer />
        <FormModal />
      </div>
    </FormProvider>
  );
};

export default Index;
