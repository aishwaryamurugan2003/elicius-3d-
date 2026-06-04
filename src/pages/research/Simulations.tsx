import { motion, AnimatePresence } from "framer-motion";
import {
  Brain,
  BarChart3,
  Layers,
  TrendingUp,
  ChevronDown,
  Cpu,
  Monitor,
  Activity,
  Zap
} from "lucide-react";

import PageLayout from "@/components/PageLayout";
import Breadcrumb from "@/components/Breadcrumb";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";

import model1 from "@/assets/simulations/alkaline-electrolyzer.jpg";
import model2 from "@/assets/simulations/hydrogen-fuelcell.jpg";
import model3 from "@/assets/simulations/electricity-water.jpg";

const ElectrochemicalModelling = () => {
  const capabilities = [
    {
      icon: Brain,
      title: "First-Principles Modelling",
      description: "Physics-based models integrating thermodynamics, electrochemistry, and transport phenomena.",
      className: "md:col-span-2 md:row-span-2",
      color: "bg-blue-500/10 text-blue-600"
    },
    {
      icon: Layers,
      title: "BoP Auxiliary Systems",
      description: "Detailed modelling of compressors, pumps, and control subsystems.",
      className: "md:col-span-1 md:row-span-1",
      color: "bg-purple-500/10 text-purple-600"
    },
    {
      icon: TrendingUp,
      title: "Lifetime Assessment",
      description: "Electrode degradation and catalyst ageing analysis.",
      className: "md:col-span-1 md:row-span-1",
      color: "bg-emerald-500/10 text-emerald-600"
    },
    {
      icon: Activity,
      title: "Dynamic Simulations",
      description: "Real-time response and transients.",
      className: "md:col-span-1 md:row-span-1",
      color: "bg-orange-500/10 text-orange-600"
    },
    {
      icon: Monitor,
      title: "Plant Integration",
      description: "Full system-level optimization.",
      className: "md:col-span-1 md:row-span-1",
      color: "bg-cyan-500/10 text-cyan-600"
    }
  ];

  const methodology = [
    {
      title: "Governing Physical Equations",
      content: "We utilize primary conservation laws (mass, momentum, energy, and charge) coupled with Butler-Volmer kinetics for accurate electrochemical layer modeling.",
      icon: Activity
    },
    {
      title: "Thermal & Species Transport",
      content: "Modeling of multi-component gas diffusion and liquid water management in porous media using the Dusty Gas Model or Stefan-Maxwell equations.",
      icon: Zap
    },
    {
      title: "System-Level BoP Components",
      content: "Integration of 1D and lumped parameter models for mechanical components like thermal management units and power electronics.",
      icon: Cpu
    }
  ];

  return (
    <PageLayout>
      {/* ================= HEADER ================= */}
      <section className="relative pt-32 pb-20 bg-background overflow-hidden">
        <div className="container-wide">
          <Breadcrumb
            items={[
              { label: "Research", path: "/research" },
              { label: "Modelling & Simulation" },
            ]}
          />

          <div className="mt-16 flex flex-col items-center text-center max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 text-primary text-sm font-bold mb-8"
            >
              <Monitor className="w-4 h-4" />
              DIGITAL TWIN TECHNOLOGY
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold tracking-tight text-balance"
            >
              Electrochemical <span className="text-primary italic">Modelling & Simulation</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-muted-foreground mt-8 leading-relaxed max-w-3xl"
            >
              Physics-based insights enabling hydrogen and clean-energy technologies through rigorous digital representation and performance prediction.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ================= BENTO GRID CAPABILITIES ================= */}
      <section className="section bg-muted/20">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Simulation Capabilities</h2>
            <p className="text-muted-foreground">Comprehensive modelling across all system layers.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {capabilities.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`${item.className}`}
              >
                <Card className="h-full border-0 bg-card shadow-lg shadow-black/5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-8 flex flex-col">
                  <div className={`w-12 h-12 rounded-xl ${item.color} flex items-center justify-center mb-6`}>
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= METHODOLOGY ACCORDION ================= */}
      <section className="section bg-background">
        <div className="container-wide">
          <div className="flex flex-col lg:flex-row gap-20 items-start max-w-6xl mx-auto">
            <div className="flex-1">
              <h2 className="text-4xl font-bold mb-6">Our Modelling <span className="text-primary">Methodology</span></h2>
              <p className="text-lg text-muted-foreground mb-10">
                We bridge fundamental physics with operational data to create high-fidelity simulations that reflect real-world behavior.
              </p>

              <Accordion type="single" collapsible className="w-full space-y-4">
                {methodology.map((item, i) => (
                  <AccordionItem key={i} value={`item-${i}`} className="border rounded-2xl px-6 bg-card shadow-sm overflow-hidden border-border/50">
                    <AccordionTrigger className="hover:no-underline py-6">
                      <div className="flex items-center gap-4 text-left">
                        <div className="w-10 h-10 rounded-lg bg-primary/5 text-primary flex items-center justify-center flex-shrink-0">
                          <item.icon className="w-5 h-5" />
                        </div>
                        <span className="font-bold text-lg">{item.title}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-6 pl-14 leading-relaxed">
                      {item.content}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            <div className="flex-1 w-full lg:sticky lg:top-32">
              <div className="relative group overflow-hidden rounded-3xl shadow-2xl">
                <img src={model1} alt="Simulation Model" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#243F73]/80 to-transparent p-10 flex flex-col justify-end">
                  <h4 className="text-white font-bold text-2xl mb-2">Steady-State Analysis</h4>
                  <p className="text-white/70 text-sm">Validating performance across varied load conditions.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WORKING MODELS ================= */}
      <section className="section bg-muted/20">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
            {[model2, model3].map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden border-0 shadow-xl bg-card rounded-3xl h-full">
                  <img src={img} alt="Simulation Result" className="w-full aspect-video object-cover" />
                  <div className="p-8">
                    <h3 className="font-bold text-xl mb-4 text-foreground">
                      {i === 0 ? "PEM Fuel Cell Stack" : "Alkaline Water Electrolyser"}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Coupled thermal-electrochemical behavior under realistic plant operation modes.
                    </p>
                  </div>
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
