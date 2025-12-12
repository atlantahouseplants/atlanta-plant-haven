import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { FormProvider } from "@/components/forms/FormContext";
import FormModal from "@/components/forms/FormModal";
import MobileStickyCTA from "@/components/ui/MobileStickyCTA";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, X, Building2, Leaf, Shield, TrendingUp, Calculator, Users, ArrowRight, DollarSign, FileText, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const LeasePrograms = () => {
  const leaseFeatures = [
    {
      icon: DollarSign,
      title: "No Upfront Investment",
      description: "Zero capital expenditure required. Start your plant program with minimal upfront costs."
    },
    {
      icon: Shield,
      title: "100% Plant Guarantee",
      description: "All plants are guaranteed healthy and thriving. We replace any underperforming plants at no cost."
    },
    {
      icon: Leaf,
      title: "Full-Service Maintenance",
      description: "Weekly or bi-weekly professional care included. Watering, feeding, pruning, and pest management."
    },
    {
      icon: Sparkles,
      title: "Seasonal Rotations",
      description: "Refresh your space with seasonal plant rotations to keep your workplace looking fresh and vibrant."
    },
    {
      icon: TrendingUp,
      title: "Flexible Terms",
      description: "Month-to-month or annual contracts. Scale up or down as your business needs change."
    },
    {
      icon: Building2,
      title: "Relocation Support",
      description: "Moving offices? We'll relocate your plants and redesign for your new space at no additional charge."
    }
  ];

  const purchasePlusCareFeatures = [
    { text: "You own the plants", included: true },
    { text: "Higher upfront cost", included: false },
    { text: "Professional maintenance included", included: true },
    { text: "100% plant health guarantee", included: true },
    { text: "Seasonal rotations available", included: "add-on" },
    { text: "Relocation support", included: "add-on" }
  ];

  const leaseFeaturesList = [
    { text: "We own the plants", included: true },
    { text: "No upfront investment", included: true },
    { text: "Professional maintenance included", included: true },
    { text: "100% plant health guarantee", included: true },
    { text: "Seasonal rotations included", included: true },
    { text: "Relocation support included", included: true }
  ];

  const pricingTiers = [
    {
      name: "Starter",
      description: "Perfect for small offices",
      monthlyRate: "$299",
      plantCount: "10-20 plants",
      features: [
        "Professional design & installation",
        "Bi-weekly maintenance visits",
        "100% plant health guarantee",
        "Basic plant selection",
        "Email support"
      ],
      cta: "Start Starter Plan",
      highlight: false
    },
    {
      name: "Professional",
      description: "Ideal for medium businesses",
      monthlyRate: "$599",
      plantCount: "20-50 plants",
      features: [
        "Custom biophilic design",
        "Weekly maintenance visits",
        "100% plant health guarantee",
        "Premium plant selection",
        "Seasonal rotations (2x/year)",
        "Priority phone support",
        "Quarterly design consultations"
      ],
      cta: "Choose Professional",
      highlight: true
    },
    {
      name: "Enterprise",
      description: "For large commercial spaces",
      monthlyRate: "Custom",
      plantCount: "50+ plants",
      features: [
        "Multi-location support",
        "Dedicated account manager",
        "Weekly maintenance visits",
        "100% plant health guarantee",
        "Premium & exotic plant selection",
        "Quarterly seasonal rotations",
        "24/7 priority support",
        "Monthly design consultations",
        "Complimentary relocation support"
      ],
      cta: "Request Enterprise Quote",
      highlight: false
    }
  ];

  const faqs = [
    {
      question: "What's included in the monthly lease fee?",
      answer: "Your monthly lease includes everything: professional design, plant selection, installation, all maintenance (watering, feeding, pruning, pest control), 100% plant replacement guarantee, seasonal rotations (on Professional and Enterprise plans), and ongoing support. You never have to worry about plant care."
    },
    {
      question: "What happens if I want to cancel?",
      answer: "We offer flexible cancellation terms. Month-to-month plans can be cancelled with 30 days notice. Annual contracts receive discounted rates but require 90 days notice for cancellation. We'll schedule pickup of all leased plants at no additional charge."
    },
    {
      question: "Can I upgrade or downgrade my plan?",
      answer: "Absolutely! As your business grows or changes, you can adjust your plant program. Add more plants, upgrade to weekly service, or scale back as needed. We'll work with you to find the right fit for your current needs and budget."
    },
    {
      question: "What if we move offices?",
      answer: "We've got you covered! Professional and Enterprise plans include complimentary relocation support. We'll move your plants to the new location, assess the new space's lighting and conditions, and redesign your plant layout at no additional cost."
    },
    {
      question: "How does the plant guarantee work?",
      answer: "Every plant in our care is covered by our 100% health guarantee. If any plant underperforms, shows signs of decline, or doesn't thrive despite our professional care, we replace it immediately at no cost to you. Your workplace always looks its best."
    },
    {
      question: "Are seasonal rotations really necessary?",
      answer: "While not required on Starter plans, seasonal rotations keep your space looking fresh and vibrant. We swap out plants 2-4 times per year with seasonal varieties, ensuring your office has visual interest year-round. It's like interior design for your biophilic workspace!"
    },
    {
      question: "How quickly can you start service?",
      answer: "After your free consultation and design approval, we typically install within 1-2 weeks. Rush installations (3-5 business days) are available for an additional fee. We'll work around your schedule to minimize disruption."
    },
    {
      question: "Do you serve multiple locations?",
      answer: "Yes! Our Enterprise plans are designed for businesses with multiple Atlanta-area locations. You'll have a dedicated account manager who coordinates service across all sites, ensuring consistent quality and care everywhere."
    }
  ];

  return (
    <FormProvider>
      <div className="min-h-screen bg-background">
        <Navigation />

        <main>
          {/* Hero Section */}
          <section className="pt-24 pb-12 bg-gradient-to-br from-green-50 via-background to-blue-50/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <div className="inline-block mb-4">
                  <span className="bg-green-100 text-green-800 text-sm font-semibold px-4 py-2 rounded-full">
                    All-Inclusive Plant Programs
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-6">
                  Office Plant <span className="bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">Lease Programs</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto mb-8">
                  Transform your workplace with professional plants—zero upfront investment,
                  all-inclusive maintenance, and 100% guarantee included.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/office-plants">
                    <Button size="lg" className="bg-gradient-to-r from-green-600 via-green-500 to-green-600 hover:from-green-700 hover:via-green-600 hover:to-green-700 text-white shadow-xl hover:shadow-green-500/25 transform hover:scale-[1.02] transition-all duration-300 border-0 font-semibold rounded-xl h-14 px-8 text-lg">
                      Get Free Design Consultation
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <a href="tel:470-664-4039">
                    <Button variant="outline" size="lg" className="border-2 border-green-600 text-green-700 hover:bg-green-50 rounded-xl h-14 px-8 text-lg font-semibold">
                      Call (470) 664-4039
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Why Lease Section */}
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Why Businesses Choose Plant Leasing
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Lower upfront costs, zero maintenance hassles, and complete flexibility
                  for your growing business.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {leaseFeatures.map((feature, index) => (
                  <Card key={index} className="border-2 border-gray-100 hover:border-green-300 hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <div className="w-14 h-14 bg-gradient-to-br from-green-100 to-green-200 rounded-xl flex items-center justify-center mb-4">
                        <feature.icon className="h-7 w-7 text-green-700" />
                      </div>
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">{feature.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Lease vs Purchase Comparison */}
          <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Lease vs. Purchase + Care
                </h2>
                <p className="text-xl text-gray-600">
                  Both options include professional care. Choose what works best for your business.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Purchase + Care Card */}
                <Card className="border-2 border-gray-200">
                  <CardHeader className="bg-gray-50 border-b border-gray-200">
                    <CardTitle className="text-2xl text-center">Purchase + Care</CardTitle>
                    <CardDescription className="text-center text-base mt-2">
                      You own the plants, we maintain them
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-8">
                    <div className="space-y-4">
                      {purchasePlusCareFeatures.map((feature, index) => (
                        <div key={index} className="flex items-start">
                          <div className="flex-shrink-0 mt-1">
                            {feature.included === true && (
                              <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                                <Check className="h-4 w-4 text-green-600" />
                              </div>
                            )}
                            {feature.included === false && (
                              <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center">
                                <X className="h-4 w-4 text-red-600" />
                              </div>
                            )}
                            {feature.included === "add-on" && (
                              <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                                <DollarSign className="h-4 w-4 text-blue-600" />
                              </div>
                            )}
                          </div>
                          <span className="ml-3 text-gray-700">{feature.text}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-8 p-4 bg-gray-100 rounded-lg">
                      <p className="text-sm text-gray-700 font-medium">
                        <strong>Best for:</strong> Businesses that prefer to own assets and plan to stay in the same location long-term.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Lease Program Card */}
                <Card className="border-2 border-green-300 shadow-xl relative">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-green-600 text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg">
                      MOST POPULAR
                    </span>
                  </div>
                  <CardHeader className="bg-gradient-to-br from-green-50 to-emerald-50 border-b border-green-200">
                    <CardTitle className="text-2xl text-center text-green-800">Lease Program</CardTitle>
                    <CardDescription className="text-center text-base mt-2 text-green-700">
                      We own the plants, you enjoy the benefits
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-8">
                    <div className="space-y-4">
                      {leaseFeaturesList.map((feature, index) => (
                        <div key={index} className="flex items-start">
                          <div className="flex-shrink-0 mt-1">
                            <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                              <Check className="h-4 w-4 text-green-600" />
                            </div>
                          </div>
                          <span className="ml-3 text-gray-700">{feature.text}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-8 p-4 bg-green-50 rounded-lg border border-green-200">
                      <p className="text-sm text-green-800 font-medium">
                        <strong>Best for:</strong> Businesses that want flexibility, no upfront costs, and all-inclusive service with zero hassle.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Lease Program Pricing
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Transparent, all-inclusive pricing. No hidden fees, no surprises.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {pricingTiers.map((tier, index) => (
                  <Card key={index} className={`${tier.highlight ? 'border-2 border-green-400 shadow-2xl scale-105' : 'border-2 border-gray-200'} relative`}>
                    {tier.highlight && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="bg-gradient-to-r from-green-600 to-emerald-500 text-white text-xs font-bold px-4 py-1 rounded-full shadow-lg">
                          BEST VALUE
                        </span>
                      </div>
                    )}
                    <CardHeader className={tier.highlight ? 'bg-gradient-to-br from-green-50 to-emerald-50' : 'bg-gray-50'}>
                      <CardTitle className="text-2xl text-center">{tier.name}</CardTitle>
                      <CardDescription className="text-center">{tier.description}</CardDescription>
                      <div className="text-center mt-6">
                        <div className="text-4xl font-bold text-foreground">{tier.monthlyRate}</div>
                        <div className="text-sm text-gray-600 mt-1">per month</div>
                        <div className="text-sm text-green-700 font-semibold mt-2">{tier.plantCount}</div>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-8">
                      <ul className="space-y-3 mb-8">
                        {tier.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                            <span className="ml-3 text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Link to="/office-plants" className="block">
                        <Button
                          className={`w-full ${tier.highlight ? 'bg-gradient-to-r from-green-600 to-emerald-500 hover:from-green-700 hover:to-emerald-600' : 'bg-gray-900 hover:bg-gray-800'} text-white rounded-xl h-12`}
                        >
                          {tier.cta}
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="mt-12 text-center">
                <p className="text-gray-600 mb-4">
                  <strong>Annual contracts receive 10% discount.</strong> All plans include free design consultation and installation.
                </p>
                <p className="text-sm text-gray-500">
                  *Enterprise pricing varies based on location count, plant quantity, and service frequency. Contact us for a custom quote.
                </p>
              </div>
            </div>
          </section>

          {/* How It Works */}
          <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Getting Started Is Easy
                </h2>
                <p className="text-xl text-gray-600">
                  From consultation to installation in just 4 simple steps
                </p>
              </div>

              <div className="grid md:grid-cols-4 gap-8">
                {[
                  { step: "1", title: "Free Consultation", description: "Schedule your complimentary on-site walkthrough. We'll assess your space, lighting, and discuss your vision." },
                  { step: "2", title: "Custom Design", description: "Receive your professional plant design and lease agreement within 48 hours. Choose your preferred plan." },
                  { step: "3", title: "Installation", description: "We install your plants at a time that works for you, typically within 1-2 weeks of approval." },
                  { step: "4", title: "Ongoing Care", description: "Enjoy beautiful, thriving plants with zero effort. We handle everything from watering to seasonal rotations." }
                ].map((item, index) => (
                  <div key={index} className="text-center relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4 mx-auto shadow-lg">
                      {item.step}
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                    {index < 3 && (
                      <ArrowRight className="hidden md:block absolute top-8 -right-4 h-6 w-6 text-green-400" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-20 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Frequently Asked Questions
                </h2>
                <p className="text-xl text-gray-600">
                  Everything you need to know about our lease programs
                </p>
              </div>

              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <Card key={index} className="border-2 border-gray-100 hover:border-green-200 transition-colors">
                    <CardHeader>
                      <CardTitle className="text-lg text-green-800">{faq.question}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="py-20 bg-gradient-to-br from-green-600 to-emerald-500 text-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Transform Your Workplace?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Join 500+ Atlanta businesses enjoying beautiful, thriving plants with zero hassle.
                Schedule your free consultation today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/office-plants">
                  <Button size="lg" className="bg-white text-green-700 hover:bg-gray-100 shadow-xl rounded-xl h-14 px-8 text-lg font-semibold">
                    Schedule Free Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <a href="tel:470-664-4039">
                  <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 rounded-xl h-14 px-8 text-lg font-semibold">
                    Call (470) 664-4039
                  </Button>
                </a>
              </div>
              <p className="mt-8 text-sm opacity-75">
                💯 100% Plant Health Guarantee • 📍 Serving Metro Atlanta • ⚡ Free Design Consultation
              </p>
            </div>
          </section>
        </main>

        <Footer />
        <FormModal />
        <MobileStickyCTA />
      </div>
    </FormProvider>
  );
};

export default LeasePrograms;
