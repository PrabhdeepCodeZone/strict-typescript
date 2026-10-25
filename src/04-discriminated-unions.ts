/**
 * 04 — Discriminated unions + exhaustive checks
 *
 * A shared literal field (`type`) lets TypeScript pick the right shape.
 * Returning `never` from the default branch proves every case is handled.
 */

import { isMain } from "./lib/is-main.js";

export type ApiResponse =
  | { type: "loading" }
  | { type: "success"; data: string }
  | { type: "error"; message: string };

function assertNever(value: never): never {
  throw new Error(`Unhandled case: ${JSON.stringify(value)}`);
}

export function render(response: ApiResponse): string {
  switch (response.type) {
    case "loading":
      return "Loading…";
    case "success":
      return `Data: ${response.data}`;
    case "error":
      return `Error: ${response.message}`;
    default:
      // If you add a new union member and forget a case, this line errors.
      return assertNever(response);
  }
}

export type Shape =
  | { kind: "circle"; radius: number }
  | { kind: "rect"; width: number; height: number };

export function area(shape: Shape): number {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "rect":
      return shape.width * shape.height;
    default:
      return assertNever(shape);
  }
}

export function runDiscriminatedUnions(): void {
  console.log("04-discriminated-unions");
  console.log(" ", render({ type: "loading" }));
  console.log(" ", render({ type: "success", data: "hello" }));
  console.log(" ", render({ type: "error", message: "timeout" }));
  console.log(" ", area({ kind: "circle", radius: 2 }).toFixed(2));
  console.log(" ", area({ kind: "rect", width: 3, height: 4 }));
}

if (isMain(import.meta.url)) {
  runDiscriminatedUnions();
}
