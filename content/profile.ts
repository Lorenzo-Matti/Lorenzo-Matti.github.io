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
	/** First line under your name, in bold. Plain text only. */
	headline: 'Aerospace Engineering Student at the University of Bologna',
	/** Second line, lighter. Plain text only. */
	tagline: 'From rocket hardware to designing GNC algorithms',
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
		"I'm studying Aerospace Engineering at the University of Bologna, and I want to work in Guidance, Navigation and Control.",

		"I started from hardware. In my first year I co-founded Aurora Rocketry, when it was still just an idea, and I led its electronics team until the European Rocketry Challenge 2025, where we finished 2nd in our category. With the team I designed two avionics boards, with sensors, 868 MHz telemetry and the recovery deployment circuit.",

		"While working on the avionics, I realized I was more interested in what the flight computer does with the data than in the boards themselves. So after the competition I handed over my role as team lead and joined the GNC team, where I worked on the airbrake control and compared different controllers in simulation. The system has not flown yet.",

		"Today I'm working on my bachelor's thesis and an internship on the tracking and interception of a non-cooperative target, using an IMM filter for state estimation and a PD guidance law.",

		"After my bachelor's, I plan to do a master's degree in Space Engineering in Bologna, and I would like to spend a semester abroad, ideally at TU Delft."
	]
};

/**
 * Skills, grouped. Add, remove or rename groups freely.
 * The values below are examples: replace them with your own.
 */
export const skills: { group: string; items: string[] }[] = [
	{ group: 'Programming', items: ['MATLAB', 'Simulink', 'C++', 'LaTeX'] },
	{
		group: 'GNC',
		items: ['6-DOF Flight Dynamics', 'Filtering techniques', 'Guidance Laws', 'Closed-Loop Control', 'Monte Carlo Analysis']
	},
	{
		group: 'Electronics',
		items: ['Avionics System Design', 'PCB Design (KiCad)', 'Sensor/Telemetry Integration', 'HIL Testing']
	},
	{ group: 'Leadership', items: ['Technical Team Leadership', 'Timeline & Budget Management'] },
	{ group: 'Languages', items: ['Italian (Native)', 'English (B2)'] }
];
