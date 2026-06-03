import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight, MapPin, Briefcase, Clock, Upload,
  X, CheckCircle2, ChevronDown, Users, Lightbulb, Leaf,
  GraduationCap, FlaskConical, Cpu, BarChart3, Zap,
} from "lucide-react";
import PageLayout from "@/components/PageLayout";
import Breadcrumb from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useState, useRef } from "react";

/* ─── Types ─── */
interface Job {
  id: number;
  title: string;
  experience: string;
  location: string;
  type: string;
  description: string;
  tags: string[];
  stipend?: string;
  duration?: string;
}

/* ─── Data — Full-Time Jobs ─── */
const jobs: Job[] = [
  {
    id: 1,
    title: "Chemical Process Modelling",
    experience: "1 year",
    location: "Chennai, Tamil Nadu",
    type: "Full-time",
    description:
      "Join our core R&D team to design, fabricate, and optimise PEM fuel cell membrane electrode assemblies. You will work across synthesis, testing, and modelling to push the boundaries of clean hydrogen technology.",
    tags: ["PEM Fuel Cells", "MEA Fabrication", "Electrochemistry"],
  },
  {
    id: 2,
    title: "IoT Systems Engineer",
    experience: "1-year",
    location: "Chennai, Tamil Nadu",
    type: "Full-time",
    description:
      "Design and deploy end-to-end IoT solutions for real-time air quality monitoring. You will work on sensor integration, embedded firmware, cloud pipelines, and dashboard analytics for smart city deployments.",
    tags: ["IoT", "Embedded Systems", "Air Quality"],
  },
  {
    id: 3,
    title: "Full Stack Software Engineer",
    experience: "Fresher",
    location: "Chennai, Tamil Nadu",
    type: "Full-time",
    description:
      "Build and maintain data dashboards, IoT monitoring portals, and internal tooling for Elicius Energy's clean-tech products. You will own features end-to-end — from REST APIs and database design to responsive React UIs — in a fast-moving startup environment.",
    tags: ["React", "Node.js", "Python", "REST APIs", "PostgreSQL"],
  },
  {
    id: 4,
    title: "Embedded Hardware Engineer",
    experience: "Fresher",
    location: "Chennai, Tamil Nadu",
    type: "Full-time",
    description:
      "Design and bring up custom PCBs for air quality sensor nodes and fuel cell monitoring hardware. You will own the full cycle — schematic capture, layout review, firmware bring-up, and field validation — for products deployed in smart city environments.",
    tags: ["PCB Design", "STM32 / ESP32", "Altium / KiCad", "Embedded C", "UART / I2C / SPI"],
  },
];

