
import { Button } from "@/components/ui/button";
import { Award, Users, Heart, Building2, Star, CheckCircle } from "lucide-react";

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

  const clientLogos = [
    "Georgia Tech", "Emory University", "Atlanta Public Schools", "Children's Healthcare of Atlanta",
    "SunTrust Plaza", "Buckhead Office Complex", "Atlantic Station", "Downtown Atlanta Hotels"
  ];

  const successStories = [
    {
      company: "Georgia Tech",
      event: "Employee Appreciation Week",
      quantity: "2,000 mini succulents",
      result: "100% positive feedback, boosted campus morale",
      image: "/lovable-uploads/f816d29c-4694-4186-8770-9e16ab935892.png"
    },
    {
      company: "Children's Healthcare of Atlanta",
      event: "Wellness Initiative",
      quantity: "500 air plant terrariums",
      result: "Reduced stress levels, improved workplace atmosphere",
      image: "/lovable-uploads/15d3c644-63db-450b-84cb-57bade84ab3f.png"
    },
    {
      company: "Emory University",
      event: "Faculty Appreciation",
      quantity: "300 custom arrangements",
      result: "Strengthened university culture, lasting impact",
      image: "/lovable-uploads/7ee3e1df-8037-4a61-8b9a-0fbc4fea25e5.png"
    }
  ];

  return (
    <section className="py-20 bg-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Trusted by Atlanta's Leading Organizations
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From corporate gifting to team workshops, we create meaningful plant experiences 
            that strengthen relationships and boost morale across Atlanta.
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

        {/* Client Logos */}
        <div className="text-center mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-8">Proudly Serving</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {clientLogos.map((client, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                <p className="text-sm font-medium text-muted-foreground">{client}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Success Stories */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-foreground mb-8">Client Success Stories</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={story.image}
                  alt={`${story.company} success story`}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <Star className="h-5 w-5 text-yellow-500 mr-1" />
                    <Star className="h-5 w-5 text-yellow-500 mr-1" />
                    <Star className="h-5 w-5 text-yellow-500 mr-1" />
                    <Star className="h-5 w-5 text-yellow-500 mr-1" />
                    <Star className="h-5 w-5 text-yellow-500 mr-1" />
                  </div>
                  <h4 className="text-lg font-bold text-foreground mb-2">{story.company}</h4>
                  <p className="text-sm text-muted-foreground mb-2">{story.event}</p>
                  <p className="text-sm font-medium text-green-600 mb-3">{story.quantity}</p>
                  <p className="text-sm text-muted-foreground">{story.result}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Plants Beat Traditional Gifts */}
        <div className="bg-white rounded-lg p-8 mb-8">
          <h3 className="text-2xl font-bold text-center text-foreground mb-8">
            Why Plant Gifts Beat Corporate Mugs Every Time
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Heart className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-3">Meaningful Connection</h4>
              <p className="text-muted-foreground">Plants create lasting emotional connections. Your team will remember the company that gave them life, not another mug for the cabinet.</p>
            </div>
            <div className="text-center">
              <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-3">Proven Health Benefits</h4>
              <p className="text-muted-foreground">NASA studies show plants improve air quality by 87%, reduce stress by 37%, and boost productivity by 15% - gifts that keep giving.</p>
            </div>
            <div className="text-center">
              <Award className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-3">Unique & Memorable</h4>
              <p className="text-muted-foreground">Stand out from the sea of branded merchandise. Plants show you care about your team's wellbeing and create conversation starters.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CorporateSuccess;
