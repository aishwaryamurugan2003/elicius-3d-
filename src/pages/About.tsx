import { motion } from "framer-motion";
import { Award, Users, Target, Lightbulb } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import Breadcrumb from "@/components/Breadcrumb";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import director from "@/assets/director.jpg";

const About = () => {
  const values = [
    {
      icon: Award,
      title: "Excellence",
      description:
        "Delivering world-class clean-tech solutions backed by rigorous research and engineering.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description:
        "Building strong partnerships with industry leaders and academic institutions.",
    },
    {
      icon: Target,
      title: "Impact",
      description:
        "Driving measurable change in air quality monitoring and clean energy adoption.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "Pioneering advanced technologies across IoT, AI, energy systems, and fuel cells.",
    },
  ];

  return (
    <PageLayout>

      {/* ================= HERO ================= */}
      <section className="section section-light">
        <div className="container-wide">
          <Breadcrumb items={[{ label: "About Us" }]} />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center mt-12"
          >
            <h1 className="heading heading-accent">About Elicius Energy</h1>
            <p className="subtext mt-6">
              Advancing clean energy, air-quality intelligence, and next-generation
              fuel-cell technologies through deep research and real-world innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= DIRECTOR ================= */}
      <section className="section section-muted">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            {/* Image */}
            <div className="flex flex-col items-center text-center">
              <img
                src={director}
                alt="Prof. Raghunathan Rengaswamy"
                className="rounded-2xl w-full max-w-sm h-[420px] object-cover shadow-lg mb-4"
              />
              <h3 className="text-xl font-semibold">
                Prof. Raghunathan Rengaswamy
              </h3>
              <p className="text-sm text-muted-foreground">Director</p>
            </div>

            {/* Text */}
            <div>
              <h2 className="text-3xl font-semibold mb-6">
                Leadership & Vision
              </h2>

              <div className="space-y-4 text-muted-foreground leading-relaxed text-justify">
                <p>
                  Prof. Raghunathan Rengaswamy is the Marti Mannarriah Gurunath Institute
                  Chair Professor in the Department of Chemical Engineering and Dean of
                  Global Engagement at IIT Madras. He is a founding member of the Robert
                  Bosch Centre for Data Science and AI (RBC-DSAI) and leads the Walmart
                  Centre for Tech Excellence at IIT Madras.
                </p>

                <p>
                  He received his PhD in Chemical Engineering from Purdue University and
                  has held faculty positions at Texas Tech University, Clarkson
                  University, IIT Bombay, and visiting appointments at Purdue
                  University, University of Delaware, and University of Alberta.
                </p>

                <p>
                  His research spans data science, ML/AI, process systems engineering,
                  microfluidics, energy systems, air quality monitoring, and particle
                  synthesis. He has authored books, delivered NPTEL courses, and
                  received multiple awards for research and teaching.
                </p>

                <p>
                  He actively implements machine learning solutions for industrial
                  applications and has co-founded multiple IIT Madras–incubated
                  startups, including Gyan Data, GITAA, and Elicius Energy Private
                  Limited.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= MISSION ================= */}
      <section className="section section-light">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <Card>
              <CardHeader>
                <CardTitle>Our Mission</CardTitle>
                <CardDescription>
                  To empower industries with sustainable, science-driven solutions
                  through innovation in chemical engineering, clean energy systems,
                  and environmental intelligence.
                </CardDescription>
              </CardHeader>

              <div className="px-6 pb-6 space-y-4 text-muted-foreground text-justify">
                <p>
                  At Elicius Energy, we envision a future where industries thrive
                  sustainably through innovations in chemical engineering and data
                  science. Our expert team delivers tailor-made solutions with a strong
                  commitment to environmental stewardship.
                </p>

                <p>
                  We are pioneering Proton Exchange Membrane–based tubular fuel cell
                  stacks, enabling silent, clean power with superior power density.
                  Our work spans physics-based and system-level modelling of fuel cells
                  and alkaline water electrolysers, including performance, efficiency,
                  and degradation studies.
                </p>

                <p>
                  In parallel, we are developing low-cost air quality monitoring and
                  road condition monitoring devices to combat pollution and improve
                  urban infrastructure for a healthier future.
                </p>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* ================= VALUES ================= */}
      <section className="section section-muted">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="heading heading-accent">Our Values</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="text-center h-full">
                  <div className="icon-badge mx-auto mb-4">
                    <value.icon className="w-6 h-6" />
                  </div>
                  <CardTitle>{value.title}</CardTitle>
                  <CardDescription>{value.description}</CardDescription>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </PageLayout>
  );
};

export default About;
