<script lang="ts">
	import SkillList from "./skillList.svelte";

  export let company:string;
  export let titles:string[];
  export let responsibilities:string;
  export let skills:string[];
</script>

<div class="grid grid-cols-10 cursor-default max-w-full">
  <p class="text-slate-400 roboto-mono text-md align-bottom col-span-2">2022 — 2024</p>
  <div class="ml-4 col-span-8">
    <a class="roboto-mono font-bold text-slate-100 text-lg hover:" href="https://www.auto-owners.com/" target="_blank">{company} ↗</a>
    {#each titles as title}
      <h4 class="roboto-mono font-medium text-slate-300">{title}</h4>
    {/each}
    <p class="text-slate-400 mt-2">{responsibilities}</p>
    <SkillList skills={skills}/>
  </div>
</div>