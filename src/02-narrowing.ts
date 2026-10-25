/**
 * 02 — Narrowing
 *
 * TypeScript narrows union types after you prove which branch you’re in.
 */

import { isMain } from "./lib/is-main.js";

export type Id = string | number;

export function normalizeId(id: Id): string {
  if (typeof id === "number") {
    return String(id);
  }
  return id.trim();
}

export type Cat = { kind: "cat"; meows: boolean };
export type Dog = { kind: "dog"; barks: boolean };
export type Pet = Cat | Dog;

export function speak(pet: Pet): string {
  if (pet.kind === "cat") {
    return pet.meows ? "meow" : "…";
  }
  return pet.barks ? "woof" : "…";
}

type Admin = { role: "admin"; permissions: string[] };
type Guest = { role: "guest" };
type Account = Admin | Guest;

export function isAdmin(account: Account): account is Admin {
  return account.role === "admin";
}

export function permissionCount(account: Account): number {
  if (isAdmin(account)) {
    return account.permissions.length;
  }
  return 0;
}

export function runNarrowing(): void {
  console.log("02-narrowing");
  console.log(" ", normalizeId(42));
  console.log(" ", normalizeId("  abc  "));
  console.log(" ", speak({ kind: "cat", meows: true }));
  console.log(" ", speak({ kind: "dog", barks: false }));
  console.log(" ", permissionCount({ role: "guest" }));
  console.log(
    " ",
    permissionCount({ role: "admin", permissions: ["read", "write"] }),
  );
}

if (isMain(import.meta.url)) {
  runNarrowing();
}
