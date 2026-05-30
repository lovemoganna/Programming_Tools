/**
 * Quality Guardrail: Consistency Checker
 * 
 * Purpose: Scan the codebase for design system violations:
 * 1. Hardcoded pixel font sizes (text-[10px], etc.)
 * 2. Prohibited inline styles for layouts.
 * 3. Inconsistent sidebar width usage.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '../src');

const VIOLATIONS = [
  {
    name: 'Hardcoded Pixel Typography',
    regex: /text-\[\d+px\]/g,
    message: 'Prohibited pixel unit. Use text-xs, text-sm, etc.'
  },
  {
    name: 'Small Metadata Font',
    regex: /text-\[[7-9]px\]/g,
    message: 'Accessibility risk: Font size too small (< 12px).'
  },
  {
    name: 'Raw Inline Style (fontSize)',
    regex: /style=\{\{.*fontSize.*\}\}/g,
    message: 'Prohibited inline fontSize. Use Tailwind classes.'
  },
  {
    name: 'Legacy Sidebar Width',
    regex: /w-80(?!-)/g,
    message: 'Found static w-80. Ensure SplitViewLayout is used instead.'
  }
];

function scanFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const relativePath = path.relative(ROOT, filePath);
  let fileHasViolations = false;

  VIOLATIONS.forEach(rule => {
    const matches = content.match(rule.regex);
    if (matches) {
      if (!fileHasViolations) {
        console.log(`\n📄 File: src/${relativePath}`);
        fileHasViolations = true;
      }
      matches.forEach(match => {
        console.log(`   ❌ [${rule.name}] -> ${match} | ${rule.message}`);
      });
    }
  });

  return fileHasViolations;
}

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(dirPath);
  });
}

console.log('🛡️ Starting Consistency Guardrail Scan...');
let totalViolations = 0;

walkDir(ROOT, (filePath) => {
  if (filePath.endsWith('.tsx') || filePath.endsWith('.css')) {
    if (scanFile(filePath)) {
      totalViolations++;
    }
  }
});

console.log('\n----------------------------------------');
if (totalViolations === 0) {
  console.log('✅ PASS: All audited modules comply with Unified Design System.');
  process.exit(0);
} else {
  console.log(`🚨 FAIL: Found ${totalViolations} files with consistency violations.`);
  process.exit(1);
}
