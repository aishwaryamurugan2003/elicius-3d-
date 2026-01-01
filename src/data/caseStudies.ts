
import caseA from "@/assets/case-studies/smoking.jpg";
import caseB from "@/assets/case-studies/happy-new-year.jpg";

import caseStudyMap from "@/assets/case-studies/casestudy1.jpg";
import caseStudyMapB from "@/assets/case-studies/casestudy2.jpg";

import result1 from "@/assets/case-studies/result1.jpg";
import result2 from "@/assets/case-studies/result2.jpg";
import result3 from "@/assets/case-studies/result3.jpg";
import result4 from "@/assets/case-studies/result4.jpg";
import result5 from "@/assets/case-studies/result5.jpg";
import result6 from "@/assets/case-studies/result6.jpg";

export const caseStudies = [
  {
    id: "case-study-a",
    title: "Short-lived Extreme Event Analysis",
    subtitle: "Case Study - A",
    category: "Environmental Event Analysis",
    image: caseA,

    description:
      "Detailed analysis of short-duration extreme pollution events & environmental changes.",

    overview:
      "A pilot study was run in a specific locality in Chennai with one mobile device fitted on a van.",

    challenge:
      "The route was chosen such that the vehicle would travel roughly 30 kilometers in each trip covering an effective area of roughly 15 sq. km (5 x 3 km).",

    solution:
      "Multiple land use profiles were covered",

    caseStudyMap,
    resultImages: [result1, result2, result3, result4, result5, result6],

    results: [
      "Deployed 200+ sensors across strategic locations",
      "40% improvement in response time to pollution events",
      "500,000+ citizens accessing real-time data",
      "₹2 Crore in operational cost savings annually",
      "Enabled data-driven policy decisions"
    ],

    testimonial: {
      quote:
        "The deployment has transformed our ability to monitor and respond to air quality issues. The real-time data and analytics have been invaluable.",
      author: "Dr. Rajesh Kumar",
      role: "Smart City Project Director, Bangalore"
    }
  },

  {
    id: "case-study-b",
    title: "Diurnal spatio-temporal hotspot identificiation",
    subtitle: "Case Study - B",
    category: "Urban Air Quality Mapping",
    image: caseB,

    description:
      "Identification of recurring hourly urban air quality hotspots using hybrid sensor networks.",

    overview:
      "Identification of daily recurring air-quality hotspots through mobile + fixed sensor integration.",

    challenge:
      "Urban authorities lacked accurate localized AQI variations across different time windows (morning traffic, noon stagnation, night-time events).",

    solution:
      "Implemented a hybrid sensor network + AI-driven hotspot mapping system to produce hourly pollution heatmaps.",

    caseStudyMap: caseStudyMapB,
    resultImages: [result1, result2, result3, result4, result5, result6],

    results: [
      "Identified 12 recurring daily hotspots",
      "Enabled targeted traffic and industrial regulation",
      "30% improvement in hotspot prediction accuracy",
      "Provided actionable visibility for city policy teams"
    ],

    testimonial: {
      quote:
        "The hourly hotspot analytics transformed our understanding of pollution behaviour across the city.",
      author: "Rohit Deshmukh",
      role: "Urban Policy Strategist"
    }
  }
];
