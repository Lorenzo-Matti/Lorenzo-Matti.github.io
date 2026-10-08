<script lang="ts">
	import './layout.css';
	import favicon from '#lib/assets/favicon.svg';
	import Navbar from '#lib/components/Navbar.svelte';
	import Footer from '#lib/components/Footer.svelte';
	import { profile } from '#content/profile.ts';
	import type { LayoutProps } from './$types';

	let { children }: LayoutProps = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		rel="stylesheet"
		href="https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=Inter+Tight:wght@500;600&family=Inter:ital,wght@0,400;0,500;1,400&display=swap"
	/>
	<title>{profile.name} · {profile.role}</title>
	<meta name="description" content={profile.tagline} />
</svelte:head>

<Navbar />
<main>
	{@render children()}
</main>
<Footer />
