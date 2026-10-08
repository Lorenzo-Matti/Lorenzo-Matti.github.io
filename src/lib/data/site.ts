import type { AssetPath } from '$app/types';

/** Personal details and copy used across the site. */
export const site = {
	name: 'Lorenzo Matti',
	initials: 'LM',
	role: 'Aerospace Engineer',
	tagline: 'I build fast, accessible interfaces for data-heavy products.',
	email: 'matti.lorenzo@gmail.com',
	socials: [
		{ label: 'GitHub', href: 'https://github.com/Lorenzo-Matti' },
		{ label: 'LinkedIn', href: 'https://www.linkedin.com/in/lorenzo-matti' }
	],
	hero: {
		/** Path relative to `static/`. H.264 MP4 plays in every current browser. */
		videoMp4: 'video/hero.mp4' satisfies AssetPath,
		/** Shown before the video loads and when reduced motion is requested. */
		poster: 'video/hero-poster.jpg' satisfies AssetPath
	}
} as const;

/**
 * The "About" section under the hero.
 * Each string in `paragraphs` becomes its own paragraph.
 */
export const about = {
	title: 'About me',
	paragraphs: ['ABC', 'Lorem ipsum']
};

/**
 * Skills, grouped. Add, remove or rename groups freely.
 * The values below are examples: replace them with your own.
 */
export const skills: { group: string; items: string[] }[] = [
	{ group: 'Engineering', items: ['Structural analysis', 'Propulsion', 'Flight dynamics'] },
	{ group: 'Software', items: ['MATLAB', 'Python', 'SolidWorks', 'ANSYS'] },
	{ group: 'Languages', items: ['Italian (native)', 'English (C1)'] }
];
