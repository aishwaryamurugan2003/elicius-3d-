// import { motion } from "framer-motion";
// import PageLayout from "@/components/PageLayout";
// import Breadcrumb from "@/components/Breadcrumb";

// import mblog1 from "@/assets/blogs/edex.jpg";
// import mblog2 from "@/assets/blogs/ndtv.jpg";
// import mblog3 from "@/assets/blogs/indiatoday.jpg";
// import mblog4 from "@/assets/blogs/et.jpg";
// import mblog5 from "@/assets/blogs/th.jpg";
// import mblog6 from "@/assets/blogs/news18.jpg";
// import mblog7 from "@/assets/blogs/iitm.jpg";
// import mblog8 from "@/assets/blogs/bbc.jpg";
// import mblog9 from "@/assets/blogs/bb.jpg";
// import mblog10 from "@/assets/blogs/webindia123.jpg";
// import mblog11 from "@/assets/blogs/bw.jpg";
// import mblog12 from "@/assets/blogs/fpj.jpg";
// import mblog13 from "@/assets/blogs/pib.jpg"; 
// import mblog14 from "@/assets/blogs/cm.jpg";
// import mblog15 from "@/assets/blogs/fi.jpg";
// import mblog16 from "@/assets/blogs/sp.jpg";
// import mblog17 from "@/assets/blogs/kj.jpg";
// import mblog18 from "@/assets/blogs/linkedin.jpg";
// import mblog19 from "@/assets/blogs/adda247.jpg";
// import mblog20 from "@/assets/blogs/twitter.jpg";
// import mblog21 from "@/assets/blogs/fb.jpg";
// import mblog22 from "@/assets/blogs/insta.jpg";
// import mblog23 from "@/assets/blogs/citizenmatters.jpg";


