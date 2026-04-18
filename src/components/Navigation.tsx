import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },

    {
      label: "Products",
      path: "/products",
      dropdown: [
        { label: "All Products", path: "/products" },
        { label: "Devices", path: "/products/devices" },
        { label: "Software", path: "/products/software" },
      ],
    },
    {
      label: "All Services",
      path: "/services",
      dropdown: [
        { label: "All Services", path: "/services" },
        { label: "IoT Training", path: "/services/data" },
        { label: "Consultancy Services", path: "/products/service" },
      ],
    },

    { label: "Case Studies", path: "/services/case-studies" },
    { label: "Technology", path: "/technology" },

    {
      label: "Research",
      path: "/research",
      dropdown: [
        { label: "Research Overview", path: "/research" },
        { label: "Fuel Cell Technology", path: "/research/fuel-cell" },
        { label: "Air Quality Data", path: "/research/air-quality-data" },
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
      ],
    },

    { label: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  const toggleDropdown = (label: string) => {
    setActiveDropdown((prev) => (prev === label ? null : label));
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border h-20">
      <div className="container mx-auto px-4 h-full">
        <div className="flex items-center justify-between h-full">
          <Link to="/" className="flex items-center gap-3">
  <img
    src="/logo.png"
    alt="Elicius Energy Logo"
    className="h-14 md:h-16 object-contain"
  />
  <span className="text-lg font-semibold hidden md:block text-[#243F73]">
    Elicius Energy
  </span>
</Link>
          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div key={item.label} className="relative">

                {item.dropdown ? (
                  <>
                    <button
                      onClick={() => toggleDropdown(item.label)}
                      className={`flex items-center gap-1 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                        isActive(item.path) || activeDropdown === item.label
                          ? "text-primary bg-muted"
                          : "text-foreground hover:text-primary hover:bg-muted"
                      }`}
                    >
                      {item.label}

                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          activeDropdown === item.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {activeDropdown === item.label && (
                      <div className="absolute top-full left-0 mt-2 w-60 rounded-lg border border-border bg-background shadow-md">

                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.path}
                            to={subItem.path}
                            className={`block px-4 py-3 text-sm transition-colors ${
                              isActive(subItem.path)
                                ? "text-primary bg-muted"
                                : "hover:bg-muted"
                            }`}
                            onClick={() => setActiveDropdown(null)}
                          >
                            {subItem.label}
                          </Link>
                        ))}

                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={item.path}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive(item.path)
                        ? "text-primary bg-muted"
                        : "text-foreground hover:text-primary hover:bg-muted"
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
            className="lg:hidden p-2 rounded-md hover:bg-muted"
          >
            {isOpen ? <X /> : <Menu />}
          </button>

        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div 
            className="lg:hidden absolute top-20 left-0 w-full bg-background border-t border-border overflow-y-auto"
            style={{ 
              height: "calc(100dvh - 80px)",
              WebkitOverflowScrolling: "touch"
            }}
          >
            <div className="space-y-1 py-4">

              {navItems.map((item) => (
                <div key={item.label}>

                  <Link
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-3 rounded-md text-sm transition-colors ${
                      isActive(item.path)
                        ? "text-primary bg-muted"
                        : "hover:bg-muted"
                    }`}
                  >
                    {item.label}
                  </Link>

                  {item.dropdown && (
                    <div className="ml-4 space-y-1">

                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.path}
                          to={subItem.path}
                          onClick={() => setIsOpen(false)}
                          className={`block px-4 py-2 rounded-md text-sm ${
                            isActive(subItem.path)
                              ? "text-primary bg-muted"
                              : "hover:bg-muted"
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