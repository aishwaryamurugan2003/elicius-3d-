import { motion } from "framer-motion";
import { Linkedin, Mail } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import Breadcrumb from "@/components/Breadcrumb";

const Team = () => {
  const team = [
    {
      name: "Dr. Arun Kumar",
      role: "Founder & CEO",
      bio: "PhD from IIT Madras, 15+ years in clean-tech R&D",
      linkedin: "#",
      email: "arun@eliciusenergy.com",
    },
    {
      name: "Priya Sharma",
      role: "CTO",
      bio: "Expert in IoT architecture and embedded systems",
      linkedin: "#",
      email: "priya@eliciusenergy.com",
    },
    {
      name: "Dr. Rajesh Patel",
      role: "Head of Research",
      bio: "Leading fuel cell and clean energy research",
      linkedin: "#",
      email: "rajesh@eliciusenergy.com",
    },
    {
      name: "Meera Reddy",
      role: "VP Engineering",
      bio: "Specialist in ML and data analytics platforms",
      linkedin: "#",
      email: "meera@eliciusenergy.com",
    },
  ];

  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-12">
        <Breadcrumb items={[{ label: "Team" }]} />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 glow-text">
            Our Team
          </h1>
          <p className="text-xl text-muted-foreground">
            Meet the innovators driving clean-tech excellence
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-glow rounded-2xl p-6 text-center hover-scale group"
            >
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-secondary mx-auto mb-4 flex items-center justify-center text-3xl font-bold text-background">
                {member.name.split(' ').map(n => n[0]).join('')}
              </div>
              
              <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">
                {member.name}
              </h3>
              <div className="text-sm text-primary mb-3">{member.role}</div>
              <p className="text-sm text-muted-foreground mb-4">{member.bio}</p>
              
              <div className="flex justify-center space-x-3">
                <a
                  href={member.linkedin}
                  className="w-10 h-10 rounded-lg glass-glow flex items-center justify-center hover-scale hover:bg-primary/10 transition-all"
                >
                  <Linkedin className="w-5 h-5 text-primary" />
                </a>
                <a
                  href={`mailto:${member.email}`}
                  className="w-10 h-10 rounded-lg glass-glow flex items-center justify-center hover-scale hover:bg-primary/10 transition-all"
                >
                  <Mail className="w-5 h-5 text-primary" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default Team;
