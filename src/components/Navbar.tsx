"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Portrait } from "@/components/Portrait";

const navLinks = [
  { href: "#about",          label: "About"        },
  { href: "#projects",       label: "Projects"     },
  { href: "#automation",     label: "Automation"   },
  { href: "#cloud",          label: "Cloud"        },
  { href: "#experience",     label: "Experience"   },
  { href: "#leadership",     label: "Leadership"   },
  { href: "#contact",        label: "Contact"      },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  // Restore saved theme on mount
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const dark = saved === "dark";
    setIsDark(dark);
    if (dark) document.documentElement.setAttribute("data-theme", "dark");
  }, []);

  // Scroll listener
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  function toggleTheme() {
    const next = !isDark;
    setIsDark(next);
    localStorage.setItem("theme", next ? "dark" : "light");
    if (next) {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
  }

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "glass border-b border-white/5 py-3" : "py-5"}`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2.5 font-sans font-bold text-lg text-white tracking-tight hover:text-cyan-300 transition-colors">
            <Portrait variant="nav" />
            PC<span className="text-cyan-400">.</span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="px-3 py-1.5 rounded-lg text-sm text-[var(--color-muted)] hover:text-white hover:bg-white/5 transition-all font-medium"
              >
                {l.label}
              </a>
            ))}

          </nav>

          {/* Theme toggle + mobile hamburger */}
          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 glass-sm rounded-full text-[var(--color-muted)] hover:text-[var(--color-foreground)] transition-all"
              aria-label="Toggle theme"
            >
              {isDark
                ? <Sun className="w-4 h-4 text-yellow-400" />
                : <Moon className="w-4 h-4" />
              }
            </button>

            {/* Mobile toggle */}
            <button
              className="lg:hidden p-2 glass rounded-lg text-white"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      {open && (
        <div className="fixed inset-0 z-40 flex flex-col pt-20 glass lg:hidden" onClick={() => setOpen(false)}>
          <nav className="flex flex-col gap-1 px-6 py-6">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="px-4 py-3 rounded-xl text-white font-medium hover:bg-white/5 transition-colors"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <div className="mt-4 pt-4 border-t border-[var(--color-border)]">
              <button
                onClick={(e) => { e.stopPropagation(); toggleTheme(); }}
                className="flex items-center gap-3 px-4 py-3 w-full rounded-xl text-[var(--color-muted)] hover:text-[var(--color-foreground)] hover:bg-white/5 transition-colors font-medium"
              >
                {isDark ? <Sun className="w-4 h-4 text-yellow-400" /> : <Moon className="w-4 h-4" />}
                {isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
              </button>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}