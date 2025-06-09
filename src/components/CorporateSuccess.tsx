
import { Button } from "@/components/ui/button";
import { Award, Users, Heart, Building2 } from "lucide-react";

const CorporateSuccess = () => {
  const successStats = [
    {
      icon: Building2,
      number: "500+",
      text: "Atlanta Businesses Served"
    },
    {
      icon: Users,
      number: "2,000+",
      text: "Plants Delivered to Georgia Tech"
    },
    {
      icon: Heart,
      number: "10,000+",
      text: "Succulents Donated to Charity"
    },
    {
      icon: Award,
      number: "15+",
      text: "Years of Plant Expertise"
    }
  ];

  return (
    <section className="py-20 bg-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Proven Success with Atlanta's Leading Companies
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From individual offices to campus-wide installations, we deliver results that grow your business.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {successStats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-600 rounded-full mb-4">
                <stat.icon className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-green-600 mb-2">{stat.number}</div>
              <p className="text-muted-foreground font-medium">{stat.text}</p>
            </div>
          ))}
        </div>

        {/* Georgia Tech Case Study */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0">
            <div className="p-8 lg:p-12">
              <div className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium inline-block mb-4">
                🏆 Featured Case Study
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Georgia Tech: 2,000 Mini Succulents for Employee Appreciation
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                When Georgia Tech needed a meaningful way to show appreciation to their entire campus staff, 
                they trusted us to deliver 2,000 beautiful mini succulents with custom care instructions.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-sm">
                  <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs mr-3">✓</span>
                  <span>Delivered across multiple campus locations</span>
                </div>
                <div className="flex items-center text-sm">
                  <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs mr-3">✓</span>
                  <span>Custom branded care cards included</span>
                </div>
                <div className="flex items-center text-sm">
                  <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs mr-3">✓</span>
                  <span>Coordinated with HR for seamless distribution</span>
                </div>
                <div className="flex items-center text-sm">
                  <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs mr-3">✓</span>
                  <span>100% positive feedback from recipients</span>
                </div>
              </div>
              <Button className="bg-green-600 hover:bg-green-700 text-white">
                Request Your Corporate Quote
              </Button>
            </div>
            <div className="lg:h-full">
              <img
                src="/lovable-uploads/f816d29c-4694-4186-8770-9e16ab935892.png"
                alt="Georgia Tech corporate succulent delivery"
                className="w-full h-64 lg:h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Corporate Calculator Widget */}
        <div className="bg-white p-8 rounded-lg shadow-lg mt-12 max-w-2xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Quick Corporate Order Calculator
          </h3>
          <p className="text-muted-foreground mb-6">
            How many team members do you want to appreciate?
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {[
              { count: "50", price: "$350" },
              { count: "100", price: "$650" },
              { count: "500", price: "$2,750" },
              { count: "1000+", price: "Call for pricing" }
            ].map((option, index) => (
              <div key={index} className="border-2 border-green-200 rounded-lg p-4 hover:border-green-600 cursor-pointer transition-colors">
                <div className="text-2xl font-bold text-green-600">{option.count}</div>
                <div className="text-sm text-muted-foreground">plants</div>
                <div className="text-lg font-semibold">{option.price}</div>
              </div>
            ))}
          </div>
          <Button className="bg-green-600 hover:bg-green-700 text-white">
            Get Exact Quote for My Team Size
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CorporateSuccess;
