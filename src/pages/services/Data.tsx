import { motion, AnimatePresence } from "framer-motion";
import { Database, Activity, Download, MapPin, Users, Calendar, ChevronLeft, ChevronRight, X } from "lucide-react";
import { useState } from "react";
import PageLayout from "@/components/PageLayout";
import Breadcrumb from "@/components/Breadcrumb";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

// ─── Training image imports ───────────────────────────────────────────────────
import cbrImg1 from "@/assets/Training/image1.jpg";
import cbrImg2 from "@/assets/Training/image2.jpg";
import cbrImg3 from "@/assets/Training/image3.jpg";
import cbrImg4 from "@/assets/Training/image4.jpg";
import cbrImg5 from "@/assets/Training/image5.jpg";
import puneImg1 from "@/assets/Training/imagepune1.jpg";
import puneImg2 from "@/assets/Training/imagepune2.jpg";
import puneImg3 from "@/assets/Training/imagepune3.jpg";
import puneImg4 from "@/assets/Training/imagepune4.jpg";
import puneImg5 from "@/assets/Training/imagepune5.jpg";
import puneImg6 from "@/assets/Training/imagepune6.jpg";

// ─── Types ────────────────────────────────────────────────────────────────────

interface GalleryImage {
  src: string;
  caption: string;
}

interface TrainingLocation {
  city: string;
  state: string;
  date: string;
  participants: string;
  highlight: string;
  description: string;
  images: GalleryImage[];
}

// ─── Service data ─────────────────────────────────────────────────────────────

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
      "Specialized IoT training focused on smart agriculture solutions to improve crop monitoring, irrigation efficiency, and farm productivity.",
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

// ─── Training locations ───────────────────────────────────────────────────────

const trainingLocations: TrainingLocation[] = [
  {
    city: "Coimbatore",
    state: "Tamil Nadu",
    date: "March 7, 2026",
    participants: "50+",
    highlight: "MSME IoT Hands-on Workshop",
    description:
      "A full-day intensive IoT training conducted for MSME entrepreneurs and industry professionals, covering sensor integration, IoT dashboards, and live hardware demonstrations.",
    images: [
      { src: cbrImg1, caption: "Full house — participants engaged in the morning session" },
      { src: cbrImg2, caption: "Hands-on hardware assembly with IoT sensors & motors" },
      { src: cbrImg3, caption: "Live monitoring session — participants working on laptops" },
      { src: cbrImg4, caption: "Group photo with all 40+ participants and trainers" },
      { src: cbrImg5, caption: "Closing session — Ramwin team with attendees" },
    ],
  },
  {
    city: "Pune",
    state: "Maharashtra",
    date: "March 26 2026",
    participants: "40+",
    highlight: "Industrial IoT for MSMEs",
    description:
      "Our upcoming Pune session will bring the same hands-on IoT training experience to Maharashtra's thriving MSME and manufacturing ecosystem.",
    images: [
      { src: puneImg1, caption: "" },
      { src: puneImg2, caption: "" },
      { src: puneImg3, caption: "" },
      { src: puneImg4, caption: "" },
      { src: puneImg5, caption: "" },
      { src: puneImg6, caption: "" },
    ],
  },
];

// ─── Lightbox ─────────────────────────────────────────────────────────────────

