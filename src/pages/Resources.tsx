import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, FileText, Calculator, Users, Leaf, BookOpen } from "lucide-react";
import { useForm } from "@/components/forms/FormContext";

const Resources = () => {
  const { openForm } = useForm();

  const resources = [
    {
      icon: Calculator,
      title: "Office Plant ROI Calculator",
      description: "Calculate the potential return on investment for office plants in your workplace. Include productivity gains, sick day reductions, and employee satisfaction metrics.",
      type: "Interactive Tool",
      cta: "Calculate Your ROI",
      action: () => openForm('business-quote')
    },
    {
      icon: FileText,
      title: "The Complete Guide to Office Plants",
      description: "A comprehensive 20-page guide covering plant selection, placement strategies, and maintenance schedules for Atlanta businesses.",
      type: "PDF Guide",
      cta: "Download Free Guide",
      action: () => openForm('business-quote')
    },
    {
      icon: Users,
      title: "Biophilic Design for Productivity",
      description: "Research-backed whitepaper on how plants and natural elements improve employee performance, creativity, and well-being.",
      type: "Whitepaper",
      cta: "Get Whitepaper",
      action: () => openForm('business-quote')
    },
    {
      icon: Leaf,
      title: "Atlanta Plant Selection Guide",
      description: "Best office plants for Atlanta's climate and indoor conditions, including low-light and high-humidity options for different office spaces.",
      type: "Plant Guide",
      cta: "Download Guide",
      action: () => openForm('business-quote')
    },
    {
      icon: BookOpen,
      title: "Office Plant Care Calendar",
      description: "Monthly maintenance checklist and seasonal care tips specifically designed for Atlanta's climate and office environments.",
      type: "Care Calendar",
      cta: "Get Calendar",
      action: () => openForm('business-quote')
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight mb-8">
              Free Business Plant Resources
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Expert guides, calculators, and tools to help you make informed decisions about office plants for your Atlanta business
            </p>
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                      <resource.icon className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{resource.title}</h3>
                      <span className="text-sm text-green-600 font-medium">{resource.type}</span>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {resource.description}
                  </p>
                  
                  <Button 
                    onClick={resource.action}
                    className="w-full bg-green-600 hover:bg-green-700 text-white group-hover:shadow-lg transition-all"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    {resource.cta}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why These Resources Matter */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Make Data-Driven Decisions About Office Plants
            </h2>
            <p className="text-xl text-muted-foreground">
              These resources help you build a compelling business case for office plants
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calculator className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Calculate ROI</h3>
              <p className="text-muted-foreground">
                Quantify the financial benefits of office plants for budget approval and stakeholder buy-in.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Educate Stakeholders</h3>
              <p className="text-muted-foreground">
                Share research-backed benefits with executives, HR teams, and facility managers.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Plan Successfully</h3>
              <p className="text-muted-foreground">
                Make informed decisions about plant selection, placement, and ongoing care requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Atlanta Office?
          </h2>
          <p className="text-xl mb-8 text-green-100">
            Get your free consultation and custom plant design from our certified plant professionals.
          </p>
          
          <Button 
            size="lg"
            onClick={() => openForm('business-quote')}
            className="bg-white text-green-600 hover:bg-gray-100 text-xl px-12 py-6"
          >
            Schedule Free Consultation
          </Button>
          
          <div className="mt-8 text-green-100">
            <p>✓ No obligation • ✓ 24-hour response • ✓ UGA certified expert</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Resources;