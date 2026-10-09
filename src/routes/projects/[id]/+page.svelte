<script lang="ts">
	import { asset, resolve } from '$app/paths';
	import RichText from '#lib/components/RichText.svelte';
	import { formatPeriod } from '#lib/projects.ts';
	import { profile } from '#content/profile.ts';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
	const project = $derived(data.project);
	const period = $derived(formatPeriod(project));
</script>

<svelte:head>
	<title>{project.title} · {profile.name}</title>
	<meta name="description" content={project.abstract[0].replaceAll('*', '')} />
</svelte:head>

<div class="mx-auto max-w-6xl px-6 pt-32 pb-24 md:pt-40">
	<a
		href={resolve('/') + '#projects'}
		class="font-mono text-xs tracking-[0.15em] text-muted uppercase transition-colors hover:text-fg"
	>
		<span aria-hidden="true">←</span> All projects
	</a>

	<article class="mt-12 grid gap-10 md:grid-cols-[12rem_1fr] md:gap-0">
		<aside class="md:border-r md:border-border md:pr-8">
			<p class="font-mono text-sm tracking-[0.15em] text-fg uppercase">{period.start}</p>
			{#if period.end}
				<p class="mt-1 font-mono text-sm tracking-[0.15em] text-muted uppercase">– {period.end}</p>
			{/if}
			{#if project.label}
				<p
					class="mt-6 flex items-center gap-2 font-mono text-xs tracking-[0.15em] text-label uppercase"
				>
					<span class="size-1.5 bg-label" aria-hidden="true"></span>
					{project.label}
				</p>
			{/if}
		</aside>

		<div class="md:pl-12">
			<h1
				class="flex items-start gap-4 font-display text-3xl leading-tight font-semibold tracking-tight text-fg md:text-5xl"
			>
				<span class="mt-[0.3em] size-4 shrink-0 bg-accent md:size-5" aria-hidden="true"></span>
				{project.title}
			</h1>

			<!-- Same type scale as the About section: a lead paragraph, then body text. -->
			<div class="mt-8 space-y-6 md:max-w-[64ch]">
				{#each project.abstract as paragraph, i (i)}
					<p
						class={i === 0
							? 'text-xl leading-relaxed text-fg md:text-2xl md:leading-snug'
							: 'text-[1.0625rem] leading-[1.75] text-fg/70'}
					>
						<RichText text={paragraph} />
					</p>
				{/each}
			</div>

			{#if project.tools?.length}
				<ul
					class="mt-10 flex flex-wrap gap-x-3 gap-y-2 border-t border-border pt-8 font-mono text-sm tracking-wider text-muted"
				>
					{#each project.tools as tool, i (tool)}
						<li>
							{tool}{#if i < project.tools.length - 1}<span class="ml-3 text-muted/60" aria-hidden="true"
									>/</span
								>{/if}
						</li>
					{/each}
				</ul>
			{/if}

			{#if project.report || project.githubUrl}
				<div class="mt-12 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
					{#if project.report}
						<a
							href={asset(project.report)}
							download
							class="group flex items-stretch border border-accent transition-colors hover:bg-accent/10"
						>
							<span
								class="flex w-14 items-center justify-center bg-accent text-xl text-white"
								aria-hidden="true"
							>
								↓
							</span>
							<span class="px-6 py-3">
								<span class="block font-display text-lg font-medium text-fg">Technical report</span>
								<span class="block font-mono text-xs tracking-[0.15em] text-muted uppercase">
									PDF{#if data.pdf?.pages}&nbsp;· {data.pdf.pages}
										{data.pdf.pages === 1 ? 'page' : 'pages'}{/if}{#if data.pdf}&nbsp;· {data.pdf
											.size}{/if}
								</span>
							</span>
						</a>
					{/if}
					{#if project.githubUrl}
						<a
							href={project.githubUrl}
							target="_blank"
							rel="noopener noreferrer"
							class="flex items-stretch border border-border transition-colors hover:border-fg/50"
						>
							<span
								class="flex w-14 items-center justify-center bg-surface text-xl text-fg"
								aria-hidden="true"
							>
								↗
							</span>
							<span class="px-6 py-3">
								<span class="block font-display text-lg font-medium text-fg">Repository</span>
								<span class="block font-mono text-xs tracking-[0.15em] text-muted uppercase"
									>GitHub</span
								>
							</span>
						</a>
					{/if}
				</div>
			{/if}
		</div>
	</article>
</div>
