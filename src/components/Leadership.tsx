"use client";

import { motion } from "framer-motion";
import profileData from "@/data/profile.json";
import { Users, Layers, Handshake, CheckCircle2 } from "lucide-react";

const pillars = [
  {
    icon: Users,
    color: "tag-blue",
    accentColor: "text-blue-400",
    borderColor: "border-blue-500/20",
    glowColor: "bg-blue-500/5",
    title: "Team Leadership",
    summary: (profileData as any).leadership.team_leadership.summary,
    highlights: (profileData as any).leadership.team_leadership.highlights,
  },
  {
    icon: Layers,
    color: "tag-cyan",
    accentColor: "text-cyan-400",
    borderColor: "border-cyan-500/20",
    glowColor: "bg-cyan-500/5",
    title: "Programme & Project Delivery",
    summary: (profileData as any).leadership.project_delivery.summary,
    highlights: (profileData as any).leadership.project_delivery.highlights,
  },
  {
    icon: Handshake,
    color: "tag-violet",
    accentColor: "text-violet-400",
    borderColor: "border-violet-500/20",
    glowColor: "bg-violet-500/5",
    title: "Stakeholder & Governance",
    summary: (profileData as any).leadership.stakeholder_management.summary,
    highlights: (profileData as any).leadership.stakeholder_management.highlights,
  },
];

export function Leadership() {
  const leadership = (profileData as any).leadership;

  return (
    <section id="leadership" className="relative py-24 px-6 max-w-7xl mx-auto w-full">
      {/* Ambient orbs */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-violet-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-14"
      >
        <div className="section-overline mb-3">Leadership</div>
        <h2 className="font-sans text-4xl md:text-5xl font-bold text-white animated-underline">
          Leading Teams, Projects<br />&amp; Enterprise Deliveries
        </h2>
        <p className="text-[var(--color-muted)] text-lg mt-4 max-w-2xl">
          {leadership.headline} — from hands-on engineering leadership to CXO-level programme ownership.
        </p>
      </motion.div>

      {/* Key metrics row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
        {leadership.key_metrics.map((metric: any, i: number) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
            className="grad-border group"
          >
            <div className="glass rounded-xl p-5 text-center group-hover:bg-white/[0.025] transition-colors">
              <div className="font-sans text-3xl font-black gradient-text mb-1">{metric.value}</div>
              <div className="text-white font-semibold text-sm mb-1">{metric.label}</div>
              <div className="text-[var(--color-muted)] text-xs">{metric.note}</div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Three pillars */}
      <div className="grid lg:grid-cols-3 gap-6 mb-14">
        {pillars.map((pillar, i) => {
          const Icon = pillar.icon;
          return (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.55 }}
              className="grad-border group"
            >
              <div className="glass rounded-2xl p-6 h-full flex flex-col gap-4 group-hover:bg-white/[0.025] transition-colors">
                {/* Icon + title */}
                <div className="flex items-start gap-3">
                  <div className={`p-2 rounded-lg ${pillar.glowColor} border ${pillar.borderColor} shrink-0`}>
                    <Icon className={`w-5 h-5 ${pillar.accentColor}`} />
                  </div>
                  <div>
                    <span className={`tag ${pillar.color} mb-2 inline-block text-xs`}>Leadership Pillar</span>
                    <h3 className="font-sans text-lg font-bold text-white leading-snug">{pillar.title}</h3>
                  </div>
                </div>

                {/* Summary */}
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">{pillar.summary}</p>

                {/* Highlights */}
                <ul className="flex flex-col gap-2 mt-auto">
                  {pillar.highlights.map((h: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-300">
                      <CheckCircle2 className={`w-4 h-4 ${pillar.accentColor} shrink-0 mt-0.5 opacity-80`} />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Delivery methodology strip */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="glass rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4"
      >
        <div className="shrink-0">
          <div className="text-xs uppercase tracking-widest text-[var(--color-muted)] mb-1">Delivery Methodologies</div>
          <div className="text-white font-semibold text-sm">Frameworks &amp; Governance Certifications</div>
        </div>
        <div className="w-px h-10 bg-white/10 hidden sm:block" />
        <div className="flex flex-wrap gap-2">
          {leadership.delivery_methodologies.map((m: string) => (
            <span key={m} className="tag tag-gold">{m}</span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
