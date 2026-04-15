import { notFound } from "next/navigation";
import Link from "next/link";
import profileData from "@/data/profile.json";
import { ArrowLeft, CheckCircle2, Layers } from "lucide-react";

const SLUG_MAP: Record<string, string> = {
  ihs:        "IHS (Intelligent Healing Solution)",
  finops:     "RightScale FinOps Engine",
  afa:        "AFA (Automation Framework & Agents)",
  fluxcampus: "FluxCampus",
};

const ACCENT: Record<string, string> = {
  ihs: "#22D3EE", finops: "#d4af37", afa: "#8B5CF6", fluxcampus: "#22D3EE",
};

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const projectName = SLUG_MAP[id];
  if (!projectName) notFound();

  const project = profileData.projects.find((p) => p.project_name === projectName);
  if (!project) notFound();

  const p = project as any;
  const accent = ACCENT[id] ?? "#3B82F6";
  const techs: string[] = p.architecture
    ? (Object.values(p.architecture).flat() as string[])
    : p.technologies ?? [];
  const impacts: string[] = p.impact ?? p.business_impact ?? [];
  const solutions: string[] = p.solution ?? p.features ?? [];

  return (
    <main className="min-h-screen" style={{ background: "var(--color-background)" }}>
      {/* Back nav */}
      <div className="max-w-4xl mx-auto px-6 pt-10 pb-4">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm text-[var(--color-muted)] hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Projects
        </Link>
      </div>

      <div className="max-w-4xl mx-auto px-6 pb-24 flex flex-col gap-10">
        {/* Hero block */}
        <div
          className="rounded-2xl p-8"
          style={{
            background: `linear-gradient(135deg, ${accent}10, transparent)`,
            border: `1px solid ${accent}25`,
          }}
        >
          <div
            className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4"
            style={{ background: accent + "18", border: `1px solid ${accent}40`, color: accent }}
          >
            {project.category}
          </div>
          <h1 className="font-sans text-4xl md:text-5xl font-black text-white mb-4">
            {project.project_name}
          </h1>
          <p className="text-[var(--color-muted)] text-lg leading-relaxed max-w-2xl">
            {project.description}
          </p>
        </div>

        {/* Problem */}
        {p.problem_statement && (
          <section>
            <h2 className="font-sans text-2xl font-bold text-white mb-4">The Problem</h2>
            <div
              className="rounded-xl p-5 text-gray-300 leading-relaxed"
              style={{ background: "rgba(239,68,68,0.06)", border: "1px solid rgba(239,68,68,0.18)" }}
            >
              {p.problem_statement}
            </div>
          </section>
        )}

        {/* Solution / Features */}
        {solutions.length > 0 && (
          <section>
            <h2 className="font-sans text-2xl font-bold text-white mb-4">
              {p.solution ? "Solution" : "Key Features"}
            </h2>
            <ul className="grid sm:grid-cols-2 gap-3">
              {solutions.map((s: string, i: number) => (
                <li
                  key={i}
                  className="flex items-start gap-3 rounded-xl p-4"
                  style={{ background: accent + "0c", border: `1px solid ${accent}22` }}
                >
                  <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" style={{ color: accent }} />
                  <span className="text-sm text-gray-300">{s}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Architecture */}
        {p.architecture && (
          <section>
            <h2 className="font-sans text-2xl font-bold text-white mb-4">Architecture</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {Object.entries(p.architecture).map(([layer, val]) => (
                <div
                  key={layer}
                  className="rounded-xl p-4"
                  style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)" }}
                >
                  <div className="text-xs text-[var(--color-muted)] uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                    <Layers className="w-3 h-3" /> {layer}
                  </div>
                  <div className="text-sm font-semibold text-white">
                    {Array.isArray(val) ? val.join(", ") : String(val)}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Tech stack */}
        {techs.length > 0 && (
          <section>
            <h2 className="font-sans text-2xl font-bold text-white mb-4">Technology Stack</h2>
            <div className="flex flex-wrap gap-2">
              {techs.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-full text-sm font-semibold"
                  style={{
                    background: accent + "14",
                    border: `1px solid ${accent}40`,
                    color: accent,
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>
        )}

        {/* Impact */}
        {impacts.length > 0 && (
          <section>
            <h2 className="font-sans text-2xl font-bold text-white mb-4">Business Impact</h2>
            <div className="flex flex-col gap-3">
              {impacts.map((imp: string, i: number) => (
                <div
                  key={i}
                  className="flex items-center gap-3 rounded-xl p-4"
                  style={{ background: accent + "0e", border: `1px solid ${accent}30` }}
                >
                  <span className="w-2 h-2 rounded-full shrink-0" style={{ background: accent }} />
                  <span className="text-sm font-medium" style={{ color: accent }}>{imp}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Key features (for projects with both features and solutions) */}
        {p.key_features && (
          <section>
            <h2 className="font-sans text-2xl font-bold text-white mb-4">Key Features</h2>
            <ul className="grid sm:grid-cols-2 gap-2">
              {p.key_features.map((f: string, i: number) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full shrink-0" style={{ background: accent }} />
                  {f}
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </main>
  );
}

export function generateStaticParams() {
  return Object.keys(SLUG_MAP).map((id) => ({ id }));
}
