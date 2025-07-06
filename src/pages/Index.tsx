
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
        
        {/* Customer Success Stories */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Real Results from Atlanta Customers
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                See how we've transformed workspaces and saved plants across Atlanta's neighborhoods.
              </p>
            </div>

            {/* Featured Testimonials */}
            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="flex items-center mb-6">
                  <img 
                    src="/lovable-uploads/f3967d27-f426-48b4-af6c-5b4f0e316b29.png" 
                    alt="Corporate office plants transformation"
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="flex mb-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <span key={star} className="text-yellow-400 text-lg">★</span>
                      ))}
                    </div>
                    <p className="font-semibold text-foreground">Sarah M., Buckhead</p>
                    <p className="text-sm text-muted-foreground">Office Manager</p>
                  </div>
                </div>
                <p className="text-muted-foreground italic mb-4">
                  "Nick transformed our sterile Buckhead office into a green oasis. Employee satisfaction scores increased 23% and we've had zero plant casualties in 8 months!"
                </p>
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="text-sm font-medium text-green-800">Result: 15 thriving plants, 23% boost in employee satisfaction</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="flex items-center mb-6">
                  <img 
                    src="/lovable-uploads/418cda1f-5e4a-4a96-9b30-5650e06e8b97.png" 
                    alt="Plant doctor house call success story"
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="flex mb-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <span key={star} className="text-yellow-400 text-lg">★</span>
                      ))}
                    </div>
                    <p className="font-semibold text-foreground">Mike R., Virginia-Highland</p>
                    <p className="text-sm text-muted-foreground">Plant Parent</p>
                  </div>
                </div>
                <p className="text-muted-foreground italic mb-4">
                  "My 6-foot fiddle leaf fig was dying. Nick's house call saved it completely - now it's the centerpiece of our living room and growing new leaves weekly!"
                </p>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <p className="text-sm font-medium text-orange-800">Result: Saved $400 plant, now thriving with new growth</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="flex items-center mb-6">
                  <img 
                    src="/lovable-uploads/c864df96-c7e3-4667-bfe2-e2ebaad928d8.png" 
                    alt="Seasonal color transformation"
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="flex mb-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <span key={star} className="text-yellow-400 text-lg">★</span>
                      ))}
                    </div>
                    <p className="font-semibold text-foreground">Jennifer L., Midtown</p>
                    <p className="text-sm text-muted-foreground">Restaurant Owner</p>
                  </div>
                </div>
                <p className="text-muted-foreground italic mb-4">
                  "Our customers constantly compliment Nick's beautiful plant arrangements. The seasonal displays create such a welcoming atmosphere - it's even mentioned in our Google reviews!"
                </p>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <p className="text-sm font-medium text-purple-800">Result: Regular customer compliments, positive Google reviews</p>
                </div>
              </div>
            </div>

            {/* Service Areas */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
              <h3 className="text-2xl font-bold text-center mb-8">Proudly Serving Atlanta Metro</h3>
              <div className="grid md:grid-cols-4 gap-4 text-center">
                <div>
                  <h4 className="font-semibold text-green-600 mb-2">Central Atlanta</h4>
                  <p className="text-sm text-muted-foreground">Midtown, Downtown, Grant Park, Inman Park, Little Five Points, Cabbagetown</p>
                </div>
                <div>
                  <h4 className="font-semibold text-green-600 mb-2">North Atlanta</h4>
                  <p className="text-sm text-muted-foreground">Buckhead, Virginia-Highland, Morningside, Ansley Park, Brookhaven, Sandy Springs</p>
                </div>
                <div>
                  <h4 className="font-semibold text-green-600 mb-2">East Atlanta</h4>
                  <p className="text-sm text-muted-foreground">Decatur, Avondale Estates, East Atlanta Village, Kirkwood, Candler Park</p>
                </div>
                <div>
                  <h4 className="font-semibold text-green-600 mb-2">West Atlanta</h4>
                  <p className="text-sm text-muted-foreground">West Midtown, Home Park, Marietta, Smyrna, Vinings, Westside</p>
                </div>
              </div>
              <div className="text-center mt-6">
                <p className="text-muted-foreground">Don't see your neighborhood? <span className="text-green-600 font-medium">We travel throughout the Atlanta metro area!</span></p>
              </div>
            </div>
            
            {/* Reviews Widget */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-center mb-8">What Our Customers Say</h3>
              <script type='text/javascript' src='https://reputationhub.site/reputation/assets/review-widget.js'></script>
              <div className="w-full overflow-hidden rounded-lg">
                <iframe 
                  className='lc_reviews_widget w-full border-0 rounded-lg' 
                  src='https://reputationhub.site/reputation/widgets/review_widget/wTvEeXunnbLa5kBRFbc4' 
                  frameBorder='0' 
                  scrolling='no' 
                  style={{ 
                    width: '100%', 
                    height: '500px',
                    minHeight: '500px',
                    maxWidth: '100%',
                    display: 'block'
                  }}
                  title="Customer Reviews Widget"
                ></iframe>
              </div>
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
