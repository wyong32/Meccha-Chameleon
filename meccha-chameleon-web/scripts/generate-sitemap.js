import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { wikiMaps } from '../src/data/wiki-maps.js';
import { guides } from '../src/data/guides.js';
import { workshopMaps } from '../src/data/workshop-maps.js';
import { seoConfig } from '../src/seo/config.js';
import { sitemapStaticRoutes } from '../src/seo/sitemapRoutes.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const fullDomain = seoConfig.fullDomain.replace(/\/+$/, '');

function getPriority(name) {
	return seoConfig.priorities[name] ?? 0.7;
}

function getChangefreq(name) {
	return seoConfig.changefreq[name] ?? 'monthly';
}

/** Sitemap expects YYYY-MM-DD; non-ISO strings fall back to build day */
function coerceSitemapLastmod(raw, fallback) {
	const s = raw == null ? '' : String(raw).trim();
	if (/^\d{4}-\d{2}-\d{2}(?:T[\d:Z.+-]*)?$/.test(s)) return s.slice(0, 10);
	const t = Date.parse(s);
	if (!Number.isNaN(t)) return new Date(t).toISOString().slice(0, 10);
	return fallback;
}

function urlNode(loc, lastmod, changefreq, priority) {
	const p = String(Math.round((priority ?? 0.7) * 100) / 100);
	const lastmodNode = lastmod ? `\n    <lastmod>${lastmod}</lastmod>` : '';
	return `  <url>
    <loc>${fullDomain}${loc}</loc>${lastmodNode}
    <changefreq>${changefreq}</changefreq>
    <priority>${p}</priority>
  </url>`;
}

function addDynamicEntries(xml, items, basePath, routeName, fallbackLastmod) {
	for (const item of items) {
		if (!item?.addressBar) continue;
		const slug = String(item.addressBar).replace(/^\/+|\/+$/g, '');
		const date = coerceSitemapLastmod(item.publishDate || item.lastReviewed, fallbackLastmod);
		xml += `\n${urlNode(`/${basePath}/${slug}`, date, getChangefreq(routeName), getPriority(routeName))}`;
	}
	return xml;
}

function generate() {
	const fallbackLastmod = new Date().toISOString().split('T')[0];

	let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

	for (const route of sitemapStaticRoutes) {
		xml += `\n${urlNode(route.path, route.lastmod, getChangefreq(route.name), getPriority(route.name))}`;
	}

	xml = addDynamicEntries(xml, wikiMaps, 'wiki/maps', 'wiki-map-detail', fallbackLastmod);
	xml = addDynamicEntries(xml, guides, 'guides', 'guide-detail', fallbackLastmod);
	xml = addDynamicEntries(xml, workshopMaps, 'workshop', 'workshop-detail', fallbackLastmod);

	xml += '\n</urlset>';

	const publicPath = path.join(__dirname, '../public/sitemap.xml');
	const publicDir = path.dirname(publicPath);
	if (!fs.existsSync(publicDir)) {
		fs.mkdirSync(publicDir, { recursive: true });
	}
	fs.writeFileSync(publicPath, xml, 'utf8');
	console.log('Sitemap written to public/sitemap.xml');

	const count = (xml.match(/<url>/g) || []).length;
	console.log(`Total URLs: ${count} (${fullDomain})`);
}

generate();
