<script lang="ts">
	export let skills: string[] = [];
</script>

{#if skills.length}
	<p class="font-mono text-sm leading-relaxed text-muted">
		<span class="sr-only">Stack: </span>{skills.join(' · ')}
	</p>
{/if}
