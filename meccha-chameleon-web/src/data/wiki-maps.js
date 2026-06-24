// Camouflage map notes — scene-reading focus (landmarks from official stage layouts).
export const wikiMaps = [
	{
		id: 1,
		title: 'MECCHA CHAMELEON Penguin Hotel — Map Reading Guide',
		description:
			'Large hotel complex with a chaotic penguin ballroom, upper mezzanine, plush rooms, and connector hallways — strong for indoor scale and repeated décor reading.',
		publishDate: '2026-06-13',
		imageUrl: '/camouflage-guides/penguin-hotel/01.jpg',
		imageAlt: 'Penguin Hotel ballroom scene in MECCHA CHAMELEON',
		addressBar: 'penguin-hotel',
		tag: 'Official map',
		seo: {
			title: 'Penguin Hotel Map Guide | MECCHA CHAMELEON',
			description:
				'Penguin Hotel map reading for MECCHA CHAMELEON: ballroom sightlines, plush clusters, mezzanine checks, v1.4.0 expansion routes, and scene-reading drills for Hiders and Seekers.',
			keywords:
				'meccha chameleon penguin hotel, map reading, ballroom hide, plush room, indoor map guide, v1.4.0 expansion',
		},
		overview:
			'Penguin Hotel plays like a multi-room mansion: a busy central ballroom, a second-floor overlook, side bedrooms, and narrow hallways between zones. v1.2.0 added the map and v1.4.0 expanded layout connections — retest old clips before you treat any route as permanent.',
		practice:
			'Pick one room family per round — ballroom clutter, plush shelves, or hallway trim — then commit to pose height before colour. The ballroom rewards low silhouettes against plush rows; hallways reward continuing one wall rhythm.',
		seeker:
			'Sweep the ballroom perimeter first, then the mezzanine sightline down into the floor. In connectors, compare object spacing at both ends of the hall — a Hider often breaks rhythm in the middle third.',
		caution:
			'v1.8.0 fixed an Osaka gap, not Penguin Hotel layout — but any expansion patch can shift sightlines. Walk the current build once before copying a shared clip.',
		landmarks: [
			{
				landmark: 'Penguin ballroom floor',
				hider: 'Can the pose stay below plush or balloon height from the main entrance?',
				seeker: 'Does one cluster have an extra vertical shape among plushies or statues?',
				confidence: 'Route prompt',
			},
			{
				landmark: 'Upper mezzanine',
				hider: 'Does the silhouette match table or dice-block scale from below?',
				seeker: 'Is there a body-width gap in the railing line or table row?',
				confidence: 'Practice note',
			},
			{
				landmark: 'Plush storage room',
				hider: 'Can you match one bookcase or plush tone instead of mixing shelf colours?',
				seeker: 'Does one plush row gain an object with the wrong depth?',
				confidence: 'Route prompt',
			},
			{
				landmark: 'Bedroom side room',
				hider: 'Can the outline fit under the bed line or desk height?',
				seeker: 'Does the bathroom or bed edge show a human-scale interruption?',
				confidence: 'Practice note',
			},
			{
				landmark: 'Connector hallway',
				hider: 'Can the pose follow one wall direction without blocking the corridor width?',
				seeker: 'Does colour continue but spacing breaks between props?',
				confidence: 'Practice note',
			},
		],
		gallery: { folder: 'penguin-hotel', count: 8 },
		screenshotTips: [
			'Balloon and plush zones need value matching, not just hue — a near-correct blue can still read as a dark cutout.',
			'Mezzanine hides fail when the head rises above the table line seen from the floor spawn.',
			'Hallway props work when you continue one trim colour; mixing both wall tones exposes the outline first.',
		],
	},
	{
		id: 2,
		title: 'MECCHA CHAMELEON Sugarland — Bright-Surface Practice Guide',
		description:
			'Oversized candy stage with gumdrop piles, gingerbread rows, and harsh bright light — practice value control and low silhouettes under colourful scenery.',
		publishDate: '2026-06-18',
		imageUrl: '/camouflage-guides/sugarland/01.webp',
		imageAlt: 'Sugarland candy-themed map in MECCHA CHAMELEON',
		addressBar: 'sugarland',
		tag: 'Official map',
		seo: {
			title: 'Sugarland Camouflage Guide | MECCHA CHAMELEON',
			description:
				'Sugarland map reading for MECCHA CHAMELEON: candy-field colour choices, gumdrop scale, gingerbread silhouette checks, and bright-light drills for Hiders and Seekers.',
			keywords:
				'meccha chameleon sugarland, bright map guide, candy land, camouflage practice, gumdrop hide, official map',
		},
		overview:
			'Sugarland is a large, saturated candy environment — gumdrops, gingerbread walls, chocolate hills, and open centre piles. Bright lighting punishes flat one-colour paint and exposed limbs; local shadow sampling matters more than picking a favourite candy colour.',
		practice:
			'Start on one broad candy plane (mountain face, house wall, or gumdrop pile) and build a low wide silhouette. Add a shadow Spoid from the same material before any stripe or sprinkle detail.',
		seeker:
			'Ignore loud hues at first — compare scale on gumdrop piles and house roof lines. A convincing palette still fails when the outline adds height in a flat field.',
		caution:
			'Added in v1.4.0 alongside Penguin Hotel expansion. Treat viral “perfect candy” clips as ideas to test, not fixed coordinates.',
		landmarks: [
			{
				landmark: 'Candy houses & chocolate hill',
				hider: 'Can the pose match roof or wall height from the approach angle?',
				seeker: 'Is there an extra block breaking the roof rhythm?',
				confidence: 'Route prompt',
			},
			{
				landmark: 'Centre gumdrop piles',
				hider: 'Can the body read as one mound scale, not a standing shape?',
				seeker: 'Does one pile have the wrong width or height in the row?',
				confidence: 'Route prompt',
			},
			{
				landmark: 'Tall corner locker',
				hider: 'Can you stay low beside the locker instead of mimicking its full height?',
				seeker: 'Does a vertical edge appear where the locker row stays flat?',
				confidence: 'Practice note',
			},
			{
				landmark: 'White cake & tree',
				hider: 'Can the outline follow the trunk line or cake tier, not float above it?',
				seeker: 'Does the tree crown or cake top gain a human-width bump?',
				confidence: 'Route prompt',
			},
			{
				landmark: 'Gingerbread house row',
				hider: 'Can you fit between house widths without adding a new “building” shape?',
				seeker: 'Is one gap in the row unusually wide or tall?',
				confidence: 'Practice note',
			},
		],
		screenshotTips: [
			'Bright maps expose limb edges before hue errors — check hands and feet against the local value.',
			'Chocolate and gingerbread are separate material families; do not Spoid across both in one hide.',
			'Centre piles draw Seeker attention — succeed with scale first, not with louder paint.',
		],
		gallery: { folder: 'sugarland', count: 4, ext: 'webp' },
	},
	{
		id: 3,
		title: 'MECCHA CHAMELEON Backrooms — Current-Build Checklist',
		description:
			'Yellow-wall office homage with furniture clusters, party hallways, and a broken highway segment — repetition, shadow edges, and post-v1.2.0 exploit awareness.',
		publishDate: '2026-06-13',
		imageUrl: '/camouflage-guides/backrooms/01.jpg',
		imageAlt: 'Backrooms yellow corridor scene in MECCHA CHAMELEON',
		addressBar: 'backrooms',
		tag: 'Official map',
		seo: {
			title: 'Backrooms Map Checklist | MECCHA CHAMELEON',
			description:
				'Backrooms map reading for MECCHA CHAMELEON: repeating panels, furniture clusters, party hallway rhythm, highway props, and v1.2.0 wall-stuck changes.',
			keywords:
				'meccha chameleon backrooms, v1.2.0 map guide, yellow walls, office hide, scene reading, wall stuck fix',
		},
		overview:
			'Backrooms mixes off-yellow wallpaper, office furniture, party décor, and a broken road segment with police props. v1.2.0 adjusted wall-stuck behaviour — pre-patch exploit clips are historical, but the map still teaches strong repetition reading.',
		practice:
			'Use repeating panels and trash lines to practice restraint: continue one visual rhythm instead of adding a new body-shaped interruption. Sample shadow on the wall beside your pose, not from the brighter centre of a room.',
		seeker:
			'Walk panel lines and furniture heights from a consistent angle. Repetition exposes spacing errors faster than colour mistakes in yellow rooms.',
		caution:
			'Office corners can look tight but still fit a low pose — test in a private round instead of assuming a clip still works after layout or patch changes.',
		landmarks: [
			{
				landmark: 'Chair, ladder & drawer cluster',
				hider: 'Can the pose stay below the furniture line and use local shadow?',
				seeker: 'Does one object in the cluster have the wrong height or smoothness?',
				confidence: 'Route prompt',
			},
			{
				landmark: 'Trash wall corners',
				hider: 'Can the outline continue the trash line instead of bulging outward?',
				seeker: 'Does the trash edge gain a vertical break?',
				confidence: 'Practice note',
			},
			{
				landmark: 'Office cubicle corners',
				hider: 'Can the body fit the cubicle width without a standing silhouette?',
				seeker: 'Is there an extra column shape in a row of partitions?',
				confidence: 'Route prompt',
			},
			{
				landmark: 'Birthday party hallway',
				hider: 'Can the pose match balloon or chair scale rather than mimicking every cake colour?',
				seeker: 'Does one balloon or chair break the row rhythm?',
				confidence: 'Practice note',
			},
			{
				landmark: 'Broken highway & police cars',
				hider: 'Can the outline follow vehicle height or road edge, not float above the asphalt?',
				seeker: 'Does a car roofline or barrier show a human-width bump?',
				confidence: 'Route prompt',
			},
		],
		gallery: { folder: 'backrooms', count: 15 },
		screenshotTips: [
			'Yellow walls need shadow-side Spoid — flat wallpaper colour reads darker than you expect under room light.',
			'Party hallway props reward compact poses; standing height exposes you before paint detail helps.',
			'Highway props are strong Seeker magnets — succeed with edge alignment, not with perfect police-car colour.',
		],
	},
	{
		id: 4,
		title: 'MECCHA CHAMELEON Mansion — Indoor Route Note',
		description:
			'Hide-and-Seek Mansion with a central ballroom, study library, storage rooms, and side salons — busy indoor sightlines and furniture-scale silhouettes.',
		publishDate: '2026-06-09',
		imageUrl: '/camouflage-guides/mansion/01.jpg',
		imageAlt: 'Mansion ballroom scene in MECCHA CHAMELEON',
		addressBar: 'mansion',
		tag: 'Official map',
		seo: {
			title: 'Mansion Map Reading Note | MECCHA CHAMELEON',
			description:
				'Mansion map reading for MECCHA CHAMELEON: ballroom sweeps, study shadows, storage clutter, bookcase rhythm, and furniture-scale drills for both roles.',
			keywords:
				'meccha chameleon mansion map, hide and seek mansion, ballroom hide, study library, indoor camouflage, scene reading',
		},
		overview:
			'The Hide-and-Seek Mansion splits into a hectic central ballroom and quieter side rooms — study, storage, and mixed salon spaces. It is easy to get lost as a Hider, which makes deliberate spot choice more important than roaming.',
		practice:
			'Pick one wing per round. In the ballroom, commit to corner or ceiling-adjacent height early; in the study, rely on shadow between shelves before adding book-spine detail.',
		seeker:
			'Clear the ballroom last if your group tends to crowd there — side rooms often hold compact silhouettes that match shelf or tile rhythm better than centre-floor blobs.',
		caution:
			'Small side rooms feel safe but offer fewer escape angles — choose them only when prep time is enough for pose and two-tone paint.',
		landmarks: [
			{
				landmark: 'Main ballroom',
				hider: 'Can the pose stay below chair or balloon height from the main door sightline?',
				seeker: 'Does the floor or ceiling line show an extra vertical shape?',
				confidence: 'Route prompt',
			},
			{
				landmark: 'Study library',
				hider: 'Can the silhouette match shelf height and one wood tone?',
				seeker: 'Does one bookcase row contain an extra divider?',
				confidence: 'Route prompt',
			},
			{
				landmark: 'Study chair corner',
				hider: 'Can the body fit under or beside the chair back from the entry angle?',
				seeker: 'Does the chair outline gain a second vertical edge?',
				confidence: 'Practice note',
			},
			{
				landmark: 'Storage & trash room',
				hider: 'Can you match one clutter family instead of painting every object colour?',
				seeker: 'Is there one box or bag with the wrong scale?',
				confidence: 'Practice note',
			},
			{
				landmark: 'Salon across from bathroom',
				hider: 'Can vase or bookcase height constrain the pose before paint?',
				seeker: 'Does a narrow room show a body-width object among thin props?',
				confidence: 'Practice note',
			},
		],
		gallery: { folder: 'mansion', count: 19 },
		screenshotTips: [
			'Ballroom centre hides need low width first — colour matching a chair back fails if the head stays too tall.',
			'Study shadows change by shelf row; Spoid from the row beside your final pose, not the lit aisle.',
			'Storage rooms punish multi-colour paint — one material family survives longer in a slow Seeker sweep.',
		],
	},
	{
		id: 5,
		title: 'MECCHA CHAMELEON Indoor Country — Pose Practice',
		description:
			'Barnyard diorama with hay bales, horse standees, pumpkin patches, and centre balloons — compact map, strong prop-scale training.',
		publishDate: '2026-06-09',
		imageUrl: '/camouflage-guides/indoor-country/01.jpg',
		imageAlt: 'Indoor Country barnyard props in MECCHA CHAMELEON',
		addressBar: 'indoor-country',
		tag: 'Official map',
		seo: {
			title: 'Indoor Country Map Note | MECCHA CHAMELEON',
			description:
				'Indoor Country map reading for MECCHA CHAMELEON: hay bale scale, horse standee silhouettes, pumpkin patch rhythm, and open-layout pose drills.',
			keywords:
				'meccha chameleon indoor country, farm map, hay bale hide, horse statue, pumpkin patch, pose scale',
		},
		overview:
			'Indoor Country simulates an outdoor barnyard indoors — cows, horse statues, hay, pumpkins, and fence lines in a relatively open floor plan. It feels smaller than hotel or mansion maps, so scale mistakes show up quickly.',
		practice:
			'Work shape before colour: decide whether the body should read as hay-width, standee-height, or pumpkin-low before opening paint. Round props need rounded poses, not standing outlines.',
		seeker:
			'Check obvious prop magnets — hay stacks and horse clusters — but compare neighbour scale, not just colour. Open layouts expose tall silhouettes from multiple angles.',
		caution:
			'Centre balloons and hay piles draw attention; they are fine practice zones if the pose matches object height, not if you only match orange hue.',
		landmarks: [
			{
				landmark: 'Hay, pumpkin & crate corner',
				hider: 'Can the pose fit between bales without adding height above the stack?',
				seeker: 'Does one bale or crate break the stack outline?',
				confidence: 'Route prompt',
			},
			{
				landmark: 'Horse standee row',
				hider: 'Can the body match standee width and height from the main approach?',
				seeker: 'Is there an extra vertical at a statue gap?',
				confidence: 'Route prompt',
			},
			{
				landmark: 'Pumpkin patch',
				hider: 'Can the silhouette read as low and round among the patch rhythm?',
				seeker: 'Does one “pumpkin” have the wrong height or width?',
				confidence: 'Practice note',
			},
			{
				landmark: 'Large hay pile',
				hider: 'Can you align with the pile edge instead of sitting on top of it?',
				seeker: 'Does the pile show a smooth human-shaped bump?',
				confidence: 'Route prompt',
			},
			{
				landmark: 'Centre balloon line',
				hider: 'Can balloon colour and string height match without floating above the line?',
				seeker: 'Does one balloon break the horizontal rhythm?',
				confidence: 'Practice note',
			},
		],
		gallery: { folder: 'indoor-country', count: 17 },
		screenshotTips: [
			'Hay and crate corners reward low curl poses — standing torsos read instantly in an open barn floor.',
			'Horse standees are scale references: match width before copying brown tones from another corner.',
			'Pumpkin patches fail when the head rises above the patch line — check from the spawn sightline.',
		],
	},
	{
		id: 6,
		title: 'MECCHA CHAMELEON Sewer — Shadow Practice',
		description:
			'Underground industrial stage with lockers, flooded graffiti blocks, canister piles, and dim overhead light — shadow sampling and line-following poses.',
		publishDate: '2026-06-09',
		imageUrl: '/camouflage-guides/sewer/01.jpg',
		imageAlt: 'Sewer industrial tunnel scene in MECCHA CHAMELEON',
		addressBar: 'sewer',
		tag: 'Official map',
		seo: {
			title: 'Sewer Map Reading Note | MECCHA CHAMELEON',
			description:
				'Sewer map reading for MECCHA CHAMELEON: locker rows, flooded graffiti zones, canister piles, pipe lines, and low-light shadow drills for Hiders and Seekers.',
			keywords:
				'meccha chameleon sewer map, locker hide, graffiti wall, industrial camouflage, shadow practice, pipe line',
		},
		overview:
			'Sewer is a darker map with open centre piles, side locker rooms, flooded graffiti areas, and vending-machine zones. Many spots feel exposed, but poor lighting rewards correct local shade and line-following silhouettes.',
		practice:
			'Sample shadow from the surface beside your final pose — borrowing grey from a lit tunnel mouth creates a crisp edge. Pipes and locker rows work when the body extends the line instead of hanging below it.',
		seeker:
			'Sweep centre canister piles and locker banks from consistent heights. Motion and broken lines beat guessing dark colour from a distance.',
		caution:
			'Ceiling-adjacent pipe hides need angle checks from the main route — third-person prep can look fine while the Seeker approach reads a hanging outline.',
		landmarks: [
			{
				landmark: 'Centre canister & sandbag pile',
				hider: 'Can the pose match container height beside the wall stack?',
				seeker: 'Does one canister or bag read as the wrong scale?',
				confidence: 'Route prompt',
			},
			{
				landmark: 'Tea-pot lit nook',
				hider: 'Can a creative pose use the odd light falloff without standing in open floor?',
				seeker: 'Does the lit zone show a body-shaped value jump?',
				confidence: 'Practice note',
			},
			{
				landmark: 'Locker room rows',
				hider: 'Can the silhouette fit one locker door rhythm under overhead light?',
				seeker: 'Does one locker gap look wider or taller than its neighbours?',
				confidence: 'Route prompt',
			},
			{
				landmark: 'Flooded graffiti blocks',
				hider: 'Can paint follow graffiti plane direction with a shadow Spoid from the wet wall?',
				seeker: 'Does one block lose texture and gain a smooth human edge?',
				confidence: 'Practice note',
			},
			{
				landmark: 'Gas barrels & vending row',
				hider: 'Can the pose align with barrel height or pipe direction on the ceiling plane?',
				seeker: 'Is there an extra cylinder shape or pipe break in the run?',
				confidence: 'Route prompt',
			},
		],
		gallery: { folder: 'sewer', count: 18 },
		screenshotTips: [
			'Locker rooms need overhead-light awareness — sample shadow under the lamp, not from the tunnel entrance.',
			'Graffiti blocks tempt busy paint; one plane and one shadow tone beat copied tag colours.',
			'Pipe runs only work when the pose continues the line; dangling below the pipe is an instant tell.',
		],
	},
	{
		id: 7,
		title: 'MECCHA CHAMELEON Osaka — Compact City Route Note',
		description:
			'Smallest official stage in the roster — truck yard, overhead signs, shop fronts, trash piles, and walled corners; added in v1.7.0, retest after v1.8.0 fixes.',
		publishDate: '2026-06-22',
		imageUrl: '/camouflage-guides/osaka/01.webp',
		imageAlt: 'Osaka city map scene in MECCHA CHAMELEON',
		addressBar: 'osaka',
		tag: 'Official map',
		seo: {
			title: 'Osaka Map Reading Guide | MECCHA CHAMELEON',
			description:
				'Osaka map reading for MECCHA CHAMELEON: compact city sightlines, truck shadow hides, overhead sign scale, shop-front planes, trash-statue corners, and v1.7.0 route drills.',
			keywords:
				'meccha chameleon osaka map, city map guide, truck hide, octopus statue, v1.7.0, compact map reading',
		},
		overview:
			'Osaka is the smallest official map — tight city blocks, a truck yard, overhead signage, open shop faces, and stacked corner clutter. Less space means fewer forgiving angles; spot choice and shadow matter more than decorative paint.',
		practice:
			'Commit early. Use truck shadow, shop-wall planes, or corner crate stacks — avoid roaming because the map punishes indecision. Vertical sign zones need height checks from the ground spawn, not just from third person.',
		seeker:
			'Clear open truck and shop fronts first, then overhead sightlines from the far approach. Small maps loop quickly — a second pass from the reverse alley angle catches outline tells.',
		caution:
			'v1.8.0 fixed an out-of-bounds gap on Osaka — retest any clip from before that patch. Walled corners with plywood and trash cans change quickly with updates.',
		landmarks: [
			{
				landmark: 'Truck yard & partial wall',
				hider: 'Can the pose fit bed or undercarriage shadow from the main open side?',
				seeker: 'Does the truck silhouette gain a box taller than the bed line?',
				confidence: 'Route prompt',
			},
			{
				landmark: 'Overhead signs & octopus wall',
				hider: 'Can height match sign or mural scale without floating below the mount line?',
				seeker: 'Does a sign panel show a body-shaped interruption?',
				confidence: 'Practice note',
			},
			{
				landmark: 'Open shop fronts',
				hider: 'Can one wall plane cover the torso before adding fan or crate detail?',
				seeker: 'Does a shop face show the wrong depth beside crates or fans?',
				confidence: 'Route prompt',
			},
			{
				landmark: 'Trash bags & downed statues',
				hider: 'Can a low pose read as bag or statue scale on the ground plane?',
				seeker: 'Does one bag cluster have the wrong height in a flat row?',
				confidence: 'Practice note',
			},
			{
				landmark: 'Walled corner stacks',
				hider: 'Can plywood or crate edges constrain width before paint detail?',
				seeker: 'Does the stack line break with an extra vertical gap?',
				confidence: 'Route prompt',
			},
		],
		screenshotTips: [
			'Compact maps expose late spot changes — commit within the first seconds of prep.',
			'Truck shadows need sampling from the bed plane, not the brighter asphalt nearby.',
			'Overhead zones fail when feet or legs hang below the sign line seen from the street approach.',
		],
		gallery: { folder: 'osaka', count: 4, ext: 'webp' },
	},
];
