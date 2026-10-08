/**
 * ─── PROFILE ────────────────────────────────────────────────────────────
 * Everything about you that appears on the site: hero, About, skills,
 * contacts. Change the text between the quotes, keep the quotes and commas.
 * ────────────────────────────────────────────────────────────────────────
 */

/** Hero (the video screen) and contacts. */
export const profile = {
	name: 'Lorenzo Matti',
	/** Shown at the top left of every page. */
	initials: 'LM',
	role: 'Aerospace engineer',
	tagline: 'ahahahahahahahh',
	email: 'matti.lorenzo@gmail.com',
	links: [
		{ label: 'GitHub', href: 'https://github.com/Lorenzo-Matti' },
		{ label: 'LinkedIn', href: 'https://www.linkedin.com/in/lorenzo-matti-35b478200/?isSelfProfile=true' }
	]
};

/** The "About" section. Each string is one paragraph; *asterisks* make italics. */
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
