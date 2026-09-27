<script>
	import { onMount } from 'svelte';
	import '../app.css';
	import Header from '$lib/header.svelte';
	import Footer from '$lib/footer.svelte';

	// Tells app.css the app is live, so scroll-reveal elements wait for their observer.
	onMount(() => document.documentElement.classList.add('hydrated'));
</script>

<a
	href="#main"
	class="sr-only z-50 rounded-full bg-ink px-5 py-3 font-semibold text-paper focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
>
	Skip to content
</a>

<div class="flex min-h-screen flex-col">
	<Header />
	<main id="main" class="flex-1">
		<slot />
	</main>
	<Footer />
</div>
