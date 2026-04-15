"use client";

import { motion } from "framer-motion";
import profileData from "@/data/profile.json";
import { Briefcase, MapPin } from "lucide-react";

const companyAccents: Record<string, string> = {
  "Landis+Gyr": "tag-blue",
  "Landis+Gyr (2019)": "tag-blue",
  "Airtel Africa": "tag-cyan",
  "Orange Business Services": "tag-violet",
  "Tech Mahindra": "tag-gold",
};

const companyGeo: Record<string, string> = {
  "Landis+Gyr": "India / Global",
  "Landis+Gyr (2019)": "India",
  "Airtel Africa": "14 Countries / Africa",
  "Orange Business Services": "India / Global",
  "Tech Mahindra": "India",
};

export function Timeline() {
  return (
    <section id="experience" className="relative py-24 px-6 max-w-6xl mx-auto w-full">
      <div className="absolute top-1/2 left-0 w-48 h-48 bg-blue-500/6 rounded-full blur-3xl" />

      <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14">
        <div className="section-overline mb-3">Experience</div>
        <h2 className="font-sans text-4xl md:text-5xl font-bold text-white animated-underline">Enterprise Delivery Timeline</h2>
        <p className="text-[var(--color-muted)] text-lg mt-4 max-w-xl">
          19+ years of design, delivery, and leadership across global enterprise environments.
        </p>
      </motion.div>

      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/60 via-cyan-500/30 to-transparent hidden md:block" />

        <div className="flex flex-col gap-6 md:pl-16">
          {profileData.experience.map((exp, i) => {
            const accent = companyAccents[exp.company] ?? "tag-blue";
            const geo = companyGeo[exp.company] ?? "Global";
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="relative grad-border group"
              >
                {/* Timeline dot */}
                <div className="absolute -left-[3.35rem] top-6 hidden md:flex items-center justify-center w-6 h-6 rounded-full bg-[var(--color-background)] border-2 border-cyan-500/60 glow-ring-cyan">
                  <div className="w-2 h-2 rounded-full bg-cyan-400" />
                </div>

                <div className="glass rounded-2xl p-6 group-hover:bg-white/[0.025] transition-colors">
                  <div className="flex flex-wrap justify-between items-start gap-3 mb-4">
                    <div>
                      <span className={`tag ${accent} mb-2 inline-block`}>{exp.duration}</span>
                      <h3 className="font-sans text-xl font-bold text-white">{exp.role}</h3>
                      <div className="flex items-center gap-4 mt-1 text-[var(--color-muted)] text-sm">
                        <span className="flex items-center gap-1.5"><Briefcase className="w-3.5 h-3.5" />{exp.company}</span>
                        <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" />{geo}</span>
                      </div>
                    </div>
                  </div>
                  <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-1.5">
                    {exp.responsibilities.map((r, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-300">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-cyan-400/70 shrink-0" />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
