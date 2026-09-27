<script lang="ts">
	export let number: string;
	export let title: string;
	export let id: string | undefined = undefined;
</script>

<div>
	<p class="font-mono text-sm tracking-[0.14em]" aria-hidden="true">{number}</p>
	<h2 {id} class="mt-2 font-display text-4xl font-semibold leading-[1.05] md:text-5xl lg:text-[56px]">
		{title}
	</h2>
</div>
