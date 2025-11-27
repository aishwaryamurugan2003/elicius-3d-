import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import Breadcrumb from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";

import { caseStudies } from "@/data/caseStudies"; // ← imported JSON-style data

const CaseStudies = () => {
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

        {/* CARD LIST */}
        <div className="space-y-12">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-glow rounded-2xl p-8 hover-scale group"
            >
              <div className="grid md:grid-cols-2 gap-10 items-center">

                {/* IMAGE */}
                <div className="overflow-hidden rounded-xl">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* CONTENT */}
                <div>
                  <h3 className="text-3xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {study.title}
                  </h3>

                  <p className="text-muted-foreground mb-4">{study.subtitle}</p>

                  <p className="text-muted-foreground mb-6">
                    {study.description}
                  </p>

                  <Button
                    asChild
                    variant="outline"
                    className="glass-glow hover:bg-primary/10 group-hover:glow-border transition-all"
                  >
                    <Link
                      to={`/services/case-studies/${study.id}`}
                      className="flex items-center"
                    >
                      Read More
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
