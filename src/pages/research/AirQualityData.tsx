import { motion } from "framer-motion";
import {
  Layers,
  DiamondIcon,
  UserPlus,
  Share2,
} from "lucide-react";

import PageLayout from "@/components/PageLayout";
import Breadcrumb from "@/components/Breadcrumb";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

const AirQualityData = () => {
  const capabilities = [
    {
      icon: Layers,
      title: "Real-time Air Quality Monitoring",
      description:
        "Design and deployment of real-time air quality monitoring devices for mobile and fixed installations, enabling continuous environmental sensing.",
    },
    {
      icon: DiamondIcon,
      title: "Big Data Analytics",
      description:
        "Analysis of large-scale spatio-temporal datasets using big data frameworks to extract actionable environmental insights.",
    },
    {
      icon: UserPlus,
      title: "Cloud-based Data Pipelines",
      description:
        "Robust cloud infrastructure for ingesting, processing, and storing IoT and remote sensing data streams.",
    },
    {
      icon: Share2,
      title: "Spatio-temporal Hotspot Identification",
      description:
        "AI-driven distributed sensor networks for accurate identification of pollution hotspots over space and time.",
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
              { label: "Air Quality Data Science" },
            ]}
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center mt-12"
          >
            <h1 className="heading heading-accent">
              Welcome to Kaatru
            </h1>
            <p className="subtext mt-6">
              Empowering communities with hyperlocal air quality insights
              through data-driven environmental intelligence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= CAPABILITIES ================= */}
      <section className="section section-muted">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
            {capabilities.map((capability, index) => (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <div className="icon-badge mb-4">
                      <capability.icon className="w-6 h-6" />
                    </div>
                    <CardTitle>{capability.title}</CardTitle>
                    <CardDescription>
                      {capability.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= MOTIVATION ================= */}
      <section className="section">
        <div className="container-wide max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card>
              <div className="p-10">
                <h2 className="text-2xl font-semibold mb-6 text-center">
                  Motive for Air Quality Monitoring Welcome
                </h2>

                <div className="space-y-4 text-muted-foreground text-justify">
                  <p>
                    We often know very little about the quality of air in our
                    immediate surroundings and the pollutants we are exposed to.
                  </p>
                  <p>
                    Over 3 million people worldwide die prematurely every year
                    due to outdoor air pollution, including nearly 1 million in
                    India.
                  </p>
                  <p>
                    Harmful chemicals and particulate matter released into the
                    atmosphere significantly impact human health, ecosystems,
                    and overall quality of life.
                  </p>
                  <p>
                    Existing air quality monitoring networks are sparse and
                    prohibitively expensive to scale at a city-wide or
                    hyperlocal level.
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* ================= TECHNOLOGY & RESOURCES ================= */}
      <section className="section section-muted">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <Card>
              <div className="p-12">
                <h2 className="text-2xl font-semibold mb-12 text-center">
                  Our Technology and Resources
                </h2>

                <div className="grid md:grid-cols-3 gap-10">
                  {[
                    {
                      title: "Advanced Sensor Networks",
                      text:
                        "Electrochemical and optical sensors combined with advanced network algorithms enable accurate measurement of gases and particulate matter.",
                    },
                    {
                      title: "Machine Learning Approaches",
                      text:
                        "Modern ML techniques are used to analyse pollution patterns and assess impacts on human health, ecosystems, and urban environments.",
                    },
                    {
                      title: "Cloud-based Monitoring Platform",
                      text:
                        "Secure cloud platforms enable validated, real-time access to air quality data collected from distributed monitoring networks.",
                    },
                  ].map((item, i) => (
                    <div key={i}>
                      <h3 className="text-lg font-semibold text-primary mb-3">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* ================= ABOUT KAATRU ================= */}
      <section className="section">
        <div className="container-wide max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card>
              <div className="p-10">
                <h2 className="text-2xl font-semibold mb-6">
                  About Kaatru
                </h2>
                <div className="space-y-4 text-muted-foreground text-justify">
                  <p>
                    Kaatru is dedicated to providing hyperlocal air quality
                    insights that empower individuals, communities, and
                    decision-makers to better understand their environment.
                  </p>
                  <p>
                    By combining real-time sensing, data science, and cloud
                    technologies, we aim to raise awareness about air pollution
                    and enable informed actions toward healthier and more
                    sustainable communities.
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* ================= TEAM ================= */}
      <section className="section section-muted">
        <div className="container-wide max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card>
              <div className="p-10">
                <h2 className="text-2xl font-semibold mb-6">
                  Our Team
                </h2>
                <p className="text-muted-foreground text-justify">
                  Our multidisciplinary team brings together expertise in
                  engineering, data science, environmental science, and system
                  design, united by a shared commitment to sustainable and
                  impactful innovation.
                </p>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

    </PageLayout>
  );
};

export default AirQualityData;
