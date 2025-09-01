
import { Link } from "react-router-dom";
import { Leaf, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Leaf className="h-8 w-8 text-green-500" />
              <span className="text-xl font-bold text-white">Atlanta Houseplants</span>
            </div>
            <p className="text-sm mb-4">
              Professional plant services for Atlanta businesses since 2015.
            </p>
            <div className="flex items-center space-x-2 text-sm mb-2">
              <MapPin className="h-4 w-4" />
              <span>Serving Metro Atlanta</span>
            </div>
            <div className="flex items-center space-x-2 text-sm mb-2">
              <Phone className="h-4 w-4" />
              <a href="tel:470-554-5662" className="hover:text-white">470-554-5662</a>
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <Mail className="h-4 w-4" />
              <a href="mailto:info@atlantahouseplants.com" className="hover:text-white">
                info@atlantahouseplants.com
              </a>
            </div>
          </div>

          {/* Primary Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/office-plants" className="hover:text-white transition-colors">
                  Office Plant Design & Care
                </Link>
              </li>
              <li>
                <Link to="/corporate" className="hover:text-white transition-colors">
                  Corporate Plant Gifting
                </Link>
              </li>
              <li>
                <Link to="/office-plants#process" className="hover:text-white transition-colors">
                  Free Office Assessment
                </Link>
              </li>
              <li>
                <Link to="/corporate#subscription" className="hover:text-white transition-colors">
                  Gift Subscription Programs
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/plant-doctor" className="hover:text-white transition-colors">
                  Plant Care Guides
                </Link>
              </li>
              <li>
                <Link to="/our-work" className="hover:text-white transition-colors">
                  Portfolio & Case Studies
                </Link>
              </li>
              <li>
                <Link to="/plant-doctor/office-plants-boost-productivity" className="hover:text-white transition-colors">
                  Productivity Research
                </Link>
              </li>
              <li>
                <Link to="/reviews" className="hover:text-white transition-colors">
                  Client Reviews
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Actions */}
          <div>
            <h3 className="text-white font-semibold mb-4">Get Started</h3>
            <div className="space-y-3">
              <Link to="/office-plants" className="block">
                <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded transition-colors">
                  Get Free Office Design
                </button>
              </Link>
              <Link to="/corporate" className="block">
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition-colors">
                  Download Gift Catalog
                </button>
              </Link>
              <p className="text-sm text-gray-400 mt-4">
                Response within 4 business hours
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <p>© 2025 Atlanta Houseplants. All rights reserved.</p>
            <div className="flex space-x-6 mt-2 md:mt-0">
              <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-white">Terms of Service</Link>
              <Link to="/service-areas" className="hover:text-white">Service Areas</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
