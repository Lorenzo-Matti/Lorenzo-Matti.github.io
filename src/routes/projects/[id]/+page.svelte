<script lang="ts">
	import { asset, resolve } from '$app/paths';
	import RichText from '#lib/components/RichText.svelte';
	import { profile } from '#content/profile.ts';
	import type { AssetPath } from '$app/types';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
	const project = $derived(data.project);

	// Viewer for links made of images (e.g. newspaper pages), shown full width.
	let viewer: HTMLDialogElement | undefined = $state();
	let viewing: { label: string; images: AssetPath[] } | null = $state(null);
	function openImages(label: string, images: AssetPath[]) {
		viewing = { label, images };
		viewer?.showModal();
	}

	// Project pages show only four things: title, description, reports, useful links.
	const label = 'font-mono text-xs tracking-[0.2em] text-label uppercase';
</script>

<svelte:head>
	<title>{project.title} · {profile.name}</title>
	<meta name="description" content={project.description[0].replaceAll('*', '')} />
</svelte:head>

<article class="mx-auto max-w-3xl px-6 pt-32 pb-24 md:pt-40">
	<a
		href={resolve('/') + '#projects'}
		class="font-mono text-xs tracking-[0.15em] text-muted uppercase transition-colors hover:text-fg"
	>
		<span aria-hidden="true">←</span> All projects
	</a>

	<h1
		class="mt-10 font-display text-3xl leading-tight font-semibold tracking-tight text-fg md:text-5xl"
	>
		{project.title}
	</h1>

	<div class="mt-8 space-y-5 text-lg leading-relaxed text-fg/80">
		{#each project.description as paragraph, i (i)}
			<p><RichText text={paragraph} /></p>
		{/each}
	</div>

	{#if data.reports.length}
		<section class="mt-14 border-t border-border pt-6">
			<h2 class={label}>{data.reports.length === 1 ? 'Report' : 'Reports'}</h2>
			<ul class="mt-4 divide-y divide-border">
				{#each data.reports as report, i (i)}
					<li>
						<a
							href={asset(report.file)}
							download
							data-umami-event="report-download"
							data-umami-event-project={project.id}
							class="group flex flex-col gap-1 py-3 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
						>
							<span class="text-fg transition-colors group-hover:text-accent-hover">
								{report.title}
							</span>
							<span class="shrink-0 font-mono text-xs tracking-[0.15em] text-muted uppercase">
								PDF{#if report.pages}&nbsp;· {report.pages}
									{report.pages === 1 ? 'page' : 'pages'}{/if}&nbsp;· {report.size}
								<span class="ml-2 text-accent" aria-hidden="true">↓</span>
							</span>
						</a>
					</li>
				{/each}
			</ul>
		</section>
	{/if}
	{#if project.links?.length}
		<section class="mt-14 border-t border-border pt-6">
			<h2 class={label}>Links</h2>
			<ul class="mt-4 divide-y divide-border">
				{#each project.links as link (link.label)}
					{@const row = 'group flex w-full items-baseline justify-between gap-6 py-3 text-left'}
					<li>
						{#if 'images' in link}
							<button type="button" class={row} onclick={() => openImages(link.label, link.images)}>
								<span class="text-fg transition-colors group-hover:text-accent-hover">
									<RichText text={link.label} />
								</span>
								<span class="font-mono text-sm text-muted" aria-hidden="true">↗</span>
							</button>
						{:else}
							<a
								href={'url' in link ? link.url : asset(link.file)}
								target="_blank"
								rel="noopener noreferrer"
								class={row}
							>
								<span class="text-fg transition-colors group-hover:text-accent-hover">
									<RichText text={link.label} />
								</span>
								<span class="font-mono text-sm text-muted" aria-hidden="true">↗</span>
							</a>
						{/if}
					</li>
				{/each}
			</ul>
		</section>
	{/if}

</article>

<dialog
	bind:this={viewer}
	onclose={() => (viewing = null)}
	onclick={(e) => e.target === viewer && viewer?.close()}
	class="m-0 h-full max-h-none w-full max-w-none bg-bg/95 p-0 backdrop:bg-bg/80"
	aria-label="Image viewer"
>
	{#if viewing}
		<div class="sticky top-0 z-10 flex items-center justify-between gap-6 border-b border-border bg-bg px-6 py-4">
			<p class="text-sm text-fg/80"><RichText text={viewing.label} /></p>
			<button
				type="button"
				onclick={() => viewer?.close()}
				class="font-mono text-xs tracking-[0.15em] text-muted uppercase hover:text-fg"
			>
				Close ✕
			</button>
		</div>
		<div class="mx-auto flex max-w-4xl flex-col gap-8 px-4 py-8">
			{#each viewing.images as image (image)}
				<img src={asset(image)} alt="" class="w-full" loading="lazy" />
			{/each}
		</div>
	{/if}
</dialog>
