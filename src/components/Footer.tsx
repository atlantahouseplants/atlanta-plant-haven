
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

const Footer = () => {
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
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="/lovable-uploads/5f4fe99d-f892-4ded-9db1-53ffdfd0a592.png" 
                alt="Atlanta House Plants"
                className="h-8 w-auto filter brightness-0 invert"
              />
            </div>
            <p className="text-gray-300 mb-4">
              Transforming Atlanta offices with beautiful, healthy plants for over 15 years.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm">
                <Mail className="h-4 w-4" />
                <span>Contact via Email</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Mail className="h-4 w-4" />
                <span>ana@atlantahouseplants.com</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Mail className="h-4 w-4" />
                <span>service@atlantahouseplants.com</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Mail className="h-4 w-4" />
                <span>plantdoctor@atlantahouseplants.com</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <MapPin className="h-4 w-4" />
                <span>Metro Atlanta, GA</span>
              </div>
            </div>
            
            {/* Social Media Links */}
            <div className="mt-6">
              <h4 className="font-semibold text-lg mb-3">Follow Us</h4>
              <div className="flex space-x-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
                    aria-label={`Follow us on ${social.name}`}
                  >
                    <social.icon className="h-4 w-4 text-gray-300 hover:text-white" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Plant Design & Installation</li>
              <li>Ongoing Plant Care</li>
              <li>Plant Doctor Services</li>
              <li>Corporate Gifting</li>
              <li>Corporate Social Responsibility</li>
              <li>Handmade Color Planters</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#home" className="hover:text-green-400 transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-green-400 transition-colors">Services</a></li>
              <li><a href="#contact" className="hover:text-green-400 transition-colors">Contact</a></li>
              <li><a href="/office-plants" className="hover:text-green-400 transition-colors">Office Plants</a></li>
              <li><a href="/plant-doctor" className="hover:text-green-400 transition-colors">Plant Doctor</a></li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Service Areas</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>Atlanta</li>
              <li>Marietta</li>
              <li>Alpharetta</li>
              <li>Roswell</li>
              <li>Sandy Springs</li>
              <li>Buckhead</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="text-center">
            <p className="text-gray-300">
              &copy; 2024 Atlanta House Plants. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
