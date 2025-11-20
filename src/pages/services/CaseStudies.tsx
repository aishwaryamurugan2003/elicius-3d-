import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Building2, School, Factory, ArrowRight } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import Breadcrumb from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";

const CaseStudies = () => {
  const caseStudies = [
    {
      id: "smart-city-bangalore",
      icon: Building2,
      title: "Smart City Initiative - Bangalore",
      category: "Smart City",
      description: "Deployed 200+ air quality sensors across Bangalore for real-time monitoring",
      impact: ["40% improvement in response time", "500K citizens benefited", "₹2Cr cost savings"],
    },
    {
      id: "iit-madras-campus",
      icon: School,
      title: "IIT Madras Campus Monitoring",
      category: "Education",
      description: "Comprehensive campus-wide environmental monitoring system",
      impact: ["15 sensors deployed", "Real-time data access", "Research collaboration"],
    },
    {
      id: "industrial-compliance",
      icon: Factory,
      title: "Industrial Compliance - Chennai",
      category: "Industrial",
      description: "Emission monitoring for manufacturing facility regulatory compliance",
      impact: ["100% compliance", "Automated reporting", "Cost reduction"],
    },
  ];

  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-12">
        <Breadcrumb
          items={[
            { label: "Services", path: "/services" },
            { label: "Case Studies" },
          ]}
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 glow-text">
            Case Studies
          </h1>
          <p className="text-xl text-muted-foreground">
            Real-world success stories from our deployments
          </p>
        </motion.div>

        <div className="space-y-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-glow rounded-2xl p-8 hover-scale group"
            >
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <study.icon className="w-10 h-10 text-background" />
                  </div>
                </div>

                <div className="flex-1">
                  <div className="inline-block px-3 py-1 glass-glow rounded-full text-xs font-medium mb-3">
                    {study.category}
                  </div>
                  <h3 className="text-3xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">{study.description}</p>

                  <div className="grid md:grid-cols-3 gap-4 mb-6">
                    {study.impact.map((item, i) => (
                      <div key={i} className="glass-glow rounded-xl p-3 text-center">
                        <div className="text-sm text-muted-foreground">{item}</div>
                      </div>
                    ))}
                  </div>

                  <Button
                    asChild
                    variant="outline"
                    className="glass-glow hover:bg-primary/10 group-hover:glow-border transition-all"
                  >
                    <Link to={`/services/case-studies/${study.id}`} className="flex items-center">
                      Read Full Story
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default CaseStudies;
