import { seoConfig } from './config.js';

export function toAbsoluteUrl(pathOrUrl, base = seoConfig.fullDomain) {
	if (!pathOrUrl) return toAbsoluteUrl(seoConfig.defaultOgImage, base);
	if (/^https?:\/\//i.test(pathOrUrl)) return pathOrUrl;
	const origin = String(base).replace(/\/+$/, '');
	const path = pathOrUrl.startsWith('/') ? pathOrUrl : `/${pathOrUrl}`;
	return `${origin}${path}`;
}

export function buildPublisher() {
	const siteUrl = seoConfig.fullDomain.replace(/\/+$/, '');
	return {
		'@type': 'Organization',
		name: seoConfig.publisher.name,
		url: siteUrl,
		logo: {
			'@type': 'ImageObject',
			url: toAbsoluteUrl(seoConfig.defaultOgImage),
		},
	};
}

export function buildWebSiteJsonLd() {
	const siteUrl = seoConfig.fullDomain.replace(/\/+$/, '');
	return {
		'@context': 'https://schema.org',
		'@type': 'WebSite',
		'@id': `${siteUrl}/#website`,
		name: seoConfig.siteName,
		url: siteUrl,
		inLanguage: 'en',
		description: seoConfig.defaults.description,
		publisher: buildPublisher(),
	};
}

export function buildWebPageJsonLd({ name, description, path, type = 'WebPage' }) {
	const url = toAbsoluteUrl(path);
	const siteUrl = seoConfig.fullDomain.replace(/\/+$/, '');
	return {
		'@context': 'https://schema.org',
		'@type': type,
		'@id': `${url}#webpage`,
		name,
		description,
		url,
		inLanguage: 'en',
		isPartOf: { '@id': `${siteUrl}/#website` },
		publisher: buildPublisher(),
	};
}

export function buildArticleJsonLd({
	headline,
	description,
	path,
	datePublished,
	dateModified,
	imageUrl = undefined,
}) {
	const url = toAbsoluteUrl(path);
	const modified = dateModified || datePublished;
	return {
		'@context': 'https://schema.org',
		'@type': 'Article',
		headline,
		description,
		url,
		inLanguage: 'en',
		datePublished,
		dateModified: modified,
		image: toAbsoluteUrl(imageUrl || seoConfig.defaultOgImage),
		author: buildPublisher(),
		publisher: buildPublisher(),
		mainEntityOfPage: {
			'@type': 'WebPage',
			'@id': url,
		},
		isPartOf: {
			'@type': 'WebSite',
			name: seoConfig.siteName,
			url: seoConfig.fullDomain.replace(/\/+$/, ''),
		},
	};
}

export function buildBreadcrumbJsonLd(items) {
	return {
		'@context': 'https://schema.org',
		'@type': 'BreadcrumbList',
		itemListElement: items.map((item, index) => ({
			'@type': 'ListItem',
			position: index + 1,
			name: item.name,
			item: toAbsoluteUrl(item.path),
		})),
	};
}

/** Short label for visible breadcrumb crumbs on narrow screens */
export function shortenBreadcrumbLabel(title, maxLength = 34) {
	const normalized = String(title || '').trim();
	const base = normalized.includes('—') ? normalized.split('—')[0].trim() : normalized;
	if (base.length <= maxLength) return base;
	return `${base.slice(0, maxLength - 1)}…`;
}

export function buildFaqJsonLd(faqItems) {
	return {
		'@context': 'https://schema.org',
		'@type': 'FAQPage',
		mainEntity: faqItems.map((item) => ({
			'@type': 'Question',
			name: item.q,
			acceptedAnswer: { '@type': 'Answer', text: item.a },
		})),
	};
}

export function buildWebApplicationJsonLd({ name, description, path, dateModified }) {
	return {
		'@context': 'https://schema.org',
		'@type': 'WebApplication',
		name,
		description,
		url: toAbsoluteUrl(path),
		applicationCategory: 'EducationalApplication',
		operatingSystem: 'Web browser',
		isAccessibleForFree: true,
		inLanguage: 'en',
		author: buildPublisher(),
		publisher: buildPublisher(),
		dateModified,
	};
}
