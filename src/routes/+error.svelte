<script lang="ts">
	import { page } from '$app/stores';
</script>

<svelte:head>
	<title>{$page.status === 404 ? 'Page not found' : 'Something broke'} — dykema.dev</title>
</svelte:head>

<section class="wrap flex flex-col items-start gap-6 py-24 md:py-36">
	<p class="kicker">Error {$page.status}</p>
	{#if $page.status === 404}
		<h1 class="font-display text-6xl font-semibold leading-none md:text-8xl">
			Where were you <span class="marker">trying to go?</span>
		</h1>
		<p class="text-lg text-ink-soft">That page doesn’t exist — or it moved.</p>
	{:else}
		<h1 class="font-display text-6xl font-semibold leading-none md:text-8xl">
			You broke <span class="marker">something.</span>
		</h1>
		<p class="text-lg text-ink-soft">Congratulations? Try again in a moment.</p>
	{/if}
	<a href="/" class="btn btn-ink mt-4">Back home</a>
</section>
