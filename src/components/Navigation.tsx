import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, FlaskConical, Cpu, BarChart2, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

    {
      label: "About",
      path: "/about",
      dropdown: [
        { label: "About Us", path: "/about" },
        { label: "Case Studies", path: "/services/case-studies" },
        { label: "Technology", path: "/technology" },
        { label: "Team", path: "/team" },
        { label: "Blog", path: "/blog" },
      ],
    },

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

    {
      label: "Research",
      path: "/research",
      isMega: true,
      dropdown: [
        {
          label: "Fuel Cell Technology",
          path: "/research/fuel-cell",
          description: "Indigenous MEA fabrication and hybrid architectures.",
          icon: FlaskConical,
        },
        {
          label: "Electrochemical Modelling",
          path: "/research/simulations",
          description: "System-level physics-based simulations and BoP modelling.",
          icon: Cpu,
        },
        {
          label: "Air Quality Data",
          path: "/research/air-quality-data",
          description: "Real-time monitoring and environmental insights.",
          icon: BarChart2,
        },
        {
          label: "Research Overview",
          path: "/research",
          description: "Our core research areas and focus.",
          icon: Globe,
        },
      ],
    },

    { label: "Testimonials", path: "/testimonials" },

    { label: "Career", path: "/career" },

    { label: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  const toggleDropdown = (label: string) => {
    setActiveDropdown((prev) => (prev === label ? null : label));
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-20 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container mx-auto px-4 h-full">
        <div className="flex items-center justify-between h-full">
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="Elicius Energy Logo"
              className="h-14 md:h-16 object-contain"
            />
            <span
              className={`text-lg font-semibold hidden md:block transition-colors ${
                isScrolled ? "text-[#243F73] dark:text-white" : "text-[#243F73] dark:text-white"
              }`}
            >
              Elicius Energy
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.dropdown && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {item.dropdown ? (
                  <>
                    <button
                      className={`flex items-center gap-1 px-4 py-2 rounded-md text-sm font-medium transition-colors relative ${
                        isActive(item.path) || activeDropdown === item.label
                          ? "text-primary"
                          : "text-foreground hover:text-primary"
                      }`}
                    >
                      {item.label}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          activeDropdown === item.label ? "rotate-180" : ""
                        }`}
                      />
                      {isActive(item.path) && (
                        <motion.div
                          layoutId="nav-underline"
                          className="absolute bottom-0 left-4 right-4 h-0.5 bg-primary rounded-full"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                    </button>

                    <AnimatePresence>
                      {activeDropdown === item.label && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className={`absolute top-full ${
                            item.isMega ? "-right-48 w-[600px]" : "left-0 w-60"
                          } mt-2 rounded-xl border border-border bg-background shadow-xl overflow-hidden p-2 z-[60]`}
                        >
                          {item.isMega ? (
                            <div className="grid grid-cols-2 gap-2">
                              {item.dropdown.map((subItem: any) => (
                                <Link
                                  key={subItem.path}
                                  to={subItem.path}
                                  className="group flex gap-4 p-4 rounded-lg hover:bg-muted transition-all"
                                  onClick={() => setActiveDropdown(null)}
                                >
                                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                                    <subItem.icon className="w-5 h-5" />
                                  </div>
                                  <div>
                                    <div className="text-sm font-semibold group-hover:text-primary transition-colors">
                                      {subItem.label}
                                    </div>
                                    <div className="text-xs text-muted-foreground mt-1 line-clamp-2">
                                      {subItem.description}
                                    </div>
                                  </div>
                                </Link>
                              ))}
                            </div>
                          ) : (
                            <div className="flex flex-col">
                              {item.dropdown.map((subItem) => (
                                <Link
                                  key={subItem.path}
                                  to={subItem.path}
                                  className={`block px-4 py-3 text-sm rounded-lg transition-colors ${
                                    isActive(subItem.path)
                                      ? "text-primary bg-muted font-medium"
                                      : "hover:bg-muted"
                                  }`}
                                  onClick={() => setActiveDropdown(null)}
                                >
                                  {subItem.label}
                                </Link>
                              ))}
                            </div>
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <Link
                    to={item.path}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors relative ${
                      isActive(item.path)
                        ? "text-primary"
                        : "text-foreground hover:text-primary"
                    }`}
                  >
                    {item.label}
                    {isActive(item.path) && (
                      <motion.div
                        layoutId="nav-underline"
                        className="absolute bottom-0 left-4 right-4 h-0.5 bg-primary rounded-full"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
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
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="lg:hidden fixed inset-y-0 right-0 w-full bg-background border-l border-border z-[100] shadow-2xl"
            >
              <div className="p-4 flex flex-col h-full">
                <div className="flex items-center justify-between mb-8 h-12">
                  <Link to="/" className="flex items-center gap-3" onClick={() => setIsOpen(false)}>
                    <img
                      src="/logo.png"
                      alt="Elicius Energy Logo"
                      className="h-10 object-contain"
                    />
                  </Link>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 rounded-md hover:bg-muted"
                  >
                    <X />
                  </button>
                </div>

                <div className="flex-1 overflow-y-auto space-y-1">
                  {navItems.map((item) => (
                    <div key={item.label} className="border-b border-border last:border-0">
                      <div className="flex items-center justify-between">
                        <Link
                          to={item.path}
                          onClick={() => setIsOpen(false)}
                          className={`flex-1 block px-4 py-4 text-lg font-medium transition-colors ${
                            isActive(item.path) ? "text-primary" : "hover:text-primary"
                          }`}
                        >
                          {item.label}
                        </Link>
                        {item.dropdown && (
                          <button
                            onClick={() => toggleDropdown(item.label)}
                            className="p-4"
                          >
                            <ChevronDown
                              className={`w-5 h-5 transition-transform ${
                                activeDropdown === item.label ? "rotate-180" : ""
                              }`}
                            />
                          </button>
                        )}
                      </div>

                      {item.dropdown && activeDropdown === item.label && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          className="bg-muted/30 ml-4 mb-4 rounded-xl overflow-hidden"
                        >
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.path}
                              to={subItem.path}
                              onClick={() => setIsOpen(false)}
                              className={`block px-4 py-3 text-sm ${
                                isActive(subItem.path)
                                  ? "text-primary font-semibold"
                                  : "hover:text-primary"
                              }`}
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navigation;
