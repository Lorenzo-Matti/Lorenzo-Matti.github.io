<script lang="ts">
	import { profile } from '#content/profile.ts';

	// Plain, short notice under Art. 13 GDPR. Update it if the analytics setup changes.
	const updated = 'October 2026';
</script>

<svelte:head>
	<title>Privacy · {profile.name}</title>
	<meta name="robots" content="noindex" />
</svelte:head>

<article class="mx-auto max-w-3xl px-6 pt-32 pb-24 md:pt-40">
	<p class="font-mono text-xs tracking-[0.2em] text-label uppercase">Privacy notice</p>
	<h1 class="mt-4 font-display text-4xl font-semibold tracking-tight text-fg md:text-5xl">
		Privacy
	</h1>
	<p class="mt-3 font-mono text-xs tracking-wider text-muted">Last updated: {updated}</p>

	<div
		class="mt-12 space-y-10 text-[1.0625rem] leading-[1.75] text-fg/75 [&_h2]:mb-3 [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-fg [&_li]:mt-1.5 [&_ul]:list-disc [&_ul]:pl-5"
	>
		<section>
			<h2>In short</h2>
			<p>
				This site uses no cookies and shows no banner. I only count visits in an aggregate way, to
				know if my portfolio is being read and which parts are useful. I cannot see who you are.
			</p>
		</section>

		<section>
			<h2>Who is responsible</h2>
			<p>
				{profile.name}, the owner of this site. Contact:
				<a href="mailto:{profile.email}" class="text-fg underline underline-offset-4"
					>{profile.email}</a
				>.
			</p>
		</section>

		<section>
			<h2>What is collected</h2>
			<p>
				Visit statistics are collected with <strong class="text-fg">Umami Cloud</strong>, with data
				stored in the European Union. For each visit it records:
			</p>
			<ul>
				<li>the pages and sections viewed, and how long the visit lasted;</li>
				<li>the website you came from (for example LinkedIn) and the <em>ref</em> part of the link, if any;</li>
				<li>browser, operating system, device type, screen size and language;</li>
				<li>country, region and city, estimated from your IP address.</li>
			</ul>
			<p class="mt-4">
				Your IP address is used only for a moment to estimate the location and to count unique
				visitors without cookies; it is not stored. No cookies or similar identifiers are saved on
				your device, data is not combined with other sources, and no profile is built. If your
				browser sends a "Do Not Track" signal, nothing is collected.
			</p>
		</section>

		<section>
			<h2>Links with a "ref" code</h2>
			<p>
				When I send my portfolio, for example with an application or my CV, the link can contain a
				short code like <em>?ref=cv</em>. It only tells me which link was used to open the site.
			</p>
		</section>

		<section>
			<h2>Why, and on what legal basis</h2>
			<p>
				To understand how my portfolio is used and improve it. The legal basis is my legitimate
				interest (Art. 6(1)(f) GDPR); the statistics are minimised and aggregate, in line with the
				Italian Data Protection Authority guidelines on cookies and other tracking tools (2021).
			</p>
		</section>

		<section>
			<h2>How long</h2>
			<p>Statistics are kept for up to 6 months, then deleted.</p>
		</section>

		<section>
			<h2>Hosting</h2>
			<p>
				The site is hosted on GitHub Pages (GitHub, Inc.), which may keep technical server logs,
				including IP addresses, for security reasons. See GitHub's privacy statement for details.
			</p>
		</section>

		<section>
			<h2>Your rights</h2>
			<p>
				You can ask for access, deletion or objection (Art. 15–22 GDPR) by writing to the address
				above. You can also lodge a complaint with the Italian Data Protection Authority
				(Garante per la protezione dei dati personali, garanteprivacy.it).
			</p>
		</section>
	</div>
</article>
