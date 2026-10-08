<script lang="ts">
	let { eyebrow, title }: { eyebrow: string; title: string } = $props();
</script>

<div>
	<p class="font-mono text-xs tracking-[0.25em] text-accent uppercase">{eyebrow}</p>
	<h2 class="mt-3 text-3xl font-semibold tracking-tight text-fg md:text-4xl">{title}</h2>
</div>
