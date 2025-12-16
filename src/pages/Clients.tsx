import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import Breadcrumb from "@/components/Breadcrumb";

import logoIITM from "@/assets/clients/iitm.jpg";
import logoTHSTI from "@/assets/clients/THSTI.jpg";
import logoWSAI from "@/assets/clients/wasi.jpg";
import logoCIT from "@/assets/clients/cancerinstitute.jpg"; 
import logoNMRL from "@/assets/clients/NMRL.jpg";
import logopfizer from "@/assets/clients/pfizer.jpg";
import logoLT from "@/assets/clients/LT.jpg"; 

const Clients = () => {
  const clients = [
    { name: "IIT Madras", logo: logoIITM },
    { name: "THSTI", logo: logoTHSTI },
    { name: "WSAI", logo: logoWSAI },
    { name: "WIA", logo: logoCIT },
    { name: "NMRL", logo: logoNMRL },
    { name: "Pfizer", logo: logopfizer },
    { name: "Larsen & Toubro", logo: logoLT },
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
              <div className="w-20 h-20 mx-auto mb-3 flex items-center justify-center">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="w-full h-full object-contain"
                />
              </div>

              <h3 className="font-bold mt-2">{client.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};
export default Clients;