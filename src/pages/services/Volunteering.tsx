import { motion } from "framer-motion";
import { Users, Calendar, MapPin, Award } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import Breadcrumb from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Volunteering = () => {
  const programs = [
    {
      icon: Users,
      title: "Community Monitoring",
      description: "Help deploy and maintain air quality sensors in your neighborhood",
    },
    {
      icon: Calendar,
      title: "Educational Workshops",
      description: "Conduct awareness sessions in schools and community centers",
    },
    {
      icon: MapPin,
      title: "Data Collection",
      description: "Participate in city-wide environmental data collection drives",
    },
    {
      icon: Award,
      title: "Research Support",
      description: "Assist our research team with field studies and analysis",
    },
  ];

  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-12">
        <Breadcrumb
          items={[
            { label: "Services", path: "/services" },
            { label: "Volunteering" },
          ]}
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 glow-text">
            Volunteer With Us
          </h1>
          <p className="text-xl text-muted-foreground">
            Join our mission to create cleaner, healthier communities
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-glow rounded-2xl p-8 hover-scale text-center"
            >
              <program.icon className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-3">{program.title}</h3>
              <p className="text-muted-foreground">{program.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-glow rounded-3xl p-12 text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-4 glow-text">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Sign up today and become part of our growing community of environmental advocates
          </p>
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-primary to-secondary text-background hover:shadow-glow transition-all duration-300"
          >
            <Link to="/contact">Join Now</Link>
          </Button>
        </motion.div>
      </div>
    </PageLayout>
  );
};

export default Volunteering;
