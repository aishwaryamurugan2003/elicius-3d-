import { motion } from "framer-motion";
import { Download, ArrowRight, Gauge, Wifi, Battery, Cloud } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import Breadcrumb from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import { devices } from "@/data/devices";
import { useNavigate } from "react-router-dom";

const Devices = () => {
  const navigate = useNavigate();

  const features = [
    { icon: Gauge, title: "Precision Sensors", description: "Laboratory-grade accuracy" },
    { icon: Wifi, title: "IoT Connected", description: "Real-time data streaming" },
    { icon: Battery, title: "Long Battery", description: "Up to 6 months operation" },
    { icon: Cloud, title: "Cloud Storage", description: "Secure data backup" },
  ];

  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-12">
        <Breadcrumb
          items={[
            { label: "Products", path: "/products" },
            { label: "Devices" },
          ]}
        />

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 glow-text">
            IoT Devices
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Professional air quality monitoring devices with cutting-edge technology
          </p>

          <Button size="lg"
          onClick={() => {
            const brochureUrl = "/Kaatru brochure.pdf"; 
            window.open(brochureUrl, "_blank"); 
             }}
             className="bg-gradient-to-r from-primary to-secondary text-background hover:shadow-glow transition-all duration-300">
            <Download className="mr-2 w-5 h-5" />
            Download Complete Brochure
          </Button>

        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-glow rounded-xl p-6 text-center hover-scale"
            >
              <feature.icon className="w-10 h-10 text-primary mx-auto mb-3" />
              <h3 className="font-bold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Devices Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {devices.map((device, index) => (
            <motion.div
              key={device.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-glow rounded-2xl overflow-hidden group hover-scale"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={device.images[0]}
                  alt={device.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 px-3 py-1 glass-glow rounded-full text-xs font-medium">
                  {device.category}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {device.name}
                </h3>
                <p className="text-muted-foreground mb-4">{device.description}</p>

                <ul className="space-y-2 mb-4">
                  {Object.entries(device.specs).map(([key, value]) => (
                    <li key={key} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3" />
                      {key}: {value}
                    </li>
                  ))}
                </ul>

                <div className="text-2xl font-bold text-primary mb-4">
                  {device.price}
                </div>

                {/* Navigate Instead of Link */}
                <Button
                  onClick={() => navigate(`/products/devices/${device.id}`)}
                  variant="outline"
                  className="w-full glass-glow hover:bg-primary/10 transition-all"
                >
                  <div className="flex items-center justify-center">
                    View Details
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform" />
                  </div>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default Devices;
