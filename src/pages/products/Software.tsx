import { motion } from "framer-motion";
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
          className="text-center mb-20"
        >
          <h1 className="text-5xl font-bold mb-4 glow-text">
            Softwares
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We strive to provide advanced air & road monitoring software for efficient results.
          </p>
        </motion.div>

        {/* ✅ MOBILE APPLICATION SECTION (ADD HERE) */}
        <section className="mb-32">
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


            {/* Content */}
            <div className="space-y-6">
              <h2 className="text-4xl font-bold glow-text">
                Kaatru Mobile Application
              </h2>

              <p className="text-lg text-muted-foreground leading-relaxed text-justify">
                The Kaatru Mobile Application delivers real-time air quality intelligence
                directly to your smartphone.the app integrates
                seamlessly with our IoT sensor network to provide hyperlocal pollution
                insights, interactive maps, and trend analysis.
              </p>

              <p className="text-muted-foreground leading-relaxed text-justify">
                Users can monitor PM2.5, PM10, temperature, and humidity levels, track
                pollution hotspots, assess personal exposure, and analyze air quality
                trends over time. The app is designed for citizens, researchers, and
                decision-makers seeking reliable, data-driven environmental insights.
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

        {/* Kaatru Dashboard Section */}
<section className="mb-32">
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
      A comprehensive web-based platform for real-time monitoring, analytics,
      and management of large-scale air quality sensor networks.
    </p>
  </motion.div>

  {/* Dashboard Images Grid */}
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


  {/* Dashboard Description */}
  <div className="max-w-4xl mx-auto mt-12 space-y-4 text-muted-foreground text-center">
    <p>
      The dashboard supports city-scale deployments with tools for monitoring
      real-time pollution levels, analyzing historical trends, and ensuring
      reliable device operation across the network.
    </p>
    <p>
      Built with scalability and data integrity at its core, the Kaatru Dashboard
      enables stakeholders to transform raw sensor data into actionable
      environmental intelligence.
    </p>
  </div>
</section>
{/*
==================== SOFTWARE GRID (COMMENTED OUT) ====================

<div className="grid xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
  {softwares.map((soft, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="rounded-2xl overflow-hidden group hover-scale flex flex-col h-full bg-card shadow-lg"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <img
          src={soft.image}
          alt={soft.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-bold mb-2">{soft.title}</h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {soft.description}
        </p>
        <div className="mt-auto" />
      </div>
    </motion.div>
  ))}
</div>

=======================================================================
*/}

      </div>
    </PageLayout>
  );
};

export default Software;
