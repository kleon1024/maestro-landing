export const SITE_URL = "https://www.maestro.onl";

export function absoluteSiteUrl(path = ""): string {
  return `${SITE_URL}${path.startsWith("/") || path.length === 0 ? path : `/${path}`}`;
}
