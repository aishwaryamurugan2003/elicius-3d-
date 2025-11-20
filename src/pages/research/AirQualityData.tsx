import { motion } from "framer-motion";
import { BarChart3, Brain, TrendingUp, AlertTriangle, Layers, Diamond, DiamondIcon, UserPlus, Share2 } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import Breadcrumb from "@/components/Breadcrumb";

const AirQualityData = () => {
  const capabilities = [
    {
      icon: Layers,
      title: "Real-time air quality monitoring system.",
      description: "We design and deliver real-time, air quality monitoring devices. These can be mounted on your vehicle or placed indoor.",
    },
    {
      icon: DiamondIcon,
      title: "Big data analytics",
      description: "We analyze huge amount of spatio-temporal data in big data frameworks to draw actionable insights.",
    },
    {
      icon: UserPlus,
      title: "Cloud based pipeline for spatio-temporal data",
      description: "We stream large amount of data from our IoT device network and remote sensing satellites into our cloud using data pipelines.",
    },
    {
      icon: Share2,
      title: "Spatiotemporal hotspot identification",
      description: "An AI-driven, self-tuning, highly accurate distributed sensor network for spatio-temporal hotspot identification.",
    },
  ];

  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-12">
        <Breadcrumb
          items={[
            { label: "Research", path: "/research" },
            { label: "Air Quality Data Science" },
          ]}
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 glow-text">
            Welcome to Kaatru
          </h1>
          <p className="text-xl text-muted-foreground">
            Empowering You with Hyperlocal Air Quality Insights
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {capabilities.map((capability, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-glow rounded-2xl p-8 hover-scale text-center"
            >
              <capability.icon className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-3">{capability.title}</h3>
              <p className="text-muted-foreground">{capability.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-glow rounded-2xl p-8 max-w-4xl mx-auto mb-16"
        >
          <h2 className="text-3xl font-bold mb-6 glow-text">Motive for Air Quality Monitoring</h2>
          <div className="space-y-4 text-muted-foreground text-justify">
            <p>
              We know very little about our immediate surroundings and the pollution there.
            </p>
            <p>
              3 million people worldwide die from outdoor air pollution, including 1 million in India
            </p>
            <p>
              Chemicals and harmful particles released into the atmosphere damage the living organisms. 
            </p>
            <p>
              Existing air monitoring network is sporadic and prohibitively priced to expand
            </p>
          </div>
        </motion.div>

       <motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  className="glass-glow rounded-3xl p-12 text-center mb-32"
>
  <h2 className="text-3xl font-bold mb-10 glow-text">
    Our Technology and Resources
  </h2>

  <div className="grid md:grid-cols-3 gap-10">
    {[
      {
        value: "Advanced network algorithms",
        label:
          "We have used electrochemical sensors for measuring a range of gases, and optical light scattering sensors for measuring the size and mass of particulate matter. We have excelled in fabrication of sensors to design and development of instrumentation to deployment of advanced network algorithms.",
      },
      {
        value: "Machine learning approaches",
        label:
          "The modern machine learning approaches will be the driving factor to analyze the air quality. To predict impact on human and animal health, as well as vegetation at a cellular level.",
      },
      {
        value: "Cloud-based monitoring platform",
        label:
          "Data is securely accessible through cloud-based monitoring platform. Our data management technologies validate information gathered by our deployed devices.",
      },
    ].map((stat, i) => (
      <div key={i} className="px-4">
        <div className="text-2xl font-bold text-primary mb-3">{stat.value}</div>
        <div className="text-sm text-muted-foreground">{stat.label}</div>
      </div>
    ))}
  </div>
</motion.div>


        <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass-glow rounded-2xl p-8 max-w-4xl mx-auto mb-16"
        >
          <h2 className="text-3xl font-bold mb-6 glow-text">About Kaatru</h2>
          <div className="space-y-4 text-muted-foreground text-justify">
            <p>
              At Kaatru, we are dedicated to providing Hyperlocal Air Quality Insights to 
              empower individuals and communities to make informed decisions about their 
              environment. We understand the importance of breathing clean air and the 
              impact it has on our health and well-being.
            </p>

    <p>
      Our mission is to create a world where everyone has access to real-time and 
      accurate air quality information. We believe that by raising awareness about air 
      pollution and providing actionable insights, we can drive positive change and 
      contribute to building healthier and more sustainable communities.
    </p>
  </div>
</motion.div>


         <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-glow rounded-2xl p-8 max-w-4xl mx-auto mb-16"
        >
          <h2 className="text-3xl font-bold mb-6 glow-text">Our Team</h2>
          <div className="space-y-4 text-muted-foreground text-justify">
            <p>
              Our team comprises individuals from diverse backgrounds, joining forces to pursue more than just financial outcomes. We are dedicated to implementing eco-design and eco-innovation strategies in our product development process.    
            </p>
          </div>
        </motion.div>
      </div>
    </PageLayout>
  );
};

export default AirQualityData;
