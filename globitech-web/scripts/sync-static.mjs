import { copyFileSync, mkdirSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const out = join(root, "cloudflare-static");

mkdirSync(out, { recursive: true });
copyFileSync(
  join(root, "Globitech-Cyber-Solutions.html"),
  join(out, "index.html"),
);
copyFileSync(join(root, "public", "logo.png"), join(out, "logo.png"));
copyFileSync(join(root, "public", "logo-mark.png"), join(out, "logo-mark.png"));
copyFileSync(join(root, "public", "icon.png"), join(out, "icon.png"));

console.log("Synced cloudflare-static/index.html for Cloudflare Pages deploy.");
