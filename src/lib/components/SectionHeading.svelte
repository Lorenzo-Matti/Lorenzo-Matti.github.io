<script lang="ts">
	let { eyebrow, title }: { eyebrow: string; title: string } = $props();
</script>

<div>
	<p class="flex items-center gap-2 font-mono text-xs tracking-[0.2em] text-label uppercase">
		<span class="size-1.5 bg-label" aria-hidden="true"></span>
		{eyebrow}
	</p>
	<h2 class="mt-3 font-display text-3xl font-semibold tracking-tight text-fg md:text-4xl">
		{title}
	</h2>
</div>
