import { motion } from "framer-motion";
import {
  Settings,
  Users,
  GraduationCap,
  HeadphonesIcon,
} from "lucide-react";
import PageLayout from "@/components/PageLayout";
import Breadcrumb from "@/components/Breadcrumb";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

const Service = () => {
  const services = [
    {
      icon: Settings,
      title: "Installation & Setup",
      description:
        "Professional installation and configuration of devices and software systems.",
      details: [
        "On-site installation",
        "Network configuration",
        "System calibration",
        "Integration testing",
      ],
    },
    {
      icon: HeadphonesIcon,
      title: "24/7 Technical Support",
      description:
        "Reliable round-the-clock support to ensure uninterrupted operations.",
      details: [
        "Phone & email support",
        "Remote diagnostics",
        "Emergency response",
        "Preventive maintenance",
      ],
    },
    {
      icon: GraduationCap,
      title: "Training Programs",
      description:
        "Structured training programs to empower your technical and operational teams.",
      details: [
        "User onboarding sessions",
        "Administrator workshops",
        "Hands-on demonstrations",
        "Detailed documentation",
      ],
    },
    {
      icon: Users,
      title: "Consulting Services",
      description:
        "Expert guidance for designing, deploying, and scaling monitoring systems.",
      details: [
        "System architecture design",
        "Deployment planning",
        "Data strategy & analytics",
        "Regulatory & compliance support",
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
              { label: "Consultancy Services" },
            ]}
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center mt-12"
          >
            <h1 className="heading heading-accent">
              Services & Support
            </h1>
            <p className="subtext mt-6">
              End-to-end services and expert support to ensure reliable,
              scalable, and long-term success.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= SERVICES GRID ================= */}
      <section className="section section-muted">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
            {services.map((service, index) => (
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

export default Service;
