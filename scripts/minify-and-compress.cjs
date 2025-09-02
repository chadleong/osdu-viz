#!/usr/bin/env node
const fs = require("fs")
const path = require("path")

function walk(dir, cb) {
  const entries = fs.readdirSync(dir, { withFileTypes: true })
  for (const e of entries) {
    const full = path.join(dir, e.name)
    if (e.isDirectory()) walk(full, cb)
    else cb(full)
  }
}

function ensureMinified(root) {
  const stats = { processed: 0, created: 0, skipped: 0 }
  walk(root, (file) => {
    if (!file.toLowerCase().endsWith(".json")) return
    if (file.toLowerCase().endsWith(".min.json")) return

    stats.processed++
    const minFile = file.replace(/\.json$/i, ".min.json")
    try {
      // If minified already exists and is newer or same, skip
      if (fs.existsSync(minFile)) {
        const s1 = fs.statSync(file).mtimeMs
        const s2 = fs.statSync(minFile).mtimeMs
        if (s2 >= s1) {
          stats.skipped++
          return
        }
      }

      const txt = fs.readFileSync(file, "utf8")
      const obj = JSON.parse(txt)
      const out = JSON.stringify(obj)
      fs.writeFileSync(minFile, out, "utf8")
      // preserve original mtime
      const mtime = fs.statSync(file).mtime
      fs.utimesSync(minFile, mtime, mtime)
      stats.created++
    } catch (e) {
      console.warn("Failed to minify", file, e.message)
    }
  })
  return stats
}

function main() {
  const arg = process.argv[2] || "minify"
  const root = path.join(__dirname, "..", "public", "data", "Generated")
  if (!fs.existsSync(root)) {
    console.error("Generated data directory not found:", root)
    process.exit(1)
  }

  if (arg !== "minify") {
    console.log('Only "minify" action is supported in this lightweight script. Use: npm run minify-json')
  }

  const stats = ensureMinified(root)
  console.log(`Processed ${stats.processed} .json files, created ${stats.created} .min.json, skipped ${stats.skipped}`)
}

if (require.main === module) main()
