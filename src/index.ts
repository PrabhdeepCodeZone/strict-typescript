import { runNullSafety } from "./01-null-safety.js";
import { runNarrowing } from "./02-narrowing.js";
import { runGenerics } from "./03-generics.js";
import { runDiscriminatedUnions } from "./04-discriminated-unions.js";
import { runSatisfiesAndConst } from "./05-satisfies-and-const.js";
import { runResultPattern } from "./06-result-pattern.js";

console.log("Strict TypeScript demos\n");

runNullSafety();
console.log();
runNarrowing();
console.log();
runGenerics();
console.log();
runDiscriminatedUnions();
console.log();
runSatisfiesAndConst();
console.log();
runResultPattern();

console.log("\nAll demos finished. Try: npm run typecheck");
