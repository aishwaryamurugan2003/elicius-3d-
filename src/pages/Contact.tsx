import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare, Linkedin, Twitter, Github } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import Breadcrumb from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const FloatingInput = ({ label, id, ...props }: any) => {
  const [focused, setFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);

  return (
    <div className="relative mb-8 group">
      <Input
        id={id}
        onFocus={() => setFocused(true)}
        onBlur={(e) => {
          setFocused(false);
          setHasValue(!!e.target.value);
        }}
        onChange={(e) => setHasValue(!!e.target.value)}
        className="h-14 px-4 pt-4 bg-background border-muted-foreground/20 focus:border-primary focus:ring-0 transition-all rounded-xl"
        {...props}
      />
      <label
        htmlFor={id}
        className={`absolute left-4 transition-all pointer-events-none ${focused || hasValue
          ? "top-1 text-[10px] font-bold text-primary"
          : "top-4 text-sm text-muted-foreground"
          }`}
      >
        {label}
      </label>
    </div>
  );
};

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "contact@eliciusenergy.in",
      link: "mailto:contact@eliciusenergy.in",
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+91 89398 90310",
      link: "tel:+918248834909",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "Gokul Arcade, 4th Floor No: 2, Sardar Patel Road, Adyar,Chennai, Tamil Nadu 600020",
      link: "https://www.google.com/maps/place/Gokul+Arcade+Complex/@13.0068951,80.248309,17z/data=!4m6!3m5!1s0x3a5267ec8c7b3c13:0x90c763c42e7001f2!8m2!3d13.0068899!4d80.2508839!16s%2Fg%2F11g01sc0tn?entry=ttu&g_ep=EgoyMDI2MDUyMC4wIKXMDSoASAFQAw%3D%3D",
    },
  ];

  return (
    <PageLayout>
      <section className="relative pt-32 pb-20 bg-background overflow-hidden min-h-screen">
        {/* Background blobs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />

        <div className="container-wide relative z-10">
          <Breadcrumb items={[{ label: "Contact Us" }]} />

          <div className="mt-16 flex flex-col xl:flex-row gap-20">

            {/* CONTACT INFO (2 Columns equivalent) */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              className="xl:w-[40%] flex flex-col"
            >
              <h1 className="text-5xl md:text-6xl font-black tracking-tight mb-8">
                Let’s Build Real-World <span className="text-primary italic">IoT Solutions </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-12 max-w-lg leading-relaxed text-balance">
                Have a question about our fuel cells or air quality monitors? Our technical team is ready to assist.
              </p>

              <div className="space-y-10 mb-12">
                {contactInfo.map((info) => (
                  <a
                    key={info.title}
                    href={info.link}
                    className="flex items-center gap-6 group"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-card shadow-xl shadow-black/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <info.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm uppercase tracking-widest text-foreground">
                        {info.title}
                      </h4>
                      <p className="text-lg text-muted-foreground font-medium group-hover:text-primary transition-colors">
                        {info.details}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="mt-auto">
                <h4 className="font-bold text-sm uppercase tracking-widest text-muted-foreground mb-6">
                  Follow Our Journey
                </h4>
                <div className="flex gap-4">
                  {[Linkedin, Twitter, Github].map((Icon, i) => (
                    <button key={i} className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all">
                      <Icon className="w-5 h-5" />
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* CONTACT FORM (3 Columns equivalent) */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              className="xl:w-[60%]"
            >
              <Card className="border-0 shadow-2xl shadow-black/5 rounded-[40px] overflow-hidden bg-card/80 backdrop-blur-xl">
                <div className="p-10 md:p-16">
                  <AnimatePresence mode="wait">
                    {!isSuccess ? (
                      <motion.form
                        key="form"
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0, y: -20 }}
                        onSubmit={handleSubmit}
                      >
                        <div className="grid md:grid-cols-2 gap-x-8">
                          <FloatingInput label="Full Name" id="name" required />
                          <FloatingInput label="Email Address" id="email" type="email" required />
                          <FloatingInput label="Company" id="company" required />
                          <FloatingInput label="Subject" id="subject" required />
                        </div>

                        <div className="relative mb-10 group">
                          <Textarea
                            id="message"
                            placeholder="How can we help?"
                            className="min-h-[160px] p-6 bg-background border-muted-foreground/20 focus:border-primary focus:ring-0 transition-all rounded-2xl resize-none"
                            required
                          />
                        </div>

                        <Button
                          type="submit"
                          size="lg"
                          className="w-full h-16 rounded-2xl text-lg font-bold shadow-lg shadow-primary/20"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            <div className="flex items-center gap-2">
                              <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1 }} className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full" />
                              Sending Message...
                            </div>
                          ) : (
                            <div className="flex items-center gap-2">
                              Send Message
                              <Send className="w-5 h-5" />
                            </div>
                          )}
                        </Button>
                      </motion.form>
                    ) : (
                      <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="flex flex-col items-center text-center py-10"
                      >
                        <div className="relative mb-10">
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1.2 }}
                            className="absolute inset-0 bg-primary/10 rounded-full blur-2xl"
                          />
                          <motion.div
                            initial={{ scale: 0, rotate: -45 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{ type: "spring", damping: 10, stiffness: 100 }}
                            className="w-32 h-32 rounded-full bg-primary flex items-center justify-center text-white relative z-10"
                          >
                            <CheckCircle2 className="w-16 h-16" />
                          </motion.div>
                        </div>
                        <h2 className="text-3xl font-bold mb-4 text-foreground">Message Received!</h2>
                        <p className="text-muted-foreground max-w-sm mb-10 leading-relaxed">
                          Thank you for reaching out. A specialist from our engineering team will get back to you within 24 hours.
                        </p>
                        <Button
                          variant="outline"
                          className="h-12 px-8 rounded-xl font-bold"
                          onClick={() => setIsSuccess(false)}
                        >
                          Send another message
                        </Button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Contact;
