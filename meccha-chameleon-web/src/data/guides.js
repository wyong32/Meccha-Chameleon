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
				<a href="/camouflage-simulator">Camouflage Simulator</a> before a live lobby.
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
	
];
