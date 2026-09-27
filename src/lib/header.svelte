<script lang="ts">
	import { page } from '$app/stores';
	import { activeSection } from '$lib/stores';

	const links = [
		{ id: 'about', label: 'About' },
		{ id: 'experience', label: 'Experience' },
		{ id: 'projects', label: 'Projects' },
		{ id: 'contact', label: 'Contact' }
	];

	let open = false;

	$: onHome = $page.url.pathname === '/';
	// Close the mobile menu whenever the route changes.
	$: $page.url.pathname, (open = false);

	function close() {
		open = false;
	}
</script>

<header class="sticky top-0 z-40 border-b border-ink/15 bg-paper/95 backdrop-blur">
	<div class="wrap flex h-16 items-center justify-between md:h-24">
		<a href="/" class="font-display text-2xl font-semibold md:text-[26px]" aria-label="dykema.dev home">
			dykema<span class="ml-0.5 bg-orange px-1">.dev</span>
		</a>

		<nav aria-label="Primary" class="hidden items-center gap-8 font-medium md:flex lg:gap-10">
			{#each links as link}
				{@const active = onHome && $activeSection === link.id}
				<a
					href="/#{link.id}"
					class="py-2 decoration-orange decoration-[3px] underline-offset-8 hover:underline"
					class:underline={active}
					aria-current={active ? 'true' : undefined}
				>
					{link.label}
				</a>
			{/each}
			<a href="/resume.pdf" target="_blank" rel="noopener" class="btn btn-ink h-11 px-5">
				Résumé ↗
			</a>
		</nav>

		<div class="flex items-center gap-2 md:hidden">
			<a href="/resume.pdf" target="_blank" rel="noopener" class="btn btn-ink h-11 px-4 text-sm">
				Résumé ↗
			</a>
			<button
				type="button"
				class="inline-flex h-11 w-11 items-center justify-center rounded-full hover:bg-ink/10"
				aria-expanded={open}
				aria-controls="mobile-nav"
				aria-label={open ? 'Close menu' : 'Open menu'}
				on:click={() => (open = !open)}
			>
				<svg viewBox="0 0 24 24" class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true">
					{#if open}
						<path d="M6 6l12 12M18 6L6 18" />
					{:else}
						<path d="M4 7h16M4 12h16M4 17h16" />
					{/if}
				</svg>
			</button>
		</div>
	</div>

	{#if open}
		<nav id="mobile-nav" aria-label="Primary" class="border-t border-ink/15 md:hidden">
			<ul class="wrap flex flex-col py-2">
				{#each links as link}
					<li>
						<a href="/#{link.id}" class="block py-3 text-lg font-medium" on:click={close}>
							{link.label}
						</a>
					</li>
				{/each}
			</ul>
		</nav>
	{/if}
</header>
