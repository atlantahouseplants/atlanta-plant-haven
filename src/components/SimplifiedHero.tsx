import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import InlineLeadCapture from "@/components/InlineLeadCapture";

const SimplifiedHero = () => {
  return (
    <section className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-green-50/50 via-background to-blue-50/30 relative overflow-hidden">
      {/* Background decoration - fixed for deployment */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%2316a34a%22%20fill-opacity%3D%220.03%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="mb-8">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-foreground leading-[0.9] mb-6 tracking-tight">
              <span className="block bg-gradient-to-r from-green-600 via-emerald-500 to-green-600 bg-clip-text text-transparent mb-2">
                Elevate Your Workplace
              </span>
              <span className="block text-foreground">
                With Strategic Plant Design
              </span>
            </h1>
          </div>
          
          <div className="max-w-4xl mx-auto mb-8">
            <p className="text-2xl md:text-3xl text-blue-700 leading-relaxed font-semibold text-center mb-12">
              Transform your Atlanta workspace into a healthier, more productive environment with expert biophilic design and guaranteed plant care.
            </p>
            
            {/* Professional Benefits Grid */}
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Employee Wellness Benefits */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-blue-800 mb-6 flex items-center">
                  <span className="mr-3">🏢</span>
                  Employee Wellness Benefits
                </h3>
                <ul className="text-lg text-blue-700 space-y-4">
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
              </div>

              {/* Business ROI Benefits */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-green-800 mb-6 flex items-center">
                  <span className="mr-3">📈</span>
                  Business ROI Benefits
                </h3>
                <ul className="text-lg text-green-700 space-y-4">
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
              </div>
            </div>
          </div>
          
          <div className="mb-16 rounded-3xl overflow-hidden shadow-2xl max-w-5xl mx-auto ring-1 ring-black/5 hover:shadow-3xl transition-shadow duration-500">
            <img 
              src="/images/corporate-offices/generated-hero-august-2025-corrected.jpg" 
              alt="Professional Atlanta workspace transformation featuring strategic plant installation and biophilic design elements"
              className="w-full h-96 md:h-[500px] object-cover hover:scale-[1.02] transition-transform duration-700"
            />
            {/* Image overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>
          </div>

          {/* Professional Service Notice */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-8 max-w-4xl mx-auto mb-12">
            <div className="flex items-center justify-center mb-4">
              <span className="text-2xl mr-3">🌟</span>
              <h3 className="text-2xl font-bold text-blue-800">Premium Service Commitment</h3>
            </div>
            <p className="text-lg text-blue-700 text-center leading-relaxed">
              To maintain our exceptional service standards, we carefully manage our client capacity.<br/>
              <strong>Schedule your complimentary consultation</strong> to secure your preferred installation timeline.
            </p>
          </div>

          {/* Professional CTAs */}
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-16">
            <Link to="/office-plants" className="group">
              <Button 
                size="lg"
                className="w-full h-20 text-lg bg-gradient-to-r from-green-600 via-green-500 to-green-600 hover:from-green-700 hover:via-green-600 hover:to-green-700 text-white shadow-xl hover:shadow-green-500/25 transform hover:scale-[1.02] transition-all duration-300 border-0 font-semibold rounded-2xl"
              >
                <span className="flex flex-col items-center">
                  <span>Schedule Your Workspace Consultation</span>
                  <span className="text-sm font-normal opacity-90">Complimentary Design Assessment</span>
                </span>
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            
            <Link to="/corporate" className="group">
              <Button 
                size="lg"
                className="w-full h-20 text-lg bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 hover:from-blue-700 hover:via-blue-600 hover:to-blue-700 text-white shadow-xl hover:shadow-blue-500/25 transform hover:scale-[1.02] transition-all duration-300 border-0 font-semibold rounded-2xl"
              >
                <span className="flex flex-col items-center">
                  <span>Explore Corporate Gifting Solutions</span>
                  <span className="text-sm font-normal opacity-90">Automated Programs Available</span>
                </span>
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
          
        </div>

        {/* Enhanced Social Proof */}
        <div className="text-center mb-20">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-gray-200/50">
            <h3 className="text-3xl font-bold text-foreground mb-6">
              Trusted by 500+ Atlanta Businesses Since 2019
            </h3>
            
            {/* Key Stats */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600">500+</div>
                <div className="text-gray-600">Businesses Served</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600">100%</div>
                <div className="text-gray-600">Plant Survival Rate</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600">5+ Years</div>
                <div className="text-gray-600">Zero Failed Installations</div>
              </div>
            </div>
            
            <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
              <div className="text-2xl font-bold text-foreground hover:text-green-600 transition-colors cursor-default">Marriott</div>
              <div className="text-2xl font-bold text-foreground hover:text-green-600 transition-colors cursor-default">Archer Western</div>
              <div className="text-2xl font-bold text-foreground hover:text-green-600 transition-colors cursor-default">OneStreet Residential</div>
              <div className="text-2xl font-bold text-foreground hover:text-green-600 transition-colors cursor-default">Perkins and Will</div>
              <div className="text-2xl font-bold text-foreground hover:text-green-600 transition-colors cursor-default">Loria Ansley</div>
            </div>
          </div>
        </div>

        {/* Nick's Authority Section */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Why Nick Is Atlanta's #1 Plant Doctor
          </h2>
          <div className="max-w-4xl mx-auto bg-blue-50 p-8 rounded-2xl border border-blue-200">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-blue-600">UGA Graduate</div>
                <div className="text-gray-600">Certified Horticulturalist</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-600">15+ Years</div>
                <div className="text-gray-600">Professional Experience</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-600">Only in Atlanta</div>
                <div className="text-gray-600">State-Licensed Plant Professional</div>
              </div>
            </div>
          </div>
        </div>

        {/* Strategic Lead Magnets Section */}
        <InlineLeadCapture 
          variant="full-grid"
          title="Free Strategic Business Resources"
          subtitle="Professional tools trusted by 500+ Atlanta businesses to evaluate, implement, and optimize workplace plant programs."
          className="mb-20"
        />

        {/* Professional CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-12 rounded-3xl shadow-xl border border-green-200">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Enhance Your Workplace Environment?
            </h2>
            <p className="text-xl text-gray-700 mb-10 max-w-4xl mx-auto leading-relaxed">
              Join 500+ Atlanta businesses who trust Atlanta Houseplants to create healthier, more productive workspaces. 
              <strong>Schedule your complimentary consultation</strong> to discover how strategic plant design can transform your office culture.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <Link to="/office-plants" className="group">
                <Button 
                  size="lg"
                  className="w-full h-20 text-lg bg-gradient-to-r from-green-600 via-green-500 to-green-600 hover:from-green-700 hover:via-green-600 hover:to-green-700 text-white shadow-xl hover:shadow-green-500/25 transform hover:scale-[1.02] transition-all duration-300 border-0 font-semibold rounded-2xl"
                >
                  <span className="flex flex-col items-center">
                    <span>Begin Your Workplace Transformation</span>
                    <span className="text-sm font-normal opacity-90">Complimentary consultation included</span>
                  </span>
                  <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              
              <Link to="/corporate" className="group">
                <Button 
                  size="lg"
                  className="w-full h-20 text-lg bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 hover:from-blue-700 hover:via-blue-600 hover:to-blue-700 text-white shadow-xl hover:shadow-blue-500/25 transform hover:scale-[1.02] transition-all duration-300 border-0 font-semibold rounded-2xl"
                >
                  <span className="flex flex-col items-center">
                    <span>Streamline Your Corporate Gifting</span>
                    <span className="text-sm font-normal opacity-90">Automated solutions available</span>
                  </span>
                  <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimplifiedHero;