import { useRef, lazy, Suspense } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";

const IndustrialIoTScene = lazy(() => import("@/components/three/IndustrialIoTScene"));

/* ═══════════════════════════════════════════════════════════
   MIND MAP CONNECTOR LINES — static SVG lines connecting boxes
   ═══════════════════════════════════════════════════════════ */
function MindMapLines({ lines, color }: { lines: { x1: string; y1: string; x2: string; y2: string }[]; color: string }) {
  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
      {lines.map((l, i) => (
        <line key={i} x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2}
          stroke={color} strokeWidth="1.5" opacity="0.4"
          strokeDasharray="6 4" />
      ))}
      {/* Static dots at line endpoints */}
      {lines.map((l, i) => (
        <g key={`dots-${i}`}>
          <circle cx={l.x1} cy={l.y1} r="3" fill={color} opacity="0.6" />
          <circle cx={l.x2} cy={l.y2} r="3" fill={color} opacity="0.6" />
        </g>
      ))}
    </svg>
  );
}

/* ═══════════════════════════════════════════════════════════
   SATELLITE CARD — smaller connected glass box
   ═══════════════════════════════════════════════════════════ */
function SatelliteCard({ title, desc, color, className = "" }: {
  title: string; desc: string; color: string; className?: string;
}) {
  return (
    <div className={`rounded-2xl p-4 md:p-5 border border-white/15 ${className}`}
      style={{ background: "rgba(18,18,28,0.82)", backdropFilter: "blur(8px)", boxShadow: `0 0 25px rgba(0,0,0,0.5), 0 0 15px ${color}10` }}>
      <div className="flex items-center gap-2 mb-2">
        <span className="w-2 h-2 rounded-full" style={{ backgroundColor: color }} />
        <h4 className="text-sm md:text-base font-semibold text-white">{title}</h4>
      </div>
      <p className="text-neutral-300 text-xs md:text-sm leading-relaxed">{desc}</p>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   HUB CARD — central title card in mind map
   ═══════════════════════════════════════════════════════════ */
function HubCard({ tag, title, description, color }: {
  tag: string; title: string; description: string; color: string;
}) {
  return (
    <div className="rounded-[2rem] p-6 md:p-8 border border-white/15"
      style={{ background: "rgba(18,18,28,0.85)", backdropFilter: "blur(12px)", boxShadow: `0 0 40px rgba(0,0,0,0.6), 0 0 20px ${color}15` }}>
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-4 border"
        style={{ borderColor: `${color}40`, background: "rgba(0,0,0,0.5)" }}>
        <span className="w-2 h-2 rounded-full" style={{ backgroundColor: color }} />
        <span className="text-[10px] md:text-xs font-semibold uppercase tracking-widest" style={{ color }}>{tag}</span>
      </div>
      <h2 className="text-xl md:text-3xl font-bold text-white leading-tight mb-3">{title}</h2>
      <p className="text-neutral-300 text-sm md:text-base leading-relaxed">{description}</p>
    </div>
  );
}

export default function IndustrialIoT() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.06], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.06], ["0%", "-30%"]);
  const heroVisibility = useTransform(scrollYProgress, (v) => (v > 0.07 ? "hidden" : "visible") as "hidden" | "visible");
  const heroPointerEvents = useTransform(scrollYProgress, (v) => (v > 0.07 ? "none" : "auto") as "none" | "auto");

  const energyOpacity = useTransform(scrollYProgress, [0.10, 0.18, 0.40, 0.45], [0, 1, 1, 0]);
  const predOpacity = useTransform(scrollYProgress, [0.45, 0.52, 0.70, 0.75], [0, 1, 1, 0]);
  const dashOpacity = useTransform(scrollYProgress, [0.75, 0.82, 0.97, 1], [0, 1, 1, 1]);

  return (
    <PageLayout>
      <div ref={containerRef} className="relative text-white" style={{ height: "600vh" }}>
        {/* 3D Scene — fixed background */}
        <div className="fixed inset-0 z-0 bg-[#050510]">
          <Suspense fallback={<div className="fixed inset-0 bg-[#050510]" />}>
            <IndustrialIoTScene />
          </Suspense>
          <div className="absolute inset-0 bg-black/55 pointer-events-none" />
        </div>

        <div className="sticky top-0 h-screen w-full overflow-hidden pointer-events-none p-4">

          {/* ═══ HERO ═══ */}
          <motion.div className="absolute inset-0 z-20 flex items-center justify-center px-6"
            style={{ opacity: heroOpacity, y: heroY, visibility: heroVisibility, pointerEvents: heroPointerEvents }}>
            <div className="text-center max-w-3xl p-10 md:p-14 rounded-[3rem] border border-white/15"
              style={{ background: "rgba(18,18,28,0.85)", backdropFilter: "blur(12px)", boxShadow: "0 0 60px rgba(0,0,0,0.6)" }}>
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border border-[#F59E0B]/30"
                style={{ background: "rgba(0,0,0,0.4)" }}>
                <span className="w-2 h-2 rounded-full bg-[#F59E0B] animate-pulse" />
                <span className="text-xs font-semibold text-[#F59E0B] uppercase tracking-widest">Deep-Tech IoT Solutions</span>
              </motion.div>
              <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight mb-5 text-white drop-shadow-lg">
                Industrial{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F59E0B] to-[#3B82F6]">IoT</span>
              </h1>
              <p className="text-sm md:text-lg text-neutral-300 mb-4 font-light max-w-xl mx-auto">
                End-to-end industrial monitoring, predictive intelligence and custom dashboards.
              </p>
              <p className="text-xs md:text-sm text-neutral-400 mb-8 max-w-md mx-auto">
                Any Industry. Any Process. From the factory floor to the cloud.
              </p>
              <div className="animate-bounce flex flex-col items-center gap-2">
                <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-neutral-500 font-medium">Scroll to explore</span>
                <ArrowRight className="rotate-90 w-5 h-5 text-neutral-500" />
              </div>
            </div>
          </motion.div>

          {/* ═══ SECTION 1: CONTINUOUS ENERGY MONITORING — MIND MAP ═══ */}
          <motion.div className="absolute inset-0 z-20 flex items-center justify-center px-4 md:px-6 pointer-events-auto"
            style={{ opacity: energyOpacity }}>
            <div className="relative w-full max-w-[1100px] h-[600px] md:h-[640px]">

              {/* SVG connector lines */}
              <MindMapLines color="#F59E0B" lines={[
                { x1: "50%", y1: "45%", x2: "15%", y2: "12%" },
                { x1: "50%", y1: "45%", x2: "85%", y2: "12%" },
                { x1: "50%", y1: "55%", x2: "10%", y2: "82%" },
                { x1: "50%", y1: "55%", x2: "50%", y2: "92%" },
                { x1: "50%", y1: "55%", x2: "90%", y2: "82%" },
                { x1: "50%", y1: "45%", x2: "50%", y2: "8%" },
              ]} />

              {/* Center hub */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] md:w-[380px]" style={{ zIndex: 2 }}>
                <HubCard tag="Service 01" title="Continuous Energy Monitoring" description="Real-time electrical & mechanical parameter capture from every motor and process machine through our Elicius IoT Gateway." color="#F59E0B" />
              </div>

              {/* Top-left satellite */}
              <div className="absolute left-0 top-0 w-[160px] md:w-[260px]" style={{ zIndex: 2 }}>
                <SatelliteCard title="3-Phase Power" desc="Harmonics analysis, energy (kWh), and factor study." color="#F59E0B" />
              </div>

              {/* Top-center satellite */}
              <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[160px] md:w-[260px]" style={{ zIndex: 2 }}>
                <SatelliteCard title="Elicius IoT Gateway" desc="Edge aggregation and secure cloud uplink." color="#F59E0B" />
              </div>

              {/* Top-right satellite */}
              <div className="absolute right-0 top-0 w-[160px] md:w-[260px]" style={{ zIndex: 2 }}>
                <SatelliteCard title="Vibration & Temp" desc="Continuous mechanical health monitoring." color="#F59E0B" />
              </div>

              {/* Bottom-left satellite */}
              <div className="absolute left-0 bottom-0 w-[160px] md:w-[260px]" style={{ zIndex: 2 }}>
                <SatelliteCard title="Model Curves" desc="Correlate operating load vs efficiency." color="#F59E0B" />
              </div>

              {/* Bottom-center satellite */}
              <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[160px] md:w-[260px]" style={{ zIndex: 2 }}>
                <SatelliteCard title="AI Dashboard" desc="Historical trends and downloadable reports." color="#F59E0B" />
              </div>

              {/* Bottom-right satellite */}
              <div className="absolute right-0 bottom-0 w-[160px] md:w-[260px]" style={{ zIndex: 2 }}>
                <SatelliteCard title="Energy Savings" desc="Projected reduction in consumption." color="#F59E0B" />
              </div>
            </div>
          </motion.div>

          {/* ═══ SECTION 2: PREDICTIVE MAINTENANCE — MIND MAP ═══ */}
          <motion.div className="absolute inset-0 z-20 flex items-center justify-center px-4 md:px-6 pointer-events-auto"
            style={{ opacity: predOpacity }}>
            <div className="relative w-full max-w-[1100px] h-[600px] md:h-[640px]">

              <MindMapLines color="#10B981" lines={[
                { x1: "50%", y1: "45%", x2: "12%", y2: "15%" },
                { x1: "50%", y1: "45%", x2: "88%", y2: "15%" },
                { x1: "50%", y1: "55%", x2: "8%", y2: "85%" },
                { x1: "50%", y1: "55%", x2: "50%", y2: "93%" },
                { x1: "50%", y1: "55%", x2: "92%", y2: "85%" },
                { x1: "50%", y1: "45%", x2: "50%", y2: "7%" },
              ]} />

              {/* Center hub */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] md:w-[380px]" style={{ zIndex: 2 }}>
                <HubCard tag="Service 02" title="Predictive Maintenance" description="AI-driven analysis of vibration and power draw patterns to predict failures weeks in advance." color="#10B981" />
              </div>

              {/* Top-left */}
              <div className="absolute left-0 top-0 w-[160px] md:w-[260px]" style={{ zIndex: 2 }}>
                <SatelliteCard title="Vibration Spectra" desc="Detecting bearing faults and rotor imbalance." color="#10B981" />
              </div>

              {/* Top-center */}
              <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[160px] md:w-[260px]" style={{ zIndex: 2 }}>
                <SatelliteCard title="AI Anomalies" desc="ML models flag deviations in real-time." color="#10B981" />
              </div>

              {/* Top-right */}
              <div className="absolute right-0 top-0 w-[160px] md:w-[260px]" style={{ zIndex: 2 }}>
                <SatelliteCard title="Smart Alerts" desc="Tiered alerts via email, SMS, and push." color="#10B981" />
              </div>

              {/* Bottom-left */}
              <div className="absolute left-0 bottom-0 w-[160px] md:w-[260px]" style={{ zIndex: 2 }}>
                <SatelliteCard title="Supported Assets" desc="Motors, pumps, compressors, and gearboxes." color="#10B981" />
              </div>

              {/* Bottom-center */}
              <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[160px] md:w-[260px]" style={{ zIndex: 2 }}>
                <SatelliteCard title="Scheduling" desc="Work orders with predicted remaining life." color="#10B981" />
              </div>

              {/* Bottom-right */}
              <div className="absolute right-0 bottom-0 w-[160px] md:w-[260px]" style={{ zIndex: 2 }}>
                <SatelliteCard title="Less Downtime" desc="40% reduction in unplanned downtime." color="#10B981" />
              </div>
            </div>
          </motion.div>

          {/* ═══ SECTION 3: CUSTOM DASHBOARDS — MIND MAP ═══ */}
          <motion.div className="absolute inset-0 z-20 flex items-center justify-center px-4 md:px-6 pointer-events-auto"
            style={{ opacity: dashOpacity }}>
            <div className="relative w-full max-w-[1100px] h-[600px] md:h-[640px]">

              <MindMapLines color="#3B82F6" lines={[
                { x1: "50%", y1: "45%", x2: "14%", y2: "13%" },
                { x1: "50%", y1: "45%", x2: "86%", y2: "13%" },
                { x1: "50%", y1: "55%", x2: "6%", y2: "80%" },
                { x1: "50%", y1: "55%", x2: "50%", y2: "90%" },
                { x1: "50%", y1: "55%", x2: "94%", y2: "80%" },
                { x1: "50%", y1: "45%", x2: "50%", y2: "6%" },
              ]} />

              {/* Center hub */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] md:w-[380px]" style={{ zIndex: 2 }}>
                <HubCard tag="Service 03" title="Custom Dashboards" description="Purpose-built platforms tailored to your facility data — from single machines to plant SCADA." color="#3B82F6" />
              </div>

              {/* Top-left */}
              <div className="absolute left-0 top-0 w-[160px] md:w-[260px]" style={{ zIndex: 2 }}>
                <SatelliteCard title="Web & Mobile" desc="Responsive dashboards from any device." color="#3B82F6" />
              </div>

              {/* Top-center */}
              <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[160px] md:w-[260px]" style={{ zIndex: 2 }}>
                <SatelliteCard title="Visualization" desc="Heatmaps and charts with live updates." color="#3B82F6" />
              </div>

              {/* Top-right */}
              <div className="absolute right-0 top-0 w-[160px] md:w-[260px]" style={{ zIndex: 2 }}>
                <SatelliteCard title="Role Access" desc="Operator, engineer, and management views." color="#3B82F6" />
              </div>

              {/* Bottom-left */}
              <div className="absolute left-0 bottom-0 w-[160px] md:w-[260px]" style={{ zIndex: 2 }}>
                <SatelliteCard title="Multi-Plant" desc="Aggregate KPIs across all facilities." color="#3B82F6" />
              </div>

              {/* Bottom-center — CTA */}
              <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[200px] md:w-[280px]" style={{ zIndex: 3 }}>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link to="/contact"
                    className="flex items-center justify-center gap-3 px-6 py-4 rounded-2xl text-white font-semibold transition-all border border-white/15"
                    style={{ background: "rgba(18,18,28,0.82)", backdropFilter: "blur(8px)", boxShadow: "0 0 30px rgba(59,130,246,0.15)" }}>
                    Get a Quote <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              </div>

              {/* Bottom-right */}
              <div className="absolute right-0 bottom-0 w-[160px] md:w-[260px]" style={{ zIndex: 2 }}>
                <SatelliteCard title="Data Reports" desc="Scheduled PDF, CSV and API exports." color="#3B82F6" />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </PageLayout>
  );
}
