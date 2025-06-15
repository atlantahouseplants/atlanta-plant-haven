
import { Card, CardContent } from "@/components/ui/card";

const PlantDoctorFAQ = () => {
  const faqs = [
    {
      question: "What if my plant can't be saved?",
      answer: "Nick will be honest about your plant's condition. While he does everything possible to save plants, sometimes damage is too severe. In these cases, he'll explain why and help you prevent the same issues with future plants. The visit fee still applies as you receive expert diagnosis and education."
    },
    {
      question: "What do I need to provide for the visit?",
      answer: "Just make sure your plants are accessible! If repotting is needed, you'll need to provide new pots (Nick will tell you what size during scheduling). Nick brings all tools, soil, treatments, and expertise."
    },
    {
      question: "Can Nick help with multiple plants in one visit?",
      answer: "Absolutely! The 90-minute visit covers all your plants. Whether you have 2 plants or 20, Nick will assess and treat them all during your appointment."
    },
    {
      question: "What if I need help after the visit?",
      answer: "You'll receive Nick's direct contact for follow-up questions about your plants. Many clients text photos if they're concerned about something, and Nick provides guidance to ensure success."
    },
    {
      question: "Do you offer any guarantees?",
      answer: "While we can't guarantee saving every plant, we guarantee you'll receive expert professional service, honest assessment, and all the knowledge needed to care for your plants going forward."
    },
    {
      question: "What areas do you serve?",
      answer: "We serve the greater Atlanta metropolitan area. Contact us to confirm if we can reach your location for in-home visits."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Common Questions About Plant Doctor Visits
        </h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-3">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlantDoctorFAQ;
