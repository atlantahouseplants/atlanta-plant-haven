
import { Phone, Mail, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { name: "Facebook", icon: Facebook, url: "https://www.facebook.com/atlantahouseplants/" },
    { name: "Instagram", icon: Instagram, url: "https://www.instagram.com/atlanta_houseplants/" },
    { name: "LinkedIn", icon: Linkedin, url: "https://www.linkedin.com/company/atlanta-houseplants/" },
    { name: "YouTube", icon: Youtube, url: "https://www.youtube.com/channel/UCIV-DyGixA6mChcP1FNpLdQ" }
  ];

  const navigationLinks = [
    { name: "Office Plant Service", href: "/office-plants" },
    { name: "Corporate Gifting", href: "/corporate" },
    { name: "Our Work", href: "/our-work" },
    { name: "The Plant Doctor", href: "/plant-doctor" },
    { name: "Contact", href: "/contact" }
  ];

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Company & Contact */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/lovable-uploads/5f4fe99d-f892-4ded-9db1-53ffdfd0a592.png" 
                alt="Atlanta Houseplants"
                className="h-8 w-8"
              />
              <span className="text-xl font-bold">Atlanta Houseplants</span>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-green-400" />
                <a href="tel:+14706644039" className="text-gray-300 hover:text-white transition-colors">
                  (470) 664-4039
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-green-400" />
                <a href="mailto:ana@atlantahouseplants.com" className="text-gray-300 hover:text-white transition-colors">
                  ana@atlantahouseplants.com
                </a>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              {navigationLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-green-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Follow Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-green-400 transition-colors p-2 rounded-lg hover:bg-gray-800"
                  aria-label={`Follow us on ${social.name}`}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Atlanta Houseplants. Professional plant care for Atlanta's leading businesses.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
