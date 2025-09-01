
import Navigation from "@/components/Navigation";
import SimplifiedHero from "@/components/SimplifiedHero";
import GoogleReviews from "@/components/GoogleReviews";
import Footer from "@/components/Footer";
import { FormProvider } from "@/components/forms/FormContext";
import FormModal from "@/components/forms/FormModal";

const Index = () => {
  return (
    <FormProvider>
      <div className="min-h-screen bg-background">
        <Navigation />
        <SimplifiedHero />
        <GoogleReviews />
        <Footer />
        <FormModal />
      </div>
    </FormProvider>
  );
};

export default Index;
