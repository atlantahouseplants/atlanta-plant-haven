
import { Shield, Award, Clock, CheckCircle } from "lucide-react";

const PlantGuarantee = () => {
  return (
    <section className="py-20 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Your Plant Investment is 100% Protected
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Unlike our competitors, we guarantee every plant we install and maintain. Your success is our guarantee.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Guarantee Details */}
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-blue-600">
              <div className="flex items-center mb-4">
                <Shield className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-bold">100% Plant Replacement Guarantee</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Any plant we install and maintain that doesn't thrive gets replaced at no cost to you. Period.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                  <span>Covers all maintained plants for life of service</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                  <span>No questions asked replacement policy</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                  <span>Includes delivery and installation of replacement</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-green-600">
              <div className="flex items-center mb-4">
                <Award className="h-8 w-8 text-green-600 mr-3" />
                <h3 className="text-xl font-bold">Professional Expertise Guarantee</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Nick's UGA Horticulture degree and Georgia certification ensure expert plant selection and care.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                  <span>University of Georgia trained plant professional</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                  <span>State of Georgia certified plant expert</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                  <span>15+ years of hands-on plant care experience</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-orange-600">
              <div className="flex items-center mb-4">
                <Clock className="h-8 w-8 text-orange-600 mr-3" />
                <h3 className="text-xl font-bold">Response Time Guarantee</h3>
              </div>
              <p className="text-muted-foreground">
                We respond to all design requests within 24 hours and emergency plant issues within 48 hours.
              </p>
            </div>
          </div>

          {/* Competitor Comparison */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-center mb-6">Why We're Different</h3>
            <div className="space-y-6">
              <div className="border-b pb-4">
                <h4 className="font-bold text-green-600 mb-2">✓ Our Approach</h4>
                <p className="text-sm text-muted-foreground">
                  UGA-certified plant professional with 15+ years experience, backed by education and expertise.
                </p>
              </div>
              <div className="border-b pb-4">
                <h4 className="font-bold text-red-600 mb-2">✗ Typical Competitors</h4>
                <p className="text-sm text-muted-foreground">
                  $20/hour workers from job boards with no plant education or professional training.
                </p>
              </div>
              
              <div className="border-b pb-4">
                <h4 className="font-bold text-green-600 mb-2">✓ Our Guarantee</h4>
                <p className="text-sm text-muted-foreground">
                  100% plant replacement guarantee on all maintained plants for life of service.
                </p>
              </div>
              <div className="border-b pb-4">
                <h4 className="font-bold text-red-600 mb-2">✗ Typical Competitors</h4>
                <p className="text-sm text-muted-foreground">
                  No guarantees, limited warranties, or expensive replacement fees.
                </p>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-bold text-green-800 mb-2">The Bottom Line</h4>
                <p className="text-sm text-green-700">
                  Your plants will thrive because they're cared for by a true professional, not just someone who needs a job.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlantGuarantee;
