// 攻略指南列表数据 — 玩家视角原创撰写
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

/** @type {GuideEntry[]} */
export const guides = [
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
				'meccha chameleon hider guide, camouflage masterclass, spoid paint workflow, pose selection, scene reading, ranking meta, hide and seek strategy, two-tone paint, infection mode hider, double mode, めっちゃカメレオン 隠れ方, paint tips',
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
				<a href="/camouflage-simulator">Camouflage Simulator</a> before a live lobby.
			</p>

			<h2>Modes and post-round review</h2>
			<div class="guide-table-wrap">
				<table class="guide-table">
					<thead>
						<tr><th>Mode</th><th>Hider priority</th></tr>
					</thead>
					<tbody>
						<tr><td>Normal (通常)</td><td>Learn prep timing; review the results screen every round</td></tr>
						<tr><td>Infection (増え鬼)</td><td>Stay still as hunter count rises; avoid high-traffic lanes</td></tr>
						<tr><td>Double (ダブル)</td><td>Pick spots that survive a reverse approach angle</td></tr>
					</tbody>
				</table>
			</div>
			<p>
				Since v1.2.0, ranking weighs distance and time in a Hunter’s line of sight. After each round, note whether
				scale, outline, or colour failed first — then change one variable next round. If a clip stops working, check
				<a href="/updates">patch notes</a> before blaming your paint.
			</p>

			<h2>Three private-lobby drills</h2>
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
	{
		id: 2,
		title: 'MECCHA CHAMELEON Seeker Scan Guide — Scale, Rhythm, Motion',
		description:
			'Seeker sweep habits for MECCHA CHAMELEON: read scale before colour, check pattern rhythm, sweep from consistent heights, and use motion to confirm suspicious shapes.',
		publishDate: '2026-06-24',
		imageUrl: '/images/guides/seeker-scan.webp',
		imageAlt: 'MECCHA CHAMELEON Seeker first-person sweep on an indoor map',
		addressBar: 'seeker-scan-patterns',
		tag: ['Seeker', 'Scan Patterns', 'Scene Reading', 'Normal Mode', 'Double Mode', 'Strategy', 'v1.8.0'],
		seo: {
			title: 'Seeker Scan Guide — Scale, Rhythm, Motion | MECCHA CHAMELEON',
			description:
				'MECCHA CHAMELEON Seeker guide: first-person sweep order, scale and rhythm checks, motion tells, and private-lobby drills to find Hiders faster in Steam lobbies.',
			keywords:
				'meccha chameleon seeker guide, scan patterns, find hiders, first person hunt, scene reading, scale check, rhythm check, hide and seek strategy, めっちゃカメレオン 鬼',
		},
		detailsHtml: `
		<div class="guide-content">
			<div class="guide-summary">
				<p class="guide-summary-label">At a glance</p>
				<p>
					Strong Seeker rounds prioritise <strong>scale → rhythm → motion</strong>. Most Hiders fail on wrong height or
					a broken outline long before exact hue matters. Sweep from one consistent eye line, then re-check high and low
					planes on a second pass.
				</p>
			</div>

			<h2>The scale → rhythm → motion order</h2>
			<ol class="guide-steps">
				<li><strong>Scale:</strong> compare object height and width against neighbours — an extra vertical or wide blob is your first clue.</li>
				<li><strong>Rhythm:</strong> on repeating walls, tiles, or props, look for a missing gap or an extra unit in the run.</li>
				<li><strong>Motion:</strong> only after a shape looks wrong — a twitching limb or late adjustment confirms it.</li>
			</ol>

			<h2>Default sweep route</h2>
			<div class="guide-table-wrap">
				<table class="guide-table">
					<thead><tr><th>Pass</th><th>What to do</th><th>Why it works</th></tr></thead>
					<tbody>
						<tr><td>Perimeter first</td><td>Walk the room edge at normal height</td><td>Catches standing silhouettes and obvious scale errors</td></tr>
						<tr><td>Low plane</td><td>Crouch or look along furniture, crates, and floor clutter</td><td>Many Hiders forget head height from a low sightline</td></tr>
						<tr><td>High plane</td><td>Check mezzanine lips, balloon lines, and overhead signs</td><td>Vertical hides fail when feet hang below the mount line</td></tr>
						<tr><td>Reverse angle</td><td>Re-enter the same zone from the opposite spawn route</td><td>Outline tells change with approach direction</td></tr>
					</tbody>
				</table>
			</div>
			<p>Stage-specific landmarks: <a href="/wiki#wiki-maps">Wiki map notes</a>. Test one sweep habit per round instead of copying a viral clip route.</p>

			<h2>What to ignore (for now)</h2>
			<ul>
				<li><strong>Loud colour on bright maps</strong> — compare mound scale on gumdrop piles before judging candy hue.</li>
				<li><strong>Perfect paint on dark maps</strong> — shadow-side sampling hides value errors; look for smooth human edges instead.</li>
				<li><strong>Centre-of-room magnets first</strong> — sweep edges, then punish obvious prop stacks on pass two.</li>
			</ul>

			<h2>Three private-lobby drills</h2>
			<ol class="guide-steps guide-steps--compact">
				<li><strong>Scale-only:</strong> call out wrong height or width before you allow yourself to inspect colour.</li>
				<li><strong>Rhythm break:</strong> pick one repeating wall and name the first tile or panel that looks one unit off.</li>
				<li><strong>Reverse pass:</strong> finish a zone, leave, re-enter from the opposite door, and compare what changed.</li>
			</ol>

			<h2>What to read next</h2>
			<div class="guide-reference">
				<div class="guide-reference-item">
					<span class="guide-reference-key">Hider side</span>
					<span class="guide-reference-value"><a href="/guides/hider-camouflage-masterclass">Camouflage masterclass</a></span>
				</div>
				<div class="guide-reference-item">
					<span class="guide-reference-key">Maps</span>
					<span class="guide-reference-value"><a href="/wiki#wiki-maps">Map reading notes</a></span>
				</div>
				<div class="guide-reference-item">
					<span class="guide-reference-key">Patches</span>
					<span class="guide-reference-value"><a href="/updates">Patch archive</a></span>
				</div>
			</div>
		</div>
		`,
	},
	{
		id: 3,
		title: 'MECCHA CHAMELEON Infection Mode Guide — Survive the Growing Hunt',
		description:
			'Infection (増え鬼) tactics for MECCHA CHAMELEON: lane choice, stillness as Hunters multiply, when to relocate, and group habits for 6–10 player lobbies.',
		publishDate: '2026-06-24',
		imageUrl: '/images/guides/infection-mode.webp',
		imageAlt: 'MECCHA CHAMELEON Infection mode lobby with multiple Hunters',
		addressBar: 'infection-mode-survival',
		tag: ['Infection Mode', 'Hider', 'Seeker', '増え鬼', 'Lobby', 'Strategy', '6–10 Players'],
		seo: {
			title: 'Infection Mode Survival Guide | MECCHA CHAMELEON',
			description:
				'MECCHA CHAMELEON Infection mode guide: lane habits, stillness rules, when to move, Hunter conversion reads, and private-lobby drills for 6–10 player groups.',
			keywords:
				'meccha chameleon infection mode, 増え鬼, growing hunter mode, survival guide, large lobby strategy, hide and seek party game',
		},
		detailsHtml: `
		<div class="guide-content">
			<div class="guide-summary">
				<p class="guide-summary-label">At a glance</p>
				<p>
					Infection (増え鬼) adds Hunters over time. Surviving Hiders win by picking <strong>quiet lanes</strong>,
					staying still once the hunt intensifies, and avoiding spots that force movement when new Hunters spawn nearby.
					This mode shines at <strong>6–10 players</strong> — traffic and sightlines change every conversion.
				</p>
			</div>

			<h2>Hider priorities in Infection</h2>
			<ol class="guide-steps">
				<li><strong>Pick a lane, not a landmark magnet.</strong> Centre balloons, hay piles, and gumdrop stacks draw multiple Hunters — use side rooms and connector halls when the lobby is full.</li>
				<li><strong>Commit early.</strong> Late spot changes get punished as Hunter count rises and map traffic increases.</li>
				<li><strong>Freeze when the hunt audio starts.</strong> Motion is a bigger tell than unfinished paint once several Hunters are sweeping.</li>
				<li><strong>Plan one escape angle only if your group allows relocation.</strong> Most groups treat stillness as the fair rule — confirm house rules first.</li>
			</ol>

			<h2>When the lobby grows</h2>
			<div class="guide-table-wrap">
				<table class="guide-table">
					<thead><tr><th>Lobby size</th><th>Hider habit</th><th>Seeker habit</th></tr></thead>
					<tbody>
						<tr><td>6–7 players</td><td>Side rooms and low silhouettes</td><td>Split zones; avoid crowding one ballroom</td></tr>
						<tr><td>8–10 players</td><td>Avoid main lanes after first conversion</td><td>Assign rough zone ownership to reduce double-sweeps</td></tr>
						<tr><td>Any size</td><td>Do not follow another Hider into the same cluster</td><td>Re-check reverse angles after each new Hunter joins</td></tr>
					</tbody>
				</table>
			</div>

			<h2>Seeker conversion habits</h2>
			<p>
				New Hunters should inherit a simple sweep order instead of rushing the last spotted area. Clear your assigned zone at
				one height, then drop to a low plane before chasing chat callouts. Since v1.5.0, likes and reveal presentation changed
				round feedback — use the results screen to see whether scale or motion failed first.
			</p>

			<h2>Three private-lobby drills</h2>
			<ol class="guide-steps guide-steps--compact">
				<li><strong>Lane test:</strong> hide in a connector hall or side room — survive one full conversion without moving.</li>
				<li><strong>Traffic test:</strong> run 8+ players and ban centre-floor hides for one round — compare survival time.</li>
				<li><strong>Reverse sweep:</strong> Hunters finish a zone, exit, and re-enter from the opposite route before calling the room clear.</li>
			</ol>

			<h2>What to read next</h2>
			<div class="guide-reference">
				<div class="guide-reference-item">
					<span class="guide-reference-key">Basics</span>
					<span class="guide-reference-value"><a href="/beginners-hub">Beginner's Hub</a></span>
				</div>
				<div class="guide-reference-item">
					<span class="guide-reference-key">Paint</span>
					<span class="guide-reference-value"><a href="/guides/hider-camouflage-masterclass">Hider masterclass</a></span>
				</div>
				<div class="guide-reference-item">
					<span class="guide-reference-key">Hosting</span>
					<span class="guide-reference-value"><a href="/online">Online guide</a></span>
				</div>
			</div>
		</div>
		`,
	},
];
