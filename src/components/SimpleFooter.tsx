import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

const SimpleFooter = () => {
  const socialLinks = [
    { name: "Facebook", icon: Facebook, url: "https://www.facebook.com/atlantahouseplants/" },
    { name: "Instagram", icon: Instagram, url: "https://www.instagram.com/atlanta_houseplants/" },
    { name: "LinkedIn", icon: Linkedin, url: "https://www.linkedin.com/company/atlanta-houseplants/" },
    { name: "Twitter", icon: Twitter, url: "https://twitter.com/ATL_Houseplants" },
    { name: "YouTube", icon: Youtube, url: "https://www.youtube.com/channel/UCIV-DyGixA6mChcP1FNpLdQ" }
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Strategic About Section */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/lovable-uploads/5f4fe99d-f892-4ded-9db1-53ffdfd0a592.png" 
                alt="Atlanta Houseplants"
                className="h-10 w-10"
              />
              <span className="text-xl font-bold text-white">Atlanta Houseplants</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Professional plant care and design services for Atlanta's leading businesses. 
              Transforming workspaces with expert horticultural solutions since 2009.
            </p>
          </div>

          {/* Core Navigation */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">Services</h3>
            <ul className="space-y-3 text-gray-300">
              <li><a href="/office-plants" className="hover:text-green-400 transition-colors font-medium">Office Plant Service</a></li>
              <li><a href="/corporate" className="hover:text-green-400 transition-colors font-medium">Corporate Gifting</a></li>
              <li><a href="/our-work" className="hover:text-green-400 transition-colors font-medium">Our Work</a></li>
              <li><a href="/plant-doctor" className="hover:text-green-400 transition-colors font-medium">The Plant Doctor</a></li>
              <li><a href="/contact" className="hover:text-green-400 transition-colors font-medium">Contact</a></li>
            </ul>
          </div>

          {/* Essential Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">Contact</h3>
            <div className="space-y-4 text-gray-300">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-green-400 flex-shrink-0" />
                <a href="tel:+14706644039" className="hover:text-green-400 transition-colors">
                  (470) 664-4039
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-green-400 flex-shrink-0" />
                <a href="mailto:ana@atlantahouseplants.com" className="hover:text-green-400 transition-colors">
                  ana@atlantahouseplants.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-green-400 flex-shrink-0" />
                <span className="text-sm">Serving Atlanta's Premier Business Districts</span>
              </div>
              
              {/* Social Links */}
              <div className="pt-2">
                <div className="flex space-x-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-green-400 transition-colors p-2 rounded-full hover:bg-gray-800"
                      aria-label={`Visit our ${social.name} page`}
                    >
                      <social.icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Atlanta Houseplants. Professional plant care for Atlanta's leading businesses.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default SimpleFooter;