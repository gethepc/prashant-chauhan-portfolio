"use client";

import { motion } from "framer-motion";
import profileData from "@/data/profile.json";
import { CheckCircle } from "lucide-react";
import { Portrait } from "@/components/Portrait";

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
            Senior Cloud Platform Architect with {profileData.experience_years}+ years of experience
            designing secure, resilient, scalable, and intelligent enterprise platforms. Currently working
            across IBM Cloud platform engineering, with a focus on secrets management, security automation,
            cloud cost optimisation, platform resilience, observability, and AI-assisted operations.
          </p>
          <p>
            My approach combines deep technical execution at L3/L4 depth with strategic clarity
            to communicate to CIOs, CTOs, and board-level stakeholders — delivering platforms
            that are not just built, but operationalized and continuously improved.
          </p>
          <p>
            I have delivered technology transformation across telecommunications, utilities, IBM Cloud,
            and global enterprise environments, with hands-on ownership of public and private cloud
            platforms, secrets management, platform security, landing zones, FinOps, observability,
            resilient infrastructure, and AI-powered automation.
          </p>

          <div className="pt-4 flex flex-wrap gap-2">
            {profileData.positioning.core_strengths.map((s) => (
              <span key={s} className="tag tag-blue">{s}</span>
            ))}
          </div>
        </motion.div>

        <div className="flex flex-col gap-5">
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grad-border group max-w-xs mx-auto lg:mx-0"
          >
            <div className="glass rounded-2xl p-2 group-hover:bg-white/[0.02] transition-colors">
              <Portrait variant="about" />
              <div className="px-3 py-3">
                <p className="font-sans text-sm font-bold text-white">{profileData.name}</p>
                <p className="text-xs text-[var(--color-muted)] mt-0.5">
                  Senior Cloud Platform Architect · IBM Cloud · Bengaluru
                </p>
              </div>
            </div>
          </motion.div>
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