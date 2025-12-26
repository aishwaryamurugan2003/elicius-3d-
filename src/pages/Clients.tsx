import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import Breadcrumb from "@/components/Breadcrumb";
import {
  Card,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import logoIITM from "@/assets/clients/iitm.jpg";
import logoTHSTI from "@/assets/clients/THSTI.jpg";
import logoWSAI from "@/assets/clients/wasi.jpg";
import logoCIT from "@/assets/clients/cancerinstitute.jpg";
import logoNMRL from "@/assets/clients/NMRL.jpg";
import logopfizer from "@/assets/clients/pfizer.jpg";
// import logoLT from "@/assets/clients/LT.jpg";

const Clients = () => {
  const clients = [
    { name: "IIT Madras", logo: logoIITM },
    { name: "THSTI", logo: logoTHSTI },
    { name: "WSAI", logo: logoWSAI },
    { name: "Cancer Institute (WIA)", logo: logoCIT },
    { name: "NMRL", logo: logoNMRL },
    { name: "Pfizer", logo: logopfizer },
    // { name: "Larsen & Toubro", logo: logoLT },
  ];

  return (
    <PageLayout>

      {/* ================= HEADER ================= */}
      <section className="section">
        <div className="container-wide">
          <Breadcrumb items={[{ label: "Clients" }]} />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center mt-12"
          >
            <h1 className="heading heading-accent">
              Our Clients
            </h1>
            <p className="subtext mt-6">
              Trusted by leading academic institutions, research organisations,
              and global industry partners.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= CLIENTS GRID ================= */}
      <section className="section section-muted">
        <div className="container-wide">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 max-w-6xl mx-auto">
            {clients.map((client, index) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="h-full">
                  <CardHeader className="items-center text-center">
                    <div className="h-20 w-32 flex items-center justify-center mb-4">
                      <img
                        src={client.logo}
                        alt={client.name}
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                    <CardTitle className="text-base">
                      {client.name}
                    </CardTitle>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </PageLayout>
  );
};

export default Clients;
