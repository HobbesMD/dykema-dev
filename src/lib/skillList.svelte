<script lang="ts">
  export let skills:string[] = [];
</script>

<ul class="flex flex-wrap">
  {#each skills as skill}
    <li class="h-8 w-fit text-center flex items-center rounded-3xl border-orange border-2 text-orange px-3 py1 text-sm mr-2 mt-2">
      {skill}
    </li>
  {/each}
</ul>