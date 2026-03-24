import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const src = path.join(root, "node_modules/@n8n/chat/dist/style.css");
const dest = path.join(root, "public/n8n-chat.css");

let css = fs.readFileSync(src, "utf8");
css = css.replace(/:global\((\.[a-zA-Z0-9_-]+)\)/g, "$1");
if (css.includes(":global")) {
  console.error("strip-n8n-chat-global-css: leftover :global in output");
  process.exit(1);
}
fs.mkdirSync(path.dirname(dest), { recursive: true });
fs.writeFileSync(dest, css);
console.log("Wrote", dest);
