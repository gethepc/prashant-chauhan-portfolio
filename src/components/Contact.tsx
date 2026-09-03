"use client";

import { motion } from "framer-motion";
import profileData from "@/data/profile.json";
import { Mail, ExternalLink, Phone, GitFork, Globe } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="relative py-24 px-6 border-t border-white/5">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/3 to-transparent pointer-events-none" />
      <div className="max-w-4xl mx-auto text-center relative z-10">

        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="section-overline mb-4">Let&apos;s Connect</div>
          <h2 className="font-sans text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Let&apos;s Build<br />
            <span className="gradient-text">Intelligent Systems</span><br />
            Together.
          </h2>
          <p className="text-[var(--color-muted)] text-xl mb-12 max-w-2xl mx-auto">
            Open to architecture collaboration and industry networking around secure cloud platforms,
            FinOps, secrets management, and AI-assisted operations.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a
            href={`mailto:${profileData.contact.email}`}
            className="inline-flex h-14 items-center gap-2 px-8 rounded-xl bg-[var(--color-primary)] text-white font-semibold hover:bg-blue-500 transition-all glow-ring"
          >
            <Mail className="w-5 h-5" /> {profileData.contact.email}
          </a>
          <a
            href={profileData.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-14 items-center gap-2 px-8 rounded-xl glass text-white font-semibold hover:border-cyan-500/40 transition-all"
          >
            <ExternalLink className="w-5 h-5 text-blue-400" /> LinkedIn Profile
          </a>
          <a
            href={profileData.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-14 items-center gap-2 px-8 rounded-xl glass text-white font-semibold hover:border-white/40 transition-all"
          >
            <GitFork className="w-5 h-5 text-white" /> GitHub Profile
          </a>
          <a
            href={profileData.contact.website}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-14 items-center gap-2 px-8 rounded-xl glass text-white font-semibold hover:border-cyan-400/40 transition-all"
          >
            <Globe className="w-5 h-5 text-cyan-400" /> Portfolio Website
          </a>
          <a
            href={`tel:${profileData.contact.phone}`}
            className="inline-flex h-14 items-center gap-2 px-8 rounded-xl glass text-white font-semibold hover:border-violet-500/40 transition-all"
          >
            <Phone className="w-5 h-5 text-violet-400" /> {profileData.contact.phone}
          </a>
        </motion.div>

        <div className="mt-20 text-[var(--color-muted)] text-sm">
          © {new Date().getFullYear()} {profileData.name} · {profileData.location} · All rights reserved.
        </div>
      </div>
    </section>
  );
}
