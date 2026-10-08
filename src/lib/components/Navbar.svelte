<script lang="ts">
	import { page } from '$app/state';
	import { resolve } from '$app/paths';
	import { site } from '#lib/data/site.ts';

	let scrolled = $state(false);
	let menuOpen = $state(false);

	const links = [
		{ label: 'About', href: resolve('/') + '#about' },
		{ label: 'Work', href: resolve('/') + '#work' },
		{ label: 'Projects', href: resolve('/projects') }
	];

	function isActive(href: string) {
		return !href.includes('#') && page.url.pathname === href;
	}

	// Close the mobile menu after any navigation.
	$effect(() => {
		void page.url.pathname;
		menuOpen = false;
	});
</script>

<svelte:window onscroll={() => (scrolled = window.scrollY > 24)} />

<header
	class={[
		'fixed inset-x-0 top-0 z-50 transition-colors duration-300',
		scrolled || menuOpen
			? 'border-b border-border/60 bg-bg/70 backdrop-blur-md'
			: 'border-b border-transparent'
	]}
>
	<nav class="mx-auto flex h-16 max-w-6xl items-center justify-between px-6" aria-label="Main">
		<a
			href={resolve('/')}
			class="font-mono text-sm font-medium tracking-widest text-fg transition-opacity hover:opacity-70"
		>
			{site.initials}
		</a>

		<ul class="hidden items-center gap-8 md:flex">
			{#each links as link (link.label)}
				<li>
					<a
						href={link.href}
						aria-current={isActive(link.href) ? 'page' : undefined}
						class={[
							'text-sm transition-colors hover:text-fg',
							isActive(link.href) ? 'text-fg' : 'text-muted'
						]}
					>
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

		<button
			type="button"
			class="-mr-2 p-2 text-muted hover:text-fg md:hidden"
			aria-expanded={menuOpen}
			aria-controls="mobile-menu"
			aria-label={menuOpen ? 'Close menu' : 'Open menu'}
			onclick={() => (menuOpen = !menuOpen)}
		>
			<svg
				width="20"
				height="20"
				viewBox="0 0 20 20"
				fill="none"
				stroke="currentColor"
				stroke-width="1.5"
				aria-hidden="true"
			>
				{#if menuOpen}
					<path d="M5 5l10 10M15 5L5 15" />
				{:else}
					<path d="M3 6h14M3 14h14" />
				{/if}
			</svg>
		</button>
	</nav>

	{#if menuOpen}
		<ul id="mobile-menu" class="space-y-1 border-t border-border/60 px-6 py-4 md:hidden">
			{#each links as link (link.label)}
				<li>
					<a href={link.href} class="block py-2 text-muted hover:text-fg">{link.label}</a>
				</li>
			{/each}
			<li><a href="mailto:{site.email}" class="block py-2 text-muted hover:text-fg">Contact</a></li>
		</ul>
	{/if}
</header>
