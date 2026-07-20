import { createHash } from 'node:crypto';
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const failures = [];
const read = (relativePath) => readFile(path.join(root, relativePath), 'utf8');
const expect = (condition, message) => {
  if (!condition) failures.push(message);
};
const wordCount = (text) =>
  text
    .replace(/<[^>]+>/g, ' ')
    .replace(/\{[^}]+\}/g, ' ')
    .match(/[A-Za-z0-9’'-]+/g)?.length ?? 0;
const contentBlock = (source, id) => {
  const match = source.match(
    new RegExp(`<!-- compliance:${id}:start -->([\\s\\S]*?)<!-- compliance:${id}:end -->`),
  );
  expect(Boolean(match), `Missing compliance content block: ${id}`);
  return match?.[1] ?? '';
};

const [privacy, footer, header, home, beginner, guides, seo, workshop, workshopMaps, manifestText] =
  await Promise.all([
    read('src/pages/legal/[slug].astro'),
    read('src/components/AppFooter.astro'),
    read('src/components/AppHeader.astro'),
    read('src/pages/index.astro'),
    read('src/pages/beginners-hub.astro'),
    read('src/data/guides.js'),
    read('src/seo/pages.js'),
    read('src/pages/workshop/index.astro'),
    read('src/data/workshop-maps.js'),
    read('scripts/ads-immutability-manifest.json'),
  ]);

const privacyLower = privacy.toLowerCase();
for (const phrase of [
  'third-party advertising vendors',
  'cookies',
  'web beacons',
  'advertising identifiers',
  'personalized advertising',
  'certified cmp',
  'eea',
  'united kingdom',
  'switzerland',
  'personally identifiable information',
  'precise geolocation',
  'adssettings.google.com',
]) {
  expect(privacyLower.includes(phrase), `Privacy disclosure missing: ${phrase}`);
}

expect(
  footer.includes('unofficial fan website') && footer.includes('not affiliated with LEMORION'),
  'Footer disclaimer is missing',
);
expect(
  home.includes('Unofficial player guide — not affiliated with LEMORION or Valve Corporation.'),
  'Home identity disclosure is missing',
);
expect(
  header.includes("{ label: 'Browser Practice', href: '/play-game' }"),
  'Header Browser Practice label is missing',
);
expect(
  footer.includes("{ label: 'Browser Practice', href: '/play-game' }"),
  'Footer Browser Practice label is missing',
);
expect(
  !header.includes("{ label: 'Play Game', href: '/play-game' }"),
  'Header still labels navigation Play Game',
);
expect(
  !footer.includes("{ label: 'Play Game', href: '/play-game' }"),
  'Footer still labels navigation Play Game',
);

expect(
  home.includes('Learn MECCHA CHAMELEON with maps, guides, and paint practice'),
  'Home H1 is not the approved natural sentence',
);
expect(
  seo.includes("title: 'Your First 30 Minutes in MECCHA CHAMELEON'"),
  'Beginner SEO title is missing',
);
expect(
  beginner.includes('<h1>Your First 30 Minutes in MECCHA CHAMELEON</h1>'),
  'Beginner H1 is missing',
);
expect(
  guides.includes("title: 'MECCHA CHAMELEON Rules and Mechanics Explained'"),
  'Mechanics article title is missing',
);
expect(
  guides.includes("title: 'MECCHA CHAMELEON Rules & Mechanics Guide'"),
  'Mechanics SEO title is missing',
);
expect(
  beginner.includes('/guides/meccha-chameleon-how-to-play'),
  'Beginner-to-mechanics cross-link is missing',
);
expect(
  guides.includes('<a href="/beginners-hub">Follow the first-30-minute practice plan</a>'),
  'Mechanics-to-beginner cross-link is missing',
);

for (const [id, source, min, max] of [
  ['beginner', beginner, 800, 1500],
  ['mechanics', guides, 800, 1500],
  ['workshop-index', workshop, 800, 1200],
  ['police-station', workshopMaps, 800, 1500],
]) {
  const count = wordCount(contentBlock(source, id));
  expect(count >= min && count <= max, `${id} word count ${count} is outside ${min}-${max}`);
}

const manifest = JSON.parse(manifestText);
for (const [relativePath, expectedHash] of Object.entries(manifest)) {
  const bytes = await readFile(path.join(root, relativePath));
  const actualHash = createHash('sha256').update(bytes).digest('hex');
  expect(actualHash === expectedHash, `Protected advertising file changed: ${relativePath}`);
}

if (failures.length) {
  console.error(failures.map((failure) => `FAIL: ${failure}`).join('\n'));
  process.exit(1);
}

console.log('AdSense compliance checks passed.');
