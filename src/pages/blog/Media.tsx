import { motion } from "framer-motion";
import { Play, ExternalLink } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import Breadcrumb from "@/components/Breadcrumb";

const Media = () => {
  const mediaItems = [
    {
      type: "video",
      title: "Smart City Deployment - Bangalore",
      description: "See how we deployed 200+ sensors across Bangalore",
      date: "Dec 2023",
    },
    {
      type: "press",
      title: "IIT Madras Research Breakthrough",
      description: "Major advancement in fuel cell efficiency",
      date: "Nov 2023",
    },
    {
      type: "video",
      title: "Product Demo - AirMonitor Pro",
      description: "Complete walkthrough of our flagship device",
      date: "Oct 2023",
    },
    {
      type: "press",
      title: "₹10Cr Funding Round Announcement",
      description: "Series A funding to expand operations",
      date: "Sep 2023",
    },
  ];

  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-12">
        <Breadcrumb
          items={[
            { label: "Blog", path: "/blog" },
            { label: "Media" },
          ]}
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 glow-text">
            Media Coverage
          </h1>
          <p className="text-xl text-muted-foreground">
            Videos, press releases, and featured stories
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {mediaItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-glow rounded-2xl overflow-hidden hover-scale group cursor-pointer"
            >
              <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                {item.type === "video" ? (
                  <Play className="w-16 h-16 text-primary" />
                ) : (
                  <ExternalLink className="w-16 h-16 text-primary" />
                )}
              </div>
              <div className="p-6">
                <div className="text-xs text-primary mb-2">{item.date}</div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default Media;
