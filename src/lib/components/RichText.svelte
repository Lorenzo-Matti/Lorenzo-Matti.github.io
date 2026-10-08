<script lang="ts">
	/** Renders a plain string, turning *words between asterisks* into italics. */
	let { text }: { text: string } = $props();

	const parts = $derived(text.split(/\*([^*]+)\*/));
</script>

{#each parts as part, i (i)}{#if i % 2 === 1}<em>{part}</em>{:else}{part}{/if}{/each}
