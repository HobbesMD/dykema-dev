<script>
	import Experience from "$lib/experience.svelte";

</script>


<div class="flex">
  <div class="md:w-1/2 xl:w-1/3 h-screen flex flex-col">
    <div class="ml-auto mt-64">
      <h2 class="text-stone-200 text-3xl">Hi, my name is</h2>
      <h1 class="text-orange playfair-display font-semibold text-8xl xl:text-9xl">Michael.</h1>
      <h2 class="text-stone-200 text-3xl mt-16">I’m a Full-Stack Engineer.</h2>
    </div>
  </div>
  <div class="w-2/3 pr-16">
    <div class="flex justify-around mt-16">
      <h3 class="text-stone-100 text-2xl roboto-mono">About</h3>
      <h3 class="text-stone-100 text-2xl roboto-mono">Experience</h3>
      <h3 class="text-stone-100 text-2xl roboto-mono">Contact</h3>
    </div>
    <div class="px-8 w-full">
      <div class="mt-8">
        <p class="text-slate-300">Some about me text.</p>
      </div>
      <Experience company="Auto-Owners Insurance" 
        titles={["Software Engineer"]} 
        responsibilities="Text about time there." 
        skills={["JavaScript", "HTML", "SCSS"]}
        />
    </div>
  </div>
</div>