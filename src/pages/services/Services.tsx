import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Heart, FileText, ArrowRight } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import Breadcrumb from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      icon: Heart,
      title: "Volunteering Programs",
      description: "Join our community initiatives for environmental monitoring and clean air advocacy",
      link: "/services/volunteering",
      features: [
        "Community sensor networks",
        "Educational workshops",
        "Data collection drives",
        "Environmental awareness campaigns",
      ],
    },
    {
      icon: FileText,
      title: "Case Studies",
      description: "Explore real-world deployments and success stories from our clients",
      link: "/services/case-studies",
      features: [
        "Industrial deployments",
        "Smart city projects",
        "Research collaborations",
        "Impact assessments",
      ],
    },
  ];

  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-12">
        <Breadcrumb items={[{ label: "Services" }]} />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 glow-text">
            Our Services
          </h1>
          <p className="text-xl text-muted-foreground">
            Community engagement and real-world impact
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-glow rounded-2xl p-8 hover-scale group"
            >
              <service.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-3xl font-bold mb-4 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-6">{service.description}</p>

              <ul className="space-y-2 mb-6">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                asChild
                variant="outline"
                className="w-full glass-glow hover:bg-primary/10 group-hover:glow-border transition-all"
              >
                <Link to={service.link} className="flex items-center justify-center">
                  Explore
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default Services;
