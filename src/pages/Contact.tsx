import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import Breadcrumb from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  const formDataObj = new FormData();
  formDataObj.append("name", formData.name);
  formDataObj.append("email", formData.email);
  formDataObj.append("phone", formData.phone);
  formDataObj.append("company", formData.company);
  formDataObj.append("message", formData.message);

  try {
    const response = await fetch("http://127.0.0.1:8000/contact/", {
      method: "POST",
      body: formDataObj,
    });

    const data = await response.json();
    console.log("Backend response:", data); // <-- IMPORTANT

    if (data.status === "success") {
      toast.success("Message sent successfully!");

      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
      });
    } else {
      toast.error("Failed: " + data.message);
    }
  } catch (err) {
    console.error("Fetch error:", err);
    toast.error("Could not connect to backend.");
  }
};

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["IIT Madras Research Park", "Chennai, Tamil Nadu 600113", "India"],
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+91 123 456 7890", "+91 098 765 4321", "Mon-Fri, 9AM-6PM IST"],
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@eliciusenergy.com", "support@eliciusenergy.com", "sales@eliciusenergy.com"],
    },
  ];

  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-12">
        <Breadcrumb items={[{ label: "Contact Us" }]} />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 glow-text">
            Get in Touch
          </h1>
          <p className="text-xl text-muted-foreground">
            Let's discuss how we can help transform your clean energy strategy
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-glow rounded-2xl p-6 text-center hover-scale"
            >
              <info.icon className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">{info.title}</h3>
              {info.details.map((detail, i) => (
                <p key={i} className="text-sm text-muted-foreground">
                  {detail}
                </p>
              ))}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto glass-glow rounded-3xl p-8"
        >
          <h2 className="text-3xl font-bold mb-6 text-center glow-text">
            Send Us a Message
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Name *</label>
                <Input
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your name"
                  className="glass-glow"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email *</label>
                <Input
                  required
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your@email.com"
                  className="glass-glow"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Phone</label>
                <Input
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+91 1234567890"
                  className="glass-glow"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Company</label>
                <Input
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  placeholder="Company name"
                  className="glass-glow"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Message *</label>
              <Textarea
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Tell us about your project..."
                rows={6}
                className="glass-glow"
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full bg-gradient-to-r from-primary to-secondary text-background hover:shadow-glow transition-all duration-300"
            >
              <Send className="mr-2 w-5 h-5" />
              Send Message
            </Button>
          </form>
        </motion.div>
      </div>
    </PageLayout>
  );
};

export default Contact;
