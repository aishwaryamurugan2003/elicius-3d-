import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Zap, Shield, TrendingUp, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/PageLayout";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import heroImage from "@/assets/hero-home.jpg";

const Index = () => {
  const stats = [
    { label: "Cities Covered", value: "1", icon: Award },
    { label: "Devices Deployed", value: "79", icon: Zap },
    { label: "Data Points / Day", value: "13M+", icon: TrendingUp },
    { label: "Pilot Studies", value: "5", icon: Shield },
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

  return (
    <PageLayout>
      {/* ================= HERO ================= */}
      <section className="relative min-h-screen flex items-center">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-white/80 backdrop-blur-sm" />

        <div className="container-wide relative">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <h1 className="heading mb-6">
              Innovative Energy & Air Quality Solutions
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

      {/* ================= OUR SOLUTIONS ================= */}
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

      {/* ================= AIR QUALITY OVERVIEW ================= */}
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

  <div className="text-3xl font-bold mb-2">
    {stat.value}
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
                <CardTitle>About Elicius Energy</CardTitle>
                <CardDescription>
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
    </PageLayout>
  );
};

export default Index;
