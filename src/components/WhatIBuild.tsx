"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ITEMS = [
  { text: "Intelligent Auto-Healing Systems",    color: "#22D3EE" },
  { text: "Enterprise Automation Platforms",     color: "#8B5CF6" },
  { text: "AI-Driven Cloud Operations",          color: "#3B82F6" },
  { text: "Scalable Hybrid Architectures",       color: "#d4af37" },
  { text: "Private LLM Solutions",              color: "#22D3EE" },
  { text: "FinOps Governance Frameworks",        color: "#3B82F6" },
];

export function WhatIBuild() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % ITEMS.length), 2600);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative py-10 px-6 max-w-7xl mx-auto w-full">
      <div className="glass rounded-2xl px-8 py-8 flex flex-col md:flex-row items-center gap-6">
        {/* Label */}
        <div className="shrink-0 text-center md:text-left">
          <div className="section-overline mb-1">What I Build</div>
          <p className="text-[var(--color-muted)] text-xs max-w-[160px]">
            Across the full technical & leadership spectrum
          </p>
        </div>

        {/* Divider */}
        <div className="hidden md:block w-px self-stretch bg-[var(--color-border)]" />

        {/* Rotating text */}
        <div className="flex-1 relative h-12 overflow-hidden flex items-center justify-center md:justify-start">
          <AnimatePresence mode="wait">
            <motion.span
              key={index}
              initial={{ y: 26, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -26, opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="absolute font-sans text-2xl md:text-3xl font-bold leading-tight"
              style={{ color: ITEMS[index].color }}
            >
              {ITEMS[index].text}
            </motion.span>
          </AnimatePresence>
        </div>

        {/* Dot indicators */}
        <div className="flex gap-1.5 shrink-0">
          {ITEMS.map((item, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Show: ${item.text}`}
              className="w-1.5 h-1.5 rounded-full transition-all duration-300"
              style={{
                background: i === index ? ITEMS[index].color : "rgba(148,163,184,0.22)",
                transform: i === index ? "scale(1.4)" : "scale(1)",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
