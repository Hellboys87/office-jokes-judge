import { mkdirSync, writeFileSync } from "node:fs";

const joke =
  "I told my boss my calendar was full, so he booked a meeting to discuss why my calendar is full.";

if (joke.length < 1 || joke.length > 199 || joke.includes("\n")) {
  throw new Error("Joke must be a single line of 1-199 characters.");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", joke, "utf8");
