import { motion } from "framer-motion";
import { useRef, useState } from "react";
import PageLayout from "@/components/PageLayout";
import Breadcrumb from "@/components/Breadcrumb";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Image } from "antd";
import { ArrowRight } from "lucide-react";

// ---- Images ----
import kaatruMobileApp from "@/assets/software/editedkaatru.jpg";
import dashboardMultiDevice from "@/assets/software/dashboard-multidevice.png";
import dashboardRealtimeMap from "@/assets/software/dashboard-realtime-map.png";
import dashboardSingleDevice from "@/assets/software/dashboard-single-device.png";
import dashboardSingleDeviceV2 from "@/assets/software/dashboard-single-device-v2.png";
import dashboardDiagnostics from "@/assets/software/dashboard-diagnostics.png";
import dashboardScatter from "@/assets/software/dashboard-scatter.png";

const Software = () => {
  const mobileRef = useRef<HTMLDivElement | null>(null);
  const dashboardRef = useRef<HTMLDivElement | null>(null);
  const [previewSrc, setPreviewSrc] = useState<string | null>(null);

  const scrollTo = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const softwareCards = [
    {
      title: "Mobile Application",
      description:
        "Real-time air quality intelligence delivered directly to smartphones through seamless IoT integration.",
      onClick: () => scrollTo(mobileRef),
    },
    {
      title: "Analytics Dashboard",
      description:
        "A powerful web-based analytics platform for real-time monitoring, diagnostics, and insights.",
      onClick: () => scrollTo(dashboardRef),
    },
  ];

  const dashboardImages = [
    dashboardMultiDevice,
    dashboardRealtimeMap,
    dashboardSingleDevice,
    dashboardSingleDeviceV2,
    dashboardDiagnostics,
    dashboardScatter,
  ];

  return (
    <PageLayout>

      {/* ================= HEADER ================= */}
      <section className="section">
        <div className="container-wide">
          <Breadcrumb
            items={[
              { label: "Products", path: "/products" },
              { label: "Software" },
            ]}
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center mt-12"
          >
            <h1 className="heading heading-accent">Software Platforms</h1>
            <p className="subtext mt-6">
              Advanced software solutions powering real-time air quality
              intelligence, analytics, and decision-making.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= SOFTWARE OVERVIEW ================= */}
      <section className="section section-muted">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {softwareCards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card
                  className="cursor-pointer hover:-translate-y-1 transition-all h-full"
                  onClick={card.onClick}
                >
                  <CardHeader>
                    <CardTitle>{card.title}</CardTitle>
                    <CardDescription>
                      {card.description}
                    </CardDescription>

                    <div className="mt-6 flex items-center text-primary font-medium">
                      Learn more <ArrowRight className="ml-2 w-4 h-4" />
                    </div>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= MOBILE APP ================= */}
      <section ref={mobileRef} className="section">
        <div className="container-wide max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <img
              src={kaatruMobileApp}
              alt="Kaatru Mobile Application"
              onClick={() => setPreviewSrc(kaatruMobileApp)}
              className="w-full h-auto object-contain cursor-zoom-in rounded-xl border"
            />

            <div>
              <h2 className="text-3xl font-semibold mb-4">
                Kaatru Mobile Application
              </h2>

              <p className="text-muted-foreground text-lg mb-6">
                The Kaatru Mobile Application provides real-time air quality
                intelligence through seamless integration with our IoT sensor
                network.
              </p>

              <ul className="space-y-3 text-muted-foreground text-sm">
                <li>• Real-time air quality monitoring</li>
                <li>• Interactive maps & spatial visualisation</li>
                <li>• Pollution exposure analysis</li>
                <li>• Live device & network status</li>
                <li>• Cross-platform Flutter application</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= DASHBOARD ================= */}
      <section ref={dashboardRef} className="section section-muted">
        <div className="container-wide max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-semibold mb-4">
              Kaatru Analytics Dashboard
            </h2>
            <p className="subtext max-w-3xl mx-auto">
              A comprehensive web-based platform for real-time monitoring,
              diagnostics, and management of air quality sensor networks.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {dashboardImages.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="border rounded-xl overflow-hidden hover:shadow-md transition"
              >
                <img
                  src={img}
                  alt={`Dashboard View ${index + 1}`}
                  onClick={() => setPreviewSrc(img)}
                  className="w-full h-[300px] object-cover cursor-zoom-in"
                />
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
            onVisibleChange: (v) => !v && setPreviewSrc(null),
          }}
        />
      )}

    </PageLayout>
  );
};

export default Software;
