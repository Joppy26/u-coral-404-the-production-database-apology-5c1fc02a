import * as fs from "node:fs";
import * as path from "node:path";

const ENTRY =
  "I deleted the production database, but don't worry, the backups were in the same database, so the loss was complete and efficient.";

const outDir = "/output";
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), ENTRY, "utf8");
