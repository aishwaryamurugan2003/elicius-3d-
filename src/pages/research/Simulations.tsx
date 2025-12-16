import { motion } from "framer-motion";
import {
  Brain,
  BarChart3,
  Layers,
  TrendingUp,
} from "lucide-react";
import PageLayout from "@/components/PageLayout";
import Breadcrumb from "@/components/Breadcrumb";

// // add your images here
// import model1 from "@/assets/modelling/system-model.jpg";
// import model2 from "@/assets/modelling/awe-stack.jpg";
// import model3 from "@/assets/modelling/thermal-electrochemical.jpg";

const ElectrochemicalModelling = () => {
  const capabilities = [
    {
      icon: Brain,
      title: "First-Principles & System-Level Modelling",
      description:
        "Physics-based and system-level models of fuel cell and electrolyser systems integrating thermodynamics, electrochemistry, and transport phenomena.",
    },
    {
      icon: Layers,
      title: "Balance-of-Plant & Auxiliary Systems",
      description:
        "Detailed modelling of compressors, pumps, humidifiers, heat exchangers, and control subsystems for realistic plant-level analysis.",
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
      <div className="container mx-auto px-4 py-12">
        <Breadcrumb
          items={[
            { label: "Research", path: "/research" },
            { label: "Electrochemical Modelling & Simulation" },
          ]}
        />

        {/* HERO */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-5xl mx-auto text-center mb-20"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 glow-text">
            Modelling & Simulation of Electrochemical Energy Systems
          </h1>
          <p className="text-xl text-muted-foreground">
            Physics-based insights for hydrogen and clean-energy technologies
          </p>
        </motion.div>

       {/* INTRO */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  className="glass-glow rounded-2xl p-8 max-w-5xl mx-auto mb-20"
>
  <div className="space-y-6 text-muted-foreground text-justify leading-relaxed">
    <p>
      Advanced modelling and simulation of electrochemical energy systems for hydrogen and clean-energy applications is one of Elicius’ key areas of specialisation. In this domain, Elicius has strong capabilities in first principles and system-level modelling of fuel cell plants, including detailed representation of auxiliary and balance-of-plant (BoP) subsystems. These models are used for steady-state and dynamic performance analysis, efficiency optimisation, operational diagnostics, and system integration studies.
    </p>

    <p>
      As part of this expertise, Elicius has also expanded into modelling of alkaline water electrolyser (AWE) stacks, with a focused effort on degradation mechanisms under real operating conditions. This includes electrode and catalyst degradation, electrolyte effects, gas crossover, resistance growth, and coupled thermal–electrochemical behaviour, enabling lifetime assessment, reliability analysis, and operational optimisation of working plants.
    </p>

    <p>
      Through rigorous application of thermodynamics, electrochemistry, and heat and mass transfer, Elicius delivers technically robust, industry-relevant modelling solutions while continuing to develop and operate across its other technology and engineering verticals.
    </p>
  </div>
</motion.div>


        {/* IMAGE SECTION
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {[model1, model2, model3].map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-glow rounded-2xl overflow-hidden hover-scale"
            >
              <img
                src={img}
                alt="Electrochemical system modelling"
                className="w-full h-64 object-cover"
              />
            </motion.div>
          ))}
        </div> */}

        {/* CAPABILITIES */}
        <div className="grid md:grid-cols-2 gap-8 mb-32">
          {capabilities.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-glow rounded-2xl p-8 hover-scale text-center"
            >
              <item.icon className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default ElectrochemicalModelling;
