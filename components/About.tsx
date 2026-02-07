"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Mountain, ChefHat, Tv, Dribbble, MapPin, Dog } from "lucide-react";

const interests = [
  { icon: Mountain, text: "Hiking National Parks with my wife" },
  { icon: ChefHat, text: "Learning authentic Cambodian cooking from my mom" },
  { icon: Tv, text: "Watching Anime" },
  { icon: Dribbble, text: "Playing basketball and flag-football" },
  { icon: MapPin, text: "Finding the best street tacos" },
  { icon: Dog, text: "Snuggling with my rescue dogs (Eggsy & Bruno)" },
];

export default function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-accent/20 rounded-2xl blur-2xl transform -rotate-6" />
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-2xl overflow-hidden border-2 border-border glow">
                <Image
                  src="/images/profile.jpeg"
                  alt="Christopher Hem"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>

          {/* Bio Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-lg text-muted leading-relaxed mb-8">
              My name is Christopher Hem. I am a professional who embraces the ongoing
              pursuit of knowledge. It began as a <span className="text-accent font-medium">Teacher</span> shaping
              the minds of young individuals, then serving the hospital frontlines as
              an <span className="text-accent font-medium">Occupational Therapist</span>, and now diving
              passionately into the code as a <span className="text-accent font-medium">Full-Stack Software
              Engineer</span>.
            </p>
            <p className="text-lg text-muted leading-relaxed mb-8">
              I want to leverage my learned experiences to produce creative, meaningful
              solutions that will make a long-lasting impact.
            </p>

            {/* Interests */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Beyond the Code</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {interests.map((interest, index) => {
                  const Icon = interest.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex items-center gap-3 p-3 rounded-lg bg-card border border-border hover:border-accent/50 transition-colors"
                    >
                      <Icon size={20} className="text-accent flex-shrink-0" />
                      <span className="text-sm text-muted">{interest.text}</span>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
