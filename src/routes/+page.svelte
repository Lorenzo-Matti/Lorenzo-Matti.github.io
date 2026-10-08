<script lang="ts">
	import Hero from '#lib/components/Hero.svelte';
	import ProjectCard from '#lib/components/ProjectCard.svelte';
	import SectionHeading from '#lib/components/SectionHeading.svelte';
	import { projects } from '#lib/data/projects.ts';
	import { about, skills } from '#lib/data/site.ts';
</script>

<Hero />

<section id="about" class="mx-auto max-w-6xl scroll-mt-24 px-6 py-24 md:py-32">
	<div class="grid gap-12 md:grid-cols-[1fr_1.4fr]">
		<SectionHeading eyebrow="About" title={about.title} />
		<div class="space-y-5 text-lg leading-relaxed text-muted">
			{#each about.paragraphs as paragraph, i (i)}
				<p>{paragraph}</p>
			{/each}
		</div>
	</div>

	<div
		class="mt-16 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-3"
	>
		{#each skills as { group, items } (group)}
			<div class="bg-bg p-8">
				<h3 class="font-mono text-xs tracking-[0.2em] text-accent uppercase">{group}</h3>
				<ul class="mt-4 flex flex-wrap gap-2">
					{#each items as item (item)}
						<li class="rounded-full border border-border px-3 py-1 text-sm text-fg">{item}</li>
					{/each}
				</ul>
			</div>
		{/each}
	</div>
</section>

<section id="projects" class="mx-auto max-w-6xl scroll-mt-24 px-6 pb-24 md:pb-32">
	<SectionHeading eyebrow="Work" title="Projects" />

	<div class="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
		{#each projects as project (project.id)}
			<ProjectCard {project} />
		{/each}
	</div>
</section>
