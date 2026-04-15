"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

const NODES = [
  { id: "center",  x: 220, y: 200, r: 32, label: "PC",         sub: "19+ Yrs Architect",  color: "#3B82F6", isCenter: true,  stats: null },
  { id: "ihs",     x: 220, y: 62,  r: 22, label: "IHS",        sub: "AI Auto-Healing",    color: "#22D3EE", isCenter: false, stats: { category: "AI + Automation + Observability", impact: "40% faster resolution",    tech: ["FastAPI","LangChain","Ollama","pgvector"],  href: "/projects/ihs" } },
  { id: "afa",     x: 372, y: 112, r: 20, label: "AFA",        sub: "Automation Fwk",     color: "#8B5CF6", isCenter: false, stats: { category: "Platform Automation",             impact: "Zero-touch operations",    tech: ["Terraform","Ansible","Python"],             href: "/projects/afa" } },
  { id: "finops",  x: 362, y: 302, r: 20, label: "FinOps",     sub: "Cost Engine",        color: "#d4af37", isCenter: false, stats: { category: "Cloud Cost Optimization",         impact: "Multi-cloud governance",   tech: ["Azure","GCP","AWS"],                        href: "/projects/finops" } },
  { id: "flux",    x: 88,  y: 302, r: 18, label: "FluxCampus", sub: "AI Learning",        color: "#22D3EE", isCenter: false, stats: { category: "AI EdTech Platform",             impact: "Personalized career paths",tech: ["AI","React","Analytics"],                   href: "/projects/fluxcampus" } },
  { id: "lpms",    x: 78,  y: 112, r: 18, label: "LPMS",       sub: "Patch Automation",   color: "#3B82F6", isCenter: false, stats: { category: "Infrastructure Automation",      impact: "100% patch compliance",    tech: ["Ansible","Python","Cron"],                  href: "/#automation" } },
];

const EDGES = [
  { from: "center", to: "ihs",    primary: true,  speed: 2.2, delay: 0.0 },
  { from: "center", to: "afa",    primary: true,  speed: 2.8, delay: 0.3 },
  { from: "center", to: "finops", primary: true,  speed: 3.2, delay: 0.6 },
  { from: "center", to: "flux",   primary: true,  speed: 2.5, delay: 0.9 },
  { from: "center", to: "lpms",   primary: true,  speed: 2.0, delay: 1.2 },
  { from: "ihs",    to: "afa",    primary: false, speed: 3.5, delay: 0.0 },
  { from: "afa",    to: "finops", primary: false, speed: 4.0, delay: 0.0 },
  { from: "lpms",   to: "ihs",   primary: false, speed: 4.2, delay: 0.0 },
];

function gNode(id: string) { return NODES.find(n => n.id === id)!; }
function gPath(fromId: string, toId: string) {
  const a = gNode(fromId), b = gNode(toId);
  const mx = (a.x + b.x) / 2, my = (a.y + b.y) / 2;
  const dx = b.x - a.x, dy = b.y - a.y, len = Math.sqrt(dx * dx + dy * dy);
  const nx = (-dy / len) * 30, ny = (dx / len) * 30;
  return `M ${a.x} ${a.y} Q ${mx + nx} ${my + ny} ${b.x} ${b.y}`;
}

