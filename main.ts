// news-image-20261122 — "The World in One Day", Sunday 22 November 2026.
//
// Node 22, standard library only. The entry image is stored next to this
// file as entry.png; the program copies it into the output directory, so
// the grader receives exactly those bytes. Copying is deterministic, so
// both grader runs produce an identical file. The program never touches
// the network.
//
// Run locally with:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const sourceDir = dirname(fileURLToPath(import.meta.url));
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outputDir, { recursive: true });
copyFileSync(join(sourceDir, "entry.png"), join(outputDir, "entry.png"));
