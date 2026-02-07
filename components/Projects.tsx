"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Github, ExternalLink, Users, Calendar } from "lucide-react";

const projects = [
  {
    title: "TeamTable",
    description:
      "A team management app designed to help members of large workspaces coordinate and plan for shift swaps and covers. Members can post needed shifts and times they are available, with automatic matching for shift swaps.",
    image: "/images/projects/teamtable-1.png",
    technologies: ["JavaScript", "Python", "FastAPI", "PostgreSQL", "React", "Redux Toolkit"],
    github: "https://github.com/christopherhem/team-table",
    type: "Collaborative",
    date: "Oct - Nov 2022",
  },
  {
    title: "Carrari",
    description:
      "An automobile dealership application that organizes logistics, inventory, sales, and services for car dealerships.",
    image: "/images/projects/carrari-1.png",
    technologies: ["JavaScript", "Python", "Django", "React"],
    github: "https://github.com/christopherhem/carrari",
    type: "Collaborative",
    date: "Sept 2022",
  },
  {
    title: "Wardrobify",
    description:
      "An outfit organization application allowing users with large closets to organize and manage their hats and shoes collection.",
    image: "/images/projects/wardrobify-1.jpeg",
    technologies: ["JavaScript", "Python", "Django", "React", "Bootstrap"],
    github: "https://github.com/christopherhem/wardrobify",
    type: "Collaborative",
    date: "Sept 2022",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            A collection of both solo and collaborative projects
          </p>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full mt-4" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full rounded-xl bg-card border border-border overflow-hidden hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/5">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60" />

                  {/* Overlay Links */}
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-background/50 backdrop-blur-sm">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-card border border-border hover:border-accent hover:bg-accent/10 text-foreground hover:text-accent transition-all"
                      aria-label="View on GitHub"
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-card border border-border hover:border-accent hover:bg-accent/10 text-foreground hover:text-accent transition-all"
                      aria-label="View project"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-center gap-4 text-xs text-muted mb-3">
                    <span className="flex items-center gap-1">
                      <Users size={12} />
                      {project.type}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar size={12} />
                      {project.date}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs rounded-md bg-accent/10 text-accent border border-accent/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
