import { motion } from "framer-motion";
import { Cpu, Network, Zap, CloudLightning } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import Breadcrumb from "@/components/Breadcrumb";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";

const Technology = () => {
  const technologies = [
    {
      icon: Network,
      title: "IoT (Internet of Things)",
      description:
        "Industrial-grade IoT systems for real-time environmental data acquisition and control.",
      points: [
        "Intelligent sensor network design",
        "Real-time data acquisition systems",
        "Edge processing & embedded intelligence",
        "Custom hardware & firmware development",
      ],
    },
    {
      icon: CloudLightning,
      title: "Data Science & Cloud Technologies",
      description:
        "Scalable data engineering, analytics, and cloud-native workflows.",
      points: [
        "Data ingestion, cleaning, and validation",
        "Advanced analytics & insight generation",
        "Calibration models for experimental data",
        "Production-grade MLOps pipelines",
      ],
    },
    {
      icon: Cpu,
      title: "Artificial Intelligence (AI)",
      description:
        "Domain-specific AI/ML models combining data-driven and physics-based approaches.",
      points: [
        "Custom ML & deep learning models",
        "LLM fine-tuning for engineering workflows",
        "Hybrid physics + AI architectures",
        "AI retrofitting for legacy systems",
      ],
    },
    {
      icon: Zap,
      title: "Software Engineering",
      description:
        "End-to-end development across web, mobile, desktop, and cloud platforms.",
      points: [
        "Web & mobile application development",
        "Interactive dashboards & visualization",
        "Custom desktop engineering tools",
        "Scalable SaaS platforms",
      ],
    },
  ];

  return (
    <PageLayout>
      {/* ================= HEADER ================= */}
      <section className="section">
        <div className="container-wide">
          <Breadcrumb items={[{ label: "Technology" }]} />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center mt-12"
          >
            <h1 className="heading heading-accent">
              Our Technology
            </h1>
            <p className="subtext mt-6">
              Engineering-driven innovation powering clean energy and
              air-quality intelligence
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= TECHNOLOGY STACK ================= */}
      <section className="section section-muted">
        <div className="container-wide max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover-soft">
                  <CardHeader>
                    <tech.icon className="w-10 h-10 text-primary mb-4" />
                    <CardTitle className="text-3xl">
                      {tech.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent>
                    <p className="text-muted-foreground mb-6">
                      {tech.description}
                    </p>

                    <ul className="space-y-2">
                      {tech.points.map((point, i) => (
                        <li
                          key={i}
                          className="flex items-start text-sm text-muted-foreground"
                        >
                          <span className="mt-2 mr-3 w-1.5 h-1.5 rounded-full bg-primary" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= IIT MADRAS ================= */}
      <section className="section">
        <div className="container-wide max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardContent className="py-12 text-center">
                <h2 className="heading-sm mb-6">
                  Innovation from IIT Madras
                </h2>

                <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Our technology stack is built on years of rigorous research and
                  development at IIT Madras, combining academic depth with
                  real-world deployment experience to deliver reliable,
                  industry-grade clean-tech solutions.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Technology;
