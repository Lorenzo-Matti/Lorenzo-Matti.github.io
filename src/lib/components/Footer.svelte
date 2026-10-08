<script lang="ts">
	import { profile } from '#content/profile.ts';

	const year = new Date().getFullYear();
</script>

<footer class="border-t border-border">
	<div
		class="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 font-mono text-xs tracking-wider text-muted md:flex-row md:items-center md:justify-between"
	>
		<p>© {year} {profile.name}</p>
		<ul class="flex gap-6 uppercase">
			{#each profile.links as link (link.label)}
				<li>
					<a href={link.href} target="_blank" rel="noopener noreferrer" class="hover:text-fg">
						{link.label}
					</a>
				</li>
			{/each}
			<li><a href="mailto:{profile.email}" class="hover:text-fg">Email</a></li>
		</ul>
	</div>
</footer>
