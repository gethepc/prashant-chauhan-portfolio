"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import profileData from "@/data/profile.json";
import { ArrowUpRight, Layers, Cpu, DollarSign, BookOpen, GraduationCap, X, ArrowRight, CheckCircle2 } from "lucide-react";

const PROJECT_SLUGS: Record<string, string> = {
  "IHS (Intelligent Healing Solution)": "ihs",
  "AI-Powered Cloud FinOps Platform": "finops",
  "AFA (Automation Framework & Agents)": "afa",
  "FluxCampus": "fluxcampus",
};

const projectIcons: Record<string, React.ReactNode> = {
  "IHS (Intelligent Healing Solution)": <Cpu className="w-6 h-6 text-violet-400" />,
  "AI-Powered Cloud FinOps Platform": <DollarSign className="w-6 h-6 text-yellow-400" />,
  "AFA (Automation Framework & Agents)": <Layers className="w-6 h-6 text-blue-400" />,
  "FluxCampus": <GraduationCap className="w-6 h-6 text-cyan-400" />,
};

const accentColors: Record<string, { tag: string; color: string }> = {
  "IHS (Intelligent Healing Solution)":     { tag: "tag-violet", color: "#8B5CF6" },
  "AI-Powered Cloud FinOps Platform":       { tag: "tag-gold",   color: "#d4af37" },
  "AFA (Automation Framework & Agents)":    { tag: "tag-blue",   color: "#3B82F6" },
  "FluxCampus":                             { tag: "tag-cyan",   color: "#22D3EE" },
};

