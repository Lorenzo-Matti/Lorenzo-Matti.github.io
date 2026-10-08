import type { AssetPath } from '$app/types';

/**
 * ─── HOW TO ADD A PROJECT ───────────────────────────────────────────────
 * 1. Create a folder in `static/projects/` named like the project id,
 *    e.g. `static/projects/hybrid-engine/`, and upload the photos there.
 * 2. Copy the example block below, paste it at the top of the list
 *    and change the values. Delete any optional line you do not need.
 * 3. Commit. The site rebuilds by itself in about two minutes.
 * ────────────────────────────────────────────────────────────────────────
 */

export interface Photo {
	/** Path inside `static/`, e.g. `projects/hybrid-engine/cover.jpg`. */
	src: AssetPath;
	/** Short description of what the photo shows (read by screen readers). */
	alt: string;
}

export interface Pdf {
	/** Button text, e.g. 'Final report'. */
	label: string;
	/** Path inside `static/`, e.g. `projects/hybrid-engine/report.pdf`. */
	file: AssetPath;
}

export interface Project {
	/** Unique, lowercase, words separated by dashes. Becomes the page URL. */
	id: string;
	title: string;
	year: number;
	/** One sentence shown on the project card. */
	summary: string;
	/** Full description on the project page. One string per paragraph. */
	description: string[];
	/** Image on the project card. */
	cover: Photo;
	/** Wide banner at the top of the project page. Optional: falls back to the cover. */
	header?: Photo;
	/** Extra photos shown on the project page. Optional. */
	gallery?: Photo[];
	/** Optional. */
	githubUrl?: string;
	/** Optional PDF documents (reports, posters, papers). */
	pdfs?: Pdf[];
	/** Optional short labels shown under the title, e.g. ['CFD', 'MATLAB']. */
	tags?: string[];
}

export const projects: Project[] = [
	{
		id: 'example-project',
		title: 'Example Project',
		year: 2026,
		summary: 'A one-sentence summary that appears on the project card.',
		description: [
			'This is an example project. Replace this text with what the project was about, what problem it solved and what your role was.',
			'Use a second paragraph for the results: numbers, lessons learned, or what you would do differently next time.'
		],
		cover: { src: 'projects/example-project/cover.jpg', alt: 'Rocket on the launch rail' },
		header: {
			src: 'projects/example-project/header.jpg',
			alt: 'Aerial view of the rocket lifting off'
		},
		gallery: [
			{ src: 'projects/example-project/photo-1.jpg', alt: 'Team presentation in a lecture hall' },
			{ src: 'projects/example-project/photo-2.jpg', alt: 'Talk on stage in a conference hall' },
			{ src: 'projects/example-project/photo-3.jpg', alt: 'Carrying the rocket to the launch pad' },
			{ src: 'projects/example-project/photo-4.jpg', alt: 'Team celebrating after the launch' }
		],
		githubUrl: 'https://github.com/Lorenzo-Matti',
		pdfs: [{ label: 'Example report', file: 'projects/example-project/report.pdf' }],
		tags: ['Example', 'Rocketry']
	}
];

// Fail the build early if two projects share an id.
const ids = new Set<string>();
for (const p of projects) {
	if (ids.has(p.id)) throw new Error(`Duplicate project id: "${p.id}"`);
	ids.add(p.id);
}

export function getProject(id: string): Project | undefined {
	return projects.find((p) => p.id === id);
}