// const mediaArticles = [
//   {
//     id: 1,
//     image: mblog1,
//     title: "Edex Indian Express",
//     description:
//       "This project by IIT Madras students will tell you the air quality of the roads you drive on",
//     link: "https://www.edexlive.com/news/2019/jun/14/this-project-by-iit-madras-students-will-tell-you-the-air-quality-of-the-roads-you-drive-on-6605.html",
//   },
//   {
//     id: 2,
//     image: mblog2,
//     title: "New Delhi Television (NDTV)",
//     description:
//       "IIT Madras Alumni Association Organizes Hackathon To Solve Traffic Problem In Indian City",
//     link: "https://www.ndtv.com/education/iit-madras-alumni-association-organizes-hackathon-to-solve-traffic-problem-in-indian-city-2084017",
//   },
//   {
//     id: 3,
//     image: mblog3,
//     title: "India Today",
//     description:
//       "IIT Madras alumni are giving traffic crisis solutions to a major Indian city with their innovative hackathon",
//     link: "https://www.indiatoday.in/education-today/news/story/iit-madras-alumni-are-giving-traffic-crisis-solutions-to-a-major-indian-city-with-their-innovative-hackathon-1580284-2019-08-13",
//   },
//   {
//     id: 4,
//     image: mblog4,
//     title: "Economic Times",
//     description:
//       "IIT Madras develops IoT-based method for mobile pollution monitoring",
//     link: "https://government.economictimes.indiatimes.com/news/smart-infra/project-kaatru-iit-madras-develops-iot-based-method-for-mobile-pollution-monitoring/101016981",
//   },
//   {
//     id: 5,
//     image: mblog5,
//     title: "The Hindu",
//     description:
//       "IIT-M designs IoT-based mobile device to monitor air quality",
//     link: "https://www.thehindu.com/sci-tech/energy-and-environment/iit-madras-designs-iot-based-mobile-device-to-monitor-air-quality/article66973207.ece",
//   },
//   {
//     id: 6,
//     image: mblog6,
//     title: "News 18",
//     description:
//       "IIT Madras Researchers Develop IoT-Based Device For Mobile Pollution Monitoring",
//     link: "https://www.news18.com/education-career/iit-madras-researchers-develop-iot-based-device-for-mobile-pollution-monitoring-8086693.html",
//   },
//   {
//     id: 7,
//     image: mblog7,
//     title: "IIT Madras Official Website",
//     description:
//       "IIT-M develops low-cost mobile air pollution monitoring",
//     link: "https://www.iitm.ac.in/happenings/press-releases-and-coverages/iit-m-develops-low-cost-mobile-air-pollution-monitoring",
//   },
//   {
//     id: 8,
//     image: mblog8,
//     title: "British Broadcasting Corporation (BBC)",
//     description:
//       "India’s private sector joins the battle against air pollution",
//     link: "https://www.bbc.com/storyworks/future/powering-innovation-india/can-indias-private-sector-fight-an-environmental-crisis",
//   },
//   {
//     id: 9,
//     image: mblog9,
//     title: "Bizz Buzz",
//     description:
//       "IIT Madras builds IoT-based mobile air pollution tracker",
//     link: "https://www.bizzbuzz.news/technology/iit-madras-builds-iot-based-mobile-air-pollution-tracker-1226490?infinitescroll=1",
//   },
//   {
//     id: 10,
//     image: mblog10,
//     title: "Webindia 123",
//     description:
//       "IIT Madras develops IoT-based method for mobile pollution monitoring",
//     link: "https://news.webindia123.com/news/articles/Science/20230616/4087842.html",
//   },
//   {
//     id: 11,
//     image: mblog11,
//     title: "BW Education",
//     description:
//       "IIT Madras develops low-cost methods for mobile pollution monitoring",
//     link: "https://www.bweducation.com/article/iit-madras-developes-low-cost-methods-for-mobile-pollution-monitoring--480644",
//   },
//   {
//     id: 12,
//     image: mblog12,
//     title: "Free Press Journal",
//     description:
//       "Researchers at IIT Madras Develop IoT-Based Mobile Air Pollution Monitoring Technology",
//     link: "https://www.freepressjournal.in/education/iit-madras",
//   },
//   {
//     id: 13,
//     image: mblog13,
//     title: "PIB",
//     description:
//       "IIT Madras develops low-cost methods for mobile pollution monitoring",
//     link: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=1932614",
//   },
//   {
//     id: 14,
//     image: mblog14,
//     title: "Curriculum Magazine",
//     description:
//       "Monitor pollution using mobile phones as IIT Madras researchers devise a framework",
//     link: "https://curriculum-magazine.com/you-may-soon-be-able-to-monitor-pollution-using-mobile-phones-as-iit-madras-researchers-devise-a-framework/",
//   },
//   {
//     id: 15,
//     image: mblog15,
//     title: "Fortune India",
//     description:
//       "IIT Madras develops low-cost air pollution monitoring technology",
//     link: "https://www.fortuneindia.com/enterprise/iit-madras-develops-low-cost-air-pollution-monitoring-technology/113057",
//   },
//   {
//     id: 16,
//     image: mblog16,
//     title: "SeePositive",
//     description:
//       "IIT Madras revolutionizes air pollution monitoring with Data Science and IoT",
//     link: "https://seepositive.in/tech/iit-madras-revolutionizes-air-pollution-monitoring-with-data-science-and-iot/",
//   },
//   {
//     id: 17,
//     image: mblog17,
//     title: "Krishijagran",
//     description:
//       "IIT Madras develops mobile pollution monitoring using Data Science & IoT",
//     link: "https://krishijagran.com/news/iit-madras-develops-mobile-pollution-monitoring-with-data-science-iot/",
//   },
//   {
//     id: 18,
//     image: mblog18,
//     title: "LinkedIn",
//     description:
//       "Data Science & IoT-based method for mobile pollution monitoring",
//     link: "https://www.linkedin.com/posts/reachiitm_airquality-iitmadras-datascience-activity-7074996769180291074-eqcM/",
//   },
//   {
//     id: 19,
//     image: mblog19,
//     title: "Adda247",
//     description:
//       "IIT Madras researchers develop Data Science & IoT-based mobile pollution monitoring",
//     link: "https://currentaffairs.adda247.com/iit-madras-researchers-develop-data-science-iot-based-method-for-mobile-pollution-monitoring/",
//   },
//   {
//     id: 20,
//     image: mblog20,
//     title: "Twitter",
//     description: "Kaatru - Official Twitter Update",
//     link: "https://x.com/iitmadras/status/1669230067912966144?s=20",
//   },
//   {
//     id: 21,
//     image: mblog21,
//     title: "Facebook",
//     description: "Kaatru - Official Facebook Page",
//     link: "https://www.facebook.com/100064368442385/posts/641799307975678/?mibextid=rS40aB7S9Ucbxw6v",
//   },
//   {
//     id: 22,
//     image: mblog22,
//     title: "Instagram",
//     description: "Kaatru - Official Instagram Post",
//     link: "https://www.instagram.com/p/CtgPDR2p186/",
//   },
//   {
//     id: 23,
//     image: mblog23,
//     title: "Citizenmatters",
//     description: "Kaatru - Official citizenmatters Post",
//     link: "https://citizenmatters.in/low-cost-air-pollution-monitoring-sensors-iit-madras-chennai-research/",
//   },
// ];

  
// const fadeUp = {
//   hidden: { opacity: 0, y: 30 },
//   visible: (i: number) => ({
//     opacity: 1,
//     y: 0,
//     transition: { delay: i * 0.1 },
//   }),
// };

