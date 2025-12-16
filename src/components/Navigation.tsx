import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },

    {
      label: "Products",
      path: "/products",
      dropdown: [
        { label: "All Products", path: "/products" },
        { label: "Devices", path: "/products/devices" },
        { label: "Software", path: "/products/software" }
      ],
    },

    { label: "All Services", path: "/services" },
    { label: "Case Studies", path: "/services/case-studies" },
    { label: "Technology", path: "/technology" },

   {
  label: "Research",
  path: "/research",
  dropdown: [
    { label: "Research Overview", path: "/research" },
    { label: "Fuel Cell Technology", path: "/research/fuel-cell" },
    { label: "Air Quality Data Science", path: "/research/air-quality-data" },
    {
      label: "Electrochemical Modelling & Simulation",
      path: "/research/simulations",
    },
  ],
},


    { label: "Clients", path: "/clients" },
    { label: "Team", path: "/team" },

    {
      label: "Blog",
      path: "/blog",
      dropdown: [
        { label: "All Posts", path: "/blog" },
        { label: "Media", path: "/blog/media" },
        { label: "Articles", path: "/blog/articles" },
      ],
    },

    { label: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  const toggleDropdown = (label: string) => {
    setActiveDropdown((prev) => (prev === label ? null : label));
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* LEFT — Logo */}
          <div className="flex items-center gap-3">
            <Link to="/" className="flex items-center space-x-3 group">
              <img
                src="/logo.png"
                alt="Elicius Energy Logo"
                className="w-25 h-20 object-contain"
              />
              <span className="text-xl font-bold glow-text hidden md:block">
                Elicius Energy
              </span>
            </Link>
          </div>

          {/* RIGHT — Menu + Mobile Button */}
          <div className="flex items-center gap-4">
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <div key={item.label} className="relative">
                  {/* If item has dropdown → use button trigger */}
                  {item.dropdown ? (
                    <>
                      <button
                        type="button"
                        onClick={() => toggleDropdown(item.label)}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-1 ${
                          isActive(item.path) || activeDropdown === item.label
                            ? "text-primary bg-primary/10"
                            : "text-foreground/80 hover:text-primary hover:bg-primary/5"
                        }`}
                      >
                        {item.label}
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${
                            activeDropdown === item.label ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {activeDropdown === item.label && (
                        <div className="absolute top-full left-0 mt-2 w-56 glass-glow rounded-xl overflow-hidden animate-fade-in-up">
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.path}
                              to={subItem.path}
                              className={`block px-4 py-3 text-sm transition-all duration-300 ${
                                isActive(subItem.path)
                                  ? "text-primary bg-primary/10"
                                  : "text-foreground/80 hover:text-primary hover:bg-primary/5"
                              }`}
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    // Normal link item
                    <Link
                      to={item.path}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                        isActive(item.path)
                          ? "text-primary bg-primary/10"
                          : "text-foreground/80 hover:text-primary hover:bg-primary/5"
                      }`}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-primary/10 transition-colors"
            >
              {isOpen ? (
                <X className="w-6 h-6 text-foreground" />
              ) : (
                <Menu className="w-6 h-6 text-foreground" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden py-4 animate-fade-in">
            <div className="space-y-1">
              {navItems.map((item) => (
                <div key={item.label}>
                  <Link
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                      isActive(item.path)
                        ? "text-primary bg-primary/10"
                        : "text-foreground/80 hover:text-primary hover:bg-primary/5"
                    }`}
                  >
                    {item.label}
                  </Link>

                  {item.dropdown && (
                    <div className="ml-4 mt-1 space-y-1">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.path}
                          to={subItem.path}
                          onClick={() => setIsOpen(false)}
                          className={`block px-4 py-2 rounded-lg text-sm transition-all ${
                            isActive(subItem.path)
                              ? "text-primary bg-primary/10"
                              : "text-foreground/70 hover:text-primary hover:bg-primary/5"
                          }`}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
