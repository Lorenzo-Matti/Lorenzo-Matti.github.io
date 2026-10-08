<script lang="ts">
	import { asset, resolve } from '$app/paths';
	import Gallery from '#lib/components/Gallery.svelte';
	import { site } from '#lib/data/site.ts';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
	const project = $derived(data.project);
	const header = $derived(project.header ?? project.cover);
</script>

<svelte:head>
	<title>{project.title} · {site.name}</title>
	<meta name="description" content={project.summary} />
</svelte:head>

<section class="relative flex min-h-[60svh] items-end overflow-hidden">
	<img
		src={asset(header.src)}
		alt={header.alt}
		class="absolute inset-0 h-full w-full object-cover"
	/>
	<div class="absolute inset-0 bg-bg/40" aria-hidden="true"></div>
	<div
		class="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-b from-transparent via-bg/70 to-bg"
		aria-hidden="true"
	></div>

	<div class="relative mx-auto w-full max-w-4xl px-6 pt-32 pb-12">
		<a href={resolve('/') + '#projects'} class="text-sm text-muted transition-colors hover:text-fg">
			<span aria-hidden="true">←</span> All projects
		</a>
		<p class="mt-6 font-mono text-xs tracking-[0.25em] text-accent uppercase">{project.year}</p>
		<h1 class="mt-3 text-4xl font-semibold tracking-tight text-fg md:text-6xl">{project.title}</h1>
		{#if project.tags?.length}
			<ul class="mt-5 flex flex-wrap gap-2">
				{#each project.tags as tag (tag)}
					<li
						class="rounded-full border border-border bg-bg/40 px-3 py-0.5 font-mono text-xs text-muted"
					>
						{tag}
					</li>
				{/each}
			</ul>
		{/if}
	</div>
</section>

<article class="mx-auto max-w-4xl px-6 pb-24">
	{#if project.githubUrl || project.pdfs?.length}
		<div class="flex flex-wrap gap-3">
			{#if project.githubUrl}
				<a
					href={project.githubUrl}
					target="_blank"
					rel="noopener noreferrer"
					class="rounded-full bg-fg px-5 py-2 text-sm font-medium text-bg transition-opacity hover:opacity-85"
				>
					GitHub repository <span aria-hidden="true">↗</span>
				</a>
			{/if}
			{#each project.pdfs ?? [] as pdf (pdf.file)}
				<a
					href={asset(pdf.file)}
					target="_blank"
					rel="noopener noreferrer"
					class="rounded-full border border-border px-5 py-2 text-sm text-fg transition-colors hover:border-fg/40 hover:bg-fg/5"
				>
					{pdf.label} <span class="font-mono text-xs text-muted">PDF</span>
				</a>
			{/each}
		</div>
	{/if}

	<div class="mt-10 space-y-5 text-lg leading-relaxed text-muted">
		{#each project.description as paragraph, i (i)}
			<p>{paragraph}</p>
		{/each}
	</div>

	{#if project.gallery?.length}
		<div class="mt-16">
			<h2 class="mb-6 font-mono text-xs tracking-[0.25em] text-accent uppercase">Gallery</h2>
			<Gallery photos={project.gallery} />
		</div>
	{/if}
</article>
