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
const IconCircle = ({ children }: { children: React.ReactNode }) => (
  <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center">
    {children}
  </div>
);
type CurvedArrowProps = {
  direction?: "up" | "down";
};

const CurvedArrow = ({ direction = "up" }: CurvedArrowProps) => (
  <svg
    width="120"
    height="70"
    viewBox="0 0 120 70"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`text-foreground ${
      direction === "up"
        ? "-translate-y-8"
        : "translate-y-8 scale-y-[-1]"
    }`}
  >
    <defs>
      <linearGradient id="flow-gradient" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="currentColor" stopOpacity="0.2" />
        <stop offset="50%" stopColor="currentColor" stopOpacity="1" />
        <stop offset="100%" stopColor="currentColor" stopOpacity="0.2" />

        <animate
          attributeName="x1"
          from="-120"
          to="120"
          dur="1.4s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="x2"
          from="0"
          to="240"
          dur="1.4s"
          repeatCount="indefinite"
        />
      </linearGradient>
    </defs>

    {/* Curve */}
    <path
      d="M10 55 C50 5, 70 5, 110 55"
      stroke="url(#flow-gradient)"
      strokeWidth="2.5"
      fill="none"
      strokeLinecap="round"
    />

    {/* Arrow head */}
    <path
      d="M102 48 L110 55 L100 58"
      stroke="currentColor"
      strokeWidth="2.5"
      fill="none"
      strokeLinecap="round"
    />
  </svg>
);
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
  <h2 className="text-3xl font-semibold text-center mb-10">
    Components of Proposed Solution
  </h2>

  <div className="relative max-w-4xl mx-auto h-[260px]">

    {/* Big Data label */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-background px-4 z-10">
      <p className="font-semibold text-center">
        Big Data and Data Science
      </p>
    </div>

    {/* Top vertical line */}
    <div className="absolute top-[32px] left-1/2 -translate-x-1/2 h-[90px] w-[2px] bg-emerald-400" />

    {/* Horizontal line */}
    <div className="absolute top-[122px] left-0 right-0 h-[2px] bg-emerald-400" />

    {/* LEFT vertical */}
    <div className="absolute top-[122px] left-0 h-[32px] w-[2px] bg-emerald-400" />

    {/* CENTER vertical */}
    <div className="absolute top-[122px] left-1/2 -translate-x-1/2 h-[32px] w-[2px] bg-emerald-400" />

    {/* RIGHT vertical */}
    <div className="absolute top-[122px] right-0 h-[32px] w-[2px] bg-emerald-400" />

   {/* Labels */}
<div className="absolute top-[160px] left-0 right-0">

  {/* LEFT label */}
  <div className="absolute left-0 -translate-x-1/2 w-[220px] text-center">
    Satellite Remote Sensing
  </div>

  {/* CENTER label */}
  <div className="absolute left-1/2 -translate-x-1/2 w-[220px] text-center">
    Agent based models
  </div>

  {/* RIGHT label */}
  <div className="absolute right-0 translate-x-1/2 w-[220px] text-center">
    IoT | Sensor Network
  </div>

</div>


  </div>
</section>
{/* SCHEMATIC OF SOLUTION */}
<section className="mb-28">
  <h2 className="text-3xl font-semibold mb-12">
    Schematic of Solution
  </h2>

  <div className="relative overflow-x-auto">
  <div className="flex items-center gap-10 min-w-[900px] mx-auto">


    {/* STEP 1 */}
    <div className="relative">
      <IconCircle><DollarSign /></IconCircle>
    </div>

    <div className="relative w-[90px]">
      <CurvedArrow direction="up" />
    </div>

    {/* STEP 2 */}
    <div className="relative">
      <IconCircle><Car /></IconCircle>
    </div>

    <div className="relative w-[90px]">
      <CurvedArrow direction="down" />
    </div>

    {/* STEP 3 */}
    <div className="relative">
      <IconCircle><BarChart3 /></IconCircle>
    </div>

    <div className="relative w-[90px]">
      <CurvedArrow direction="up" />
    </div>

    {/* STEP 4 */}
    <div className="relative">
      <IconCircle><Search /></IconCircle>
    </div>

    <div className="relative w-[90px]">
      <CurvedArrow direction="down" />
    </div>

    {/* STEP 5 */}
    <div className="relative">
      <IconCircle><Globe2 /></IconCircle>
    </div>
</div>
  </div>
</section>


{/* CASE STUDY – LOCALITY */}
<section className="mb-24">

  <h2 className="text-3xl font-semibold mb-12">
    Case Study – A Locality in Chennai
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-[1fr,80px,1fr] items-center gap-10">

    {/* LEFT CONTENT */}
    <div className="space-y-6 text-muted-foreground text-base leading-relaxed">
      <p>
        • A pilot study was run in a specific locality in Chennai with one mobile
        device fitted on a van.
      </p>

      <p>
        • The route was chosen such that the vehicle would travel roughly 30
        kilometers in each trip covering an effective area of roughly 15 sq. km
        (5 x 3 km).
      </p>

      <p>
        • Multiple land use profiles were covered.
      </p>

      <p>
        • Data collected over 30 days of study was condensed into a 24-hour
        frame for analysis.
      </p>
    </div>

    {/* ARROW */}
    <div className="flex justify-center">
      <span className="text-emerald-400 text-4xl font-bold">→</span>
    </div>

    {/* RIGHT CONTENT */}
    <div className="text-muted-foreground text-base leading-relaxed">
      <p>
        Heat maps depicting spatio-temporal variation across a single day are
        available with the presenter. On account of the content being under
        review, it is not shared in this presentation. Please reach out for
        further discussion.
      </p>
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
{/* FURTHER CASE STUDY REFERENCE */}
<section className="mb-24 mt-10">
  <div className="max-w-4xl mx-auto text-center space-y-6">

    <p className="text-lg font-medium">
      For Further Case Study Reference, click the link below
    </p>

    <a
      href="https://www.sciencedirect.com/science/article/pii/S0360132322008277"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block text-primary underline underline-offset-4 hover:opacity-80 transition"
    >
      Data science and IoT based mobile monitoring framework for hyper-local PM2.5
      assessment in urban setting – ScienceDirect
    </a>

  </div>
</section>


        </motion.div>
      </div>
    </PageLayout>
  );
};

export default CaseStudyDetail;