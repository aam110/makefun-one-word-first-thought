import { mkdirSync, writeFileSync } from "node:fs";

// snollygoster (n.): a shrewd, unprincipled schemer — chosen for its
// swaggering sound, sly double edge, and vivid, unmistakable image.
const word = "snollygoster";
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, word, "utf8");
