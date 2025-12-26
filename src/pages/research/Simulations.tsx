import { motion } from "framer-motion";
import {
  Brain,
  BarChart3,
  Layers,
  TrendingUp,
} from "lucide-react";

import PageLayout from "@/components/PageLayout";
import Breadcrumb from "@/components/Breadcrumb";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

import model1 from "@/assets/simulations/alkaline-electrolyzer.jpg";
import model2 from "@/assets/simulations/hydrogen-fuelcell.jpg";
import model3 from "@/assets/simulations/electricity-water.jpg";

const ElectrochemicalModelling = () => {
  const capabilities = [
    {
      icon: Brain,
      title: "First-Principles & System-Level Modelling",
      description:
        "Physics-based and system-level models integrating thermodynamics, electrochemistry, and transport phenomena for fuel cells and electrolysers.",
    },
    {
      icon: Layers,
      title: "Balance-of-Plant & Auxiliary Systems",
      description:
        "Detailed modelling of compressors, pumps, humidifiers, heat exchangers, and control subsystems for realistic plant-scale analysis.",
    },
    {
      icon: TrendingUp,
      title: "Degradation & Lifetime Assessment",
      description:
        "Electrode and catalyst degradation, resistance growth, gas crossover, and electrolyte effects under real operating conditions.",
    },
    {
      icon: BarChart3,
      title: "Performance & Operational Optimisation",
      description:
        "Steady-state and dynamic simulations for efficiency optimisation, diagnostics, reliability analysis, and system integration.",
    },
  ];

  return (
    <PageLayout>

      {/* ================= HEADER ================= */}
      <section className="section">
        <div className="container-wide">
          <Breadcrumb
            items={[
              { label: "Research", path: "/research" },
              { label: "Electrochemical Modelling & Simulation" },
            ]}
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-5xl mx-auto text-center mt-12"
          >
            <h1 className="heading heading-accent">
              Modelling & Simulation of Electrochemical Energy Systems
            </h1>
            <p className="subtext mt-6">
              Physics-based insights enabling hydrogen and clean-energy
              technologies through rigorous system-level modelling.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="section section-muted">
        <div className="container-wide max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card>
              <div className="p-10 space-y-6 text-muted-foreground leading-relaxed text-justify">
                <p>
                  Advanced modelling and simulation of electrochemical energy
                  systems is one of Elicius Energy’s key areas of specialisation.
                  We develop first-principles and system-level models of fuel
                  cell plants, including detailed representation of auxiliary
                  and balance-of-plant (BoP) subsystems.
                </p>

                <p>
                  These models enable steady-state and dynamic performance
                  analysis, efficiency optimisation, operational diagnostics,
                  and system integration studies. Our work bridges fundamental
                  electrochemistry with real-world plant operation.
                </p>

                <p>
                  Elicius has also expanded into modelling of alkaline water
                  electrolyser (AWE) stacks, focusing on degradation mechanisms
                  such as catalyst ageing, resistance growth, gas crossover,
                  and coupled thermal–electrochemical behaviour under realistic
                  operating conditions.
                </p>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* ================= WORKING PRINCIPLE ================= */}
      <section className="section">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto mb-14"
          >
            <h2 className="text-3xl md:text-4xl font-semibold">
              Working Principle of Hydrogen Electrolysis & Fuel Cell Systems
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {[model1, model2, model3].map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <div className="p-6 flex items-center justify-center">
                    <img
                      src={img}
                      alt="Electrochemical energy system modelling"
                      className="w-full h-auto object-contain rounded-lg"
                    />
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CAPABILITIES ================= */}
      <section className="section section-muted">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
            {capabilities.map((item, index) => (
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
                    <CardTitle>{item.title}</CardTitle>
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

    </PageLayout>
  );
};

export default ElectrochemicalModelling;
