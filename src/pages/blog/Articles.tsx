// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
// import { Calendar, Clock, ArrowRight } from "lucide-react";
// import PageLayout from "@/components/PageLayout";
// import Breadcrumb from "@/components/Breadcrumb";
// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardHeader,
//   CardTitle,
//   CardDescription,
//   CardFooter,
// } from "@/components/ui/card";

// const Articles = () => {
//   const articles = [
//     {
//       slug: "future-of-clean-energy",
//       title: "The Future of Clean Energy in India",
//       excerpt:
//         "Exploring the trajectory of renewable energy adoption and the role of technology in achieving net-zero goals.",
//       author: "Dr. Arun Kumar",
//       date: "Dec 15, 2023",
//       readTime: "8 min read",
//       category: "Clean Energy",
//     },
//     {
//       slug: "iot-environmental-monitoring",
//       title: "IoT Revolution in Environmental Monitoring",
//       excerpt:
//         "How Internet of Things is transforming air quality monitoring and creating smarter, healthier cities.",
//       author: "Priya Sharma",
//       date: "Dec 10, 2023",
//       readTime: "6 min read",
//       category: "Technology",
//     },
//     {
//       slug: "machine-learning-predictions",
//       title: "Machine Learning for Air Quality Predictions",
//       excerpt:
//         "Deep dive into the algorithms and models powering our predictive analytics platform.",
//       author: "Meera Reddy",
//       date: "Dec 5, 2023",
//       readTime: "10 min read",
//       category: "Data Science",
//     },
//     {
//       slug: "fuel-cell-breakthrough",
//       title: "Breakthrough in Fuel Cell Technology",
//       excerpt:
//         "Our latest research achievement in improving fuel cell efficiency and reducing costs.",
//       author: "Dr. Rajesh Patel",
//       date: "Nov 28, 2023",
//       readTime: "7 min read",
//       category: "Research",
//     },
//   ];

//   return (
//     <PageLayout>
//       {/* ================= HEADER ================= */}
//       <section className="section">
//         <div className="container-wide">
//           <Breadcrumb
//             items={[
//               { label: "Blog", path: "/blog" },
//               { label: "Articles" },
//             ]}
//           />

//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="max-w-4xl mx-auto text-center mt-12 mb-16"
//           >
//             <h1 className="heading heading-accent">Articles</h1>
//             <p className="subtext mt-6">
//               In-depth perspectives on clean energy, data science, and
//               environmental innovation
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       {/* ================= ARTICLES LIST ================= */}
//       <section className="section section-muted">
//         <div className="container-wide">
//           <div className="space-y-8 max-w-4xl mx-auto">
//             {articles.map((article, index) => (
//               <motion.div
//                 key={article.slug}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.1 }}
//               >
//                 <Card>
//                   <CardHeader>
//                     {/* META */}
//                     <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-3">
//                       <span className="font-medium text-primary">
//                         {article.category}
//                       </span>

//                       <div className="flex items-center gap-1">
//                         <Calendar className="w-4 h-4" />
//                         {article.date}
//                       </div>

//                       <div className="flex items-center gap-1">
//                         <Clock className="w-4 h-4" />
//                         {article.readTime}
//                       </div>
//                     </div>

//                     <CardTitle className="text-2xl">
//                       <Link
//                         to={`/blog/articles/${article.slug}`}
//                         className="hover:text-primary transition-colors"
//                       >
//                         {article.title}
//                       </Link>
//                     </CardTitle>

//                     <CardDescription className="text-base">
//                       {article.excerpt}
//                     </CardDescription>
//                   </CardHeader>

//                   <CardFooter className="flex items-center justify-between">
//                     <span className="text-sm text-muted-foreground">
//                       By {article.author}
//                     </span>

//                     <Button asChild variant="outline">
//                       <Link
//                         to={`/blog/articles/${article.slug}`}
//                         className="flex items-center gap-2"
//                       >
//                         Read Article
//                         <ArrowRight className="w-4 h-4" />
//                       </Link>
//                     </Button>
//                   </CardFooter>
//                 </Card>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </PageLayout>
//   );
// };

// export default Articles;
