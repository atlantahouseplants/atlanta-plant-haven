import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { FormProvider } from "@/components/forms/FormContext";
import FormModal from "@/components/forms/FormModal";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, X, Briefcase, MapPin, Clock, DollarSign, Car, Leaf, Users, TrendingUp, ArrowRight, Calendar } from "lucide-react";
import { Helmet } from "react-helmet";

const Careers = () => {
  const responsibilities = [
    "Drive to multiple client sites daily around the Atlanta metro area",
    "Water, prune, and clean indoor plants in offices, lobbies, and commercial spaces",
    "Remove yellowing/dead leaves and maintain professional appearance",
    "Check for common issues (watering, pests, disease, lighting problems)",
    "Perform simple plant swaps, replacements, and seasonal installations",
    "Follow service checklists to ensure consistent quality at each account",
    "Take photos and notes for plants needing replacement or special attention",
    "Communicate professionally with office managers and property managers",
    "Provide route feedback and suggestions to improve operations"
  ];

  const qualifications = [
    { text: "Reliable car and valid driver's license", required: true },
    { text: "Comfortable driving to multiple stops daily across Atlanta", required: true },
    { text: "Strong attention to detail and pride in quality work", required: true },
    { text: "Dependable, organized, and able to work independently", required: true },
    { text: "Clear communication with clients and team", required: true },
    { text: "Interest in plants and willingness to learn", required: true },
    { text: "Ownership mindset for route accountability", required: true },
    { text: "Previous interiorscape or plant care experience", required: false },
    { text: "Route-based field work experience (delivery, service, etc.)", required: false },
    { text: "Garden center, nursery, or landscaping background", required: false }
  ];

  const notForYou = [
    "Don't have reliable transportation or enjoy driving",
    "Can only work evenings and weekends (we work weekday daytime)",
    "Prefer desk work over hands-on field service",
    "Looking for a fully remote position",
    "Don't want responsibility for managing your own route",
    "Not comfortable working as a 1099 contractor"
  ];

  const benefits = [
    { icon: DollarSign, title: "Competitive Pay", description: "Hourly rate based on experience, discussed during interview" },
    { icon: Car, title: "Mileage Reimbursement", description: "Reimbursed for driving between client sites" },
    { icon: TrendingUp, title: "Performance Bonuses", description: "Earn bonuses based on plant quality, client satisfaction, and reliability" },
    { icon: Calendar, title: "Flexible Schedule", description: "Primarily Monday-Friday daytime, 30-40 hours per week" },
    { icon: Leaf, title: "Learn & Grow", description: "Develop expertise in commercial plant care and interiorscaping" },
    { icon: Users, title: "Direct Impact", description: "Take ownership of accounts and see results of your work" }
  ];

  return (
    <FormProvider>
      <Helmet>
        <title>Plant Care Specialist Job Opening - Atlanta Houseplants Careers</title>
        <meta name="description" content="Join Atlanta Houseplants as a Plant Care & Operations Specialist. Route-based position serving commercial clients across Atlanta metro. 30-40 hrs/week, 1099 contract." />
        <meta name="keywords" content="plant care jobs Atlanta, interiorscape technician Atlanta, plant technician job, indoor plant care Atlanta, commercial plant service jobs, Atlanta plant care careers, horticultural jobs Atlanta, plant maintenance jobs" />
        <meta property="og:title" content="Now Hiring: Plant Care & Operations Specialist - Atlanta Houseplants" />
        <meta property="og:description" content="Route-based plant care position in Atlanta. Care for plants at offices, hotels, and commercial properties. Competitive pay + mileage + bonuses." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://atlantahouseplants.com/careers" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />

        <main>
          {/* Hero Section */}
          <section className="pt-24 pb-12 bg-gradient-to-br from-green-50 via-background to-blue-50/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-8">
                <div className="inline-block mb-4">
                  <span className="bg-green-100 text-green-800 text-sm font-semibold px-4 py-2 rounded-full">
                    We're Hiring!
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-6">
                  Join Our Growing Team
                </h1>
                <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto mb-8">
                  Help Atlanta businesses create beautiful, healthy plant environments.
                  Route-based plant care position available now.
                </p>
              </div>
            </div>
          </section>

          {/* Video Section */}
          <section className="py-12 bg-white">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  See What The Job Is Really Like
                </h2>
                <p className="text-xl text-gray-600">
                  Watch this 2-minute overview of the position and our company
                </p>
              </div>

              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-green-200 bg-black">
                <video
                  controls
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-auto"
                  preload="auto"
                >
                  <source src="/videos/plant-care-ops-specialist.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>

              <div className="mt-8 text-center">
                <a href="https://app.gohighlevel.com/v2/preview/gWf0eHW3LMHhZpcUqmth?notrack=true" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-gradient-to-r from-green-600 via-green-500 to-green-600 hover:from-green-700 hover:via-green-600 hover:to-green-700 text-white shadow-xl hover:shadow-green-500/25 transform hover:scale-[1.02] transition-all duration-300 border-0 font-semibold rounded-xl h-14 px-10 text-lg">
                    Apply Now After Watching
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </a>
              </div>
            </div>
          </section>

          {/* Infographic Section */}
          <section className="py-12 bg-gradient-to-br from-blue-50 to-indigo-50/30">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  What Makes This Role Unique
                </h2>
                <p className="text-xl text-gray-600">
                  See what a typical day looks like for our Plant Care Specialists
                </p>
              </div>

              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-blue-200 bg-white">
                <img
                  src="/images/careers/job-infographic.png"
                  alt="Plant Care & Operations Specialist job infographic showing daily responsibilities and work environment"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </section>

          {/* Job Overview Card */}
          <section className="py-12 bg-gradient-to-br from-gray-50 to-blue-50/30">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <Card className="border-2 border-green-200 shadow-xl">
                <CardHeader className="bg-gradient-to-br from-green-50 to-emerald-50 border-b border-green-200">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl mb-4 mx-auto shadow-lg">
                    <Briefcase className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-3xl font-bold text-center text-green-800">
                    Plant Care & Operations Specialist
                  </CardTitle>
                  <CardDescription className="text-center text-lg text-green-700 mt-2">
                    Atlanta Houseplants · Atlanta, GA Metro
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-8">
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <MapPin className="h-8 w-8 text-green-600 mx-auto mb-2" />
                      <div className="font-semibold text-gray-900">Location</div>
                      <div className="text-sm text-gray-600 mt-1">Atlanta Metro<br/>Field-Based</div>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <Clock className="h-8 w-8 text-green-600 mx-auto mb-2" />
                      <div className="font-semibold text-gray-900">Hours</div>
                      <div className="text-sm text-gray-600 mt-1">30-40 hrs/week<br/>M-F Daytime</div>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <Briefcase className="h-8 w-8 text-green-600 mx-auto mb-2" />
                      <div className="font-semibold text-gray-900">Status</div>
                      <div className="text-sm text-gray-600 mt-1">1099 Contract<br/>Independent</div>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <DollarSign className="h-8 w-8 text-green-600 mx-auto mb-2" />
                      <div className="font-semibold text-gray-900">Pay</div>
                      <div className="text-sm text-gray-600 mt-1">Competitive<br/>+ Mileage + Bonuses</div>
                    </div>
                  </div>

                  <div className="text-center">
                    <a href="https://app.gohighlevel.com/v2/preview/gWf0eHW3LMHhZpcUqmth?notrack=true" target="_blank" rel="noopener noreferrer">
                      <Button size="lg" className="bg-gradient-to-r from-green-600 via-green-500 to-green-600 hover:from-green-700 hover:via-green-600 hover:to-green-700 text-white shadow-xl hover:shadow-green-500/25 transform hover:scale-[1.02] transition-all duration-300 border-0 font-semibold rounded-xl h-16 px-10 text-lg">
                        Apply Now
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </a>
                    <p className="text-sm text-gray-600 mt-4">
                      Click to complete our short online application
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* About Section */}
          <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50/30">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-6">
                About Atlanta Houseplants
              </h2>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Atlanta Houseplants is a small, growing interiorscape and plant-care business based in the Atlanta metro area. We design, install, and maintain live plant programs for offices, lobbies, commercial buildings, hotels, restaurants, and select residential clients.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Our work is all about keeping our clients' spaces looking great with healthy, well-cared-for plants, week after week. We're looking for a Plant Care & Operations Specialist who can take ownership of a plant-care route and support day-to-day operations as we grow.
                </p>
              </div>
            </div>
          </section>

          {/* What You'll Do */}
          <section className="py-16 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
                What You'll Do
              </h2>
              <p className="text-xl text-gray-600 text-center mb-12">
                This is a hands-on, route-based role with light operations work
              </p>

              <Card className="border-2 border-gray-200">
                <CardContent className="pt-8">
                  <ul className="space-y-4">
                    {responsibilities.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-0.5">
                          <Check className="h-4 w-4 text-green-600" />
                        </div>
                        <span className="text-gray-700 text-lg">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 p-6 bg-blue-50 border border-blue-200 rounded-xl">
                    <p className="text-blue-800 font-medium text-center">
                      <strong>Important:</strong> This is an on-your-feet, field-service role—not a desk job and not retail.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Who You Are */}
          <section className="py-16 bg-gradient-to-br from-green-50 to-emerald-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
                Who You Are
              </h2>
              <p className="text-xl text-gray-600 text-center mb-12">
                You don't need to be a plant expert on day one
              </p>

              <Card className="border-2 border-green-200">
                <CardContent className="pt-8">
                  <ul className="space-y-4">
                    {qualifications.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mr-4 mt-0.5 ${item.required ? 'bg-green-100' : 'bg-blue-100'}`}>
                          <Check className={`h-4 w-4 ${item.required ? 'text-green-600' : 'text-blue-600'}`} />
                        </div>
                        <span className="text-gray-700 text-lg">
                          {item.text}
                          {!item.required && <span className="text-sm text-gray-500 ml-2">(Helpful but not required)</span>}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* This Role Is Probably Not For You If */}
          <section className="py-16 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
                This Role Is Probably Not For You If...
              </h2>

              <Card className="border-2 border-red-200 bg-red-50/50">
                <CardContent className="pt-8">
                  <ul className="space-y-4">
                    {notForYou.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <div className="flex-shrink-0 w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-4 mt-0.5">
                          <X className="h-4 w-4 text-red-600" />
                        </div>
                        <span className="text-gray-700 text-lg">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Compensation & Benefits */}
          <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50/30">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
                Compensation & Benefits
              </h2>
              <p className="text-xl text-gray-600 text-center mb-12">
                We believe in rewarding quality work and reliability
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {benefits.map((benefit, index) => (
                  <Card key={index} className="border-2 border-gray-200 hover:border-green-300 hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <div className="w-14 h-14 bg-gradient-to-br from-green-100 to-green-200 rounded-xl flex items-center justify-center mb-4">
                        <benefit.icon className="h-7 w-7 text-green-700" />
                      </div>
                      <CardTitle className="text-xl">{benefit.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">{benefit.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="mt-12 bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
                <h3 className="text-2xl font-bold text-foreground mb-4">Compensation Details</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3 mt-1">•</span>
                    <span><strong>Status:</strong> 1099 contractor (independent contractor)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3 mt-1">•</span>
                    <span><strong>Hours:</strong> Approximately 30-40 hours per week, primarily Monday-Friday daytime</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3 mt-1">•</span>
                    <span><strong>Pay:</strong> Competitive hourly rate based on your experience with plants, route work, and operations (discussed during interview)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3 mt-1">•</span>
                    <span><strong>Mileage:</strong> Reimbursed for driving between client sites</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3 mt-1">•</span>
                    <span><strong>Bonuses:</strong> Performance-based bonuses tied to plant quality, client satisfaction, and route reliability</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* How to Apply */}
          <section className="py-20 bg-gradient-to-br from-green-600 to-emerald-500 text-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Apply?
              </h2>
              <p className="text-xl mb-4 opacity-90">
                If this sounds like the kind of work you'd actually enjoy, we'd love to hear from you.
              </p>
              <p className="text-lg mb-8 opacity-80">
                Step 1: Complete our short online application<br/>
                Step 2: Strong candidates will be invited to Phase 2 (short video + scenario questions)<br/>
                Step 3: Final interviews scheduled with top candidates
              </p>
              <a href="https://app.gohighlevel.com/v2/preview/gWf0eHW3LMHhZpcUqmth?notrack=true" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-white text-green-700 hover:bg-gray-100 shadow-xl rounded-xl h-16 px-12 text-xl font-semibold">
                  Start Your Application
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Button>
              </a>
              <p className="mt-8 text-sm opacity-75">
                Questions about the position? Email us at ana@atlantahouseplants.com
              </p>
            </div>
          </section>

          {/* SEO Content Footer */}
          <section className="py-12 bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <p className="text-sm text-gray-600">
                <strong>Keywords:</strong> Plant care jobs Atlanta, interiorscape technician Atlanta, plant maintenance jobs, commercial plant service careers, indoor plant care specialist, horticultural jobs Atlanta, plant technician hiring, route-based plant care, Atlanta plant careers
              </p>
            </div>
          </section>
        </main>

        <Footer />
        <FormModal />
      </div>
    </FormProvider>
  );
};

export default Careers;
