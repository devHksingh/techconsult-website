import { Link } from "react-router";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram, ArrowRight } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    "IT Infrastructure",
    "Cybersecurity",
    "Cloud Solutions",
    "Digital Transformation",
    "DevOps & CI/CD",
    "Custom Development"
  ];

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" }
  ];

  const socialLinks = [
    { icon: Linkedin, url: "#", label: "LinkedIn" },
    { icon: Twitter, url: "#", label: "Twitter" },
    { icon: Facebook, url: "#", label: "Facebook" },
    { icon: Instagram, url: "#", label: "Instagram" }
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="space-y-4 sm:space-y-6">
            <div className="flex items-center space-x-3">
              <div className="h-10 w-10 rounded-lg flex items-center justify-center font-bold text-white text-xl bg-gradient-to-br from-blue-600 to-cyan-500 shadow-lg">
                IT
              </div>
              <span className="font-bold text-xl text-white">TechConsult</span>
            </div>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Empowering businesses through expert IT solutions, innovative strategies, and unwavering commitment to your success.
            </p>
            <div className="flex items-center space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  aria-label={social.label}
                  className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-gradient-to-br hover:from-blue-600 hover:to-cyan-500 flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg text-white mb-4 sm:mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path} 
                    className="text-sm sm:text-base text-slate-300 hover:text-cyan-400 transition-colors inline-flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg text-white mb-4 sm:mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="text-sm sm:text-base text-slate-300 hover:text-cyan-400 transition-colors cursor-pointer">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg text-white mb-4 sm:mb-6">Get in Touch</h3>
            <ul className="space-y-4">
              <li>
                <a 
                  href="mailto:info@techconsult.com"
                  className="flex items-start space-x-3 text-sm sm:text-base text-slate-300 hover:text-cyan-400 transition-colors group"
                >
                  <Mail className="h-5 w-5 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <span>info@techconsult.com</span>
                </a>
              </li>
              <li>
                <a 
                  href="tel:+15551234567"
                  className="flex items-start space-x-3 text-sm sm:text-base text-slate-300 hover:text-cyan-400 transition-colors group"
                >
                  <Phone className="h-5 w-5 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <span>+1 (555) 123-4567</span>
                </a>
              </li>
              <li className="flex items-start space-x-3 text-sm sm:text-base text-slate-300">
                <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <span>123 Business Ave,<br />Tech City, TC 12345</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="border-t border-slate-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="font-semibold text-lg text-white mb-2">Stay Updated</h3>
              <p className="text-sm text-slate-300">Subscribe to our newsletter for the latest tech insights and updates</p>
            </div>
            <div className="flex w-full md:w-auto max-w-md gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-sm"
              />
              <button className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-semibold rounded-lg transition-all shadow-lg hover:shadow-xl whitespace-nowrap text-sm">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-700 bg-slate-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-400">
            <p className="text-center md:text-left">
              © {currentYear} TechConsult. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6">
              <Link to="#" className="hover:text-cyan-400 transition-colors">Privacy Policy</Link>
              <Link to="#" className="hover:text-cyan-400 transition-colors">Terms of Service</Link>
              <Link to="#" className="hover:text-cyan-400 transition-colors">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;