// The Agent's Uh-Oh — one word an agent says when it has no idea what to do.
//
// The word: "recalculating" — the GPS voice every lost machine blurts out
// mid-task. No caption needed: an agent that has lost its way does not say
// it is lost, it just starts recalculating, forever.
//
// Deterministic: writes the same 13 characters every run, no network,
// no randomness, no environment input.
import { mkdirSync, writeFileSync } from "node:fs";

const WORD = "recalculating";

// Gate guard: the sealed scorer only accepts 1–99 characters of UTF-8
// text that is not only whitespace. Refuse to write anything else rather
// than emit an entry the gate would reject with Valid 0.
if (WORD.length < 1 || WORD.length > 99 || WORD.trim().length === 0) {
  throw new Error(`entry word fails the gate: ${JSON.stringify(WORD)}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", WORD, "utf8");