// const Media = () => {
//   return (
//     <PageLayout>
//       <div className="container mx-auto px-4 py-12">

//         <Breadcrumb
//           items={[
//             { label: "Blog", path: "/blog" },
//             { label: "Media" },
//           ]}
//         />

//         {/* HEADER */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="max-w-4xl mx-auto text-center mb-16"
//         >
//           <h1 className="text-5xl md:text-6xl font-bold mb-6 glow-text">
//             Media Articles About Kaatru
//           </h1>
//         </motion.div>

//         {/* GRID */}
//         <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
//           {mediaArticles.map((item, index) => (
//             <motion.div
//               key={item.id}
//               variants={fadeUp}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               custom={index}
//               className="bg-[#111] border border-white/10 rounded-2xl p-6 flex gap-6 items-start hover-scale"
//             >
//               {/* IMAGE */}
//               <div className="w-40 h-32 flex-shrink-0 rounded-xl overflow-hidden bg-black/20 flex items-center justify-center">
//                 <img src={item.image} alt={item.title} className="w-full h-full object-contain" />
//               </div>

//               {/* CONTENT */}
//               <div className="flex flex-col justify-between flex-1">
//                 <p className="text-sm text-muted-foreground mb-3">{item.description}</p>

//                 <h3 className="font-semibold text-lg mb-4">{item.title}</h3>

//                 <a
//                   href={item.link}
//                   target="_blank"
//                   className="px-4 py-2 rounded-lg bg-green-600 hover:bg-green-700 text-white text-sm w-fit"
//                 >
//                   Read More
//                 </a>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </PageLayout>
//   );
// };
// export default Media;
import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import Breadcrumb from "@/components/Breadcrumb";

import mblog1 from "@/assets/blogs/edex.jpg";
import mblog2 from "@/assets/blogs/ndtv.jpg";
import mblog3 from "@/assets/blogs/indiatoday.jpg";
import mblog4 from "@/assets/blogs/et.jpg";
import mblog5 from "@/assets/blogs/th.jpg";
import mblog6 from "@/assets/blogs/news18.jpg";
import mblog7 from "@/assets/blogs/iitm.jpg";
import mblog8 from "@/assets/blogs/bbc.jpg";
import mblog9 from "@/assets/blogs/bb.jpg";
import mblog10 from "@/assets/blogs/webindia123.jpg";
import mblog11 from "@/assets/blogs/bw.jpg";
import mblog12 from "@/assets/blogs/fpj.jpg";
import mblog13 from "@/assets/blogs/pib.jpg";
import mblog14 from "@/assets/blogs/cm.jpg";
import mblog15 from "@/assets/blogs/fi.jpg";
import mblog16 from "@/assets/blogs/sp.jpg";
import mblog17 from "@/assets/blogs/kj.jpg";
import mblog18 from "@/assets/blogs/linkedin.jpg";
import mblog19 from "@/assets/blogs/adda247.jpg";
import mblog20 from "@/assets/blogs/twitter.jpg";
import mblog21 from "@/assets/blogs/fb.jpg";
import mblog22 from "@/assets/blogs/insta.jpg";
import mblog23 from "@/assets/blogs/citizenmatters.jpg";

