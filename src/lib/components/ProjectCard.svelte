<script lang="ts">
	import { asset } from '$app/paths';
	import type { Project } from '#lib/data/projects.ts';

	let { project }: { project: Project } = $props();
</script>

<article
	class="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-colors duration-300 hover:border-fg/20"
>
	<div class="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-border to-surface">
		<img
			src={asset(project.image.src)}
			alt={project.image.alt}
			width={project.image.width}
			height={project.image.height}
			loading="lazy"
			decoding="async"
			class="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
		/>
	</div>

	<div class="flex flex-1 flex-col p-6">
		<p class="font-mono text-xs text-muted">{project.year}</p>
		<h3 class="mt-2 text-xl font-semibold tracking-tight text-fg">{project.title}</h3>
		<p class="mt-3 line-clamp-3 text-sm leading-relaxed text-muted">{project.description}</p>

		<ul class="mt-5 flex flex-wrap gap-2" aria-label="Technologies">
			{#each project.tags as tag (tag)}
				<li
					class="rounded-full border border-border px-2.5 py-0.5 font-mono text-[11px] text-muted"
				>
					{tag}
				</li>
			{/each}
		</ul>

		{#if project.githubUrl || project.liveUrl}
			<div class="mt-auto flex gap-5 pt-6 text-sm">
				{#if project.liveUrl}
					<a
						href={project.liveUrl}
						target="_blank"
						rel="noopener noreferrer"
						class="text-fg transition-colors hover:text-accent"
					>
						Live preview <span aria-hidden="true">↗</span>
						<span class="sr-only">of {project.title} (opens in a new tab)</span>
					</a>
				{/if}
				{#if project.githubUrl}
					<a
						href={project.githubUrl}
						target="_blank"
						rel="noopener noreferrer"
						class="text-muted transition-colors hover:text-fg"
					>
						Source <span aria-hidden="true">↗</span>
						<span class="sr-only">code of {project.title} on GitHub (opens in a new tab)</span>
					</a>
				{/if}
			</div>
		{/if}
	</div>
</article>
