<script lang="ts">
	import { asset } from '$app/paths';
	import type { Photo } from '#lib/data/projects.ts';

	let { photos }: { photos: Photo[] } = $props();

	let dialog: HTMLDialogElement | undefined = $state();
	let current = $state(0);

	function open(index: number) {
		current = index;
		dialog?.showModal();
	}

	function step(delta: number) {
		current = (current + delta + photos.length) % photos.length;
	}

	function onkeydown(event: KeyboardEvent) {
		if (event.key === 'ArrowRight') step(1);
		if (event.key === 'ArrowLeft') step(-1);
	}
</script>

<ul class="grid grid-cols-2 gap-3 md:grid-cols-3">
	{#each photos as photo, i (photo.src)}
		<li>
			<button
				type="button"
				onclick={() => open(i)}
				class="block aspect-[4/3] w-full overflow-hidden rounded-xl bg-border"
			>
				<img
					src={asset(photo.src)}
					alt={photo.alt}
					loading="lazy"
					decoding="async"
					class="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
				/>
			</button>
		</li>
	{/each}
</ul>

<!-- Full-screen viewer. Esc closes it, arrow keys move between photos. -->
<dialog
	bind:this={dialog}
	{onkeydown}
	onclick={(e) => e.target === dialog && dialog?.close()}
	class="m-auto max-h-none max-w-none bg-transparent p-0 backdrop:bg-black/90"
>
	{#if photos[current]}
		<figure class="flex max-h-[90vh] max-w-[92vw] flex-col items-center gap-3">
			<img
				src={asset(photos[current].src)}
				alt={photos[current].alt}
				class="max-h-[80vh] max-w-full rounded-lg object-contain"
			/>
			<figcaption class="text-sm text-muted">{photos[current].alt}</figcaption>
		</figure>
	{/if}
	<div class="mt-3 flex justify-center gap-3">
		{#if photos.length > 1}
			<button
				type="button"
				class="rounded-full border border-border px-4 py-1.5 text-sm text-fg"
				onclick={() => step(-1)}
			>
				← Prev
			</button>
			<button
				type="button"
				class="rounded-full border border-border px-4 py-1.5 text-sm text-fg"
				onclick={() => step(1)}
			>
				Next →
			</button>
		{/if}
		<button
			type="button"
			class="rounded-full bg-fg px-4 py-1.5 text-sm text-bg"
			onclick={() => dialog?.close()}
		>
			Close
		</button>
	</div>
</dialog>
