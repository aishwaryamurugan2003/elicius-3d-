import { motion } from "framer-motion";
import { Database, Activity, Download } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import Breadcrumb from "@/components/Breadcrumb";
import realtimeDataImg from "@/assets/data/realtime_air_quality.jpg";

const Data = () => {
  const dataServices = [
    {
      icon: Database,
      title: "Cloud Storage Solutions",
      description:
        "Secure and scalable storage infrastructure for environmental data",
      details: [
        "Secure cloud infrastructure",
        "High availability & redundancy",
        "Scalable data storage",
        "Compliance-ready architecture",
      ],
    },
    {
      icon: Activity,
      title: "Real-time Analytics",
      description: "Instant processing and analysis of incoming sensor data",
      details: [
        "Live data processing",
        "Trend & anomaly detection",
        "Actionable insights",
        "Decision support dashboards",
      ],
    },
    {
      icon: Download,
      title: "Data Export",
      description: "Flexible export options for reporting and integration",
      details: [
        "Multiple file formats",
        "Scheduled exports",
        "API-based access",
        "Third-party integrations",
      ],
    },
  ];

  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-16">
        <Breadcrumb
          items={[
            { label: "Services", path: "/services" },
            { label: "Data Services" },
          ]}
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-4 glow-text">
            Data Services
          </h1>
          <p className="text-xl text-muted-foreground">
            We provide air quality & road condition data.
          </p>
        </motion.div>
        {/*
        <div className="max-w-7xl mx-auto mb-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid md:grid-cols-2 gap-10 items-center glass-glow rounded-3xl p-8"
          >
            <div className="overflow-hidden rounded-2xl h-[320px]">
              <img
                src={realtimeDataImg}
                alt="Realtime Air Quality Data"
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <h2 className="text-4xl font-bold mb-4">
                Realtime Air Quality Data
              </h2>

              <p className="text-muted-foreground leading-relaxed mb-8">
                We provide real-time air quality and road condition data using our
                advanced IoT sensor network and remotely sensed datasets, enabling
                accurate monitoring, analytics, and decision-making.
              </p>
            </div>
          </motion.div>
        </div>
        */}

        {/* Bottom cards (kept as-is for now) */}
        {/* Add them here if needed */}

        <div className="grid md:grid-cols-2 gap-8">
  {dataServices.map((service, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="glass-glow rounded-2xl p-8 hover-scale"
    >
      <service.icon className="w-12 h-12 text-primary mb-4" />

      <h3 className="text-2xl font-bold mb-3">
        {service.title}
      </h3>

      <p className="text-muted-foreground mb-6">
        {service.description}
      </p>

      <ul className="space-y-2">
        {service.details.map((detail, i) => (
          <li
            key={i}
            className="flex items-center text-sm text-muted-foreground"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3" />
            {detail}
          </li>
        ))}
      </ul>
    </motion.div>
  ))}
</div>
      </div>
    </PageLayout>
  );
};

export default Data;
