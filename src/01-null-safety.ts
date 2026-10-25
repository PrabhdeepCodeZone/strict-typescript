/**
 * 01 — Null safety (strictNullChecks)
 *
 * With strictNullChecks, `string` is NOT the same as `string | null`.
 * You must handle missing values before using them.
 */

import { isMain } from "./lib/is-main.js";

export type User = {
  id: number;
  name: string;
  email: string | null;
};

export function displayEmail(user: User): string {
  // ❌ user.email.toUpperCase() — error: email might be null
  if (user.email === null) {
    return "(no email)";
  }
  return user.email.toUpperCase();
}

export function greeting(name: string | undefined): string {
  // ?? only falls back for null/undefined (not empty string)
  return `Hello, ${name ?? "guest"}`;
}

export function cityLabel(profile: { city?: string }): string {
  // optional chaining + nullish coalescing
  return profile.city?.trim() || "Unknown city";
}

export function runNullSafety(): void {
  const alice: User = { id: 1, name: "Alice", email: "alice@example.com" };
  const bob: User = { id: 2, name: "Bob", email: null };

  console.log("01-null-safety");
  console.log(" ", displayEmail(alice));
  console.log(" ", displayEmail(bob));
  console.log(" ", greeting(undefined));
  console.log(" ", cityLabel({}));
  console.log(" ", cityLabel({ city: "  Pune  " }));
}

if (isMain(import.meta.url)) {
  runNullSafety();
}