export function SystemMap() {
  const [hovered, setHovered] = useState<string | null>(null);
  const router = useRouter();
  const hoveredNode = NODES.find(n => n.id === hovered);

  return (
    <div className="relative w-full" style={{ height: 430 }}>
      {/* Always-dark visualization panel */}
      <div
        className="absolute inset-0 rounded-2xl"
        style={{ background: "rgba(5,10,25,0.94)", backdropFilter: "blur(20px)", border: "1px solid rgba(59,130,246,0.16)" }}
      />

      {/* Live indicator */}
      <div className="absolute top-3 right-4 flex items-center gap-1.5 z-20">
        <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 inline-block animate-pulse" />
        <span style={{ fontSize: "0.6rem", color: "rgba(148,163,184,0.65)", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase" }}>
          Live Systems
        </span>
      </div>

      {/* SVG canvas */}
      <svg
        viewBox="0 0 440 400"
        className="absolute inset-0 w-full h-full z-10"
        style={{ overflow: "visible" }}
      >
        {/* Edges */}
        {EDGES.map((edge, i) => {
          const path = gPath(edge.from, edge.to);
          const toNode = gNode(edge.to);
          return (
            <g key={i}>
              <motion.path
                d={path}
                fill="none"
                stroke={edge.primary ? "rgba(34,211,238,0.25)" : "rgba(100,116,139,0.14)"}
                strokeWidth={edge.primary ? 1.5 : 1}
                strokeDasharray={edge.primary ? "4 3" : "2 5"}
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.5, delay: 0.5 + i * 0.12, ease: "easeOut" }}
              />
              {edge.primary && (
                <motion.g
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.2 }}
                >
                  <circle
                    r="3"
                    style={{ fill: toNode.color, filter: `drop-shadow(0 0 3px ${toNode.color})` }}
                  >
                    <animateMotion
                      path={path}
                      dur={`${edge.speed}s`}
                      repeatCount="indefinite"
                      begin={`${edge.delay}s`}
                    />
                  </circle>
                </motion.g>
              )}
            </g>
          );
        })}

        {/* Nodes */}
        {NODES.map((node, i) => (
          <motion.g
            key={node.id}
            style={{ cursor: node.isCenter ? "default" : "pointer" }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", delay: 1.0 + i * 0.1, stiffness: 160, damping: 12 }}
            whileHover={!node.isCenter ? { scale: 1.12 } : undefined}
            onMouseEnter={() => !node.isCenter && setHovered(node.id)}
            onMouseLeave={() => setHovered(null)}
            onClick={() => node.stats?.href && router.push(node.stats.href)}
          >
            {/* Glow pulse */}
            <motion.circle
              cx={node.x}
              cy={node.y}
              r={node.r + 8}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.1, 0.28, 0.1],
              }}
              transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: "easeInOut" }}
              style={{
                fill: node.color,
                transformBox: "fill-box" as React.CSSProperties["transformBox"],
                transformOrigin: "center",
              }}
            />
            {/* Body */}
            <circle
              cx={node.x}
              cy={node.y}
              r={node.r}
              style={{
                fill: "rgba(5,12,28,0.97)",
                stroke: node.color,
                strokeWidth: hovered === node.id || node.isCenter ? 2.5 : 1.8,
              }}
            />
            {/* Label */}
            <text
              x={node.x}
              y={node.y + (node.isCenter ? 5 : 4)}
              textAnchor="middle"
              style={{
                fill: "#ffffff",
                fontSize: node.isCenter ? 11 : 9.5,
                fontWeight: 700,
                pointerEvents: "none",
                fontFamily: "system-ui, sans-serif",
              }}
            >
              {node.label}
            </text>
            {/* Sub-label */}
            <text
              x={node.x}
              y={node.y + node.r + 14}
              textAnchor="middle"
              style={{
                fill: "rgba(148,163,184,0.72)",
                fontSize: 7.5,
                pointerEvents: "none",
                fontFamily: "system-ui, sans-serif",
              }}
            >
              {node.sub}
            </text>
          </motion.g>
        ))}
      </svg>

      {/* Hover tooltip */}
      <AnimatePresence>
        {hoveredNode?.stats && (
          <motion.div
            key={hoveredNode.id}
            initial={{ opacity: 0, y: 6, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.97 }}
            transition={{ duration: 0.15 }}
            className="absolute bottom-3 left-3 right-3 z-30 pointer-events-none rounded-xl p-3"
            style={{
              background: "rgba(5,10,25,0.97)",
              border: `1px solid ${hoveredNode.color}55`,
              backdropFilter: "blur(14px)",
            }}
          >
            <div
              className="text-xs uppercase tracking-wider font-bold mb-0.5"
              style={{ color: hoveredNode.color }}
            >
              {hoveredNode.stats.category}
            </div>
            <div className="text-sm font-semibold" style={{ color: "#fff" }}>
              {hoveredNode.label} —{" "}
              <span style={{ color: hoveredNode.color }}>{hoveredNode.stats.impact}</span>
            </div>
            <div className="flex flex-wrap gap-1 mt-1.5 items-center">
              {hoveredNode.stats.tech.map((t) => (
                <span
                  key={t}
                  style={{
                    background: `${hoveredNode.color}1a`,
                    border: `1px solid ${hoveredNode.color}40`,
                    color: hoveredNode.color,
                    padding: "1px 7px",
                    borderRadius: 999,
                    fontSize: "0.62rem",
                    fontWeight: 600,
                  }}
                >
                  {t}
                </span>
              ))}
              <span style={{ color: "rgba(148,163,184,0.45)", fontSize: "0.62rem", marginLeft: 4 }}>
                click to explore →
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
