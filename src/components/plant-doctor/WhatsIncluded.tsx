
import { Card, CardContent } from "@/components/ui/card";
import { Stethoscope, Heart, CheckCircle, Leaf } from "lucide-react";

const WhatsIncluded = () => {
  return (
    <section className="py-20 bg-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            What's Included in Your $149 Plant Doctor Visit
          </h2>
          <p className="text-lg text-muted-foreground">
            A comprehensive 90-minute service that gives your plants the best chance to thrive
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: <Stethoscope className="h-8 w-8 text-green-600" />,
              title: "Complete Health Assessment",
              description: "Thorough examination of all your plants to identify problems and health status"
            },
            {
              icon: <Heart className="h-8 w-8 text-red-600" />,
              title: "Professional Diagnosis",
              description: "Expert identification of diseases, pests, watering issues, or environmental problems"
            },
            {
              icon: <CheckCircle className="h-8 w-8 text-blue-600" />,
              title: "Immediate Treatment",
              description: "On-the-spot treatment for urgent issues, repotting if needed, and problem solving"
            },
            {
              icon: <Leaf className="h-8 w-8 text-orange-600" />,
              title: "Custom Care Plan",
              description: "Personalized watering, lighting, and feeding schedule for each of your plants"
            }
          ].map((item, index) => (
            <Card key={index} className="text-center">
              <CardContent className="p-6">
                <div className="bg-gray-50 p-4 rounded-lg mb-4 flex justify-center">
                  {item.icon}
                </div>
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatsIncluded;
