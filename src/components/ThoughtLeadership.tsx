"use client";

import { motion } from "framer-motion";
import profileData from "@/data/profile.json";
import { Brain } from "lucide-react";

const manifestos = [
  {
    heading: "Systems that heal themselves.",
    body: "I believe infrastructure should be self-aware. Through AI-based incident detection, automated runbooks, and confidence-weighted resolution, operations teams should be escalated to only when intelligence fails — not by default.",
  },
  {
    heading: "Automation before people.",
    body: "Every repeatable task is a liability. My automation-first mindset means LPMS, VM provisioning, patch management, and cluster operations are scripted, scheduled, and validated — not handled manually.",
  },
  {
    heading: "Private AI. Enterprise control.",
    body: "AI in sensitive enterprise environments must respect data sovereignty. I design RAG architectures using local LLMs (Ollama) and private vector stores — intelligent, but not exposed.",
  },
  {
    heading: "Governance from day one.",
    body: "Landing zones, RBAC, tagging policies, budget guardrails — governance is not a layer you add later. It is part of how you design cloud from the first subscription hierarchy.",
  },
  {
    heading: "FinOps is architecture.",
    body: "Cost-aware design is not finance's problem. I embed rightsizing strategies, usage analytics, and budget governance directly into architecture, not as an afterthought.",
  },
  {
    heading: "Depth at every layer.",
    body: "From board presentations to L4 root cause analysis — I operate at both ends. Translating technical complexity into executive clarity is as much a skill as debugging a cluster failover.",
  },
];

export function ThoughtLeadership() {
  return (
    <section id="philosophy" className="relative py-24 px-6 max-w-7xl mx-auto w-full">
      <div className="absolute top-0 right-0 w-72 h-72 bg-violet-500/5 rounded-full blur-3xl" />

      <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14">
        <div className="section-overline mb-3">Philosophy</div>
        <h2 className="font-sans text-4xl md:text-5xl font-bold text-white animated-underline">
          How I Design Systems That<br />Scale, Heal &amp; Govern
        </h2>
        <p className="text-[var(--color-muted)] text-lg mt-4 max-w-xl">
          The principles behind every architecture decision — from landing zone to auto-healing AI framework.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {manifestos.map((m, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="grad-border group"
          >
            <div className="glass rounded-2xl p-6 h-full flex flex-col gap-4 group-hover:bg-white/[0.02] transition-colors">
              <Brain className="w-6 h-6 text-violet-400 opacity-70" />
              <h3 className="font-sans text-lg font-bold text-white leading-snug gradient-text-violet">{m.heading}</h3>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed">{m.body}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}