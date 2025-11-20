import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import Breadcrumb from "@/components/Breadcrumb";

const Clients = () => {
  const clients = [
    { name: "IIT Madras", sector: "Education" },
    { name: "Smart Cities Mission", sector: "Government" },
    { name: "Chennai Corporation", sector: "Municipal" },
    { name: "Tata Steel", sector: "Industrial" },
    { name: "Infosys", sector: "Corporate" },
    { name: "L&T", sector: "Engineering" },
    { name: "BMTC Bangalore", sector: "Transport" },
    { name: "Apollo Hospitals", sector: "Healthcare" },
  ];

  const sectors = [
    { name: "Smart Cities", count: 15 },
    { name: "Industrial", count: 25 },
    { name: "Education", count: 12 },
    { name: "Healthcare", count: 8 },
  ];

  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-12">
        <Breadcrumb items={[{ label: "Clients" }]} />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 glow-text">
            Our Clients
          </h1>
          <p className="text-xl text-muted-foreground">
            Trusted by leading organizations across industries
          </p>
        </motion.div>

        {/* Client Grid */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="glass-glow rounded-xl p-6 text-center hover-scale"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary mx-auto mb-3 flex items-center justify-center text-xl font-bold text-background">
                {client.name.substring(0, 2)}
              </div>
              <h3 className="font-bold mb-1">{client.name}</h3>
              <p className="text-xs text-muted-foreground">{client.sector}</p>
            </motion.div>
          ))}
        </div>

        {/* Sectors */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center mb-8 glow-text">
            Sectors We Serve
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {sectors.map((sector, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-glow rounded-xl p-6 text-center hover-scale"
              >
                <div className="text-4xl font-bold text-primary mb-2">
                  {sector.count}+
                </div>
                <div className="text-sm text-muted-foreground">{sector.name}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </PageLayout>
  );
};

export default Clients;
