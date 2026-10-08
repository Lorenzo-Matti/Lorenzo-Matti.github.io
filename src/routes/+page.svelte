<script lang="ts">
	import { resolve } from '$app/paths';
	import Hero from '#lib/components/Hero.svelte';
	import RichText from '#lib/components/RichText.svelte';
	import SectionHeading from '#lib/components/SectionHeading.svelte';
	import { formatPeriod, sortedProjects } from '#lib/projects.ts';
	import { about, skills } from '#content/profile.ts';
</script>

<Hero />

<section id="about" class="mx-auto max-w-6xl scroll-mt-24 px-6 py-24 md:py-32">
	<div class="grid gap-12 md:grid-cols-[1fr_1.4fr]">
		<SectionHeading eyebrow="About" title={about.title} />
		<div class="space-y-5 text-lg leading-relaxed text-fg/80">
			{#each about.paragraphs as paragraph, i (i)}
				<p><RichText text={paragraph} /></p>
			{/each}
		</div>
	</div>

	<div class="mt-16 grid gap-10 border-t border-border pt-10 md:grid-cols-3">
		{#each skills as { group, items } (group)}
			<div>
				<h3 class="font-mono text-xs tracking-[0.2em] text-label uppercase">{group}</h3>
				<ul class="mt-4 space-y-2 text-fg/80">
					{#each items as item (item)}
						<li>{item}</li>
					{/each}
				</ul>
			</div>
		{/each}
	</div>
</section>

<section id="projects" class="mx-auto max-w-6xl scroll-mt-24 px-6 pb-24 md:pb-32">
	<SectionHeading eyebrow="Work" title="Projects" />

	<ul class="mt-12 border-t border-border">
		{#each sortedProjects as project (project.id)}
			{@const period = formatPeriod(project)}
			<li class="border-b border-border">
				<a
					href={resolve('/projects/[id]', { id: project.id })}
					class="group grid gap-2 py-6 md:grid-cols-[12rem_1fr_auto] md:items-baseline md:gap-8"
				>
					<span class="font-mono text-xs tracking-[0.15em] text-muted uppercase">
						{period.start}{#if period.end}&nbsp;– {period.end}{/if}
					</span>
					<span class="flex items-baseline gap-3">
						<span class="size-2.5 shrink-0 translate-y-[-0.1em] bg-accent" aria-hidden="true"
						></span>
						<span
							class="font-display text-xl font-medium tracking-tight text-fg transition-colors group-hover:text-accent-hover md:text-2xl"
						>
							{project.title}
						</span>
					</span>
					<span
						class="hidden font-mono text-sm text-muted transition-transform group-hover:translate-x-1 group-hover:text-fg md:block"
						aria-hidden="true">→</span
					>
				</a>
			</li>
		{/each}
	</ul>
</section>
