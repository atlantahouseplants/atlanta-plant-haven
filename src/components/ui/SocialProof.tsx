import { Star, Shield, Clock, Users, Award } from 'lucide-react';
import { ModernCard, CardContent } from './ModernCard';

// Enhanced Social Proof Bar
const SocialProofBar = () => {
  const companies = [
    "Marriott", "Archer Western", "OneStreet Residential", 
    "Perkins and Will", "Loria Ansley", "Heritage Distribution"
  ];

  return (
    <div className="py-16 bg-gradient-to-r from-gray-50 to-blue-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="text-center mb-4">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <Shield className="h-6 w-6 text-green-500" />
              <span className="text-lg font-semibold text-gray-700">
                Trusted by 500+ Atlanta Businesses Since 2020
              </span>
            </div>
            <p className="text-sm text-blue-600 font-medium">
              200+ successful installations • 15% avg. productivity boost • 37% stress reduction
            </p>
          </div>
          
          {/* Star Rating */}
          <div className="flex items-center justify-center space-x-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-6 w-6 text-yellow-500 fill-current animate-fade-in" 
                    style={{ animationDelay: `${i * 100}ms` }} />
            ))}
            <span className="ml-3 text-lg font-medium text-gray-700">
              4.9 out of 5 stars
            </span>
          </div>
        </div>

        {/* Animated Company Logos - Fixed alignment */}
        <div className="relative overflow-hidden max-w-5xl mx-auto">
          <div className="flex justify-center">
            <div className="flex space-x-8 md:space-x-12 animate-marquee">
              {[...companies, ...companies].map((company, index) => (
                <div
                  key={`${company}-${index}`}
                  className="flex-shrink-0 text-lg md:text-xl font-bold text-gray-600 hover:text-green-600 transition-colors duration-300 cursor-default whitespace-nowrap"
                >
                  {company}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Stats Grid Component
const StatsGrid = () => {
  const stats = [
    {
      icon: <Users className="h-8 w-8 text-green-600" />,
      number: "500+",
      label: "Happy Businesses",
      description: "Across Atlanta Metro"
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      number: "100%", 
      label: "Plant Survival Rate",
      description: "Guaranteed Success"
    },
    {
      icon: <Clock className="h-8 w-8 text-purple-600" />,
      number: "24hrs",
      label: "Response Time",
      description: "Fast, Professional Service"
    },
    {
      icon: <Award className="h-8 w-8 text-orange-600" />,
      number: "5+",
      label: "Years Excellence",
      description: "Zero Failed Installations"
    }
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Proven Track Record
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our results speak for themselves - we've been delivering exceptional plant services across Atlanta for years.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <ModernCard 
              key={stat.label}
              variant="interactive" 
              hover
              className="text-center animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent>
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-gray-50 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-gray-700 mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-500">
                  {stat.description}
                </div>
              </CardContent>
            </ModernCard>
          ))}
        </div>
      </div>
    </div>
  );
};

// Customer Testimonial Component
const CustomerTestimonial = () => {
  const testimonials = [
    {
      quote: "The transformation of our office has been incredible. Employee morale is up, air quality is better, and clients constantly compliment the beautiful plant arrangements.",
      author: "Michelle Roberts",
      title: "Office Manager",
      company: "Heritage Distribution",
      rating: 5,
      image: "/images/corporate-offices/large-lobby-floor-plants.png"
    },
    {
      quote: "Atlanta Houseplants takes care of everything. We haven't had a single plant issue in 2 years, and their team is always professional and reliable.",
      author: "David Chen",
      title: "Facilities Director", 
      company: "Tech Startup",
      rating: 5,
      image: "/images/corporate-offices/blue-cubicle-planters.png"
    }
  ];

  return (
    <div className="py-16 bg-gradient-to-r from-green-50/50 to-blue-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <ModernCard 
              key={testimonial.author}
              variant="featured"
              className="animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardContent>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                
                <blockquote className="text-lg text-gray-700 leading-relaxed mb-6">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="flex items-center space-x-4">
                  <img 
                    src={testimonial.image} 
                    alt={`${testimonial.company} office transformation`}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.author}</div>
                    <div className="text-sm text-gray-600">{testimonial.title}, {testimonial.company}</div>
                  </div>
                </div>
              </CardContent>
            </ModernCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export { SocialProofBar, StatsGrid, CustomerTestimonial };