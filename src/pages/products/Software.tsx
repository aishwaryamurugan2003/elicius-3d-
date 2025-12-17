import { motion } from "framer-motion";
import { useRef } from "react";
import PageLayout from "@/components/PageLayout";
import Breadcrumb from "@/components/Breadcrumb";
import { Image as AntImage } from "antd";

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

  const softwares = [
    {
      title: "Cleanest Route",
      description: "Gives you the least polluted route from Point A to Point B",
      image: cleanestRoute,
    },
    {
      title: "Exposure Assessment",
      description: "Provides personal PM2.5 exposure assessment for individuals",
      image: exposureAssessment,
    },
    {
      title: "Road Condition",
      description: "Visualization of the road condition on the map",
      image: roadCondition,
    },
    {
      title: "Spatio-temporal hotspot identification",
      description: "Get to know pollution hotspots across the country",
      image: hotspot,
    },
    {
      title: "Air Quality map",
      description: "Visualizing air pollution using heat map",
      image: airQuality,
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
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold mb-4 glow-text">Softwares</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We strive to provide advanced air & road monitoring software for efficient results.
          </p>
        </motion.div>

        {/* 🔹 Navigation Buttons */}
        <div className="flex justify-center gap-6 mb-24">
          <button
            onClick={() => scrollTo(mobileRef)}
            className="px-6 py-3 rounded-full glass-glow font-semibold hover:bg-primary transition-all"
          >
            Mobile Application
          </button>

          <button
            onClick={() => scrollTo(dashboardRef)}
            className="px-6 py-3 rounded-full glass-glow font-semibold hover:bg-primary transition-all"
          >
            Dashboard
          </button>
        </div>

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
              alt="Kaatru Air Quality Monitoring Mobile Application"
              preview={{ mask: "View App Screens" }}
              placeholder={
                <AntImage
                  preview={false}
                  src={kaatruMobileApp}
                  className="w-full h-full object-contain blur-md"
                />
              }
              className="w-full h-full object-contain"
            />

            <div className="space-y-6">
              <h2 className="text-4xl font-bold glow-text">
                Kaatru Mobile Application
              </h2>

              <p className="text-lg text-muted-foreground leading-relaxed text-justify">
                The Kaatru Mobile Application delivers real-time air quality intelligence
                directly to your smartphone and integrates seamlessly with our IoT
                sensor network.
              </p>

              <p className="text-muted-foreground leading-relaxed text-justify">
                Users can monitor PM2.5, PM10, temperature, and humidity, track
                pollution hotspots, assess exposure, and analyze trends over time.
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
            className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-10"
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
                  alt={`Kaatru Dashboard View ${index + 1}`}
                  preview={{ mask: "Click to Preview" }}
                  placeholder={
                    <AntImage
                      preview={false}
                      src={img}
                      className="w-full h-full object-cover blur-md scale-105"
                    />
                  }
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </motion.div>

          <div className="max-w-4xl mx-auto mt-12 space-y-4 text-muted-foreground text-center">
            <p>
              The dashboard supports city-scale deployments with tools for real-time
              monitoring, historical analysis, and device diagnostics.
            </p>
            <p>
              Built for scalability and data integrity, it transforms raw sensor
              data into actionable environmental intelligence.
            </p>
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default Software;
