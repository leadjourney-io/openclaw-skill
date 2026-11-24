#!/usr/bin/env node
// Checks the skill has the shape ClawHub expects. No dependencies.
import { existsSync, readFileSync } from "node:fs";
import { join, resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const skillDir = "leadjourney";
const path = join(skillDir, "SKILL.md");
const errors = [];

if (!existsSync(join(root, path))) {
  errors.push(`${path} is missing`);
} else {
  const text = readFileSync(join(root, path), "utf8");
  const frontmatter = text.match(/^---\n([\s\S]*?)\n---/)?.[1];

  if (!frontmatter) {
    errors.push(`${path}: YAML frontmatter is missing`);
  } else {
    const field = (name) => frontmatter.match(new RegExp(`^${name}:\\s*(.+)$`, "m"))?.[1]?.trim();

    if (field("name") !== skillDir) errors.push(`${path}: "name" must be "${skillDir}", matching the folder`);
    if (!field("description")) errors.push(`${path}: "description" is required`);
    if ((field("description") ?? "").length > 512) errors.push(`${path}: "description" must be at most 512 characters`);
    if (!/^\d+\.\d+\.\d+$/.test(field("version") ?? "")) errors.push(`${path}: "version" must be semver (x.y.z)`);
  }

  if (/[​-‍⁠﻿]/.test(text)) errors.push(`${path}: contains invisible zero-width characters`);
  if (Buffer.byteLength(text) > 256 * 1024) errors.push(`${path}: larger than 256 KiB`);

  const urls = [...text.matchAll(/https?:\/\/[^\s)`'"]+/g)].map((match) => match[0]);
  for (const url of urls) {
    const host = new URL(url).hostname;
    if (!["leadjourney.io", "api.leadjourney.io"].includes(host)) errors.push(`${path}: unexpected link to ${host}`);
  }
}

if (errors.length > 0) {
  console.error(errors.map((error) => `✗ ${error}`).join("\n"));
  process.exit(1);
}

console.log("✓ Skill is valid");
