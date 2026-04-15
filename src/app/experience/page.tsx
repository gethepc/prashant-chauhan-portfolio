import Link from "next/link";
import profileData from "@/data/profile.json";
import { ArrowLeft, Briefcase, MapPin } from "lucide-react";

const GEO: Record<string, string> = {
  "Landis+Gyr":           "India / UK / Global",
  "Airtel Africa":        "14 Countries / Africa",
  "Orange Business Services": "India / Global",
  "Tech Mahindra":        "India",
};

const ACCENT: Record<string, string> = {
  "Landis+Gyr":           "#3B82F6",
  "Airtel Africa":        "#22D3EE",
  "Orange Business Services": "#8B5CF6",
  "Tech Mahindra":        "#d4af37",
};

export default function ExperiencePage() {
  return (
    <main className="min-h-screen" style={{ background: "var(--color-background)" }}>
      <div className="max-w-4xl mx-auto px-6 pt-10 pb-24">
        <Link
          href="/#experience"
          className="inline-flex items-center gap-2 text-sm text-[var(--color-muted)] hover:text-white transition-colors mb-10"
        >
          <ArrowLeft className="w-4 h-4" /> Back
        </Link>

        <div className="mb-12">
          <div
            className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-5"
            style={{ background: "#3B82F620", border: "1px solid #3B82F640", color: "#3B82F6" }}
          >
            Career Timeline
          </div>
          <h1 className="font-sans text-4xl md:text-5xl font-black text-white mb-4">
            Enterprise Delivery Timeline
          </h1>
          <p className="text-[var(--color-muted)] text-lg leading-relaxed max-w-2xl">
            {profileData.experience_years}+ years of design, delivery, and leadership across global enterprise environments.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative flex flex-col gap-8">
          <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/60 via-cyan-400/30 to-transparent" />

          {profileData.experience.map((exp, i) => {
            const color = ACCENT[exp.company] ?? "#3B82F6";
            const geo   = GEO[exp.company] ?? "Global";
            return (
              <div key={i} className="pl-16 relative">
                {/* Timeline dot */}
                <div
                  className="absolute left-2.5 top-6 w-5 h-5 rounded-full border-2 flex items-center justify-center"
                  style={{ background: "var(--color-background)", borderColor: color, boxShadow: `0 0 12px ${color}60` }}
                >
                  <div className="w-2 h-2 rounded-full" style={{ background: color }} />
                </div>

                <div
                  className="rounded-2xl p-6"
                  style={{ background: "var(--color-surface)", border: `1px solid ${color}20` }}
                >
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <span
                        className="inline-block text-xs font-bold px-3 py-1 rounded-full mb-2"
                        style={{ background: color + "18", border: `1px solid ${color}40`, color }}
                      >
                        {exp.duration}
                      </span>
                      <h3 className="font-sans text-xl font-bold text-white">{exp.role}</h3>
                      <div className="flex flex-wrap gap-4 mt-1 text-[var(--color-muted)] text-sm">
                        <span className="flex items-center gap-1.5">
                          <Briefcase className="w-3.5 h-3.5" /> {exp.company}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5" /> {geo}
                        </span>
                      </div>
                    </div>
                  </div>

                  <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
                    {exp.responsibilities.map((r, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-gray-300">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full shrink-0" style={{ background: color + "cc" }} />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