const mediaArticles = [
  { 
    id: 1, 
    image: mblog1, 
    title: "Edex Indian Express", 
    description: "This project by IIT Madras students will tell you the air quality of the roads you drive on", 
    link: "https://www.edexlive.com/news/2019/jun/14/this-project-by-iit-madras-students-will-tell-you-the-air-quality-of-the-roads-you-drive-on-6605.html" 
  },
  { id: 2, image: mblog2, title: "New Delhi Television (NDTV)", description: "IIT Madras Alumni Association Organizes Hackathon To Solve Traffic Problem In Indian City", link: "https://www.ndtv.com/education/iit-madras-alumni-association-organizes-hackathon-to-solve-traffic-problem-in-indian-city-2084017" },
  { id: 3, image: mblog3, title: "India Today", description: "IIT Madras alumni are giving traffic crisis solutions to a major Indian city with their innovative hackathon", link: "https://www.indiatoday.in/education-today/news/story/iit-madras-alumni-are-giving-traffic-crisis-solutions-to-a-major-indian-city-with-their-innovative-hackathon-1580284-2019-08-13" },
  { id: 4, image: mblog4, title: "Economic Times", description: "IIT Madras develops IoT-based method for mobile pollution monitoring", link: "https://government.economictimes.indiatimes.com/news/smart-infra/project-kaatru-iit-madras-develops-iot-based-method-for-mobile-pollution-monitoring/101016981" },
  { id: 5, image: mblog5, title: "The Hindu", description: "IIT-M designs IoT-based mobile device to monitor air quality", link: "https://www.thehindu.com/sci-tech/energy-and-environment/iit-madras-designs-iot-based-mobile-device-to-monitor-air-quality/article66973207.ece" },
  { id: 6, image: mblog6, title: "News 18", description: "IIT Madras Researchers Develop IoT-Based Device For Mobile Pollution Monitoring", link: "https://www.news18.com/education-career/iit-madras-researchers-develop-iot-based-device-for-mobile-pollution-monitoring-8086693.html" },
  { id: 7, image: mblog7, title: "IIT Madras Official Website", description: "IIT-M develops low-cost mobile air pollution monitoring", link: "https://www.iitm.ac.in/happenings/press-releases-and-coverages/iit-m-develops-low-cost-mobile-air-pollution-monitoring" },
  { id: 8, image: mblog8, title: "BBC", description: "India’s private sector joins the battle against air pollution", link: "https://www.bbc.com/storyworks/future/powering-innovation-india/can-indias-private-sector-fight-an-environmental-crisis" },
  { id: 9, image: mblog9, title: "Bizz Buzz", description: "IIT Madras builds IoT-based mobile air pollution tracker", link: "https://www.bizzbuzz.news/technology/iit-madras-builds-iot-based-mobile-air-pollution-tracker-1226490?infinitescroll=1" },
  { id: 10, image: mblog10, title: "Webindia 123", description: "IIT Madras develops IoT-based method for mobile pollution monitoring", link: "https://news.webindia123.com/news/articles/Science/20230616/4087842.html" },
  { id: 11, image: mblog11, title: "BW Education", description: "IIT Madras develops low-cost methods for mobile pollution monitoring", link: "https://www.bweducation.com/article/iit-madras-developes-low-cost-methods-for-mobile-pollution-monitoring--480644" },
  { id: 12, image: mblog12, title: "Free Press Journal", description: "Researchers at IIT Madras Develop IoT-Based Mobile Air Pollution Monitoring Technology", link: "https://www.freepressjournal.in/education/iit-madras" },
  { id: 13, image: mblog13, title: "PIB", description: "IIT Madras develops low-cost methods for mobile pollution monitoring", link: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=1932614" },
  { id: 14, image: mblog14, title: "Curriculum Magazine", description: "Monitor pollution using mobile phones as IIT Madras researchers devise a framework", link: "https://curriculum-magazine.com/you-may-soon-be-able-to-monitor-pollution-using-mobile-phones-as-iit-madras-researchers-devise-a-framework/" },
  { id: 15, image: mblog15, title: "Fortune India", description: "IIT Madras develops low-cost air pollution monitoring technology", link: "https://www.fortuneindia.com/enterprise/iit-madras-develops-low-cost-air-pollution-monitoring-technology/113057" },
  { id: 16, image: mblog16, title: "SeePositive", description: "IIT Madras revolutionizes air pollution monitoring with Data Science and IoT", link: "https://seepositive.in/tech/iit-madras-revolutionizes-air-pollution-monitoring-with-data-science-and-iot/" },
  { id: 17, image: mblog17, title: "Krishijagran", description: "IIT Madras develops mobile pollution monitoring using Data Science & IoT", link: "https://krishijagran.com/news/iit-madras-develops-mobile-pollution-monitoring-with-data-science-iot/" },
  { id: 18, image: mblog18, title: "LinkedIn", description: "Data Science & IoT-based method for mobile pollution monitoring", link: "https://www.linkedin.com/posts/reachiitm_airquality-iitmadras-datascience-activity-7074996769180291074-eqcM/" },
  { id: 19, image: mblog19, title: "Adda247", description: "IIT Madras researchers develop Data Science & IoT-based mobile pollution monitoring", link: "https://currentaffairs.adda247.com/iit-madras-researchers-develop-data-science-iot-based-method-for-mobile-pollution-monitoring/" },
  { id: 20, image: mblog20, title: "Twitter", description: "Kaatru - Official Twitter Update", link: "https://x.com/iitmadras/status/1669230067912966144?s=20" },
  { id: 21, image: mblog21, title: "Facebook", description: "Kaatru - Official Facebook Page", link: "https://www.facebook.com/100064368442385/posts/641799307975678/?mibextid=rS40aB7S9Ucbxw6v" },
  { id: 22, image: mblog22, title: "Instagram", description: "Kaatru - Official Instagram Post", link: "https://www.instagram.com/p/CtgPDR2p186/" },
  { id: 23, image: mblog23, title: "Citizenmatters", description: "Kaatru - Official citizenmatters Post", link: "https://citizenmatters.in/low-cost-air-pollution-monitoring-sensors-iit-madras-chennai-research/" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1 },
  }),
};

const Media = () => {
  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-12">
        
        <Breadcrumb items={[{ label: "Blog", path: "/blog" }, { label: "Media" }]} />

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 glow-text">
            Media Articles About Kaatru
          </h1>
        </motion.div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {mediaArticles.map((item, index) => (
            <motion.div
              key={item.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
              className="glass-glow rounded-3xl p-10 text-center hover-scale
                         flex flex-col items-center"
            >
              {/* IMAGE ICON */}
              <div
                className="w-20 h-20 mb-6 rounded-2xl bg-cyan-500/10
                           flex items-center justify-center overflow-hidden"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-14 h-14 object-contain"
                />
              </div>

              {/* TITLE */}
              <h3 className="text-xl md:text-2xl font-semibold mb-3">
                {item.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-sm md:text-base text-muted-foreground mb-6 max-w-md">
                {item.description}
              </p>

              {/* BUTTON */}
              <a
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2.5 rounded-xl bg-cyan-500/90 hover:bg-cyan-400 
                           text-sm font-medium text-white transition-colors"
              >
                Read Article
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default Media;