/* ─── Data — Internships ─── */
const internships: Job[] = [
  {
    id: 101,
    title: "IoT Hardware Engineering Intern",
    experience: "B.E/B.Tech (ECE / EEE / CSE)",
    location: "Chennai, Tamil Nadu",
    type: "Internship",
    stipend: "₹12,500 / month",
    duration: "3–6 months",
    description:
      "Work on sensor hardware, embedded firmware, and PCB prototyping for our air quality monitoring IoT systems deployed across smart city projects. Gain hands-on experience with real field deployments at IIT Madras Research Park.",
    tags: ["Embedded C", "PCB Design", "MQTT", "Sensors"],
  },
  {
    id: 102,
    title: "Data Science & ML Intern",
    experience: "B.E/B.Tech / M.Tech / MCA",
    location: "Chennai, Tamil Nadu",
    type: "Internship",
    stipend: "₹10,000 – ₹12,500 / month",
    duration: "3–6 months",
    description:
      "Contribute to data-centric solutions for industrial efficiency and environmental monitoring. Work on time-series forecasting, anomaly detection, and ML pipelines using real sensor data from our IoT deployments.",
    tags: ["Python", "Machine Learning", "Time-Series", "Data Analytics"],
  },
  {
    id: 103,
    title: "Frontend Web Development Intern",
    experience: "Any branch",
    location: "Chennai, Tamil Nadu",
    type: "Internship",
    stipend: "₹10,000 – ₹12,500 / month",
    duration: "3 months",
    description:
      "Help build and improve user-facing dashboards and marketing pages for Elicius Energy's products. Work with React, Tailwind CSS, and modern frontend tooling in a fast-moving startup environment.",
    tags: ["React", "Tailwind CSS", "TypeScript", "UI/UX"],
  },
  {
    id: 105,
    title: "Backend / Full Stack Software Intern",
    experience: "B.E/B.Tech / MCA (CSE / IT)",
    location: "Chennai, Tamil Nadu",
    type: "Internship",
    stipend: "₹10,000 – ₹12,500 / month",
    duration: "3–6 months",
    description:
      "Contribute to the backend services and data pipelines that power Elicius Energy's IoT monitoring platform. Build REST APIs, handle time-series sensor data, and integrate cloud services while working closely with the hardware and data science teams.",
    tags: ["Python", "FastAPI", "Node.js", "PostgreSQL", "MQTT"],
  },
  {
    id: 106,
    title: "Embedded Hardware & Firmware Intern",
    experience: "B.E/B.Tech (ECE / EEE)",
    location: "Chennai, Tamil Nadu",
    type: "Internship",
    stipend: "₹10,000 – ₹12,500 / month",
    duration: "3–6 months",
    description:
      "Assist in designing and testing embedded hardware for air quality monitoring nodes and fuel cell diagnostic units. Work on schematic review, PCB assembly, firmware debugging, and lab characterisation of sensor circuits.",
    tags: ["Embedded C", "STM32", "KiCad", "I2C / SPI", "Logic Analyser"],
  },
  {
    id: 104,
    title: "Chemical Process Modelling Intern",
    experience: "B.E/B.Tech / M.Tech (Chemical Engg.)",
    location: "Chennai, Tamil Nadu",
    type: "Internship",
    stipend: "₹8,000 – ₹10,000 / month",
    duration: "3–6 months",
    description:
      "Support research in electrochemical systems modelling, battery diagnostics, and fuel cell performance simulation under Prof. Raghunathan Rengaswamy's group. Ideal for students with strong fundamentals in chemical engineering.",
    tags: ["MATLAB", "Python", "Electrochemistry", "Process Simulation"],
  },
];

const perks = [
  { icon: Lightbulb, label: "Innovation-first culture" },
  { icon: Leaf,      label: "Mission-driven work"      },
  { icon: Users,     label: "Collaborative team"       },
];

const streams = [
  { icon: BarChart3,    label: "Data Science & ML"         },
  { icon: Cpu,          label: "Air Quality IoT Systems"    },
  { icon: Zap,          label: "Energy Systems"             },
  { icon: FlaskConical, label: "Chemical Process Modelling" },
];

