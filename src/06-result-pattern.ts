/**
 * 06 — Result pattern
 *
 * Model success/failure in the type system instead of throwing everywhere.
 * Callers must handle both branches — no silent empty catches.
 */

import { isMain } from "./lib/is-main.js";

export type Ok<T> = { ok: true; value: T };
export type Err<E> = { ok: false; error: E };
export type Result<T, E = string> = Ok<T> | Err<E>;

export function ok<T>(value: T): Ok<T> {
  return { ok: true, value };
}

export function err<E>(error: E): Err<E> {
  return { ok: false, error };
}

export function parsePositiveInt(input: string): Result<number> {
  const n = Number(input);
  if (!Number.isInteger(n)) {
    return err(`"${input}" is not an integer`);
  }
  if (n <= 0) {
    return err(`${n} is not positive`);
  }
  return ok(n);
}

export function doublePositive(input: string): Result<number> {
  const parsed = parsePositiveInt(input);
  if (!parsed.ok) {
    return parsed;
  }
  return ok(parsed.value * 2);
}

export function runResultPattern(): void {
  console.log("06-result-pattern");

  for (const sample of ["4", "0", "nope"] as const) {
    const result = doublePositive(sample);
    if (result.ok) {
      console.log(`  "${sample}" → ${result.value}`);
    } else {
      console.log(`  "${sample}" → fail: ${result.error}`);
    }
  }
}

if (isMain(import.meta.url)) {
  runResultPattern();
}
