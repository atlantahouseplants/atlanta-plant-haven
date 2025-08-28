
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
        
        {/* Trusted By Section */}
        <section className="py-16 bg-white border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Trusted by Atlanta's Leading Firms
              </h2>
              <p className="text-lg text-muted-foreground">
                Join these prestigious organizations who trust us with their plant care needs
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60">
              <div className="text-xl md:text-2xl font-semibold text-gray-600 hover:text-green-600 transition-colors">
                Marriott
              </div>
              <div className="text-xl md:text-2xl font-semibold text-gray-600 hover:text-green-600 transition-colors">
                Archer Western
              </div>
              <div className="text-xl md:text-2xl font-semibold text-gray-600 hover:text-green-600 transition-colors">
                OneStreet Residential
              </div>
              <div className="text-xl md:text-2xl font-semibold text-gray-600 hover:text-green-600 transition-colors">
                Perkins and Will
              </div>
              <div className="text-xl md:text-2xl font-semibold text-gray-600 hover:text-green-600 transition-colors">
                Loria Ansley
              </div>
            </div>
          </div>
        </section>

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
