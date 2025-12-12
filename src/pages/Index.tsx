
import Navigation from "@/components/Navigation";
import SimplifiedHero from "@/components/SimplifiedHero";
import WhyChooseUs from "@/components/WhyChooseUs";
import BusinessServices from "@/components/BusinessServices";
import BusinessProcess from "@/components/BusinessProcess";
import GalleryPreview from "@/components/GalleryPreview";
import PlantGuarantee from "@/components/PlantGuarantee";
import GoogleReviews from "@/components/GoogleReviews";
import Footer from "@/components/Footer";
import { FormProvider } from "@/components/forms/FormContext";
import FormModal from "@/components/forms/FormModal";
import MobileStickyCTA from "@/components/ui/MobileStickyCTA";
import { SkipToContent } from "@/components/ui/AccessibilityUtils";

const Index = () => {
  return (
    <FormProvider>
      <div className="min-h-screen bg-background">
        <SkipToContent />
        <Navigation />
        <main id="main-content" tabIndex={-1} role="main" aria-label="Atlanta Houseplants homepage - Commercial plant services for Atlanta businesses">
          <SimplifiedHero />
          <WhyChooseUs />
          <BusinessServices />
          <BusinessProcess />
          <GalleryPreview />
          <PlantGuarantee />
          <GoogleReviews />
        </main>
        <Footer />
        <FormModal />
        <MobileStickyCTA />
      </div>
    </FormProvider>
  );
};

export default Index;
