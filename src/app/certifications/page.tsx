import Link from "next/link";
import profileData from "@/data/profile.json";
import { ArrowLeft, Award } from "lucide-react";

const PROVIDER_META: Record<string, { label: string; color: string }> = {
  google_cloud: { label: "Google Cloud",        color: "#4285F4" },
  microsoft:    { label: "Microsoft Azure",      color: "#0078D4" },
  aws:          { label: "Amazon Web Services",  color: "#FF9900" },
  redhat:       { label: "Red Hat",              color: "#EE0000" },
  vmware:       { label: "VMware",               color: "#607078" },
  ai:           { label: "AI & LLM",             color: "#22D3EE" },
  others:       { label: "Governance & Delivery",color: "#8B5CF6" },
};

export default function CertificationsPage() {
  const certs = profileData.certifications as Record<string, string[]>;

  return (
    <main className="min-h-screen" style={{ background: "var(--color-background)" }}>
      <div className="max-w-5xl mx-auto px-6 pt-10 pb-24">
        <Link
          href="/#certifications"
          className="inline-flex items-center gap-2 text-sm text-[var(--color-muted)] hover:text-white transition-colors mb-10"
        >
          <ArrowLeft className="w-4 h-4" /> Back
        </Link>

        <div className="mb-12">
          <div
            className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-5"
            style={{ background: "#d4af3720", border: "1px solid #d4af3740", color: "#d4af37" }}
          >
            Professional Certifications
          </div>
          <h1 className="font-sans text-4xl md:text-5xl font-black text-white mb-4">
            Certification Portfolio
          </h1>
          <p className="text-[var(--color-muted)] text-lg max-w-2xl">
            30+ certifications across cloud platforms, AI, automation, governance, and delivery methodologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {Object.entries(certs).map(([key, items]) => {
            const meta = PROVIDER_META[key] ?? { label: key, color: "#3B82F6" };
            return (
              <div
                key={key}
                className="rounded-2xl p-6"
                style={{
                  background: "var(--color-surface)",
                  border: `1px solid ${meta.color}22`,
                }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="p-2 rounded-lg"
                    style={{ background: meta.color + "14", border: `1px solid ${meta.color}30` }}
                  >
                    <Award className="w-5 h-5" style={{ color: meta.color }} />
                  </div>
                  <div>
                    <div
                      className="text-xs uppercase tracking-widest font-bold"
                      style={{ color: meta.color }}
                    >
                      {meta.label}
                    </div>
                    <div className="text-white font-semibold">{items.length} certification{items.length > 1 ? "s" : ""}</div>
                  </div>
                </div>
                <ul className="flex flex-col gap-2">
                  {items.map((cert: string) => (
                    <li
                      key={cert}
                      className="flex items-start gap-2 text-sm text-gray-300"
                    >
                      <span
                        className="mt-1.5 h-1.5 w-1.5 rounded-full shrink-0"
                        style={{ background: meta.color }}
                      />
                      {cert}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
