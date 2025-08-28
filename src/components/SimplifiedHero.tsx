import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const SimplifiedHero = () => {
  return (
    <section className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-green-50/50 via-background to-blue-50/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%2316a34a" fill-opacity="0.03"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="mb-8">
            <h1 className="text-5xl sm:text-6xl md:text-8xl font-black text-foreground leading-[0.9] mb-4 tracking-tight">
              We Create
              <span className="block bg-gradient-to-r from-green-600 via-green-500 to-emerald-500 bg-clip-text text-transparent drop-shadow-sm">
                Environments
              </span>
              <span className="block text-3xl sm:text-4xl md:text-5xl font-bold text-muted-foreground/80 mt-2">
                That Thrive
              </span>
            </h1>
          </div>
          
          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-medium">
              Transform your Atlanta workspace with 
              <span className="text-green-700 font-semibold"> research-proven plant solutions</span> that 
              boost productivity and employee well-being
            </p>
          </div>
          
          <div className="mb-16 rounded-3xl overflow-hidden shadow-2xl max-w-5xl mx-auto ring-1 ring-black/5 hover:shadow-3xl transition-shadow duration-500">
            <img 
              src="/lovable-uploads/24794cd6-d871-433d-8ce5-1b5d61120d74.png" 
              alt="Luxurious corporate plant installation by Atlanta Houseplants"
              className="w-full h-96 md:h-[500px] object-cover hover:scale-[1.02] transition-transform duration-700"
            />
            {/* Image overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>
          </div>

          {/* The Two Paths */}
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-16">
            <Link to="/office-plants" className="group">
              <Button 
                size="lg"
                className="w-full h-28 sm:h-24 text-lg sm:text-xl bg-gradient-to-r from-green-600 via-green-500 to-green-600 hover:from-green-700 hover:via-green-600 hover:to-green-700 text-white shadow-2xl hover:shadow-green-500/25 transform hover:scale-[1.02] transition-all duration-300 border-0 font-bold tracking-wide rounded-2xl"
              >
                <div className="flex flex-col items-center px-2">
                  <span className="text-base sm:text-lg mb-1">Get Free Office Plant Consultation</span>
                  <span className="text-xs sm:text-sm opacity-90 font-medium">✓ UGA Certified Expert • Same Week Response</span>
                </div>
                <ArrowRight className="ml-2 sm:ml-3 h-6 w-6 sm:h-7 sm:w-7 group-hover:translate-x-1 transition-transform flex-shrink-0" />
              </Button>
            </Link>
            
            <Link to="/corporate" className="group">
              <Button 
                size="lg"
                className="w-full h-28 sm:h-24 text-lg sm:text-xl bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 hover:from-blue-700 hover:via-blue-600 hover:to-blue-700 text-white shadow-2xl hover:shadow-blue-500/25 transform hover:scale-[1.02] transition-all duration-300 border-0 font-bold tracking-wide rounded-2xl"
              >
                <div className="flex flex-col items-center px-2">
                  <span className="text-base sm:text-lg mb-1">Elevate Your Corporate Gifting</span>
                  <span className="text-xs sm:text-sm opacity-90 font-medium">✓ Bulk Orders • Custom Packaging</span>
                </div>
                <ArrowRight className="ml-2 sm:ml-3 h-6 w-6 sm:h-7 sm:w-7 group-hover:translate-x-1 transition-transform flex-shrink-0" />
              </Button>
            </Link>
          </div>
          
          <div className="text-center mt-12">
            <div className="inline-flex items-center gap-2 bg-green-50 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              Need to build a business case? Get research-backed ROI data
            </div>
            <Link to="/resources" className="group">
              <Button 
                variant="outline"
                size="lg"
                className="border-2 border-green-600 text-green-700 hover:bg-green-50 hover:border-green-700 px-8 py-3 font-semibold transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Free Business Plant Resources
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Social Proof Bar */}
        <div className="text-center mb-20">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-200/50">
            <h3 className="text-2xl font-bold text-foreground mb-2">
              Trusted by Atlanta's Leading Firms
            </h3>
            <p className="text-muted-foreground mb-8">Join these prestigious companies who rely on our expertise</p>
            <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
              <div className="text-2xl lg:text-3xl font-bold text-foreground hover:text-green-600 transition-colors cursor-default">Marriott</div>
              <div className="text-2xl lg:text-3xl font-bold text-foreground hover:text-green-600 transition-colors cursor-default">Archer Western</div>
              <div className="text-2xl lg:text-3xl font-bold text-foreground hover:text-green-600 transition-colors cursor-default">OneStreet Residential</div>
              <div className="text-2xl lg:text-3xl font-bold text-foreground hover:text-green-600 transition-colors cursor-default">Perkins and Will</div>
              <div className="text-2xl lg:text-3xl font-bold text-foreground hover:text-green-600 transition-colors cursor-default">Loria Ansley</div>
            </div>
          </div>
        </div>

        {/* Why Plants Matter for Business */}
        <div className="max-w-6xl mx-auto mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Atlanta's Leading Companies Choose Office Plants
            </h2>
            <p className="text-xl text-muted-foreground">
              Research-proven benefits that impact your bottom line
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="group bg-gradient-to-br from-white to-green-50/50 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 text-center border border-green-100/50 hover:border-green-200 transform hover:scale-[1.02]">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <div className="text-3xl font-bold text-white">15%</div>
              </div>
              <h3 className="font-bold text-xl mb-3 text-foreground">Increased Productivity</h3>
              <p className="text-muted-foreground leading-relaxed">
                University studies show office plants boost focus and task performance
              </p>
            </div>
            
            <div className="group bg-gradient-to-br from-white to-blue-50/50 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 text-center border border-blue-100/50 hover:border-blue-200 transform hover:scale-[1.02]">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <div className="text-3xl font-bold text-white">38%</div>
              </div>
              <h3 className="font-bold text-xl mb-3 text-foreground">Reduced Fatigue</h3>
              <p className="text-muted-foreground leading-relaxed">
                Biophilic design elements significantly reduce mental fatigue and stress
              </p>
            </div>
            
            <div className="group bg-gradient-to-br from-white to-purple-50/50 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 text-center border border-purple-100/50 hover:border-purple-200 transform hover:scale-[1.02]">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <div className="text-3xl font-bold text-white">25%</div>
              </div>
              <h3 className="font-bold text-xl mb-3 text-foreground">Better Air Quality</h3>
              <p className="text-muted-foreground leading-relaxed">
                Professional plant installations improve indoor air quality and wellness
              </p>
            </div>
          </div>

          {/* Mission Statement */}
          <div className="text-center mb-16">
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-4xl mx-auto">
              We bring life to Atlanta's best workspaces through expert biophilic design and professional plant care. 
              <strong className="text-foreground"> Every installation is designed to enhance employee well-being and create lasting first impressions.</strong>
            </p>
          </div>

          {/* Service Areas */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50/50 p-10 rounded-3xl shadow-xl border border-green-100">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Serving Atlanta's Premier Business Districts
              </h3>
              <p className="text-xl text-muted-foreground">
                Professional office plant services throughout Metro Atlanta
              </p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto">
              <div className="group bg-white p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center transform hover:scale-105 border border-gray-100 min-h-[80px] sm:min-h-[90px] flex flex-col justify-center">
                <h4 className="font-bold text-green-700 mb-1 sm:mb-2 group-hover:text-green-800 transition-colors text-sm sm:text-base">Buckhead</h4>
                <p className="text-xs sm:text-sm text-muted-foreground">Financial District</p>
              </div>
              <div className="group bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center transform hover:scale-105 border border-gray-100">
                <h4 className="font-bold text-green-700 mb-2 group-hover:text-green-800 transition-colors">Midtown</h4>
                <p className="text-sm text-muted-foreground">Corporate Corridor</p>
              </div>
              <div className="group bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center transform hover:scale-105 border border-gray-100">
                <h4 className="font-bold text-green-700 mb-2 group-hover:text-green-800 transition-colors">Sandy Springs</h4>
                <p className="text-sm text-muted-foreground">Business Hub</p>
              </div>
              <div className="group bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center transform hover:scale-105 border border-gray-100">
                <h4 className="font-bold text-green-700 mb-2 group-hover:text-green-800 transition-colors">Alpharetta</h4>
                <p className="text-sm text-muted-foreground">Tech Corridor</p>
              </div>
              <div className="group bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center transform hover:scale-105 border border-gray-100">
                <h4 className="font-bold text-green-700 mb-2 group-hover:text-green-800 transition-colors">Decatur</h4>
                <p className="text-sm text-muted-foreground">Creative District</p>
              </div>
              <div className="group bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center transform hover:scale-105 border border-gray-100">
                <h4 className="font-bold text-green-700 mb-2 group-hover:text-green-800 transition-colors">Dunwoody</h4>
                <p className="text-sm text-muted-foreground">Office Parks</p>
              </div>
              <div className="group bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center transform hover:scale-105 border border-gray-100">
                <h4 className="font-bold text-green-700 mb-2 group-hover:text-green-800 transition-colors">Vinings</h4>
                <p className="text-sm text-muted-foreground">Business Center</p>
              </div>
              <div className="group bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center transform hover:scale-105 border border-gray-100">
                <h4 className="font-bold text-green-700 mb-2 group-hover:text-green-800 transition-colors">Marietta</h4>
                <p className="text-sm text-muted-foreground">Corporate Campus</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimplifiedHero;