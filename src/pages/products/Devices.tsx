import { motion } from "framer-motion";
import { Download, ArrowRight, Gauge, Wifi, Battery, Cloud } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import Breadcrumb from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { devices } from "@/data/devices";
import { useNavigate } from "react-router-dom";
import { Image } from "antd";
import { useState } from "react";

const Devices = () => {
  const navigate = useNavigate();
  const [previewSrc, setPreviewSrc] = useState<string | null>(null);

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

      {/* ================= HERO ================= */}
      <section className="section">
        <div className="container-wide">
          <Breadcrumb
            items={[
              { label: "Products", path: "/products" },
              { label: "Devices" },
            ]}
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center mt-12"
          >
            <h1 className="heading heading-accent">
              Air Quality Monitoring Devices
            </h1>

            <p className="subtext mt-6">
              Professionally engineered IoT devices delivering reliable,
              real-time air quality insights.
            </p>

            <div className="mt-10 flex justify-center">
              <Button
                size="lg"
                onClick={() =>
                  window.open("/Kaatru brochure.pdf", "_blank")
                }
              >
                <Download className="mr-2 w-5 h-5" />
                Download Product Brochure
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="section section-muted">
        <div className="container-wide">
          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
              >
                <Card className="text-center h-full">
                  <CardHeader>
                    <div className="icon-badge mx-auto mb-4">
                      <feature.icon className="w-6 h-6" />
                    </div>
                    <CardTitle>{feature.title}</CardTitle>
                    <CardDescription>
                      {feature.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= DEVICES GRID ================= */}
      <section className="section">
        <div className="container-wide">
          <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
            {devices.map((device, index) => (
              <motion.div
                key={device.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
              >
                <Card className="h-full flex flex-col hover:-translate-y-1 transition-all">

                  {/* IMAGE */}
                  <div className="relative bg-muted/40 h-[320px] flex items-center justify-center overflow-hidden">
                    <img
                      src={device.images[0]}
                      alt={device.name}
                      loading="lazy"
                      onClick={() => setPreviewSrc(device.images[0])}
                      className="w-full h-full object-contain cursor-zoom-in transition-transform duration-300 hover:scale-105"
                    />

                    <span className="absolute top-4 right-4 text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">
                      {device.category}
                    </span>
                  </div>

                  {/* CONTENT */}
                  <div className="p-6 flex flex-col flex-1">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        {device.name}
                      </h3>

                      <p className="text-sm text-muted-foreground mb-4">
                        {device.description}
                      </p>

                      <ul className="space-y-2 mb-4">
                        {Object.entries(device.specs).map(
                          ([key, value]) => (
                            <li
                              key={key}
                              className="text-sm text-muted-foreground flex"
                            >
                              <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3 mt-2" />
                              {key}: {value}
                            </li>
                          )
                        )}
                      </ul>
                    </div>

                    <div className="mt-auto">
                      <div className="text-xl font-semibold text-primary mb-4">
                        {device.price}
                      </div>

                      <Button
                        variant="outline"
                        className="w-full"
                        onClick={() =>
                          navigate(
                            `/products/devices/${device.id}`
                          )
                        }
                      >
                        View Details
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
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
