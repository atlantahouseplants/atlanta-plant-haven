
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, Users, Camera, Award, Truck, FileText, Tag, Plant } from 'lucide-react';

const SucculentsForSmiles = () => {
  const scrollToForm = () => {
    const formElement = document.getElementById('donation-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <img 
              src="/lovable-uploads/451d8ad9-03df-4e1a-adb7-e5cb659ec97c.png" 
              alt="Atlanta Houseplants team member with succulent delivery" 
              className="w-full max-w-md mx-auto rounded-lg shadow-lg"
            />
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Planting Smiles: Succulent Donation Program
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Share the healing power of plants with those who need it most. Connect your business with local hospitals, care facilities, and community organizations by providing mini succulents that bring joy, reduce stress, and create lasting positive impacts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <div className="text-3xl font-bold text-green-600">Only $4.75 per plant</div>
            <div className="text-lg text-gray-600">Minimum 100 plants ($475)</div>
          </div>
          <Button onClick={scrollToForm} size="lg" className="text-lg px-8 py-3">
            Donate Succulents Now
          </Button>
        </div>
      </section>

      {/* Origin Story */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">How It All Started</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <img 
                src="/lovable-uploads/a2edcd76-33eb-47c3-be9d-83d44ff108f8.png" 
                alt="Succulents for Smiles arrangement" 
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-4 text-lg text-gray-700">
              <p>
                It all began with a simple visit to Grady Memorial Hospital. One of our team members was visiting a loved one who had been in recovery for weeks. The sterile environment, while necessary, felt cold and lifeless.
              </p>
              <p>
                On a whim, we brought a tray of our mini succulents to brighten up the room. The reaction was immediate and powerful. Not just from our friend, but from the nurses, doctors, and other patients who passed by.
              </p>
              <p>
                "These little plants bring so much life to this place," one nurse commented. That's when it clicked. What started as a simple gesture became the spark for our Planting Smiles program.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits for Recipients */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Bringing Joy To Those Who Need It Most</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader className="text-center">
                <Heart className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle>Mental Health Benefits</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Studies show that plants in healthcare settings reduce stress and anxiety while promoting healing and recovery. For patients enduring long-term care, these small plants provide comfort and hope.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="text-center">
                <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle>Empowerment Through Care</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Unlike flowers that wilt within days, succulents can thrive for years with minimal attention. Caring for these resilient plants gives recipients a sense of purpose and accomplishment during challenging times.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="text-center">
                <Plant className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle>Transforming Spaces</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Mini succulents instantly transform sterile, institutional environments into warmer, more welcoming spaces. They bring color, texture, and life to places that desperately need it.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Succulent Gallery */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Beautiful Mini Succulents</h2>
          <p className="text-center text-gray-600 mb-8">Each succulent comes in a 2.5-inch nursery pot and is carefully selected for beauty, resilience, and ease of care</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <img src="/lovable-uploads/82c57176-6510-45f2-9b31-ab2696220e36.png" alt="Variety of mini succulents" className="rounded-lg shadow-md" />
            <img src="/lovable-uploads/195074f0-2046-483e-ad8d-35d862966bdb.png" alt="Succulent arrangement" className="rounded-lg shadow-md" />
            <img src="/lovable-uploads/ce5e1a18-b364-4032-bdda-4689a953b2c4.png" alt="Succulents in white pots" className="rounded-lg shadow-md" />
            <img src="/lovable-uploads/ae5f54e7-6aa1-44d6-a928-2b4a01400f0a.png" alt="Colorful succulent variety" className="rounded-lg shadow-md" />
            <img src="/lovable-uploads/4110ddef-7a6a-4fe9-b268-50b8f7fc8d95.png" alt="Greenhouse succulent display" className="rounded-lg shadow-md" />
          </div>
          <div className="text-center mt-8">
            <Button onClick={scrollToForm} size="lg">
              Donate These Succulents
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits for Donors */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Benefits For Your Organization</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card>
              <CardHeader className="text-center">
                <Camera className="h-10 w-10 text-green-600 mx-auto mb-3" />
                <CardTitle className="text-lg">Social Media Content</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Receive professional photos and video of your donation being presented, perfect for sharing across your social channels.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="text-center">
                <Award className="h-10 w-10 text-green-600 mx-auto mb-3" />
                <CardTitle className="text-lg">Community Recognition</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Your branded donation cards ensure recipients know exactly who to thank for brightening their day.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="text-center">
                <Users className="h-10 w-10 text-green-600 mx-auto mb-3" />
                <CardTitle className="text-lg">Meaningful CSR</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Fulfill your corporate social responsibility goals with a tangible, visible contribution to community wellness.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="text-center">
                <Heart className="h-10 w-10 text-green-600 mx-auto mb-3" />
                <CardTitle className="text-lg">Brand Alignment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Associate your brand with wellness, resilience, and community care for stronger customer loyalty.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">The Impact of Your Donation</h2>
          <blockquote className="text-xl italic text-gray-700 mb-6 leading-relaxed">
            "The mini succulents donated to our pediatric oncology department have been transformative. Our young patients love caring for them, and it gives them a sense of responsibility and hope during difficult treatments. The nursing staff has noticed a significant boost in morale too—these little plants have sparked so many positive conversations and moments of joy in an otherwise challenging environment."
          </blockquote>
          <p className="text-gray-600 mb-8">— Sarah K., Child Life Specialist at Children's Healthcare of Atlanta</p>
          <Button onClick={scrollToForm} size="lg">
            Create This Impact
          </Button>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <p className="text-center text-gray-600 mb-12">We've made the process simple so you can make a big impact with minimal effort - we handle everything!</p>
          <div className="grid md:grid-cols-5 gap-6">
            {[
              { step: "1", title: "Fill Out the Form", description: "Complete our simple form, selecting your donation quantity and preferred recipient organization type." },
              { step: "2", title: "Confirm & Pay", description: "We'll contact you within 24 hours with confirmation and a secure invoice. No coordination needed!" },
              { step: "3", title: "We Schedule Delivery", description: "Within 1-2 business days after payment, we'll share delivery details and recipient organization info." },
              { step: "4", title: "Personalization", description: "Choose branded recognition or anonymous donation. We'll create custom cards for your gift." },
              { step: "5", title: "We Deliver & Document", description: "We personally deliver and capture the impact with photos and videos for your use." }
            ].map((item, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">
                    {item.step}
                  </div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">What's Included With Each Succulent</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader className="text-center">
                <Plant className="h-10 w-10 text-green-600 mx-auto mb-3" />
                <CardTitle className="text-lg">Quality Mini Succulents</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Beautiful, healthy mini succulents in 2.5-inch pots, locally sourced and selected for ease of care.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="text-center">
                <Truck className="h-10 w-10 text-green-600 mx-auto mb-3" />
                <CardTitle className="text-lg">Free Delivery</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Delivery included anywhere in the Atlanta metro area, professionally presented to maximize impact.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="text-center">
                <FileText className="h-10 w-10 text-green-600 mx-auto mb-3" />
                <CardTitle className="text-lg">Care Instructions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Simple care cards help recipients maintain their plants with minimal effort for maximum enjoyment.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="text-center">
                <Tag className="h-10 w-10 text-green-600 mx-auto mb-3" />
                <CardTitle className="text-lg">Recognition Cards</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Optional customized "Sponsored by [Your Name]" cards or anonymous donation if preferred.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              {
                question: "What types of organizations can receive succulent donations?",
                answer: "We deliver to hospitals, cancer treatment centers, nursing homes, assisted living facilities, homeless shelters, women's shelters, orphanages, first responder stations, schools, libraries, and other community organizations in the Atlanta area."
              },
              {
                question: "Is there a minimum donation amount?",
                answer: "Yes, our minimum order is 100 mini succulents ($475 total). This ensures we can make a meaningful impact at the receiving organization while efficiently managing delivery logistics."
              },
              {
                question: "Is my donation tax-deductible?",
                answer: "While Atlanta Houseplants is not a 501(c)(3) organization, many businesses can deduct these donations as marketing or advertising expenses. Please consult with your tax professional for guidance."
              },
              {
                question: "Can I request a specific organization to receive my donation?",
                answer: "Absolutely! You can specify a particular organization in the order form. If you don't have a preference, we're happy to select an organization where your donation will have maximum impact."
              },
              {
                question: "What kind of recognition will my company receive?",
                answer: "Each succulent includes a card recognizing your organization as the donor. We also provide professional photos and video of the donation presentation, perfect for sharing on social media."
              },
              {
                question: "Do I need to coordinate or be present for the delivery?",
                answer: "Not at all! We handle everything after you complete the form and payment. Our team takes care of all coordination, delivery, presentation, and documentation."
              }
            ].map((faq, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Form */}
      <section id="donation-form" className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Ready to Plant Smiles?</h2>
            <p className="text-xl text-gray-600 mb-8">Fill out the form below to get started with your succulent donation. We'll handle everything from here!</p>
          </div>
          
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <iframe
                src="https://api.leadconnectorhq.com/widget/form/yc2iyBbIL6lGOokDJgjQ"
                style={{ width: '100%', height: '1433px', border: 'none', borderRadius: '3px' }}
                id="inline-yc2iyBbIL6lGOokDJgjQ"
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="Planting Smiles: Succulent Community Donation Program"
                data-height="1433"
                data-layout-iframe-id="inline-yc2iyBbIL6lGOokDJgjQ"
                data-form-id="yc2iyBbIL6lGOokDJgjQ"
                title="Planting Smiles: Succulent Community Donation Program"
              />
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-4 bg-green-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Plant Smiles Across Atlanta?</h2>
          <p className="text-xl mb-8">Join the growing community of businesses and individuals spreading joy through the healing power of plants.</p>
          <p className="text-lg mb-8">We handle all the logistics - you just fill out the form and we'll do the rest!</p>
          <Button onClick={scrollToForm} size="lg" variant="secondary">
            Donate Succulents Today
          </Button>
        </div>
      </section>

      <Footer />
      
      <script src="https://link.msgsndr.com/js/form_embed.js"></script>
    </div>
  );
};

export default SucculentsForSmiles;
