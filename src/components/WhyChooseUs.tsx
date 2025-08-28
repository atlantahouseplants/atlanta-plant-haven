
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
            <div key={index} className="text-center group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 border border-gray-100/50">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl mb-6 group-hover:scale-110 group-hover:from-green-200 group-hover:to-green-300 transition-all duration-300 shadow-lg">
                <feature.icon className="h-10 w-10 text-green-700" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-green-700 transition-colors">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Enhanced Credentials Section */}
        <div className="mt-16 bg-gradient-to-br from-green-50 to-blue-50 p-10 rounded-xl border border-green-200 shadow-lg">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="flex items-center">
              <img 
                src="/lovable-uploads/9a6a89cb-90a7-48df-a670-52cf61f223ea.png" 
                alt="Nick - Plant Doctor providing professional plant care"
                className="w-28 h-28 rounded-full object-cover border-4 border-green-600 shadow-lg"
              />
              <div className="ml-6">
                <h3 className="text-3xl font-bold text-foreground mb-2">Meet Nick, Your Plant Doctor</h3>
                <div className="space-y-2">
                  <p className="text-green-700 font-bold text-lg flex items-center">
                    🎓 UGA Horticulture Graduate
                  </p>
                  <p className="text-blue-700 font-medium flex items-center">
                    ✓ Georgia Certified Plant Professional
                  </p>
                  <p className="text-purple-700 font-medium flex items-center">
                    🏆 15+ Years Commercial Experience
                  </p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-foreground">Professional Certifications & Expertise</h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="bg-white p-3 rounded-lg shadow-sm">
                  <strong className="text-green-600">UGA Horticulture Degree</strong>
                  <p className="text-muted-foreground">University of Georgia</p>
                </div>
                <div className="bg-white p-3 rounded-lg shadow-sm">
                  <strong className="text-blue-600">Georgia Licensed</strong>
                  <p className="text-muted-foreground">State Certified Professional</p>
                </div>
                <div className="bg-white p-3 rounded-lg shadow-sm">
                  <strong className="text-purple-600">Commercial Focus</strong>
                  <p className="text-muted-foreground">500+ Business Clients</p>
                </div>
                <div className="bg-white p-3 rounded-lg shadow-sm">
                  <strong className="text-orange-600">Biophilic Design</strong>
                  <p className="text-muted-foreground">Workplace Wellness Expert</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <blockquote className="text-lg text-muted-foreground max-w-4xl mx-auto italic">
              "I've dedicated my career to helping Atlanta businesses create beautiful, healthy plant environments. 
              Every installation comes with my personal guarantee and ongoing support. My goal is to transform 
              your workspace into a thriving, productive environment that your employees and clients will love."
            </blockquote>
            <cite className="text-green-700 font-semibold mt-4 block">– Nick, Founder & Head Horticulturalist</cite>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
