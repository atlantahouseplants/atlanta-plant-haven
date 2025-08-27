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
                Transform Your Workspace
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
            <div className="text-2xl font-bold text-foreground">CohnReznick</div>
            <div className="text-2xl font-bold text-foreground">Roark Capital</div>
            <div className="text-2xl font-bold text-foreground">Jencap Insurance</div>
            <div className="text-2xl font-bold text-foreground">PBS Aerospace</div>
          </div>
        </div>

        {/* Minimalist Mission Statement */}
        <div className="max-w-3xl mx-auto text-center mt-16">
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
            We bring life to Atlanta's best workspaces through expert biophilic design and professional plant care. 
            Transforming environments, enhancing well-being, building lasting partnerships.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SimplifiedHero;