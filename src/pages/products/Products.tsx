import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Cpu, Code, Database, Wrench, ArrowRight } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import Breadcrumb from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";

const Products = () => {
  const products = [
    {
      icon: Cpu,
      title: "Devices",
      description: "Advanced IoT devices for real-time air quality monitoring and environmental sensing",
      features: ["Real-time monitoring", "Cloud connectivity", "Long battery life"],
      link: "/products/devices",
      color: "from-primary to-secondary",
    },
    {
      icon: Code,
      title: "Software",
      description: "AI-powered analytics platforms for data visualization and predictive insights",
      features: ["Machine learning", "Custom dashboards", "API integration"],
      link: "/products/software",
      color: "from-secondary to-primary",
    },
    // {                                                                                                                                                                                                                                                     
    //   icon: Database,
    //   title: "Data",
    //   description: "Comprehensive data management and storage solutions for environmental data",
    //   features: ["Cloud storage", "Real-time analytics", "Data export"],
    //   link: "/products/data",
    //   color: "from-primary to-secondary",
    // },
    // {
    //   icon: Wrench,
    //   title: "Service",
    //   description: "End-to-end support including installation, maintenance, and consulting",
    //   features: ["24/7 support", "Installation", "Training"],
    //   link: "/products/service",
    //   color: "from-secondary to-primary",
    // },
  ];

  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-12">
        <Breadcrumb items={[{ label: "Products" }]} />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 glow-text">
            Our Products
          </h1>
          <p className="text-xl text-muted-foreground">
            Comprehensive clean-tech solutions designed for excellence
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-glow rounded-2xl p-8 hover-scale group"
            >
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${product.color} flex items-center justify-center mb-6 group-hover:shadow-glow transition-all`}>
                <product.icon className="w-8 h-8 text-background" />
              </div>

              <h2 className="text-3xl font-bold mb-4 group-hover:text-primary transition-colors">
                {product.title}
              </h2>

              <p className="text-muted-foreground mb-6">
                {product.description}
              </p>

              <ul className="space-y-2 mb-6">
                {product.features.map((feature, i) => (
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
                <Link to={product.link} className="flex items-center justify-center">
                  Explore {product.title}
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

export default Products;