/* ─── Application Modal ─── */
const ApplicationModal = ({
  job, onClose, isInternship,
}: {
  job: Job; onClose: () => void; isInternship: boolean;
}) => {
  const [fileName,     setFileName]     = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [submitted,    setSubmitted]    = useState(false);
  const [submitting,   setSubmitting]   = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const allListings = [...jobs, ...internships];
  const today = new Date().toLocaleDateString("en-GB").replace(/\//g, "-");

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) { setFileName(file.name); setSelectedFile(file); }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file) { setFileName(file.name); setSelectedFile(file); }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!selectedFile) {
      alert("Please upload your resume before submitting.");
      return;
    }

    setSubmitting(true);
    const form = e.currentTarget;

    const fd = new FormData();
    fd.append("name",          (form.elements.namedItem("fullName")     as HTMLInputElement).value);
    fd.append("email",         (form.elements.namedItem("email")        as HTMLInputElement).value);
    fd.append("phone",         (form.elements.namedItem("phone")        as HTMLInputElement).value);
    fd.append("location",      (form.elements.namedItem("location")     as HTMLInputElement).value);
    fd.append("role",          (form.elements.namedItem("role")         as HTMLSelectElement).value);
    fd.append("date_applied",  today);
    fd.append("relocate",      (form.elements.namedItem("relocate")     as HTMLSelectElement).value);
    fd.append("gender",        (form.elements.namedItem("gender")       as HTMLSelectElement).value);
    fd.append("notice_period", (form.elements.namedItem("noticePeriod") as HTMLInputElement).value);
    fd.append("resume",        selectedFile);

    try {
      const res  = await fetch("http://localhost:8000/apply/", { method: "POST", body: fd });
      const data = await res.json();
      if (data.status === "success") {
        setSubmitted(true);
      } else {
        alert("Submission failed: " + data.message);
      }
    } catch {
      alert("Network error. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        style={{ backgroundColor: "rgba(0,0,0,0.4)", backdropFilter: "blur(4px)" }}
        onClick={(e) => e.target === e.currentTarget && onClose()}
      >
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.96 }}
          transition={{ type: "spring", stiffness: 300, damping: 28 }}
          className="bg-background rounded-3xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto border border-border/40"
        >
          {submitted ? (
            <div className="flex flex-col items-center justify-center py-20 px-10 text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
              >
                <CheckCircle2 className="w-20 h-20 text-primary mx-auto mb-6" />
              </motion.div>
              <h3 className="text-2xl font-bold mb-3">Application Submitted!</h3>
              <p className="text-muted-foreground mb-8">
                Thank you for applying for <strong>{job.title}</strong>. Our team
                reviews every application personally — we'll be in touch soon.
              </p>
              <Button onClick={onClose} size="lg" className="px-10">
                Back to Careers
              </Button>
            </div>
          ) : (
            <>
              {/* Modal Header */}
              <div className="sticky top-0 bg-background/95 backdrop-blur-sm border-b border-border/30 px-8 py-5 flex items-center justify-between rounded-t-3xl z-10">
                <div>
                  <button
                    onClick={onClose}
                    className="text-sm text-primary font-semibold flex items-center gap-1 mb-1 hover:underline"
                  >
                    ← Back to Jobs
                  </button>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    <span className="text-xs font-bold uppercase tracking-widest text-primary">
                      Now Accepting Applications
                    </span>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="w-9 h-9 rounded-full bg-muted flex items-center justify-center hover:bg-muted/70 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Hero */}
              <div className="px-8 pt-8 pb-6 bg-muted/20">
                <h2 className="text-3xl font-extrabold mb-1">
                  Join <span className="text-primary">Our Team</span>
                </h2>
                <p className="text-muted-foreground text-sm">
                  Our team reviews every application personally — fill in the
                  details and we'll be in touch.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="px-8 pb-10 pt-6 space-y-8">
                {/* Personal Details */}
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-1 h-5 rounded-full bg-primary" />
                    <h3 className="text-xs font-black uppercase tracking-widest text-primary">
                      Personal Details
                    </h3>
                  </div>
                  <div className="bg-muted/30 rounded-2xl p-5 border border-border/30 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input name="fullName" type="text" placeholder="Full Name *" required
                      className="w-full px-4 py-3 rounded-xl border border-border/40 bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all placeholder:text-muted-foreground/60" />
                    <input name="phone" type="tel" placeholder="Contact No *" required
                      className="w-full px-4 py-3 rounded-xl border border-border/40 bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all placeholder:text-muted-foreground/60" />
                    <input name="email" type="email" placeholder="Personal Email *" required
                      className="w-full px-4 py-3 rounded-xl border border-border/40 bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all placeholder:text-muted-foreground/60" />
                    <input name="location" type="text" placeholder="Current Location *" required
                      className="w-full px-4 py-3 rounded-xl border border-border/40 bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all placeholder:text-muted-foreground/60" />
                  </div>
                </div>

                {/* Application Details */}
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-1 h-5 rounded-full bg-primary" />
                    <h3 className="text-xs font-black uppercase tracking-widest text-primary">
                      Application Details
                    </h3>
                  </div>
                  <div className="bg-muted/30 rounded-2xl p-5 border border-border/30 space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="relative">
                        <select name="role" defaultValue={job.title}
                          className="w-full px-4 py-3 rounded-xl border border-border/40 bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 appearance-none cursor-pointer">
                          {allListings.map((j) => (
                            <option key={j.id} value={j.title}>{j.title}</option>
                          ))}
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                      </div>
                      <input type="text" readOnly value={today}
                        className="w-full px-4 py-3 rounded-xl border border-border/40 bg-muted/40 text-sm text-muted-foreground cursor-not-allowed" />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div className="relative">
                        <select name="relocate" required defaultValue=""
                          className="w-full px-4 py-3 rounded-xl border border-border/40 bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 appearance-none cursor-pointer text-muted-foreground">
                          <option value="" disabled>Open to Relocate *</option>
                          <option>Yes</option>
                          <option>No</option>
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                      </div>
                      <div className="relative">
                        <select name="gender" required defaultValue=""
                          className="w-full px-4 py-3 rounded-xl border border-border/40 bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 appearance-none cursor-pointer text-muted-foreground">
                          <option value="" disabled>Gender *</option>
                          <option>Male</option>
                          <option>Female</option>
                          <option>Prefer not to say</option>
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                      </div>
                      <input name="noticePeriod" type="text"
                        placeholder={isInternship ? "Available From *" : "Notice Period *"}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-border/40 bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 placeholder:text-muted-foreground/60" />
                    </div>
                  </div>
                </div>

                {/* Documents */}
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-1 h-5 rounded-full bg-primary" />
                    <h3 className="text-xs font-black uppercase tracking-widest text-primary">
                      Documents
                    </h3>
                  </div>
                  <div
                    onClick={() => fileInputRef.current?.click()}
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={handleDrop}
                    className="border-2 border-dashed border-border/40 rounded-2xl p-10 text-center cursor-pointer hover:border-primary/50 hover:bg-primary/5 transition-all group"
                  >
                    <input ref={fileInputRef} type="file" accept=".pdf,.doc,.docx"
                      onChange={handleFile} className="hidden" />
                    <div className="w-14 h-14 rounded-2xl bg-muted flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/10 transition-colors">
                      <Upload className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                    {fileName ? (
                      <p className="font-semibold text-primary text-sm">{fileName}</p>
                    ) : (
                      <>
                        <p className="font-bold text-sm mb-1">
                          Upload Resume <span className="text-primary">*</span>
                        </p>
                        <p className="text-xs text-muted-foreground">
                          PDF, DOC, or DOCX · Max 5 MB
                        </p>
                      </>
                    )}
                  </div>
                </div>

                {/* Submit */}
                <Button type="submit" size="lg" disabled={submitting}
                  className="w-full rounded-2xl py-6 text-base font-bold disabled:opacity-70">
                  {submitting ? "Submitting…" : "Submit Application"}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </form>
            </>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

/* ─── Job Card ─── */
const JobCard = ({
  job, index, isInternship,
}: {
  job: Job; index: number; isInternship: boolean;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        whileHover={{ y: -4 }}
        className="group"
      >
        <Card className="h-full flex flex-col overflow-hidden border border-border/50 hover:border-primary/40 hover:shadow-xl transition-all duration-300">
          <div className="h-1 w-full bg-primary/20 group-hover:bg-primary transition-all duration-500" />
          <CardHeader className="flex-1 p-8">
            <CardTitle className="text-2xl font-bold mb-4 leading-snug">
              {job.title}
            </CardTitle>
            <div className="flex flex-wrap gap-2 mb-5">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full bg-muted border border-border/40">
                {isInternship
                  ? <><GraduationCap className="w-3 h-3" />{job.experience}</>
                  : <><Briefcase className="w-3 h-3" />{job.experience}</>
                }
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full bg-muted border border-border/40">
                <MapPin className="w-3 h-3" />{job.location}
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20">
                <Clock className="w-3 h-3" />
                {isInternship ? job.duration : job.type}
              </span>
              {isInternship && job.stipend && (
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full bg-green-500/10 text-green-600 border border-green-500/20">
                  {job.stipend}
                </span>
              )}
            </div>
            <CardDescription className="text-sm leading-relaxed mb-6">
              {job.description}
            </CardDescription>
            <div className="flex flex-wrap gap-2">
              {job.tags.map((tag) => (
                <span key={tag}
                  className="text-xs px-2.5 py-1 rounded-md bg-muted/60 text-muted-foreground font-medium">
                  {tag}
                </span>
              ))}
            </div>
          </CardHeader>
          <div className="px-8 pb-8">
            <Button onClick={() => setOpen(true)} size="lg" className="w-full rounded-xl font-bold">
              {isInternship ? "Apply for Internship" : "Apply Now"}
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </Card>
      </motion.div>

      {open && (
        <ApplicationModal
          job={job}
          isInternship={isInternship}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
};

/* ─── Tab Switcher ─── */
type Tab = "jobs" | "internships";

const TabSwitcher = ({
  active, onChange,
}: {
  active: Tab; onChange: (t: Tab) => void;
}) => (
  <div className="inline-flex items-center gap-1 p-1.5 rounded-2xl border border-border/50 bg-muted/40 backdrop-blur-sm">
    {(["internships", "jobs"] as Tab[]).map((tab) => (
      <button
        key={tab}
        onClick={() => onChange(tab)}
        className={`
          relative px-6 py-2.5 rounded-xl text-sm font-bold tracking-wide transition-all duration-300 capitalize
          ${active === tab
            ? "text-white shadow-md"
            : "text-muted-foreground hover:text-foreground"
          }
        `}
      >
        {active === tab && (
          <motion.span
            layoutId="tab-pill"
            className="absolute inset-0 rounded-xl bg-primary"
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
          />
        )}
        <span className="relative z-10 flex items-center gap-2">
          {tab === "jobs"
            ? <><Briefcase className="w-3.5 h-3.5" /> Jobs</>
            : <><GraduationCap className="w-3.5 h-3.5" /> Internships</>
          }
        </span>
      </button>
    ))}
  </div>
);

/* ─── Main Page ─── */
const Careers = () => {
  const [activeTab, setActiveTab] = useState<Tab>("internships");

  const displayList = activeTab === "jobs" ? jobs : internships;
  const isInternship = activeTab === "internships";

  return (
    <PageLayout>
      {/* ===== HERO ===== */}
      <section className="section relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="container-wide relative z-10">
          <Breadcrumb items={[{ label: "Careers" }]} />
          <div className="max-w-4xl mx-auto text-center mt-14">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-8"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              We're Hiring
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-6xl font-extrabold tracking-tight leading-tight mb-6"
            >
              Bring Your Talents &{" "}
              <span className="text-primary italic">Propel Your Career</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-muted-foreground leading-relaxed mb-10 max-w-2xl mx-auto"
            >
              Elicius Energy is an IIT Madras–incubated cleantech startup working on
              hydrogen fuel cells, air quality IoT systems, and data-driven industrial
              solutions. Join a team where your work creates real environmental impact.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap justify-center gap-4 mb-10"
            >
              {perks.map((p) => (
                <div key={p.label}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-border/50 bg-background text-sm font-semibold">
                  <p.icon className="w-4 h-4 text-primary" />
                  {p.label}
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <Button size="lg" className="px-10 font-bold rounded-xl"
                onClick={() =>
                  document.getElementById("open-positions")?.scrollIntoView({ behavior: "smooth" })
                }>
                Explore Open Positions
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== RESEARCH STREAMS STRIP ===== */}
      <section className="border-y border-border/30 bg-muted/20 py-8">
        <div className="container-wide">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
              Research Streams
            </p>
            {streams.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-sm font-semibold text-foreground/80">
                <Icon className="w-4 h-4 text-primary" />
                {label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== OPEN POSITIONS ===== */}
      <section id="open-positions" className="section section-muted">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="heading heading-accent">Explore Open Positions</h2>
            <p className="subtext max-w-2xl mx-auto mt-4">
              Find your next opportunity at Elicius Energy — whether you're an
              experienced professional or a student looking for hands-on cleantech experience.
            </p>
          </motion.div>

          {/* Tab Switcher */}
          <div className="flex justify-center mb-12">
            <TabSwitcher active={activeTab} onChange={setActiveTab} />
          </div>

          {/* Internship info banner */}
          <AnimatePresence mode="wait">
            {isInternship && (
              <motion.div
                key="intern-banner"
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                className="max-w-5xl mx-auto mb-8 flex items-start gap-3 px-5 py-4 rounded-2xl bg-primary/5 border border-primary/20"
              >
                <GraduationCap className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <p className="text-sm text-foreground/80">
                  All internships are based at{" "}
                  <strong>IIT Madras Research Park, Taramani, Chennai</strong>.
                  Interns receive a certificate of completion, flexible hours,
                  and a recommendation letter upon successful completion.
                  Perks include a 5-day work week and an informal work culture.
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Cards Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
            >
              {displayList.map((job, i) => (
                <JobCard
                  key={job.id}
                  job={job}
                  index={i}
                  isInternship={isInternship}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="section bg-primary text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="container-wide relative z-10 text-center py-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">Don't see the right role?</h2>
            <p className="text-xl text-white/80 mb-8 max-w-xl mx-auto">
              We're always looking for exceptional people. Send us your profile
              and we'll reach out when something fits.
            </p>
            <Button asChild size="lg"
              className="bg-white text-primary hover:bg-white/90 font-bold px-10">
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Careers;
