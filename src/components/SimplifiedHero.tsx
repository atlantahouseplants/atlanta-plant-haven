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
            <h1 className="text-5xl sm:text-6xl md:text-8xl font-black text-foreground leading-[0.9] mb-6 tracking-tight">
              <span className="block bg-gradient-to-r from-green-600 via-green-500 to-emerald-500 bg-clip-text text-transparent drop-shadow-sm">
                Transform
              </span>
              <span className="block text-foreground">
                Your Atlanta Workspace
              </span>
            </h1>
          </div>
          
          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-2xl md:text-3xl text-muted-foreground leading-relaxed font-medium text-center">
              Elevate Your Brand, Boost Employee Well-being, and Create an Unforgettable First Impression
            </p>
          </div>
          
          <div className="mb-16 rounded-3xl overflow-hidden shadow-2xl max-w-5xl mx-auto ring-1 ring-black/5 hover:shadow-3xl transition-shadow duration-500">
            <img 
              src="/lovable-uploads/6af17da1-48bd-4128-9ec9-22df7aebc7eb.png" 
              alt="Professional plant maintenance service in Atlanta high-rise office with multiple plants and downtown skyline view"
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
                  <span className="text-base sm:text-lg mb-1">Transform Your Workspace</span>
                  <span className="text-xs sm:text-sm opacity-90 font-medium">✓ Free Consultation • Same Week Response</span>
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

        {/* Strategic Social Proof - Immediately After Hero */}
        <div className="text-center mb-20">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-gray-200/50">
            <h3 className="text-3xl font-bold text-foreground mb-3">
              Trusted by Atlanta's Leading Firms
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12 mt-8">
              <div className="text-3xl font-bold text-foreground hover:text-green-600 transition-colors cursor-default">Marriott</div>
              <div className="text-3xl font-bold text-foreground hover:text-green-600 transition-colors cursor-default">Archer Western</div>
              <div className="text-3xl font-bold text-foreground hover:text-green-600 transition-colors cursor-default">OneStreet Residential</div>
              <div className="text-3xl font-bold text-foreground hover:text-green-600 transition-colors cursor-default">Perkins and Will</div>
              <div className="text-3xl font-bold text-foreground hover:text-green-600 transition-colors cursor-default">Loria Ansley</div>
            </div>
          </div>
        </div>

        {/* Strategic Mission Statement Section */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            A New Standard of Professional Plant Care
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto">
            We transform Atlanta workspaces through expert biophilic design and guaranteed plant care. 
            Every installation is designed to elevate your brand and create lasting first impressions that matter to your business.
          </p>
        </div>

        {/* Final Strategic CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-br from-green-50 to-emerald-50/50 p-12 rounded-3xl shadow-xl border border-green-100">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              Ready to Begin Your Transformation?
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <Link to="/office-plants" className="group">
                <Button 
                  size="lg"
                  className="w-full h-20 text-xl bg-gradient-to-r from-green-600 via-green-500 to-green-600 hover:from-green-700 hover:via-green-600 hover:to-green-700 text-white shadow-2xl hover:shadow-green-500/25 transform hover:scale-[1.02] transition-all duration-300 border-0 font-bold tracking-wide rounded-2xl"
                >
                  Transform Your Workspace
                  <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              
              <Link to="/corporate" className="group">
                <Button 
                  size="lg"
                  className="w-full h-20 text-xl bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 hover:from-blue-700 hover:via-blue-600 hover:to-blue-700 text-white shadow-2xl hover:shadow-blue-500/25 transform hover:scale-[1.02] transition-all duration-300 border-0 font-bold tracking-wide rounded-2xl"
                >
                  Elevate Your Corporate Gifting
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