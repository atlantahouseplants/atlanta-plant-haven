
const WhatToExpect = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            What to Expect During Your Visit
          </h2>
        </div>

        <div className="space-y-8">
          {[
            {
              step: "1",
              title: "Before the Visit",
              description: "You provide basic information about your plant problems. No prep work needed on your end - just make sure your plants are accessible."
            },
            {
              step: "2", 
              title: "Nick Arrives with Everything",
              description: "Professional tools, treatments, soil amendments, and expertise. You don't need to buy anything except new pots if repotting is needed."
            },
            {
              step: "3",
              title: "Comprehensive Assessment (30 minutes)",
              description: "Nick examines each plant, explains what he's seeing, and diagnoses any issues while teaching you what to look for."
            },
            {
              step: "4",
              title: "Treatment & Care (45-60 minutes)", 
              description: "Immediate treatment of problems, repotting if needed, soil amendments, and hands-on demonstration of proper care techniques."
            },
            {
              step: "5",
              title: "Your Custom Care Plan",
              description: "Written care instructions specific to your plants, your home environment, and your schedule. Plus ongoing text support for questions."
            }
          ].map((step, index) => (
            <div key={index} className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  {step.step}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatToExpect;
