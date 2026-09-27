<script lang="ts">
	import { onMount } from 'svelte';
	import { activeSection } from '$lib/stores';
	import { jobs } from '$lib/data/experience';
	import Experience from '$lib/experience.svelte';
	import SectionHeading from '$lib/sectionHeading.svelte';
	import ContactForm from '$lib/contactForm.svelte';
	import DockArt from '$lib/dockArt.svelte';
	import CountUp from '$lib/countUp.svelte';
	import { reveal } from '$lib/reveal';

	const description =
		'Michael Dykema is a senior .NET developer focused on backend services and developer-platform modernization — Git migrations, CI/CD, and the systems teams depend on.';

	const impact = [
		{
			value: 60,
			suffix: '+',
			label: '.NET projects and services migrated from TFVC to Git, with new pipelines and code review'
		},
		{
			value: 90,
			suffix: '%',
			label: 'faster deployments — 10 minutes to under 2 — with CI/CD in Azure Pipelines'
		},
		{ value: 38, suffix: '%', label: 'less database storage from an Archive & Purge microservice I built solo' }
	];

	const interests = [
		{ label: 'Cooking', text: 'Food is a love language — and my favorite place to experiment.' },
		{ label: 'Building', text: 'A converted travel van and a custom wood bed frame, so far.' },
		{ label: 'Playing', text: 'Disc golf, pickleball, and hockey.' }
	];

	// Screenshot under /static; set to null to fall back to the dock illustration.
	const freshCoastImage: string | null = '/projects/fresh-coast.jpg';

	onMount(() => {
		const sections = document.querySelectorAll<HTMLElement>('section[id]');
		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) activeSection.set(entry.target.id);
				}
			},
			{ rootMargin: '-45% 0px -50% 0px' }
		);
		sections.forEach((section) => observer.observe(section));

		return () => {
			observer.disconnect();
			activeSection.set('');
		};
	});
</script>

<svelte:head>
	<title>Michael Dykema — Senior .NET Developer</title>
	<meta name="description" content={description} />
	<link rel="canonical" href="https://dykema.dev/" />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://dykema.dev/" />
	<meta property="og:title" content="Michael Dykema — Senior .NET Developer" />
	<meta property="og:description" content={description} />
</svelte:head>

<!-- Hero -->
<section
	class="wrap grid items-end gap-10 pb-16 pt-14 md:pb-24 md:pt-24 lg:pb-28 lg:pt-28 xl:grid-cols-[minmax(0,1fr)_340px] xl:gap-20"
	aria-labelledby="hero-heading"
>
	<div class="flex flex-col gap-6 md:gap-8">
		<p class="kicker rise">Michael Dykema — Senior .NET Developer</p>
		<h1
			id="hero-heading"
			style="--d: 90ms"
			class="rise font-display text-[34px] font-semibold leading-[1.04] tracking-[-0.02em] min-[375px]:text-[40px] sm:text-6xl md:text-7xl lg:text-8xl min-[1400px]:text-[112px] min-[1400px]:leading-[1.02]"
		>
			<span class="block text-balance">I modernize the systems</span>
			<span class="marker marker-draw whitespace-nowrap">teams depend on.</span>
		</h1>
	</div>
	<div class="flex max-w-[560px] flex-col gap-7 xl:pb-3">
		<p class="rise text-lg leading-relaxed text-ink-soft md:text-[19px]" style="--d: 220ms">
			Backend services, pipelines, and developer tooling at Auto-Owners Insurance. I find the process
			gaps, pitch the fix, and own it from architecture through production.
		</p>
		<div class="rise flex flex-wrap gap-3" style="--d: 320ms">
			<a href="#experience" class="btn btn-ink">See my work</a>
			<a href="#contact" class="btn btn-outline">Get in touch</a>
		</div>
	</div>
</section>

