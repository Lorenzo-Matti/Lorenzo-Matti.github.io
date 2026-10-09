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
	role: 'GNC & Avionics',
	/** First line under your name, in bold. Plain text only. */
	headline: 'Aerospace Engineering Student at the University of Bologna',
	/** Second line, lighter. Plain text only. */
	tagline: 'From integrating rocket hardware to designing GNC algorithms',
	email: 'matti.lorenzo@gmail.com',
	links: [
		{ label: 'GitHub', href: 'https://github.com/Lorenzo-Matti' },
		{ label: 'LinkedIn', href: 'https://www.linkedin.com/in/lorenzo-matti-35b478200/' }
	]
};

/** The "About" section. Each string is one paragraph; *asterisks* make italics. */
export const about = {
	title: 'About me',
	paragraphs: [
		"I am an aerospace engineering student at the University of Bologna with a strong foundation in mechatronics, flight mechanics, and hands-on systems development. What drives me most is closing the gap between mathematical models and the unforgiving reality of physical flight hardware.",

		"Much of who I am as an engineer comes from co-founding Aurora Rocketry. Starting around a table as a handful of students, we grew it into a multidisciplinary team of nearly 100 people and launched our rockets at the European Rocketry Challenge (EuRoC). Leading the electronics division and managing system integration in those early stages taught me how to foster ownership, make critical trade-offs under countdown pressure, and ensure complex subsystems seamlessly communicate.",

		"As our rockets matured, my focus naturally shifted from pad-level hardware to vehicle dynamics and autonomy—moving from keeping systems alive to steering, stabilizing, and guiding them. This steered me directly toward Guidance, Navigation, and Control (GNC). From developing active airbrake control algorithms to investigating radar target tracking and state estimation for my thesis, I’ve become deeply invested in extracting truth from noisy sensor data and turning 6-DOF dynamic models into precise, closed-loop actuation.",

		"Today, I am drawn to advanced state estimation, integrated navigation systems, and autonomous trajectory control—the exact intersection where dynamic modeling, algorithmic rigor, and flight physics meet to make complex aerospace missions possible."
	]
};

/**
 * Skills, grouped. Add, remove or rename groups freely.
 * The values below are examples: replace them with your own.
 */
export const skills: { group: string; items: string[] }[] = [
	{ group: 'Programming', items: ['MATLAB', 'C++', 'LaTeX'] },
	{ group: 'GNC', items: ['6-DOF Flight Dynamics', 'Filter Design', 'Guidance Laws', 'Closed-Loop Control', 'Simulink'] },
	{ group: 'Electronics', items: ['Arduino', 'Avionics System Design', 'PCB design', 'Hardware-in-the-Loop Testing'] },
	{ group: 'Project Management', items: ['Technical Team Leadership', 'Timeline & Budget Management', 'Cross-functional Integration'] },
	{ group: 'Languages', items: ['Italian (native)', 'English (B2)'] }
];
