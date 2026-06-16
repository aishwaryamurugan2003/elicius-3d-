import { motion, AnimatePresence } from "framer-motion";
import { Download, ArrowRight, Gauge, Wifi, Battery, Cloud, Filter, Search } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import Breadcrumb from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { devices } from "@/data/devices";
import { useNavigate } from "react-router-dom";
import { Image } from "antd";
import { useState, useMemo } from "react";

const Devices = () => {
  const navigate = useNavigate();
  const [previewSrc, setPreviewSrc] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", ...Array.from(new Set(devices.map(d => d.category)))];

  const filteredDevices = useMemo(() => {
    if (activeCategory === "All") return devices;
    return devices.filter(d => d.category === activeCategory);
  }, [activeCategory]);

  const features = [
    {
      icon: Gauge,
      title: "High Precision Sensors",
      description: "Laboratory-grade sensing accuracy",
    },
    {
      icon: Wifi,
      title: "IoT Enabled",
      description: "Real-time cloud connectivity",
    },
    {
      icon: Battery,
      title: "Long Battery Life",
      description: "Up to 6 months of operation",
    },
    {
      icon: Cloud,
      title: "Secure Cloud Storage",
      description: "Reliable & encrypted data storage",
    },
  ];

  return (
    <PageLayout>
      {/* ================= HERO BANNER ================= */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-[#243F73]">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4" />
        </div>

        <div className="container-wide relative z-10">
          {/* FIX 1: Wrapper forces white color on all breadcrumb children including the home icon SVG */}
          <div className="[&_*]:!text-white [&_svg]:!stroke-white [&_a]:!text-white/70 [&_a:hover]:!text-white [&_span]:!text-white">
            <Breadcrumb
              items={[
                { label: "Products", path: "/products" },
                { label: "Devices" },
              ]}
            />
          </div>

          <div className="mt-12 flex flex-col md:flex-row items-center gap-12">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex-1 text-left text-white"
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white text-xs font-semibold mb-6">
                PRO-GRADE IOT SOLUTIONS
              </span>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Air Quality Monitoring <span className="text-primary">Evolved.</span>
              </h1>
              <p className="text-lg text-white/80 mt-6 max-w-xl">
                Professionally engineered IoT devices delivering reliable, real-time air quality insights for industrial and urban environments.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white border-0"
                  onClick={() =>
                    window.open("/Kaatru brochure.pdf", "_blank")
                  }
                >
                  <Download className="mr-2 w-5 h-5" />
                  Product Brochure
                </Button>
                <Button size="lg" variant="outline" className="text-white border-black/20 hover:bg-white/10">
                  Explore Technology
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex-1 w-full max-w-md hidden md:block"
            >
              <div className="relative group">
                <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full scale-110 group-hover:bg-primary/30 transition-all duration-500" />
                <img
                  src={devices[0]?.images[0]}
                  alt="Elite AIQ Device"
                  className="relative z-10 w-full h-auto drop-shadow-[0_20px_50px_rgba(0,0,0,0.3)] group-hover:translate-y-[-10px] transition-transform duration-500"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= MAIN CONTENT ================= */}
      <section className="section bg-background">
        <div className="container-wide">
          <div className="flex flex-col lg:flex-row gap-12">

            {/* STICKY SIDEBAR */}
            <aside className="lg:w-72 flex-shrink-0">
              <div className="sticky top-32 space-y-8">
                <div>
                  <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                    <Filter className="w-5 h-5 text-primary" />
                    Categories
                  </h3>
                  <div className="flex lg:flex-col flex-wrap gap-3">
                    {categories.map((cat) => (
                      <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`px-5 py-3 rounded-xl text-sm font-medium transition-all text-left ${activeCategory === cat
                          ? "bg-primary text-white shadow-lg shadow-primary/20"
                          : "bg-muted/50 text-muted-foreground hover:bg-muted"
                          }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>

                <Card className="bg-[#243F73] text-white border-0 overflow-hidden relative">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
                  <div className="p-6 relative z-10">
                    <h4 className="font-bold mb-2">Need a custom solution?</h4>
                    <p className="text-xs text-white/70 mb-4">
                      Our engineering team can build bespoke hardware for your specific requirements.
                    </p>
                    <Button size="sm" variant="outline" className="w-full text-white border-white/20 hover:bg-white/10" onClick={() => navigate('/contact')}>
                      Contact Us
                    </Button>

                  </div>
                </Card>
              </div>
            </aside>

            {/* PRODUCT GRID */}
            <div className="flex-1">
              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
                <AnimatePresence mode="popLayout">
                  {filteredDevices.map((device, index) => (
                    <motion.div
                      key={device.id}
                      layout
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Card className="h-full flex flex-col group overflow-hidden border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5">
                        {/* IMAGE SECTION WITH HOVER REVEAL */}
                        <div className="relative bg-muted/30 h-[350px] flex items-center justify-center overflow-hidden">
                          <img
                            src={device.images[0]}
                            alt={device.name}
                            loading="lazy"
                            onClick={() => setPreviewSrc(device.images[0])}
                            className="w-full h-full object-contain cursor-zoom-in transition-transform duration-700 group-hover:scale-110"
                          />

                          {/* FIX 2: Quick Specs Overlay — removed conflicting translate-y-full,
                              uses grid-cols layout so keys never wrap and values align cleanly */}
                          <div className="absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-100 transition-all duration-500 p-6 flex flex-col justify-center">
                            <h4 className="text-white font-bold text-base mb-4">Key Performance</h4>
                            <div className="space-y-3">
                              {Object.entries(device.specs).slice(0, 4).map(([key, value]) => (
                                <div
                                  key={key}
                                  className="grid grid-cols-[auto_1fr] gap-x-3 items-start text-white/90 text-xs border-b border-white/10 pb-2"
                                >
                                  <span className="font-semibold whitespace-nowrap">{key}</span>
                                  <span className="text-right leading-snug">{value}</span>
                                </div>
                              ))}
                            </div>
                            <Button
                              className="mt-6 bg-white text-primary hover:bg-white/90 font-bold text-sm"
                              onClick={() => navigate(`/products/devices/${device.id}`)}
                            >
                              View Detailed Specs
                            </Button>
                          </div>

                          <span className="absolute top-4 right-4 text-xs px-4 py-1.5 rounded-full bg-white text-primary shadow-sm font-bold tracking-wide">
                            {device.category}
                          </span>
                        </div>

                        {/* CONTENT SECTION */}
                        <div className="p-8 flex flex-col flex-1">
                          <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                            {device.name}
                          </h3>
                          <p className="text-sm text-muted-foreground line-clamp-3 mb-6">
                            {device.description}
                          </p>

                          <div className="mt-auto pt-6 border-t border-border flex items-center justify-between">
                            <div className="text-2xl font-bold text-[#243F73]">
                              {device.price}
                            </div>
                            <Button
                              variant="ghost"
                              className="text-primary hover:text-primary hover:bg-primary/5 font-bold group/btn"
                              onClick={() => navigate(`/products/devices/${device.id}`)}
                            >
                              Explore
                              <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                            </Button>
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              {/* EMPTY STATE */}
              {filteredDevices.length === 0 && (
                <div className="text-center py-32 bg-muted/20 rounded-3xl border-2 border-dashed border-border">
                  <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mx-auto mb-6 text-muted-foreground">
                    <Search className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">No devices found</h3>
                  <p className="text-muted-foreground">Try adjusting your filters to find what you're looking for.</p>
                  <Button variant="link" className="mt-4" onClick={() => setActiveCategory("All")}>
                    Clear all filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ================= IMAGE PREVIEW ================= */}
      {previewSrc && (
        <Image
          style={{ display: "none" }}
          src={previewSrc}
          preview={{
            visible: true,
            onVisibleChange: (visible) => {
              if (!visible) setPreviewSrc(null);
            },
          }}
        />
      )}
    </PageLayout>
  );
};

export default Devices;
