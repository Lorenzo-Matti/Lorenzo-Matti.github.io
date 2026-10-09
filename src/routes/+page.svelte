<script lang="ts">
	import { resolve } from '$app/paths';
	import Hero from '#lib/components/Hero.svelte';
	import RichText from '#lib/components/RichText.svelte';
	import SectionHeading from '#lib/components/SectionHeading.svelte';
	import { formatPeriod, sortedProjects } from '#lib/projects.ts';
	import { about, skills } from '#content/profile.ts';

	// Every block below uses the same two columns: a 12rem label column and the text column.
	const row = 'grid gap-2 md:grid-cols-[12rem_1fr] md:gap-0';
	const label = 'font-mono text-xs tracking-[0.2em] text-muted uppercase';
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

	<dl class="mt-20 border-b border-border">
		{#each skills as { group, items } (group)}
			<div class="{row} border-t border-border py-5">
				<dt class="{label} md:pt-1">{group}</dt>
				<dd class="flex flex-wrap gap-y-1 text-fg/85">
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
	<SectionHeading index="02" eyebrow="Work" title="Projects" />

	<ul class="mt-10 border-b border-border">
		{#each sortedProjects as project (project.id)}
			{@const period = formatPeriod(project)}
			<li class="border-t border-border">
				<a
					href={resolve('/projects/[id]', { id: project.id })}
					class="group grid gap-2 py-6 md:grid-cols-[12rem_1fr_auto] md:items-baseline md:gap-0"
				>
					<span class={label}>
						{period.start}{#if period.end}&nbsp;– {period.end}{/if}
					</span>
					<span>
						<span
							class="block font-display text-xl font-medium tracking-tight text-balance text-fg transition-colors group-hover:text-accent-hover md:text-2xl"
						>
							{project.title}
						</span>
						{#if project.label}
							<span class="mt-1.5 block font-mono text-xs tracking-[0.15em] text-label uppercase">
								{project.label}
							</span>
						{/if}
					</span>
					<span
						class="hidden pl-8 font-mono text-sm text-muted transition-transform group-hover:translate-x-1 group-hover:text-fg md:block"
						aria-hidden="true">→</span
					>
				</a>
			</li>
		{/each}
	</ul>
</section>
