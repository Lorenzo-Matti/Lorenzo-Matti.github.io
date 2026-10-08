<script lang="ts">
	import { resolve } from '$app/paths';
	import { profile } from '#content/profile.ts';

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
		scrolled ? 'border-b border-border bg-bg/80 backdrop-blur-md' : 'border-b border-transparent'
	]}
>
	<nav class="mx-auto flex h-16 max-w-6xl items-center justify-between px-6" aria-label="Main">
		<a
			href={resolve('/')}
			class="flex items-center gap-2 font-mono text-sm tracking-widest text-fg transition-opacity hover:opacity-70"
		>
			<span class="size-2 bg-accent" aria-hidden="true"></span>
			{profile.initials}
		</a>

		<ul class="flex items-center gap-5 font-mono text-xs tracking-[0.15em] uppercase sm:gap-8">
			{#each links as link (link.label)}
				<li>
					<a href={link.href} class="text-muted transition-colors hover:text-fg">{link.label}</a>
				</li>
			{/each}
			<li>
				<a href="mailto:{profile.email}" class="text-fg transition-colors hover:text-accent">
					Contact
				</a>
			</li>
		</ul>
	</nav>
</header>
