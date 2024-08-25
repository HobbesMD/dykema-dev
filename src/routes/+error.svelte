<script>
	import { page } from "$app/stores";
</script>

<div class="flex flex-col w-full h-screen justify-center items-center roboto-mono">
  {#if $page.status == 404}
    <h1 class="text-orange text-9xl">404</h1>
    <h2 class="text-slate-400 text-5xl mt-8">Where were you trying to go?!</h2>
  {:else}
    <h1 class="text-orange text-5xl">You broke something!</h1>
    <p class="text-slate-400 mt-4 text-2xl">Congratulations?</p>
  {/if}
  <a href="/" class="mt-16 text-slate-100 hover:text-orange">Go back home ↩</a>
</div>