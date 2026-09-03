"use client";

import Image from "next/image";

const PORTRAIT_SRC = "/prashant-chauhan.jpg";
const PORTRAIT_ALT =
  "Professional headshot of Prashant Chauhan, Senior Cloud Platform Architect";

type PortraitVariant = "nav" | "hero" | "about";

const sizes: Record<PortraitVariant, string> = {
  nav: "h-8 w-8",
  hero: "h-28 w-28 sm:h-32 sm:w-32 lg:h-36 lg:w-36",
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
          priority={false}
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
          sizes={variant === "nav" ? "32px" : "144px"}
          className="object-cover object-[center_18%]"
          priority={variant === "hero"}
        />
      </span>
    </span>
  );
}
