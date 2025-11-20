import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { BarChart3, Brain, LineChart, Activity } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import Breadcrumb from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";

const Software = () => {
  const platforms = [
    {
      title: "Analytics Dashboard",
      icon: BarChart3,
      description: "Real-time data visualization with customizable widgets and reports",
      features: ["Custom dashboards", "Real-time alerts", "Historical trends", "Multi-device view"],
    },
    {
      title: "AI Predictive Engine",
      icon: Brain,
      description: "Machine learning powered forecasting and anomaly detection",
      features: ["Predictive analytics", "Pattern recognition", "Anomaly detection", "Auto-insights"],
    },
    {
      title: "Data Explorer",
      icon: LineChart,
      description: "Advanced data analysis tools with export and API access",
      features: ["Data export", "API integration", "Custom queries", "Batch processing"],
    },
    {
      title: "Mobile App",
      icon: Activity,
      description: "On-the-go monitoring with push notifications and quick insights",
      features: ["iOS & Android", "Push alerts", "Offline mode", "Quick actions"],
    },
  ];

  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-12">
        <Breadcrumb
          items={[
            { label: "Products", path: "/products" },
            { label: "Software" },
          ]}
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 glow-text">
            Software Platforms
          </h1>
          <p className="text-xl text-muted-foreground">
            AI-powered analytics and visualization tools for environmental data
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {platforms.map((platform, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-glow rounded-2xl p-8 hover-scale"
            >
              <platform.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-3">{platform.title}</h3>
              <p className="text-muted-foreground mb-6">{platform.description}</p>
              <ul className="space-y-2">
                {platform.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3" />
                    {feature}
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
          className="glass-glow rounded-3xl p-12 text-center"
        >
          <h2 className="text-3xl font-bold mb-4 glow-text">
            Request a Demo
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Experience our software platforms with a personalized walkthrough
          </p>
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-primary to-secondary text-background hover:shadow-glow transition-all duration-300"
          >
            <Link to="/contact">Schedule Demo</Link>
          </Button>
        </motion.div>
      </div>
    </PageLayout>
  );
};

export default Software;
