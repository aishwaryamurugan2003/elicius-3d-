import { motion, useScroll, useSpring, useTransform, useInView } from "framer-motion";
import { Battery, Zap, Droplets, Target, ArrowRight, CheckCircle2, FlaskConical, Settings, Search, Rocket } from "lucide-react";
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
import { useState, useRef, useEffect } from "react";

/* Images */
import Planar from "@/assets/fuel cell/Planar.jpg";
import tubular from "@/assets/fuel cell/tubular.jpg";
import inhouse from "@/assets/fuel cell/inhouse.jpg";
import modifiedcylindrical from "@/assets/fuel cell/modifiedcylindrical.jpg";
import pemcylindrical from "@/assets/fuel cell/pemcylindrical.jpg";
import cylindrical from "@/assets/fuel cell/cylindrical.jpg";

import { useNavigate } from "react-router-dom";

const CountUp = ({ value, duration = 2 }: { value: number, duration?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const totalSteps = duration * 60;
      const increment = end / totalSteps;
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 1000 / 60);
      return () => clearInterval(timer);
    }
  }, [isInView, value, duration]);

  return <span ref={ref}>{count}</span>;
};

const FuelCell = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("overview");

  const timelineStages = [
    { label: "Conceptual Design", icon: FlaskConical, description: "Initial architecture and material selection." },
    { label: "Fabrication", icon: Settings, description: "In-house MEA and stack assembly." },
    { label: "Performance Testing", icon: Search, description: "Controlled environmental validation." },
    { label: "Optimization", icon: Rocket, description: "System-level efficiency refinements." },
  ];

  const metrics = [
    { label: "Power Density", value: 1200, unit: "mW/cm²" },
    { label: "Durability", value: 5000, unit: "Hours" },
    { label: "Efficiency", value: 65, unit: "%" },
    { label: "CO2 Reduction", value: 98, unit: "%" },
  ];

  const sections = [
    { id: "overview", label: "Overview" },
    { id: "timeline", label: "Timeline" },
    { id: "focus-areas", label: "Research Focus" },
    { id: "products", label: "Products" },
  ];

  const handleScroll = () => {
    const sectionElements = sections.map(s => document.getElementById(s.id));
    const scrollPosition = window.scrollY + 200;

    sectionElements.forEach((el, i) => {
      if (el && el.offsetTop <= scrollPosition && (el.offsetTop + el.offsetHeight) > scrollPosition) {
        setActiveSection(sections[i].id);
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({ top: el.offsetTop - 100, behavior: "smooth" });
    }
  };

  return (
    <PageLayout>
      {/* STICKY JUMP NAV */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col gap-4">
        {sections.map((s) => (
          <button
            key={s.id}
            onClick={() => scrollTo(s.id)}
            className="group flex items-center gap-3 text-right"
          >
            <span className={`text-xs font-bold uppercase tracking-widest transition-all opacity-0 group-hover:opacity-100 ${
              activeSection === s.id ? "text-primary opacity-100" : "text-muted-foreground"
            }`}>
              {s.label}
            </span>
            <div className={`w-3 h-3 rounded-full border-2 transition-all ${
              activeSection === s.id 
                ? "bg-primary border-primary scale-125" 
                : "border-muted-foreground/30 hover:border-primary"
            }`} />
          </button>
        ))}
      </div>

      {/* ================= HERO ================= */}
      <section id="overview" className="relative pt-32 pb-20 bg-background overflow-hidden">
         <div className="container-wide relative z-10">
          <Breadcrumb
            items={[
              { label: "Research", path: "/research" },
              { label: "Fuel Cell Technology" },
            ]}
          />

          <div className="mt-12 flex flex-col items-center text-center max-w-4xl mx-auto">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight"
            >
              Fueling the <span className="text-primary italic">Hydrogen Economy.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-muted-foreground mt-8 leading-relaxed"
            >
              Indigenous development of PEM fuel cell stacks, optimized for performance, durability, and scalable clean energy deployment.
            </motion.p>
          </div>

          {/* METRICS GRID */}
          <div className="grid md:grid-cols-4 gap-8 mt-20 max-w-6xl mx-auto">
            {metrics.map((m, i) => (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-muted/30 p-8 rounded-3xl border border-border/50 text-center"
              >
                <div className="text-4xl font-black text-primary mb-2">
                  <CountUp value={m.value} />{m.unit}
                </div>
                <div className="text-sm font-bold uppercase tracking-widest text-muted-foreground">
                  {m.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TIMELINE ================= */}
      <section id="timeline" className="section bg-muted/20">
        <div className="container-wide">
          <div className="text-center mb-20">
             <h2 className="text-3xl font-bold mb-4">Research Lifecycle</h2>
             <p className="text-muted-foreground">Our end-to-end development process from lab to stack.</p>
          </div>

          <div className="relative mt-16 max-w-5xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute top-1/2 left-0 w-full h-1 bg-primary/10 -translate-y-1/2 hidden md:block" />
            
            <div className="grid md:grid-cols-4 gap-8">
              {timelineStages.map((stage, i) => (
                <motion.div
                  key={stage.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="relative z-10 flex flex-col items-center text-center"
                >
                  <div className="w-16 h-16 rounded-2xl bg-white shadow-xl flex items-center justify-center text-primary mb-6 border border-primary/10 group hover:bg-primary hover:text-white transition-all duration-300">
                    <stage.icon className="w-8 h-8" />
                  </div>
                  <h4 className="font-bold text-lg mb-2">{stage.label}</h4>
                  <p className="text-xs text-muted-foreground px-4 leading-relaxed">{stage.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= ALTERNATING ROWS ================= */}
      <section id="focus-areas" className="section bg-background overflow-hidden">
        <div className="container-wide">
          <div className="space-y-32">
            
            {/* Row 1 */}
            <div className="flex flex-col md:flex-row items-center gap-16">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex-1"
              >
                <div className="inline-flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-widest mb-6">
                  <FlaskConical className="w-4 h-4" />
                  Synthesis & Design
                </div>
                <h2 className="text-4xl font-bold mb-6">Indigenous MEA Fabrication</h2>
                <p className="text-lg text-muted-foreground leading-relaxed text-balance">
                  Complete in-house fabrication of membrane electrode assemblies with systematic performance optimization. We focus on catalyst ink formulation, coating uniformity, and interface engineering.
                </p>
                <ul className="mt-8 space-y-4">
                  {["Nafion-based composites", "Custom catalyst loading", "Precision hot-pressing"].map(item => (
                    <li key={item} className="flex items-center gap-3 text-sm font-semibold">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="flex-1 w-full"
              >
                <img src={inhouse} alt="MEA Fabrication" className="rounded-3xl shadow-2xl w-full aspect-video object-cover" />
              </motion.div>
            </div>

            {/* Row 2 */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-16">
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex-1"
              >
                <div className="inline-flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-widest mb-6">
                  <Rocket className="w-4 h-4" />
                  Engineering
                </div>
                <h2 className="text-4xl font-bold mb-6">Hybrid PEM Architectures</h2>
                <p className="text-lg text-muted-foreground leading-relaxed text-balance">
                  Development of advanced planar, tubular, and hybrid PEM fuel cell designs for improved power density and simplified BoP (Balance of Plant).
                </p>
                <ul className="mt-8 space-y-4">
                  {["Enhanced thermal management", "Reduced parasitic losses", "Compact stack design"].map(item => (
                    <li key={item} className="flex items-center gap-3 text-sm font-semibold">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="flex-1 w-full"
              >
                <img src={Planar} alt="Hybrid PEM Design" className="rounded-3xl shadow-2xl w-full aspect-video object-cover" />
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= RELATED PRODUCTS ================= */}
      <section id="products" className="section bg-muted/10">
        <div className="container-wide">
          <div className="flex justify-between items-end mb-16">
            <div>
               <h2 className="text-3xl font-bold mb-2">Research Hardware</h2>
               <p className="text-muted-foreground">Standard and custom hardware developed in our labs.</p>
            </div>
            <Button variant="ghost" className="text-primary font-bold" onClick={() => navigate('/products')}>
              Browse All Products
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[Planar, cylindrical, inhouse, tubular, pemcylindrical, modifiedcylindrical].map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-square rounded-2xl overflow-hidden bg-white shadow-md group-hover:shadow-xl transition-all duration-300">
                  <img src={img} alt="Product" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-6 flex flex-col justify-end">
                    <span className="text-white font-bold text-sm">Elite Series</span>
                    <span className="text-white/70 text-xs">Research Model</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="section bg-primary text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="container-wide relative z-10 text-center py-10">
          <h2 className="text-4xl font-bold mb-6">Drive the Future of Energy</h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            We collaborate with industry and academia to push the boundaries of hydrogen technology. Let's discuss your next breakthrough.
          </p>
          <div className="flex justify-center gap-6">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-bold px-10" onClick={() => navigate('/contact')}>
              Partner With Us
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default FuelCell;
