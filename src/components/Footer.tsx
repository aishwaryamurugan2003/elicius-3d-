import { Link } from "react-router-dom";
import { Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-24 border-t border-border bg-gradient-to-b from-muted to-background">
      <div className="container-wide py-16">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/logo.png"
                alt="Elicius Energy Logo"
                className="h-10 object-contain"
              />
              <span className="text-xl font-semibold">
                Elicius Energy
              </span>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed">
              Innovative clean-tech solutions for air quality monitoring,
              energy systems, and environmental intelligence.
            </p>

            {/* Social */}
            <a
              href="https://www.linkedin.com/company/elicius-energy/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
            >
              <Linkedin className="w-5 h-5" />
              Follow us on LinkedIn
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                { label: "About Us", to: "/about" },
                { label: "Products", to: "/products" },
                { label: "Services", to: "/services" },
                { label: "Technology", to: "/technology" },
                { label: "Research", to: "/research" },
              ].map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide mb-4">
              Resources
            </h4>
            <ul className="space-y-2">
              {[
                { label: "Blog", to: "/blog" },
                { label: "Case Studies", to: "/services/case-studies" },
                { label: "Clients", to: "/clients" },
                { label: "Team", to: "/team" },
                { label: "Contact", to: "/contact" },
              ].map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide mb-4">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                <span>
                  Gokul Arcade Complex 4th Floor Sardar Patel Rd, Gandhi Nagar, Adyar, Chennai, Tamil Nadu 600020
                </span>
              </li>

              <li className="flex gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <a
                  href="mailto:contact.elicius@gmail.com"
                  className="hover:text-primary transition-colors"
                >
                  admin@eliciusenergy.in
                </a>
              </li>

              <li className="flex gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <a
                  href="tel:+918129062539"
                  className="hover:text-primary transition-colors"
                >
                  +91 8939890310
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Elicius Energy. All rights reserved.
          </p>

          <div className="flex gap-6">
            <Link
              to="/privacy"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
