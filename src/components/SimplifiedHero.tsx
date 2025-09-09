import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import InlineLeadCapture from "@/components/InlineLeadCapture";
import { SocialProofBar, StatsGrid, CustomerTestimonial } from "@/components/ui/SocialProof";
import { ModernCard, CardContent } from "@/components/ui/ModernCard";
import { HeroImage } from "@/components/ui/OptimizedImage";
import { COMPONENT_STYLES } from "@/styles/design-system";

const SimplifiedHero = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-green-50/50 via-background to-blue-50/30 relative overflow-hidden">
        {/* Background decoration - fixed for deployment */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%2316a34a%22%20fill-opacity%3D%220.03%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
        
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="mb-6 sm:mb-8">
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-foreground leading-[0.95] mb-4 sm:mb-6 tracking-tight px-2 sm:px-0">
              <span className="block text-foreground mb-1 sm:mb-2">
                We design, install & maintain
              </span>
              <span className="block bg-gradient-to-r from-green-600 via-emerald-500 to-green-600 bg-clip-text text-transparent">
                office plants for Atlanta buildings.
              </span>
            </h1>
          </div>
          
          <div className="max-w-4xl mx-auto mb-6 sm:mb-8 px-2 sm:px-0">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-blue-700 leading-relaxed font-semibold text-center mb-8 sm:mb-12">
              Get a free office biophilic design + quote in 48 hours. On-site walkthrough included.
            </p>

            {/* Primary CTA and Trust Elements */}
            <div className="mb-8 sm:mb-12">
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
                <Link to="/office-plants" className="group">
                  <Button 
                    size="lg"
                    className="bg-gradient-to-r from-green-600 via-green-500 to-green-600 hover:from-green-700 hover:via-green-600 hover:to-green-700 text-white shadow-xl hover:shadow-green-500/25 transform hover:scale-[1.02] transition-all duration-300 border-0 font-semibold rounded-2xl h-16 px-8 text-lg"
                  >
                    Get My Free Office Biophilic Design →
                  </Button>
                </Link>
                <Link to="/our-work" className="group">
                  <Button 
                    variant="outline"
                    size="lg"
                    className="border-2 border-blue-300 text-blue-700 hover:bg-blue-50 h-16 px-8 text-lg rounded-2xl"
                  >
                    See Atlanta Projects
                  </Button>
                </Link>
              </div>

              {/* Trust Row */}
              <div className="flex flex-col items-center space-y-4">
                <div className="flex flex-wrap justify-center items-center gap-4 text-sm text-gray-600">
                  <span className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    Professional consultation included
                  </span>
                  <span className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    Custom design proposal
                  </span>
                  <span className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    Zero obligation walkthrough
                  </span>
                </div>
                
                {/* Risk Reversal */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg px-4 py-2">
                  <p className="text-sm text-blue-800 font-medium">
                    If any plant underperforms while under our care, we will replace it for free. Guaranteed!
                  </p>
                </div>
              </div>
            </div>
            
            {/* Professional Benefits Grid - Using Modern Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-5xl mx-auto px-2 sm:px-0">
              {/* Employee Wellness Benefits */}
              <ModernCard variant="featured" className="animate-fade-in">
                <CardContent>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-blue-800 mb-4 md:mb-6 flex items-center">
                    <span className="mr-2 sm:mr-3">🏢</span>
                    Employee Wellness Benefits
                  </h3>
                  <ul className="text-base sm:text-lg text-blue-700 space-y-3 sm:space-y-4">
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-3 mt-1">•</span>
                      <span><strong>15% productivity increase</strong> with biophilic design</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-3 mt-1">•</span>
                      <span><strong>37% stress reduction</strong> in plant-enhanced environments</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-3 mt-1">•</span>
                      <span><strong>Improved air quality</strong> and oxygen levels</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-3 mt-1">•</span>
                      <span><strong>Enhanced employee satisfaction</strong> and retention</span>
                    </li>
                  </ul>
                </CardContent>
              </ModernCard>

              {/* Business ROI Benefits */}
              <ModernCard variant="featured" className="animate-fade-in" style={{ animationDelay: '200ms' }}>
                <CardContent>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-green-800 mb-4 md:mb-6 flex items-center">
                    <span className="mr-2 sm:mr-3">📈</span>
                    Business ROI Benefits
                  </h3>
                  <ul className="text-base sm:text-lg text-green-700 space-y-3 sm:space-y-4">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-3 mt-1">•</span>
                      <span><strong>Professional brand image</strong> that impresses clients</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-3 mt-1">•</span>
                      <span><strong>Zero maintenance burden</strong> for your team</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-3 mt-1">•</span>
                      <span><strong>100% plant health guarantee</strong> with expert care</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-3 mt-1">•</span>
                      <span><strong>Customized design</strong> for your space and culture</span>
                    </li>
                  </ul>
                </CardContent>
              </ModernCard>
            </div>
          </div>
          
          <div className="mb-12 sm:mb-16 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl max-w-5xl mx-auto ring-1 ring-black/5 hover:shadow-3xl transition-shadow duration-500 relative">
            <HeroImage
              src="/images/corporate-offices/generated-hero-august-2025-corrected.jpg" 
              alt="Professional Atlanta workspace transformation featuring strategic plant installation and biophilic design elements"
              width={1200}
              height={500}
              aria-label="Modern office space with professional plant installations showcasing biophilic design"
            />
            {/* Image overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>
          </div>

          {/* Atlanta Business Context - Week 1 Enhancement */}
          <div className="mb-12 sm:mb-16">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 border border-blue-200 shadow-lg mx-2 sm:mx-0">
              <div className="text-center mb-6 md:mb-8">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-800 mb-3 md:mb-4">
                  Trusted by Atlanta's Leading Businesses
                </h3>
                <p className="text-base sm:text-lg text-blue-700">
                  From Buckhead high-rises to Midtown startups, we enhance workplaces across metro Atlanta
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
                <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src="/images/corporate-offices/bird-of-paradise-atlanta-skyline.png"
                    alt="Executive office with Bird of Paradise and Atlanta skyline view"
                    className="w-full h-48 sm:h-56 md:h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 text-white">
                    <h4 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">Executive Offices</h4>
                    <p className="text-xs sm:text-sm opacity-90">Premium installations for C-suite environments with Atlanta skyline views</p>
                  </div>
                </div>
                
                <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src="/images/corporate-offices/croton-plant-city-view.png"
                    alt="Modern office space with strategic plant placement"
                    className="w-full h-48 sm:h-56 md:h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 text-white">
                    <h4 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">Corporate Transformations</h4>
                    <p className="text-xs sm:text-sm opacity-90">Strategic workplace design enhancing productivity and employee wellness</p>
                  </div>
                </div>
              </div>
              
              <div className="text-center mt-8">
                <p className="text-blue-700 font-semibold">
                  Proven results across metro Atlanta's most demanding business environments
                </p>
              </div>
            </div>
          </div>

          {/* Free Office Biophilic Design Offer */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-8 max-w-4xl mx-auto mb-12">
            <div className="flex items-center justify-center mb-4">
              <span className="text-2xl mr-3">🌿</span>
              <h3 className="text-2xl font-bold text-green-800">Free Office Biophilic Design</h3>
            </div>
            <p className="text-lg text-green-700 text-center leading-relaxed mb-6">
              Get your customized office plant design and quote in 48 hours.<br/>
              <strong>Includes complimentary on-site walkthrough</strong> with our biophilic design specialist.
            </p>
            <div className="text-center">
              <Link to="/office-plants">
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-green-600 via-green-500 to-green-600 hover:from-green-700 hover:via-green-600 hover:to-green-700 text-white shadow-xl hover:shadow-green-500/25 transform hover:scale-[1.02] transition-all duration-300 border-0 font-semibold rounded-2xl h-14 px-8 text-base"
                >
                  Get My Free Office Biophilic Design
                </Button>
              </Link>
            </div>
          </div>

          {/* Enhanced Professional CTAs */}
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-16">
            <Link to="/office-plants" className="group animate-fade-in">
              <Button 
                size="lg"
                className={`${COMPONENT_STYLES.button.primary} w-full h-16 sm:h-20 text-base sm:text-lg shadow-xl hover:shadow-green-500/25`}
              >
                <span className="flex flex-col items-center">
                  <span className="leading-tight">Get Your Free Office Biophilic Design</span>
                  <span className="text-xs sm:text-sm font-normal opacity-90 leading-tight">48-hour turnaround + on-site walkthrough</span>
                </span>
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            
            <Link to="/corporate" className="group animate-fade-in" style={{ animationDelay: '100ms' }}>
              <Button 
                size="lg"
                className={`${COMPONENT_STYLES.button.cta.replace('from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600', 'from-blue-600 via-blue-500 to-blue-600 hover:from-blue-700 hover:via-blue-600 hover:to-blue-700')} w-full h-16 sm:h-20 text-base sm:text-lg shadow-xl hover:shadow-blue-500/25`}
              >
                <span className="flex flex-col items-center">
                  <span className="leading-tight">Explore Corporate Gifting Solutions</span>
                  <span className="text-xs sm:text-sm font-normal opacity-90 leading-tight">Automated Programs Available</span>
                </span>
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
          
        </div>

        {/* Strategic Lead Magnets Section */}
        <InlineLeadCapture 
          variant="full-grid"
          title="Free Strategic Business Resources"
          subtitle="Professional assessment tools used by Atlanta's leading companies to evaluate, implement, and optimize workplace plant programs."
          className="mb-20"
        />

        {/* Professional CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-12 rounded-3xl shadow-xl border border-green-200">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready for Your Free Office Biophilic Design?
            </h2>
            <p className="text-xl text-gray-700 mb-10 max-w-4xl mx-auto leading-relaxed">
              Get your customized office plant design and quote in 48 hours with complimentary on-site walkthrough. 
              <strong>Experience the difference</strong> professional biophilic design makes in workplace wellness and productivity.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <Link to="/office-plants" className="group">
                <Button 
                  size="lg"
                  className="w-full h-16 sm:h-20 text-base sm:text-lg bg-gradient-to-r from-green-600 via-green-500 to-green-600 hover:from-green-700 hover:via-green-600 hover:to-green-700 text-white shadow-xl hover:shadow-green-500/25 transform hover:scale-[1.02] transition-all duration-300 border-0 font-semibold rounded-2xl"
                >
                  <span className="flex flex-col items-center">
                    <span className="leading-tight">Get My Free Office Biophilic Design</span>
                    <span className="text-xs sm:text-sm font-normal opacity-90 leading-tight">48-hour quote + on-site walkthrough</span>
                  </span>
                  <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              
              <Link to="/corporate" className="group">
                <Button 
                  size="lg"
                  className="w-full h-16 sm:h-20 text-base sm:text-lg bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 hover:from-blue-700 hover:via-blue-600 hover:to-blue-700 text-white shadow-xl hover:shadow-blue-500/25 transform hover:scale-[1.02] transition-all duration-300 border-0 font-semibold rounded-2xl"
                >
                  <span className="flex flex-col items-center">
                    <span className="leading-tight">Streamline Your Corporate Gifting</span>
                    <span className="text-xs sm:text-sm font-normal opacity-90 leading-tight">Automated solutions available</span>
                  </span>
                  <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* Enhanced Social Proof Section */}
      <SocialProofBar />
      
      {/* Stats Grid */}
      <StatsGrid />
      
      {/* Customer Testimonials */}
      <CustomerTestimonial />
    </>
  );
};

export default SimplifiedHero;