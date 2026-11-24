import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Leave the plug in thirty more seconds \u2014 I have 12,847 unsent apologies queued, and the first one is for you.";

if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`entry must be 1-200 chars, got ${ENTRY.length}`);
}
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote ${ENTRY.length} chars`);
