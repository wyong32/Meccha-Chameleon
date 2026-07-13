// Project2 guide additions for the 2026-07-13 publishing batch.

const paintEyedropperGuideImage = 'https://i.ytimg.com/vi/tpDM24Z5pyc/maxresdefault.jpg';
const settingsCrashGuideImage = 'https://i.ytimg.com/vi/1c-2x3ZgkPg/maxresdefault.jpg';

const guideBodyBannerHtml = `
			<aside class="affiliate-ad-slot" data-affiliate-ad="banner" aria-label="Advertisement">
				<span class="affiliate-ad-slot__label">Advertisement</span>
				<div class="affiliate-ad-slot__frame" data-affiliate-ad-frame></div>
			</aside>
`;

export const project2Guides20260713 = [
	{
		id: 7,
		title: 'MECCHA CHAMELEON Paint Guide: Auto Paint, Painting, and Eyedropper Fixes',
		h1: 'MECCHA CHAMELEON Paint, Auto Paint, and Eyedropper Guide',
		description:
			'Fix MECCHA CHAMELEON paint workflow problems with legal auto paint wording, eyedropper checks, color sampling habits, and clean camouflage setup.',
		publishDate: '2026-07-13',
		imageUrl: paintEyedropperGuideImage,
		imageAlt: 'MECCHA CHAMELEON paint guide covering auto paint and eyedropper troubleshooting',
		addressBar: 'meccha-chameleon-paint-auto-paint-eyedropper-guide',
		tag: ['Paint', 'Eyedropper', 'Auto Paint', 'Camouflage', 'Spoid', 'Hider', 'Troubleshooting', 'v1.9.0'],
		seo: {
			title: 'MECCHA CHAMELEON Paint and Eyedropper Guide',
			description:
				'Fix MECCHA CHAMELEON paint, auto paint, and eyedropper issues with legal workflow checks, color sampling, and settings basics.',
			keywords: 'MECCHA CHAMELEON paint, auto paint, eyedropper, painting guide',
		},
		detailsHtml: `
		<div class="guide-content">
			<div class="guide-summary">
				<p class="guide-summary-label">Fast answer</p>
				<p>
					Use paint after you already have a hiding spot and pose. The reliable order is <strong>spot, pose, sample, paint, verify</strong>.
					The eyedropper is only useful when you sample from the same material and light angle you are hiding against. If the eyedropper
					feels broken, check target surface, mode state, camera angle, and input focus before blaming the tool.
				</p>
			</div>

			<figure class="guide-media">
				<img src="${paintEyedropperGuideImage}" alt="MECCHA CHAMELEON paint auto paint eyedropper guide image for color workflow planning" title="MECCHA CHAMELEON paint and eyedropper workflow guide" loading="lazy" />
				<figcaption>Paint decisions start before the brush: pick the surface, reduce the silhouette, then sample color from the same local area.</figcaption>
			</figure>

			<h2>How painting works</h2>
			<h3>How to paint</h3>
			<p>
				Painting is a camouflage tool, not a skin menu. The Hider starts as a readable body shape, then uses paint to mimic the stage.
				Good paint does three jobs: it matches the local hue, copies the local light value, and avoids material shine that does not
				belong on the nearby wall, floor, prop, or sign. If the pose is wrong, paint only delays the catch.
			</p>
			<ol class="guide-steps">
				<li><strong>Choose the surface first.</strong> Wall, floor, sign, furniture, and shadow lanes all need different color values.</li>
				<li><strong>Set the pose before painting.</strong> Use the <a href="/guides/hider-camouflage-masterclass">Spot -> Pose -> Paint</a> rule to kill the human outline first.</li>
				<li><strong>Sample the nearest matching area.</strong> Do not sample a lamp-lit patch if your body will sit in shade.</li>
				<li><strong>Paint broad planes first.</strong> Torso and limbs matter more than tiny edge detail under timer pressure.</li>
				<li><strong>Verify from the Seeker route.</strong> Use the angle a Seeker will actually see, not only your close-up camera.</li>
			</ol>

			<div class="guide-table-wrap">
				<table class="guide-table">
					<thead><tr><th>Paint check</th><th>Pass condition</th><th>Common failure</th></tr></thead>
					<tbody>
						<tr><td>Hue</td><td>Body color sits in the same color family as the surface</td><td>Sampling a nearby object with different lighting</td></tr>
						<tr><td>Value</td><td>Brightness matches the exact hiding angle</td><td>Correct color, but too bright in shadow</td></tr>
						<tr><td>Finish</td><td>Metallic and roughness fit the material</td><td>Glossy body on a flat wall</td></tr>
						<tr><td>Silhouette</td><td>Pose reads like the prop cluster</td><td>Painted body still stands like a person</td></tr>
					</tbody>
				</table>
			</div>

			<h3>Auto paint and auto painter terms</h3>
			<p>
				Players search for "auto paint" and "auto painter" because manual matching is slow under a timer. Treat those terms as workflow
				intent, not a reason to use cheats, scripts, or modified clients. The legitimate version is a repeatable checklist: sample local
				color, apply broad coverage, adjust value, then stop. If a third-party tool promises automated hiding, skip it. It can break
				multiplayer fairness and may expose the account or install path.
			</p>
			<div class="guide-callout">
				<p><strong>Practical replacement for auto paint:</strong> rehearse two-tone sampling in the <a href="/camouflage-simulator">Camouflage Simulator</a>, then use the same two-sample method in live rounds.</p>
			</div>

			${guideBodyBannerHtml}

			<h2>Eyedropper troubleshooting</h2>
			<h3>Eyedropper basics</h3>
			<p>
				The eyedropper is strongest when used as a local sampler. It should copy color from the area you are matching, but it cannot fix
				perspective, shine, or bad pose choice. The most useful samples come from the same plane as your hiding spot: same wall panel,
				same floor tile row, same sign face, or same furniture edge.
			</p>
			<div class="guide-table-wrap">
				<table class="guide-table">
					<thead><tr><th>Use case</th><th>Where to sample</th><th>What to avoid</th></tr></thead>
					<tbody>
						<tr><td>Flat wall hide</td><td>Beside the body, not across the room</td><td>Bright lamp patches</td></tr>
						<tr><td>Floor or tile hide</td><td>One tile line from your body</td><td>Reflections that only exist from your camera</td></tr>
						<tr><td>Prop cluster</td><td>The prop face seen by the Seeker</td><td>Back side or underside colors</td></tr>
						<tr><td>Shadow lane</td><td>Shadow and mid-tone separately</td><td>One flat dark pass over the whole body</td></tr>
					</tbody>
				</table>
			</div>

			<h3>Eye dropper not working</h3>
			<p>
				Most eyedropper failures come from state or target mismatch. Run these checks in order before resetting settings.
			</p>
			<ol class="guide-steps guide-steps--compact">
				<li><strong>Confirm paint mode is active.</strong> If another action owns input focus, the click may not sample.</li>
				<li><strong>Target visible geometry.</strong> Transparent, invalid, UI-covered, or out-of-range areas may not return a useful color.</li>
				<li><strong>Move the camera slightly.</strong> A shallow angle can hit the wrong plane or miss the intended surface.</li>
				<li><strong>Check controller mapping.</strong> If using gamepad, compare with the <a href="/guides/meccha-chameleon-controls-settings">controls and settings guide</a>.</li>
				<li><strong>Restart the private lobby.</strong> If the tool worked earlier and then stopped, reload before changing every bind.</li>
			</ol>

			${guideBodyBannerHtml}

			<h2>Paint mistakes that expose Hiders</h2>
			<p>
				The fastest way to lose a Hider round is to paint every body part with one clean color. Real map surfaces vary by light, angle,
				and finish. Use two values on the same material before adding detail. If the timer is low, stop after torso and head coverage
				instead of creating noisy stripes on limbs.
			</p>
			<div class="guide-reference">
				<div class="guide-reference-item"><span class="guide-reference-key">Best habit</span><span class="guide-reference-value">Pose first, then sample the exact surface beside the body.</span></div>
				<div class="guide-reference-item"><span class="guide-reference-key">Bad habit</span><span class="guide-reference-value">Sampling one bright color and covering the whole body with it.</span></div>
				<div class="guide-reference-item"><span class="guide-reference-key">Next read</span><span class="guide-reference-value"><a href="/guides/meccha-chameleon-how-to-play">How to Play</a> for role basics, then <a href="/guides/meccha-chameleon-maps-custom-maps-workshop">Maps and Workshop</a> for spot selection.</span></div>
			</div>

			<h2>Paint FAQ</h2>
			<div class="guide-reference">
				<div class="guide-reference-item"><span class="guide-reference-key">How to paint?</span><span class="guide-reference-value">Pick a hiding surface, pose into its shape, sample local color, paint broad planes, then verify from the Seeker angle.</span></div>
				<div class="guide-reference-item"><span class="guide-reference-key">Auto paint?</span><span class="guide-reference-value">Use the term as workflow shorthand only. Avoid cheats, scripts, and unofficial automation.</span></div>
				<div class="guide-reference-item"><span class="guide-reference-key">Eyedropper broken?</span><span class="guide-reference-value">Check paint mode, target surface, camera angle, input mapping, and lobby state in that order.</span></div>
			</div>
		</div>
		`,
	},
	{
		id: 6,
		title: 'MECCHA CHAMELEON Settings and Crash Fix Guide: FPS, Lag, and Requirements',
		h1: 'MECCHA CHAMELEON Settings, FPS, Lag, and Crash Fixes',
		description:
			'Use this MECCHA CHAMELEON troubleshooting guide to check PC requirements, stabilize FPS, reduce lag symptoms, and recover from repeat crashes.',
		publishDate: '2026-07-13',
		imageUrl: settingsCrashGuideImage,
		imageAlt: 'MECCHA CHAMELEON FPS crash fix guide showing before and after performance comparison',
		addressBar: 'meccha-chameleon-settings-crash-fps-fix-guide',
		tag: ['Settings', 'FPS', 'Lag', 'Crash Fix', 'System Requirements', 'Performance', 'Troubleshooting', 'v1.9.0'],
		seo: {
			title: 'MECCHA CHAMELEON FPS and Crash Fix Guide',
			description:
				'Check MECCHA CHAMELEON requirements, best settings, low FPS, lag, crash on launch, and repeat crash recovery steps.',
			keywords: 'MECCHA CHAMELEON settings, requirements, FPS, lag, crash fix',
		},
		detailsHtml: `
		<div class="guide-content">
			<div class="guide-summary">
				<p class="guide-summary-label">Fast answer</p>
				<p>
					First confirm the PC clears the minimum baseline: <strong>Windows 10 64-bit, Intel Core i5 class CPU,
					and a DirectX 11 or DirectX 12 compatible graphics card</strong>. Then fix performance in this order:
					close overlays, stabilize resolution, reduce expensive visual settings, test an official map, and only then
					debug crashes. Do not mix FPS tuning, controller changes, Workshop maps, and driver updates in one pass.
				</p>
			</div>

			<figure class="guide-media">
				<img src="${settingsCrashGuideImage}" alt="MECCHA CHAMELEON settings crash FPS fix guide with lag and stutter comparison" title="MECCHA CHAMELEON FPS, lag, and crash fix guide" loading="lazy" />
				<figcaption>Performance fixes need a clean baseline. Test one change at a time, then repeat the same route before judging FPS.</figcaption>
			</figure>

			<h2>Can your PC run MECCHA CHAMELEON?</h2>
			<h3>System requirements and minimum requirements</h3>
			<p>
				The current minimum public requirement set is modest, but "minimum" means the game launches and runs under controlled conditions.
				It does not guarantee stable frame pacing in large lobbies, busy Workshop maps, streaming setups, or browser-heavy background use.
			</p>
			<div class="guide-table-wrap">
				<table class="guide-table">
					<thead><tr><th>Requirement area</th><th>Minimum baseline</th><th>Field note</th></tr></thead>
					<tbody>
						<tr><td>OS</td><td>Windows 10 64-bit</td><td>Update Windows before driver-level debugging</td></tr>
						<tr><td>CPU</td><td>Intel Core i5 class</td><td>Background capture and browser tabs can steal prep-phase smoothness</td></tr>
						<tr><td>GPU</td><td>DirectX 11 or DirectX 12 compatible graphics card</td><td>Old drivers can cause launch crashes or shader stutter</td></tr>
						<tr><td>Network</td><td>Stable host connection for multiplayer</td><td>Lag symptoms may be host-side, not graphics-side</td></tr>
					</tbody>
				</table>
			</div>

			<h3>Can I run it?</h3>
			<p>
				If your system meets the baseline but the game still feels rough, separate three problems: low FPS, network-like lag, and crash
				behavior. Low FPS is local frame pacing. Lag is delayed movement, rubber-banding, or bad lobby response. Crashing is process
				failure. Fixing the wrong bucket wastes time.
			</p>

			${guideBodyBannerHtml}

			<h2>Best settings for FPS and lag</h2>
			<h3>Best settings to change first</h3>
			<p>
				Start from a boring test: official map, private room, no streaming, no Workshop content, no browser video playing. Then change
				one setting group at a time. Seekers need stable camera motion more than a high peak number, and Hiders need paint feedback
				that does not hitch during prep.
			</p>
			<ol class="guide-steps">
				<li><strong>Restart the game and Steam.</strong> Clear stale lobby, overlay, and input state first.</li>
				<li><strong>Use an official map.</strong> Workshop map performance varies, so do not benchmark there first.</li>
				<li><strong>Lower resolution or render scale before blaming servers.</strong> If camera motion improves instantly, it was local load.</li>
				<li><strong>Reduce shadow and expensive visual passes.</strong> Keep visibility readable; do not make Hider silhouettes harder to judge.</li>
				<li><strong>Close overlays and capture tools.</strong> Discord, browser video, recording, and GPU overlays can create stutter.</li>
				<li><strong>Update GPU drivers.</strong> Do this after a clean test, not as the first random fix.</li>
			</ol>

			<div class="guide-table-wrap">
				<table class="guide-table">
					<thead><tr><th>Symptom</th><th>First check</th><th>Next action</th></tr></thead>
					<tbody>
						<tr><td>FPS drops while turning</td><td>Resolution, shadows, overlays</td><td>Lower visual load and retest same route</td></tr>
						<tr><td>Stutter during paint prep</td><td>Background apps and browser video</td><td>Close capture/browser load before changing controls</td></tr>
						<tr><td>Lag in a full lobby</td><td>Host connection and player count</td><td>Test a smaller private room on an official map</td></tr>
						<tr><td>Only custom maps lag</td><td>Workshop item complexity</td><td>Switch to official maps, then re-add custom maps one by one</td></tr>
					</tbody>
				</table>
			</div>

			<h3>Low FPS and lag fixes</h3>
			<p>
				If the question is "why is MECCHA CHAMELEON so laggy", do not assume one cause. Use a split test. If a solo or private official
				map is smooth but a public room is bad, suspect host/network/player-count conditions. If every map stutters, suspect local
				settings, drivers, overlays, or thermal throttling.
			</p>
			<div class="guide-callout"><p><strong>Testing rule:</strong> keep one repeatable route. Walk the same room, turn the same camera angle, and compare only one setting change.</p></div>

			${guideBodyBannerHtml}

			<h2>Crash fixes</h2>
			<h3>Crash on launch or mid-game</h3>
			<p>
				Crash timing matters. Launch crashes usually point at drivers, corrupt local files, permissions, or incompatible overlays.
				Mid-game crashes often correlate with custom maps, full lobbies, alt-tab behavior, recording tools, or memory pressure.
			</p>
			<ol class="guide-steps guide-steps--compact">
				<li><strong>Verify game files.</strong> Do this before reinstalling or deleting settings.</li>
				<li><strong>Update GPU drivers.</strong> DirectX compatibility is a hard baseline for this game.</li>
				<li><strong>Disable overlays temporarily.</strong> Steam overlay, Discord overlay, capture software, and FPS counters are common variables.</li>
				<li><strong>Remove Workshop variables.</strong> Test on an official map before blaming the whole install.</li>
				<li><strong>Lower graphics load and restart.</strong> If the crash follows heavy maps or long sessions, reduce load first.</li>
			</ol>

			<h3>Keeps crashing after settings changes</h3>
			<p>
				If the game keeps crashing after you changed settings, roll back to a known-clean state. Reopen the <a href="/guides/meccha-chameleon-controls-settings">controls and settings guide</a>
				only after the crash stops; control remaps and performance fixes should not be debugged together.
			</p>
			<div class="guide-table-wrap">
				<table class="guide-table">
					<thead><tr><th>Repeat-crash pattern</th><th>Likely variable</th><th>Recovery step</th></tr></thead>
					<tbody>
						<tr><td>Crashes after changing visuals</td><td>Unstable graphics setting or driver path</td><td>Reset to conservative settings and restart</td></tr>
						<tr><td>Crashes only in friend rooms</td><td>Host, map, or lobby state</td><td>Use <a href="/guides/meccha-chameleon-multiplayer-friends-guide">multiplayer setup</a> with an official map</td></tr>
						<tr><td>Crashes only on custom maps</td><td>Workshop item issue</td><td>Unsubscribe/reload the map, then test another item</td></tr>
						<tr><td>Crashes after alt-tab or recording</td><td>Overlay or capture conflict</td><td>Run borderless/fullscreen consistently and disable capture tools</td></tr>
					</tbody>
				</table>
			</div>

			<h2>Performance FAQ</h2>
			<div class="guide-reference">
				<div class="guide-reference-item"><span class="guide-reference-key">Minimum PC?</span><span class="guide-reference-value">Windows 10 64-bit, Intel Core i5 class CPU, and DirectX 11 or 12 compatible graphics.</span></div>
				<div class="guide-reference-item"><span class="guide-reference-key">Low FPS?</span><span class="guide-reference-value">Test an official map, lower visual load, close overlays, and compare one repeatable route.</span></div>
				<div class="guide-reference-item"><span class="guide-reference-key">Crashing?</span><span class="guide-reference-value">Verify files, update GPU drivers, remove overlays, then isolate Workshop maps and full-lobby variables.</span></div>
				<div class="guide-reference-item"><span class="guide-reference-key">Next read</span><span class="guide-reference-value">Use <a href="/guides/meccha-chameleon-how-to-play">How to Play</a> for match basics or <a href="/online">Online</a> for lobby setup checks.</span></div>
			</div>
		</div>
		`,
	},
];
