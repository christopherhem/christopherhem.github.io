"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, FileText, Send } from "lucide-react";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "chris.hem10@gmail.com",
    href: "mailto:chris.hem10@gmail.com",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "christopherhem",
    href: "https://github.com/christopherhem",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "christopherhem",
    href: "https://www.linkedin.com/in/christopherhem/",
  },
  {
    icon: FileText,
    label: "Resume",
    value: "Download CV",
    href: "/resume.pdf",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            Please feel free to contact me if you would like to chat and connect
            about any opportunities.
          </p>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full mt-4" />
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4">
          {contactLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group flex items-center gap-4 p-5 rounded-xl bg-card border border-border hover:border-accent transition-all duration-300"
              >
                <div className="p-3 rounded-lg bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white transition-colors">
                  <Icon size={24} />
                </div>
                <div>
                  <p className="text-sm text-muted">{link.label}</p>
                  <p className="font-medium group-hover:text-accent transition-colors">
                    {link.value}
                  </p>
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <a
            href="mailto:chris.hem10@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent hover:bg-accent-dark text-white font-medium rounded-lg transition-all duration-300 glow hover:scale-105"
          >
            <Send size={20} />
            Send me an email
          </a>
        </motion.div>
      </div>
    </section>
  );
}
