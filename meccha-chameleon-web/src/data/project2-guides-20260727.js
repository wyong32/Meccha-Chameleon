// Project2 guide additions for the 2026-07-27 publishing batch.

const systemRequirementsImage = '/images/guides/meccha-system-requirements-steam-header.jpg';
const systemRequirementsHeroImage = '/images/guides/meccha-system-requirements-steam-hero.jpg';
const onlineFixImage = '/images/guides/meccha-online-fix-steam-screenshot.jpg';

const guideBodyBannerHtml = `
			<!-- Affiliate ad disabled for now; keep this block for future reuse.
			<aside class="affiliate-ad-slot" data-affiliate-ad="banner" aria-label="Advertisement">
				<span class="affiliate-ad-slot__label">Advertisement</span>
				<div class="affiliate-ad-slot__frame" data-affiliate-ad-frame></div>
			</aside>
			-->
			<div data-gpt-banner-anchor></div>
`;

export const project2Guides20260727 = [
	{
		id: 11,
		title: 'MECCHA CHAMELEON System Requirements Guide: PC Specs, Game Size, and Storage',
		h1: 'MECCHA CHAMELEON System Requirements and Game Size',
		description:
			'Check MECCHA CHAMELEON PC requirements, Windows specs, DirectX GPU baseline, game-size questions, and safe storage checks.',
		publishDate: '2026-07-27',
		imageUrl: systemRequirementsImage,
		imageAlt: 'MECCHA CHAMELEON system requirements guide with PC specs game size and storage checks',
		addressBar: 'meccha-chameleon-system-requirements-size',
		tag: ['System Requirements', 'PC Specs', 'Storage', 'Game Size', 'Windows', 'Steam'],
		seo: {
			title: 'MECCHA CHAMELEON Specs and Game Size Guide',
			description:
				'Check MECCHA CHAMELEON PC specs, Windows requirements, DirectX GPU baseline, game-size questions, and storage checks.',
			keywords: 'MECCHA CHAMELEON system requirements, game size, GB, PC specs',
		},
		detailsHtml: `
		<div class="guide-content">
			<div class="guide-summary">
				<p class="guide-summary-label">Fast answer</p>
				<p>
					The current official Steam requirement baseline is simple: <strong>Windows 10 64-bit</strong>,
					an <strong>Intel Core i5-class CPU</strong>, and a <strong>DirectX 11 or DirectX 12 compatible graphics card</strong>.
					Steam's public store page does not expose a reliable storage-GB field for MECCHA CHAMELEON, so answer "how many GB"
					by checking the Steam install prompt or Library storage view before downloading. Do not use random "size" pages as install proof.
				</p>
			</div>

			<figure class="guide-media">
				<img src="${systemRequirementsImage}" alt="MECCHA CHAMELEON system requirements PC specs and game size guide" title="MECCHA CHAMELEON system requirements and game size" loading="lazy" />
				<figcaption>Specs are a launch baseline, not a performance promise. Test on an official map before blaming the install.</figcaption>
			</figure>

			<h2>PC requirements</h2>
			<h3>System requirements parent query</h3>
			<p>
				Use the requirements table as a gate check. If the PC fails the OS or DirectX baseline, do not spend time tuning paint,
				controls, Workshop maps, or lobbies yet. If the PC clears the baseline but still feels unstable, move to the
				<a href="/guides/meccha-chameleon-settings-crash-fps-fix-guide">FPS and crash fix guide</a> and test one variable at a time.
			</p>
			<div class="guide-table-wrap">
				<table class="guide-table">
					<thead><tr><th>Requirement area</th><th>Current official baseline</th><th>What it means in practice</th></tr></thead>
					<tbody>
						<tr><td>Operating system</td><td>Windows 10 64-bit</td><td>Use a supported 64-bit Windows install before debugging launch failure.</td></tr>
						<tr><td>CPU</td><td>Intel Core i5 class</td><td>Close browser video, capture tools, and heavy launchers before testing weak CPUs.</td></tr>
						<tr><td>GPU</td><td>DirectX 11 or DirectX 12 compatible graphics card</td><td>Old drivers or unsupported GPUs can look like a game bug.</td></tr>
						<tr><td>Platform</td><td>PC via Steam</td><td>Use Steam as the source of truth for install, updates, Workshop, and cloud status.</td></tr>
					</tbody>
				</table>
			</div>
			<p>
				For gameplay setup after the PC passes the gate, start with <a href="/guides/meccha-chameleon-how-to-play">rules and mechanics</a>,
				then use <a href="/guides/meccha-chameleon-controls-settings">controls and settings</a> if input feels wrong.
			</p>

			<h3>PC storage and GB questions</h3>
			<p>
				For "MECCHA CHAMELEON GB", "how big is MECCHA CHAMELEON", and "how much GB is MECCHA CHAMELEON", the clean answer is:
				<strong>verify the live Steam install size before downloading</strong>. The public Steam requirements block gives OS/CPU/GPU,
				but not a durable storage number. Download size and installed size can also differ after patches, shader cache, Workshop maps,
				and save/cloud files.
			</p>
			<ol class="guide-steps guide-steps--compact">
				<li><strong>Open Steam.</strong> Use the real Steam client, not a mirror or keyshop page.</li>
				<li><strong>Open the install prompt.</strong> Steam shows required disk space before install starts.</li>
				<li><strong>After install, check Library storage.</strong> Steam Library > game page > Manage / Installed Files gives the current local footprint.</li>
				<li><strong>Leave headroom.</strong> Keep extra space for patches, Workshop maps, screenshots, and shader/cache files.</li>
			</ol>
			<div class="guide-callout">
				<p><strong>Storage rule:</strong> if you are close to full disk, free space first. A tiny multiplayer game can still fail updates when Steam has no patch staging space.</p>
			</div>

			${guideBodyBannerHtml}

			<h2>Game size variants</h2>
			<h3>Size and game-size variants</h3>
			<p>
				"Mecha chameleon size", "Meccha Chameleon game size", and "mecha chameleon size game" are spelling variants of the same setup
				question. Do not split them into separate answers. The only stable distinction is <strong>download size</strong> versus
				<strong>installed size</strong>.
			</p>
			<figure class="guide-media">
				<img src="${systemRequirementsHeroImage}" alt="MECCHA CHAMELEON game size guide for Steam install storage and low spec PC setup" title="MECCHA CHAMELEON Steam game size and storage guide" loading="lazy" />
				<figcaption>Game-size searches are setup checks. Use Steam's live install prompt, then leave patch space.</figcaption>
			</figure>
			<div class="guide-table-wrap">
				<table class="guide-table">
					<thead><tr><th>Player search</th><th>Answer lane</th><th>Best verification</th></tr></thead>
					<tbody>
						<tr><td>How big is MECCHA CHAMELEON?</td><td>Install size</td><td>Steam install prompt or Library storage view.</td></tr>
						<tr><td>How much GB is MECCHA CHAMELEON?</td><td>Disk-space readiness</td><td>Check free disk plus update headroom.</td></tr>
						<tr><td>MECCHA CHAMELEON requirements</td><td>PC spec gate</td><td>Windows 10 64-bit, i5-class CPU, DirectX 11/12 GPU.</td></tr>
						<tr><td>Can low-spec PCs run it?</td><td>Baseline plus practical test</td><td>Official map, no overlays, conservative visuals.</td></tr>
					</tbody>
				</table>
			</div>
			<p>
				If the game launches but drops frames, do not reinstall. Use <a href="/guides/meccha-chameleon-settings-crash-fps-fix-guide">settings, FPS, lag, and crash fixes</a>
				before touching your install path. If the problem is online lobby behavior instead, go to the <a href="/guides/meccha-chameleon-online-fix-troubleshooting">online fix guide</a>.
			</p>

			<h2>Requirements FAQ</h2>
			<div class="guide-reference">
				<div class="guide-reference-item"><span class="guide-reference-key">How many GB is MECCHA CHAMELEON?</span><span class="guide-reference-value">Steam's public page does not expose a stable storage GB field. Check the live Steam install prompt and leave patch headroom.</span></div>
				<div class="guide-reference-item"><span class="guide-reference-key">Can low-spec PCs run MECCHA CHAMELEON?</span><span class="guide-reference-value">Only if they clear Windows 10 64-bit, Intel Core i5-class CPU, and DirectX 11/12 GPU baseline. Test official maps before Workshop maps.</span></div>
				<div class="guide-reference-item"><span class="guide-reference-key">Is it a computer game?</span><span class="guide-reference-value">Yes. Treat the current official release as a PC Steam game for setup and update checks.</span></div>
			</div>
		</div>
		`,
	},
	{
		id: 10,
		title: 'MECCHA CHAMELEON Online Fix and Launch Troubleshooting Guide',
		h1: 'MECCHA CHAMELEON Online Fix and Launch Troubleshooting',
		description:
			'Fix MECCHA CHAMELEON online and launch issues with safe Steam update checks, lobby triage, PC context, and no mirror downloads.',
		publishDate: '2026-07-27',
		imageUrl: onlineFixImage,
		imageAlt: 'MECCHA CHAMELEON online fix and launch troubleshooting guide using official Steam game scene',
		addressBar: 'meccha-chameleon-online-fix-troubleshooting',
		tag: ['Online Fix', 'Troubleshooting', 'Launch', 'Updates', 'Steam', 'Safety'],
		seo: {
			title: 'MECCHA CHAMELEON Online Fix Guide',
			description:
				'Fix MECCHA CHAMELEON online and launch issues with safe Steam update checks, lobby triage, PC context, and no mirror downloads.',
			keywords: 'MECCHA CHAMELEON online fix, update, online, launch troubleshooting',
		},
		detailsHtml: `
		<div class="guide-content">
			<div class="guide-summary">
				<p class="guide-summary-label">Fast answer</p>
				<p>
					Do not download "online fix" executables. MECCHA CHAMELEON online problems should be handled through Steam:
					update the game, verify files, test an official map, separate host/lobby symptoms from local launch failure, then check
					Workshop variables. The official Steam feature set includes online PvP, public/private lobbies, Steam Workshop, and Steam Cloud,
					so use those official systems before trusting any mirror.
				</p>
			</div>

			<figure class="guide-media">
				<img src="${onlineFixImage}" alt="MECCHA CHAMELEON online fix troubleshooting guide for Steam updates lobbies and launch issues" title="MECCHA CHAMELEON online fix and launch troubleshooting" loading="lazy" />
				<figcaption>Online failures are easier to solve when you split the symptom: update, launch, lobby, host, map, or account/source.</figcaption>
			</figure>

			<h2>Online fix intent</h2>
			<h3>Online fix keyword</h3>
			<p>
				"Online fix" is a risky search phrase because many results use it to push cracked multiplayer patches or unofficial executables.
				For MECCHA CHAMELEON, treat it as a troubleshooting query only. If a page asks you to replace DLLs, bypass Steam, disable
				security tools, or log into a non-Steam launcher, close it.
			</p>
			<div class="guide-table-wrap">
				<table class="guide-table">
					<thead><tr><th>Safe fix lane</th><th>What to do</th><th>What to avoid</th></tr></thead>
					<tbody>
						<tr><td>Update mismatch</td><td>Restart Steam, update the game, and rejoin with the same build.</td><td>Off-site patch zips.</td></tr>
						<tr><td>Corrupt files</td><td>Steam Library > Properties > Installed Files > Verify integrity.</td><td>Deleting random folders without backup.</td></tr>
						<tr><td>Lobby issue</td><td>Test public/private lobby state with an official map.</td><td>Assuming every disconnect is your PC.</td></tr>
						<tr><td>Workshop issue</td><td>Disable or unsubscribe from one suspect map, then retest.</td><td>Loading every custom map while debugging.</td></tr>
					</tbody>
				</table>
			</div>
			<p>
				If the issue is basic multiplayer setup, use the <a href="/online">online guide</a> or the
				<a href="/guides/meccha-chameleon-multiplayer-friends-guide">multiplayer and friends guide</a> first.
			</p>

			<h3>Online play symptoms</h3>
			<p>
				"MECCHA CHAMELEON online", "play online", and "game online" can mean several different failures. Classify the symptom before
				changing files.
			</p>
			<ol class="guide-steps guide-steps--compact">
				<li><strong>Cannot launch:</strong> treat it as local PC, file, driver, or overlay troubleshooting.</li>
				<li><strong>Cannot join a room:</strong> test invite privacy, room code, version match, and host state.</li>
				<li><strong>Disconnects mid-round:</strong> test host connection, player count, official maps, and background network load.</li>
				<li><strong>Only custom maps fail:</strong> isolate Steam Workshop content instead of reinstalling the game.</li>
				<li><strong>Only one friend fails:</strong> compare their update version and Steam connection before changing your settings.</li>
			</ol>

			${guideBodyBannerHtml}

			<h2>Updates and PC launch context</h2>
			<h3>Update checks</h3>
			<p>
				Update checks are not just housekeeping. A hide-and-seek multiplayer game can fail when one player has an older build, a Workshop
				item is stale, or Steam Cloud returns old state. Use this order:
			</p>
			<div class="guide-table-wrap">
				<table class="guide-table">
					<thead><tr><th>Step</th><th>Action</th><th>Pass condition</th></tr></thead>
					<tbody>
						<tr><td>1</td><td>Restart Steam and let downloads finish.</td><td>No pending MECCHA CHAMELEON update remains.</td></tr>
						<tr><td>2</td><td>Verify game files.</td><td>Steam reports files validated or repairs them cleanly.</td></tr>
						<tr><td>3</td><td>Launch without overlays or capture tools.</td><td>The game reaches menu/lobby without a crash.</td></tr>
						<tr><td>4</td><td>Use an official map in a private room.</td><td>Host and one friend can load, move, and finish a basic round.</td></tr>
						<tr><td>5</td><td>Re-add Workshop maps one at a time.</td><td>The failure returns only when a specific item is loaded.</td></tr>
					</tbody>
				</table>
			</div>
			<p>
				For version-history context, check the <a href="/updates">updates page</a>. For fake copies, APKs, and clones, use the
				<a href="/guides/meccha-chameleon-roblox-clones-similar-games">Roblox and clone search guide</a>.
			</p>

			<h3>Computer game confusion</h3>
			<p>
				Yes, MECCHA CHAMELEON should be treated as a computer game for this troubleshooting flow. The current official setup path is
				PC via Steam, not a browser-only build, Roblox game, APK, or console version. The site has a separate
				<a href="/play-game">browser practice</a> page, but that is only a warm-up tool and not the Steam game.
			</p>
			<div class="guide-callout">
				<p><strong>Source rule:</strong> if a fix does not start from Steam, assume it is unsafe until proven otherwise. Account credentials, replacement executables, and "free online fix" downloads are not troubleshooting steps.</p>
			</div>

			<h2>Online troubleshooting FAQ</h2>
			<div class="guide-reference">
				<div class="guide-reference-item"><span class="guide-reference-key">How do you fix MECCHA CHAMELEON online issues?</span><span class="guide-reference-value">Restart Steam, update the game, verify files, test an official map, then isolate host, lobby, and Workshop variables.</span></div>
				<div class="guide-reference-item"><span class="guide-reference-key">Should I download an online fix?</span><span class="guide-reference-value">No. Avoid cracked online-fix mirrors, DLL swaps, and unofficial executables. Use official Steam update and file checks.</span></div>
				<div class="guide-reference-item"><span class="guide-reference-key">Is MECCHA CHAMELEON a computer game?</span><span class="guide-reference-value">Yes. Treat the current official release as PC/Steam for setup, updates, lobbies, Workshop, and cloud checks.</span></div>
				<div class="guide-reference-item"><span class="guide-reference-key">Next read</span><span class="guide-reference-value">Use <a href="/guides/meccha-chameleon-system-requirements-size">system requirements and storage</a> if launch fails before online play starts.</span></div>
			</div>
		</div>
		`,
	},
];
