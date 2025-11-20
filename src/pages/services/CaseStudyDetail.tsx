import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, CheckCircle } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import Breadcrumb from "@/components/Breadcrumb";

const CaseStudyDetail = () => {
  const { caseStudyId } = useParams();

  // Mock data - would fetch from API in real app
  const caseStudy = {
    title: "Smart City Initiative - Bangalore",
    category: "Smart City",
    overview: "Comprehensive air quality monitoring deployment across Bangalore as part of the Smart City initiative, covering 200+ locations with real-time data collection and analytics.",
    challenge: "Bangalore faced challenges in monitoring air quality across its rapidly expanding urban landscape, with limited data availability for informed policy decisions.",
    solution: "Deployed our IoT-based air quality monitoring network with cloud analytics platform, providing real-time data access to city authorities and citizens.",
    results: [
      "Deployed 200+ sensors across strategic locations",
      "40% improvement in response time to pollution events",
      "500,000+ citizens accessing real-time data",
      "₹2 Crore in operational cost savings annually",
      "Enabled data-driven policy decisions",
    ],
    testimonial: {
      quote: "The deployment has transformed our ability to monitor and respond to air quality issues. The real-time data and analytics have been invaluable.",
      author: "Dr. Rajesh Kumar",
      role: "Smart City Project Director, Bangalore",
    },
  };

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
          className="max-w-4xl mx-auto"
        >
          <div className="inline-block px-4 py-2 glass-glow rounded-full text-sm font-medium mb-6">
            {caseStudy.category}
          </div>

          <h1 className="text-5xl font-bold mb-8 glow-text">{caseStudy.title}</h1>

          <div className="space-y-8">
            <div className="glass-glow rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-4 text-primary">Overview</h2>
              <p className="text-lg text-muted-foreground">{caseStudy.overview}</p>
            </div>

            <div className="glass-glow rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-4 text-primary">The Challenge</h2>
              <p className="text-lg text-muted-foreground">{caseStudy.challenge}</p>
            </div>

            <div className="glass-glow rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-4 text-primary">Our Solution</h2>
              <p className="text-lg text-muted-foreground">{caseStudy.solution}</p>
            </div>

            <div className="glass-glow rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-6 text-primary">Results & Impact</h2>
              <ul className="space-y-4">
                {caseStudy.results.map((result, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-primary mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-lg text-muted-foreground">{result}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass-glow rounded-2xl p-8 bg-primary/5">
              <blockquote className="text-lg italic mb-4">
                "{caseStudy.testimonial.quote}"
              </blockquote>
              <div className="text-sm">
                <div className="font-bold">{caseStudy.testimonial.author}</div>
                <div className="text-muted-foreground">{caseStudy.testimonial.role}</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </PageLayout>
  );
};

export default CaseStudyDetail;
