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

/** A useful link: an external web address, or a file inside `static/`. */
export type ProjectLink = { label: string; url: string } | { label: string; file: AssetPath };

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
		id: 'test-project-1',
		title: 'Test Project 1: IMM Tracking of a Non-Cooperative Target',
		start: '2025-11',
		end: 'present',
		description: [
			'Placeholder text to preview the layout. A general description of the project goes here: the problem, what you did and the main result, in two or three short paragraphs.',
			'This is a second paragraph, to show the spacing between paragraphs.'
		],
		links: [{ label: 'Example website', url: 'https://example.com' }],
		reports: [
			{ title: 'Thesis (draft)', file: 'reports/test-report.pdf' },
			{ title: 'Internship report', file: 'reports/test-report.pdf' }
		]
	},
	{
		id: 'test-project-2',
		title: 'Test Project 2: Active Airbrake Control',
		start: '2025-11',
		end: '2026-10',
		description: [
			'Placeholder text to preview a project with a report but no links.'
		],
		reports: [{ title: 'Technical report', file: 'reports/test-report.pdf' }]
	},
	{
		id: 'test-project-3',
		title: 'Test Project 3: Flight Computer for a Sounding Rocket',
		start: '2024-02',
		end: '2025-10',
		description: ['Placeholder text to preview a project with links only and no report.'],
		links: [
			{ label: 'Example link one', url: 'https://example.com' },
			{ label: 'Example link two', url: 'https://example.org' }
		]
	},
	{
		id: 'test-project-4',
		title: 'Test Project 4: Solar Tracker with Weather Station',
		start: '2021-10',
		end: '2022-06',
		description: ['Placeholder text to preview a project with only a description.']
	},
	// ── End of test projects ──
	{
		id: 'cfd-fem-sounding-rocket',
		title: 'CFD-FEM Aero-Structural Analysis of a Sounding Rocket',
		start: '2025-07',
		end: '2025-10',
		description: [
			"Would *Nemesis* hold under the worst loads it could meet in flight: maximum dynamic pressure, maximum angle of attack and peak thrust, all at once? I built the CFD-to-FEM workflow that answered it in the team's EuRoC Technical Report, carrying the aerodynamic loads down to every component on the critical path."
		],
		links: [
			{ label: 'European Rocketry Challenge (EuRoC)', url: 'https://euroc.pt' },
			{
				label: 'Il Resto del Carlino, 14 Oct 2025: front page',
				file: 'press/carlino-2025-10-14-cover.webp'
			},
			{
				label: 'Il Resto del Carlino, 14 Oct 2025: "Un sogno che prende il volo" (p. 5)',
				file: 'press/carlino-2025-10-14-p5.webp'
			}
		]
		// reports: [{ title: 'EuRoC Technical Report', file: 'reports/euroc-2025.pdf' }]
	}
];
