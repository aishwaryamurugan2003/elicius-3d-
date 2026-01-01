import { useState } from "react";
import { motion } from "framer-motion";
import {
  MessageCircle,
  Heart,
  Send,
  Link2,
  Facebook,
  Linkedin,
} from "lucide-react";

import PageLayout from "@/components/PageLayout";
import Breadcrumb from "@/components/Breadcrumb";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

import blog1 from "@/assets/blogs/blog1.jpg";
import blog2 from "@/assets/blogs/blog2.jpg";
import blog3 from "@/assets/blogs/blog3.jpg";

const initialPosts = [
  {
    id: "post-1",
    title: "Addressing Ambient Air Sanctity Featured on India AI",
    date: "Oct 19, 2022",
    readTime: "6 min read",
    description:
      "Ambient air quality is a dynamic parameter that shows a high degree of spatiotemporal variation...",
    image: blog1,
    comments: [] as string[],
    likes: 4,
    liked: false,
    showCommentBox: false,
    newComment: "",
  },
  {
    id: "post-2",
    title: "Data Science and IoT for Addressing Ambient Air Sanctity",
    date: "Oct 19, 2022",
    readTime: "6 min read",
    description:
      "Ambient air quality is a dynamic parameter that shows a high degree of spatiotemporal variation...",
    image: blog2,
    comments: [],
    likes: 4,
    liked: false,
    showCommentBox: false,
    newComment: "",
  },
  {
    id: "post-3",
    title: "The Future of Ambient Air Quality Monitoring",
    date: "Oct 19, 2022",
    readTime: "5 min read",
    description:
      "Impact of air pollution on human health is profound. Have you ever wondered what you are breathing...",
    image: blog3,
    comments: [],
    likes: 4,
    liked: false,
    showCommentBox: false,
    newComment: "",
  },
];

const Blog = () => {
  const [posts, setPosts] = useState(initialPosts);

  /* ---------------- SHARE HELPERS ---------------- */

  const getPostUrl = (postId: string) => {
    return `${window.location.origin}/blog/${postId}`;
  };

  const shareOnFacebook = (postId: string) => {
    const url = getPostUrl(postId);
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      "_blank"
    );
  };

  const shareOnLinkedIn = (postId: string) => {
    const url = getPostUrl(postId);
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
        url
      )}`,
      "_blank"
    );
  };

  /* ---------- COPY LINK (FIXED & RELIABLE) ---------- */

  const copyLink = (postId: string) => {
    const url = getPostUrl(postId);

    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(url).then(() => {
        alert("Link copied!");
      });
    } else {
      fallbackCopyText(url);
    }
  };

  const fallbackCopyText = (text: string) => {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.position = "fixed";
    textArea.style.opacity = "0";

    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
      document.execCommand("copy");
      alert("Link copied!");
    } catch (err) {
      alert("Copy failed");
    }

    document.body.removeChild(textArea);
  };

  /* ---------------- INTERACTIONS ---------------- */

  const toggleLike = (id: string) => {
    setPosts((prev) =>
      prev.map((post) =>
        post.id === id
          ? {
              ...post,
              liked: !post.liked,
              likes: post.liked ? post.likes - 1 : post.likes + 1,
            }
          : post
      )
    );
  };

  const toggleCommentBox = (id: string) => {
    setPosts((prev) =>
      prev.map((post) =>
        post.id === id
          ? { ...post, showCommentBox: !post.showCommentBox }
          : post
      )
    );
  };

  const addComment = (id: string) => {
    setPosts((prev) =>
      prev.map((post) =>
        post.id === id && post.newComment.trim()
          ? {
              ...post,
              comments: [...post.comments, post.newComment],
              newComment: "",
              showCommentBox: false,
            }
          : post
      )
    );
  };

  return (
    <PageLayout>
      <section className="section">
        <div className="container-wide">
          <Breadcrumb items={[{ label: "Blog" }]} />

          {/* HEADER */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center mt-12 mb-16"
          >
            <h1 className="heading heading-accent">Insights & Articles</h1>
            <p className="subtext mt-6">
              Research-driven perspectives on air quality, IoT, and clean
              technologies
            </p>
          </motion.div>

          {/* BLOG GRID */}
          <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
            {posts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full flex flex-col overflow-hidden">
                  {/* IMAGE */}
                  <div className="h-56 overflow-hidden bg-muted">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* CONTENT */}
                  <CardHeader>
                    <div className="text-xs text-muted-foreground mb-2">
                      {post.date} • {post.readTime}
                    </div>

                    <CardTitle className="leading-snug">
                      {post.title}
                    </CardTitle>

                    <CardDescription className="line-clamp-3">
                      {post.description}
                    </CardDescription>
                  </CardHeader>

                  {/* INTERACTIONS */}
                  <div className="px-6 pt-2 flex items-center justify-between text-sm text-muted-foreground">
                    <button
                      onClick={() => toggleCommentBox(post.id)}
                      className="flex items-center gap-1 hover:text-primary"
                    >
                      <MessageCircle className="w-4 h-4" />
                      {post.comments.length}
                    </button>

                    <button
                      onClick={() => toggleLike(post.id)}
                      className="flex items-center gap-1"
                    >
                      {post.likes}
                      <Heart
                        className={`w-4 h-4 ${
                          post.liked
                            ? "text-red-500 fill-red-500"
                            : ""
                        }`}
                      />
                    </button>
                  </div>

                  {/* COMMENT BOX */}
                  {post.showCommentBox && (
                    <div className="px-6 pt-4">
                      <Textarea
                        value={post.newComment}
                        onChange={(e) =>
                          setPosts((prev) =>
                            prev.map((p) =>
                              p.id === post.id
                                ? { ...p, newComment: e.target.value }
                                : p
                            )
                          )
                        }
                        placeholder="Write a comment..."
                      />

                      <Button
                        size="sm"
                        className="mt-3"
                        onClick={() => addComment(post.id)}
                      >
                        <Send className="w-4 h-4 mr-2" />
                        Post Comment
                      </Button>
                    </div>
                  )}

                  {/* COMMENTS */}
                  {post.comments.length > 0 && (
                    <div className="px-6 pt-4 space-y-2 text-sm text-muted-foreground">
                      {post.comments.map((c, i) => (
                        <p key={i}>• {c}</p>
                      ))}
                    </div>
                  )}

                  {/* FOOTER (SHARE ICONS) */}
                  <CardFooter className="mt-auto">
                    <div className="flex gap-3">
                      <button onClick={() => shareOnFacebook(post.id)}>
                        <Facebook className="w-4 h-4 hover:text-primary" />
                      </button>

                      <button onClick={() => shareOnLinkedIn(post.id)}>
                        <Linkedin className="w-4 h-4 hover:text-primary" />
                      </button>

                      <button onClick={() => copyLink(post.id)}>
                        <Link2 className="w-4 h-4 hover:text-primary" />
                      </button>
                    </div>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Blog;
