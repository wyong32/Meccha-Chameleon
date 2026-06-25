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

/** Sitemap expects YYYY-MM-DD; invalid or empty strings should not become build-day dates. */
function coerceSitemapLastmod(raw) {
	const s = raw == null ? '' : String(raw).trim();
	if (/^\d{4}-\d{2}-\d{2}(?:T[\d:Z.+-]*)?$/.test(s)) return s.slice(0, 10);
	const t = Date.parse(s);
	if (!Number.isNaN(t)) return new Date(t).toISOString().slice(0, 10);
	return undefined;
}

function readExistingLastmods(publicPath) {
	if (!fs.existsSync(publicPath)) return new Map();

	const existingXml = fs.readFileSync(publicPath, 'utf8');
	const lastmods = new Map();
	const urlPattern = /<url>\s*<loc>(.*?)<\/loc>(?:\s*<lastmod>(.*?)<\/lastmod>)?/gs;

	for (const match of existingXml.matchAll(urlPattern)) {
		const rawLoc = match[1]?.trim();
		const lastmod = coerceSitemapLastmod(match[2]);
		if (!rawLoc || !lastmod) continue;

		try {
			lastmods.set(new URL(rawLoc).pathname, lastmod);
		} catch {
			lastmods.set(rawLoc.replace(fullDomain, '') || '/', lastmod);
		}
	}

	return lastmods;
}

function resolveLastmod(loc, explicitDate, existingLastmods) {
	return coerceSitemapLastmod(explicitDate) ?? existingLastmods.get(loc);
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

function addDynamicEntries(xml, items, basePath, routeName, existingLastmods) {
	for (const item of items) {
		if (!item?.addressBar) continue;
		const slug = String(item.addressBar).replace(/^\/+|\/+$/g, '');
		const loc = `/${basePath}/${slug}`;
		const date = resolveLastmod(loc, item.lastReviewed || item.publishDate, existingLastmods);
		xml += `\n${urlNode(loc, date, getChangefreq(routeName), getPriority(routeName))}`;
	}
	return xml;
}

function generate() {
	const publicPath = path.join(__dirname, '../public/sitemap.xml');
	const existingLastmods = readExistingLastmods(publicPath);

	let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

	for (const route of sitemapStaticRoutes) {
		const date = resolveLastmod(route.path, route.lastmod, existingLastmods);
		xml += `\n${urlNode(route.path, date, getChangefreq(route.name), getPriority(route.name))}`;
	}

	xml = addDynamicEntries(xml, wikiMaps, 'wiki/maps', 'wiki-map-detail', existingLastmods);
	xml = addDynamicEntries(xml, guides, 'guides', 'guide-detail', existingLastmods);
	xml = addDynamicEntries(xml, workshopMaps, 'workshop', 'workshop-detail', existingLastmods);

	xml += '\n</urlset>';

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
