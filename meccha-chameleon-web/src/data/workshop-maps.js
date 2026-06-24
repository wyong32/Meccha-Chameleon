// Workshop 地图与 hosting 指南 — 字段结构与 guides.js 一致
/**
 * @typedef {Object} WorkshopMapEntry
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

const meetingRoomImages = {
	card: '/images/workshop/meeting-room/card.jpg',
	preview: '/images/workshop/meeting-room/preview.jpg',
};

const meetingRoomSteamUrl = 'https://steamcommunity.com/sharedfiles/filedetails/?id=3745249764';

const vikingDiningImages = {
	card: '/images/workshop/viking-dining/card.jpg',
	preview: '/images/workshop/viking-dining/preview.jpg',
};

const vikingDiningSteamUrl = 'https://steamcommunity.com/sharedfiles/filedetails/?id=3746909981';

const policeStationImages = {
	card: '/images/workshop/police-station/card.jpg',
	preview: '/images/workshop/police-station/preview.jpg',
};

const policeStationSteamUrl = 'https://steamcommunity.com/sharedfiles/filedetails/?id=3747815568';

/** @type {WorkshopMapEntry[]} */
export const workshopMaps = [
	{
		id: 1,
		title: 'MECCHA CHAMELEON Meeting room — Workshop Map Guide',
		description:
			'acid_fox’s modern interior Workshop stage for MECCHA CHAMELEON: subscribe before the lobby, test privately, and read the room for desk edges, glass panels, and chair-scale silhouettes.',
		publishDate: '2026-06-15',
		imageUrl: meetingRoomImages.card,
		imageAlt: 'Meeting room Workshop map preview for MECCHA CHAMELEON',
		addressBar: 'meeting-room',
		tag: [
			'Workshop',
			'Community Map',
			'Interior',
			'Modern',
			'Multiplayer',
			'Scene Reading',
			'Hosting',
			'acid_fox',
		],
		seo: {
			title: 'Meeting room Workshop Map Guide | MECCHA CHAMELEON',
			description:
				'Meeting room Steam Workshop map for MECCHA CHAMELEON: subscribe and host checklist, modern office scene-reading tips, Hider backdrop choices, and Seeker sweep habits for community lobbies.',
			keywords:
				'meccha chameleon meeting room workshop, acid_fox map, steam workshop interior, custom map hosting, scene reading, community stage, subscribe workshop',
		},
		detailsHtml: `
		<div class="guide-content">
			<div class="guide-summary">
				<p class="guide-summary-label">At a glance</p>
				<p>
					<strong>Meeting room</strong> is a popular community interior by <strong>acid_fox</strong> — a modern,
					realistic office-style stage built for MECCHA CHAMELEON. Subscribe in Steam, wait for the download, run
					one private test, then share the Workshop link so every player loads the same file before you queue.
				</p>
			</div>

			<h2>Workshop facts</h2>
			<div class="guide-table-wrap">
				<table class="guide-table">
					<thead>
						<tr><th>Detail</th><th>Info</th></tr>
					</thead>
					<tbody>
						<tr><td>Workshop item</td><td><a href="${meetingRoomSteamUrl}" target="_blank" rel="noopener noreferrer">Meeting room (ID 3745249764)</a></td></tr>
						<tr><td>Creator</td><td>acid_fox</td></tr>
						<tr><td>Posted</td><td>15 June 2026</td></tr>
						<tr><td>File size</td><td>~139 MB — allow time to download before hosting</td></tr>
						<tr><td>Style</td><td>Modern realistic interior / meeting-office layout</td></tr>
					</tbody>
				</table>
			</div>
			<p>
				Creator note from the listing: first map for MECCHA CHAMELEON, focused on a clean indoor look. Treat
				discussion threads about “invincible spots” as a reminder to retest routes after patches — not as permanent
				meta.
			</p>

			<h2>Before you host this map</h2>
			<ol class="guide-steps guide-steps--compact">
				<li><strong>Subscribe:</strong> open the Workshop item and subscribe; restart the game if the map does not appear.</li>
				<li><strong>Sync the lobby:</strong> every player must subscribe before joining — mismatched subscriptions cause load failures.</li>
				<li><strong>Private test:</strong> one short round on an official map, then one on Meeting room, before inviting a full group.</li>
				<li><strong>Share the link:</strong> paste the Workshop URL in chat so late joiners subscribe to the same item.</li>
			</ol>
			<p>Full multiplayer setup habits: <a href="/online">Online guide</a>.</p>

			<h2>Scene reading on an office interior</h2>
			<p>
				Meeting room rewards the same core loop as official indoor maps — <strong>Spot → Pose → Paint</strong> — but
				the props are desks, chairs, glass partitions, and flat wall panels. Pick one material family per hide instead
				of painting across unrelated surfaces.
			</p>
			<div class="guide-table-wrap">
				<table class="guide-table">
					<thead>
						<tr><th>Surface</th><th>Hider focus</th><th>Seeker check</th></tr>
					</thead>
					<tbody>
						<tr>
							<td>Desk or table edge</td>
							<td>Match height first; crouch until the head stays below the tabletop line</td>
							<td>Compare top edges — one shape with the wrong thickness</td>
						</tr>
						<tr>
							<td>Chair or low seating</td>
							<td>Compact pose; sample upholstery tone beside the final position</td>
							<td>Look for an extra vertical line in a row of similar chairs</td>
						</tr>
						<tr>
							<td>Glass or bright panel</td>
							<td>Two-tone Spoid from the nearest opaque surface, not the reflection</td>
							<td>Check value contrast — near-correct colour can still read as a dark cutout</td>
						</tr>
						<tr>
							<td>Flat wall / screen</td>
							<td>Flatten silhouette; continue one panel direction with simple lit + shadow paint</td>
							<td>Scan for a human-width interruption in an otherwise even field</td>
						</tr>
					</tbody>
				</table>
			</div>

			<h2>Three quick lobby drills</h2>
			<ol class="guide-steps guide-steps--compact">
				<li><strong>Load check:</strong> host only — confirm the map name appears in lobby settings before inviting friends.</li>
				<li><strong>One-material round:</strong> each Hider picks one desk, wall, or chair cluster and uses at most two Spoid tones.</li>
				<li><strong>Reverse sweep:</strong> Seekers finish with a second pass from the opposite corridor angle.</li>
			</ol>
		</div>
		`,
	},
	{
		id: 2,
		title: 'MECCHA CHAMELEON Viking Dining — Workshop Map Guide',
		description:
			'RareKiwi’s viking tavern Workshop stage for MECCHA CHAMELEON: wood-and-stone interiors, Xray prop materials, subscribe-and-test hosting, and scene-reading tips for barrel, beam, and hearth backdrops.',
		publishDate: '2026-06-17',
		imageUrl: vikingDiningImages.card,
		imageAlt: 'Viking Dining Workshop map preview for MECCHA CHAMELEON',
		addressBar: 'viking-dining',
		tag: [
			'Workshop',
			'Community Map',
			'Viking',
			'Tavern',
			'Interior',
			'Xray Materials',
			'Multiplayer',
			'Scene Reading',
			'RareKiwi',
		],
		seo: {
			title: 'Viking Dining Workshop Map Guide | MECCHA CHAMELEON',
			description:
				'Viking Dining Steam Workshop map for MECCHA CHAMELEON: RareKiwi tavern stage, Xray prop materials, subscribe checklist, and Hider/Seeker scene-reading tips for wood, stone, and barrel props.',
			keywords:
				'meccha chameleon viking dining workshop, rarekiwi map, viking tavern steam workshop, xray prop materials, custom map hosting, scene reading, community stage',
		},
		detailsHtml: `
		<div class="guide-content">
			<div class="guide-summary">
				<p class="guide-summary-label">At a glance</p>
				<p>
					<strong>Viking Dining</strong> by <strong>RareKiwi</strong> is a low-poly viking tavern — warm wood,
					stone, barrels, and hearth lighting. The listing notes support for <strong>Xray prop materials</strong>.
					Subscribe in Steam, confirm the download, run a private test, then share the Workshop link before your
					lobby fills.
				</p>
			</div>

			<h2>Workshop facts</h2>
			<div class="guide-table-wrap">
				<table class="guide-table">
					<thead>
						<tr><th>Detail</th><th>Info</th></tr>
					</thead>
					<tbody>
						<tr><td>Workshop item</td><td><a href="${vikingDiningSteamUrl}" target="_blank" rel="noopener noreferrer">Viking Dining (ID 3746909981)</a></td></tr>
						<tr><td>Creator</td><td>RareKiwi</td></tr>
						<tr><td>Posted</td><td>17 June 2026</td></tr>
						<tr><td>Last updated</td><td>21 June 2026</td></tr>
						<tr><td>File size</td><td>~44 MB — lighter than many community stages, but still verify before hosting</td></tr>
						<tr><td>Style</td><td>Viking tavern / dining hall with Xray-capable props</td></tr>
					</tbody>
				</table>
			</div>
			<p>
				Creator note: assets sourced from Low Poly Viking World on Fab. If props look different after an update,
				walk the room once before relying on an old clip.
			</p>

			<h2>Before you host this map</h2>
			<ol class="guide-steps guide-steps--compact">
				<li><strong>Subscribe:</strong> open the Workshop item and subscribe; restart if Viking Dining does not appear in map select.</li>
				<li><strong>Sync the lobby:</strong> every player must subscribe — partial groups fail to load custom stages.</li>
				<li><strong>Private test:</strong> one official-map round, then one Viking Dining test, before a full party.</li>
				<li><strong>Share the link:</strong> paste the Workshop URL so late joiners grab the same file.</li>
			</ol>
			<p>Full multiplayer setup habits: <a href="/online">Online guide</a>.</p>

			<h2>Scene reading in a viking tavern</h2>
			<p>
				Taverns mix <strong>wood grain</strong>, <strong>stone</strong>, and <strong>warm light</strong> — easy to
				over-paint. Use <strong>Spot → Pose → Paint</strong>: commit to one prop family (barrel row, beam, hearth
				wall), set a low silhouette, then Spoid lit and shadow tones from the same material beside your pose.
			</p>
			<div class="guide-table-wrap">
				<table class="guide-table">
					<thead>
						<tr><th>Surface</th><th>Hider focus</th><th>Seeker check</th></tr>
					</thead>
					<tbody>
						<tr>
							<td>Barrel or crate stack</td>
							<td>Match round scale; curl low so the outline follows the curve</td>
							<td>Find the container with the wrong height or too-smooth paint</td>
						</tr>
						<tr>
							<td>Wood beam or plank wall</td>
							<td>Align with grain direction; two-tone Spoid only on that plane</td>
							<td>Look for a vertical break in an otherwise even plank run</td>
						</tr>
						<tr>
							<td>Stone hearth or floor edge</td>
							<td>Sample shadow from the final spot, not the brighter centre of the room</td>
							<td>Compare seam rhythm — one tile or block with a body-shaped edge</td>
						</tr>
						<tr>
							<td>Xray / translucent props</td>
							<td>Hide against the opaque frame or backing, not through the prop</td>
							<td>Check edges where a silhouette should be blocked but is not</td>
						</tr>
					</tbody>
				</table>
			</div>

			<h2>Three quick lobby drills</h2>
			<ol class="guide-steps guide-steps--compact">
				<li><strong>Load check:</strong> host confirms Viking Dining appears in lobby map list before invites go out.</li>
				<li><strong>One-material round:</strong> each Hider uses one wood or stone family and at most two Spoid tones.</li>
				<li><strong>Hearth pass:</strong> Seekers sweep warm-light zones last — compare value, not colour names.</li>
			</ol>
		</div>
		`,
	},
	{
		id: 3,
		title: 'MECCHA CHAMELEON Police Station — Workshop Map Guide',
		description:
			'RareKiwi’s police department Workshop stage for MECCHA CHAMELEON: fluorescent interiors, filing cabinets and desk rows, Xray prop materials, and scene-reading tips for lobby hosting.',
		publishDate: '2026-06-19',
		imageUrl: policeStationImages.card,
		imageAlt: 'Police Station Workshop map preview for MECCHA CHAMELEON',
		addressBar: 'police-station',
		tag: [
			'Workshop',
			'Community Map',
			'Police',
			'Interior',
			'Xray Materials',
			'Multiplayer',
			'Scene Reading',
			'RareKiwi',
		],
		seo: {
			title: 'Police Station Workshop Map Guide | MECCHA CHAMELEON',
			description:
				'Police Station Steam Workshop map for MECCHA CHAMELEON: RareKiwi department stage, Xray props, subscribe checklist, and Hider/Seeker tips for desks, tiles, and corridor sightlines.',
			keywords:
				'meccha chameleon police station workshop, rarekiwi map, police department steam workshop, xray prop materials, custom map hosting, scene reading, community stage',
		},
		detailsHtml: `
		<div class="guide-content">
			<div class="guide-summary">
				<p class="guide-summary-label">At a glance</p>
				<p>
					<strong>Police Station</strong> by <strong>RareKiwi</strong> is a police-department interior built from
					1996 Police Headquarters assets on Fab. The listing supports <strong>prop Xray materials</strong> — useful
					for glass partitions and thin props, but still hide against opaque frames. Subscribe, download, private-test,
					then share the Workshop link before the lobby starts.
				</p>
			</div>

			<h2>Workshop facts</h2>
			<div class="guide-table-wrap">
				<table class="guide-table">
					<thead>
						<tr><th>Detail</th><th>Info</th></tr>
					</thead>
					<tbody>
						<tr><td>Workshop item</td><td><a href="${policeStationSteamUrl}" target="_blank" rel="noopener noreferrer">Police Station (ID 3747815568)</a></td></tr>
						<tr><td>Creator</td><td>RareKiwi</td></tr>
						<tr><td>Posted</td><td>19 June 2026</td></tr>
						<tr><td>Last updated</td><td>23 June 2026</td></tr>
						<tr><td>File size</td><td>~45 MB</td></tr>
						<tr><td>Style</td><td>Police HQ interior with Xray-capable props</td></tr>
					</tbody>
				</table>
			</div>
			<p>
				Department maps mix long corridors, desk rows, and flat wall panels under even lighting — strong for
				practising silhouette control, unforgiving if you pick a spot with no local shadow to sample.
			</p>

			<h2>Before you host this map</h2>
			<ol class="guide-steps guide-steps--compact">
				<li><strong>Subscribe:</strong> open the Workshop item and subscribe; restart if Police Station is missing from map select.</li>
				<li><strong>Sync the lobby:</strong> every player must subscribe before joining.</li>
				<li><strong>Private test:</strong> one official-map round, then one Police Station test, before a full group.</li>
				<li><strong>Share the link:</strong> paste the Workshop URL for late joiners.</li>
			</ol>
			<p>Full multiplayer setup habits: <a href="/online">Online guide</a>.</p>

			<h2>Scene reading in a police interior</h2>
			<p>
				Use <strong>Spot → Pose → Paint</strong> on one material family — desk edge, tile run, or cabinet row. Fluorescent
				lighting makes single flat colours obvious; Spoid both a lit plane and a nearby shadow on the same surface.
			</p>
			<div class="guide-table-wrap">
				<table class="guide-table">
					<thead>
						<tr><th>Surface</th><th>Hider focus</th><th>Seeker check</th></tr>
					</thead>
					<tbody>
						<tr>
							<td>Desk or counter row</td>
							<td>Crouch to the tabletop line; match width, not every object on the desk</td>
							<td>Scan for one block taller or wider than its neighbours</td>
						</tr>
						<tr>
							<td>Filing cabinet / locker wall</td>
							<td>Flatten against the face; continue vertical panel rhythm with two tones only</td>
							<td>Look for a gap or extra divider in a repeating column</td>
						</tr>
						<tr>
							<td>Floor tile or corridor seam</td>
							<td>Align pose with the seam direction; sample shadow from the final tile</td>
							<td>Check for a blob that ignores the grout line</td>
						</tr>
						<tr>
							<td>Glass / Xray partition</td>
							<td>Hide on the opaque frame or wall beside the glass, not floating in the pane</td>
							<td>Compare edges where a body should be occluded but reads as a dark cutout</td>
						</tr>
					</tbody>
				</table>
			</div>

			<h2>Three quick lobby drills</h2>
			<ol class="guide-steps guide-steps--compact">
				<li><strong>Load check:</strong> host confirms Police Station in lobby settings before invites.</li>
				<li><strong>Corridor round:</strong> Hiders pick one wall segment; Seekers sweep perimeter first, centre last.</li>
				<li><strong>Reverse angle:</strong> finish the hunt from the opposite end of the main hallway.</li>
			</ol>
		</div>
		`,
	},
];
