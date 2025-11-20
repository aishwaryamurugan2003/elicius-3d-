import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Newspaper, Video, ArrowRight } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import Breadcrumb from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";

const Blog = () => {
  const categories = [
    {
      icon: Newspaper,
      title: "Articles",
      description: "In-depth articles on clean-tech innovations and environmental science",
      link: "/blog/articles",
      count: "45+ Articles",
    },
    {
      icon: Video,
      title: "Media",
      description: "Videos, press releases, and media coverage",
      link: "/blog/media",
      count: "20+ Videos",
    },
  ];

  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-12">
        <Breadcrumb items={[{ label: "Blog" }]} />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 glow-text">
            Blog & Media
          </h1>
          <p className="text-xl text-muted-foreground">
            Insights, updates, and stories from the world of clean-tech
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-glow rounded-2xl p-8 hover-scale group"
            >
              <category.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-3xl font-bold mb-4 group-hover:text-primary transition-colors">
                {category.title}
              </h3>
              <p className="text-muted-foreground mb-4">{category.description}</p>
              <div className="text-sm text-primary mb-6">{category.count}</div>

              <Button
                asChild
                variant="outline"
                className="w-full glass-glow hover:bg-primary/10 group-hover:glow-border transition-all"
              >
                <Link to={category.link} className="flex items-center justify-center">
                  Browse {category.title}
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default Blog;
