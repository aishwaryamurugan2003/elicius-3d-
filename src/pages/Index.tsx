import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Zap, Shield, TrendingUp, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/PageLayout";
import heroImage from "@/assets/hero-home.jpg";

const Index = () => {
  const stats = [
    { label: "Cities Covered", value: "1", icon: Award },
    { label: "Devices Deployed", value: "79", icon: Zap },
    { label: "Data Points/Day", value: "13M+", icon: TrendingUp },
    { label: "Pilot Study", value: "5", icon: Shield },
  ];

  const features = [
    {
      title: "Advanced IoT Devices",
      description: "Cutting-edge air quality monitoring with real-time data collection and analysis.",
      link: "/products/devices",
    },
    {
      title: "AI-Powered Software",
      description: "Machine learning algorithms for predictive analytics and insights.",
      link: "/products/software",
    },
    {
      title: "Comprehensive Data Solutions",
      description: "Cloud-based platforms for data visualization and management.",
      link: "/products/data",
    },
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(0.3)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/30 to-background z-0" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-block mb-6 px-4 py-2 glass-glow rounded-full text-sm font-medium"
            >
              {/* <span className="text-primary">From IIT Madras R&D to Real-World Innovation</span> */}
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 glow-text">
              INNOVATIVE ENERGY SOLUTIONS FOR A GREENER TOMORROW
            </h1>
                      
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-primary to-secondary text-background hover:shadow-glow transition-all duration-300 group"
              >
                <Link to="/products">
                  Explore Products
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="glass-glow hover:bg-primary/10 transition-all duration-300"
              >
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Floating particles effect */}
        <div className="absolute inset-0 z-5 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-primary/50 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [-20, -100],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-glow rounded-2xl p-6 text-center hover-scale"
              >
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-3xl md:text-4xl font-bold glow-text mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 glow-text">
              Our Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive clean-tech solutions powered by cutting-edge technology
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={feature.link}
                  className="block glass-glow rounded-2xl p-8 h-full hover:glow-border transition-all duration-300 group"
                >
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {feature.description}
                  </p>
                  <div className="flex items-center text-primary font-medium group-hover:translate-x-2 transition-transform">
                    Learn More <ArrowRight className="ml-2 w-4 h-4" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
       <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-glow rounded-3xl p-12 text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 glow-text">
              About Elicius
            </h2>
            <p className="text-xl text-muted-foreground mb-8 text-justify">
             At Elicius Energy, we envision a world where industries thrive sustainably through groundbreaking innovations in Chemical Engineering and Data science.
             Our expert team is dedicated to providing tailor-made consulting solutions that address industrial challenges with a commitment to environmental stewardship and technological excellence.
            </p>
          </motion.div>
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-glow rounded-3xl p-12 text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 glow-text">
              Ready to Transform Your Clean Energy Strategy?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join industry leaders leveraging our technology for a sustainable future
            </p>
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary text-background hover:shadow-glow transition-all duration-300"
            >
              <Link to="/contact">Start Your Journey</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Index;
