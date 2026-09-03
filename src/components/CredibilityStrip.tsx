"use client";

import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import { Layers, Zap, Globe, Award, Shield } from "lucide-react";

function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const raw = useMotionValue(0);
  const spring = useSpring(raw, { stiffness: 60, damping: 20 });

  useEffect(() => {
    if (inView) raw.set(value);
  }, [inView, raw, value]);

  useEffect(() => {
    return spring.on("change", (v) => {
      if (ref.current) ref.current.textContent = Math.floor(v) + suffix;
    });
  }, [spring, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

const kpis = [
  { icon: <Award className="w-7 h-7" />, value: 19, suffix: "+", label: "Years Experience", color: "text-gold", accent: "tag-gold" },
  { icon: <Zap className="w-7 h-7" />, value: 40, suffix: "%", label: "Faster Incident Resolution", color: "text-cyan-400", accent: "tag-cyan" },
  { icon: <Layers className="w-7 h-7" />, value: 5, suffix: "+", label: "Cloud Platforms", color: "text-blue-400", accent: "tag-blue" },
  { icon: <Globe className="w-7 h-7" />, value: 4, suffix: "+", label: "Countries Delivered", color: "text-violet-400", accent: "tag-violet" },
  { icon: <Shield className="w-7 h-7" />, value: 30, suffix: "+", label: "Certifications Held", color: "text-emerald-400", accent: "tag-cyan" },
];

export function CredibilityStrip() {
  return (
    <section className="relative z-10 py-6 px-6 max-w-7xl mx-auto w-full">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {kpis.map((kpi, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
            className="grad-border group"
          >
            <div className="glass rounded-2xl p-5 h-full flex flex-col items-center text-center gap-2 group-hover:bg-white/[0.03] transition-colors">
              <span className={kpi.color + " mb-1"}>{kpi.icon}</span>
              <div className={`font-sans text-3xl font-bold text-white`}>
                <Counter value={kpi.value} suffix={kpi.suffix} />
              </div>
              <p className="text-[var(--color-muted)] text-xs font-medium leading-tight">{kpi.label}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
