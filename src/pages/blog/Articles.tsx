import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import Breadcrumb from "@/components/Breadcrumb";

const Articles = () => {
  const articles = [
    {
      slug: "future-of-clean-energy",
      title: "The Future of Clean Energy in India",
      excerpt: "Exploring the trajectory of renewable energy adoption and the role of technology in achieving net-zero goals.",
      author: "Dr. Arun Kumar",
      date: "Dec 15, 2023",
      readTime: "8 min read",
      category: "Clean Energy",
    },
    {
      slug: "iot-environmental-monitoring",
      title: "IoT Revolution in Environmental Monitoring",
      excerpt: "How Internet of Things is transforming air quality monitoring and creating smarter, healthier cities.",
      author: "Priya Sharma",
      date: "Dec 10, 2023",
      readTime: "6 min read",
      category: "Technology",
    },
    {
      slug: "machine-learning-predictions",
      title: "Machine Learning for Air Quality Predictions",
      excerpt: "Deep dive into the algorithms and models powering our predictive analytics platform.",
      author: "Meera Reddy",
      date: "Dec 5, 2023",
      readTime: "10 min read",
      category: "Data Science",
    },
    {
      slug: "fuel-cell-breakthrough",
      title: "Breakthrough in Fuel Cell Technology",
      excerpt: "Our latest research achievement in improving fuel cell efficiency and reducing costs.",
      author: "Dr. Rajesh Patel",
      date: "Nov 28, 2023",
      readTime: "7 min read",
      category: "Research",
    },
  ];

  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-12">
        <Breadcrumb
          items={[
            { label: "Blog", path: "/blog" },
            { label: "Articles" },
          ]}
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 glow-text">
            Articles
          </h1>
          <p className="text-xl text-muted-foreground">
            Deep insights on clean-tech and environmental innovation
          </p>
        </motion.div>

        <div className="space-y-8 max-w-4xl mx-auto">
          {articles.map((article, index) => (
            <motion.article
              key={article.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-glow rounded-2xl p-8 hover-scale group"
            >
              <div className="flex flex-wrap gap-4 items-center mb-4">
                <span className="px-3 py-1 glass-glow rounded-full text-xs font-medium text-primary">
                  {article.category}
                </span>
                <div className="flex items-center text-sm text-muted-foreground gap-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {article.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {article.readTime}
                  </div>
                </div>
              </div>

              <Link to={`/blog/articles/${article.slug}`}>
                <h2 className="text-3xl font-bold mb-4 group-hover:text-primary transition-colors">
                  {article.title}
                </h2>
              </Link>

              <p className="text-lg text-muted-foreground mb-4">
                {article.excerpt}
              </p>

              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">
                  By {article.author}
                </span>

                <Link
                  to={`/blog/articles/${article.slug}`}
                  className="flex items-center text-primary font-medium group-hover:translate-x-2 transition-transform"
                >
                  Read More <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default Articles;
