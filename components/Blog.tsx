"use client";

import { motion } from "framer-motion";
import { BookOpen, Clock, ArrowRight } from "lucide-react";

const blogPosts = [
  {
    title: "Coming Soon",
    excerpt: "I'm currently working on some exciting blog posts about my journey in software engineering, lessons learned, and technical tutorials. Stay tuned!",
    date: "2024",
    readTime: "",
    placeholder: true,
  },
];

export default function Blog() {
  return (
    <section id="blog" className="py-20 px-4 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Latest <span className="gradient-text">Posts</span>
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            Thoughts, tutorials, and insights from my journey
          </p>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full mt-4" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="h-full rounded-xl bg-card border border-border p-6 hover:border-accent/50 transition-all duration-300">
                <div className="flex items-center gap-2 text-accent mb-4">
                  <BookOpen size={20} />
                  <span className="text-sm">{post.date}</span>
                  {post.readTime && (
                    <>
                      <span className="text-border">|</span>
                      <Clock size={14} />
                      <span className="text-sm">{post.readTime}</span>
                    </>
                  )}
                </div>

                <h3 className="text-xl font-semibold mb-3">{post.title}</h3>
                <p className="text-muted text-sm mb-4">{post.excerpt}</p>

                {!post.placeholder && (
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-accent hover:gap-3 transition-all text-sm font-medium"
                  >
                    Read more
                    <ArrowRight size={16} />
                  </a>
                )}
              </div>
            </motion.div>
          ))}

          {/* Placeholder cards */}
          {[1, 2].map((i) => (
            <motion.div
              key={`placeholder-${i}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="h-full rounded-xl bg-card/50 border border-border/50 border-dashed p-6 flex items-center justify-center min-h-[200px]">
                <p className="text-muted/50 text-center">More posts coming soon...</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
