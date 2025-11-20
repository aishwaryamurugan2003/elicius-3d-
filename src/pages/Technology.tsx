import { motion } from "framer-motion";
import { Cpu, Network, Zap, CloudLightning } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import Breadcrumb from "@/components/Breadcrumb";

const Technology = () => {
  const technologies = [
    {
      icon: Network,
      title: "IoT Architecture",
      description: "Advanced Internet of Things infrastructure with edge computing capabilities",
      points: [
        "Real-time sensor networks",
        "Edge processing for low latency",
        "Mesh networking protocols",
        "OTA firmware updates",
      ],
    },
    {
      icon: Cpu,
      title: "Machine Learning",
      description: "AI-powered analytics for predictive insights and pattern recognition",
      points: [
        "Time-series forecasting",
        "Anomaly detection algorithms",
        "Pattern recognition",
        "Automated insights generation",
      ],
    },
    {
      icon: Zap,
      title: "Power Electronics",
      description: "Efficient power management and energy harvesting technologies",
      points: [
        "Low-power sensor design",
        "Solar energy harvesting",
        "Battery optimization",
        "Power monitoring systems",
      ],
    },
    {
      icon: CloudLightning,
      title: "Cloud Infrastructure",
      description: "Scalable cloud architecture with distributed data processing",
      points: [
        "Multi-region deployment",
        "Auto-scaling capabilities",
        "Data redundancy",
        "API-first design",
      ],
    },
  ];

  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-12">
        <Breadcrumb items={[{ label: "Technology" }]} />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 glow-text">
            Our Technology
          </h1>
          <p className="text-xl text-muted-foreground">
            Cutting-edge innovations powering clean energy solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-glow rounded-2xl p-8 hover-scale"
            >
              <tech.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-3">{tech.title}</h3>
              <p className="text-muted-foreground mb-6">{tech.description}</p>
              <ul className="space-y-2">
                {tech.points.map((point, i) => (
                  <li key={i} className="flex items-center text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3" />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 glass-glow rounded-3xl p-12 text-center"
        >
          <h2 className="text-3xl font-bold mb-4 glow-text">
            Innovation from IIT Madras
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our technology stack is built on years of R&D at IIT Madras Research Park, 
            combining academic excellence with real-world application to create solutions 
            that push the boundaries of clean-tech innovation.
          </p>
        </motion.div>
      </div>
    </PageLayout>
  );
};

export default Technology;
