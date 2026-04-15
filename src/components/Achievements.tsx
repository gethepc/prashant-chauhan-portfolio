"use client";

import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import { TrendingDown, Globe, Cpu, Shield, Award, Server } from "lucide-react";

function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const raw = useMotionValue(0);
  const spring = useSpring(raw, { stiffness: 50, damping: 18 });

  useEffect(() => { if (inView) raw.set(value); }, [inView, raw, value]);
  useEffect(() => spring.on("change", (v) => { if (ref.current) ref.current.textContent = Math.floor(v) + suffix; }), [spring, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

const achievements = [
  {
    icon: <TrendingDown className="w-8 h-8" />,
    value: 40, suffix: "%",
    label: "Incident Resolution Time Reduction",
    desc: "via Intelligent Healing Solution (IHS) — AI-based auto-healing and automated runbooks.",
    color: "text-cyan-400", glow: "from-cyan-500/20", tagClass: "tag-cyan",
  },
  {
    icon: <Globe className="w-8 h-8" />,
    value: 14, suffix: "+",
    label: "Countries Transformed (Airtel Africa)",
    desc: "Multi-country infrastructure standardisation and Citrix VDI deployment across African OPCOs.",
    color: "text-blue-400", glow: "from-blue-500/20", tagClass: "tag-blue",
  },
  {
    icon: <Cpu className="w-8 h-8" />,
    value: 5, suffix: "+",
    label: "Flagship Platforms Built",
    desc: "IHS, FinOps Engine, AFA, FluxCampus — enterprise AI and cloud platforms from design to production.",
    color: "text-violet-400", glow: "from-violet-500/20", tagClass: "tag-violet",
  },
  {
    icon: <Shield className="w-8 h-8" />,
    value: 30, suffix: "+",
    label: "Industry Certifications",
    desc: "Across GCP, Azure, AWS, RedHat, VMware, AI, ITIL, PRINCE2, and Six Sigma.",
    color: "text-yellow-400", glow: "from-yellow-500/20", tagClass: "tag-gold",
  },
  {
    icon: <Server className="w-8 h-8" />,
    value: 4, suffix: "+",
    label: "Automation Frameworks Delivered",
    desc: "LPMS, Oracle RAC, VMware/OpenStack Auto-Provisioning, AFA — reducing human effort at scale.",
    color: "text-emerald-400", glow: "from-emerald-500/20", tagClass: "tag-cyan",
  },
  {
    icon: <Award className="w-8 h-8" />,
    value: 19, suffix: "+",
    label: "Years Enterprise Delivery",
    desc: "Deep L3/L4 expertise spanning telecom, utilities, and global enterprise IT.",
    color: "text-gold", glow: "from-yellow-500/20", tagClass: "tag-gold",
  },
];

export function Achievements() {
  return (
    <section id="achievements" className="relative py-24 px-6 max-w-7xl mx-auto w-full">
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />

      <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14">
        <div className="section-overline mb-3">Impact</div>
        <h2 className="font-sans text-4xl md:text-5xl font-bold text-white animated-underline">
          Key Achievements
        </h2>
        <p className="text-[var(--color-muted)] text-lg mt-4 max-w-xl">
          Quantified results from enterprise delivery, automation, and AI-led transformation.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {achievements.map((a, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="grad-border group"
          >
            <div className="glass rounded-2xl p-6 h-full flex flex-col gap-4 group-hover:bg-white/[0.02] transition-colors relative overflow-hidden">
              <div className={`absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl bg-gradient-to-br ${a.glow} to-transparent opacity-40`} />
              <div className={`${a.color} relative z-10`}>{a.icon}</div>
              <div className="font-sans text-5xl font-bold text-white relative z-10">
                <Counter value={a.value} suffix={a.suffix} />
              </div>
              <div className="relative z-10">
                <span className={`tag ${a.tagClass} mb-2 inline-block`}>{a.label}</span>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">{a.desc}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}