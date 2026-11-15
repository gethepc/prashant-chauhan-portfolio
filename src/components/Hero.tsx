"use client";

import { motion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowRight,
  ExternalLink,
  GitFork,
  Globe,
  Mail,
} from "lucide-react";
import profileData from "@/data/profile.json";
import { SystemMap } from "@/components/SystemMap";
import { Portrait } from "@/components/Portrait";

const expertise = [
  "AI-assisted operations",
  "Cloud platform architecture",
  "Security & FinOps",
];

const tags = [
  "IBM Cloud",
  "HashiCorp Vault",
  "Cloud Security",
  "AI Automation",
  "FinOps",
  "RAG / LLM",
  "Enterprise Automation",
  "Hybrid Cloud",
];

export function Hero() {
  return (
    <section className="hero-shell relative isolate flex min-h-screen flex-col justify-center overflow-hidden px-6 pb-14 pt-28">
      <div className="hero-grid absolute inset-0 -z-10" aria-hidden="true" />
      <div className="hero-glow hero-glow-primary absolute -z-10" aria-hidden="true" />
      <div className="hero-glow hero-glow-secondary absolute -z-10" aria-hidden="true" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-[1fr_0.96fr] lg:gap-10">
        <div className="flex flex-col gap-7">
          <motion.div
            initial={{ opacity: 0, y: -14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="flex items-center gap-3"
          >
            <Portrait variant="hero" />
            <div className="flex flex-col gap-2">
              <span className="section-overline">Cloud × AI × Automation</span>
              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--glass-sm-bg)] px-3 py-1.5 text-xs font-medium text-[var(--body-text)] backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                Open to meaningful conversations
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08 }}
          >
            <h1 className="font-sans text-5xl font-bold leading-[0.98] tracking-[-0.06em] text-white sm:text-6xl xl:text-7xl">
              {profileData.name}
              <span className="ml-1 text-[var(--color-cyan)]">.</span>
            </h1>
            <p className="mt-5 max-w-2xl font-sans text-3xl font-semibold leading-tight tracking-tight text-[var(--heading-color)] sm:text-4xl">
              I build cloud platforms ready for the{" "}
              <span className="gradient-text">AI era.</span>
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.17 }}
            className="max-w-xl text-base leading-7 text-[var(--body-text)] sm:text-lg sm:leading-8"
          >
            At IBM Cloud, I design secure, resilient platforms and build AI-assisted
            automation to make complex enterprise operations more intelligent.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24 }}
            className="flex flex-wrap gap-2"
          >
            {expertise.map((item, index) => (
              <span
                key={item}
                className={`tag ${index === 0 ? "tag-cyan" : index === 1 ? "tag-blue" : "tag-violet"} px-3 py-1.5`}
              >
                {item}
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-1 flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              className="group inline-flex h-12 items-center gap-2 rounded-xl bg-[var(--color-primary)] px-5 font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-500 glow-ring"
            >
              Explore my work
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={`mailto:${profileData.contact.email}`}
              className="inline-flex h-12 items-center gap-2 rounded-xl border border-[var(--glass-border)] bg-[var(--glass-sm-bg)] px-5 font-semibold text-[var(--heading-color)] backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--color-cyan)]"
            >
              Let&apos;s connect
              <ArrowDownRight className="h-4 w-4 text-[var(--color-cyan)]" />
            </a>
            <div className="flex items-center gap-1">
              <a
                href={profileData.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 w-11 items-center justify-center rounded-xl text-[var(--color-muted)] transition-colors hover:bg-[var(--glass-sm-bg)] hover:text-[var(--color-primary)]"
                aria-label="LinkedIn"
              >
                <ExternalLink className="h-4 w-4" />
              </a>
              <a
                href={profileData.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 w-11 items-center justify-center rounded-xl text-[var(--color-muted)] transition-colors hover:bg-[var(--glass-sm-bg)] hover:text-[var(--heading-color)]"
                aria-label="GitHub"
              >
                <GitFork className="h-4 w-4" />
              </a>
              <a
                href={profileData.contact.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 w-11 items-center justify-center rounded-xl text-[var(--color-muted)] transition-colors hover:bg-[var(--glass-sm-bg)] hover:text-[var(--color-cyan)]"
                aria-label="Portfolio website"
              >
                <Globe className="h-4 w-4" />
              </a>
              <a
                href={`mailto:${profileData.contact.email}`}
                className="inline-flex h-11 w-11 items-center justify-center rounded-xl text-[var(--color-muted)] transition-colors hover:bg-[var(--glass-sm-bg)] hover:text-[var(--color-violet)]"
                aria-label="Email"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-3 grid max-w-xl grid-cols-2 gap-4 border-t border-[var(--color-border)] pt-5 sm:grid-cols-3"
          >
            <div>
              <p className="font-sans text-2xl font-bold tracking-tight text-[var(--heading-color)]">
                {profileData.experience_years}+
              </p>
              <p className="mt-1 text-xs font-medium text-[var(--color-muted)]">
                years in technology
              </p>
            </div>
            <div>
              <p className="font-sans text-2xl font-bold tracking-tight text-[var(--heading-color)]">
                Global
              </p>
              <p className="mt-1 text-xs font-medium text-[var(--color-muted)]">
                enterprise platforms
              </p>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <p className="font-sans text-2xl font-bold tracking-tight text-[var(--heading-color)]">
                IBM Cloud
              </p>
              <p className="mt-1 text-xs font-medium text-[var(--color-muted)]">
                platform engineering
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55 }}
            className="hidden flex-wrap gap-2 pt-1 xl:flex"
          >
            {tags.map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.18 }}
          className="relative mx-auto w-full max-w-[600px]"
        >
          <div className="hero-orbit hero-orbit-one" aria-hidden="true" />
          <div className="hero-orbit hero-orbit-two" aria-hidden="true" />
          <div className="mb-3 flex items-center justify-between px-1">
            <div>
              <p className="section-overline">Connected thinking</p>
              <p className="mt-1 text-sm font-medium text-[var(--body-text)]">
                Ideas to intelligent systems
              </p>
            </div>
            <span className="hidden items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--glass-sm-bg)] px-3 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-[var(--color-muted)] backdrop-blur-md sm:inline-flex">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-cyan)] animate-pulse" />
              System map
            </span>
          </div>
          <div className="hero-map-frame">
            <SystemMap />
          </div>
          <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 px-1 text-xs font-medium text-[var(--color-muted)]">
            {tags.slice(0, 4).map((tag) => (
              <span key={tag} className="inline-flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-[var(--color-cyan)]" />
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[var(--color-background)] to-transparent" />
    </section>
  );
}
