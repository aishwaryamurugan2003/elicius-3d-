import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import Breadcrumb from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    interest: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formDataObj = new FormData();
    Object.entries(formData).forEach(([key, value]) =>
      formDataObj.append(key, value)
    );

    try {
      const response = await fetch("http://127.0.0.1:8000/contact/", {
        method: "POST",
        body: formDataObj,
      });

      const data = await response.json();

      if (data.status === "success") {
        toast.success("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          interest: "",
          message: "",
        });
      } else {
        toast.error(data.message || "Submission failed");
      }
    } catch (error) {
      toast.error("Could not connect to backend");
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      description:
        "First Floor, E-Block, IIT Madras Research Park, Tharamani, Chennai – 600113",
    },
    {
      icon: Phone,
      title: "Call Us",
      description: "+91 8939890310 (9:00 AM – 8:00 PM)",
    },
    {
      icon: Mail,
      title: "Email Us",
      description: "admin@eliciusenergy.in",
    },
  ];

  return (
    <PageLayout>

      {/* ================= HEADER ================= */}
      <section className="section">
        <div className="container-wide">
          <Breadcrumb items={[{ label: "Contact" }]} />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center mt-12"
          >
            <h1 className="heading heading-accent">Contact Us</h1>
            <p className="subtext mt-6">
              Reach out to discuss clean-energy innovation, air-quality
              monitoring, or collaborative research opportunities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= CONTACT INFO ================= */}
      <section className="section section-muted">
        <div className="container-wide">
          <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="text-center h-full">
                  <CardHeader>
                    <div className="icon-badge mx-auto mb-4">
                      <info.icon className="w-6 h-6" />
                    </div>
                    <CardTitle>{info.title}</CardTitle>
                    <CardDescription>{info.description}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CONTACT FORM ================= */}
      <section className="section">
        <div className="container-wide max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader className="text-center">
                <CardTitle>Send Us a Message</CardTitle>
                <CardDescription>
                  Tell us about your project or inquiry
                </CardDescription>
              </CardHeader>

              <form onSubmit={handleSubmit}>
                <div className="px-6 space-y-6">

                  <div className="grid md:grid-cols-2 gap-6">
                    <Input
                      required
                      placeholder="Name *"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                    />
                    <Input
                      required
                      type="email"
                      placeholder="Email *"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <Input
                      placeholder="Phone"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                    />
                    <Input
                      placeholder="Company / Organisation"
                      value={formData.company}
                      onChange={(e) =>
                        setFormData({ ...formData, company: e.target.value })
                      }
                    />
                  </div>

                  <Select
                    value={formData.interest}
                    onValueChange={(value) =>
                      setFormData({ ...formData, interest: value })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Area of Interest *" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Air Quality Monitoring">
                        Air Quality Monitoring
                      </SelectItem>
                      <SelectItem value="Fuel Cell Technology">
                        Fuel Cell Technology
                      </SelectItem>
                      <SelectItem value="Electrochemical Modelling">
                        Electrochemical Modelling & Simulation
                      </SelectItem>
                      <SelectItem value="IoT Consulting">
                        IoT & Data Consulting
                      </SelectItem>
                      <SelectItem value="Research Collaboration">
                        Research Collaboration
                      </SelectItem>
                    </SelectContent>
                  </Select>

                  <Textarea
                    required
                    rows={5}
                    placeholder="Your message *"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                  />
                </div>

                <CardFooter className="pt-8">
                  <Button type="submit" size="lg" className="w-full">
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </CardFooter>
              </form>
            </Card>
          </motion.div>
        </div>
      </section>

    </PageLayout>
  );
};

export default Contact;
