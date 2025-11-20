import { motion } from "framer-motion";
import { Settings, Users, GraduationCap, HeadphonesIcon } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import Breadcrumb from "@/components/Breadcrumb";

const Service = () => {
  const services = [
    {
      icon: Settings,
      title: "Installation & Setup",
      description: "Professional installation and configuration of all devices and software",
      details: [
        "On-site installation",
        "Network configuration",
        "System calibration",
        "Integration testing",
      ],
    },
    {
      icon: HeadphonesIcon,
      title: "24/7 Support",
      description: "Round-the-clock technical support and maintenance services",
      details: [
        "Phone & email support",
        "Remote diagnostics",
        "Emergency response",
        "Regular maintenance",
      ],
    },
    {
      icon: GraduationCap,
      title: "Training",
      description: "Comprehensive training programs for your team",
      details: [
        "User training sessions",
        "Admin workshops",
        "Video tutorials",
        "Documentation",
      ],
    },
    {
      icon: Users,
      title: "Consulting",
      description: "Expert consulting for environmental monitoring strategies",
      details: [
        "System design",
        "Deployment planning",
        "Data strategy",
        "Compliance guidance",
      ],
    },
  ];

  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-12">
        <Breadcrumb
          items={[
            { label: "Products", path: "/products" },
            { label: "Services" },
          ]}
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 glow-text">
            Services & Support
          </h1>
          <p className="text-xl text-muted-foreground">
            End-to-end support to ensure your success
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-glow rounded-2xl p-8 hover-scale"
            >
              <service.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.details.map((detail, i) => (
                  <li key={i} className="flex items-center text-sm text-muted-foreground">
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

export default Service;
