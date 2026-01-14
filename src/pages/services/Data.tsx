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
      title: "Cloud Storage Solutions",
      description:
        "Secure and scalable cloud infrastructure for environmental and sensor data.",
      details: [
        "Secure cloud architecture",
        "High availability & redundancy",
        "Scalable storage solutions",
        "Compliance-ready systems",
      ],
    },
    {
      icon: Activity,
      title: "Real-time Analytics",
      description:
        "Instant processing and intelligent analysis of incoming sensor data.",
      details: [
        "Live data processing",
        "Trend & anomaly detection",
        "Actionable insights",
        "Decision-support dashboards",
      ],
    },
    {
      icon: Download,
      title: "Data Export & Integration",
      description:
        "Flexible access and export options for reporting and system integration.",
      details: [
        "Multiple export formats",
        "Scheduled data exports",
        "API-based access",
        "Third-party system integration",
      ],
    },
  ];

  return (
    <PageLayout>
      {/* ================= HEADER ================= */}
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
              Data Services
            </h1>
            <p className="subtext mt-6">
              Reliable data infrastructure and analytics for air quality and
              environmental intelligence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= DATA SERVICES GRID ================= */}
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
