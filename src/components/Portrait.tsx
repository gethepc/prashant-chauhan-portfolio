"use client";

import Image from "next/image";

const BASE_PATH =
  process.env.NODE_ENV === "production" ? "/prashant-chauhan-portfolio" : "";
const PORTRAIT_SRC = `${BASE_PATH}/prashant-chauhan.jpg`;
const PORTRAIT_ALT =
  "Professional headshot of Prashant Chauhan, Senior Cloud Platform Architect";

type PortraitVariant = "nav" | "hero" | "hub" | "about";

const sizes: Record<PortraitVariant, string> = {
  nav: "h-8 w-8",
  hero: "h-20 w-20 sm:h-24 sm:w-24",
  hub: "h-[76px] w-[76px]",
  about: "h-full w-full",
};

export function Portrait({ variant }: { variant: PortraitVariant }) {
  if (variant === "about") {
    return (
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl">
        <Image
          src={PORTRAIT_SRC}
          alt={PORTRAIT_ALT}
          fill
          sizes="(min-width: 1024px) 280px, 80vw"
          className="object-cover object-[center_18%]"
        />
      </div>
    );
  }

  return (
    <span className={`relative inline-flex shrink-0 ${sizes[variant]}`}>
      <span
        className="absolute -inset-[2px] rounded-full bg-gradient-to-br from-blue-500/70 via-cyan-400/40 to-violet-500/50"
        aria-hidden
      />
      <span className="relative h-full w-full overflow-hidden rounded-full ring-2 ring-white/10">
        <Image
          src={PORTRAIT_SRC}
          alt={PORTRAIT_ALT}
          fill
          sizes={variant === "nav" ? "32px" : variant === "hub" ? "76px" : "96px"}
          className="object-cover object-[center_18%]"
          loading={variant === "hero" || variant === "hub" ? "eager" : undefined}
        />
      </span>
    </span>
  );
}
