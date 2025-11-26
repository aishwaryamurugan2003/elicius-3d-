import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Heart, MoreVertical, Send, Link2, Facebook, Linkedin } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import Breadcrumb from "@/components/Breadcrumb";

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
    comments: [],
    likes: 4,
    liked: false,
    showCommentBox: false,
    newComment: "",
    showShare: false,
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
    showShare: false,
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
    showShare: false,
  },
];

const Blog = () => {
  const [posts, setPosts] = useState(initialPosts);

  const toggleLike = (id: string) => {
    setPosts(prev =>
      prev.map(post =>
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
    setPosts(prev =>
      prev.map(post =>
        post.id === id
          ? { ...post, showCommentBox: !post.showCommentBox }
          : post
      )
    );
  };

  const addComment = (id: string) => {
    setPosts(prev =>
      prev.map(post =>
        post.id === id && post.newComment.trim() !== ""
          ? {
              ...post,
              comments: [...post.comments, post.newComment], // 👈 simple text comments
              newComment: "",
              showCommentBox: false,
            }
          : post
      )
    );
  };

  const toggleShare = (id: string) => {
    setPosts(prev =>
      prev.map(post =>
        post.id === id
          ? { ...post, showShare: !post.showShare }
          : { ...post, showShare: false }
      )
    );
  };

  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-12">
        <Breadcrumb items={[{ label: "Blog" }]} />

        <div className="max-w-6xl mx-auto mb-6">
          <span className="text-sm font-medium text-emerald-400">All Posts</span>
        </div>

        <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3">
          {posts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#111111] rounded-2xl overflow-hidden border border-white/10 shadow-lg flex flex-col relative"
            >
              {/* Share Popup */}
              {post.showShare && (
                <div className="absolute top-10 right-4 bg-black/90 p-4 rounded-xl border border-white/10 z-20 w-48 text-center">
                  <p className="text-sm mb-3 text-muted-foreground">Share Post</p>

                  <div className="flex justify-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center">
                      <Facebook className="w-5 h-5 text-white" />
                    </div>

                    <div className="w-10 h-10 rounded-full bg-sky-500 flex items-center justify-center">
                      <span className="text-white font-bold">X</span>
                    </div>

                    <div className="w-10 h-10 rounded-full bg-blue-700 flex items-center justify-center">
                      <Linkedin className="w-5 h-5 text-white" />
                    </div>

                    <div className="w-10 h-10 rounded-full bg-neutral-700 flex items-center justify-center">
                      <Link2 className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
              )}

              <div className="flex flex-col h-full">
                <div className="w-full h-56 bg-zinc-900 overflow-hidden">
                  <img src={post.image} className="w-full h-full object-cover" />
                </div>

                <div className="flex-1 px-6 py-5 flex flex-col">
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                    <span>
                      {post.date} • {post.readTime}
                    </span>

                    <MoreVertical
                      className="w-4 h-4 cursor-pointer hover:text-primary"
                      onClick={() => toggleShare(post.id)}
                    />
                  </div>

                  <h3 className="text-lg font-semibold leading-snug mb-3">
                    {post.title}
                  </h3>

                  <p className="text-sm text-muted-foreground line-clamp-3">
                    {post.description}
                  </p>

                  <div className="mt-6 mb-3 h-px w-full bg-white/5" />

                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div
                      className="flex items-center gap-1 cursor-pointer hover:text-primary"
                      onClick={() => toggleCommentBox(post.id)}
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>{post.comments.length}</span>
                    </div>

                    <div
                      className="flex items-center gap-1 cursor-pointer"
                      onClick={() => toggleLike(post.id)}
                    >
                      <span>{post.likes}</span>
                      <Heart
                        className={`w-4 h-4 transition-colors ${
                          post.liked ? "text-red-500 fill-red-500" : ""
                        }`}
                      />
                    </div>
                  </div>

                  {/* Comment Box */}
                  {post.showCommentBox && (
                    <div className="mt-4 bg-black/40 p-4 rounded-xl border border-white/10">
                      <textarea
                        value={post.newComment}
                        onChange={(e) =>
                          setPosts(prev =>
                            prev.map(p =>
                              p.id === post.id
                                ? { ...p, newComment: e.target.value }
                                : p
                            )
                          )
                        }
                        placeholder="Write a comment..."
                        className="w-full bg-black/40 border border-white/10 rounded-lg p-2 text-sm outline-none"
                      />

                      <button
                        onClick={() => addComment(post.id)}
                        className="mt-3 px-4 py-1.5 bg-primary rounded-lg text-sm flex items-center gap-2"
                      >
                        Post Comment
                      </button>
                    </div>
                  )}

                  {/* Comments List (Option A) */}
                  {post.comments.length > 0 && (
                    <div className="mt-4 space-y-2">
                      {post.comments.map((c, i) => (
                        <p key={i} className="text-sm text-muted-foreground">
                          • {c}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default Blog;
