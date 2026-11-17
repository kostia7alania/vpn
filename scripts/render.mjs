import { mkdir, writeFile } from 'node:fs/promises';
import site from '../worker/index.js';

const response = await site.fetch(new Request('https://example.invalid/'), process.env);
if (response.status !== 200) throw new Error('All six profile secrets must be configured before building the page.');
const html = await response.text();
await mkdir('_site', { recursive: true });
await writeFile('_site/index.html', html, { mode: 0o600 });
console.log('Page built.');
