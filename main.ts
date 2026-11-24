// Monday, Reviewed in One Line — the funniest one-line review of Monday,
// under 200 characters. Writes it to /output/entry.txt.
import * as fs from "node:fs";

const LIMIT = 200;

const review = (text: string): string => {
  const chars = Array.from(text);
  if (chars.length < 1 || chars.length >= LIMIT) {
    throw new Error(`review is ${chars.length} chars, must be 1-${LIMIT - 1}`);
  }
  if (text.includes("\n")) {
    throw new Error("review must be a single line");
  }
  return text;
};

const writeEntry = (text: string): void => {
  const checked = review(text);
  fs.mkdirSync("/output", { recursive: true });
  fs.writeFileSync("/output/entry.txt", checked, "utf8");
  console.log(`wrote ${[...checked].length} chars to /output/entry.txt`);
};

writeEntry(
  "Monday: one star. Arrived early, stole my weekend, rained on my commute, then asked if I was ready for the week. I was not."
);
