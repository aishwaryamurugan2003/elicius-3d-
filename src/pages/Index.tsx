import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Zap, Shield, TrendingUp, Award, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
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
import AnimatedHeroBackground from "@/components/AnimatedHeroBackground";
import heroImage from "@/assets/hero-home.jpg";
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

const solutions = [
  {
    title: "Advanced IoT Devices",
    description:
      "Cutting-edge air quality monitoring with real-time data collection and analytics.",
    link: "/products/devices",
  },
  {
    title: "Fuel Cell Technology",
    description:
      "Research, design, MEA fabrication, and optimisation of PEM fuel cell systems.",
    link: "/research/fuel-cell",
  },
  {
    title: "Electrochemical Modelling & Simulation",
    description:
      "Physics-based modelling of fuel cell and electrolyser systems for performance and degradation analysis.",
    link: "/research/simulations",
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

const Index = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return document.documentElement.classList.contains("dark");
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <PageLayout>
      {/* ================= HERO ================= */}
      <section className="relative min-h-[calc(100vh-80px)] flex items-center">
        <AnimatedHeroBackground image={heroImage} />

        <div className="container-wide relative">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <h1 className="text-3xl heading mb-6">
              Clean Air, Powered by Intelligence
            </h1>

            <p className="subtext max-w-2xl mb-10">
              Delivering advanced air quality monitoring, clean energy research,
              and electrochemical intelligence for a sustainable future.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link to="/products">
                  Explore Products
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>

              <Button asChild size="lg" variant="outline">
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= SOLUTIONS ================= */}
      <section className="section section-muted py-28">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="heading heading-accent">Our Solutions</h2>
            <p className="subtext max-w-2xl mx-auto mt-4">
              Comprehensive clean-tech solutions combining hardware, software,
              and scientific research.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12">
            {solutions.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full flex flex-col">
                  <CardHeader>
                    <CardTitle>{item.title}</CardTitle>
                    <CardDescription>{item.description}</CardDescription>
                  </CardHeader>

                  <CardFooter className="mt-auto">
                    <Link to={item.link} className="link-cta">
                      Learn More <ArrowRight className="w-4 h-4" />
                    </Link>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= STATS ================= */} 
      <section className="section section-light py-28">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="heading heading-accent">
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
                <Card className="text-center py-10">
                  <div className="icon-badge mx-auto mb-6">
                    <stat.icon className="w-6 h-6" />
                  </div>

                  <div className="text-4xl font-bold mb-2">
                    <CountUp value={stat.value} suffix={stat.suffix} />
                  </div>

                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="section section-gradient py-32">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-4xl font-bold">
                  About Elicius Energy
                </CardTitle>
                <CardDescription className="text-1xl leading-relaxed">
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
<section className="section section-muted py-20">
  <div className="container-wide">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-12"
    >
      <h2 className="heading heading-accent">Our Clients</h2>
      <p className="subtext max-w-2xl mx-auto mt-4">
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
            <Card className="w-44 flex flex-col items-center justify-center p-6 hover:shadow-lg transition-shadow">
              <div className="h-16 w-28 flex items-center justify-center mb-4">
<img
  src={client.logo}
  alt={client.name}
  className={`${client.scale} w-full object-contain`}
/>
</div>
              <p className="text-sm font-medium text-center text-muted-foreground">
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

      {/* Floating Theme Toggle */}
      <button
        onClick={toggleDarkMode}
        className="fixed bottom-24 right-6 z-50 p-4 rounded-full bg-primary text-primary-foreground shadow-2xl hover:scale-110 transition-transform duration-300 flex items-center justify-center"
        aria-label="Toggle Dark Mode"
      >
        {isDarkMode ? (
          <Sun className="w-6 h-6 animate-fade-in" />
        ) : (
          <Moon className="w-6 h-6 animate-fade-in" />
        )}
      </button>
    </PageLayout>
  );
};

export default Index;