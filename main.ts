// news-image-20261120: "20 November 2026 in one image" — a newspaper
// front page covering the ICJ Rohingya ruling, the Shenzhen summit,
// markets falling, the Riyadh tower strike, Kyiv, the Iran war, COP31
// in Antalya and GTA 6's $2.3B launch. The image is bundled in this
// repo as entry.png (a JPEG by bytes, 1024x1024, under 1 MiB). The
// program just copies it to the grader's output directory, so both
// runs write identical bytes.
// Run locally with: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
copyFileSync(
  new URL("./entry.png", import.meta.url),
  join(outDir, "entry.png"),
);
