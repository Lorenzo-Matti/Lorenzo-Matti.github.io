<script lang="ts">
	import { asset } from '$app/paths';
	import { photos, visibleAtFirst } from '#content/gallery.ts';

	let showAll = $state(false);
	let current: number | null = $state(null);
	let dialog: HTMLDialogElement | undefined = $state();

	const shown = $derived(showAll ? photos : photos.slice(0, visibleAtFirst));

	function open(i: number) {
		current = i;
		dialog?.showModal();
	}

	function step(delta: number) {
		if (current === null) return;
		current = (current + delta + photos.length) % photos.length;
	}

	function onKey(e: KeyboardEvent) {
		if (current === null) return;
		if (e.key === 'ArrowRight') step(1);
		if (e.key === 'ArrowLeft') step(-1);
	}
</script>

<ul class="mt-12 grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4">
	{#each shown as photo, i (photo)}
		<li>
			<button
				type="button"
				onclick={() => open(i)}
				class="group block aspect-[4/3] w-full overflow-hidden bg-surface"
				aria-label="Open photo {i + 1} of {photos.length}"
			>
				<img
					src={asset(photo)}
					alt=""
					loading="lazy"
					decoding="async"
					class="h-full w-full object-cover opacity-80 transition duration-300 group-hover:scale-[1.02] group-hover:opacity-100"
				/>
			</button>
		</li>
	{/each}
</ul>

{#if photos.length > visibleAtFirst}
	<button
		type="button"
		onclick={() => (showAll = !showAll)}
		class="mt-8 border border-border px-5 py-2 font-mono text-xs tracking-[0.15em] text-muted uppercase transition-colors hover:border-fg/40 hover:text-fg"
	>
		{showAll ? 'Show less' : `Show all ${photos.length} photos`}
	</button>
{/if}

<svelte:window onkeydown={onKey} />

<dialog
	bind:this={dialog}
	onclose={() => (current = null)}
	onclick={(e) => e.target === dialog && dialog?.close()}
	class="m-auto max-h-none max-w-none bg-transparent p-0 backdrop:bg-bg/95"
	aria-label="Photo viewer"
>
	{#if current !== null}
		<figure class="flex flex-col items-center gap-4 px-4">
			<img
				src={asset(photos[current])}
				alt=""
				class="max-h-[80svh] max-w-[92vw] object-contain"
			/>
			<figcaption
				class="flex items-center gap-6 font-mono text-xs tracking-[0.15em] text-muted uppercase"
			>
				<button type="button" onclick={() => step(-1)} class="px-2 py-1 hover:text-fg">
					← Prev
				</button>
				<span>{current + 1} / {photos.length}</span>
				<button type="button" onclick={() => step(1)} class="px-2 py-1 hover:text-fg">
					Next →
				</button>
				<button type="button" onclick={() => dialog?.close()} class="px-2 py-1 hover:text-fg">
					Close
				</button>
			</figcaption>
		</figure>
	{/if}
</dialog>
