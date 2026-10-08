import type { AssetPath } from '$app/types';

/** Personal details and copy used across the site. */
export const site = {
	name: 'Alex Morgan',
	initials: 'AM',
	role: 'Frontend Engineer',
	tagline: 'I build fast, accessible interfaces for data-heavy products.',
	intro: [
		'I am a frontend engineer focused on the space where design meets systems thinking.',
		'Over the last few years I have shipped dashboards, design systems and interactive graphics for teams that care about detail. I like typed code, honest performance budgets and interfaces that feel calm under load.'
	],
	email: 'hello@example.com',
	socials: [
		{ label: 'GitHub', href: 'https://github.com/your-username' },
		{ label: 'LinkedIn', href: 'https://www.linkedin.com/in/your-username' }
	],
	hero: {
		/** Path relative to `static/`. H.264 MP4 plays in every current browser. */
		videoMp4: 'video/hero.mp4' satisfies AssetPath,
		/** Shown before the video loads and when reduced motion is requested. */
		poster: 'video/hero-poster.jpg' satisfies AssetPath
	}
} as const;
