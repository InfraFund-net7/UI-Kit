const fs = require("fs");
const path = require("path");

const srcPath = path.resolve(__dirname, "../src/index.css");
const distPath = path.resolve(__dirname, "../dist/index.css");

if (fs.existsSync(srcPath)) {
    fs.copyFileSync(srcPath, distPath);
    console.log("✅ index.css copied to dist/");
} else {
    console.warn("⚠️ src/index.css not found, skipping CSS copy.");
}
