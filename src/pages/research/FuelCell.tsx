import { motion } from "framer-motion";
import { Battery, Zap, Droplets, Target, ArrowRight } from "lucide-react";
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

/* Images */
import Planar from "@/assets/fuel cell/Planar.jpg";
import tubular from "@/assets/fuel cell/tubular.jpg";
import inhouse from "@/assets/fuel cell/inhouse.jpg";
import modifiedcylindrical from "@/assets/fuel cell/modifiedcylindrical.jpg";
import pemcylindrical from "@/assets/fuel cell/pemcylindrical.jpg";
import cylindrical from "@/assets/fuel cell/cylindrical.jpg";

const FuelCell = () => {
  const focusAreas = [
    {
      icon: Battery,
      title: "Indigenous MEA Fabrication",
      description:
        "Complete in-house fabrication of membrane electrode assemblies with systematic performance optimisation.",
    },
    {
      icon: Zap,
      title: "Hybrid Fuel Cell Architectures",
      description:
        "Development of advanced planar, tubular, and hybrid PEM fuel cell designs for improved power density.",
    },
    {
      icon: Droplets,
      title: "Experimental Performance Testing",
      description:
        "Controlled experimental studies on humidity, temperature, and reactant flow conditions.",
    },
    {
      icon: Target,
      title: "Advanced Catalyst Coating",
      description:
        "Comparative evaluation of doctor-blade and air-spray coating techniques for enhanced efficiency.",
    },
  ];

  const products = [
    { name: "Planar PEM Fuel Cell", image: Planar },
    { name: "Cylindrical PEMFC Stack", image: cylindrical },
    { name: "In-House Fabricated MEA", image: inhouse },
    { name: "Tubular PEM Fuel Cell", image: tubular },
    { name: "Cylindrical PEM Fuel Cell", image: pemcylindrical },
    { name: "Modified Cylindrical PEMFC", image: modifiedcylindrical },
  ];

  return (
    <PageLayout>

      {/* ================= HEADER ================= */}
      <section className="section">
        <div className="container-wide">
          <Breadcrumb
            items={[
              { label: "Research", path: "/research" },
              { label: "Fuel Cell Technology" },
            ]}
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center mt-12"
          >
            <h1 className="heading heading-accent">
              Fuel Cell Technology
            </h1>
            <p className="subtext mt-6">
              Advanced research and development of PEM fuel cell technologies
              focused on performance, durability, and real-world deployment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= RESEARCH FOCUS ================= */}
      <section className="section section-muted">
        <div className="container-wide max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card>
              <div className="p-10">
                <h2 className="text-2xl font-semibold mb-4 text-center">
                  Research Focus
                </h2>
                <p className="text-muted-foreground leading-relaxed text-justify">
                  Elicius Energy specialises in the development of Proton Exchange
                  Membrane (PEM) fuel cell technologies, covering MEA fabrication,
                  stack design, balance-of-plant considerations, and experimental
                  validation for next-generation clean energy systems.
                </p>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* ================= FOCUS AREAS ================= */}
      <section className="section">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
            {focusAreas.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <div className="icon-badge mb-4">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <CardTitle className="text-3xl font-semibold">
    {item.title}
  </CardTitle>
                    <CardDescription>
                      {item.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= RELATED PRODUCTS ================= */}
      <section className="section section-muted">
        <div className="container-wide">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="heading text-center mb-16"
          >
            Related Fuel Cell Products
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
            {products.map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
              >
                <Card className="overflow-hidden h-full">
                  <div className="h-56 bg-muted">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <CardHeader>
                    <CardTitle className="text-lg text-center">
                      {product.name}
                    </CardTitle>
                  </CardHeader>
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
                  Interested in fuel cell research or collaboration?
                </h2>
                <p className="text-muted-foreground mb-6">
                  We collaborate with academia, industry, and government bodies
                  to develop scalable and impactful fuel cell technologies.
                </p>

                <Button asChild size="lg">
                  <a href="/contact">Get in Touch</a>
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

    </PageLayout>
  );
};

export default FuelCell;
