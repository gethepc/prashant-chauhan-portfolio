export const SITE_URL =
  "https://gethepc.github.io/prashant-chauhan-portfolio";

export function siteUrl(path = ""): string {
  return new URL(path.replace(/^\/+/, ""), `${SITE_URL}/`).toString();
}
