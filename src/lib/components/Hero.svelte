<script lang="ts">
	import { asset } from '$app/paths';
	import { profile } from '#content/profile.ts';

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
	<!--
		To change the video, replace the files in static/video/ keeping the same names
		(see README for the commands that produce them). The browser picks the first
		source it can play: a lighter 720p file on phones, sharp AV1 on desktop,
		and H.264 as the fallback for browsers without AV1 (e.g. older Safari).
	-->
	<video
		bind:this={video}
		class="absolute inset-0 h-full w-full object-cover"
		poster={asset('video/hero-poster.jpg')}
		autoplay
		muted
		loop
		playsinline
		preload="metadata"
		aria-hidden="true"
		tabindex="-1"
	>
		<source src={asset('video/hero-720.mp4')} type="video/mp4" media="(max-width: 768px)" />
		<source src={asset('video/hero-1080.av1.mp4')} type={'video/mp4; codecs="av01.0.08M.10"'} />
		<source src={asset('video/hero-1080.mp4')} type="video/mp4" />
	</video>

	<!-- A light tint for legibility, then a fade into the page background at the bottom. -->
	<div class="absolute inset-0 bg-bg/15" aria-hidden="true"></div>
	<div
		class="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-b from-transparent via-bg/60 to-bg"
		aria-hidden="true"
	></div>

	<div class="relative mx-auto w-full max-w-6xl px-6 pt-32 pb-24 md:pb-32">
		<p
			class="animate-fade-up flex items-center gap-3 font-mono text-xs tracking-[0.25em] text-fg uppercase"
		>
			<span class="size-2 bg-accent" aria-hidden="true"></span>
			{profile.role}
		</p>
		<h1
			class="animate-fade-up mt-4 font-display text-5xl font-semibold tracking-tight text-fg [animation-delay:80ms] sm:text-7xl md:text-8xl"
		>
			{profile.name}
		</h1>
		<p class="animate-fade-up mt-6 max-w-xl text-lg text-fg/80 [animation-delay:160ms] md:text-xl">
			{profile.tagline}
		</p>

		<div class="animate-fade-up mt-10 flex flex-wrap gap-3 [animation-delay:240ms]">
			{#each profile.links as link (link.label)}
				<a
					href={link.href}
					target="_blank"
					rel="noopener noreferrer"
					class="border border-fg/30 bg-bg/40 px-5 py-2 text-sm text-fg backdrop-blur transition-colors hover:border-fg hover:bg-fg/10"
				>
					{link.label}
				</a>
			{/each}
			<a
				href="mailto:{profile.email}"
				class="bg-accent px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
			>
				Get in touch
			</a>
		</div>
	</div>

	<a
		href="#about"
		class="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 font-mono text-[10px] tracking-[0.3em] text-fg/70 uppercase transition-colors hover:text-fg md:flex"
	>
		Scroll
		<span class="h-10 w-px animate-pulse bg-gradient-to-b from-fg/70 to-transparent"></span>
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
