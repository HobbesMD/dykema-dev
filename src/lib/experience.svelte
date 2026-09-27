<script lang="ts">
	import type { Job } from '$lib/data/experience';
	import SkillList from './skillList.svelte';

	export let job: Job;
</script>

<article
	class="grid gap-4 border-b border-ink/15 py-10 last:border-b-0 md:grid-cols-[180px_minmax(0,1fr)] md:gap-x-10 lg:py-12 xl:grid-cols-[200px_280px_minmax(0,1fr)] xl:gap-12"
>
	<p class="font-display text-2xl font-medium leading-tight md:text-3xl lg:text-4xl">
		{job.start}{#if job.end}–<br class="hidden md:inline" />{job.end}{/if}
	</p>

	<div>
		<h3 class="text-xl font-bold md:text-2xl">
			{#if job.url}
				<a
					href={job.url}
					target="_blank"
					rel="noopener noreferrer"
					class="decoration-2 underline-offset-4 hover:underline"
				>
					{job.company} ↗
				</a>
			{:else}
				{job.company}
			{/if}
		</h3>
		{#each job.roles as role, i}
			<p class="mt-3 text-[17px] {i === 0 ? 'font-semibold' : 'font-medium text-muted'}">
				{role.title}
			</p>
			{#if role.dates}
				<p class="mt-0.5 font-mono text-sm text-muted">{role.dates}</p>
			{/if}
		{/each}
	</div>

	{#if job.highlights.length}
		<div class="flex flex-col gap-5 md:col-start-2 xl:col-start-auto">
			<ul class="bullets text-[17px] leading-relaxed text-ink-soft">
				{#each job.highlights as highlight}
					<li>{highlight}</li>
				{/each}
			</ul>
			<SkillList skills={job.stack} />
		</div>
	{/if}
</article>
