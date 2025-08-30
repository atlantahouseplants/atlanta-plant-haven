import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const SimplifiedHero = () => {
  return (
    <section className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-green-50/50 via-background to-blue-50/30 relative overflow-hidden">
      {/* Background decoration - fixed for deployment */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%2316a34a%22%20fill-opacity%3D%220.03%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="mb-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-foreground leading-[0.95] mb-6 tracking-tight">
              <span className="block text-red-600 mb-2">
                Stop Watching Your Office Plants Die
              </span>
              <span className="block text-foreground">
                While Your Productivity Drops 23%
              </span>
            </h1>
          </div>
          
          <div className="max-w-5xl mx-auto mb-8">
            <p className="text-2xl md:text-3xl text-green-700 leading-relaxed font-bold text-center mb-8">
              Atlanta's #1 Plant Doctor Guarantees Thriving Office Plants That Boost Employee Performance (Or We Replace Them Free)
            </p>
            
            {/* Problem Points */}
            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg max-w-3xl mx-auto mb-8">
              <h3 className="text-xl font-bold text-red-700 mb-4">Are You Frustrated With...</h3>
              <ul className="text-lg text-red-600 space-y-3">
                <li className="flex items-start">
                  <span className="text-red-500 mr-3">✗</span>
                  Dead plants making your office look unprofessional?
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3">✗</span>
                  Employees calling in sick 40% more often in sterile environments?
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3">✗</span>
                  Clients noticing your lifeless, uninspiring workspace?
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3">✗</span>
                  Wasting time and money on plants that keep dying?
                </li>
              </ul>
            </div>

            {/* Solution Benefits */}
            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg max-w-3xl mx-auto">
              <h3 className="text-xl font-bold text-green-700 mb-4">Get These Guaranteed Results:</h3>
              <ul className="text-lg text-green-600 space-y-3">
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  100% plant survival guarantee (or free replacement)
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  15% productivity increase (Harvard Business Review study)
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  37% employee stress reduction
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  Professional appearance that impresses every client
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  Zero maintenance required from your team
                </li>
              </ul>
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

          {/* Urgency Element */}
          <div className="bg-yellow-50 border-2 border-yellow-400 rounded-xl p-6 max-w-4xl mx-auto mb-12">
            <div className="flex items-center justify-center mb-3">
              <span className="text-2xl mr-2">⚠️</span>
              <h3 className="text-2xl font-bold text-yellow-800">Limited Availability</h3>
            </div>
            <p className="text-lg text-yellow-700 text-center">
              Nick only accepts <strong>3 new office clients per month</strong> to ensure premium service quality.<br/>
              Next available start date: <strong>March 15th, 2025</strong>
            </p>
          </div>

          {/* The Two Paths - Updated CTAs */}
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-16">
            <Link to="/office-plants" className="group">
              <Button 
                size="lg"
                className="w-full h-24 text-lg bg-gradient-to-r from-green-600 via-green-500 to-green-600 hover:from-green-700 hover:via-green-600 hover:to-green-700 text-white shadow-2xl hover:shadow-green-500/25 transform hover:scale-[1.02] transition-all duration-300 border-0 font-bold tracking-wide rounded-2xl"
              >
                <span className="flex flex-col items-center">
                  <span>Get My FREE Office Plant Audit</span>
                  <span className="text-sm font-normal opacity-90">($200 Value - Book Now)</span>
                </span>
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            
            <Link to="/corporate" className="group">
              <Button 
                size="lg"
                className="w-full h-24 text-lg bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 hover:from-blue-700 hover:via-blue-600 hover:to-blue-700 text-white shadow-2xl hover:shadow-blue-500/25 transform hover:scale-[1.02] transition-all duration-300 border-0 font-bold tracking-wide rounded-2xl"
              >
                <span className="flex flex-col items-center">
                  <span>Automate Corporate Gifting</span>
                  <span className="text-sm font-normal opacity-90">(20% Off Annual Plans)</span>
                </span>
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
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

        {/* Final Urgent CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-br from-red-50 to-orange-50 p-12 rounded-3xl shadow-xl border-2 border-red-200">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Don't Let Your Office Stay Lifeless Another Day
            </h2>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Every day without professional plants costs you in productivity, employee satisfaction, and client impressions. 
              <strong>Book your free audit before Nick's calendar fills up.</strong>
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <Link to="/office-plants" className="group">
                <Button 
                  size="lg"
                  className="w-full h-24 text-lg bg-gradient-to-r from-green-600 via-green-500 to-green-600 hover:from-green-700 hover:via-green-600 hover:to-green-700 text-white shadow-2xl hover:shadow-green-500/25 transform hover:scale-[1.02] transition-all duration-300 border-0 font-bold tracking-wide rounded-2xl"
                >
                  <span className="flex flex-col items-center">
                    <span>🚀 Claim My FREE $200 Audit</span>
                    <span className="text-sm font-normal opacity-90">(Limited to 3 clients/month)</span>
                  </span>
                  <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              
              <Link to="/corporate" className="group">
                <Button 
                  size="lg"
                  className="w-full h-24 text-lg bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 hover:from-blue-700 hover:via-blue-600 hover:to-blue-700 text-white shadow-2xl hover:shadow-blue-500/25 transform hover:scale-[1.02] transition-all duration-300 border-0 font-bold tracking-wide rounded-2xl"
                >
                  <span className="flex flex-col items-center">
                    <span>🎁 Automate Gifting & Save 20%</span>
                    <span className="text-sm font-normal opacity-90">(Annual plans only)</span>
                  </span>
                  <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
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