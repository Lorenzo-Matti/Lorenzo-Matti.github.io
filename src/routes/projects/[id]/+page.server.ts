import { readFile } from 'node:fs/promises';
import { error } from '@sveltejs/kit';
import { getProject, sortedProjects } from '#lib/projects.ts';
import type { EntryGenerator, PageServerLoad } from './$types';

// Prerender one page per project.
export const entries: EntryGenerator = () => sortedProjects.map((p) => ({ id: p.id }));

/** Size and page count of a PDF in `static/`, shown on the download button. */
async function pdfInfo(file: string) {
	const bytes = await readFile(`static/${file}`);
	// Rough page count: each page object carries "/Type /Page" (but not "/Pages").
	const pages = (bytes.toString('latin1').match(/\/Type\s*\/Page(?!s)/g) ?? []).length;
	const mb = bytes.length / 1024 / 1024;
	const size = mb >= 0.1 ? `${mb.toFixed(1)} MB` : `${Math.ceil(bytes.length / 1024)} KB`;
	return { size, pages: pages || undefined };
}

export const load: PageServerLoad = async ({ params }) => {
	const project = getProject(params.id);
	if (!project) error(404, 'Project not found');
	return { project, pdf: project.report ? await pdfInfo(project.report) : undefined };
};