<!-- Impact band -->
<div class="bg-ink text-paper">
	<div class="wrap flex flex-col gap-10 py-16 md:py-20">
		<h2 class="kicker text-mist" data-reveal use:reveal>Selected impact</h2>
		<div class="grid gap-10 sm:grid-cols-3 sm:gap-8 lg:gap-16">
			{#each impact as item, i}
				<div class="flex flex-col gap-3" data-reveal use:reveal={i * 120}>
					<p class="font-display text-6xl font-semibold leading-none text-orange md:text-7xl lg:text-8xl">
						<CountUp value={item.value} suffix={item.suffix} />
					</p>
					<p class="text-base leading-normal md:text-lg">{item.label}</p>
				</div>
			{/each}
		</div>
	</div>
</div>

<!-- About -->
<section id="about" data-reveal use:reveal class="wrap grid gap-8 pt-24 md:pt-28 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-12 lg:pt-32 xl:grid-cols-[360px_minmax(0,1fr)] xl:gap-24">
	<SectionHeading number="01" title="About" />
	<div class="flex max-w-[760px] flex-col gap-6">
		<p class="text-lg leading-relaxed text-ink-soft md:text-xl md:leading-[1.7]">
			My path into software was unusual: a temp job building medical devices turned into QA, then
			test automation, then engineering. It wasn’t the route I pictured when I wrote a text-based
			blackjack game as a high-school sophomore, but it made me a better developer.
		</p>
		<p class="text-lg leading-relaxed text-ink-soft md:text-xl md:leading-[1.7]">
			These days I focus on backend services and the platform other developers build on: source
			control, pipelines, and the processes around them. I’m also piloting AI tooling for my
			department, and I built my latest client site by directing an AI coding agent.
		</p>
		<div class="mt-4 grid gap-6 border-t border-ink/15 pt-7 sm:grid-cols-3">
			{#each interests as interest}
				<div>
					<h3 class="font-mono text-[13px] uppercase tracking-[0.12em] text-muted">{interest.label}</h3>
					<p class="mt-2 text-[17px] leading-normal">{interest.text}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Experience -->
<section id="experience" class="wrap pt-24 md:pt-28 lg:pt-36">
	<div class="flex flex-wrap items-end justify-between gap-4 border-b-2 border-ink pb-7" data-reveal use:reveal>
		<SectionHeading number="02" title="Experience" />
		<a href="/resume.pdf" target="_blank" rel="noopener" class="link text-[17px]">Full résumé (PDF) <span class="arrow-ne" aria-hidden="true">↗</span></a>
	</div>
	<div>
		{#each jobs as job}
			<Experience {job} />
		{/each}
	</div>
</section>

<!-- Projects -->
<section id="projects" class="wrap pt-20 md:pt-24 lg:pt-28">
	<div data-reveal use:reveal><SectionHeading number="03" title="Projects" /></div>
	<div class="mt-10 flex flex-col gap-8">
		<article
			data-reveal
			use:reveal
			class="group grid overflow-hidden rounded-2xl border-2 border-ink bg-white xl:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]"
		>
			<div
				class="relative aspect-[4/3] border-b-2 border-ink bg-ink md:aspect-[16/10] xl:aspect-auto xl:min-h-[520px] xl:border-b-0 xl:border-r-2"
			>
				{#if freshCoastImage}
					<img
						src={freshCoastImage}
						alt="The Fresh Coast Dock & Lift homepage"
						width="1200"
						height="984"
						class="absolute inset-0 h-full w-full object-cover object-left-top transition-transform duration-700 ease-out group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
						loading="lazy"
					/>
				{:else}
					<div class="absolute inset-0"><DockArt /></div>
				{/if}
			</div>
			<div class="flex flex-col gap-4 p-7 md:p-10 xl:p-12">
				<div class="flex gap-2">
					<span class="pill bg-orange">Client work</span>
					<span class="pill border border-ink">2026</span>
				</div>
				<h3 class="font-display text-3xl font-semibold leading-tight md:text-[40px]">
					Fresh Coast Dock &amp; Lift
				</h3>
				<p class="text-lg leading-relaxed text-ink-soft">
					A marketing site, content system, and interactive dock designer for a West Michigan dock and
					boat lift company. I was product owner, designer, and lead developer, directing an AI coding
					agent through the build.
				</p>
				<ul class="bullets text-base leading-normal text-ink-soft">
					<li>Moved all content, including dock pieces, into Sanity so the owner runs the site without a developer.</li>
					<li>Rebuilt the dock designer. Its logic is shared with the quote API, so the server rebuilds the parts list itself.</li>
					<li>Quote requests arrive by email with the design and a picture of the layout attached.</li>
				</ul>
				<p class="font-mono text-sm text-muted">
					<span class="sr-only">Stack: </span>Next.js · TypeScript · Tailwind · Sanity · Resend · Vercel
				</p>
				<div class="mt-auto flex flex-wrap gap-x-6 gap-y-2 pt-2 text-[17px]">
					<a href="/projects/fresh-coast" class="link">Read the case study <span class="arrow-e" aria-hidden="true">→</span></a>
					<a
						href="https://www.freshcoastdockandlift.com"
						target="_blank"
						rel="noopener noreferrer"
						class="link"
					>
						Visit site <span class="arrow-ne" aria-hidden="true">↗</span>
					</a>
				</div>
			</div>
		</article>

		<article
			data-reveal
			use:reveal={100}
			class="flex flex-col gap-5 rounded-2xl border-2 border-ink bg-white p-7 md:flex-row md:items-center md:justify-between md:gap-10 md:px-10 md:py-8"
		>
			<div class="flex flex-col gap-2.5">
				<div class="flex flex-wrap items-center gap-x-4 gap-y-2">
					<h3 class="font-display text-2xl font-semibold md:text-[28px]">Overnight Precipitation Alerter</h3>
					<span class="pill border border-ink">In progress</span>
				</div>
				<p class="text-[17px] leading-relaxed text-ink-soft">
					A .NET 10 worker and small config API that watch the overnight forecast and push a phone alert
					when rain or snow is coming.
				</p>
			</div>
			<a
				href="https://github.com/HobbesMD"
				target="_blank"
				rel="noopener noreferrer"
				class="link shrink-0 text-[17px]"
			>
				View on GitHub <span class="arrow-ne" aria-hidden="true">↗</span>
			</a>
		</article>
	</div>
</section>

<!-- Contact -->
<div class="wrap pt-24 md:pt-28 lg:pt-36">
	<section
		id="contact"
		data-reveal
		use:reveal
		class="grid gap-10 rounded-3xl bg-orange p-7 sm:p-12 xl:grid-cols-[minmax(0,1fr)_minmax(0,500px)] xl:gap-20 xl:p-20"
		aria-labelledby="contact-heading"
	>
		<div class="flex flex-col gap-6">
			<p class="font-mono text-sm tracking-[0.14em]" aria-hidden="true">04</p>
			<h2 id="contact-heading" class="font-display text-6xl font-semibold leading-none xl:text-7xl min-[1400px]:text-[88px]">
				Let’s talk.
			</h2>
			<p class="max-w-[440px] text-lg leading-relaxed md:text-xl">
				Questions, opportunities, or a good disc golf course recommendation — send a note.
			</p>
			<div class="mt-auto flex gap-7 text-[17px]">
				<a href="https://www.linkedin.com/in/michaeldykema/" target="_blank" rel="noopener noreferrer" class="link hover:decoration-ink">LinkedIn <span class="arrow-ne" aria-hidden="true">↗</span></a>
				<a href="https://github.com/HobbesMD" target="_blank" rel="noopener noreferrer" class="link hover:decoration-ink">GitHub <span class="arrow-ne" aria-hidden="true">↗</span></a>
			</div>
		</div>
		<ContactForm />
	</section>
</div>
