import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

export const dynamic = "force-static";

const publicPaths = [
  "",
  "/about",
  "/certifications",
  "/experience",
  "/projects/ihs",
  "/projects/finops",
  "/projects/afa",
  "/projects/fluxcampus",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return publicPaths.map((path) => ({
    url: siteUrl(path),
  }));
}
