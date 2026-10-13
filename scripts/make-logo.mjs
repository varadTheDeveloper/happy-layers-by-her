// Writes public/logo.svg and public/favicon.svg from src/lib/logo.ts
// Run with: npx tsx scripts/make-logo.mjs  (only needed if the logo code changes)
import { writeFileSync } from 'node:fs';
import { logoSvg } from '../src/lib/logo.ts';
writeFileSync('public/logo.svg', logoSvg({ text: true }));
writeFileSync('public/favicon.svg', logoSvg({ text: false }));
console.log('logo written');