interface LightboxProps {
  images: GalleryImage[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

function Lightbox({ images, currentIndex, onClose, onPrev, onNext }: LightboxProps) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm px-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.92, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.92, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 28 }}
          className="relative max-w-4xl w-full"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute -top-10 right-0 text-white/70 hover:text-white transition-colors"
          >
            <X className="w-7 h-7" />
          </button>

          <img
            src={images[currentIndex].src}
            alt={images[currentIndex].caption}
            className="w-full max-h-[75vh] object-contain rounded-xl shadow-2xl"
          />

          <p className="text-center text-white/80 text-sm mt-4 px-4">
            {images[currentIndex].caption}
          </p>

          {images.length > 1 && (
            <>
              <button
                onClick={onPrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white rounded-full p-2 transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={onNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white rounded-full p-2 transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              <div className="flex justify-center gap-2 mt-3">
                {images.map((_, i) => (
                  <span
                    key={i}
                    className={`w-2 h-2 rounded-full transition-colors ${i === currentIndex ? "bg-white" : "bg-white/30"
                      }`}
                  />
                ))}
              </div>
            </>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

// ─── Location Gallery ─────────────────────────────────────────────────────────

function LocationGallery({ images }: { images: GalleryImage[] }) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  if (images.length === 0) return null;

  const open = (i: number) => setLightboxIndex(i);
  const close = () => setLightboxIndex(null);
  const prev = () => setLightboxIndex((i) => (i! - 1 + images.length) % images.length);
  const next = () => setLightboxIndex((i) => (i! + 1) % images.length);

  const [hero, ...rest] = images;

  return (
    <>
      <div className="mt-6 space-y-3">
        <motion.div
          whileHover={{ scale: 1.01 }}
          className="cursor-zoom-in overflow-hidden rounded-xl"
          onClick={() => open(0)}
        >
          <img
            src={hero.src}
            alt={hero.caption}
            className="w-full h-72 md:h-[420px] object-cover object-top transition-transform duration-500 hover:scale-105"
          />
        </motion.div>

        {rest.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-3">
            {rest.map((img, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.03 }}
                className="cursor-zoom-in overflow-hidden rounded-lg"
                onClick={() => open(i + 1)}
              >
                <img
                  src={img.src}
                  alt={img.caption}
                  className="w-full h-36 md:h-44 object-cover object-center transition-transform duration-500 hover:scale-110"
                />
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          images={images}
          currentIndex={lightboxIndex}
          onClose={close}
          onPrev={prev}
          onNext={next}
        />
      )}
    </>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────

const Data = () => {
  return (
    <PageLayout>

      {/* Hero */}
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
            <h1 className="heading heading-accent">IoT TRAINING</h1>
            <p className="subtext mt-6">
              Practical IoT training covering real-world applications, smart
              agriculture solutions, and industry-ready implementation for MSMEs
              and emerging tech professionals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service Cards */}
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
                    <CardDescription className="leading-relaxed text-[15px] md:text-[16px]">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
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

      {/* Our Trainings */}
      <section className="section">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center mb-14"
          >
            <h2 className="heading">Our Trainings</h2>
            <p className="subtext mt-4">
              We've conducted hands-on IoT workshops across India, empowering
              industry professionals, MSME owners, and tech enthusiasts with
              practical knowledge and real-world experience.
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto space-y-16">
            {trainingLocations.map((location, index) => (
              <motion.div
                key={location.city}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="overflow-hidden">
                  <div className="p-6 md:p-8">

                    {/* Location header */}
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <div className="flex items-center gap-2 text-primary mb-1">
                          <MapPin className="w-4 h-4" />
                          <span className="text-sm font-medium uppercase tracking-wider">
                            {location.state}
                          </span>
                        </div>
                        <h3 className="text-3xl font-bold">{location.city}</h3>
                        <p className="text-primary font-medium mt-1">
                          {location.highlight}
                        </p>
                      </div>

                      <div className="flex gap-4 flex-wrap">
                        <div className="flex items-center gap-2 bg-muted rounded-lg px-4 py-2">
                          <Calendar className="w-4 h-4 text-muted-foreground" />
                          <span className="text-sm font-medium">{location.date}</span>
                        </div>
                        {location.participants && (
                          <div className="flex items-center gap-2 bg-muted rounded-lg px-4 py-2">
                            <Users className="w-4 h-4 text-muted-foreground" />
                            <span className="text-sm font-medium">
                              {location.participants} Participants
                            </span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground text-[15px] leading-relaxed max-w-3xl">
                      {location.description}
                    </p>

                    {/* Gallery or placeholder */}
                    {location.images.length > 0 ? (
                      <LocationGallery images={location.images} />
                    ) : (
                      <div className="mt-6 rounded-xl border-2 border-dashed border-muted-foreground/20 py-14 text-center">
                        <p className="text-muted-foreground text-sm">
                          Photos & highlights coming soon
                        </p>
                      </div>
                    )}
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