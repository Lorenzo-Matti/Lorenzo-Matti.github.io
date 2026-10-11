<script lang="ts">
	import './layout.css';
	import favicon from '#lib/assets/favicon.svg';
	import Navbar from '#lib/components/Navbar.svelte';
	import Footer from '#lib/components/Footer.svelte';
	import { profile } from '#content/profile.ts';
	import { analytics } from '#content/analytics.ts';
	import { track } from '#lib/analytics.ts';
	import type { LayoutProps } from './$types';

	let { children }: LayoutProps = $props();

	// Links like ?ref=avio tell which CV, post or application a visit came from.
	$effect(() => {
		if (!analytics.websiteId) return;
		const ref = new URLSearchParams(window.location.search).get('ref');
		if (ref) track('ref', { ref: ref.slice(0, 40) });
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		rel="stylesheet"
		href="https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=Inter+Tight:wght@500;600&family=Inter:ital,wght@0,400;0,500;1,400&display=swap"
	/>
	<title>{profile.name} · {profile.headline}</title>
	<meta name="description" content="{profile.headline}. {profile.tagline}." />
	{#if analytics.websiteId}
		<!-- Cookieless, aggregate statistics: see /privacy. Respects "Do Not Track". -->
		<script
			defer
			src={analytics.scriptUrl}
			data-website-id={analytics.websiteId}
			data-domains={analytics.domain}
			data-do-not-track="true"
		></script>
	{/if}
</svelte:head>

<Navbar />
<main>
	{@render children()}
</main>
<Footer />
