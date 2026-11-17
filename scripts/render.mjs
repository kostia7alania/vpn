import { mkdir, writeFile } from 'node:fs/promises';
import site from '../worker/index.js';

const env = { ...process.env };
try {
  const release = await fetch('https://api.github.com/repos/amnezia-vpn/amnezia-client/releases/latest', {
    headers: { 'User-Agent': 'vpn-guide', Accept: 'application/vnd.github+json' },
    signal: AbortSignal.timeout(5000),
  });
  if (release.ok) {
    const data = await release.json();
    const expected = [
      ['SITE_WINDOWS_URL', /_windows_x64\.exe$/i],
      ['SITE_MACOS_URL', /_macos_x64\.pkg$/i],
      ['SITE_LINUX_URL', /_linux_x64\.run$/i],
    ];
    for (const [key, pattern] of expected) {
      const asset = data.assets?.find(item => pattern.test(item.name));
      if (!asset) continue;
      const url = new URL(asset.browser_download_url);
      if (url.protocol === 'https:' && url.hostname === 'github.com' &&
          url.pathname.startsWith('/amnezia-vpn/amnezia-client/releases/download/')) {
        env[key] = url.href;
      }
    }
  }
} catch {
  // The official mirror remains the fallback when release metadata is unavailable.
}
env.SITE_VERSION = [process.env.GITHUB_RUN_NUMBER, process.env.GITHUB_RUN_ATTEMPT].join('.');
env.SITE_BUILT_AT = new Date().toISOString();
const response = await site.fetch(new Request('https://example.invalid/'), env);
if (response.status !== 200) throw new Error('All six profile secrets must be configured before building the page.');
const html = await response.text();
await mkdir('_site', { recursive: true });
await writeFile('_site/index.html', html, { mode: 0o600 });
console.log('Page built.');
