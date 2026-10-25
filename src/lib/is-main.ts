import { pathToFileURL } from "node:url";

/** True when this module was executed directly with `tsx` / `node`. */
export function isMain(metaUrl: string): boolean {
  const entry = process.argv[1];
  if (entry === undefined) return false;
  return metaUrl === pathToFileURL(entry).href;
}
