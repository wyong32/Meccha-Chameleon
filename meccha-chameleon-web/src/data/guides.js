// Strategy guide entries written from a player-practice perspective.
/**
 * @typedef {Object} GuideEntry
 * @property {number} id
 * @property {string} title
 * @property {string} [h1]
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
const howToPlayPaintImage = '/images/guides/meccha-how-to-play-paint.webp';
const howToPlayCamouflageImage = '/images/guides/meccha-how-to-play-camouflage-check.webp';
const howToPlaySeekerImage = '/images/guides/meccha-how-to-play-seeker-route.webp';
const controlsSteamInputImage = '/images/guides/meccha-controls-steam-input.webp';
const controlsLayoutImage = '/images/guides/meccha-controls-controller-layout.webp';
const controlsTestImage = '/images/guides/meccha-controls-driver-fallback.webp';
const guideBodyBannerHtml = `
			<aside class="affiliate-ad-slot" data-affiliate-ad="banner" aria-label="Advertisement">
				<span class="affiliate-ad-slot__label">Advertisement</span>
				<div class="affiliate-ad-slot__frame" data-affiliate-ad-frame></div>
			</aside>
`;

/** @type {GuideEntry[]} */
export const guides = [
	{
		id: 4,
		title: 'MECCHA CHAMELEON Guide: How to Play, Tips, and First Match Basics',
		description:
			'Learn how to play MECCHA CHAMELEON with the Hider and Seeker objective, paint discipline, pose checks, mode basics, and first-match mistakes to avoid.',
		publishDate: '2026-07-06',
		imageUrl: howToPlayPaintImage,
		imageAlt: 'MECCHA CHAMELEON how to play guide showing Hider paint setup before the search phase',
		addressBar: 'meccha-chameleon-how-to-play',
		tag: [
			'How to Play',
			'Beginner Guide',
			'Hider',
			'Seeker',
			'Paint',
			'Pose',
			'Gameplay',
			'Tips',
			'v1.9.0',
		],
		seo: {
			title: 'MECCHA CHAMELEON How to Play Guide',
			description:
				'Learn how to play MECCHA CHAMELEON with objectives, Hider paint, Seeker checks, pose rules, mode basics, and beginner tips.',
			keywords:
				'MECCHA CHAMELEON how to play, beginner guide, tips, gameplay',
		},
		detailsHtml: `
		<div class="guide-content">
			<div class="guide-summary">
				<p class="guide-summary-label">Fast answer</p>
				<p>
					MECCHA CHAMELEON is a multiplayer hide-and-seek game built around <strong>visual camouflage</strong>.
					Hiders paint and pose themselves into the map before the search starts. Seekers win by finding and
					shooting every Hider before the timer ends. Hiders win if at least one Hider survives. For a first match,
					learn this order: <strong>pick a surface, match the silhouette, paint with local colour, then stop moving</strong>.
				</p>
			</div>

			<figure class="guide-media">
				<img src="${howToPlayPaintImage}" alt="MECCHA CHAMELEON how to play Hider paint setup with colour wheel and roughness controls" title="MECCHA CHAMELEON Hider paint setup before search starts" loading="lazy" />
				<figcaption>Start with the body outline and local colour. A perfect hue does not save a standing human shape.</figcaption>
			</figure>

			<h2>What MECCHA CHAMELEON is</h2>
			<h3>Game concept short answer</h3>
			<p>
				If you are asking "what is MECCHA CHAMELEON", the clean answer is: it is hide-and-seek where the hiding player
				manually paints their body to blend into the stage. The game is not about radar pings or minimap tracking.
				Most finds happen because the Hider has the wrong <strong>shape</strong>, wrong <strong>surface finish</strong>,
				or moves after the search begins.
			</p>

			<h3>Gameplay intent versus guide intent</h3>
			<p>
				The core gameplay loop is simple, but the skill ceiling is not. Hiders need paint control, pose discipline,
				and route reading. Seekers need systematic sweeps and patience. This page covers first-match execution; use
				the <a href="/guides/hider-camouflage-masterclass">Hider Camouflage Masterclass</a> once you want deeper
				Spoid, pose, and scene-reading drills.
			</p>

			<div class="guide-table-wrap">
				<table class="guide-table">
					<thead>
						<tr><th>Role</th><th>Win condition</th><th>First skill to learn</th></tr>
					</thead>
					<tbody>
						<tr><td>Hider</td><td>Survive until the timer ends</td><td>Pose before paint</td></tr>
						<tr><td>Seeker</td><td>Find every Hider before time expires</td><td>Sweep the room edge first</td></tr>
						<tr><td>Host</td><td>Set a stable map, mode, and timer</td><td>Do not start with untested Workshop maps</td></tr>
					</tbody>
				</table>
			</div>

			${guideBodyBannerHtml}

			<h2>How to play your first match</h2>
			<h3>First-match objective</h3>
			<p>
				When the round assigns roles, do not overthink the lobby. If you are a Hider, your job is to become a believable
				part of the room. If you are a Seeker, your job is to test objects that break the room pattern. The match turns
				on three checks: <strong>surface match</strong>, <strong>silhouette match</strong>, and <strong>stillness</strong>.
			</p>

			<ol class="guide-steps">
				<li><strong>Read your role.</strong> Hider prepares; Seeker waits for the search phase.</li>
				<li><strong>As Hider, choose one surface quickly.</strong> A wall, prop cluster, ceiling plane, or shadow lane is enough.</li>
				<li><strong>Set the pose before the paint.</strong> Use a compact pose that matches nearby objects and breaks the human outline.</li>
				<li><strong>Sample local colour.</strong> Use the colour picker on the same surface you are hiding against, then add only the shadow or finish you need.</li>
				<li><strong>Freeze once the search begins.</strong> Late movement gives Seekers a better tell than imperfect paint.</li>
				<li><strong>As Seeker, sweep from edges inward.</strong> Check corners, ceiling lines, prop rows, and surfaces that look slightly off.</li>
			</ol>

			<figure class="guide-media">
				<img src="${howToPlayCamouflageImage}" alt="MECCHA CHAMELEON beginner guide showing a Hider using pose and paint on a high hiding route" title="MECCHA CHAMELEON Hider pose and paint route" loading="lazy" />
				<figcaption>High or ceiling-adjacent spots work only when the body reads like part of the map from the main approach angle.</figcaption>
			</figure>

			<h3>Beginner controls and movement</h3>
			<p>
				For first sessions, keep the control goal narrow: move, crouch, climb, pose, paint, and stop. The on-screen
				prompts expose the important actions, including paint mode, pose, taunt, shadow toggle, and free-camera checks.
				If you are setting up a gamepad, use the dedicated <a href="/guides/meccha-chameleon-controls-settings">controls
				and settings guide</a> instead of remapping keys mid-lobby.
			</p>

			<div class="guide-table-wrap">
				<table class="guide-table">
					<thead>
						<tr><th>Beginner action</th><th>Why it matters</th><th>Bad habit</th></tr>
					</thead>
					<tbody>
						<tr><td>Paint mode</td><td>Matches hue, roughness, and finish</td><td>Using one flat colour for the whole body</td></tr>
						<tr><td>Pose</td><td>Reduces human silhouette</td><td>Standing upright against flat scenery</td></tr>
						<tr><td>Climb</td><td>Opens wall and ceiling routes</td><td>Climbing into a spot that auto-reveals or clips</td></tr>
						<tr><td>Free camera</td><td>Checks how your hide reads from the Seeker angle</td><td>Trusting only your close-up view</td></tr>
						<tr><td>Taunt</td><td>Baits nearby Seekers without exact reveal</td><td>Taunting when your silhouette is already weak</td></tr>
					</tbody>
				</table>
			</div>

			${guideBodyBannerHtml}

			<h2>Beginner tips and mistakes</h2>
			<h3>Early tips that matter</h3>
			<ul class="guide-steps guide-steps--compact">
				<li><strong>Do not rush paint.</strong> One local sample plus one shadow pass beats random full-body noise.</li>
				<li><strong>Match material finish.</strong> The metallic and roughness sliders matter when the nearby surface is glossy or flat.</li>
				<li><strong>Use visual clutter.</strong> Busy walls, prop groups, banners, ceiling beams, and repeated shapes hide mistakes better than clean corners.</li>
				<li><strong>Leave obvious furniture alone.</strong> A beginner who hides as a single chair in an empty route gets checked first.</li>
				<li><strong>Stay quiet in voice chat.</strong> Proximity voice can expose a Hider before the Seeker sees the outline.</li>
			</ul>

			<h3>Common new-player mistakes</h3>
			<p>
				The biggest beginner mistake is painting first and thinking second. Pick the spot, set the pose, then paint.
				The second mistake is staying in a hiding place that the game warns is invalid or too deep inside geometry.
				If a cover warning appears, shift before the search begins instead of gambling the round.
			</p>

			<figure class="guide-media">
				<img src="${howToPlaySeekerImage}" alt="MECCHA CHAMELEON gameplay guide showing mode and map settings for a first match" title="MECCHA CHAMELEON mode and map setup for beginners" loading="lazy" />
				<figcaption>For new groups, start on a stable map and mode before adding custom maps or harder rule changes.</figcaption>
			</figure>

			<h2>Modes to understand first</h2>
			<p>
				Normal play keeps fixed roles. Infection makes caught Hiders become Seekers, which turns late rounds chaotic.
				Double-style play asks everyone to hide and then seek, so reverse-angle checks matter more. For custom map
				selection and Workshop setup, use the <a href="/guides/meccha-chameleon-maps-custom-maps-workshop">maps and
				Workshop guide</a>. For friend-room setup, use the <a href="/guides/meccha-chameleon-multiplayer-friends-guide">multiplayer
				guide</a>.
			</p>

			<h2>Beginner FAQ</h2>
			<div class="guide-reference">
				<div class="guide-reference-item">
					<span class="guide-reference-key">How do you play?</span>
					<span class="guide-reference-value">Hiders paint and pose into the map; Seekers search and shoot suspicious bodies before time expires.</span>
				</div>
				<div class="guide-reference-item">
					<span class="guide-reference-key">Hard for beginners?</span>
					<span class="guide-reference-value">No, if you learn role objective, silhouette, local colour, and stillness before chasing advanced spots.</span>
				</div>
				<div class="guide-reference-item">
					<span class="guide-reference-key">First thing to learn?</span>
					<span class="guide-reference-value">Pose before paint. Wrong shape gets caught faster than wrong shade.</span>
				</div>
			</div>
		</div>
		`,
	},
	{
		id: 5,
		title: 'MECCHA CHAMELEON Settings Guide: Controls, Controller, Shadow, and Metallic Options',
		description:
			'Set up MECCHA CHAMELEON controls, controller support, Steam Input, visibility options, shadow toggle, metallic paint, roughness, and practical fallback fixes.',
		publishDate: '2026-07-06',
		imageUrl: controlsSteamInputImage,
		imageAlt: 'MECCHA CHAMELEON controller guide showing Steam Input controller layout setup',
		addressBar: 'meccha-chameleon-controls-settings',
		tag: [
			'Controls',
			'Controller',
			'Settings',
			'Steam Input',
			'Metallic',
			'Shadow',
			'Visibility',
			'Troubleshooting',
			'v1.9.0',
		],
		seo: {
			title: 'MECCHA CHAMELEON Controls and Settings',
			description:
				'Set up MECCHA CHAMELEON controls, controller support, Steam Input, visibility settings, metallic, shadow, and driver fixes.',
			keywords:
				'MECCHA CHAMELEON controls, controller, best settings, metallic, shadow',
		},
		detailsHtml: `
		<div class="guide-content">
			<div class="guide-summary">
				<p class="guide-summary-label">Fast answer</p>
				<p>
					For keyboard and mouse, learn the role actions first: move, crouch, climb, pose, paint, shadow toggle,
					and free camera. For controller, the most reliable PC path is <strong>Steam Input</strong>: enable the
					right controller type in Steam, open the game controller layout, apply a gamepad or community layout, then
					test inside a private lobby. Metallic and shadow are visual tools, not magic settings; adjust them only
					when they improve camouflage readability.
				</p>
			</div>

			<figure class="guide-media">
				<img src="${controlsSteamInputImage}" alt="MECCHA CHAMELEON controller setup guide with Steam Input translation enabled" title="MECCHA CHAMELEON Steam Input controller setup" loading="lazy" />
				<figcaption>Steam Input is the cleanest first stop when a PC controller is detected but MECCHA CHAMELEON input does not feel right.</figcaption>
			</figure>

			<h2>Controls and controller support</h2>
			<h3>Basic controls</h3>
			<p>
				The exact keybinds can change with personal layouts, but the action set is stable: movement, crouch/stand,
				climb, pose, paint mode, brush control, taunt, shadow toggle, and free-camera checks. A new Hider should
				practice only three things before joining a public room: <strong>pose</strong>, <strong>paint mode</strong>,
				and <strong>freeze discipline</strong>. A new Seeker should practice sweep movement and aim confirmation.
			</p>

			<div class="guide-table-wrap">
				<table class="guide-table">
					<thead>
						<tr><th>Control group</th><th>Use it for</th><th>Setup note</th></tr>
					</thead>
					<tbody>
						<tr><td>Movement</td><td>Route selection, Seeker sweeps, climb approach</td><td>Keep sensitivity stable before judging aim</td></tr>
						<tr><td>Pose</td><td>Breaking the human outline</td><td>Bind where you can use it during prep without panic</td></tr>
						<tr><td>Paint mode</td><td>Colour, brush size, roughness, metallic, finish</td><td>Do not bury brush controls behind awkward modifiers</td></tr>
						<tr><td>Shadow toggle</td><td>Checking visibility in dark or high-contrast spots</td><td>Use it as a view check, not a permanent crutch</td></tr>
						<tr><td>Free camera</td><td>Testing how a hide reads from the Seeker angle</td><td>Practice privately before using it under timer pressure</td></tr>
					</tbody>
				</table>
			</div>

			<h3>Controller support</h3>
			<p>
				If your controller works in Steam but not cleanly in MECCHA CHAMELEON, fix detection outside the match first.
				Do not debug a controller while the group is waiting in a live room. Steam Input can translate button presses
				and lets you edit a gamepad layout from the library controller icon.
			</p>

			<ol class="guide-steps">
				<li><strong>Restart Steam as administrator.</strong> This removes one common permissions variable on Windows.</li>
				<li><strong>Open Steam settings.</strong> Go to Controller settings and enable support for your controller type.</li>
				<li><strong>Add the game to Steam if needed.</strong> For non-Steam copies, add it as a non-Steam game before configuring input.</li>
				<li><strong>Open the controller icon from the library page.</strong> Enable Steam Input and apply a gamepad layout.</li>
				<li><strong>Edit or browse community layouts.</strong> Keep the first layout simple; only remap after testing the role actions.</li>
				<li><strong>Test in a private lobby.</strong> Confirm move, aim, pose, paint, climb, and menu navigation before inviting friends.</li>
			</ol>

			<figure class="guide-media">
				<img src="${controlsLayoutImage}" alt="MECCHA CHAMELEON controller layout setup with trigger mapping in Steam Input" title="MECCHA CHAMELEON controller trigger layout in Steam Input" loading="lazy" />
				<figcaption>Map triggers and face buttons around the actions you use under timer pressure: pose, paint, climb, and confirm.</figcaption>
			</figure>

			${guideBodyBannerHtml}

			<h2>Best settings for visibility and performance</h2>
			<h3>Best settings short list</h3>
			<p>
				There is no universal "best settings" preset because Hiders and Seekers want different information. Hiders
				want accurate material feedback. Seekers want readable silhouettes and stable frame pacing. Use this baseline
				first, then change one setting at a time.
			</p>

			<div class="guide-table-wrap">
				<table class="guide-table">
					<thead>
						<tr><th>Setting area</th><th>Recommended baseline</th><th>Why</th></tr>
					</thead>
					<tbody>
						<tr><td>Resolution</td><td>Native or stable scaled resolution</td><td>Prevents blurry edges when scanning props</td></tr>
						<tr><td>Frame rate</td><td>Stable over maximum</td><td>Seekers need consistent camera motion</td></tr>
						<tr><td>Shadow view</td><td>Toggle/check during setup</td><td>Dark areas can hide or expose outlines depending on role</td></tr>
						<tr><td>Metallic</td><td>Low unless the nearby surface is glossy</td><td>Wrong shine exposes Hiders faster than a small hue mismatch</td></tr>
						<tr><td>Roughness</td><td>Match nearby material</td><td>Flat walls and polished props need different finish</td></tr>
					</tbody>
				</table>
			</div>

			<h3>Turning off metallic</h3>
			<p>
				In paint mode, metallic is a material-finish slider. If your body is shining while the wall or prop is flat,
				lower metallic close to zero. Do not use metallic as a default body-wide effect. Use it only when the nearby
				surface has the same reflective read. This is especially important on clean indoor maps and bright party rooms.
			</p>

			<h3>Turning off shadow</h3>
			<p>
				The shadow control is useful as a visibility check. If shadows make your own paint evaluation unreliable,
				toggle them off while testing the hide, then check again from the Seeker approach angle. For performance,
				reduce shadow cost if the game feels unstable, but do not assume turning shadows off makes every hiding spot
				stronger. It can also make silhouettes easier to read.
			</p>

			${guideBodyBannerHtml}

			<h2>Controller fixes if input still fails</h2>
			<h3>Xbox, PlayStation, and third-party pads</h3>
			<p>
				When Steam Input does not solve detection, use the controller vendor path before changing in-game settings.
				Xbox users should confirm the controller is visible to Windows and updated through the Xbox Accessories app.
				PlayStation users should confirm the pad through PlayStation Accessories; DS4Windows can help when Windows
				detection is inconsistent. For generic pads, install the correct driver or test an XInput emulator only after
				Steam Input fails.
			</p>

			<figure class="guide-media">
				<img src="${controlsTestImage}" alt="MECCHA CHAMELEON controller test in game after Steam Input setup" title="MECCHA CHAMELEON controller test after settings setup" loading="lazy" />
				<figcaption>Finish setup in a private room. If movement, aim, pose, and paint all work there, the layout is ready for a real lobby.</figcaption>
			</figure>

			<div class="guide-callout">
				<p><strong>Do not tune everything at once.</strong> Change controller detection first, then layout, then visual settings. Mixing all three makes the failure impossible to isolate.</p>
			</div>

			<h2>Controls and settings FAQ</h2>
			<div class="guide-reference">
				<div class="guide-reference-item">
					<span class="guide-reference-key">Best settings?</span>
					<span class="guide-reference-value">Stable frame pacing, readable silhouettes, and material settings that match the surface you are using.</span>
				</div>
				<div class="guide-reference-item">
					<span class="guide-reference-key">Controller?</span>
					<span class="guide-reference-value">Use Steam Input first, then vendor drivers or an XInput fallback if detection still fails.</span>
				</div>
				<div class="guide-reference-item">
					<span class="guide-reference-key">Metallic or shadow?</span>
					<span class="guide-reference-value">Lower metallic unless the surface is glossy; use shadow toggle as a visibility check, not a universal advantage.</span>
				</div>
			</div>

			<h2>What to read next</h2>
			<p>
				After controls are stable, move to <a href="/guides/meccha-chameleon-how-to-play">How to Play MECCHA CHAMELEON</a>
				for first-match execution, then use the <a href="/camouflage-simulator">Camouflage Simulator</a> for paint
				practice and the <a href="/online">Online guide</a> before opening a public room.
			</p>
		</div>
		`,
	},
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
