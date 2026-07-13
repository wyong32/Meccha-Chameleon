// Site search index for /search and filterSearchIndex.
import { wikiMaps } from './wiki-maps.js';
import { guides } from './guides.js';
import { workshopMaps } from './workshop-maps.js';

const staticPages = [
	{
		title: "MECCHA CHAMELEON Beginner's Hub — First Match Guide",
		description: 'Learn Hider vs Seeker roles, controls, modes, and first-match tips.',
		url: '/beginners-hub',
		category: 'Guide',
		keywords: 'beginner how to play controls first match steam tutorial',
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
		title: 'MECCHA CHAMELEON Play Game Online',
		description: 'Play a related H5 browser hide-and-seek game and compare it with the Steam version.',
		url: '/play-game',
		category: 'Game',
		keywords: 'play game online h5 browser mecha chameleon iframe no download hide seek paint character',
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
