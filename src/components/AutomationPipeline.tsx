"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Zap, Layers, Shield, Cpu, Activity } from "lucide-react";

const PIPELINES = [
  {
    name: "LPMS",
    category: "Linux Patch Management System",
    color: "#3B82F6",
    animDelay: "0s",
    animDuration: "2.4s",
    steps: [
      { label: "Server Queue",   icon: Cpu },
      { label: "Schedule",       icon: Zap },
      { label: "Patch & Verify", icon: Shield },
      { label: "Compliance",     icon: CheckCircle2 },
    ],
    impact: "60% manual effort reduced",
    tech: ["Ansible", "Python", "Cron", "YUM/APT"],
  },
  {
    name: "Oracle RAC",
    category: "Database Cluster Automation",
    color: "#8B5CF6",
    animDelay: "0.6s",
    animDuration: "2.8s",
    steps: [
      { label: "Init Cluster",  icon: Layers },
      { label: "ASM Config",    icon: Cpu },
      { label: "Node Sync",     icon: Activity },
      { label: "Live Cluster",  icon: CheckCircle2 },
    ],
    impact: "Hours → Minutes setup time",
    tech: ["Shell", "Ansible", "Oracle Tools"],
  },
  {
    name: "VM Auto-Provisioning",
    category: "Cloud / Virtualization Automation",
    color: "#22D3EE",
    animDelay: "1.2s",
    animDuration: "2.6s",
    steps: [
      { label: "VM Request",       icon: Zap },
      { label: "Template Deploy",  icon: Layers },
      { label: "OS Hardening",     icon: Shield },
      { label: "Ready",            icon: CheckCircle2 },
    ],
    impact: "Provisioning in minutes",
    tech: ["Terraform", "VMware", "Ansible", "OpenStack"],
  },
  {
    name: "AFA",
    category: "Enterprise Automation Framework",
    color: "#d4af37",
    animDelay: "1.8s",
    animDuration: "3.0s",
    steps: [
      { label: "Trigger",     icon: Zap },
      { label: "Orchestrate", icon: Layers },
      { label: "Execute",     icon: Cpu },
      { label: "Monitor",     icon: Activity },
    ],
    impact: "Standardized zero-touch ops",
    tech: ["Python", "Terraform", "Ansible"],
  },
];

export function AutomationPipeline() {
  return (
    <section id="automation" className="relative py-24 px-6 max-w-7xl mx-auto w-full">
      <div className="absolute top-1/4 right-0 w-72 h-72 bg-violet-500/5 rounded-full blur-3xl pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-14"
      >
        <div className="section-overline mb-3">Automation Engine</div>
        <h2 className="font-sans text-4xl md:text-5xl font-bold text-white animated-underline">
          Enterprise Automation Factory
        </h2>
        <p className="text-[var(--color-muted)] text-lg mt-4 max-w-2xl">
          Four production automation pipelines — each converting manual effort into orchestrated,
          validated, zero-touch operations.
        </p>
      </motion.div>

      <div className="flex flex-col gap-5">
        {PIPELINES.map((pipeline, i) => {
          const Steps = pipeline.steps;
          return (
            <motion.div
              key={pipeline.name}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="grad-border group"
            >
              <div className="glass rounded-2xl p-5 group-hover:bg-white/[0.02] transition-colors">
                {/* Header row */}
                <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                  <div>
                    <span
                      className="tag mb-1.5 inline-block"
                      style={{ borderColor: `${pipeline.color}50`, color: pipeline.color, background: `${pipeline.color}12` }}
                    >
                      {pipeline.category}
                    </span>
                    <h3 className="font-sans text-lg font-bold text-white">{pipeline.name}</h3>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-[var(--color-muted)] mb-1">Impact</div>
                    <div className="font-semibold text-sm" style={{ color: pipeline.color }}>
                      {pipeline.impact}
                    </div>
                  </div>
                </div>

                {/* Pipeline steps */}
                <div className="flex items-center gap-1 overflow-x-auto pb-1 mb-4 scrollbar-none">
                  {Steps.map((step, j) => {
                    const Icon = step.icon;
                    return (
                      <div key={j} className="flex items-center gap-1 shrink-0">
                        <div
                          className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold select-none"
                          style={{
                            background: `${pipeline.color}12`,
                            border: `1px solid ${pipeline.color}35`,
                            color: pipeline.color,
                          }}
                        >
                          <Icon className="w-3 h-3" />
                          <span>{step.label}</span>
                        </div>
                        {j < Steps.length - 1 && (
                          <svg width="18" height="10" viewBox="0 0 18 10" fill="none" className="shrink-0">
                            <path d="M0 5H14M14 5L10 1M14 5L10 9" stroke={pipeline.color} strokeOpacity="0.55" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Animated packet track */}
                <div className="relative h-1 w-full rounded-full overflow-hidden mb-3" style={{ background: `${pipeline.color}15` }}>
                  {/* Fill bar */}
                  <div
                    className="absolute top-0 left-0 h-full rounded-full pipeline-fill"
                    style={{
                      background: `linear-gradient(to right, ${pipeline.color}60, ${pipeline.color})`,
                      animationDelay: pipeline.animDelay,
                      animationDuration: pipeline.animDuration,
                    }}
                  />
                  {/* Glowing packet dot */}
                  <div
                    className="absolute top-1/2 -translate-y-1/2 w-3 h-3 -mt-px rounded-full pipeline-packet"
                    style={{
                      background: pipeline.color,
                      boxShadow: `0 0 8px ${pipeline.color}, 0 0 16px ${pipeline.color}80`,
                      animationDelay: pipeline.animDelay,
                      animationDuration: pipeline.animDuration,
                    }}
                  />
                </div>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5">
                  {pipeline.tech.map((t) => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
