import type { AssetPath } from '$app/types';

/** Personal details and copy used across the site. */
export const site = {
	name: 'Lorenzo Matti',
	initials: 'LM',
	role: 'Aerospace Engineer',
	tagline: 'I build fast, accessible interfaces for data-heavy products.',
	intro: [
		'ABC',
		'Lorem ipsum'
	],
	email: 'matti.lorenzo@gmail.com',
	socials: [
		{ label: 'GitHub', href: 'https://github.com/your-username' },
		{ label: 'LinkedIn', href: 'https://www.linkedin.com/in/lorenzo-matti' }
	],
	hero: {
		/** Path relative to `static/`. H.264 MP4 plays in every current browser. */
		videoMp4: 'video/hero.mp4' satisfies AssetPath,
		/** Shown before the video loads and when reduced motion is requested. */
		poster: 'video/hero-poster.jpg' satisfies AssetPath
	}
} as const;
