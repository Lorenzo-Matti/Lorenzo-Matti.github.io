import { error } from '@sveltejs/kit';
import { getProject, projects } from '#lib/data/projects.ts';
import type { EntryGenerator, PageLoad } from './$types';

// Prerender one page per project.
export const entries: EntryGenerator = () => projects.map((p) => ({ id: p.id }));

export const load: PageLoad = ({ params }) => {
	const project = getProject(params.id);
	if (!project) error(404, 'Project not found');
	return { project };
};
