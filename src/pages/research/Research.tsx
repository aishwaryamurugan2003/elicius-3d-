import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Battery, Brain, Wind } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import Breadcrumb from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import researchHero from "@/assets/research-hero.jpg";

const Research = () => {
  const researchAreas = [
    {
      icon: Battery,
      title: "PEM Fuel Cell Technology",
      description:
        "Development of in-house membrane electrode assemblies and advanced planar & tubular PEM fuel cell architectures.",
      link: "/research/fuel-cell",
      highlights: [
        "High-efficiency PEM fuel cells",
        "MEA fabrication & testing",
        "Planar & tubular stack design",
      ],
    },
    {
      icon: Wind,
      title: "Environmental Monitoring",
      description:
        "Hyperlocal air quality intelligence using IoT sensor networks, remote sensing, and physics-based models.",
      link: "/research/air-quality-data",
      highlights: [
        "Real-time air quality mapping",
        "Predictive pollution models",
        "Health impact assessment",
      ],
    },
    {
      icon: Brain,
      title: "Electrochemical Modelling & Simulation",
      description:
        "Physics-based and system-level modelling of fuel cells and electrolyser systems for performance and lifetime analysis.",
      link: "/research/simulations",
      highlights: [
        "First-principles modelling",
        "Fuel cell & electrolyser simulation",
        "Degradation & lifetime assessment",
        "Balance-of-plant modelling",
      ],
    },
  ];

  return (
    <PageLayout>
      {/* ================= HEADER ================= */}
      <section className="section">
        <div className="container-wide">
          <Breadcrumb items={[{ label: "Research" }]} />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative mt-12 rounded-3xl overflow-hidden"
          >
            <div
              className="h-[420px] bg-cover bg-center"
              style={{ backgroundImage: `url(${researchHero})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/60 flex items-center">
                <div className="px-8 max-w-3xl">
                  <h1 className="heading heading-accent">
                    Our Research Areas
                  </h1>
                  <p className="subtext mt-4">
                    Translating deep research into deployable clean-tech solutions
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= RESEARCH CARDS ================= */}
      <section className="section section-muted">
        <div className="container-wide max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8">
            {researchAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover-soft">
                  <CardHeader>
                    <area.icon className="w-10 h-10 text-primary mb-4" />
                    <CardTitle className="text-3xl">
                      {area.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="text-[15px] md:text-[16px] leading-relaxed">
                    {/* Increased description size */}
                    <p className="text-muted-foreground mb-6">
                      {area.description}
                    </p>

                    {/* Increased bullet text */}
                    <ul className="space-y-2 mb-8">
                      {area.highlights.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start text-muted-foreground"
                        >
                          <span className="mt-2 mr-3 w-1.5 h-1.5 rounded-full bg-primary" />
                          {item}
                        </li>
                      ))}
                    </ul>

                    <Button
                      asChild
                      variant="default"
                      className="w-full"
                    >
                      <Link
                        to={area.link}
                        className="flex items-center justify-center"
                      >
                        Learn More
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Research;
