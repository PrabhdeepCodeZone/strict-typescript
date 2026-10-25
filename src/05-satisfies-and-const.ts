/**
 * 05 — `as const` and `satisfies`
 *
 * `as const` freezes literals (readonly + narrowest types).
 * `satisfies` checks a shape without widening the value’s type.
 */

import { isMain } from "./lib/is-main.js";

export const routes = {
  home: "/",
  users: "/users",
  user: "/users/:id",
} as const;

export type RouteKey = keyof typeof routes;
export type RoutePath = (typeof routes)[RouteKey];

type Theme = {
  primary: string;
  secondary: string;
};

// Keep literal types ("#0f172a") while still verifying Theme shape.
export const theme = {
  primary: "#0f172a",
  secondary: "#38bdf8",
} as const satisfies Theme;

export function pathFor(key: RouteKey): RoutePath {
  return routes[key];
}

export function runSatisfiesAndConst(): void {
  console.log("05-satisfies-and-const");
  console.log(" ", pathFor("home"));
  console.log(" ", pathFor("user"));
  console.log(" ", theme.primary);
  // theme.primary is typed as "#0f172a", not just string
}

if (isMain(import.meta.url)) {
  runSatisfiesAndConst();
}
