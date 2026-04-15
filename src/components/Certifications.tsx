"use client";

import { motion } from "framer-motion";
import profileData from "@/data/profile.json";

const providerMeta: Record<string, { label: string; tagClass: string }> = {
  google_cloud:  { label: "Google Cloud",      tagClass: "tag-blue"   },
  microsoft:     { label: "Microsoft Azure",    tagClass: "tag-blue"   },
  aws:           { label: "Amazon Web Services",tagClass: "tag-gold"   },
  redhat:        { label: "Red Hat",            tagClass: "tag-gold"   },
  vmware:        { label: "VMware",             tagClass: "tag-cyan"   },
  ai:            { label: "AI / Anthropic",     tagClass: "tag-violet" },
  others:        { label: "Agile / ITIL / PM",  tagClass: "tag-violet" },
};

export function Certifications() {
  return (
    <section id="certifications" className="relative py-24 px-6 max-w-7xl mx-auto w-full">
      <div className="absolute top-0 right-0 w-96 h-96 bg-violet-500/6 rounded-full blur-3xl" />

      <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14">
        <div className="section-overline mb-3">Credentials</div>
        <h2 className="font-sans text-4xl md:text-5xl font-bold text-white animated-underline">Certified Expertise</h2>
        <p className="text-[var(--color-muted)] text-lg mt-4 max-w-xl">
          Validated across major enterprise cloud,  AI, and delivery ecosystems.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries(profileData.certifications).map(([provider, certs], i) => {
          const meta = providerMeta[provider] ?? { label: provider, tagClass: "tag-blue" };
          return (
            <motion.div
              key={provider}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="grad-border group"
            >
              <div className="glass rounded-2xl p-6 h-full group-hover:bg-white/[0.02] transition-colors">
                <span className={`tag ${meta.tagClass} mb-4 inline-block`}>{meta.label}</span>
                <ul className="space-y-2.5">
                  {(certs as string[]).map((cert, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-300">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-cyan-400/60 shrink-0" />
                      {cert}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
