<script lang="ts">
	import { asset } from '$app/paths';
	import { site } from '#lib/data/site.ts';

	let video: HTMLVideoElement | undefined = $state();

	// Respect users who ask for less motion: keep the poster frame only.
	$effect(() => {
		const query = window.matchMedia('(prefers-reduced-motion: reduce)');
		const sync = () => {
			if (!video) return;
			if (query.matches) video.pause();
			else video.play().catch(() => {});
		};
		sync();
		query.addEventListener('change', sync);
		return () => query.removeEventListener('change', sync);
	});
</script>

<section class="relative flex min-h-svh items-end overflow-hidden">
	<video
		bind:this={video}
		class="absolute inset-0 h-full w-full object-cover"
		poster={asset(site.hero.poster)}
		autoplay
		muted
		loop
		playsinline
		preload="metadata"
		aria-hidden="true"
		tabindex="-1"
	>
		<source src={asset(site.hero.videoMp4)} type="video/mp4" />
	</video>

	<!-- Darken the whole frame slightly, then fade the bottom into the page background. -->
	<div class="absolute inset-0 bg-bg/40" aria-hidden="true"></div>
	<div
		class="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-b from-transparent via-bg/70 to-bg"
		aria-hidden="true"
	></div>

	<div class="relative mx-auto w-full max-w-6xl px-6 pt-32 pb-24 md:pb-32">
		<p class="animate-fade-up font-mono text-xs tracking-[0.25em] text-accent uppercase">
			{site.role}
		</p>
		<h1
			class="animate-fade-up mt-4 text-5xl font-semibold tracking-tight text-fg [animation-delay:80ms] sm:text-7xl md:text-8xl"
		>
			{site.name}
		</h1>
		<p class="animate-fade-up mt-6 max-w-xl text-lg text-muted [animation-delay:160ms] md:text-xl">
			{site.tagline}
		</p>

		<div class="animate-fade-up mt-10 flex flex-wrap gap-3 [animation-delay:240ms]">
			{#each site.socials as social (social.label)}
				<a
					href={social.href}
					target="_blank"
					rel="noopener noreferrer"
					class="rounded-full border border-border bg-bg/40 px-5 py-2 text-sm text-fg backdrop-blur transition-colors hover:border-fg/40 hover:bg-fg/5"
				>
					{social.label}
				</a>
			{/each}
			<a
				href="mailto:{site.email}"
				class="rounded-full bg-fg px-5 py-2 text-sm font-medium text-bg transition-opacity hover:opacity-85"
			>
				Get in touch
			</a>
		</div>
	</div>

	<a
		href="#about"
		class="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 font-mono text-[10px] tracking-[0.3em] text-muted uppercase transition-colors hover:text-fg md:flex"
	>
		Scroll
		<span class="h-10 w-px animate-pulse bg-gradient-to-b from-muted to-transparent"></span>
	</a>
</section>

<style>
	@keyframes fade-up {
		from {
			opacity: 0;
			transform: translateY(16px);
		}
		to {
			opacity: 1;
			transform: none;
		}
	}
	:global(.animate-fade-up) {
		animation: fade-up 0.8s cubic-bezier(0.22, 1, 0.36, 1) both;
	}
</style>
