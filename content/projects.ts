import type { AssetPath } from '$app/types';

/**
 * ─── PROJECTS ───────────────────────────────────────────────────────────
 * Each block between { } is one project. To add one:
 *   1. Upload its PDF reports to `static/reports/` (and article images,
 *      if any, to `static/press/`).
 *   2. Copy an existing block, paste it at the TOP of the list, change it.
 *   3. Commit. The site rebuilds itself in about two minutes.
 *
 * Dates are written as 'YYYY-MM', e.g. '2025-07' for July 2025.
 * Lines marked "optional" can be deleted if you do not need them.
 * Put a word between asterisks to write it in italics: *Nemesis*.
 * ────────────────────────────────────────────────────────────────────────
 */

type YearMonth = `${number}-${number}`;

/**
 * A useful link: an external web address, a file inside `static/`,
 * or one or more images (e.g. newspaper pages) shown in a viewer on the page.
 */
export type ProjectLink =
	| { label: string; url: string }
	| { label: string; file: AssetPath }
	| { label: string; images: AssetPath[] };

export interface Project {
	/** Unique, lowercase, words separated by dashes. Becomes the page address. */
	id: string;
	/** Shown in the list on the homepage and as the title of the project page. */
	title: string;
	/** Month the project started, e.g. '2025-07'. Shown only in the homepage list. */
	start: YearMonth;
	/** Optional. Month it ended, or 'present'. Leave it out for a single-month project. */
	end?: YearMonth | 'present';
	/** General description of the project. One string per paragraph. */
	description: string[];
	/** Optional. Useful links: articles, competition website, repository... */
	links?: ProjectLink[];
	/** Optional. One or more PDF reports inside `static/reports/`. */
	reports?: { title: string; file: AssetPath }[];
}

export const projects: Project[] = [
	// ── TEST PROJECTS: only to preview the layout. Delete these four blocks. ──
	{
		id: 'State estimation and interception of a non-cooperative maneuvering target',
		title: 'State estimation and interception of a non-cooperative maneuvering target',
		start: '2025-09',
		end: 'present',
		description: [
			'Work in progress',
			'...'
		],
		// reports: [{ title: 'EuRoC Technical Report', file: 'reports/euroc-2025.pdf' }]
		//links: [
			//{ label: 'Example link one', url: 'https://example.com' },
			//{ label: 'Example link two', url: 'https://example.org' }
		//]
	},
	{
		id: 'Active Airbrake Controll for Atlas Sounding Rocket',
		title: 'Active Airbrake Controll for Atlas Sounding Rocket',
		start: '2025-10',
		end: '2026-10',
		description: [
			'Work in progress',
			'...'
		],
		// reports: [{ title: 'EuRoC Technical Report', file: 'reports/euroc-2025.pdf' }]
		//links: [
			//{ label: 'Example link one', url: 'https://example.com' },
			//{ label: 'Example link two', url: 'https://example.org' }
		//]
	},
	{
		id: 'Avionics for Nemesis Sounding Rocket (EuRoC 2025)',
		title: 'Avionics for Nemesis Sounding Rocket (EuRoC 2025)',
		start: '2025-04',
		end: '2025-10',
		description: [
			'Work in progress',
			'...'
		],
		reports: [
			{ title: 'Nemesis Technical Report (EuRoC 2025)', file: 'reports/nemesis-euroc-2025-technical-report.pdf' }
		],
		links: [
			{ label: 'European Rocketry Challenge (EuRoC)', url: 'https://euroc.pt' },
			{
				label: '"Il campus va a razzo": front-page story in *Il Resto del Carlino*',
				images: ['press/carlino-2025-10-14-cover.webp', 'press/carlino-2025-10-14-p5.webp']
			}
		]	
	},
	{
		id: 'Avionics for Borealis Sounding Rocket',
		title: 'Avionics for Borealis Sounding Rocket',
		start: '2024-02',
		end: '2025-05',
		description: [
			'Work in progress',
			'...'
		],
		// reports: [{ title: 'EuRoC Technical Report', file: 'reports/euroc-2025.pdf' }]
		//links: [
			//{ label: 'Example link one', url: 'https://example.com' },
			//{ label: 'Example link two', url: 'https://example.org' }
		//]
	},
	{
		id: 'Solar Tracker with Weather Station',
		title: 'Solar Tracker with Weather Station',
		start: '2021-10',
		end: '2022-06',
		description: [
			'Work in progress',
			'...'
		],
		// reports: [{ title: 'EuRoC Technical Report', file: 'reports/euroc-2025.pdf' }]
		//links: [
			//{ label: 'Example link one', url: 'https://example.com' },
			//{ label: 'Example link two', url: 'https://example.org' }
		//]
	},
	
];
