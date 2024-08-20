<script>
	import Experience from "$lib/experience.svelte";

</script>


<div class="flex">
  <header class="md:w-1/2 xl:w-1/3 h-screen flex flex-col">
    <div class="ml-auto mr-0 md:mr-16 xl:mr-32 mt-64">
      <h2 class="text-stone-200 text-3xl">Hi, my name is</h2>
      <h1 class="text-orange playfair-display font-semibold text-8xl xl:text-9xl">Michael.</h1>
      <h2 class="text-stone-200 text-3xl mt-16">I’m a Full-Stack Engineer.</h2>
    </div>
    <p class="w-full text-center text-slate-600 uppercase pt-80 roboto-mono">Michael Dykema</p>
    <ul class="flex justify-center space-x-4 text-slate-600 pt-2">
      <li>
        <a href="https://www.linkedin.com/in/michaeldykema/" target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-10 w-10" aria-hidden="true"><path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path></svg>
        </a>
      </li>
      <li>
        <a href="https://github.com/HobbesMD" target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="h-10 w-10" aria-hidden="true"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
        </a>
      </li>
    </ul>
  </header>
  <main class="w-2/3 pr-16">
    <nav>
      <ul class="flex justify-around mt-16">
        <li>
          <a href="#about" class="text-stone-100 text-2xl roboto-mono">About</a>
        </li>
        <li>
          <a href="#experience" class="text-stone-100 text-2xl roboto-mono">Experience</a>
        </li>
        <li>
          <a href="#contact" class="text-stone-100 text-2xl roboto-mono">Contact</a>
        </li>
      </ul>
    </nav>
    <div class="px-8 w-full">
      <section id="about" class="mt-8">
        <p class="text-slate-300">Some about me text.</p>
      </section>
      <section id="experience">
        <ol>
          <Experience company="Auto-Owners Insurance" 
            companyUrl="https://www.auto-owners.com/"
            startDate={new Date(2022, 8)}
            titles={["Software Engineer"]} 
            responsibilities="Text about time there." 
            skills={["C#", ".NET Framework", "SQL","Azure", "JavaScript", "HTML", "SCSS"]}
            />
          <Experience company="AvaSure" 
            companyUrl="https://avasure.com/"
            startDate={new Date(2017, 2)}
            endDate={new Date(2022, 8)}
            titles={["Software Development Engineer in Test", "SDET Itern", "Quality Assurance"]} 
            responsibilities="" 
            skills={["C#", ".NET Core", "SQL", "MongoDB", "React", "JavaScript", "HTML", "SCSS", "Node.js", "Selenium"]}
            />
        </ol>
      </section>
    </div>
  </main>
</div>