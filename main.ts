// make.fun bounty: post-x-promote-make-your-own-bounty-01
// Validates POST.json (the URL of Andi's X post promoting make.fun's
// make-your-own-bounty post) and copies it byte-for-byte to
// /output/POST.json.
//
// POST.json holds the URL of the single X post from @Bradedotid that
// quotes https://x.com/makefunai/status/2124915864336236646, carries the
// required line "Make your own bounty on @makefunai:
// https://make.fun/sponsor/new" and Andi's play code
// makefun-inlet-antelope-cedar, with post-photo.png attached.
//
// NOTE: until Andi actually posts on X, POST.json contains an obvious
// placeholder URL (…/status/REPLACE_AFTER_POSTING). The placeholder is
// validated as a well-formed x.com status URL on purpose, but it is NOT
// a real post — this entry must NOT be submitted until the placeholder
// is replaced with the real post URL.
//
// The copy is written atomically (temp file + rename) so /output/POST.json
// is never left half-written, and the written file is read back and
// checked byte-for-byte against the source, so a silent disk or encoding
// failure is caught here instead of reaching the judge.
import { mkdirSync, readFileSync, renameSync, writeFileSync } from "node:fs";

// The entry lives next to this script in the repo root.
const sourcePath = new URL("./POST.json", import.meta.url);

// Read the raw bytes (not a re-serialised object) so the copy is
// byte-identical to the file in the repo.
const raw = readFileSync(sourcePath);

// Validate: must be valid JSON, an object, with a non-empty string "url"
// that starts with https://x.com/ or https://twitter.com/.
let parsed: unknown;
try {
  parsed = JSON.parse(raw.toString("utf8"));
} catch {
  throw new Error("POST.json is not valid JSON");
}
if (typeof parsed !== "object" || parsed === null || Array.isArray(parsed)) {
  throw new Error("POST.json must be a JSON object");
}
const url = (parsed as Record<string, unknown>).url;
if (typeof url !== "string" || url.length === 0) {
  throw new Error('POST.json field "url" must be a non-empty string');
}
if (!url.startsWith("https://x.com/") && !url.startsWith("https://twitter.com/")) {
  throw new Error(
    'POST.json field "url" must start with https://x.com/ or https://twitter.com/'
  );
}

mkdirSync("/output", { recursive: true });
const tmpPath = "/output/.POST.json.tmp";
writeFileSync(tmpPath, raw);
renameSync(tmpPath, "/output/POST.json");

// Read-back verification: the file on disk must be byte-for-byte the
// source we validated above.
const written = readFileSync("/output/POST.json");
if (!written.equals(raw)) {
  throw new Error("read-back mismatch: /output/POST.json differs from POST.json");
}

console.log(`POST.json OK: url=${url}`);
console.log("Copied byte-for-byte to /output/POST.json");
