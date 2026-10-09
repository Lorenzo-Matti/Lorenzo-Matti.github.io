<script lang="ts">
	/**
	 * Section opener: a hairline with the section number and name,
	 * then the title in the text column. Shares the 12rem label column
	 * used by every row below it, so all text lines up on the same edge.
	 */
	let { index, eyebrow, title }: { index: string; eyebrow: string; title: string } = $props();
</script>

<header>
	<div
		class="grid grid-cols-[3rem_1fr] border-t border-border pt-4 font-mono text-xs tracking-[0.2em] uppercase md:grid-cols-[12rem_1fr]"
	>
		<span class="text-accent">{index}</span>
		<span class="text-label">{eyebrow}</span>
	</div>
	<h2
		class="mt-10 font-display text-4xl font-semibold tracking-tight text-balance text-fg md:mt-14 md:ml-[12rem] md:text-5xl"
	>
		{title}
	</h2>
</header>
