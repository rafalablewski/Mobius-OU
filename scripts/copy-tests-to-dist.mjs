#!/usr/bin/env node
// Copy /tests/ into /dist/tests/ on preview/local builds only.
//
// We deliberately keep /tests/ outside Vite's build inputs (public/ and src/)
// so drafts never accidentally ship to production. But it's still useful to
// browse them on Vercel preview deployments. This script:
//
//   - Skips when VERCEL_ENV === 'production'  → prod stays clean
//   - Copies otherwise (preview, development, unset/local)
//
// Runs as the second half of `npm run build`.

import { cp, access } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));
const root = resolve(here, '..');
const src = resolve(root, 'tests');
const dest = resolve(root, 'dist', 'tests');

const env = process.env.VERCEL_ENV ?? 'unset';

if (env === 'production') {
  console.log('[copy-tests] VERCEL_ENV=production — skipping /tests/ copy.');
  process.exit(0);
}

try {
  await access(src);
} catch {
  console.log('[copy-tests] no /tests/ folder found, nothing to copy.');
  process.exit(0);
}

await cp(src, dest, { recursive: true });
console.log(`[copy-tests] copied tests/ → dist/tests/ (VERCEL_ENV=${env}).`);
