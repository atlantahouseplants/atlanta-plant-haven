import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const SimplifiedHero = () => {
  return (
    <section className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-muted via-background to-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight mb-8">
            We Create Environments
            <span className="block text-green-600 bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent">
              That Thrive
            </span>
          </h1>
          
          <div className="mb-16 rounded-2xl overflow-hidden shadow-2xl max-w-5xl mx-auto">
            <img 
              src="/lovable-uploads/24794cd6-d871-433d-8ce5-1b5d61120d74.png" 
              alt="Luxurious corporate plant installation by Atlanta Houseplants"
              className="w-full h-96 md:h-[500px] object-cover"
            />
          </div>

          {/* The Two Paths */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
            <Link to="/office-plants">
              <Button 
                size="lg"
                className="w-full h-20 text-xl bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white shadow-xl"
              >
                Get Free Office Plant Consultation
                <ArrowRight className="ml-2 h-6 w-6" />
              </Button>
            </Link>
            
            <Link to="/corporate">
              <Button 
                size="lg"
                className="w-full h-20 text-xl bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white shadow-xl"
              >
                Elevate Your Corporate Gifting
                <ArrowRight className="ml-2 h-6 w-6" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Social Proof Bar */}
        <div className="text-center">
          <h3 className="text-lg font-semibold text-muted-foreground mb-6">
            Trusted by Atlanta's Leading Firms
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-2xl font-bold text-foreground">Marriott</div>
            <div className="text-2xl font-bold text-foreground">Archer Western</div>
            <div className="text-2xl font-bold text-foreground">OneStreet Residential</div>
            <div className="text-2xl font-bold text-foreground">Perkins and Will</div>
            <div className="text-2xl font-bold text-foreground">Loria Ansley</div>
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
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">15%</div>
              <h3 className="font-semibold text-lg mb-2">Increased Productivity</h3>
              <p className="text-muted-foreground text-sm">
                University studies show office plants boost focus and task performance
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">38%</div>
              <h3 className="font-semibold text-lg mb-2">Reduced Fatigue</h3>
              <p className="text-muted-foreground text-sm">
                Biophilic design elements significantly reduce mental fatigue and stress
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">25%</div>
              <h3 className="font-semibold text-lg mb-2">Better Air Quality</h3>
              <p className="text-muted-foreground text-sm">
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
          <div className="bg-green-50 p-8 rounded-2xl">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Serving Atlanta's Premier Business Districts
              </h3>
              <p className="text-lg text-muted-foreground">
                Professional office plant services throughout Metro Atlanta
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto text-center">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-green-700 mb-1">Buckhead</h4>
                <p className="text-sm text-muted-foreground">Financial District</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-green-700 mb-1">Midtown</h4>
                <p className="text-sm text-muted-foreground">Corporate Corridor</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-green-700 mb-1">Sandy Springs</h4>
                <p className="text-sm text-muted-foreground">Business Hub</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-green-700 mb-1">Alpharetta</h4>
                <p className="text-sm text-muted-foreground">Tech Corridor</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-green-700 mb-1">Decatur</h4>
                <p className="text-sm text-muted-foreground">Creative District</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-green-700 mb-1">Dunwoody</h4>
                <p className="text-sm text-muted-foreground">Office Parks</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-green-700 mb-1">Vinings</h4>
                <p className="text-sm text-muted-foreground">Business Center</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-green-700 mb-1">Marietta</h4>
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