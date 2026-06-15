import { readFile } from "fs/promises";
import { existsSync, mkdirSync, createWriteStream } from "fs";
import { get } from "https";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const configPath = resolve(__dirname, "project-images.json");
const outputDir = resolve(__dirname, "../public/images/projects");

async function download(url, dest) {
  return new Promise((resolvePromise, reject) => {
    const file = createWriteStream(dest);
    get(url, { headers: { "User-Agent": "Mozilla/5.0" } }, (res) => {
      if (res.statusCode !== 200) {
        file.close();
        reject(new Error(`HTTP ${res.statusCode}`));
        return;
      }
      const contentType = res.headers["content-type"] || "";
      if (!contentType.startsWith("image/")) {
        file.close();
        reject(new Error(`Not an image (${contentType})`));
        return;
      }
      res.pipe(file);
      file.on("finish", () => {
        file.close();
        resolvePromise();
      });
    }).on("error", (err) => {
      file.close();
      reject(err);
    });
  });
}

async function main() {
  const raw = await readFile(configPath, "utf-8");
  const images = JSON.parse(raw);

  if (!existsSync(outputDir)) {
    mkdirSync(outputDir, { recursive: true });
  }

  let success = 0;
  let skipped = 0;
  let failed = 0;

  for (const [filename, url] of Object.entries(images)) {
    const dest = resolve(outputDir, filename);
    try {
      await download(url, dest);
      console.log(`  ✓ ${filename}`);
      success++;
    } catch (err) {
      if (existsSync(dest)) {
        console.log(`  ~ ${filename} (download failed, keeping existing)`);
        skipped++;
      } else {
        console.log(`  ✗ ${filename} (${err.message})`);
        failed++;
      }
    }
  }

  console.log(`\n${success} downloaded, ${skipped} kept existing, ${failed} failed`);
}

main();
