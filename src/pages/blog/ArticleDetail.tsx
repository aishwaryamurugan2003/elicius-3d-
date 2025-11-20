import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import Breadcrumb from "@/components/Breadcrumb";

const ArticleDetail = () => {
  const { slug } = useParams();

  // Mock article data
  const article = {
    title: "The Future of Clean Energy in India",
    category: "Clean Energy",
    author: "Dr. Arun Kumar",
    date: "Dec 15, 2023",
    readTime: "8 min read",
    content: [
      {
        type: "paragraph",
        text: "India stands at a pivotal moment in its energy transition journey. With ambitious targets to achieve net-zero emissions by 2070 and 500 GW of renewable energy capacity by 2030, the nation is embracing clean energy like never before.",
      },
      {
        type: "heading",
        text: "The Current Landscape",
      },
      {
        type: "paragraph",
        text: "The clean energy sector in India has witnessed unprecedented growth over the past decade. Solar and wind energy installations have surged, making India one of the fastest-growing renewable energy markets globally. However, challenges remain in terms of grid integration, storage solutions, and last-mile connectivity.",
      },
      {
        type: "heading",
        text: "Technology as an Enabler",
      },
      {
        type: "paragraph",
        text: "Advanced technologies like IoT, artificial intelligence, and blockchain are revolutionizing how we generate, distribute, and consume energy. Smart grids enabled by IoT sensors can optimize energy distribution, reduce wastage, and integrate renewable sources more effectively.",
      },
      {
        type: "paragraph",
        text: "At Elicius Energy, we're working on next-generation monitoring systems that provide real-time insights into energy consumption patterns and environmental impact, helping organizations make data-driven decisions for sustainability.",
      },
      {
        type: "heading",
        text: "The Road Ahead",
      },
      {
        type: "paragraph",
        text: "The future of clean energy in India is bright but requires concerted efforts from all stakeholders - government, industry, academia, and citizens. Investment in R&D, supportive policies, and innovative business models will be crucial in accelerating the transition to a sustainable energy future.",
      },
    ],
  };

  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-12">
        <Breadcrumb
          items={[
            { label: "Blog", path: "/blog" },
            { label: "Articles", path: "/blog/articles" },
            { label: article.title },
          ]}
        />

        <Link
          to="/blog/articles"
          className="inline-flex items-center text-primary hover:underline mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Articles
        </Link>

        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <div className="mb-8">
            <span className="inline-block px-4 py-2 glass-glow rounded-full text-sm font-medium text-primary mb-6">
              {article.category}
            </span>

            <h1 className="text-5xl font-bold mb-6 glow-text">
              {article.title}
            </h1>

            <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                {article.author}
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {article.date}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {article.readTime}
              </div>
            </div>
          </div>

          <div className="glass-glow rounded-3xl p-8 md:p-12">
            <div className="prose prose-lg prose-invert max-w-none">
              {article.content.map((block, index) => {
                if (block.type === "heading") {
                  return (
                    <h2 key={index} className="text-3xl font-bold text-primary mt-8 mb-4">
                      {block.text}
                    </h2>
                  );
                }
                return (
                  <p key={index} className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    {block.text}
                  </p>
                );
              })}
            </div>
          </div>

          <div className="mt-12 glass-glow rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4 glow-text">About the Author</h3>
            <div className="flex items-start gap-6">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-2xl font-bold text-background flex-shrink-0">
                {article.author.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <div className="font-bold text-lg mb-2">{article.author}</div>
                <p className="text-muted-foreground">
                  Founder & CEO of Elicius Energy with PhD from IIT Madras and 15+ years of experience in clean-tech R&D.
                </p>
              </div>
            </div>
          </div>
        </motion.article>
      </div>
    </PageLayout>
  );
};

export default ArticleDetail;
