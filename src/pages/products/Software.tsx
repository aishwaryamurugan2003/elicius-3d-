import { motion } from "framer-motion";
import { useRef } from "react";
import PageLayout from "@/components/PageLayout";
import Breadcrumb from "@/components/Breadcrumb";
import { Image as AntImage } from "antd";
import { ArrowRight } from "lucide-react";

// ---- Import Images ----
import cleanestRoute from "@/assets/software/cleanest_route.jpg";
import exposureAssessment from "@/assets/software/exposure_assessment.jpg";
import roadCondition from "@/assets/software/road_condition.jpg";
import hotspot from "@/assets/software/hotspot_identification.jpg";
import airQuality from "@/assets/software/air_quality_map.jpg";
import kaatruMobileApp from "@/assets/software/kaatru.jpg";
import dashboardMultiDevice from "@/assets/software/dashboard-multidevice.png";
import dashboardRealtimeMap from "@/assets/software/dashboard-realtime-map.png";
import dashboardSingleDevice from "@/assets/software/dashboard-single-device.png";
import dashboardSingleDeviceV2 from "@/assets/software/dashboard-single-device-v2.png";
import dashboardDiagnostics from "@/assets/software/dashboard-diagnostics.png";
import dashboardScatter from "@/assets/software/dashboard-scatter.png";

const Software = () => {
  const mobileRef = useRef<HTMLDivElement | null>(null);
  const dashboardRef = useRef<HTMLDivElement | null>(null);

  const scrollTo = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const softwareCards = [
    {
      title: "Mobile Application",
      description:
        "Real-time air quality intelligence delivered directly to your smartphone with seamless IoT integration.",
      onClick: () => scrollTo(mobileRef),
    },
    {
      title: "Dashboard",
      description:
        "A powerful web-based analytics platform for real-time monitoring, diagnostics, and insights.",
      onClick: () => scrollTo(dashboardRef),
    },
  ];

  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-16">
        {/* Breadcrumb */}
        <Breadcrumb
          items={[
            { label: "Products", path: "/products" },
            { label: "Software" },
          ]}
        />

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <h1 className="text-5xl font-bold mb-4 glow-text">Softwares</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We strive to provide advanced air & road monitoring software for efficient results.
          </p>
        </motion.div>

        {/* 🔹 SOFTWARE SOLUTION CARDS */}
        <section className="py-10">

        

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {softwareCards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <button
                  onClick={card.onClick}
                  className="glass-glow rounded-2xl p-8 h-full hover:glow-border
                             transition-all duration-300 group
                             flex flex-col text-left w-full"
                >
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                    {card.title}
                  </h3>

                  <p className="text-muted-foreground mb-6">
                    {card.description}
                  </p>

                  <div className="mt-auto flex items-center text-primary font-medium
                                  group-hover:translate-x-2 transition-transform">
                    Learn More <ArrowRight className="ml-2 w-4 h-4" />
                  </div>
                </button>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ✅ MOBILE APPLICATION SECTION */}
        <section ref={mobileRef} className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <AntImage
              src={kaatruMobileApp}
              alt="Kaatru Mobile Application"
              preview={{ mask: "View App Screens" }}
              className="w-full h-full object-contain"
            />

            <div className="space-y-6">
              <h2 className="text-4xl font-bold glow-text">
                Kaatru Mobile Application
              </h2>

              <p className="text-lg text-muted-foreground text-justify">
                The Kaatru Mobile Application delivers real-time air quality intelligence
                directly to your smartphone and integrates seamlessly with our IoT
                sensor network.
              </p>

              <ul className="space-y-3 text-muted-foreground">
                <li>• Real-time air quality & environmental monitoring</li>
                <li>• Interactive maps and spatial visualization</li>
                <li>• Pollution trend and exposure analysis</li>
                <li>• Live device and network status</li>
                <li>• Cross-platform Flutter application</li>
              </ul>
            </div>
          </motion.div>
        </section>

        {/* 📊 DASHBOARD SECTION */}
        <section ref={dashboardRef} className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="text-4xl font-bold glow-text mb-4">
              Kaatru Analytics Dashboard
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A comprehensive web-based platform for real-time monitoring,
              analytics, and management of air quality sensor networks.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-10"
          >
            {[
              dashboardMultiDevice,
              dashboardRealtimeMap,
              dashboardSingleDevice,
              dashboardSingleDeviceV2,
              dashboardDiagnostics,
              dashboardScatter,
            ].map((img, index) => (
              <div
                key={index}
                className="glass-glow rounded-2xl overflow-hidden hover-scale
                           h-[300px] md:h-[340px] lg:h-[380px]"
              >
                <AntImage
                  src={img}
                  alt={`Dashboard View ${index + 1}`}
                  preview={{ mask: "Click to Preview" }}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </motion.div>
          <div className="max-w-4xl mx-auto mt-12 space-y-4 text-muted-foreground text-center"> <p> The dashboard supports city-scale deployments with tools for real-time monitoring, historical analysis, and device diagnostics. </p> <p> Built for scalability and data integrity, it transforms raw sensor data into actionable environmental intelligence. </p> </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default Software;
