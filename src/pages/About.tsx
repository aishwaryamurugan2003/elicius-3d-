import { motion } from "framer-motion";
import { Award, Users, Target, Lightbulb } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import Breadcrumb from "@/components/Breadcrumb";
import director from "@/assets/director.jpg";

const About = () => {
  const values = [
    {
      icon: Award,
      title: "Excellence",
      description:
        "Committed to delivering world-class clean-tech solutions backed by rigorous R&D.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description:
        "Building partnerships with industry leaders and academic institutions.",
    },
    {
      icon: Target,
      title: "Impact",
      description:
        "Driving meaningful change in air quality monitoring and clean-energy adoption.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "Pioneering breakthrough technologies in IoT, ML, energy systems, and fuel cells.",
    },
  ];

  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-14">
        <Breadcrumb items={[{ label: "About Us" }]} />

        {/* HERO */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto text-center mb-20"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 glow-text">
            About Us
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Advancing clean energy, air-quality intelligence, and next-generation
            fuel-cell technology through deep research and real-world innovation.
          </p>
        </motion.div>

        {/* DIRECTOR SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto mb-28 grid md:grid-cols-2 gap-12 items-center"
        >
          {/* IMAGE */}
          <div className="flex flex-col items-center text-center">
            <img
  src={director}
  alt="Prof. Raghunathan Rengaswamy"
  className="
    rounded-2xl
    w-full
    max-w-sm
    h-[420px] md:h-[480px] lg:h-[520px]
    object-cover
    shadow-lg
    glass-glow
    mb-4
  "
/>


           {/* NAME UNDER IMAGE */}
           <h2 className="text-2xl font-bold glow-text mb-1">Director</h2>
           <h3 className="text-xl font-semibold">
            Prof. Raghunathan Rengaswamy
            </h3>
          </div>


          {/* TEXT */}
  <div>
  <h2 className="text-3xl font-bold mb-2 glow-text">About</h2>

  <h3 className="text-2xl font-semibold mb-6">
    Prof. Raghunathan Rengaswamy
    <span className="block text-xxl font-semibold text-white mt-1">
      Director
    </span>
  </h3>




          <div className="space-y-4 text-muted-foreground leading-relaxed text-justify">
              <p>
               Prof. Raghunathan Rengaswamy is the Marti Mannarriah Gurunath Institute Chair Professor in the Department of Chemical Engineering and the Dean of Global Engagement at IIT Madras. 
               He is a founding member of the Robert Bosch Centre for Data Science and AI (RBC-DSAI) and leads the Walmart Centre for Tech Excellence at IIT Madras.
                He is also a fellow of the Indian National Academy of Engineering.
               </p>

              <p>
                Prof. Raghunathan received his PhD in Chemical Engineering at Purdue University. He was a Professor of Chemical Engineering and co-director of the Process Control and Optimization Consortium (PCOC) at Texas Tech University, USA.
                 He has also held Associate and Full Professor positions at Clarkson University, New York, and Assistant Professor at IIT Bombay. Additionally,
                  he has been a visiting professor at Purdue University, the University of Delaware, and the University of Alberta.
               </p>

              <p>
               His research interests span data science, ML and AI, process systems engineering, microfluidics, energy systems, systems biology, air quality monitoring, and particle synthesis.
                Prof. Rengaswamy has delivered NPTEL courses, authored two books on process control and data science, and received multiple awards for his research and teaching contributions.
              </p>

              <p>
                His research spans data science, ML/AI, process systems
                engineering, microfluidics, energy systems, air-quality
                monitoring, and particle synthesis. He has authored multiple
                books, delivered NPTEL courses, and received numerous awards for
                research and teaching.
              </p>

              <p>
                He actively implements machine learning solutions for industrial applications through IIT Madras and Gyan Data Private Limited, an IIT Madras-incubated company he co-founded that focuses on data analytics for manufacturing excellence. 
                He has also co-founded two additional startups through the IIT Madras incubation facility: GITAA Private Limited,
                 which provides training in data sciences, and Elicius Energy Private Limited, which specialises in fuel cells, process modelling, and control applications.
              </p>
            </div>
          </div>
        </motion.div>

        {/* MISSION SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-glow rounded-3xl p-12 max-w-5xl mx-auto mb-28"
        >
          <h2 className="text-4xl font-bold mb-6 glow-text text-center">
            Our Mission
          </h2>

          <div className="space-y-4 text-muted-foreground text-lg leading-relaxed text-justify">
            <p>
             At Elicius Energy, we envision a world where industries thrive sustainably through groundbreaking innovations in chemical engineering and data science. 
             Our expert team is dedicated to providing tailor-made consulting solutions that address industrial challenges with a commitment to environmental stewardship and technological excellence.
            </p>

            <p>
              Driven by our passion for hydrogen technology, we are pioneering the development of Proton Exchange Membrane-based Tubular fuel cell stacks, 
              delivering not only silent and clean power but also enhanced power density that surpasses current market solutions. 
              Elicius specialises in physics-based and system-level modelling of electrochemical energy systems for hydrogen and clean-energy applications. Our work covers fuel cell and alkaline water electrolyser systems, including balance-of-plant modelling, performance analysis, and efficiency optimisation. We also address degradation and lifetime behaviour under real operating conditions to enable reliable, industry-relevant solutions.
            </p>

            <p>
             In our pursuit of a cleaner, healthier future, we are also developing low-cost air quality monitoring devices to combat air pollution and innovative road condition monitoring devices with cutting-edge sensor technology. 
             Through our relentless commitment to sustainability, innovation, and excellence, Elicius Energy aims to empower industries to achieve their full potential while safeguarding our planet for future generations.
            </p>
          </div>
        </motion.div>

        {/* VALUES
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-28"
        >
          <h2 className="text-4xl font-bold text-center mb-12 glow-text">
            Our Values
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-glow rounded-2xl p-8 text-center hover-scale"
              >
                <value.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div> */}

      </div>
    </PageLayout>
  );
};

export default About;