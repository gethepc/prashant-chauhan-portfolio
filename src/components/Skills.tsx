"use client";

import { motion } from "framer-motion";
import profileData from "@/data/profile.json";
import { Cloud, Cpu, Settings, Database, BarChart3, Shield, Users, Server, Lock } from "lucide-react";

interface SkillGroup {
  key: string;
  label: string;
  icon: React.ReactNode;
  tagClass: string;
  items: string[];
}

const iconMap: Record<string, React.ReactNode> = {
  ibm_cloud_platform_security: <Lock className="w-5 h-5" />,
  cloud_platforms: <Cloud className="w-5 h-5" />,
  ai_ml: <Cpu className="w-5 h-5" />,
  automation: <Settings className="w-5 h-5" />,
  data: <Database className="w-5 h-5" />,
  observability: <BarChart3 className="w-5 h-5" />,
  finops: <Shield className="w-5 h-5" />,
  devops: <Server className="w-5 h-5" />,
  leadership: <Users className="w-5 h-5" />,
};

const tagClassMap: Record<string, string> = {
  ibm_cloud_platform_security: "tag-blue",
  cloud_platforms: "tag-blue",
  ai_ml: "tag-violet",
  automation: "tag-cyan",
  data: "tag-cyan",
  observability: "tag-gold",
  finops: "tag-gold",
  devops: "tag-blue",
  leadership: "tag-violet",
};

const labelMap: Record<string, string> = {
  ibm_cloud_platform_security: "IBM Cloud & Platform Security",
  cloud_platforms: "Cloud Platforms",
  ai_ml: "AI / ML / RAG",
  automation: "Automation",
  data: "Data Stores",
  observability: "Observability",
  finops: "FinOps",
  devops: "DevOps",
  leadership: "Leadership",
};

export function Skills() {
  const groups: SkillGroup[] = Object.entries(profileData.skills).map(([key, items]) => ({
    key,
    label: labelMap[key] ?? key,
    icon: iconMap[key] ?? <Server className="w-5 h-5" />,
    tagClass: tagClassMap[key] ?? "tag-blue",
    items: items as string[],
  }));

  return (
    <section id="skills" className="relative py-24 px-6 max-w-7xl mx-auto w-full">
      <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl" />

      <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14">
        <div className="section-overline mb-3">Capabilities</div>
        <h2 className="font-sans text-4xl md:text-5xl font-bold text-white animated-underline">Technology Ecosystem</h2>
        <p className="text-[var(--color-muted)] text-lg mt-4 max-w-xl">An architectural capability map spanning cloud, AI, automation, and strategic delivery.</p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {groups.map((g, i) => (
          <motion.div
            key={g.key}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            className="grad-border group"
          >
            <div className="glass rounded-2xl p-5 h-full flex flex-col gap-4 group-hover:bg-white/[0.02] transition-colors">
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-lg bg-white/5 border border-white/5 ${g.tagClass.replace("tag-", "text-")}`}>
                  {g.icon}
                </div>
                <span className="font-sans font-bold text-sm text-white tracking-wide">{g.label}</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {g.items.map((skill) => (
                  <span key={skill} className={`tag ${g.tagClass}`}>{skill}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
