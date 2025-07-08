
import { Shield, Award, Leaf, Clock, Star, Users } from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: Award,
      title: "UGA Certified Expert",
      description: "Nick holds a Horticulture degree from University of Georgia with 15+ years of professional experience."
    },
    {
      icon: Shield,
      title: "100% Plant Guarantee",
      description: "We guarantee your investment on all plants we install and maintain with our ongoing care service."
    },
    {
      icon: Leaf,
      title: "Custom Plant Solutions",
      description: "Every design is tailored to your space, lighting conditions, and maintenance preferences."
    },
    {
      icon: Clock,
      title: "Reliable Service",
      description: "Consistent, professional service you can count on. We show up when promised and deliver results."
    },
    {
      icon: Star,
      title: "5-Star Reviews",
      description: "Hundreds of satisfied customers across Atlanta trust us with their plant care needs."
    },
    {
      icon: Users,
      title: "Local Atlanta Business",
      description: "Proudly serving Atlanta for over 15 years. We understand the local climate and business needs."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Atlanta Businesses Choose Us
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional expertise, guaranteed results, and personalized service that keeps your plants thriving.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6 group-hover:bg-green-200 transition-colors duration-300">
                <feature.icon className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Credentials Section */}
        <div className="mt-16 bg-green-50 p-8 rounded-lg text-center border-2 border-green-200">
          <div className="flex items-center justify-center mb-4">
            <img 
              src="/lovable-uploads/9a6a89cb-90a7-48df-a670-52cf61f223ea.png" 
              alt="Nick - Plant Doctor providing professional plant care"
              className="w-24 h-24 rounded-full object-cover mr-6 border-4 border-green-600"
            />
            <div className="text-left">
              <h3 className="text-3xl font-bold text-foreground">Meet Nick, Your Plant Doctor</h3>
              <p className="text-green-600 font-bold text-lg">🎓 UGA Horticulture Graduate • 15+ Years Experience</p>
              <p className="text-orange-600 font-medium">✓ Georgia Certified Professional • Same-Week Appointments</p>
            </div>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            "I've dedicated my career to helping Atlanta businesses and homeowners create beautiful, healthy plant environments. 
            Every installation comes with my personal guarantee and ongoing support."
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
