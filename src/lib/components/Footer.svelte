<script lang="ts">
	import { site } from '#lib/data/site.ts';

	const year = new Date().getFullYear();
</script>

<footer class="border-t border-border">
	<div
		class="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 text-sm text-muted md:flex-row md:items-center md:justify-between"
	>
		<p>© {year} {site.name}. Built with SvelteKit.</p>
		<ul class="flex gap-6">
			{#each site.socials as social (social.label)}
				<li>
					<a href={social.href} target="_blank" rel="noopener noreferrer" class="hover:text-fg">
						{social.label}
					</a>
				</li>
			{/each}
			<li><a href="mailto:{site.email}" class="hover:text-fg">Email</a></li>
		</ul>
	</div>
</footer>
