// Use explicit relative links so the demo opens both on a host and from Finder.
import { readdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const output = fileURLToPath(new URL('../dist/', import.meta.url));

function relativeUrl(url, file) {
  if (!url.startsWith('/') || url.startsWith('//')) return url;
  const [, pathname, suffix] = url.match(/^([^?#]*)(.*)$/s);
  const target = pathname.endsWith('/') ? pathname + 'index.html' : pathname;
  return path.relative(path.dirname(file), path.join(output, target)) + suffix;
}

for (const entry of await readdir(output, { recursive: true, withFileTypes: true })) {
  if (!entry.isFile() || !/\.(html|css)$/.test(entry.name)) continue;
  const file = path.join(entry.parentPath, entry.name);
  let contents = await readFile(file, 'utf8');
  if (entry.name.endsWith('.html')) {
    contents = contents.replace(/\b(href|src)="(\/[^"]*)"/g, (_, attr, url) =>
      `${attr}="${relativeUrl(url, file)}"`);
    contents = contents.replace(/\bsrcset="([^"]+)"/g, (_, candidates) => {
      const links = candidates.split(',').map(candidate => {
        const [url, descriptor] = candidate.trim().split(/\s+/, 2);
        return [relativeUrl(url, file), descriptor].filter(Boolean).join(' ');
      });
      return `srcset="${links.join(', ')}"`;
    });
  }
  contents = contents.replace(/url\((["']?)(\/[^)'"]+)\1\)/g, (_, quote, url) =>
    `url(${quote}${relativeUrl(url, file)}${quote})`);
  await writeFile(file, contents);
}
