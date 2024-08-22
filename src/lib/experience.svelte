<script lang="ts">
	import SkillList from "./skillList.svelte";

  export let startDate:Date;
  export let endDate:Date | undefined = undefined;
  export let company:string;
  export let companyUrl:string;
  export let titles:string[];
  export let responsibilities:string;
  export let skills:string[];

  let startDateString:string, endDateString:string;

  if (endDate == undefined) {
    startDateString = startDate.getFullYear().toString();
    endDateString = "Present";
  } else if (startDate.getFullYear() != endDate.getFullYear()) {
    startDateString = startDate.getFullYear().toString();
    endDateString = endDate.getFullYear().toString();
  } else {
    startDateString = startDate.toLocaleString('default', {month: 'short'});
    endDateString = endDate.toLocaleString('default', {month: 'short'}) + endDate.getFullYear().toString();
  }
</script>

<li class="grid grid-cols-9 cursor-default max-w-full mb-12">
  <p class="text-slate-400 roboto-mono text-md align-bottom col-span-2">{startDateString} — {endDateString}</p>
  <div class="ml-4 col-span-7">
    <a class="roboto-mono font-bold text-slate-100 text-lg hover:text-orange" href={companyUrl} target="_blank" rel="noreferrer noopener">{company} ↗</a>
    {#each titles as title}
      <h4 class="roboto-mono font-medium {title == titles[0] ? "text-slate-300" : "text-slate-600"}">{title}</h4>
    {/each}
    <p class="text-slate-400 my-2">{responsibilities}</p>
    <SkillList skills={skills}/>
  </div>
</li>