import fs from "node:fs/promises";

const OWNER = "Hicham77500";
const REPO = "Hicham77500";
const BRANCH = "main";
const START = "<!-- NOW:START -->";
const END = "<!-- NOW:END -->";

const rawUrl = `https://raw.githubusercontent.com/${OWNER}/${REPO}/${BRANCH}/README.md`;

function extractNowBlock(readme) {
  const startIndex = readme.indexOf(START);
  const endIndex = readme.indexOf(END);

  if (startIndex === -1 || endIndex === -1 || endIndex <= startIndex) {
    return null;
  }

  const block = readme.slice(startIndex + START.length, endIndex).trim();
  return block.length ? block : null;
}

const response = await fetch(rawUrl);

if (!response.ok) {
  console.error("❌ Impossible de récupérer le README:", response.status, response.statusText);
  process.exit(1);
}

const readme = await response.text();
const now = extractNowBlock(readme) ?? "🚧 Projet en cours : (non défini)";
const payload = {
  now,
  updatedAt: new Date().toISOString()
};

await fs.writeFile("now.json", JSON.stringify(payload, null, 2), "utf-8");
console.log("✅ now.json mis à jour avec :", now);
