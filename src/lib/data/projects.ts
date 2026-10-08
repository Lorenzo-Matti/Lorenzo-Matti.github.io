import type { AssetPath } from '$app/types';

/**
 * Single source of truth for every project shown on the site.
 * Add, edit or reorder entries here: no component needs to change.
 */

/**
 * Allowed tags. Keeping them in a closed list means a typo such as
 * "Sveltekit" vs "SvelteKit" is a type error instead of a silent
 * duplicate filter chip.
 */
export const TAGS = [
	'SvelteKit',
	'TypeScript',
	'Tailwind CSS',
	'Node.js',
	'Python',
	'PostgreSQL',
	'Three.js',
	'WebGL',
	'Design System',
	'Data Viz'
] as const;

export type Tag = (typeof TAGS)[number];

export interface ProjectImage {
	/**
	 * Path relative to `static/`, e.g. `images/projects/atlas.jpg`.
	 * Typed by SvelteKit: a path to a file that does not exist is a type error.
	 */
	src: AssetPath;
	/** Describe what the image shows; required for accessibility. */
	alt: string;
	/** Intrinsic size, used to reserve space and avoid layout shift. */
	width: number;
	height: number;
}

export interface Project {
	/** URL-safe, unique slug. Also used as the `{#each}` key. */
	id: string;
	title: string;
	/** One or two sentences. Keep it short; cards clamp long text. */
	description: string;
	tags: Tag[];
	image: ProjectImage;
	/** Omit when the source is private. */
	githubUrl?: string;
	/** Omit when there is no public deployment. */
	liveUrl?: string;
	/** Shown in the homepage showcase when true. */
	featured?: boolean;
	/** Used for sorting, newest first. */
	year: number;
}

export const projects: Project[] = [
	{
		id: 'atlas-dashboard',
		title: 'Atlas Dashboard',
		description:
			'A real-time analytics dashboard that turns millions of telemetry events into readable, responsive charts.',
		tags: ['SvelteKit', 'TypeScript', 'Data Viz', 'PostgreSQL'],
		image: {
			src: 'images/projects/atlas-dashboard.jpg',
			alt: 'Dark analytics dashboard with line charts and KPI tiles',
			width: 1600,
			height: 1000
		},
		githubUrl: 'https://github.com/your-username/atlas-dashboard',
		liveUrl: 'https://atlas.example.com',
		featured: true,
		year: 2025
	},
	{
		id: 'orbit-design-system',
		title: 'Orbit Design System',
		description:
			'A token-driven component library with accessible primitives, dark mode and full documentation.',
		tags: ['Design System', 'TypeScript', 'Tailwind CSS'],
		image: {
			src: 'images/projects/orbit-design-system.jpg',
			alt: 'Grid of UI components: buttons, inputs and cards in light and dark themes',
			width: 1600,
			height: 1000
		},
		githubUrl: 'https://github.com/your-username/orbit',
		featured: true,
		year: 2025
	},
	{
		id: 'terrain-renderer',
		title: 'Terrain Renderer',
		description:
			'Procedural terrain generated on the GPU, streamed in chunks and rendered at 60 fps in the browser.',
		tags: ['Three.js', 'WebGL', 'TypeScript'],
		image: {
			src: 'images/projects/terrain-renderer.jpg',
			alt: 'Low-poly mountain landscape at dusk rendered in the browser',
			width: 1600,
			height: 1000
		},
		githubUrl: 'https://github.com/your-username/terrain-renderer',
		liveUrl: 'https://terrain.example.com',
		featured: true,
		year: 2024
	},
	{
		id: 'ledger-api',
		title: 'Ledger API',
		description:
			'A typed REST API for double-entry bookkeeping, with idempotent writes and an audit trail for every change.',
		tags: ['Node.js', 'TypeScript', 'PostgreSQL'],
		image: {
			src: 'images/projects/ledger-api.jpg',
			alt: 'API documentation page listing ledger endpoints',
			width: 1600,
			height: 1000
		},
		githubUrl: 'https://github.com/your-username/ledger-api',
		year: 2024
	},
	{
		id: 'signal-notebook',
		title: 'Signal Notebook',
		description:
			'Interactive notebooks for exploring sensor data, from raw signal to filtered, annotated plots.',
		tags: ['Python', 'Data Viz'],
		image: {
			src: 'images/projects/signal-notebook.jpg',
			alt: 'Notebook view with a noisy waveform and its filtered version',
			width: 1600,
			height: 1000
		},
		githubUrl: 'https://github.com/your-username/signal-notebook',
		year: 2023
	},
	{
		id: 'folio-starter',
		title: 'Folio Starter',
		description:
			'The open-source template behind this site: data-driven, statically rendered and easy to extend.',
		tags: ['SvelteKit', 'Tailwind CSS', 'TypeScript'],
		image: {
			src: 'images/projects/folio-starter.jpg',
			alt: 'Portfolio homepage with a video hero fading into a dark page',
			width: 1600,
			height: 1000
		},
		githubUrl: 'https://github.com/your-username/folio-starter',
		liveUrl: 'https://folio.example.com',
		year: 2023
	}
];

/** All projects, newest first. */
export const sortedProjects: Project[] = [...projects].sort((a, b) => b.year - a.year);

export const featuredProjects: Project[] = sortedProjects.filter((p) => p.featured);

/** Only the tags actually used, in the order defined in `TAGS`. */
export const usedTags: Tag[] = TAGS.filter((tag) => projects.some((p) => p.tags.includes(tag)));

// Fail fast in dev/build if two projects share an id.
const ids = new Set<string>();
for (const p of projects) {
	if (ids.has(p.id)) throw new Error(`Duplicate project id: "${p.id}"`);
	ids.add(p.id);
}
