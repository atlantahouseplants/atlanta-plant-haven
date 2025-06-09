
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ServicesOverview from "@/components/ServicesOverview";
import CorporateSuccess from "@/components/CorporateSuccess";
import WhyChooseUs from "@/components/WhyChooseUs";
import PlantGuarantee from "@/components/PlantGuarantee";
import GalleryPreview from "@/components/GalleryPreview";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <ServicesOverview />
      <CorporateSuccess />
      <WhyChooseUs />
      <PlantGuarantee />
      <GalleryPreview />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
