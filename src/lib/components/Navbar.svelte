<script lang="ts">
	import { resolve } from '$app/paths';
	import { site } from '#lib/data/site.ts';

	let scrolled = $state(false);

	const links = [
		{ label: 'About', href: resolve('/') + '#about' },
		{ label: 'Projects', href: resolve('/') + '#projects' }
	];
</script>

<svelte:window onscroll={() => (scrolled = window.scrollY > 24)} />

<header
	class={[
		'fixed inset-x-0 top-0 z-50 transition-colors duration-300',
		scrolled ? 'border-b border-border/60 bg-bg/70 backdrop-blur-md' : 'border-b border-transparent'
	]}
>
	<nav class="mx-auto flex h-16 max-w-6xl items-center justify-between px-6" aria-label="Main">
		<a
			href={resolve('/')}
			class="font-mono text-sm font-medium tracking-widest text-fg transition-opacity hover:opacity-70"
		>
			{site.initials}
		</a>

		<ul class="flex items-center gap-5 sm:gap-8">
			{#each links as link (link.label)}
				<li>
					<a href={link.href} class="text-sm text-muted transition-colors hover:text-fg">
						{link.label}
					</a>
				</li>
			{/each}
			<li>
				<a
					href="mailto:{site.email}"
					class="rounded-full border border-border px-4 py-1.5 text-sm text-fg transition-colors hover:border-fg/40 hover:bg-fg/5"
				>
					Contact
				</a>
			</li>
		</ul>
	</nav>
</header>
