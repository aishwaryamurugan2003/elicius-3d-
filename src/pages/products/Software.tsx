import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import Breadcrumb from "@/components/Breadcrumb";

// ---- Import Images ----
import cleanestRoute from "@/assets/software/cleanest_route.jpg";
import exposureAssessment from "@/assets/software/exposure_assessment.jpg";
import roadCondition from "@/assets/software/road_condition.jpg";
import hotspot from "@/assets/software/hotspot_identification.jpg";
import airQuality from "@/assets/software/air_quality_map.jpg";

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
      description:
        "Get to know pollution hotspots across the country",
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
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-4 glow-text">Softwares</h1>
          <p className="text-xl text-muted-foreground">
            We strive to provide advanced air & road monitoring software for efficient results.
          </p>
        </motion.div>

        {/* Software Grid */}
        <div className="grid xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
          {softwares.map((soft, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="rounded-2xl overflow-hidden group hover-scale"
            >
              {/* Image */}
              <div className="h-60 w-full overflow-hidden">
                <img
                  src={soft.image}
                  alt={soft.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Card Content */}
              <div className="p-6 bg-card rounded-b-2xl shadow-lg">
                <h3 className="text-xl font-bold mb-2">{soft.title}</h3>
                <p className="text-muted-foreground text-sm">{soft.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </PageLayout>
  );
};

export default Software;