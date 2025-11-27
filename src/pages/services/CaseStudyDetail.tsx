// src/pages/CaseStudyDetail.tsx

import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  DollarSign,
  Car,
  BarChart3,
  Search,
  Globe2,
} from "lucide-react";

import PageLayout from "@/components/PageLayout";
import Breadcrumb from "@/components/Breadcrumb";
import { caseStudies } from "@/data/caseStudies";

const CaseStudyDetail = () => {
  const { caseStudyId } = useParams();
  const caseStudy = caseStudies.find((cs) => cs.id === caseStudyId);

  if (!caseStudy) {
    return (
      <PageLayout>
        <div className="container mx-auto px-4 py-24 text-center">
          <h1 className="text-3xl font-bold glow-text mb-4">
            Case Study Not Found
          </h1>
          <Link to="/services/case-studies" className="text-primary underline">
            Go Back
          </Link>
        </div>
      </PageLayout>
    );
  }

  const problemStatements = [
    { title: "Awareness", text: "We know surprisingly little about our surroundings." },
    { title: "Spatial Variation", text: "Ambient air quality can vary drastically between locations that are barely a few hundred meters apart." },
    { title: "Life Expectancy", text: "Millions of people die prematurely every year due to outdoor air pollution." },
    { title: "Quality of Life", text: "Respiratory issues are acquired over time and significantly impact wellbeing." },
    { title: "Expensive", text: "Existing air quality monitoring networks are sparse and prohibitively expensive to expand." },
  ];

  const components = [
    "Satellite Remote Sensing",
    "Agent based models",
    "IoT | Sensor Network",
  ];

  const localityBullets =
    caseStudy.id === "case-study-b"
      ? ["Diurnal spatio-temporal hotspot identification", "25 Km route", "100 Locations", ">30 days"]
      : [caseStudy.overview, caseStudy.challenge, caseStudy.solution];

  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-12">

        <Breadcrumb
          items={[
            { label: "Services", path: "/services" },
            { label: "Case Studies", path: "/services/case-studies" },
            { label: caseStudy.title },
          ]}
        />

        <Link
          to="/services/case-studies"
          className="inline-flex items-center text-primary hover:underline mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Case Studies
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-6xl mx-auto"
        >
          {/* HERO */}
          <section className="mb-16">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <div className="inline-block px-4 py-2 glass-glow rounded-full text-xs font-medium mb-4 uppercase tracking-[0.2em]">
                  {caseStudy.category}
                </div>
                <p className="text-sm text-muted-foreground mb-2">{caseStudy.subtitle}</p>
                <h1 className="text-4xl md:text-5xl font-bold mb-4 glow-text leading-tight">
                  {caseStudy.title}
                </h1>
                <p className="text-lg text-muted-foreground">{caseStudy.description}</p>
              </div>

              <div className="relative">
                <div className="absolute -inset-4 rounded-3xl bg-primary/20 blur-3xl opacity-70" />
                <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                  <img src={caseStudy.image} alt={caseStudy.title} className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </section>

          {/* PROBLEM STATEMENT */}
          <section className="mb-20">
            <h2 className="text-3xl font-semibold mb-10">Problem Statement</h2>

            <div className="grid md:grid-cols-[220px,1fr] gap-10">

              <div className="hidden md:flex flex-col justify-between py-4">
                {problemStatements.map((item, idx) => (
                  <p key={idx} className="mb-10 last:mb-0 font-semibold uppercase tracking-wide text-sm">
                    {item.title}
                  </p>
                ))}
              </div>

              {/* TIMELINE WITHOUT DOT */}
              <div className="relative pl-12">
                <div className="absolute left-2 top-0 bottom-0 w-[2px] bg-emerald-400" />

                <div className="space-y-10">
                  {problemStatements.map((item, idx) => (
                    <div key={idx} className="relative">
                      <div className="md:hidden uppercase font-semibold text-xs mb-1">{item.title}</div>
                      <p className="text-muted-foreground">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </section>

          {/* COMPONENTS */}
          <section className="mb-20">
            <h2 className="text-3xl font-semibold text-center mb-10">Components of Proposed Solution</h2>

            <div className="relative max-w-4xl mx-auto pt-16 pb-10">
              <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-10 w-[2px] bg-emerald-400" />
              <div className="absolute left-1/2 -translate-x-1/2 top-0 -mt-6 bg-background px-4">
                <p className="font-semibold text-center">Big Data and Data Science</p>
              </div>

              <div className="mt-16 border-t-2 border-emerald-400 flex justify-between pt-10">
                {components.map((label, idx) => (
                  <div key={idx} className="relative flex-1 flex flex-col items-center">
                    <div className="absolute -top-10 w-[2px] h-10 bg-emerald-400" />
                    <p className="text-center">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CASE STUDY – LOCALITY */}
          <section className="mb-20">
            <h2 className="text-3xl font-semibold mb-8">Case Study – A Locality in Chennai</h2>

            <div className="grid md:grid-cols-2 gap-12 glass-glow rounded-2xl p-10">
              <div className="space-y-5">
                {localityBullets.map((text, idx) =>
                  text ? <p key={idx} className="text-muted-foreground text-base">• {text}</p> : null
                )}
              </div>

              <div className="text-muted-foreground">
                <p className="mb-4">Data collected over 30 days...</p>
                <p>Heat maps depicting spatio-temporal variation...</p>
              </div>
            </div>
          </section>

          {/* CASE STUDY 1 MAP */}
          <section className="mb-20">
            <h2 className="text-3xl font-semibold mb-8">Case Study 1</h2>

            <div className="grid md:grid-cols-2 gap-10 items-start">
              <div className="space-y-3 text-base text-muted-foreground">
                <p>• Short-lived extreme event analysis</p>
                <p>• Area 1: Commercial + middle / lower-middle class zones</p>
                <p>• Area 2: Industrial + residential workshops</p>
                <p>• Area 3: Upper-class residential</p>
                <p>• Area 4: Institutional area</p>
              </div>

              <div className="rounded-2xl overflow-hidden border border-white/10">
                <img src={caseStudy.caseStudyMap} alt="Case Study Map" className="w-full h-full object-cover" />
              </div>
            </div>
          </section>

          {/* RESULTS SECTION – IMAGES ONLY FOR CASE A */}
         {/* RESULTS SECTION – TITLE + IMAGES ONLY FOR CASE A */}
<section className="mb-20">

  {caseStudy.id !== "case-study-b" && (
    <>
      <h2 className="text-3xl font-semibold mb-10">
        Results of Case Study 1
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
        {caseStudy.resultImages.map((img, idx) => (
          <div
            key={idx}
            className="rounded-xl overflow-hidden border border-white/10 bg-zinc-900/40"
          >
            <img
              src={img}
              alt={`result-${idx + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </>
  )}

</section>

        </motion.div>
      </div>
    </PageLayout>
  );
};

export default CaseStudyDetail;
