"use client";

import { motion } from "framer-motion";
import profileData from "@/data/profile.json";
import { Cloud, ShieldCheck, Network, Layers, GitBranch, MoveRight } from "lucide-react";

const migrationIcons: React.ReactNode[] = [
  <GitBranch key="a" className="w-5 h-5 text-blue-400" />,
  <MoveRight key="b" className="w-5 h-5 text-cyan-400" />,
  <Layers key="c" className="w-5 h-5 text-violet-400" />,
  <Cloud key="d" className="w-5 h-5 text-emerald-400" />,
];

export function CloudExpertise() {
  const arch = profileData.cloud_architecture;
  const lz = profileData.landing_zone;
  const mig = profileData.migration_expertise;
  const ops = profileData.operations_expertise;

  return (
    <section id="cloud" className="relative py-24 px-6 max-w-7xl mx-auto w-full">
      <div className="absolute top-0 left-1/2 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />

      <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14">
        <div className="section-overline mb-3">Architecture Depth</div>
        <h2 className="font-sans text-4xl md:text-5xl font-bold text-white animated-underline">
          Cloud Architecture & Governance
        </h2>
        <p className="text-[var(--color-muted)] text-lg mt-4 max-w-xl">
          End-to-end cloud architecture ownership — from landing zone design to L3/L4 operational depth.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-6 mb-6">

        {/* Cloud Architecture */}
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0 }} className="grad-border group">
          <div className="glass rounded-2xl p-7 h-full group-hover:bg-white/[0.02] transition-colors">
            <div className="flex items-center gap-3 mb-5">
              <div className="p-2.5 rounded-xl bg-blue-500/10 border border-blue-500/20"><Cloud className="w-6 h-6 text-blue-400" /></div>
              <div>
                <span className="tag tag-blue mb-1 inline-block">Architecture</span>
                <h3 className="font-sans text-lg font-bold text-white">Cloud Architecture Expertise</h3>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Platforms</p>
                <div className="flex flex-wrap gap-1.5">{arch.platforms.map((p, i) => <span key={i} className="tag tag-blue">{p}</span>)}</div>
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Domains</p>
                <ul className="space-y-1">{arch.domains.slice(0, 4).map((d, i) => <li key={i} className="flex items-start gap-2 text-sm text-gray-300"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-400/70 shrink-0" />{d}</li>)}</ul>
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Advanced Skills</p>
                <ul className="space-y-1">{arch.advanced_skills.slice(0, 3).map((s, i) => <li key={i} className="flex items-start gap-2 text-sm text-gray-300"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-cyan-400/70 shrink-0" />{s}</li>)}</ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Landing Zones */}
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="grad-border group">
          <div className="glass rounded-2xl p-7 h-full group-hover:bg-white/[0.02] transition-colors">
            <div className="flex items-center gap-3 mb-5">
              <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20"><Network className="w-6 h-6 text-cyan-400" /></div>
              <div>
                <span className="tag tag-cyan mb-1 inline-block">Governance</span>
                <h3 className="font-sans text-lg font-bold text-white">Landing Zone Expertise</h3>
              </div>
            </div>
            <p className="text-[var(--color-muted)] text-sm mb-5 leading-relaxed">{lz.description}</p>
            <div className="space-y-4">
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Frameworks</p>
                <div className="flex flex-wrap gap-1.5">{lz.frameworks.map((f, i) => <span key={i} className="tag tag-cyan">{f}</span>)}</div>
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Capabilities</p>
                <ul className="space-y-1">{lz.capabilities.slice(0, 4).map((c, i) => <li key={i} className="flex items-start gap-2 text-sm text-gray-300"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-cyan-400/70 shrink-0" />{c}</li>)}</ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">

        {/* Migration */}
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }} className="grad-border group">
          <div className="glass rounded-2xl p-7 h-full group-hover:bg-white/[0.02] transition-colors">
            <div className="flex items-center gap-3 mb-5">
              <div className="p-2.5 rounded-xl bg-violet-500/10 border border-violet-500/20"><GitBranch className="w-6 h-6 text-violet-400" /></div>
              <div>
                <span className="tag tag-violet mb-1 inline-block">Migration</span>
                <h3 className="font-sans text-lg font-bold text-white">Migration & Modernisation</h3>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 mb-4">
              {mig.migration_types.map((t, i) => (
                <div key={i} className="glass-sm px-3 py-2 rounded-lg flex items-center gap-2 text-sm text-gray-300">
                  {migrationIcons[i] ?? null} {t}
                </div>
              ))}
            </div>
            <div>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Outcomes</p>
              {mig.outcomes.map((o, i) => <div key={i} className="flex items-start gap-2 text-sm text-gray-300 mb-1"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-violet-400/70 shrink-0" />{o}</div>)}
            </div>
          </div>
        </motion.div>

        {/* L3/L4 Operations */}
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="grad-border group">
          <div className="glass rounded-2xl p-7 h-full group-hover:bg-white/[0.02] transition-colors">
            <div className="flex items-center gap-3 mb-5">
              <div className="p-2.5 rounded-xl bg-yellow-500/10 border border-yellow-500/20"><ShieldCheck className="w-6 h-6 text-yellow-400" /></div>
              <div>
                <span className="tag tag-gold mb-1 inline-block">L3 / L4 Operations</span>
                <h3 className="font-sans text-lg font-bold text-white">Deep Operations Expertise</h3>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Specializations</p>
                <ul className="space-y-1">{ops.specializations.slice(0, 4).map((s, i) => <li key={i} className="flex items-start gap-2 text-sm text-gray-300"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-yellow-400/70 shrink-0" />{s}</li>)}</ul>
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Approach</p>
                {ops.approach.map((a, i) => <div key={i} className="flex items-start gap-2 text-sm text-gray-300 mb-1"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-cyan-400/70 shrink-0" />{a}</div>)}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}