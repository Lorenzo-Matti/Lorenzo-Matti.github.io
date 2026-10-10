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
		"I like to understand how a system knows where it is, where it should go and how to get there. This is what Guidance, Navigation and Control is about, and it is the field I want to work in. Today I'm studying for a BSc in Aerospace Engineering at the University of Bologna, but to explain how I got here, I need to start a bit earlier.",

		"Back in high school, I studied mechatronics at a technical institute, but most of the practical work I did there was my own choice, not part of the program. For the final exam, a classmate and I decided to spend eight months on a project outside the program: a solar tracker with automatic battery management, a weather station and a Bluetooth app that we built to read the data.",

		"When I arrived at university, the first year was very theoretical, so in the evenings I kept building electronics projects at home. I like putting theory into practice, and electronics and making were a hobby I really enjoyed. I shared these projects online, and they caught the attention of Aurora Rocketry, a student association that was just being founded. After seeing my videos and a few interviews, the president and vice-president asked me to lead the electronics division, when I was still in my first year.",

		"As co-founder and head of electronics, I coordinated a team of eight people while the association grew from five to about one hundred members. I defined the avionics architecture, the roles in the team and the test standards. Eighteen months after we started, we took part in EuRoC 2025 in Portugal and finished 2nd in our category and 8th overall.",

		"Working on a real rocket showed me something new: the problems I found most interesting were about how the rocket moves and how to guide it, where flight dynamics and control theory meet real hardware. After EuRoC, I realized that I liked electronics, but not as much as this. So in November 2025 I left my role as team leader, after looking for my replacement early so that the team would not be left without a lead, and I joined the GNC team as a member. There I spent almost a year working on active airbrakes, where I designed and compared different closed-loop controllers in simulation. The system has not flown yet. Electronics still helps me today: before working on GNC algorithms, I had already seen how real sensors behave on board, with their noise and their limits.",

		"Now I'm doing my bachelor's thesis and an internship on state estimation and target tracking. Next, I plan to do my master's degree in Bologna, with an Erasmus semester at TU Delft."
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
