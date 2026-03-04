import { motion } from "framer-motion";
import { Linkedin, Mail } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import Breadcrumb from "@/components/Breadcrumb";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";

const Team = () => {
  const team = [
    {
      name: "Prof. Raghunathan Rengaswamy",
      role: "Founder",
      linkedin: "#",
      email: "arun@eliciusenergy.com",
    },
    {
      name: "Sreejith C",
      role: "Core Team Member",
      linkedin: "#",
      email: "priya@eliciusenergy.com",
    },
    // {
    //   name: "Shijoy Thomas",
    //   role: "Core Team Member",
    //   linkedin: "#",
    //   email: "rajesh@eliciusenergy.com",
    // },
  ];

  return (
    <PageLayout>

      {/* ================= HEADER ================= */}
      <section className="section">
        <div className="container-wide">
          <Breadcrumb items={[{ label: "Team" }]} />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center mt-12"
          >
            <h1 className="heading heading-accent">
              Our Team
            </h1>
            <p className="subtext mt-6">
              A multidisciplinary team driving innovation in clean energy,
              air-quality intelligence, and data-driven engineering.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= TEAM GRID ================= */}
      <section className="section section-muted">
        <div className="container-wide">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full flex flex-col text-center">
                  <CardHeader className="items-center">
                    {/* INITIAL AVATAR */}
                    <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center text-xl font-semibold mb-4">
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>

                    <CardTitle>{member.name}</CardTitle>
                    <CardDescription>{member.role}</CardDescription>
                  </CardHeader>

                  <CardFooter className="mt-auto flex justify-center gap-4 pb-6">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-md border hover:bg-muted transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>

                    <a
                      href={`mailto:${member.email}`}
                      className="p-2 rounded-md border hover:bg-muted transition-colors"
                      aria-label="Email"
                    >
                      <Mail className="w-5 h-5" />
                    </a>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </PageLayout>
  );
};

export default Team;
