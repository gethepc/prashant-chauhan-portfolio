"use client";

import { motion } from "framer-motion";
import profileData from "@/data/profile.json";
import { Settings, Database, Server, Cpu } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  "Infrastructure Automation": <Server className="w-6 h-6 text-blue-400" />,
  "Database Automation": <Database className="w-6 h-6 text-yellow-400" />,
  "Cloud / Virtualization Automation": <Cpu className="w-6 h-6 text-cyan-400" />,
  "Platform Automation": <Settings className="w-6 h-6 text-violet-400" />,
};

const tagMap: Record<string, string> = {
  "Infrastructure Automation": "tag-blue",
  "Database Automation": "tag-gold",
  "Cloud / Virtualization Automation": "tag-cyan",
  "Platform Automation": "tag-violet",
};

export function AutomationCapabilities() {
  const systems = profileData.automation_systems;

  return (
    <section id="automation" className="relative py-24 px-6 max-w-7xl mx-auto w-full">
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl" />

      <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14">
        <div className="section-overline mb-3">Automation Depth</div>
        <h2 className="font-sans text-4xl md:text-5xl font-bold text-white animated-underline">
          Enterprise Automation Systems
        </h2>
        <p className="text-[var(--color-muted)] text-lg mt-4 max-w-xl">
          Deep automation capability spanning infrastructure, databases, virtualization, and enterprise platforms.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {systems.map((sys, i) => {
          const accent = tagMap[sys.category] ?? "tag-blue";
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="grad-border group"
            >
              <div className="glass rounded-2xl p-7 h-full flex flex-col gap-5 group-hover:bg-white/[0.025] transition-colors">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/5 shrink-0">
                    {iconMap[sys.category] ?? <Settings className="w-6 h-6 text-gray-400" />}
                  </div>
                  <div>
                    <span className={`tag ${accent} mb-1.5 inline-block`}>{sys.category}</span>
                    <h3 className="font-sans text-lg font-bold text-white">{sys.name}</h3>
                    <p className="text-[var(--color-muted)] text-sm mt-1 leading-relaxed">{sys.description}</p>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-400 font-semibold mb-2">Capabilities</p>
                    <ul className="space-y-1">
                      {sys.capabilities.slice(0, 3).map((c, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-300">
                          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-cyan-400/70 shrink-0" />
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-gray-400 font-semibold mb-2">Impact</p>
                    <ul className="space-y-1">
                      {sys.impact.slice(0, 2).map((imp, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-300">
                          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-400/70 shrink-0" />
                          {imp}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
                  {sys.technologies.map((t, idx) => (
                    <span key={idx} className="tag">{t}</span>
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