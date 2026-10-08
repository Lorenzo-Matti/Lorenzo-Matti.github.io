<script lang="ts">
	import { onMount } from 'svelte';
	import { replaceState } from '$app/navigation';
	import { page } from '$app/state';
	import ProjectCard from '#lib/components/ProjectCard.svelte';
	import SectionHeading from '#lib/components/SectionHeading.svelte';
	import { sortedProjects, usedTags, type Tag } from '#lib/data/projects.ts';

	let activeTag = $state<Tag | null>(null);

	const visible = $derived(
		activeTag ? sortedProjects.filter((p) => p.tags.includes(activeTag as Tag)) : sortedProjects
	);

	// The page is prerendered, so the query string can only be read in the browser.
	onMount(() => {
		const fromUrl = page.url.searchParams.get('tag');
		if (fromUrl && (usedTags as string[]).includes(fromUrl)) activeTag = fromUrl as Tag;
	});

	function select(tag: Tag | null) {
		activeTag = tag;
		// Keep the filter in the URL so it can be shared, without adding history entries.
		const url = new URL(page.url.href);
		if (tag) url.searchParams.set('tag', tag);
		else url.searchParams.delete('tag');
		replaceState(url, {});
	}
</script>

<svelte:head>
	<title>Projects</title>
</svelte:head>

<section class="mx-auto max-w-6xl px-6 pt-36 pb-24 md:pb-32">
	<SectionHeading eyebrow="Archive" title="All projects" />
	<p class="mt-4 max-w-xl text-muted">
		A catalogue of things I have designed, built and shipped. Filter by technology to narrow it
		down.
	</p>

	<div class="mt-10 flex flex-wrap gap-2" role="group" aria-label="Filter projects by technology">
		{#each [null, ...usedTags] as tag (tag ?? 'all')}
			<button
				type="button"
				aria-pressed={activeTag === tag}
				onclick={() => select(tag)}
				class={[
					'rounded-full border px-4 py-1.5 font-mono text-xs transition-colors',
					activeTag === tag
						? 'border-fg bg-fg text-bg'
						: 'border-border text-muted hover:border-fg/40 hover:text-fg'
				]}
			>
				{tag ?? 'All'}
			</button>
		{/each}
	</div>

	<p class="mt-8 font-mono text-xs text-muted" aria-live="polite">
		{visible.length}
		{visible.length === 1 ? 'project' : 'projects'}
	</p>

	<div class="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
		{#each visible as project (project.id)}
			<ProjectCard {project} />
		{/each}
	</div>
</section>
