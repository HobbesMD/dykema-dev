<script>
	import ContactForm from "$lib/contactForm.svelte";
  import Experience from "$lib/experience.svelte";
	import { onMount } from "svelte";

  onMount(() => {
    const sections = document.querySelectorAll('section');
    const config = {
      rootMargin: '-300px 0px -95%'
    };

    let observer = new IntersectionObserver(function (entries, self) {
      entries.forEach(entry => {
        console.log(entry);
        if (entry.isIntersecting) {
          intersectionHandler(entry); 
        }
      });
    }, config);

    sections.forEach(section => {
      observer.observe(section);
    });

    /**
     * @param {IntersectionObserverEntry} entry
     */
    function intersectionHandler(entry) {
      const id = entry.target.id;
      console.log(id)

      const currentlyActive = document.querySelector('nav a.active');
      const shouldBeActive = document.querySelector('nav a[href="#' + id + '"]');

      if (currentlyActive) {
        currentlyActive.classList.remove('active');
      }
      if (shouldBeActive) {
        shouldBeActive.classList.add('active');
      }
    }
  })

</script>

<div>
  <div class="lg:flex">
    <header class="lg:sticky lg:top-0 max-h-screen lg:w-1/2 lg:justify-end">
      <div class="w-fit mx-auto mt-64">
        <h2 class="text-stone-200 text-3xl">Hi, my name is</h2>
        <h1 class="text-orange playfair-display font-semibold text-8xl sm:text-9xl lg:text-8xl xl:text-9xl">Michael.</h1>
        <h2 class="text-stone-200 text-3xl mt-16">I’m a Full-Stack Engineer.</h2>
      </div>
      <p class="w-full text-center text-slate-500 uppercase pt-64 roboto-mono">Michael Dykema</p>
      <ul class="flex justify-center space-x-4 text-slate-600 pt-2">
        <li title="LinkedIn">
          <a href="https://www.linkedin.com/in/michaeldykema/" target="_blank" class="hover:text-orange">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-10 w-10" aria-hidden="true"><path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path></svg>
          </a>
        </li>
        <li title="Github">
          <a href="https://github.com/HobbesMD" target="_blank" class="hover:text-orange">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="h-10 w-10" aria-hidden="true"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
          </a>
        </li>
      </ul>
    </header>
    <main class="">
      <nav class="fixed lg:sticky w-full top-0 z-10 bg-gradient-to-b from-secondary-blue from-75% to-transparent">
        <ul class="flex justify-around pt-8 md:pt-16 pb-12">
          <li>
            <a href="#about" class="text-stone-100 text-2xl roboto-mono hover:text-orange active">About</a>
          </li>
          <li>
            <a href="#experience" class="text-stone-100 text-2xl roboto-mono">Experience</a>
          </li>
          <li>
            <a href="#contact" class="text-stone-100 text-2xl roboto-mono">Contact</a>
          </li>
        </ul>
      </nav>
      <div class="px-8 sm:w-full max-w-2xl pt-24 mx-auto">
        <section id="about" class="text-slate-300 scroll-m-64">
          <p class="pb-8">My interest in coding started with the first program I ever wrote: a text-based blackjack game I made when I was a sophomore in high school. My actual career in software development started rather unusually with building medical devices as a temporary gig. From there, I became a Quality Assurance tester, and then a Software Test Automation Engineer, and now a Software Engineer. It wasn&#39;t the path I had envisioned back in high school, but I think it&#39;s made me better developer.</p>
          <p class="pb-8">I find satisfaction in a wide variety of tasks from designing UIs to optimizing queries. I love being able to take a concept all the way from design to deployment, but really I just want to make high-quality software and learn something along the way.</p>
          <p class="pb-8">My compulsion to learn, design, and create is far from limited to coding. Food and drink is one of my love languages and lets me be experimental. I also love to build with my hands, whether it's converting a van to travel in or building a bed frame. If I'm not at home though, I'm probably out playing disc golf, pickleball, or hockey.</p>
        </section>
        <section id="experience" class="pt-20 scroll-m-20">
          <ol>
            <Experience company="Auto-Owners Insurance" 
              companyUrl="https://www.auto-owners.com/"
              startDate={new Date(2022, 8)}
              titles={["Software Engineer"]} 
              responsibilities="Work with affiliate company to migrate lines of business over to AO. Handle a variety of full-stack tasks including building new quoting UI and system routing back-end, creating new microservice to refactor old SQL data purging process, and building a new tool for automating end-of-month processes." 
              skills={["C#", ".NET Framework", "SQL","Azure", "JavaScript", "HTML", "SCSS"]}
            />
            <Experience company="AvaSure" 
              companyUrl="https://avasure.com/"
              startDate={new Date(2017, 2)}
              endDate={new Date(2022, 8)}
              titles={["Software Development Engineer in Test", "SDET Itern", "Quality Assurance"]} 
              responsibilities="Designed and built API and algorithm to support fully automated test scheduling and resource allocation. Wrote automated end-to-end test coverage. Collected data and generated reports to track and improve efficiency." 
              skills={["C#", ".NET Core", "SQL", "MongoDB", "React", "JavaScript", "HTML", "SCSS", "Node.js", "Selenium"]}
            />
            <div class="text-slate-300 hover:text-orange">
              <a href="./files/resume.pdf" target="_blank" rel="noreferrer noopener">View Full Résumé ↗</a>
            </div>
          </ol>
        </section>
        <section id="contact" class="flex flex-col items-center pt-24 mb-36">
          <h1 class="text-slate-200 text-xl mb-4">Want to get in contact?</h1>
          <ContactForm />
        </section>
        <div class="text-slate-700 w-fit mx-auto mb-12">
          <p>Designed in <b class="text-slate-500">Figma</b>.</p>
          <p>Built with <b class="text-slate-500">Svelte</b> + <b class="text-slate-500">Tailwind CSS</b>.</p>
          <p>Deployed on <b class="text-slate-500">Vercel</b>.</p>
        </div>
      </div>
    </main>
  </div>
</div>

<style>
  .active {
    color: theme(colors.orange);
  }
</style>