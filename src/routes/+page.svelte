<script lang="ts">
	import { resolve } from '$app/paths';
	import Gallery from '#lib/components/Gallery.svelte';
	import Hero from '#lib/components/Hero.svelte';
	import RichText from '#lib/components/RichText.svelte';
	import SectionHeading from '#lib/components/SectionHeading.svelte';
	import { formatPeriod, sortedProjects } from '#lib/projects.ts';
	import { about, skills } from '#content/profile.ts';

	// About and skills share two columns: a 12rem label column and the text column.
	const row = 'grid gap-2 md:grid-cols-[12rem_1fr] md:items-baseline md:gap-0';
</script>

<Hero />

<section id="about" class="mx-auto max-w-6xl scroll-mt-24 px-6 py-24 md:py-32">
	<SectionHeading index="01" eyebrow="Profile" title={about.title} />

	<!-- The first paragraph is the lead, the rest is body text. Any number of paragraphs works. -->
	<div class="mt-10 space-y-6 md:ml-[12rem] md:max-w-[64ch]">
		{#each about.paragraphs as paragraph, i (i)}
			<p
				class={i === 0
					? 'text-xl leading-relaxed text-pretty text-fg md:text-2xl md:leading-snug'
					: 'text-[1.0625rem] leading-[1.75] text-pretty text-fg/70'}
			>
				<RichText text={paragraph} />
			</p>
		{/each}
	</div>

	<!-- Skills close the About block: same anchor in the menu, own numbered opener. -->
	<div class="mt-24 md:mt-32">
		<SectionHeading index="02" eyebrow="Toolkit" title="Skills" />
	</div>

	<dl class="mt-12 border-b border-border">
		{#each skills as { group, items } (group)}
			<div class="{row} border-t border-border py-5">
				<dt class="font-display text-lg font-semibold tracking-tight text-fg">{group}</dt>
				<dd class="flex flex-wrap gap-y-1 text-fg/65 md:pt-0.5">
					{#each items as item, i (item)}
						<span>
							{item}{#if i < items.length - 1}<span class="mx-2.5 text-muted/60" aria-hidden="true"
									>/</span
								>{/if}
						</span>
					{/each}
				</dd>
			</div>
		{/each}
	</dl>
</section>

<section id="projects" class="mx-auto max-w-6xl scroll-mt-24 px-6 pb-24 md:pb-32">
	<!-- Project rows keep their original style; only the opener matches the other sections. -->
	<SectionHeading index="03" eyebrow="Work" title="Projects" />

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

<section id="gallery" class="mx-auto max-w-6xl scroll-mt-24 px-6 pb-24 md:pb-32">
	<SectionHeading index="04" eyebrow="Gallery" title="Behind the projects" />
	<Gallery />
</section>
