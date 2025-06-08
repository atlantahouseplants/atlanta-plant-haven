
import { Users, Award, Clock, MapPin } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Users, number: "500+", label: "Happy Clients" },
    { icon: Award, number: "15+", label: "Years Experience" },
    { icon: Clock, number: "24/7", label: "Plant Care Support" },
    { icon: MapPin, number: "Metro", label: "Atlanta Coverage" }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <div className="relative">
            <img
              src="/lovable-uploads/6decc00f-ce9c-49b1-840d-d7897f252047.png"
              alt="Professional plant installation in modern office"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-lg border border-border">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">15+</div>
                <div className="text-sm text-muted-foreground">Years Serving Atlanta</div>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Atlanta's Premier Plant Service Company
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  For over 15 years, Atlanta House Plants has been transforming office environments 
                  throughout the metro Atlanta area. We specialize in creating beautiful, healthy 
                  plant displays that improve air quality, boost employee wellness, and enhance 
                  your company's professional image.
                </p>
                <p>
                  Our team of certified plant specialists brings extensive knowledge of plant care, 
                  design principles, and environmental factors to every installation. We work with 
                  businesses of all sizes, from small startups to Fortune 500 companies.
                </p>
                <p>
                  Whether you need a single statement plant or a complete office transformation, 
                  we provide personalized service and guaranteed results that will exceed your expectations.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4 bg-green-50 rounded-lg">
                  <stat.icon className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
