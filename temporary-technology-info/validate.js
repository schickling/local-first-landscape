// @ts-check
import { readdir } from 'node:fs/promises';
import { join } from 'node:path';

const directories = [
  'y-sweet',
  'zero',
  'jazz',
  'liveblocks-storage',
  'powersync',
  'triplit',
  'convex',
  'electricsql',
  'automerge',
  'basicdb',
  'ditto',
  'dxos',
  'liveblocks-yjs'
];

async function validateAll() {
  for (const dir of directories) {
    try {
      const module = await import(`./${dir}/data.js`);
      console.log(`✓ ${dir} validated successfully`);
    } catch (error) {
      console.error(`✗ Error in ${dir}:`, error.message);
    }
  }
}

validateAll();

