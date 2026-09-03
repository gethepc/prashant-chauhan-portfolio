import Link from "next/link";
import profileData from "@/data/profile.json";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

const PILLARS = [
  {
    title: "Cloud & Platform Architecture",
    desc: "Designing resilient, scalable, and secure hybrid/multi-cloud platforms — from landing zones to production, across Azure, GCP, and OpenStack.",
    color: "#3B82F6",
  },
  {
    title: "AI-Driven Operations",
    desc: "Building intelligent auto-healing systems using RAG, LangChain, local LLMs, and vector databases — keeping enterprise data sovereign.",
    color: "#22D3EE",
  },
  {
    title: "Automation-First Engineering",
    desc: "Standardised automation frameworks, zero-touch provisioning, and intelligent patch orchestration — removing humans from repetitive failure paths.",
    color: "#8B5CF6",
  },
  {
    title: "Strategic Transformation Leadership",
    desc: "Operating at L4 depth and board-level clarity — owning programmes from design through hypercare, across 14+ countries.",
    color: "#d4af37",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen" style={{ background: "var(--color-background)" }}>
      <div className="max-w-5xl mx-auto px-6 pt-10 pb-24">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-[var(--color-muted)] hover:text-white transition-colors mb-10"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Dashboard
        </Link>

        {/* Hero */}
        <div className="mb-16">
          <div
            className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-5"
            style={{ background: "#3B82F620", border: "1px solid #3B82F640", color: "#3B82F6" }}
          >
            About Prashant Chauhan
          </div>
          <h1 className="font-sans text-4xl md:text-6xl font-black text-white leading-tight mb-6">
            Architecting Intelligent<br />Enterprise Systems
          </h1>
          <p className="text-[var(--color-muted)] text-xl leading-relaxed max-w-3xl mb-6">
            Senior Cloud Platform Architect with {profileData.experience_years}+ years of experience designing
            secure, resilient, scalable, and intelligent enterprise platforms. Currently working across IBM Cloud
            platform engineering, with a focus on secrets management, security automation, cloud cost optimisation,
            platform resilience, observability, and AI-assisted operations.
          </p>
          <p className="text-[var(--color-muted)] text-lg leading-relaxed max-w-3xl">
            I have delivered technology transformation across telecommunications, utilities, IBM Cloud,
            and global enterprise environments, with hands-on ownership of public and private cloud
            platforms, secrets management, platform security, landing zones, FinOps, observability,
            resilient infrastructure, and AI-powered automation.
          </p>
        </div>

        {/* Positioning */}
        <div className="grid md:grid-cols-3 gap-4 mb-16">
          {[
            { label: "Primary Identity",   value: (profileData as any).positioning.primary_identity,   color: "#3B82F6" },
            { label: "Secondary Identity", value: (profileData as any).positioning.secondary_identity, color: "#8B5CF6" },
            { label: "Tertiary Identity",  value: (profileData as any).positioning.tertiary_identity,  color: "#22D3EE" },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-2xl p-5"
              style={{ background: item.color + "0e", border: `1px solid ${item.color}28` }}
            >
              <div className="text-xs uppercase tracking-widest mb-2" style={{ color: item.color }}>{item.label}</div>
              <div className="font-sans font-bold text-lg text-white">{item.value}</div>
            </div>
          ))}
        </div>

        {/* Four pillars */}
        <h2 className="font-sans text-3xl font-bold text-white mb-8">How I Work</h2>
        <div className="grid md:grid-cols-2 gap-5 mb-16">
          {PILLARS.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl p-6"
              style={{ background: "var(--color-surface)", border: `1px solid ${p.color}22` }}
            >
              <div className="font-sans text-lg font-bold mb-2" style={{ color: p.color }}>{p.title}</div>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

        {/* Core strengths */}
        <h2 className="font-sans text-3xl font-bold text-white mb-6">Core Strengths</h2>
        <div className="flex flex-wrap gap-2 mb-16">
          {(profileData as any).positioning.core_strengths.map((s: string) => (
            <span
              key={s}
              className="px-4 py-2 rounded-full text-sm font-semibold"
              style={{ background: "#3B82F614", border: "1px solid #3B82F640", color: "#93C5FD" }}
            >
              {s}
            </span>
          ))}
        </div>

        {/* Value proposition */}
        <div
          className="rounded-2xl p-8"
          style={{ background: "linear-gradient(135deg, rgba(59,130,246,0.08), rgba(34,211,238,0.05))", border: "1px solid rgba(59,130,246,0.2)" }}
        >
          <div className="text-xs uppercase tracking-widest text-cyan-400 mb-3">Value Proposition</div>
          <p className="text-xl font-semibold text-white leading-relaxed">
            {(profileData as any).positioning.value_proposition}
          </p>
        </div>
      </div>
    </main>
  );
}
