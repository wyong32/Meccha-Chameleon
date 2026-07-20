// Site search index for /search and filterSearchIndex.
import { wikiMaps } from './wiki-maps.js';
import { guides as baseGuides } from './guides.js';
import { project2Guides20260720 } from './project2-guides-20260720.js';
import { project2Guides20260713 } from './project2-guides-20260713.js';
import { workshopMaps } from './workshop-maps.js';

const guides = [...project2Guides20260720, ...project2Guides20260713, ...baseGuides];

const staticPages = [
	{
		title: 'Your First 30 Minutes in MECCHA CHAMELEON',
		description: 'Follow a four-round first-session plan with focused Hider, Seeker, and results-review goals.',
		url: '/beginners-hub',
		category: 'Guide',
		keywords: 'first session 30 minute practice plan hider seeker review',
	},
	{
		title: 'MECCHA CHAMELEON Wiki',
		description: 'Rules, mechanics, tools, modes, and patch note links.',
		url: '/wiki',
		category: 'Wiki',
		keywords: 'wiki rules mechanics encyclopedia patch notes',
	},
	{
		title: 'MECCHA CHAMELEON Online — Multiplayer & FAQ',
		description: 'Private lobbies, player counts, voice chat, troubleshooting.',
		url: '/online',
		category: 'Community',
		keywords: 'multiplayer friends lobby faq troubleshooting private code',
	},
	{
		title: 'Browser Practice — Third-Party Paint-and-Hide Game',
		description: 'Try a separate third-party H5 browser warm-up, then return to the Steam game guides.',
		url: '/play-game',
		category: 'Game',
		keywords: 'browser practice third party h5 iframe hide seek paint warm-up',
	},
	{
		title: 'MECCHA CHAMELEON Paint Hide and Seek Simulator',
		description: 'Choose a preset or uploaded background, paint and rotate a 3D practice figure, then export a PNG.',
		url: '/camouflage-simulator',
		category: 'Tool',
		keywords: 'paint hide and seek simulator camouflage simulator paint simulator colour palette chameleon brush camouflage practice spoid',
	},
	{
		title: 'MECCHA CHAMELEON Camouflage Map Notes',
		description: 'Official map reading notes for all seven stages, with landmark prompts and scene-reading drills.',
		url: '/wiki#wiki-maps',
		category: 'Maps',
		keywords: 'camouflage map reading scene reading landmark prompts official maps',
	},
	{
		title: 'MECCHA CHAMELEON Patch Notes & Updates',
		description: 'Version history through v1.9.0: Cube character, character selection, Osaka, emotes, cloud-save fixes, Sugarland, ranking, and Workshop changes.',
		url: '/updates',
		category: 'Update',
		keywords: 'meccha chameleon update patch notes v1.9.0 Cube character Osaka v1.8.0 v1.4.0 sugarland changelog steam news',
	},
];

export const searchIndex = [
	...staticPages,
	...wikiMaps.map((item) => ({
		title: item.title,
		description: item.description,
		url: `/wiki/maps/${item.addressBar}`,
		category: 'Map',
		keywords: `${item.addressBar} ${item.tag} camouflage map reading scene reading ${item.seo.keywords}`,
	})),
	...guides.map((item) => ({
		title: item.title,
		description: item.description,
		url: `/guides/${item.addressBar}`,
		category: 'Guide',
		keywords: `${item.addressBar} ${item.tag.join(' ')} ${item.seo.keywords}`,
	})),
	...workshopMaps.map((item) => ({
		title: item.title,
		description: item.description,
		url: `/workshop/${item.addressBar}`,
		category: 'Workshop',
		keywords: `${item.addressBar} ${item.tag.join(' ')} workshop custom map hosting ${item.seo.keywords}`,
	})),
];

/** Client-side filter used on /search */
export function filterSearchIndex(query, limit = Infinity) {
	const q = String(query || '').trim().toLowerCase();
	if (q.length < 2) return [];

	return searchIndex
		.filter((item) => {
			const hay = `${item.title} ${item.description} ${item.keywords} ${item.category}`.toLowerCase();
			return hay.includes(q);
		})
		.slice(0, limit);
}
