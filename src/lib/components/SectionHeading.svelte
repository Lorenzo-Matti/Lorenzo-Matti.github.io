<script lang="ts">
	/**
	 * Section opener: a hairline, then the section number and the title on
	 * the same row. Shares the 12rem label column used by every row below it,
	 * so all text lines up on the same edge.
	 */
	let { index, title }: { index: string; title: string } = $props();
</script>

<header
	class="grid grid-cols-[3rem_1fr] items-baseline border-t border-border pt-6 md:grid-cols-[12rem_1fr] md:pt-8"
>
	<span class="font-mono text-xs tracking-[0.2em] text-accent">{index}</span>
	<h2
		class="font-display text-4xl font-semibold tracking-tight text-balance text-fg md:text-5xl"
	>
		{title}
	</h2>
</header>
