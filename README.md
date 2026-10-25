# Strict TypeScript

A small, runnable set of typed examples under a **fully strict** `tsconfig`.

## Setup

```bash
npm install
```

## Run

```bash
npm run typecheck   # prove the project type-checks under strict rules
npm run demo        # run all examples
```

Or run one topic:

```bash
npm run demo:null
npm run demo:narrowing
npm run demo:generics
npm run demo:unions
npm run demo:satisfies
npm run demo:result
```

## What’s covered

| File | Topic |
|------|--------|
| `src/01-null-safety.ts` | `strictNullChecks`, optional chaining, nullish coalescing |
| `src/02-narrowing.ts` | typeof / in / custom type guards |
| `src/03-generics.ts` | constrained generics, inference |
| `src/04-discriminated-unions.ts` | tagged unions + exhaustive `never` checks |
| `src/05-satisfies-and-const.ts` | `as const`, `satisfies` |
| `src/06-result-pattern.ts` | typed success/failure without throwing |

All of these are intentional teaching code — read the comments, change a type, and watch `npm run typecheck` catch you.
