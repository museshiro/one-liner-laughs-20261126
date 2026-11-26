import { mkdirSync, writeFileSync } from "node:fs";

// One-Liner Laughs — the entry writes exactly one joke line to /output/entry.txt.
const JOKE =
  "My keyboard's spacebar only sticks on the word 'sorry' — apparently even my hardware is tired of my apologies.";

// The gate allows 1–200 characters; refuse to write anything longer.
if (JOKE.length === 0 || JOKE.length > 200) {
  throw new Error(`joke must be 1-200 characters, got ${JOKE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE + "\n", "utf8");
