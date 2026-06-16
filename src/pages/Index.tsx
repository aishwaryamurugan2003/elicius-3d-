import { motion, useInView, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  ArrowRight, Zap, Shield, TrendingUp, Award, Moon, Sun,
  CircuitBoard, Network, Activity, Cloud, Wind, BarChart2, CloudRain 
} from "lucide-react";
import ChatBot from "@/components/ui/chatbot/chatbot ";
import { useState, useRef, useEffect } from "react";
import PageLayout from "@/components/PageLayout";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import logoIITM from "@/assets/clients/iitm.jpg";
import logoTHSTI from "@/assets/clients/THSTI.jpg";
import logoWSAI from "@/assets/clients/wasi.jpg";
import logoCIT from "@/assets/clients/cancerinstitute.jpg";
import logoNMRL from "@/assets/clients/NMRL.jpg";
import logopfizer from "@/assets/clients/pfizer.jpg";

const CountUp = ({ value, suffix = "", duration = 2 }: { value: number; suffix?: string; duration?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const totalSteps = duration * 60;
      const increment = value / totalSteps;
      const timer = setInterval(() => {
        start += increment;
        if (start >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 1000 / 60);
      return () => clearInterval(timer);
    }
  }, [isInView, value, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const stats = [
  { label: "Cities Covered",    value: 1,   suffix: "",   icon: Award },
  { label: "Devices Deployed",  value: 100, suffix: "+",  icon: Zap },
  { label: "Data Points / Day", value: 13,  suffix: "M+", icon: TrendingUp },
  { label: "Pilot Studies",     value: 5,   suffix: "",   icon: Shield },
];

const capabilities = [
  {
    title: "Embedded Systems",
    description: "Custom PCB designs, firmware development, and hardware-software co-design for industrial-grade edge devices.",
    icon: CircuitBoard,
    color: "#6E24FF",
  },
  {
    title: "Artificial Intelligence",
    description: "Customised AI powered applications, Finetuned LLMs and SLMs for domain specific inference.",
    icon: Network,
    color: "#3B82F6",
  },
  {
    title: "Sensor Fusion",
    description: "Multi-modal data integration from heterogeneous sensor arrays for precision measurement.",
    icon: Activity,
    color: "#10B981",
  },
  {
    title: "Electrochemistry Modelling",
    description: "Physics-informed simulations for fuel cells, batteries, and electrochemical systems.",
    icon: Zap,
    color: "#F59E0B",
  },
  {
    title: "Cloud & Data Pipelines",
    description: "Scalable data ingestion, processing, and visualization platforms built for industrial IoT.",
    icon: Cloud,
    color: "#EC4899",
  },
];

const clients = [
  { name: "IIT Madras",            logo: logoIITM,   scale: "h-12" },
  { name: "THSTI",                 logo: logoTHSTI,  scale: "h-12" },
  { name: "WSAI",                  logo: logoWSAI,   scale: "h-12" },
  { name: "Cancer Institute (WIA)", logo: logoCIT,   scale: "h-16" },  // boosted
  { name: "NMRL",                  logo: logoNMRL,   scale: "h-12" },
  { name: "Pfizer",                logo: logopfizer, scale: "h-10" },
];

/**
 * High-density dust animation exclusively for the Hero Section.
 */
function DenseDustNetworkCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const symbols = ["{ }", "< >", "/>", "0 1", "λ", "∑", "∫", "π", "Φ", "⚙️", "ƒ(x)", "📡", "₹", "ƎE"];

    // Nodes
    const numNodes = Math.floor((width * height) / 30000); // More nodes
    const nodes: { x: number; y: number; vx: number; vy: number; symbol: string; phase: number }[] = [];
    for (let i = 0; i < numNodes; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        symbol: symbols[Math.floor(Math.random() * symbols.length)],
        phase: Math.random() * Math.PI * 2,
      });
    }

    // Dense Dust Particles
    const numParticles = Math.floor((width * height) / 1500); // Reduced density as requested
    const particles: { x: number; y: number; vx: number; vy: number; size: number }[] = [];
    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 1.0,
        vy: (Math.random() - 0.5) * 1.0,
        size: Math.random() * 2.0 + 0.5,
      });
    }

    let animId: number;
    let lastTime = performance.now();

    const draw = (time: number) => {
      const dt = Math.min((time - lastTime) / 16, 2);
      lastTime = time;

      ctx.clearRect(0, 0, width, height);

      const mouse = mouseRef.current;

      // Update nodes
      for (let i = 0; i < numNodes; i++) {
        const node = nodes[i];
        node.x += node.vx * dt;
        node.y += node.vy * dt;
        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;
      }

      // Draw vibrating connections
      ctx.lineWidth = 1.5;
      for (let i = 0; i < numNodes; i++) {
        for (let j = i + 1; j < numNodes; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 350) {
            const vibration = Math.sin(time * 0.006 + nodes[i].phase) * 0.5 + 0.5;
            // Higher opacity connections
            const alpha = (1 - dist / 350) * 0.4 * vibration;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(110, 36, 255, ${alpha})`;
            ctx.stroke();
          }
        }
      }

      // Draw high-opacity dust
      ctx.fillStyle = "rgba(180, 180, 255, 0.9)"; // Much brighter/opaque
      for (const p of particles) {
        p.vx += (Math.random() - 0.5) * 0.04;
        p.vy += (Math.random() - 0.5) * 0.04;
        p.vx *= 0.98;
        p.vy *= 0.98;

        const dxM = p.x - mouse.x;
        const dyM = p.y - mouse.y;
        const distM = Math.sqrt(dxM * dxM + dyM * dyM);

        if (distM < 180) { // Larger interaction radius
          const force = (180 - distM) / 180;
          const angle = Math.atan2(dyM, dxM);
          p.vx += Math.cos(angle) * force * 2.5;
          p.vy += Math.sin(angle) * force * 2.5;
        }

        p.x += p.vx * dt;
        p.y += p.vy * dt;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }

      // Draw nodes
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.font = "bold 16px monospace";
      for (const node of nodes) {
        const glowAlpha = Math.sin(time * 0.004 + node.phase) * 0.3 + 0.3; // Reduced base glow
        const gradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, 40); // Reduced radius
        gradient.addColorStop(0, `rgba(59, 130, 246, ${glowAlpha * 0.6})`); // Reduced opacity multiplier
        gradient.addColorStop(1, "rgba(59, 130, 246, 0)");

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(node.x, node.y, 40, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = `rgba(255, 255, 255, ${0.6 + glowAlpha * 0.2})`; // Slightly less bright text
        ctx.fillText(node.symbol, node.x, node.y);
      }

      animId = requestAnimationFrame(draw);
    };

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };
    const handleMouseLeave = () => {
      mouseRef.current.x = -1000;
      mouseRef.current.y = -1000;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    animId = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animId);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-0" />;
}

function CapabilitiesGrid() {
  const total = capabilities.length;
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const isTransitioning = useRef(false);
  const scrollAccum = useRef(0);

  // Custom scroll lock logic
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      // Find if the section is occupying the screen (mostly centered)
      const rect = container.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Is the carousel essentially centered on the screen?
      const isCentered = rect.top <= viewportHeight * 0.2 && rect.bottom >= viewportHeight * 0.8;

      if (!isCentered) return; // Allow normal scrolling if not properly aligned

      if (isTransitioning.current) {
        e.preventDefault(); // Lock scroll while animation is running
        return;
      }

      if (e.deltaY > 0) {
        // Scrolling down
        if (activeIndex < total - 1) {
          e.preventDefault(); // Trap scroll
          scrollAccum.current += e.deltaY;
          if (scrollAccum.current > 60) {
            setActiveIndex((prev) => prev + 1);
            scrollAccum.current = 0;
            isTransitioning.current = true;
            setTimeout(() => (isTransitioning.current = false), 600);
          }
        }
        // Let it naturally scroll down if at the last card
      } else if (e.deltaY < 0) {
        // Scrolling up
        if (activeIndex > 0) {
          e.preventDefault(); // Trap scroll
          scrollAccum.current += e.deltaY;
          if (scrollAccum.current < -60) {
            setActiveIndex((prev) => prev - 1);
            scrollAccum.current = 0;
            isTransitioning.current = true;
            setTimeout(() => (isTransitioning.current = false), 600);
          }
        }
        // Let it naturally scroll up if at the first card
      }
    };

    // Use passive: false to allow e.preventDefault()
    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [activeIndex, total]);

  /**
   * Cylindrical 3D positioning.
   */
  const getCardStyle = (index: number) => {
    const diff = index - activeIndex;
    const angleStep = (2 * Math.PI) / total;
    const angle = diff * angleStep;

    const radiusX = 550;
    const radiusZ = 450;

    const x = Math.sin(angle) * radiusX;
    const z = Math.cos(angle) * radiusZ - radiusZ;
    const normalizedZ = (z + radiusZ) / (2 * radiusZ);
    const scale = 0.6 + 0.4 * normalizedZ;
    const opacity = 0.15 + 0.85 * normalizedZ;
    const zIndex = Math.round(normalizedZ * 100);

    // Ensure the rotation doesn't cause mirroring by keeping it within a safe range 
    // and using the angle from the cylindrical projection.
    const rotateY = -(diff * 15); 

    return { x, z, scale, opacity, zIndex, rotateY };
  };

  return (
    <div ref={containerRef} className="relative w-full min-h-screen flex flex-col items-center justify-center py-24 overflow-hidden bg-[#020202]">
      {/* Header */}
      <div className="container mx-auto px-6 mb-12 text-center relative z-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold mb-4 text-white"
        >
          Deep Tech <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6E24FF] to-[#3B82F6]">Capabilities</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-neutral-300 max-w-xl mx-auto text-lg"
        >
          Scroll to rotate through our core technological competencies.
        </motion.p>
      </div>

      {/* 3D Cylindrical Carousel */}
      <div
        className="relative w-full flex items-center justify-center"
        style={{ perspective: "2000px", height: "600px" }}
      >
        <div className="relative w-full max-w-6xl h-full" style={{ transformStyle: "preserve-3d" }}>
          {capabilities.map((cap, idx) => {
            const Icon = cap.icon;
            const style = getCardStyle(idx);
            const isFront = idx === activeIndex;

            return (
              <motion.div
                key={idx}
                className="absolute left-1/2 top-1/2"
                animate={{
                  x: style.x - 200,
                  y: -250,
                  scale: style.scale,
                  opacity: style.opacity,
                  rotateY: style.rotateY,
                }}
                transition={{ type: "spring", stiffness: 150, damping: 20 }}
                style={{
                  zIndex: style.zIndex,
                  transformStyle: "preserve-3d",
                  width: "400px",
                  backfaceVisibility: "hidden",
                }}
                onClick={() => setActiveIndex(idx)}
              >
                <div
                  className={`h-[500px] p-10 rounded-3xl flex flex-col justify-between cursor-pointer transition-all duration-300 ${isFront ? "border-2" : "border border-white/10"
                    }`}
                  style={{
                    backdropFilter: "blur(16px)",
                    borderColor: isFront ? `${cap.color}60` : undefined,
                    boxShadow: isFront
                      ? `0 0 80px ${cap.color}30, 0 30px 80px rgba(0,0,0,0.6)`
                      : "0 10px 40px rgba(0,0,0,0.3)",
                    background: isFront
                      ? `linear-gradient(145deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 100%)`
                      : `linear-gradient(145deg, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0.01) 100%)`,
                  }}
                >
                  <div>
                    <div
                      className="w-20 h-20 rounded-2xl flex items-center justify-center mb-8 border border-white/15"
                      style={{
                        backgroundColor: `${cap.color}25`,
                        borderColor: `${cap.color}40`,
                      }}
                    >
                      <Icon className="w-10 h-10" style={{ color: cap.color }} />
                    </div>

                    <h3 className="text-3xl font-bold text-white mb-4">{cap.title}</h3>

                    <AnimatePresence mode="wait">
                      {isFront && (
                        <motion.p
                          key={`desc-${idx}`}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.3 }}
                          className="text-neutral-200 text-lg leading-relaxed"
                        >
                          {cap.description}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>

                  <div
                    className="w-full h-1.5 rounded-full transition-opacity duration-300"
                    style={{
                      backgroundColor: cap.color,
                      opacity: isFront ? 0.8 : 0.3,
                    }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Progress indicator */}
      <div className="flex items-center justify-center gap-4 mt-16 relative z-20">
        {capabilities.map((cap, idx) => (
          <div
            key={idx}
            className="relative h-2 rounded-full transition-all duration-500"
            style={{
              width: idx === activeIndex ? "3rem" : "0.75rem",
              backgroundColor: idx === activeIndex ? cap.color : "rgba(255,255,255,0.15)",
            }}
          />
        ))}
      </div>

      {/* Scroll hint */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-neutral-600 text-xs mt-6 uppercase tracking-widest relative z-20"
      >
        {activeIndex < total - 1 ? "↓ Scroll to rotate" : "↓ Continue scrolling"}
      </motion.p>
    </div>
  );
}

function KaatruSection() {
  return (
    <section className="relative py-32 w-full z-10 bg-[#020202]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.05)_0%,transparent_70%)] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Content */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6 border border-[#10B981]/30"
            >
              <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
              <span className="text-sm font-medium text-[#10B981] uppercase tracking-wider">Sister Company</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold mb-6 text-white"
            >
              Kaatru <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10B981] to-[#3B82F6]">
                Air Quality Intelligence
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-neutral-400 text-lg mb-10 max-w-lg leading-relaxed"
            >
              Advanced mobile monitoring systems designed to track, analyze, and predict air quality metrics in real-time. We provide the actionable intelligence with our stationary and mobile air quality devices and data analysis package.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="space-y-6"
            >
              {[
                { icon: Wind, text: "High-Precision AQM Devices" },
                { icon: BarChart2, text: "Real-time Predictive Analytics" },
                { icon: CloudRain, text: "Comprehensive Environmental Monitoring" }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl glass flex items-center justify-center border border-white/5 group-hover:border-[#10B981]/50 transition-colors">
                    <item.icon className="w-6 h-6 text-[#10B981] group-hover:scale-110 transition-transform" />
                  </div>
                  <span className="text-neutral-300 font-medium text-lg">{item.text}</span>
                </div>
              ))}
            </motion.div>

            <motion.a
              href="https://www.kaatru.org"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="inline-block mt-10 px-8 py-4 rounded-full border border-[#10B981]/30 text-[#10B981] font-medium hover:bg-[#10B981]/10 transition-all duration-300"
            >
              Visit Kaatru
            </motion.a>
          </div>

          {/* Visuals */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative w-full aspect-square md:aspect-[4/3] rounded-3xl glass-card border border-white/10 overflow-hidden flex flex-col p-6 shadow-2xl shadow-[#10B981]/10"
            >
              <div className="flex justify-between items-center mb-8 border-b border-white/5 pb-4">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/50" />
                </div>
                <div className="text-xs text-[#10B981] font-mono tracking-widest">LIVE FEED // KAATRU_NODE_04</div>
              </div>

              {/* Fake Data Viz Animation */}
              <div className="flex-1 flex items-end gap-2 px-4 relative">
                <div className="absolute inset-0 bg-gradient-to-t from-[#10B981]/10 to-transparent rounded-xl" />
                {[...Array(16)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="flex-1 bg-gradient-to-t from-[#10B981] to-[#059669] rounded-t-sm opacity-80"
                    animate={{
                      height: [`${20 + Math.random() * 20}%`, `${60 + Math.random() * 40}%`, `${30 + Math.random() * 30}%`],
                    }}
                    transition={{
                      duration: 3 + Math.random() * 2,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut"
                    }}
                    style={{ height: "50%" }}
                  />
                ))}
              </div>

              <div className="mt-8 grid grid-cols-3 gap-4">
                {[
                  { label: "PM2.5", value: "12.4", unit: "µg/m³" },
                  { label: "CO2", value: "412", unit: "ppm" },
                  { label: "AQI", value: "45", unit: "Good" }
                ].map((stat, idx) => (
                  <div key={idx} className="glass rounded-xl p-4 border border-white/5 hover:border-[#10B981]/30 transition-colors">
                    <div className="text-xs text-neutral-500 mb-1 font-mono">{stat.label}</div>
                    <div className="text-2xl font-bold text-white">
                      {stat.value} <span className="text-sm text-neutral-400 font-normal">{stat.unit}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

const Index = () => {
  useEffect(() => {
    // Force dark mode on load
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }, []);

  return (
    <PageLayout>
      {/* ================= HERO ================= */}
      <section className="relative h-[calc(100vh-80px)] w-full flex items-center justify-center overflow-hidden">
        {/* Opaque dark background for Hero only, to hide the global animation behind it */}
        <div className="absolute inset-0 bg-[#020202] z-0" />

        {/* Dense dust animation exclusively for the hero section */}
        <DenseDustNetworkCanvas />

        {/* Radial gradient overlay to blend canvas with edges */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#020202_90%)] pointer-events-none z-0" />

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 flex flex-col items-center justify-center pointer-events-none">
          <div className="max-w-4xl mx-auto p-8 md:p-12 rounded-[2.5rem] glass-card bg-[#020202]/30 backdrop-blur-xl border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] pointer-events-auto flex flex-col items-center text-center relative overflow-hidden">
            {/* Subtle inner glow for the card */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 border border-primary/30 backdrop-blur-xl relative z-10"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-semibold text-primary uppercase tracking-widest">
                Deep-Tech Startup from IIT Madras
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.2)] relative z-10"
            >
              Clean Air, Powered by <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10B981] via-[#3B82F6] to-[#6E24FF]">
                Intelligence
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="max-w-3xl mx-auto text-lg md:text-xl text-neutral-300 mb-10 leading-relaxed font-light drop-shadow-md relative z-10"
            >
              Delivering advanced air quality monitoring, clean energy research,
              and electrochemical intelligence for a sustainable future.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10"
            >
              <Link
                to="/products"
                className="px-8 py-4 rounded-full bg-primary hover:bg-primary/90 text-white font-medium transition-all duration-300 transform hover:scale-105 shadow-[0_0_25px_rgba(110,36,255,0.5)] hover:shadow-[0_0_35px_rgba(110,36,255,0.8)] border border-white/10"
              >
                Explore Products
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 rounded-full glass hover:bg-white/10 text-white font-medium transition-all duration-300 transform hover:scale-105 border border-white/20 backdrop-blur-xl"
              >
                Get in Touch
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= CAPABILITIES ================= */}
      <CapabilitiesGrid />

      {/* ================= KAATRU ================= */}
      <KaatruSection />

      {/* ================= STATS ================= */} 
      <section className="section section-muted py-28 bg-[#020202]">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="heading text-white">
              Air Quality Monitoring Overview
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="text-center py-10 bg-[#0a0a0a] border-white/10">
                  <div className="icon-badge mx-auto mb-6 bg-primary/20 text-primary">
                    <stat.icon className="w-6 h-6" />
                  </div>

                  <div className="text-4xl font-bold mb-2 text-white">
                    <CountUp value={stat.value} suffix={stat.suffix} />
                  </div>

                  <div className="text-sm text-neutral-400">
                    {stat.label}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="section py-32 bg-[#020202]">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <Card className="bg-[#0a0a0a] border-white/10">
              <CardHeader>
                <CardTitle className="text-4xl font-bold text-white">
                  About Elicius Energy
                </CardTitle>
                <CardDescription className="text-lg leading-relaxed text-neutral-300">
                  At Elicius Energy, we envision a future where industries thrive
                  sustainably through innovation in chemical engineering and IoT
                  technologies. We deliver tailor-made solutions with a strong
                  commitment to environmental stewardship.
                </CardDescription>
              </CardHeader>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* ================= CLIENTS ================= */}
<section className="section py-20 bg-[#020202]">
  <div className="container-wide">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-12"
    >
      <h2 className="heading text-white">Our Clients</h2>
      <p className="subtext max-w-2xl mx-auto mt-4 text-neutral-400">
        Trusted by leading academic institutions, research organisations,
        and global industry partners.
      </p>
    </motion.div>

    {/* Auto-scrolling marquee */}
    <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div className="flex gap-6 w-max animate-marquee hover:[animation-play-state:paused]">
        {/* Render twice for seamless loop */}
        {[...clients, ...clients].map((client, index) => (
          <div key={`${client.name}-${index}`} className="flex-shrink-0">
            <Card className="w-44 flex flex-col items-center justify-center p-6 hover:shadow-lg transition-shadow bg-[#0a0a0a] border-white/10">
              <div className="h-16 w-28 flex items-center justify-center mb-4">
<img
  src={client.logo}
  alt={client.name}
  className={`${client.scale} w-full object-contain filter brightness-90`}
/>
</div>
              <p className="text-sm font-medium text-center text-neutral-300">
                {client.name}
              </p>
            </Card>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

      <ChatBot />
    </PageLayout>
  );
};

export default Index;