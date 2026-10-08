<script lang="ts">
	import { asset, resolve } from '$app/paths';
	import type { Project } from '#lib/data/projects.ts';

	let { project }: { project: Project } = $props();
</script>

<a
	href={resolve('/projects/[id]', { id: project.id })}
	class="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-colors duration-300 hover:border-fg/20"
>
	<div class="aspect-[16/10] overflow-hidden bg-border">
		<img
			src={asset(project.cover.src)}
			alt={project.cover.alt}
			loading="lazy"
			decoding="async"
			class="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
		/>
	</div>

	<div class="flex flex-1 flex-col p-6">
		<p class="font-mono text-xs text-muted">{project.year}</p>
		<h3 class="mt-2 text-xl font-semibold tracking-tight text-fg">{project.title}</h3>
		<p class="mt-3 line-clamp-3 text-sm leading-relaxed text-muted">{project.summary}</p>
		<p class="mt-auto pt-6 text-sm text-fg transition-colors group-hover:text-accent">
			View project <span aria-hidden="true">→</span>
		</p>
	</div>
</a>
