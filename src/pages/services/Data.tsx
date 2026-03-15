import { motion } from "framer-motion";
import { Database, Activity, Download } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import Breadcrumb from "@/components/Breadcrumb";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

const Data = () => {
  const dataServices = [
  {
    icon: Database,
    title: "IoT Training MSME",
    description:
      "Industry-oriented IoT training designed to help MSMEs adopt smart technologies, automation, and connected systems for business growth.",
    details: [
      "Introduction to IoT architecture & components",
      "Hands-on sensor & microcontroller training",
      "Smart automation for small industries",
      "Deployment & maintenance best practices",
    ],
  },
  {
    icon: Activity,
    title: "Agricultural IoT Training",
    description:
      "Specialized IoT training focused on smart agriculture solutions to improve crop monitoring, irrigation efficiency, and farm productivity(this content done by me).",
    details: [
      "Smart irrigation & soil monitoring systems",
      "Weather & environmental sensing solutions",
      "Remote monitoring using IoT dashboards",
      "Data-driven decision making for farmers",
    ],
  },
  {
    icon: Download,
    title: "IoT Training for Leaders",
    description:
      "Strategic IoT awareness program for business leaders and decision-makers to understand digital transformation and smart technology adoption.",
    details: [
      "IoT strategy & digital transformation roadmap",
      "Cost-benefit & ROI analysis",
      "Use-case identification for industries",
      "Technology adoption & scaling strategy",
    ],
  },
];

  return (
    <PageLayout>
      <section className="section">
        <div className="container-wide">
          <Breadcrumb
            items={[
              { label: "Services", path: "/services" },
              { label: "Data Services" },
            ]}
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center mt-12"
          >
            <h1 className="heading heading-accent">
              IoT TRAINING
            </h1>
            <p className="subtext mt-6">
  Practical IoT training covering real-world applications,
  smart agriculture solutions, and industry-ready implementation
  for MSMEs and emerging tech professionals.
</p>
          </motion.div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
            {dataServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full">

                  <CardHeader>
                    <div className="icon-badge mb-4">
                      <service.icon className="w-6 h-6" />
                    </div>

                    <CardTitle className="text-2xl font-semibold">
                      {service.title}
                    </CardTitle>

                    {/* Increased description size */}
                    <CardDescription className="leading-relaxed text-[15px] md:text-[16px]">
                      {service.description}
                    </CardDescription>
                  </CardHeader>

                  {/* Increased card body text */}
                  <div className="px-6 pb-6 text-[15px] md:text-[16px] leading-relaxed">
                    <ul className="space-y-2">
                      {service.details.map((detail) => (
                        <li
                          key={detail}
                          className="flex items-start text-muted-foreground"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mr-3 mt-2" />
                          {detail}
                        </li>
                      ))}
                    </ul>
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

export default Data;
