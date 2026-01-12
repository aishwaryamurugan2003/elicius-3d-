import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Cpu, Code, ArrowRight } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import Breadcrumb from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";

const Products = () => {
  const products = [
    {
      icon: Cpu,
      title: "Devices",
      description:
        "Advanced IoT devices designed for real-time air quality monitoring and environmental sensing.",
      features: [
        "Real-time monitoring",
        "Cloud connectivity",
        "Long battery life",
      ],
      link: "/products/devices",
    },
    {
      icon: Code,
      title: "Software",
      description:
        "AI-powered analytics platforms for data visualization, reporting, and predictive insights.",
      features: [
        "Machine learning analytics",
        "Custom dashboards",
        "API-based integration",
      ],
      link: "/products/software",
    },
  ];

  return (
    <PageLayout>

      {/* ================= HEADER ================= */}
      <section className="section section-light">
        <div className="container-wide">
          <Breadcrumb items={[{ label: "Products" }]} />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center mt-12"
          >
            <h1 className="heading heading-accent">Our Products</h1>
            <p className="subtext mt-6">
              Comprehensive clean-tech products engineered for accuracy,
              reliability, and scalability.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= PRODUCTS GRID ================= */}
      <section className="section section-muted">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
            {products.map((product, index) => (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full flex flex-col">
                 <CardHeader>
  <div className="icon-badge mb-4">
    <product.icon className="w-6 h-6" />
  </div>

  <CardTitle className="text-3xl font-semibold">
    {product.title}
  </CardTitle>

  <CardDescription className="leading-relaxed">
    {product.description}
  </CardDescription>
</CardHeader>


                  <div className="px-6 pb-6">
                    <ul className="space-y-2 mb-6">
                      {product.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center text-sm text-muted-foreground"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mr-3" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <CardFooter className="mt-auto">
                    <Button asChild variant="outline" className="w-full">
                      <Link
                        to={product.link}
                        className="flex items-center justify-center gap-2"
                      >
                        Explore {product.title}
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

    </PageLayout>
  );
};

export default Products;
