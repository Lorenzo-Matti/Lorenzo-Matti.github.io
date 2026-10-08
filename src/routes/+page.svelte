<script lang="ts">
	import { resolve } from '$app/paths';
	import Hero from '#lib/components/Hero.svelte';
	import ProjectCard from '#lib/components/ProjectCard.svelte';
	import SectionHeading from '#lib/components/SectionHeading.svelte';
	import { featuredProjects } from '#lib/data/projects.ts';
	import { site } from '#lib/data/site.ts';

	const focusAreas = [
		{
			title: 'Interfaces',
			text: 'Component-driven UIs that stay fast and accessible as they grow.'
		},
		{ title: 'Data', text: 'Dashboards and visualisations that make dense data easy to read.' },
		{ title: 'Systems', text: 'Design tokens, typed APIs and tooling that keep teams consistent.' }
	];
</script>

<Hero />

<section id="about" class="mx-auto max-w-6xl scroll-mt-24 px-6 py-24 md:py-32">
	<div class="grid gap-12 md:grid-cols-[1fr_1.4fr]">
		<SectionHeading eyebrow="About" title="Design-minded engineering." />
		<div class="space-y-5 text-lg leading-relaxed text-muted">
			{#each site.intro as paragraph, i (i)}
				<p>{paragraph}</p>
			{/each}
		</div>
	</div>

	<ul
		class="mt-20 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-3"
	>
		{#each focusAreas as area (area.title)}
			<li class="bg-bg p-8">
				<h3 class="font-medium text-fg">{area.title}</h3>
				<p class="mt-2 text-sm leading-relaxed text-muted">{area.text}</p>
			</li>
		{/each}
	</ul>
</section>

<section id="work" class="mx-auto max-w-6xl scroll-mt-24 px-6 pb-24 md:pb-32">
	<div class="flex flex-wrap items-end justify-between gap-6">
		<SectionHeading eyebrow="Selected work" title="Featured projects" />
		<a href={resolve('/projects')} class="text-sm text-muted transition-colors hover:text-fg">
			View all projects <span aria-hidden="true">→</span>
		</a>
	</div>

	<div class="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
		{#each featuredProjects as project (project.id)}
			<ProjectCard {project} />
		{/each}
	</div>
</section>
