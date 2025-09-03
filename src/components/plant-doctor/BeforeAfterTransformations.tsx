
import { Button } from "@/components/ui/button";
import { Stethoscope, Heart, CheckCircle } from "lucide-react";

interface BeforeAfterTransformationsProps {
  onBookingClick: () => void;
}

const BeforeAfterTransformations = ({ onBookingClick }: BeforeAfterTransformationsProps) => {
  const transformations = [
    {
      beforeImage: "/images/service-maintenance/nick-plant-care-action.png",
      beforeAlt: "Plant showing stress and health issues before professional treatment",
      beforeTitle: "Struggling Office Plants",
      beforeDescription: "Multiple plants showing common office problems: yellowing leaves, pest issues, and poor growth",
      afterImage: "/images/individual-plants/monstera-deliciosa-terracotta-pot.png",
      afterAlt: "Healthy, vibrant Monstera after professional plant doctor treatment",
      afterTitle: "Thriving & Healthy Plants",
      afterDescription: "After Nick's treatment, plants show vibrant, healthy foliage with proper structure and care",
      problemDiagnosed: "Multiple issues: pest infestations, poor soil conditions, inadequate lighting, overwatering",
      treatmentApplied: "Comprehensive plant health assessment, pest treatment, soil amendment, proper positioning guidance",
      resultAchieved: "Complete plant health recovery with customized care plan and ongoing maintenance protocols"
    },
    {
      beforeImage: "/images/corporate-offices/monstera-office-corner-professional.png",
      beforeAlt: "Office plant in corner showing signs of neglect and poor health",
      beforeTitle: "Neglected Office Corner Plant",
      beforeDescription: "Corporate plant suffering from inadequate care, poor positioning, and environmental stress",
      afterImage: "/images/individual-plants/monstera-deliciosa-wicker-basket.png",
      afterAlt: "Beautifully restored office plant in optimal condition",
      afterTitle: "Professional Office Plant Display",
      afterDescription: "Transformed into a stunning focal point with proper care, positioning, and maintenance schedule",
      problemDiagnosed: "Environmental stress, improper watering schedule, poor soil conditions, suboptimal lighting",
      treatmentApplied: "Strategic repositioning, soil replacement, customized watering schedule, professional maintenance plan",
      resultAchieved: "Complete transformation into thriving office centerpiece with sustainable care protocols"
    },
    {
      beforeImage: "/images/service-maintenance/nick-plant-doctor-casual.png",
      beforeAlt: "Nick assessing multiple struggling plants in office environment",
      beforeTitle: "Multiple Plant Health Issues",
      beforeDescription: "Office environment with several plants showing various health problems requiring expert intervention",
      afterImage: "/images/corporate-offices/bird-of-paradise-atlanta-skyline.png",
      afterAlt: "Healthy office plants creating vibrant workspace environment",
      afterTitle: "Complete Office Plant Transformation",
      afterDescription: "Professional plant care resulting in lush, healthy office environment enhancing workplace productivity",
      problemDiagnosed: "Systematic plant health issues across office environment, improper care protocols, environmental factors",
      treatmentApplied: "Comprehensive office plant audit, individual plant treatment plans, staff training, ongoing maintenance",
      resultAchieved: "Complete office plant ecosystem transformation with measurable improvements in plant health and workplace atmosphere"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Professional Plant Doctor Success Stories
          </h2>
          <p className="text-lg text-muted-foreground">
            Discover how Nick's expert plant care transforms struggling office environments into thriving, healthy workspaces
          </p>
        </div>

        <div className="space-y-16">
          {transformations.map((transformation, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Before Image */}
                <div className="relative">
                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-red-600 text-white px-4 py-2 rounded-full font-semibold text-sm">
                      BEFORE
                    </span>
                  </div>
                  <img 
                    src={transformation.beforeImage}
                    alt={transformation.beforeAlt}
                    className="w-full h-80 lg:h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-xl font-bold mb-2">{transformation.beforeTitle}</h3>
                    <p className="text-sm opacity-90">
                      {transformation.beforeDescription}
                    </p>
                  </div>
                </div>

                {/* After Image */}
                <div className="relative">
                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-green-600 text-white px-4 py-2 rounded-full font-semibold text-sm">
                      AFTER
                    </span>
                  </div>
                  <img 
                    src={transformation.afterImage}
                    alt={transformation.afterAlt}
                    className="w-full h-80 lg:h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-xl font-bold mb-2">{transformation.afterTitle}</h3>
                    <p className="text-sm opacity-90">
                      {transformation.afterDescription}
                    </p>
                  </div>
                </div>
              </div>

              {/* Treatment Details */}
              <div className="p-8 bg-gray-50">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="bg-red-100 p-3 rounded-lg mb-3 inline-block">
                      <Stethoscope className="h-6 w-6 text-red-600" />
                    </div>
                    <h4 className="font-semibold mb-2">Problem Diagnosed</h4>
                    <p className="text-sm text-muted-foreground">
                      {transformation.problemDiagnosed}
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="bg-blue-100 p-3 rounded-lg mb-3 inline-block">
                      <Heart className="h-6 w-6 text-blue-600" />
                    </div>
                    <h4 className="font-semibold mb-2">Treatment Applied</h4>
                    <p className="text-sm text-muted-foreground">
                      {transformation.treatmentApplied}
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="bg-green-100 p-3 rounded-lg mb-3 inline-block">
                      <CheckCircle className="h-6 w-6 text-green-600" />
                    </div>
                    <h4 className="font-semibold mb-2">Result Achieved</h4>
                    <p className="text-sm text-muted-foreground">
                      {transformation.resultAchieved}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground mb-6">
            Ready to see similar results with your plants?
          </p>
          <Button 
            onClick={onBookingClick}
            className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 text-lg"
          >
            Book Your Plant Doctor Visit - $149
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterTransformations;
