
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import ServiceShowcase from "@/components/ServiceShowcase";
import HowItWorks from "@/components/HowItWorks";
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
        <WhyChooseUs />
        <ServiceShowcase />
        
        {/* Customer Reviews Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                What Our Customers Say
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Don't just take our word for it - see what Atlanta businesses and plant parents are saying about our services.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <script type='text/javascript' src='https://reputationhub.site/reputation/assets/review-widget.js'></script>
              <iframe 
                className='lc_reviews_widget' 
                src='https://reputationhub.site/reputation/widgets/review_widget/wTvEeXunnbLa5kBRFbc4' 
                frameBorder='0' 
                scrolling='no' 
                style={{ minWidth: '100%', width: '100%', minHeight: '400px' }}
              ></iframe>
            </div>
          </div>
        </section>

        <HowItWorks />
        <Contact />
        <Footer />
        <FormModal />
      </div>
    </FormProvider>
  );
};

export default Index;
