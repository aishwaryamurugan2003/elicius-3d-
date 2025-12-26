import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Database, Wrench, ArrowRight } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import Breadcrumb from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Database,
      title: "Data Services",
      description:
        "Comprehensive environmental data services enabling monitoring, analytics, and decision-making.",
      features: [
        "Cloud-based data storage",
        "Real-time analytics & insights",
        "Data export & API integration",
      ],
      link: "/products/data",
    },
    {
      icon: Wrench,
      title: "Consultancy Services",
      description:
        "End-to-end consulting and support for deployment, operation, and optimisation of monitoring systems.",
      features: [
        "System design & deployment",
        "Installation & commissioning",
        "Training & technical support",
      ],
      link: "/products/service",
    },
  ];

  return (
    <PageLayout>

      {/* ================= HEADER ================= */}
      <section className="section">
        <div className="container-wide">
          <Breadcrumb items={[{ label: "Services" }]} />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center mt-12"
          >
            <h1 className="heading heading-accent">Our Services</h1>
            <p className="subtext mt-6">
              Professional services supporting the full lifecycle of air quality
              monitoring and clean-tech deployments.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= SERVICES GRID ================= */}
      <section className="section section-muted">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full flex flex-col">
                  <CardHeader>
                    <div className="icon-badge mb-4">
                      <service.icon className="w-6 h-6" />
                    </div>

                    <CardTitle>{service.title}</CardTitle>
                    <CardDescription>
                      {service.description}
                    </CardDescription>
                  </CardHeader>

                  <div className="px-6 pb-6">
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start text-sm text-muted-foreground"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mr-3 mt-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <CardFooter className="mt-auto">
                    <Button asChild variant="outline" className="w-full">
                      <Link
                        to={service.link}
                        className="flex items-center justify-center gap-2"
                      >
                        Explore Service
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="section">
        <div className="container-wide text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Card>
              <div className="p-10">
                <h2 className="text-2xl font-semibold mb-4">
                  Need tailored consulting or data solutions?
                </h2>
                <p className="text-muted-foreground mb-6">
                  Our team works closely with industries, governments, and
                  research organisations to deliver customised clean-tech
                  solutions.
                </p>

                <Button asChild size="lg">
                  <Link to="/contact">Get in Touch</Link>
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

    </PageLayout>
  );
};

export default Services;
