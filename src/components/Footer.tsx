import { Link } from "react-router-dom";
import { Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card/50 border-t border-border/50 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img
                src="/logo.png"
                alt="Elicius Energy Logo"
                className="w-10 h-10 object-contain rounded-lg"
              />
              <span className="text-xl font-bold glow-text">
                Elicius Energy
              </span>
            </div>

            {/* LinkedIn Icon */}
            <div className="flex space-x-3">
              <a
                href="https://www.linkedin.com/company/elicius-energy/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg glass-glow flex items-center justify-center hover-scale"
              >
                <Linkedin className="w-5 h-5 text-primary" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/products" className="text-sm text-muted-foreground hover:text-primary transition-colors">Products</Link></li>
              <li><Link to="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">Services</Link></li>
              <li><Link to="/technology" className="text-sm text-muted-foreground hover:text-primary transition-colors">Technology</Link></li>
              <li><Link to="/research" className="text-sm text-muted-foreground hover:text-primary transition-colors">Research</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">
              Resources
            </h3>
            <ul className="space-y-2">
              <li><Link to="/blog" className="text-sm text-muted-foreground hover:text-primary transition-colors">Blog</Link></li>
              <li><Link to="/services/case-studies" className="text-sm text-muted-foreground hover:text-primary transition-colors">Case Studies</Link></li>
              <li><Link to="/clients" className="text-sm text-muted-foreground hover:text-primary transition-colors">Clients</Link></li>
              <li><Link to="/team" className="text-sm text-muted-foreground hover:text-primary transition-colors">Team</Link></li>
              <li><Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-sm text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>
                  First Floor, E-Block IIT, Madras Research Park, Kanagam Rd,
                  Kanagam, Tharamani, Chennai, Tamil Nadu 600113
                </span>
              </li>

              <li className="flex items-center space-x-3 text-sm text-muted-foreground">
                <Mail className="w-5 h-5 text-primary" />
                <a
                  href="mailto:contact.elicius@gmail.com"
                  className="hover:text-primary transition-colors"
                >
                  contact.elicius@gmail.com
                </a>
              </li>

              <li className="flex items-center space-x-3 text-sm text-muted-foreground">
                <Phone className="w-5 h-5 text-primary" />
                <a
                  href="tel:+918129062539"
                  className="hover:text-primary transition-colors"
                >
                  +91 81290 62539
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Elicius Energy. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
