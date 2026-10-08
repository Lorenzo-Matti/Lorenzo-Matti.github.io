import { projects, type Project } from '#content/projects.ts';

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function formatMonth(value: string): string {
	const [year, month] = value.split('-').map(Number);
	if (!year || !month || month < 1 || month > 12) {
		throw new Error(`Invalid date "${value}": use 'YYYY-MM', e.g. '2025-07'.`);
	}
	return `${MONTHS[month - 1]} ${year}`;
}

/** "Jul 2025 – Oct 2025", "Jul 2025 – Present" or "Jul 2025". */
export function formatPeriod(p: Project): { start: string; end?: string } {
	const start = formatMonth(p.start);
	if (!p.end || p.end === p.start) return { start };
	return { start, end: p.end === 'present' ? 'Present' : formatMonth(p.end) };
}

/** All projects, most recent first. */
export const sortedProjects: Project[] = [...projects].sort((a, b) =>
	(b.end === 'present' ? '9999' : (b.end ?? b.start)).localeCompare(
		a.end === 'present' ? '9999' : (a.end ?? a.start)
	)
);

export function getProject(id: string): Project | undefined {
	return projects.find((p) => p.id === id);
}

// Fail the build early on duplicate ids or malformed dates.
const ids = new Set<string>();
for (const p of projects) {
	if (ids.has(p.id)) throw new Error(`Duplicate project id: "${p.id}"`);
	ids.add(p.id);
	formatPeriod(p);
}
