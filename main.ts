import { mkdirSync, writeFileSync } from "node:fs";

const line = "Our office printer only works when nobody needs it, which HR calls 'work-life balance'.";

if (line.length < 1 || line.length > 200 || line.includes("\n")) {
  throw new Error("entry must be a single line of 1-200 characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
