// Strategy guide entries written from a player-practice perspective.
/**
 * @typedef {Object} GuideEntry
 * @property {number} id
 * @property {string} title
 * @property {string} description
 * @property {string} publishDate
 * @property {string} imageUrl
 * @property {string} imageAlt
 * @property {string} addressBar
 * @property {string[]} tag
 * @property {{ title: string, description: string, keywords: string }} seo
 * @property {string} detailsHtml
 */

const guideCardImage = '/images/guides/hider-masterclass.webp';
const multiplayerGuideImage = '/images/guides/hider-masterclass.webp';
const mapsGuideImage = '/images/workshop/meeting-room/card.jpg';
const guideBodyBannerHtml = `
			<aside class="affiliate-ad-slot" data-affiliate-ad="banner" aria-label="Advertisement">
				<span class="affiliate-ad-slot__label">Advertisement</span>
				<div class="affiliate-ad-slot__frame" data-affiliate-ad-frame></div>
			</aside>
`;

/** @type {GuideEntry[]} */
export const guides = [
	{
		id: 2,
		title: 'MECCHA CHAMELEON Multiplayer Guide: Friends, Player Count, and Crossplay',
		description:
			'MECCHA CHAMELEON multiplayer guide for 2-10 player lobbies, friend invites, random rooms, crossplay status, and quick fixes when joining friends fails.',
		publishDate: '2026-06-30',
		imageUrl: multiplayerGuideImage,
		imageAlt: 'MECCHA CHAMELEON multiplayer lobby setup for friends and 2-10 player matches',
		addressBar: 'meccha-chameleon-multiplayer-friends-guide',
		tag: [
			'Multiplayer',
			'Friends',
			'Player Count',
			'Crossplay',
			'Lobby',
			'Randoms',
			'Troubleshooting',
			'Steam',
			'v1.9.0',
		],
		seo: {
			title: 'MECCHA CHAMELEON Multiplayer & Crossplay Guide',
			description:
				'Check MECCHA CHAMELEON player count, friend lobbies, crossplay status, randoms, and quick fixes when invites fail.',
			keywords:
				'MECCHA CHAMELEON multiplayer, player count, max players, crossplay, join friends',
		},
		detailsHtml: `
		<div class="guide-content">
			<div class="guide-summary">
				<p class="guide-summary-label">Fast answer</p>
				<p>
					<strong>MECCHA CHAMELEON supports 2-10 player online lobbies.</strong> Use a private Steam lobby for
					friends, a public/non-private room when you want random players, and treat crossplay as
					<strong>unconfirmed</strong> unless the current game build explicitly shows matching platform support.
					Most failed friend sessions come from version mismatch, privacy filters, or untested Workshop maps.
				</p>
			</div>

			<figure class="guide-media">
				<img src="${multiplayerGuideImage}" alt="MECCHA CHAMELEON how to play with friends in a 2-10 player lobby" title="MECCHA CHAMELEON friend lobby and player count setup" loading="lazy" />
				<figcaption>MECCHA CHAMELEON friend lobbies work best when the host locks version, map, mode, and privacy before invites go out.</figcaption>
			</figure>

			<h2>How many players can play MECCHA CHAMELEON</h2>
			<h3>Current player-count intent to answer first</h3>
			<p>
				The practical answer is <strong>2-10 players</strong>. If you are searching "MECCHA CHAMELEON how many
				players" or "MECCHA CHAMELEON max players", plan your room around that range, then confirm the cap inside
				the host menu because the host controls mode and lobby settings.
			</p>
			<div class="guide-table-wrap">
				<table class="guide-table">
					<thead>
						<tr><th>Question</th><th>Answer to use</th><th>Check before launch</th></tr>
					</thead>
					<tbody>
						<tr><td>How many people can play?</td><td>2-10 players</td><td>Lobby player limit and privacy</td></tr>
						<tr><td>Can strangers join?</td><td>Yes, when the room is not private</td><td>Server visibility and password rules</td></tr>
						<tr><td>Is it friends-only?</td><td>No, but private lobbies are the cleanest friend setup</td><td>Steam invite or room code flow</td></tr>
						<tr><td>Is crossplay confirmed?</td><td>Not confirmed in the current public Steam-focused setup</td><td>Use same platform/build unless the game says otherwise</td></tr>
					</tbody>
				</table>
			</div>

			<h3>What player count changes for match strategy</h3>
			<p>
				Small rooms punish obvious Hider mistakes because one Seeker has time to inspect every prop. Larger rooms
				raise noise: voice, footsteps, found-player callouts, and duplicate hiding spots all matter more. For first
				sessions, stay below the cap until everyone understands the Hider/Seeker loop.
			</p>
			<div class="guide-table-wrap">
				<table class="guide-table">
					<thead>
						<tr><th>Group size</th><th>Best use</th><th>Risk</th></tr>
					</thead>
					<tbody>
						<tr><td>2-4</td><td>Learning controls, maps, and paint discipline</td><td>One bad route gets checked every round</td></tr>
						<tr><td>5-7</td><td>Balanced friend rooms with enough Hider variety</td><td>Voice chatter can leak positions</td></tr>
						<tr><td>8-10</td><td>Party rooms, stream rooms, Infection-style chaos</td><td>Setup failure and Workshop mismatch become more likely</td></tr>
					</tbody>
				</table>
			</div>

			<h2>How to play with friends</h2>
			<h3>Joining friends from the lobby</h3>
			<ol class="guide-steps">
				<li><strong>Update first.</strong> Everyone restarts Steam and launches the same MECCHA CHAMELEON build.</li>
				<li><strong>Host a private room.</strong> Pick mode, map, privacy, and player limit before sending invites.</li>
				<li><strong>Invite through Steam or share the room details.</strong> Send one clean message with host name, password if used, and map.</li>
				<li><strong>Start on an official map.</strong> Use <a href="/wiki#wiki-maps">official map notes</a> for the first round; add Workshop maps after the room is stable.</li>
				<li><strong>Run one short test.</strong> Confirm loading, voice, and role rotation before a full session.</li>
			</ol>

			<h3>What to check before inviting friends</h3>
			<p>
				If the room depends on a custom stage, every player must subscribe to the same item first. For first-night
				sessions, use the <a href="/online">Online guide</a> and keep the first round boring: one host, one official
				map, one ruleset.
			</p>
			<div class="guide-callout">
				<p><strong>Do not debug five variables at once.</strong> If friends cannot join, remove Workshop maps, public filters, extra house rules, and unusual modes until the base room works.</p>
			</div>

			${guideBodyBannerHtml}

			<h2>Crossplay and random players</h2>
			<h3>Is MECCHA CHAMELEON crossplay?</h3>
			<p>
				Crossplay is <strong>not confirmed</strong> from the current Steam-focused public setup. Treat multiplayer as
				same-platform Steam play unless the live client or a current update note explicitly says cross-platform
				invites work. If a friend is on another storefront or device, verify in the lobby before promising a session.
			</p>

			<h3>Can you play with randoms?</h3>
			<p>
				Yes, use a non-private/public room when you want random players. Public rooms are good for fast games, but
				they are worse for route testing because strangers may not follow your practice rules. Use private rooms for
				drills from the <a href="/guides/hider-camouflage-masterclass">Hider Camouflage Masterclass</a>.
			</p>

			<h2>Why joining friends fails</h2>
			<h3>Cannot join friend lobby</h3>
			<div class="guide-table-wrap">
				<table class="guide-table">
					<thead>
						<tr><th>Symptom</th><th>Likely cause</th><th>Fix</th></tr>
					</thead>
					<tbody>
						<tr><td>Room does not appear</td><td>Privacy filter, region/server list delay, or wrong host details</td><td>Recreate the room and send one fresh invite</td></tr>
						<tr><td>Invite opens but fails</td><td>Version mismatch</td><td>Everyone restarts Steam, updates, then rejoins</td></tr>
						<tr><td>Custom map room fails</td><td>One player lacks the Workshop item</td><td>Subscribe, finish download, restart, then test privately</td></tr>
						<tr><td>Large room stutters</td><td>Host network or too many setup variables</td><td>Lower player cap and return to an official map</td></tr>
					</tbody>
				</table>
			</div>

			${guideBodyBannerHtml}

			<h3>Friend invite appears but does not connect</h3>
			<ol class="guide-steps guide-steps--compact">
				<li>Confirm both players are online in Steam, not invisible/offline.</li>
				<li>Confirm the host is still in the lobby, not already loading into a match.</li>
				<li>Switch from Workshop to an official map from <a href="/wiki#wiki-maps">the map list</a>.</li>
				<li>Make a new private lobby with a shorter name and no password, then invite again.</li>
				<li>If the issue started after a patch, check <a href="/updates">updates</a> before changing local files.</li>
			</ol>

			<h2>Multiplayer FAQ</h2>
			<div class="guide-reference">
				<div class="guide-reference-item">
					<span class="guide-reference-key">How many players?</span>
					<span class="guide-reference-value">2-10 players.</span>
				</div>
				<div class="guide-reference-item">
					<span class="guide-reference-key">Friends?</span>
					<span class="guide-reference-value">Yes. Host a private lobby and invite through Steam or room details.</span>
				</div>
				<div class="guide-reference-item">
					<span class="guide-reference-key">Crossplay?</span>
					<span class="guide-reference-value">Unconfirmed. Use same-platform Steam play unless the current build states otherwise.</span>
				</div>
			</div>
		</div>
		`,
	},
	{
		id: 3,
		title: 'MECCHA CHAMELEON Maps Guide: Custom Maps, Workshop, and Best Hiding Spots',
		description:
			'MECCHA CHAMELEON maps guide for official stages, custom Workshop maps, safe map downloads, map-maker intent, and hiding spot rules that survive patches.',
		publishDate: '2026-06-30',
		imageUrl: mapsGuideImage,
		imageAlt: 'MECCHA CHAMELEON custom maps and Workshop hiding spots guide',
		addressBar: 'meccha-chameleon-maps-custom-maps-workshop',
		tag: [
			'Maps',
			'Custom Maps',
			'Workshop',
			'Hiding Spots',
			'Map Maker',
			'Downloads',
			'Scene Reading',
			'v1.9.0',
		],
		seo: {
			title: 'MECCHA CHAMELEON Maps, Workshop & Hiding Spots',
			description:
				'Use MECCHA CHAMELEON maps, custom maps, Workshop checks, safe downloads, and hiding spot rules without chasing stale video spots.',
			keywords:
				'MECCHA CHAMELEON maps, custom maps, workshop, best hiding spots, map maker',
		},
		detailsHtml: `
		<div class="guide-content">
			<div class="guide-summary">
				<p class="guide-summary-label">Fast answer</p>
				<p>
					MECCHA CHAMELEON has official maps plus Steam Workshop custom maps. For hiding spots, do not chase a
					single viral coordinate. Strong spots share the same traits: controlled sightline, correct object scale,
					local Spoid colour, and at least one reverse-angle check before the hunt starts.
				</p>
			</div>

			<figure class="guide-media">
				<img src="${mapsGuideImage}" alt="MECCHA CHAMELEON custom maps Workshop hiding spots preview" title="MECCHA CHAMELEON Workshop maps and hiding spot planning" loading="lazy" />
				<figcaption>Workshop maps are useful only after every player has the same item installed and the host has tested the route in a private lobby.</figcaption>
			</figure>

			<h2>MECCHA CHAMELEON map types</h2>
			<h3>Official maps versus custom maps</h3>
			<p>
				Use official maps when you need stable practice and predictable route notes. Use custom Workshop maps when
				the group wants fresh layouts, but expect more setup risk: download state, version mismatch, and uneven
				sightline balance. The <a href="/wiki#wiki-maps">official map notes</a> are the baseline; the
				<a href="/workshop">Workshop map hub</a> is the custom-map lane.
			</p>
			<div class="guide-table-wrap">
				<table class="guide-table">
					<thead>
						<tr><th>Map type</th><th>Best use</th><th>Main risk</th></tr>
					</thead>
					<tbody>
						<tr><td>Official maps</td><td>Learning routes, roles, and camouflage fundamentals</td><td>Popular spots get pre-checked</td></tr>
						<tr><td>Workshop maps</td><td>New room layouts, party sessions, creator lobbies</td><td>Everyone must subscribe to the same item</td></tr>
						<tr><td>Practice backgrounds</td><td>Paint and silhouette drills before live play</td><td>Does not replace real sightline checks</td></tr>
					</tbody>
				</table>
			</div>

			<h3>How many maps are available</h3>
			<p>
				The site currently tracks seven official map-reading pages plus selected Workshop spotlights. That number
				can grow when the game adds stages or the Workshop produces useful custom maps. If you need a stable first
				route, start with <a href="/wiki/maps/osaka">Osaka</a> for compact checks or
				<a href="/wiki/maps/penguin-hotel">Penguin Hotel</a> for larger indoor sightlines.
			</p>

			<h2>Custom maps and Workshop</h2>
			<h3>Where Workshop maps fit</h3>
			<p>
				Workshop maps are best for friend groups that already know the base game. New players should learn an
				official map first; otherwise every mistake gets blamed on the custom stage. For hosted sessions, share the
				Workshop link before the lobby opens and confirm downloads before readying up.
			</p>
			<ol class="guide-steps">
				<li><strong>Pick the item.</strong> Use the original Steam Workshop item, not a repost or random download mirror.</li>
				<li><strong>Subscribe early.</strong> Give every player time to download before the room starts.</li>
				<li><strong>Private-test once.</strong> Host a short match and make sure all players load the same layout.</li>
				<li><strong>Then go public.</strong> Only open the room to randoms after the map proves stable.</li>
			</ol>

			<h3>Map download safety checks</h3>
			<p>
				Use Steam Workshop subscription for MECCHA CHAMELEON maps. Avoid "free download", "crack", or off-site map
				pack pages unless the developer or original creator points there. This is not just security hygiene:
				mismatched files waste lobby time and make bug reports useless.
			</p>
			<div class="guide-callout">
				<p><strong>Safe rule:</strong> if the host cannot send the original Workshop item link, do not ask the group to install it.</p>
			</div>

			${guideBodyBannerHtml}

			<h2>Best hiding spots</h2>
			<h3>What makes a hiding spot strong</h3>
			<p>
				A good spot is not "the place a video used." A good spot passes four checks: object scale, main approach
				sightline, reverse angle, and local colour. If one check fails, Seekers do not need perfect map knowledge to
				find you.
			</p>
			<div class="guide-table-wrap">
				<table class="guide-table">
					<thead>
						<tr><th>Check</th><th>Hider question</th><th>Seeker tell</th></tr>
					</thead>
					<tbody>
						<tr><td>Scale</td><td>Does my pose match nearby prop height?</td><td>One object is human-sized in a non-human row</td></tr>
						<tr><td>Sightline</td><td>Can the main route see my outline first?</td><td>The silhouette breaks before colour matters</td></tr>
						<tr><td>Reverse angle</td><td>Does the hide survive from the opposite side?</td><td>A side profile exposes limbs or depth</td></tr>
						<tr><td>Local colour</td><td>Did I Spoid from the same surface beside me?</td><td>Correct hue, wrong light value</td></tr>
					</tbody>
				</table>
			</div>
			<p>
				For the full camouflage workflow, use <a href="/guides/hider-camouflage-masterclass">Spot -> Pose -> Paint</a>
				and rehearse paint control in the <a href="/camouflage-simulator">Camouflage Simulator</a>.
			</p>

			<h3>When a popular spot becomes risky</h3>
			<p>
				Popular hiding spots decay fast. Once a route shows up in repeated clips, Seekers pre-check it. A spot also
				gets weaker after balance patches, map expansions, or collision fixes. Treat old clips as route ideas, then
				retest them against the current <a href="/updates">patch archive</a>.
			</p>

			<h2>Map maker and user-created routes</h2>
			<h3>How to make map content useful</h3>
			<p>
				If you are building or reviewing a custom map, useful content answers player actions: where Hiders can learn
				scale, where Seekers should sweep first, and which props create false positives. A map with a hundred props
				but no readable lanes is noisy, not deep.
			</p>
			<div class="guide-table-wrap">
				<table class="guide-table">
					<thead>
						<tr><th>Map-maker check</th><th>Why it matters</th></tr>
					</thead>
					<tbody>
						<tr><td>Clear approach lanes</td><td>Seekers need readable sweeps, not blind guessing</td></tr>
						<tr><td>Prop scale consistency</td><td>Hiders need objects they can plausibly match</td></tr>
						<tr><td>Shadow variety</td><td>Spoid play needs local light and dark choices</td></tr>
						<tr><td>Spawn-to-hotspot timing</td><td>Prep phase should allow route choice, pose, and paint</td></tr>
					</tbody>
				</table>
			</div>

			${guideBodyBannerHtml}

			<h3>When to split map maker into its own page</h3>
			<p>
				"How to make MECCHA CHAMELEON maps" deserves its own page only when there is enough confirmed editor,
				Workshop upload, and validation detail to avoid guessing. For now, keep map-maker notes tied to
				Workshop-readiness and user-created route quality instead of pretending we have a full editor manual.
			</p>

			<h2>Maps FAQ</h2>
			<div class="guide-reference">
				<div class="guide-reference-item">
					<span class="guide-reference-key">Custom maps?</span>
					<span class="guide-reference-value">Yes. Use Steam Workshop items and test them privately before a public lobby.</span>
				</div>
				<div class="guide-reference-item">
					<span class="guide-reference-key">Best spots?</span>
					<span class="guide-reference-value">Pick spots that pass scale, sightline, reverse-angle, and local-colour checks.</span>
				</div>
				<div class="guide-reference-item">
					<span class="guide-reference-key">Downloads?</span>
					<span class="guide-reference-value">Use original Workshop links; avoid off-site map packs and unsafe download pages.</span>
				</div>
			</div>
		</div>
		`,
	},
	{
		id: 1,
		title: 'MECCHA CHAMELEON Hider Camouflage Masterclass — Spot, Pose, Paint',
		description:
			'Hider camouflage workflow for MECCHA CHAMELEON: Spot → Pose → Paint, two-tone Spoid sampling, prep timing, mode tips, and three private-lobby drills.',
		publishDate: '2026-06-24',
		imageUrl: guideCardImage,
		imageAlt: 'MECCHA CHAMELEON Hider camouflage practice on a Steam lobby stage',
		addressBar: 'hider-camouflage-masterclass',
		tag: [
			'Hider',
			'Camouflage',
			'Spoid',
			'Paint',
			'Pose',
			'Scene Reading',
			'Ranking',
			'Normal Mode',
			'Infection Mode',
			'Double Mode',
			'Strategy',
			'v1.8.0',
		],
		seo: {
			title: 'Hider Camouflage Masterclass — Spot, Pose, Paint | MECCHA CHAMELEON',
			description:
				'MECCHA CHAMELEON Hider guide: Spot → Pose → Paint, Spoid two-tone workflow, prep timing, mode tips, and private-lobby drills for better camouflage in Steam lobbies.',
			keywords:
				'meccha chameleon hider guide, camouflage masterclass, spoid paint workflow, pose selection, scene reading, ranking meta, hide and seek strategy, two-tone paint, infection mode hider, double mode, paint tips',
		},
		detailsHtml: `
		<div class="guide-content">
			<div class="guide-summary">
				<p class="guide-summary-label">At a glance</p>
				<p>
					Strong Hider rounds follow one order: <strong>Spot → Pose → Paint</strong>. Commit to a backdrop in the
					first ~15 seconds, set a silhouette that fits the scene, then Spoid local light and shadow before the hunt
					starts. Seekers usually spot <strong>wrong scale and outline</strong> before they care about exact hue.
				</p>
			</div>

			<h2>The Spot → Pose → Paint framework</h2>
			<ol class="guide-steps">
				<li>
					<strong>Spot — commit early.</strong> Pick one backdrop: wall edge, floor seam, low furniture, or pattern run.
					Stop roaming; wandering eats pose and paint time.
				</li>
				<li>
					<strong>Pose — match the geometry.</strong> Press <kbd>R</kbd> and curl, crouch, or flatten so the outline
					reads correctly from the main approach angle.
				</li>
				<li>
					<strong>Paint — broad planes first.</strong> Press <kbd>F</kbd>, Spoid the lit tone beside your pose, fill
					large areas, then Spoid a shadow tone from the same surface.
				</li>
			</ol>
			<div class="guide-callout">
				<p><strong>Golden rule:</strong> fix the silhouette first. Extra brush detail rarely saves a standing human outline.</p>
			</div>

			<h2>Backdrop quick picks</h2>
			<div class="guide-table-wrap">
				<table class="guide-table">
					<thead>
						<tr><th>Backdrop</th><th>Pose habit</th><th>Common tell</th></tr>
					</thead>
					<tbody>
						<tr>
							<td>Flat wall</td>
							<td>Flatten or side-align; cut standing height</td>
							<td>Vertical column in a flat field</td>
						</tr>
						<tr>
							<td>Low furniture</td>
							<td>Crouch until the head stays below the prop lip</td>
							<td>Head or elbow above the furniture line</td>
						</tr>
						<tr>
							<td>Repeating pattern</td>
							<td>Align with one repeat unit; two-tone only</td>
							<td>Extra stripe, tile, or gap in the rhythm</td>
						</tr>
						<tr>
							<td>Dark industrial plane</td>
							<td>Low curl along pipes or seams</td>
							<td>Flat blob with a crisp human edge</td>
						</tr>
					</tbody>
				</table>
			</div>
			<p>
				Stage-specific prompts: <a href="/wiki#wiki-maps">map reading notes</a>. Test one idea per round — not memorised coordinates.
			</p>

			<h2>Spoid: two-tone local paint</h2>
			<ol class="guide-steps guide-steps--compact">
				<li><strong>Sample lit tone</strong> from the surface beside your pose — same material, same distance.</li>
				<li><strong>Fill large planes</strong> on torso and limbs before touching edges.</li>
				<li><strong>Sample shadow tone</strong> from the dark side of that same surface.</li>
				<li><strong>Stop early</strong> — one restrained shadow pass beats ten noisy stripes.</li>
			</ol>
			<p>
				Prep shortcut: 0–5s pick a spot, 5–10s set pose, 10–20s two-tone paint, then freeze. Running low on time?
				One wall, one pose, two Spoid samples still beats an unfinished hide. Practice silhouettes in the
				<a href="/camouflage-simulator">Camouflage Simulator</a> before a <a href="/online">live lobby</a>.
			</p>

			<h2>Modes and post-round review</h2>
			<div class="guide-table-wrap">
				<table class="guide-table">
					<thead>
						<tr><th>Mode</th><th>Hider priority</th></tr>
					</thead>
					<tbody>
						<tr><td>Normal</td><td>Learn prep timing; review the results screen every round</td></tr>
						<tr><td>Infection</td><td>Stay still as hunter count rises; avoid high-traffic lanes</td></tr>
						<tr><td>Double</td><td>Pick spots that survive a reverse approach angle</td></tr>
					</tbody>
				</table>
			</div>
			<p>
				Since v1.2.0, ranking weighs distance and time in a Hunter’s line of sight. After each round, note whether
				scale, outline, or colour failed first — then change one variable next round. If a clip stops working, check
				<a href="/updates">patch notes</a> before blaming your paint.
			</p>

			<h2>Three <a href="/online">private-lobby</a> drills</h2>
			<ol class="guide-steps guide-steps--compact">
				<li><strong>Wall-only:</strong> flat wall, flatten pose, two Spoid samples — judge the door sightline only.</li>
				<li><strong>Reverse-angle:</strong> walk the main Seeker route backward in your head; fix pose before colour.</li>
				<li><strong>Stillness:</strong> no adjustments once the hunt starts — learn whether motion was the real tell.</li>
			</ol>

			<h2>Common mistakes</h2>
			<div class="guide-table-wrap">
				<table class="guide-table">
					<thead>
						<tr><th>Mistake</th><th>Fix</th></tr>
					</thead>
					<tbody>
						<tr><td>Paint before pose</td><td>Set pose first; repaint large planes only</td></tr>
						<tr><td>Single flat colour</td><td>Lit + shadow Spoid on the same material</td></tr>
						<tr><td>Copied viral clip</td><td>Borrow the idea, not the coordinates</td></tr>
						<tr><td>Moving during hunt</td><td>Freeze when hunt audio starts</td></tr>
					</tbody>
				</table>
			</div>

			<h2>What to read next</h2>
			<div class="guide-reference">
				<div class="guide-reference-item">
					<span class="guide-reference-key">Basics</span>
					<span class="guide-reference-value"><a href="/beginners-hub">Beginner's Hub</a></span>
				</div>
				<div class="guide-reference-item">
					<span class="guide-reference-key">Maps</span>
					<span class="guide-reference-value"><a href="/wiki#wiki-maps">Map reading notes</a></span>
				</div>
				<div class="guide-reference-item">
					<span class="guide-reference-key">Practice</span>
					<span class="guide-reference-value"><a href="/camouflage-simulator">Camouflage Simulator</a></span>
				</div>
			</div>
		</div>
		`,
	},
	
];
