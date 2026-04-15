"use client";

import { motion } from "framer-motion";
import profileData from "@/data/profile.json";
import { CheckCircle } from "lucide-react";

const pillars = [
  {
    title: "Cloud & Platform Architecture",
    desc: "Designing resilient, scalable, and secure hybrid/multi-cloud platforms from landing zones to production.",
    color: "tag-blue",
  },
  {
    title: "AI-Driven Operations & Automation",
    desc: "Building intelligent systems — from auto-healing incident engines to RAG-based knowledge retrieval.",
    color: "tag-violet",
  },
  {
    title: "Strategic Transformation Leadership",
    desc: "End-to-end ownership from design through execution, operating at L3/L4 depth with board-level clarity.",
    color: "tag-cyan",
  },
];

export function About() {
  return (
    <section id="about" className="relative py-24 px-6 max-w-7xl mx-auto w-full">
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-violet-500/6 rounded-full blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <div className="section-overline mb-3">About</div>
        <h2 className="font-sans text-4xl md:text-5xl font-bold text-white animated-underline">
          Architecting Intelligent<br />Enterprise Systems
        </h2>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-5 text-[var(--color-muted)] text-lg leading-relaxed"
        >
          <p>
            I specialize in bridging complex cloud infrastructure with next-generation AI operations.
            As a Senior Cloud Architect with {profileData.experience_years}+ years of experience,
            my focus is designing <strong className="text-white font-semibold">resilient ecosystems that scale, heal, and govern themselves.</strong>
          </p>
          <p>
            My approach combines deep technical execution at L3/L4 depth with strategic clarity
            to communicate to CIOs, CTOs, and board-level stakeholders — delivering platforms
            that are not just built, but operationalized and continuously improved.
          </p>
          <p>
            I&apos;ve delivered across telecom, utilities, and global enterprise — with hands-on ownership
            of cloud migrations, landing zones, FinOps frameworks, and AI-powered automation systems.
          </p>

          <div className="pt-4 flex flex-wrap gap-2">
            {profileData.positioning.core_strengths.map((s) => (
              <span key={s} className="tag tag-blue">{s}</span>
            ))}
          </div>
        </motion.div>

        <div className="flex flex-col gap-5">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              className="grad-border group"
            >
              <div className="glass rounded-2xl p-6 group-hover:bg-white/[0.02] transition-colors">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 shrink-0" />
                  <div>
                    <h3 className={`font-sans font-bold text-sm mb-1 ${p.color.replace("tag-", "text-")} text-white`}>{p.title}</h3>
                    <p className="text-[var(--color-muted)] text-sm leading-relaxed">{p.desc}</p>
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