import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Battery, Brain, Wind } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import Breadcrumb from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import researchHero from "@/assets/research-hero.jpg";

const Research = () => {
  const researchAreas = [
    {
      icon: Battery,
      title: "PEM Fuel Cell Technology",
      description: "Our expertise involves development of In-house Membrane Electrode Assembly for planar & tubular fuel cell and testing of various design configurations of PEM fuel cell.",
      link: "/research/fuel-cell",
      highlights: [
        "High-efficiency PEM fuel cells",
        "Hydrogen storage solutions",
        "Grid integration systems",
      ],
    },
    {
      icon: Wind,
      title: "ENVIRONMENTAL MONITORING",
      description: "Provide real time air quality information using a network of distributed IoT devices,remotely sensed data and theoretical models,We Provide Hyperlocal Air Quality Insights",
      link: "/research/air-quality-data",
      highlights: [
        "Predictive air quality models",
        "Pollution source identification",
        "Health impact assessment",
      ],
    },
    {
  icon: Brain,
  title: "ELECTROCHEMICAL MODELLING & SIMULATION",
  description:
    "Physics-based and system-level simulation of electrochemical energy systems, enabling performance analysis, degradation assessment, and optimisation of fuel cells and electrolyser technologies.",
  link: "/research/simulations",
  highlights: [
    "First-principles & system-level modelling",
    "Fuel cell & electrolyser stack simulation",
    "Degradation and lifetime assessment",
    "Balance-of-plant modelling",
    "Performance and operational optimisation",
  ],
}

  ];

  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-12">
        <Breadcrumb items={[{ label: "Research" }]} />

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative mb-16 rounded-3xl overflow-hidden"
        >
          <div
            className="h-96 bg-cover bg-center relative"
            style={{
              backgroundImage: `url(${researchHero})`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/50 flex items-center">
              <div className="container mx-auto px-4">
                <h1 className="text-5xl md:text-6xl font-bold mb-4 glow-text max-w-2xl">
                  OUR RESEARCH AREAS
                </h1>
                {/* <p className="text-xl text-muted-foreground max-w-xl">
                  Pioneering clean-tech research from IIT Madras to real-world applications
                </p> */}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Research Areas */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {researchAreas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-glow rounded-2xl p-8 hover-scale group"
            >
              <area.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-3xl font-bold mb-4 group-hover:text-primary transition-colors">
                {area.title}
              </h3>
              <p className="text-muted-foreground mb-6">{area.description}</p>

              <ul className="space-y-2 mb-6">
                {area.highlights.map((highlight, i) => (
                  <li key={i} className="flex items-center text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3" />
                    {highlight}
                  </li>
                ))}
              </ul>

              <Button
                asChild
                variant="outline"
                className="w-full glass-glow hover:bg-primary group-hover:glow-border transition-all"
              >
                <Link to={area.link} className="flex items-center justify-center">
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-glow rounded-3xl p-12"
        >
          <h2 className="text-3xl font-bold mb-8 text-center glow-text">
            Research Impact
          </h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { value: "50+", label: "Research Papers" },
              { value: "15+", label: "Patents Filed" },
              { value: "₹10Cr+", label: "R&D Investment" },
              { value: "20+", label: "PhD Scholars" },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div> */}
      </div>
    </PageLayout>
  );
};

export default Research;
