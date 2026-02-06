#!/usr/bin/env node
/**
 * Copies Supabase (and other shared) env vars from travel-blog-backend/.env
 * into travel-blog-frontend/.env.local. Run from repo root or from travel-blog-frontend:
 *
 *   node travel-blog-frontend/scripts/copy-env-from-backend.js
 *   # or from travel-blog-frontend:
 *   node scripts/copy-env-from-backend.js
 */

const fs = require('fs');
const path = require('path');

const KEYS_TO_COPY = ['SUPABASE_URL', 'SUPABASE_ANON_KEY', 'SUPABASE_SERVICE_ROLE_KEY'];

function parseEnvFile(filePath) {
  if (!fs.existsSync(filePath)) return {};
  const content = fs.readFileSync(filePath, 'utf8');
  const out = {};
  for (const line of content.split('\n')) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const match = trimmed.match(/^([A-Za-z_][A-Za-z0-9_]*)=(.*)$/);
    if (match) {
      let value = match[2].trim();
      if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
        value = value.slice(1, -1);
      }
      out[match[1]] = value;
    }
  }
  return out;
}

function writeEnvFile(filePath, vars) {
  const lines = Object.entries(vars).map(([k, v]) => `${k}=${v}`);
  fs.writeFileSync(filePath, lines.join('\n') + '\n', 'utf8');
}

const repoRoot = path.resolve(__dirname, '..', '..');
const backendEnvPath = path.join(repoRoot, 'travel-blog-backend', '.env');
const frontendEnvPath = path.join(path.resolve(__dirname, '..'), '.env.local');

if (!fs.existsSync(backendEnvPath)) {
  console.error('Backend .env not found at:', backendEnvPath);
  console.error('The travel-blog-backend folder was removed; ensure SUPABASE_URL and SUPABASE_ANON_KEY are set in .env.local.');
  process.exit(1);
}

const backend = parseEnvFile(backendEnvPath);
const frontend = parseEnvFile(frontendEnvPath);

let copied = 0;
for (const key of KEYS_TO_COPY) {
  if (backend[key]) {
    frontend[key] = backend[key];
    copied++;
  }
}

writeEnvFile(frontendEnvPath, frontend);
console.log('Wrote', frontendEnvPath, 'with', Object.keys(frontend).length, 'variables (' + copied + ' copied from backend).');
