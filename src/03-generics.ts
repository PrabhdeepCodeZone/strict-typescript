/**
 * 03 — Generics
 *
 * Generics keep types connected: input type → output type.
 * Constraints (`extends`) limit what callers can pass.
 */

import { isMain } from "./lib/is-main.js";

export function first<T>(items: readonly T[]): T | undefined {
  // noUncheckedIndexedAccess: items[0] is T | undefined
  return items[0];
}

export function pluck<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

export type Identifiable = { id: string | number };

export function byId<T extends Identifiable>(
  items: readonly T[],
  id: T["id"],
): T | undefined {
  return items.find((item) => item.id === id);
}

export function pair<A, B>(a: A, b: B): readonly [A, B] {
  return [a, b] as const;
}

export function runGenerics(): void {
  const users = [
    { id: 1, name: "Ada" },
    { id: 2, name: "Grace" },
  ] as const;

  console.log("03-generics");
  console.log(" ", first([10, 20, 30]));
  console.log(" ", first([] as number[]));
  console.log(" ", pluck({ city: "Pune", zip: 411001 }, "city"));
  console.log(" ", byId([...users], 2));
  console.log(" ", pair("ok", 200));
}

if (isMain(import.meta.url)) {
  runGenerics();
}
