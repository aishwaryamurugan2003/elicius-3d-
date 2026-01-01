import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import Breadcrumb from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

import { caseStudies } from "@/data/caseStudies";

const CaseStudies = () => {
  return (
    <PageLayout>
      <section className="section">
        <div className="container-wide">
          <Breadcrumb
            items={[
              { label: "Services", path: "/services" },
              { label: "Case Studies" },
            ]}
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center mt-12"
          >
            <h1 className="heading heading-accent">
              Case Studies
            </h1>
            <p className="subtext mt-6">
              Real-world deployments demonstrating measurable impact,
              reliability, and scalable clean-tech solutions.
            </p>
          </motion.div>
        </div>
      </section>
      <section className="section section-muted">
        <div className="container-wide">
          <div className="space-y-12 max-w-6xl mx-auto">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="overflow-hidden">
                  <div className="grid md:grid-cols-2 gap-10 items-center">
                    
                    {/* IMAGE */}
                    <div className="h-full">
                      <img
                        src={study.image}
                        alt={study.title}
                        className="w-full h-64 md:h-full object-cover"
                      />
                    </div>

                    {/* CONTENT */}
                    <div className="p-8">
                      <CardHeader className="p-0 mb-4">
                        <CardTitle className="text-2xl">
                          {study.title}
                        </CardTitle>
                        <CardDescription>
                          {study.subtitle}
                        </CardDescription>
                      </CardHeader>

                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {study.description}
                      </p>

                      <Button asChild variant="outline">
                        <Link
                          to={`/services/case-studies/${study.id}`}
                          className="inline-flex items-center"
                        >
                          Read Case Study
                        </Link>
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default CaseStudies;
