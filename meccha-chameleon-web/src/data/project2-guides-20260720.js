// Project2 guide additions for the 2026-07-20 publishing batch.

const wikiDeveloperGuideImage = '/images/guides/meccha-wiki-developer-meaning-guide.jpg';
const robloxClonesGuideImage = '/images/guides/meccha-roblox-clones-similar-games-guide.jpg';

const guideBodyBannerHtml = `
			<!-- Affiliate ad disabled for now; keep this block for future reuse.
			<aside class="affiliate-ad-slot" data-affiliate-ad="banner" aria-label="Advertisement">
				<span class="affiliate-ad-slot__label">Advertisement</span>
				<div class="affiliate-ad-slot__frame" data-affiliate-ad-frame></div>
			</aside>
			-->
			<div data-gpt-banner-anchor></div>
`;

export const project2Guides20260720 = [
	{
		id: 9,
		title: 'MECCHA CHAMELEON Wiki Developer and Meaning Guide',
		h1: 'MECCHA CHAMELEON Wiki, Developer, and Meaning Guide',
		description:
			'Reference MECCHA CHAMELEON wiki facts: developer, creator, name meaning, pronunciation, characters, and official-version checks.',
		publishDate: '2026-07-20',
		imageUrl: wikiDeveloperGuideImage,
		imageAlt: 'MECCHA CHAMELEON wiki guide showing official game scene, developer facts, meaning, pronunciation, and character checks',
		addressBar: 'meccha-chameleon-wiki-developer-meaning',
		tag: ['Wiki', 'Developer', 'Creator', 'Meaning', 'Pronunciation', 'Characters', 'Reference'],
		seo: {
			title: 'MECCHA CHAMELEON Wiki Developer and Meaning Guide',
			description:
				'Reference MECCHA CHAMELEON wiki facts: developer, creator, name meaning, pronunciation, characters, and official-version checks.',
			keywords: 'MECCHA CHAMELEON wiki, developer, creator, meaning, pronunciation',
		},
		detailsHtml: `
		<div class="guide-content">
			<div class="guide-summary">
				<p class="guide-summary-label">Fast answer</p>
				<p>
					MECCHA CHAMELEON is a Steam hide-and-seek game built around body painting, pose control, and visual mimicry.
					The current official Steam listing names <strong>lemorion_1224</strong> as both developer and publisher.
					If you only need gameplay rules, start with the <a href="/guides/meccha-chameleon-how-to-play">rules and mechanics guide</a>.
					If you need name, creator, pronunciation, or character facts, use this reference page.
				</p>
			</div>

			<figure class="guide-media">
				<img src="${wikiDeveloperGuideImage}" alt="MECCHA CHAMELEON wiki reference for developer creator meaning pronunciation and characters" title="MECCHA CHAMELEON wiki developer and meaning guide" loading="lazy" />
				<figcaption>Use this page for identity and reference checks. Use the strategy guides when you are trying to win rounds.</figcaption>
			</figure>

			<h2>Wiki and source-of-truth basics</h2>
			<h3>Wiki intent</h3>
			<p>
				A useful MECCHA CHAMELEON wiki page should answer player lookups without pretending every lookup is a strategy problem.
				For this site, split wiki intent into four buckets: official identity, rules, playable systems, and route practice.
				That keeps developer and name questions separate from Hider paint drills or Seeker sweep routes.
			</p>
			<div class="guide-table-wrap">
				<table class="guide-table">
					<thead><tr><th>Lookup</th><th>Answer lane</th><th>Best next page</th></tr></thead>
					<tbody>
						<tr><td>Who made MECCHA CHAMELEON?</td><td>Developer / creator reference</td><td>This page</td></tr>
						<tr><td>How does the game work?</td><td>Rules, roles, match phases</td><td><a href="/guides/meccha-chameleon-how-to-play">Rules and mechanics</a></td></tr>
						<tr><td>How do I hide better?</td><td>Hider workflow and practice</td><td><a href="/guides/hider-camouflage-masterclass">Hider camouflage masterclass</a></td></tr>
						<tr><td>What changed in a patch?</td><td>Version and update checks</td><td><a href="/updates">Patch notes archive</a></td></tr>
					</tbody>
				</table>
			</div>
			<p>
				Do not use random wiki mirrors or scraped pages for version facts. For player action, the game client and current lobby text beat any article.
			</p>

			<h3>Developer and creator</h3>
			<p>
				The current official Steam app listing identifies <strong>lemorion_1224</strong> as the developer and publisher.
				For practical player use, treat "developer," "creator," and "who made it" searches as the same answer unless a future
				official page separates studio, publisher, or contributor credits more granularly.
			</p>
			<div class="guide-table-wrap">
				<table class="guide-table">
					<thead><tr><th>Question</th><th>Current answer</th><th>Patch-sensitive note</th></tr></thead>
					<tbody>
						<tr><td>Developer</td><td>lemorion_1224</td><td>Check the current Steam app page if credits are updated.</td></tr>
						<tr><td>Publisher</td><td>lemorion_1224</td><td>Same listed entity at the time of this review.</td></tr>
						<tr><td>Release platform</td><td>Steam / Windows</td><td>Do not assume console, mobile, or Roblox versions from search snippets.</td></tr>
						<tr><td>Core genre</td><td>Casual multiplayer hide-and-seek</td><td>Official categories include multiplayer, PvP, Online PvP, and Steam Workshop.</td></tr>
					</tbody>
				</table>
			</div>

			${guideBodyBannerHtml}

			<h2>Name and character reference</h2>
			<h3>Meaning and pronunciation</h3>
			<p>
				"Meccha" or "mechcha" is commonly used as a Japanese casual intensifier: <strong>very</strong>, <strong>super</strong>, or
				<strong>a lot</strong>. In this title, the practical reading is "very chameleon" or "super chameleon-like," which fits the
				gameplay loop: paint the body, reduce the human outline, and blend into the stage.
			</p>
			<div class="guide-table-wrap">
				<table class="guide-table">
					<thead><tr><th>Term</th><th>Plain reading</th><th>Player note</th></tr></thead>
					<tbody>
						<tr><td>Meccha / Mechcha</td><td>Very, super, a lot</td><td>The official store text also uses "Mechcha" in feature headings.</td></tr>
						<tr><td>Chameleon</td><td>Camouflage animal reference</td><td>The mechanic is mimicry through paint, pose, and placement.</td></tr>
						<tr><td>Pronunciation</td><td>MEH-cha kuh-MEE-lee-un</td><td>Say the first word like two quick beats, not "mecha" as in giant robot.</td></tr>
					</tbody>
				</table>
			</div>
			<p>
				If you are making a video title, use the exact game spelling <strong>MECCHA CHAMELEON</strong>. That avoids confusion with "mecha,"
				"mech," or unrelated chameleon games.
			</p>

			<h3>Character reference</h3>
			<p>
				The base character concept is functional: Hiders start as visible white bodies, then use paint, material finish, pose, and placement
				to fit the map. Seekers read the room and tag suspects. Later updates and cosmetics can add character references, but the important
				gameplay categories are still role-first.
			</p>
			<div class="guide-table-wrap">
				<table class="guide-table">
					<thead><tr><th>Character or role</th><th>What matters</th><th>Where to go next</th></tr></thead>
					<tbody>
						<tr><td>Hider</td><td>Spot, pose, paint, then freeze</td><td><a href="/guides/hider-camouflage-masterclass">Hider camouflage masterclass</a></td></tr>
						<tr><td>Seeker</td><td>Sightline sweep, scale check, valid tag</td><td><a href="/guides/meccha-chameleon-how-to-play">Rules and mechanics</a></td></tr>
						<tr><td>Cube and patch characters</td><td>Version-specific character availability</td><td><a href="/updates">Patch notes archive</a></td></tr>
						<tr><td>Workshop characters or lookalikes</td><td>Not core identity unless confirmed in-game</td><td><a href="/guides/meccha-chameleon-roblox-clones-similar-games">Roblox and clone checks</a></td></tr>
					</tbody>
				</table>
			</div>

			${guideBodyBannerHtml}

			<h2>Reference FAQ</h2>
			<div class="guide-reference">
				<div class="guide-reference-item"><span class="guide-reference-key">Who made MECCHA CHAMELEON?</span><span class="guide-reference-value">The current Steam listing names lemorion_1224 as developer and publisher.</span></div>
				<div class="guide-reference-item"><span class="guide-reference-key">What does MECCHA mean?</span><span class="guide-reference-value">It works as a casual "very / super" intensifier; the game title points at extreme chameleon-style camouflage.</span></div>
				<div class="guide-reference-item"><span class="guide-reference-key">How do you pronounce it?</span><span class="guide-reference-value">Use MEH-cha kuh-MEE-lee-un. Keep the official spelling in titles and captions.</span></div>
			</div>
		</div>
		`,
	},
	{
		id: 8,
		title: 'MECCHA CHAMELEON Roblox and Clone Search Guide',
		h1: 'MECCHA CHAMELEON Roblox, Clones, and Similar Games Guide',
		description:
			'Clarify MECCHA CHAMELEON Roblox, clone, Minecraft, Valorant, Batman, and Spider-Man search confusion without unsafe downloads.',
		publishDate: '2026-07-20',
		imageUrl: robloxClonesGuideImage,
		imageAlt: 'MECCHA CHAMELEON Roblox clones and similar games disambiguation guide with official game scene',
		addressBar: 'meccha-chameleon-roblox-clones-similar-games',
		tag: ['Roblox', 'Clones', 'Similar Games', 'Disambiguation', 'Safety', 'Steam'],
		seo: {
			title: 'MECCHA CHAMELEON Roblox and Clone Search Guide',
			description:
				'Clarify MECCHA CHAMELEON Roblox, clone, Minecraft, Valorant, Batman, and Spider-Man search confusion without unsafe downloads.',
			keywords: 'MECCHA CHAMELEON Roblox, clones, similar games, Minecraft, Valorant',
		},
		detailsHtml: `
		<div class="guide-content">
			<div class="guide-summary">
				<p class="guide-summary-label">Fast answer</p>
				<p>
					MECCHA CHAMELEON is currently best treated as the Steam/Windows hide-and-seek game by lemorion_1224.
					Roblox, Minecraft, Valorant, Batman, and Spider-Man searches are usually search collisions, clones, or unrelated
					pop-culture wording. Do not install off-site "MECCHA CHAMELEON free" builds, executables, or browser mirrors.
				</p>
			</div>

			<figure class="guide-media">
				<img src="${robloxClonesGuideImage}" alt="MECCHA CHAMELEON Roblox clones similar games and unofficial version safety guide" title="MECCHA CHAMELEON Roblox clones and similar games guide" loading="lazy" />
				<figcaption>Clone checks are boring on purpose: verify the platform, verify the creator, then avoid random downloads.</figcaption>
			</figure>

			<h2>Roblox and clone confusion</h2>
			<h3>Roblox variants</h3>
			<p>
				There is no official Roblox version confirmed by the current Steam-facing game identity. A Roblox search result may still exist,
				but that does not make it the Steam game, the same developer, or a safe account target. Treat it as an unrelated experience unless
				the official developer explicitly points to it.
			</p>
			<div class="guide-table-wrap">
				<table class="guide-table">
					<thead><tr><th>Search result type</th><th>How to read it</th><th>Safe action</th></tr></thead>
					<tbody>
						<tr><td>"MECCHA CHAMELEON on Roblox"</td><td>Likely unofficial or unrelated unless credited by the developer</td><td>Do not log in or spend currency because of the name alone.</td></tr>
						<tr><td>Paint hide-and-seek Roblox game</td><td>Similar premise, not necessarily the same game</td><td>Judge it as a separate Roblox experience.</td></tr>
						<tr><td>Free MECCHA CHAMELEON download</td><td>High-risk wording</td><td>Use the official Steam page instead.</td></tr>
						<tr><td>Browser clone or iframe</td><td>May be a separate practice toy</td><td>Use this site's <a href="/play-game">browser practice</a> only as a warm-up, not the Steam game.</td></tr>
					</tbody>
				</table>
			</div>

			<h3>Clones and similar-game searches</h3>
			<p>
				Clone demand usually means one of two things: the player wants a free alternative, or they saw a short clip and only remembers
				"paint hide and seek." The useful answer is not a clone list. The useful answer is a safety filter.
			</p>
			<ol class="guide-steps">
				<li><strong>Check the platform.</strong> MECCHA CHAMELEON's official listing is on Steam for Windows.</li>
				<li><strong>Check the creator name.</strong> The current Steam listing names lemorion_1224.</li>
				<li><strong>Check the mechanics.</strong> The real loop is Hider body painting, pose, Seeker tagging, public/private lobbies, and Workshop support.</li>
				<li><strong>Reject off-site installers.</strong> Random "clone" downloads are not needed for map notes, practice, or lobby setup.</li>
				<li><strong>Use separate-game language.</strong> If it is on Roblox or Minecraft, call it inspired or similar, not official.</li>
			</ol>

			${guideBodyBannerHtml}

			<h2>Pop-culture and map variants</h2>
			<h3>Batman and Spider-Man variants</h3>
			<p>
				Batman and Spider-Man searches are most likely character-skin or pop-culture collisions, not core MECCHA CHAMELEON content.
				Unless a current patch note or official Workshop item proves otherwise, do not treat those searches as confirmed characters.
			</p>
			<div class="guide-table-wrap">
				<table class="guide-table">
					<thead><tr><th>Variant search</th><th>Current classification</th><th>What to verify</th></tr></thead>
					<tbody>
						<tr><td>Batman MECCHA CHAMELEON</td><td>INFERRED: pop-culture or skin confusion</td><td>Official patch notes or original Workshop item.</td></tr>
						<tr><td>Spider-Man MECCHA CHAMELEON</td><td>INFERRED: pop-culture or skin confusion</td><td>Official patch notes or original Workshop item.</td></tr>
						<tr><td>Minecraft MECCHA CHAMELEON</td><td>Separate sandbox/search collision</td><td>Whether it is a Minecraft map/mod, not the Steam game.</td></tr>
						<tr><td>Roblox MECCHA CHAMELEON</td><td>Separate platform/search collision</td><td>Developer credit and official link trail.</td></tr>
					</tbody>
				</table>
			</div>
			<p>
				If you want legitimate custom content, use the <a href="/guides/meccha-chameleon-maps-custom-maps-workshop">maps and Workshop guide</a>.
				Workshop items still need basic creator and download checks, but at least they live inside the Steam flow.
			</p>

			<h3>Valorant map confusion</h3>
			<p>
				"Valorant map" is a different search lane. Valorant map callouts, agent angles, and tactical shooter layouts do not map cleanly
				to MECCHA CHAMELEON's paint-and-hide logic. If someone uses that phrase, they are probably mixing game names, looking for a
				custom map, or asking for a hide-and-seek layout with shooter-style sightlines.
			</p>
			<div class="guide-callout">
				<p><strong>Route rule:</strong> for MECCHA CHAMELEON, evaluate maps by prop scale, sightlines, reverse angles, and paintable surfaces. Do not import Valorant callout logic blindly.</p>
			</div>

			${guideBodyBannerHtml}

			<h2>Safe alternatives and verification</h2>
			<p>
				If the goal is to practice before buying or hosting, use low-risk alternatives only for mechanics practice: color matching, stillness, and scene reading.
				Then return to the real game for lobbies, Workshop maps, role rules, and updates.
			</p>
			<div class="guide-table-wrap">
				<table class="guide-table">
					<thead><tr><th>Need</th><th>Safe path</th><th>Avoid</th></tr></thead>
					<tbody>
						<tr><td>Practice paint logic</td><td><a href="/camouflage-simulator">Camouflage Simulator</a></td><td>Injected auto-paint tools or client mods.</td></tr>
						<tr><td>Warm up in browser</td><td><a href="/play-game">Browser Practice</a></td><td>Calling a third-party warm-up the official game.</td></tr>
						<tr><td>Find custom stages</td><td><a href="/workshop">Workshop hub</a></td><td>Off-site executable map packs.</td></tr>
						<tr><td>Play with friends</td><td><a href="/online">Online multiplayer guide</a></td><td>Unofficial lobbies that ask for account credentials.</td></tr>
					</tbody>
				</table>
			</div>

			<h2>Disambiguation FAQ</h2>
			<div class="guide-reference">
				<div class="guide-reference-item"><span class="guide-reference-key">Is MECCHA CHAMELEON on Roblox?</span><span class="guide-reference-value">No official Roblox version is confirmed by the current Steam-facing identity. Treat Roblox results as separate unless the developer links them.</span></div>
				<div class="guide-reference-item"><span class="guide-reference-key">Are there clones?</span><span class="guide-reference-value">There may be similar paint-hide games or search collisions. Do not install random clone downloads or off-site executables.</span></div>
				<div class="guide-reference-item"><span class="guide-reference-key">Is it related to Batman or Spider-Man?</span><span class="guide-reference-value">Not as a confirmed core game fact. Treat those as pop-culture or skin-search variants unless a current official update says otherwise.</span></div>
			</div>
		</div>
		`,
	},
];
