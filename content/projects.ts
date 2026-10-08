import type { AssetPath } from '$app/types';

/**
 * ─── PROJECTS ───────────────────────────────────────────────────────────
 * Each block between { } is one project. To add one:
 *   1. If it has a PDF report, upload it to the `static/reports/` folder.
 *   2. Copy an existing block, paste it at the TOP of the list, change it.
 *   3. Commit. The site rebuilds itself in about two minutes.
 *
 * Dates are written as 'YYYY-MM', e.g. '2025-07' for July 2025.
 * Lines marked "optional" can be deleted if you do not need them.
 * Put a word between asterisks to write it in italics: *Nemesis*.
 * ────────────────────────────────────────────────────────────────────────
 */

type YearMonth = `${number}-${number}`;

export interface Project {
	/** Unique, lowercase, words separated by dashes. Becomes the page address. */
	id: string;
	title: string;
	/** Month the project started, e.g. '2025-07'. */
	start: YearMonth;
	/** Optional. Month it ended. Leave it out for a single-month project. */
	end?: YearMonth | 'present';
	/** Optional. Small label next to the dates, e.g. 'EuRoC Report'. */
	label?: string;
	/** The abstract shown on the project page. One string per paragraph. */
	abstract: string[];
	/** Optional. Tools and methods, shown as a list under the abstract. */
	tools?: string[];
	/** Optional. PDF inside `static/`, e.g. 'reports/euroc-2025.pdf'. */
	report?: AssetPath;
	/** Optional. Link to the GitHub repository. */
	githubUrl?: string;
}

export const projects: Project[] = [
	{
		id: 'cfd-fem-sounding-rocket',
		title: 'CFD-FEM Aero-Structural Analysis of a Sounding Rocket',
		start: '2025-07',
		end: '2025-10',
		label: 'EuRoC Report',
		abstract: [
			"Would *Nemesis* hold under the worst loads it could meet in flight: maximum dynamic pressure, maximum angle of attack and peak thrust, all at once? I built the CFD-to-FEM workflow that answered it in the team's EuRoC Technical Report, carrying the aerodynamic loads down to every component on the critical path."
		],
		tools: [
			'ANSYS Fluent',
			'ANSYS Static Structural',
			'Equivalent beam model',
			'Inertia relief',
			'CFD → FEM load transfer',
			'Safety-margin assessment',
			'SolidWorks'
		]
		// report: 'reports/euroc-2025.pdf',
		// githubUrl: 'https://github.com/Lorenzo-Matti/...'
	}
];
