"use client";

import { motion } from "framer-motion";
import profileData from "@/data/profile.json";
import { Globe, MapPin } from "lucide-react";

export function GlobalDelivery() {
  const { countries, delivery_scope, enterprise_scale } = profileData.global_delivery;

  return (
    <section id="global" className="relative py-24 px-6 max-w-7xl mx-auto w-full">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />

      <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14 text-center">
        <div className="section-overline mb-3">Reach</div>
        <h2 className="font-sans text-4xl md:text-5xl font-bold text-white animated-underline mx-auto w-fit">
          Global Delivery Footprint
        </h2>
        <p className="text-[var(--color-muted)] text-lg mt-4 max-w-xl mx-auto">
          Multi-country infrastructure delivery with cross-cultural enterprise experience.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">

        {/* Countries */}
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0 }} className="grad-border group">
          <div className="glass rounded-2xl p-7 h-full group-hover:bg-white/[0.02] transition-colors">
            <div className="flex items-center gap-3 mb-5">
              <Globe className="w-6 h-6 text-blue-400" />
              <h3 className="font-sans text-base font-bold text-white">Countries Supported</h3>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {countries.map((c) => (
                <div key={c} className="flex items-center gap-2 glass-sm px-3 py-2 rounded-xl text-sm text-gray-300">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  {c}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Delivery Scope */}
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="grad-border group">
          <div className="glass rounded-2xl p-7 h-full group-hover:bg-white/[0.02] transition-colors">
            <div className="flex items-center gap-3 mb-5">
              <Globe className="w-6 h-6 text-cyan-400" />
              <h3 className="font-sans text-base font-bold text-white">Delivery Scope</h3>
            </div>
            <ul className="space-y-2.5">
              {delivery_scope.map((s, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-cyan-400/70 shrink-0" />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Enterprise Scale */}
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="grad-border group">
          <div className="glass rounded-2xl p-7 h-full group-hover:bg-white/[0.02] transition-colors">
            <div className="flex items-center gap-3 mb-5">
              <Globe className="w-6 h-6 text-violet-400" />
              <h3 className="font-sans text-base font-bold text-white">Enterprise Scale</h3>
            </div>
            <ul className="space-y-2.5">
              {enterprise_scale.map((s, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-violet-400/70 shrink-0" />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}