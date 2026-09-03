"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, ExternalLink, GitFork, Globe } from "lucide-react";
import profileData from "@/data/profile.json";
import { SystemMap } from "@/components/SystemMap";
import { Portrait } from "@/components/Portrait";

const tags = ["IBM Cloud", "HashiCorp Vault", "Cloud Security", "AI Automation", "FinOps", "RAG/LLM", "Enterprise Automation", "Landing Zones", "Hybrid Cloud", "Platform Resilience"];

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-24 pb-12 px-6">

      {/* Background layer */}
      <div className="absolute inset-0 grid-bg -z-10" />
      <div className="orb w-[600px] h-[600px] top-0 right-[-100px] bg-blue-500/10 -z-10" style={{animation:"soft-pulse 8s ease-in-out infinite"}} />
      <div className="orb w-[400px] h-[400px] bottom-1/4 left-[-80px] bg-violet-600/8 -z-10" style={{animation:"soft-pulse 10s ease-in-out infinite 2s"}} />
      <div className="orb w-[300px] h-[300px] top-1/3 left-1/2 bg-cyan-500/6 -z-10" style={{animation:"soft-pulse 6s ease-in-out infinite 1s"}} />

      <div className="relative z-10 max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">

        {/* Left: Text */}
        <div className="flex flex-col gap-7">

          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 w-fit"
          >
            <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="section-overline">Open to technology leadership, architecture collaboration & industry networking</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-6"
          >
            <Portrait variant="hero" />
            <h1 className="font-sans text-5xl sm:text-6xl xl:text-7xl font-bold tracking-tight text-white leading-[1.08]">
              {profileData.name}
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-wrap gap-2"
          >
            {["Senior Cloud Platform Architect", "AI Automation Builder", "Enterprise Transformation Leader"].map((t) => (
              <span key={t} className="tag tag-blue font-sans text-sm px-3 py-1">{t}</span>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-[var(--color-muted)] text-lg leading-relaxed max-w-xl"
          >
            Architecting secure and resilient cloud platforms, AI-driven automation systems,
            intelligent FinOps solutions, and enterprise-grade platform services across global environments.
          </motion.p>

          {/* CTA row */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-wrap gap-4 mt-2"
          >
            <a
              href="#projects"
              className="inline-flex h-12 items-center gap-2 px-6 rounded-xl bg-[var(--color-primary)] text-white font-semibold hover:bg-blue-500 transition-all duration-200 glow-ring"
            >
              View Projects <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${profileData.contact.email}`}
              className="inline-flex h-12 w-12 items-center justify-center rounded-xl glass text-white hover:border-violet-400/40 transition-all duration-200"
              aria-label="Email"
            >
              <Mail className="w-5 h-5 text-violet-400" />
            </a>
            <a
              href={profileData.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 w-12 items-center justify-center rounded-xl glass text-white hover:border-blue-400/40 transition-all duration-200"
              aria-label="LinkedIn"
            >
              <ExternalLink className="w-5 h-5 text-blue-400" />
            </a>
            <a
              href={profileData.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 w-12 items-center justify-center rounded-xl glass text-white hover:border-white/40 transition-all duration-200"
              aria-label="GitHub"
            >
              <GitFork className="w-5 h-5 text-white" />
            </a>
            <a
              href={profileData.contact.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 w-12 items-center justify-center rounded-xl glass text-white hover:border-cyan-400/40 transition-all duration-200"
              aria-label="Portfolio Website"
            >
              <Globe className="w-5 h-5 text-cyan-400" />
            </a>
          </motion.div>

          {/* Scrolling tech tags */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="hidden sm:flex flex-wrap gap-2 mt-4 pt-6 border-t border-white/5"
          >
            {tags.map((t) => (
              <span key={t} className="tag">{t}</span>
            ))}
          </motion.div>
        </div>

        {/* Right: Live System Map */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="hidden lg:block w-full"
        >
          <SystemMap />
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[var(--color-background)] to-transparent pointer-events-none -z-0" />
    </section>
  );
}
