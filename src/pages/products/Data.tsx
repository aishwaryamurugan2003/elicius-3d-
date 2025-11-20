import { motion } from "framer-motion";
import { Database, Cloud, Lock, Zap } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import Breadcrumb from "@/components/Breadcrumb";

const Data = () => {
  const features = [
    {
      icon: Database,
      title: "Secure Storage",
      description: "Enterprise-grade data storage with automatic backups and redundancy",
    },
    {
      icon: Cloud,
      title: "Cloud Infrastructure",
      description: "Scalable cloud architecture that grows with your data needs",
    },
    {
      icon: Lock,
      title: "Data Security",
      description: "End-to-end encryption and compliance with industry standards",
    },
    {
      icon: Zap,
      title: "Fast Access",
      description: "Lightning-fast data retrieval with optimized query performance",
    },
  ];

  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-12">
        <Breadcrumb
          items={[
            { label: "Products", path: "/products" },
            { label: "Data Solutions" },
          ]}
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 glow-text">
            Data Solutions
          </h1>
          <p className="text-xl text-muted-foreground">
            Comprehensive data management and storage for environmental monitoring
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-glow rounded-2xl p-8 hover-scale text-center"
            >
              <feature.icon className="w-16 h-16 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-glow rounded-2xl p-8 max-w-3xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-6 text-center glow-text">
            Data Management Features
          </h2>
          <ul className="space-y-4">
            {[
              "Real-time data streaming and processing",
              "Historical data archiving with compression",
              "Custom data retention policies",
              "API access for third-party integrations",
              "Automated data quality checks",
              "Export in multiple formats (CSV, JSON, XML)",
            ].map((item, i) => (
              <li key={i} className="flex items-start">
                <div className="w-2 h-2 rounded-full bg-primary mr-4 mt-2 flex-shrink-0" />
                <span className="text-lg text-muted-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </PageLayout>
  );
};

export default Data;
