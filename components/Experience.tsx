"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Calendar } from "lucide-react";

const education = [
  {
    title: "Advanced Software Engineering Certificate",
    institution: "Hack Reactor",
    period: "Jul 2022 - Nov 2022",
    description:
      "An immersive software engineering program with 1000+ hours of coding, where I developed foundations for full-stack development in collaborative engineering projects. Technologies include JavaScript, Python, Django, FastAPI, React, Redux Toolkit, PostgreSQL, MongoDB, and Docker.",
  },
  {
    title: "Master's Degree, Occupational Therapy",
    institution: "The University of Texas Medical Branch",
    period: "Aug 2013 - Aug 2015",
    description:
      "Activities: Vice President of Student Occupational Therapy Association, Pi Theta Epsilon, Alpha Eta Honor Society, Senior Care",
  },
  {
    title: "Bachelor of Science, Multi/Interdisciplinary Studies",
    institution: "University of Houston",
    period: "May 2008 - May 2011",
    description: "",
  },
];

const experience = [
  {
    title: "Software Developer",
    company: "The Reynolds and Reynolds Company",
    period: "Jan 2023 - Present",
    highlights: [
      "Develop and maintain Service Portal 2.0, a full-stack web application for car dealerships and customers",
      "Build modern front-end interfaces using React, TypeScript, Redux, and CSS",
      "Create API integrations connecting front-end applications with legacy database infrastructure",
    ],
  },
  {
    title: "ICU / Acute Occupational Therapist",
    company: "Baylor St. Luke's Medical Center",
    period: "Oct 2015 - Dec 2022",
    highlights: [
      "Evaluated and implemented therapeutic interventions within a 24 hour referral order window",
      "Conducted evidence based treatments to improve patient function for activities of daily living",
      "Contributed to safe discharges and recommendations for transitions post-acute",
      "Oriented and trained newly hired occupational therapists to the ICU/Acute units",
    ],
  },
  {
    title: "Long-term / Interim Health Teacher",
    company: "Tomball Memorial High School",
    period: "Aug 2011 - May 2013",
    highlights: [
      "Formed regulatory standard health curriculum and subject matter proficiency to students",
      "Applied a curriculum-based system to record student progress and inform appropriate personnel",
      "Practiced classroom management techniques to maintain discipline appropriate for learning",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            My <span className="gradient-text">Journey</span>
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="p-2 rounded-lg bg-accent/10">
                <GraduationCap className="text-accent" size={24} />
              </div>
              <h3 className="text-2xl font-semibold">Education</h3>
            </motion.div>

            <div className="relative pl-8 border-l-2 border-border">
              {education.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative mb-8 last:mb-0"
                >
                  <div className="absolute -left-[41px] w-4 h-4 rounded-full bg-accent border-4 border-background" />
                  <div className="p-5 rounded-xl bg-card border border-border hover:border-accent/50 transition-colors">
                    <div className="flex items-center gap-2 text-sm text-accent mb-2">
                      <Calendar size={14} />
                      {item.period}
                    </div>
                    <h4 className="text-lg font-semibold mb-1">{item.title}</h4>
                    <p className="text-muted text-sm mb-2">{item.institution}</p>
                    {item.description && (
                      <p className="text-sm text-muted/80">{item.description}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Work Experience */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="p-2 rounded-lg bg-accent/10">
                <Briefcase className="text-accent" size={24} />
              </div>
              <h3 className="text-2xl font-semibold">Experience</h3>
            </motion.div>

            <div className="relative pl-8 border-l-2 border-border">
              {experience.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative mb-8 last:mb-0"
                >
                  <div className="absolute -left-[41px] w-4 h-4 rounded-full bg-accent border-4 border-background" />
                  <div className="p-5 rounded-xl bg-card border border-border hover:border-accent/50 transition-colors">
                    <div className="flex items-center gap-2 text-sm text-accent mb-2">
                      <Calendar size={14} />
                      {item.period}
                    </div>
                    <h4 className="text-lg font-semibold mb-1">{item.title}</h4>
                    <p className="text-muted text-sm mb-3">{item.company}</p>
                    <ul className="space-y-2">
                      {item.highlights.map((highlight, i) => (
                        <li
                          key={i}
                          className="text-sm text-muted/80 pl-4 relative before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-accent/50"
                        >
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
