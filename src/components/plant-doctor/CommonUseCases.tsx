
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Home, Stethoscope } from "lucide-react";

const CommonUseCases = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Real Situations We Help With Every Week
          </h2>
          <p className="text-lg text-muted-foreground">
            These are actual calls we receive regularly. Does any of this sound familiar?
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="border-green-200">
            <CardContent className="p-6">
              <div className="bg-green-100 p-4 rounded-lg mb-4">
                <Heart className="h-8 w-8 text-green-600 mx-auto" />
              </div>
              <h3 className="text-xl font-bold mb-3">"I inherited a peace lily from my grandmother's funeral..."</h3>
              <p className="text-muted-foreground mb-4">
                "It has sentimental value, but I don't know how to care for it and it's starting to look sick."
              </p>
              <div className="bg-orange-50 p-4 rounded-lg">
                <h4 className="font-semibold text-orange-800 mb-2">How We Help:</h4>
                <p className="text-sm text-orange-700">
                  Nick assesses the plant's health, provides immediate treatment if needed, and teaches you exactly how to care for this meaningful plant so it thrives for years to come.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-green-200">
            <CardContent className="p-6">
              <div className="bg-blue-100 p-4 rounded-lg mb-4">
                <Home className="h-8 w-8 text-blue-600 mx-auto" />
              </div>
              <h3 className="text-xl font-bold mb-3">"My plant has outgrown its pot..."</h3>
              <p className="text-muted-foreground mb-4">
                "I know it needs repotting but I don't want to mess it up. I don't have the right soil or tools."
              </p>
              <div className="bg-orange-50 p-4 rounded-lg">
                <h4 className="font-semibold text-orange-800 mb-2">How We Help:</h4>
                <p className="text-sm text-orange-700">
                  You just provide the new pot. Nick brings everything else - proper soil, tools, treatments. He handles the repotting professionally while you watch and learn.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-green-200">
            <CardContent className="p-6">
              <div className="bg-red-100 p-4 rounded-lg mb-4">
                <Stethoscope className="h-8 w-8 text-red-600 mx-auto" />
              </div>
              <h3 className="text-xl font-bold mb-3">"My fiddle leaf fig is dropping leaves..."</h3>
              <p className="text-muted-foreground mb-4">
                "The leaves are browning and falling off. I think I'm overwatering but I'm not sure what to do."
              </p>
              <div className="bg-orange-50 p-4 rounded-lg">
                <h4 className="font-semibold text-orange-800 mb-2">How We Help:</h4>
                <p className="text-sm text-orange-700">
                  Nick diagnoses the exact issue - watering, light, soil, or disease. He provides immediate treatment and creates a custom care plan for your specific situation.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CommonUseCases;