export function Projects() {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const router = useRouter();

  const projects = profileData.projects.filter(
    (p) => !p.project_name.toLowerCase().includes("classflux")
  );

  const selected = selectedIdx !== null ? projects[selectedIdx] : null;
  const selectedAccent = selected ? accentColors[selected.project_name] : null;

  return (
    <section id="projects" className="relative py-24 px-6 max-w-7xl mx-auto w-full">
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-blue-500/6 rounded-full blur-3xl pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-14"
      >
        <div className="section-overline mb-3">Flagship Solutions</div>
        <h2 className="font-sans text-4xl md:text-5xl font-bold text-white animated-underline">
          Enterprise Platform Showcase
        </h2>
        <p className="text-[var(--color-muted)] text-lg mt-4 max-w-xl">
          Purpose-built platforms addressing enterprise-scale challenges. Click any card for deep-dive.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, i) => {
          const accent = accentColors[project.project_name] ?? { tag: "tag-blue", color: "#3B82F6" };
          const icon = projectIcons[project.project_name] ?? <BookOpen className="w-6 h-6 text-gray-400" />;
          const impacts = (project as any).impact ?? (project as any).business_impact ?? [];
          const techs: string[] = (project as any).architecture
            ? Object.values((project as any).architecture).flat() as string[]
            : (project as any).technologies ?? [];

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="grad-border group cursor-pointer"
              onClick={() => setSelectedIdx(i)}
            >
              <div className="glass rounded-2xl p-7 h-full flex flex-col gap-4 group-hover:bg-white/[0.025] transition-colors">
                <div className="flex justify-between items-start">
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/5">{icon}</div>
                  <ArrowUpRight className="w-5 h-5 text-[var(--color-muted)] group-hover:text-cyan-400 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
                <div>
                  <span className={`tag ${accent.tag} mb-2 inline-block`}>{project.category}</span>
                  <h3 className="font-sans text-xl font-bold text-white group-hover:text-cyan-200 transition-colors">
                    {project.project_name}
                  </h3>
                </div>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed flex-grow">{project.description}</p>
                {impacts.length > 0 && (
                  <ul className="text-sm space-y-1">
                    {impacts.slice(0, 2).map((imp: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-300">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-cyan-400 shrink-0" />
                        {imp}
                      </li>
                    ))}
                  </ul>
                )}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
                  {techs.slice(0, 5).map((tech, idx) => (
                    <span key={idx} className="tag">{tech}</span>
                  ))}
                  <span className="tag" style={{ borderColor: accent.color + "40", color: accent.color, background: accent.color + "10" }}>
                    click to explore →
                  </span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Modal overlay */}
      <AnimatePresence>
        {selected && selectedAccent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
            style={{ background: "rgba(5,10,25,0.80)", backdropFilter: "blur(16px)" }}
            onClick={() => setSelectedIdx(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 20, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative w-full max-w-2xl max-h-[88vh] overflow-y-auto rounded-2xl"
              style={{ background: "var(--color-surface)", border: `1px solid ${selectedAccent.color}30` }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal header */}
              <div
                className="sticky top-0 z-10 px-7 py-5 flex justify-between items-start rounded-t-2xl"
                style={{ background: "var(--color-surface)", borderBottom: `1px solid ${selectedAccent.color}18` }}
              >
                <div>
                  <span
                    className="tag mb-2 inline-block"
                    style={{ borderColor: selectedAccent.color + "50", color: selectedAccent.color, background: selectedAccent.color + "12" }}
                  >
                    {selected.category}
                  </span>
                  <h3 className="font-sans text-2xl font-bold text-white">{selected.project_name}</h3>
                </div>
                <button
                  onClick={() => setSelectedIdx(null)}
                  className="p-2 rounded-xl hover:bg-white/5 transition-colors text-[var(--color-muted)] hover:text-white mt-1"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="px-7 py-6 flex flex-col gap-6">
                {/* Description */}
                <p className="text-[var(--color-muted)] leading-relaxed">{selected.description}</p>

                {/* Problem → Solution */}
                {(selected as any).problem_statement && (
                  <div>
                    <div className="text-xs uppercase tracking-widest text-[var(--color-muted)] mb-3 font-semibold">Problem</div>
                    <div className="glass-sm rounded-xl p-4 text-sm text-gray-300 leading-relaxed">
                      {(selected as any).problem_statement}
                    </div>
                  </div>
                )}

                {/* Solution/Features */}
                {((selected as any).solution ?? (selected as any).features ?? []).length > 0 && (
                  <div>
                    <div className="text-xs uppercase tracking-widest text-[var(--color-muted)] mb-3 font-semibold">
                      {(selected as any).solution ? "Solution" : "Key Features"}
                    </div>
                    <ul className="grid sm:grid-cols-2 gap-2">
                      {((selected as any).solution ?? (selected as any).features ?? []).map((s: string, j: number) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-gray-300">
                          <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" style={{ color: selectedAccent.color }} />
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Architecture / Tech stack */}
                {(selected as any).architecture && (
                  <div>
                    <div className="text-xs uppercase tracking-widest text-[var(--color-muted)] mb-3 font-semibold">Architecture</div>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {Object.entries((selected as any).architecture).map(([layer, val]) => (
                        <div key={layer} className="glass-sm rounded-xl p-3">
                          <div className="text-xs text-[var(--color-muted)] mb-1 capitalize">{layer}</div>
                          <div className="text-sm font-medium text-white">
                            {Array.isArray(val) ? val.join(", ") : String(val)}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Impact */}
                {((selected as any).impact ?? (selected as any).business_impact ?? []).length > 0 && (
                  <div>
                    <div className="text-xs uppercase tracking-widest text-[var(--color-muted)] mb-3 font-semibold">Business Impact</div>
                    <div className="flex flex-col gap-2">
                      {((selected as any).impact ?? (selected as any).business_impact ?? []).map((imp: string, j: number) => (
                        <div
                          key={j}
                          className="flex items-center gap-3 rounded-xl p-3 text-sm font-medium"
                          style={{ background: selectedAccent.color + "0f", border: `1px solid ${selectedAccent.color}25`, color: selectedAccent.color }}
                        >
                          <span>{imp}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* CTA */}
                {PROJECT_SLUGS[selected.project_name] && (
                  <button
                    onClick={() => router.push(`/projects/${PROJECT_SLUGS[selected.project_name]}`)}
                    className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-semibold text-white transition-all"
                    style={{ background: selectedAccent.color, boxShadow: `0 0 20px ${selectedAccent.color}40` }}
                  >
                    Full Deep-Dive <ArrowRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}


