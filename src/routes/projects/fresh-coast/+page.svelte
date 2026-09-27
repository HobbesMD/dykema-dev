<script lang="ts">
	import DockArt from '$lib/dockArt.svelte';

	const title = 'Fresh Coast Dock & Lift — Case study — Michael Dykema';
	const description =
		'How I rebuilt a West Michigan dock company’s website into an editable marketing site with a Sanity CMS, a quote pipeline, and an interactive dock designer, working with an AI coding agent.';

	const facts = [
		{ label: 'Client', value: 'Fresh Coast Dock & Lift, a dock and boat lift installation company in Grand Rapids, MI' },
		{ label: 'My role', value: 'Product owner, designer and lead developer (solo, working with an AI coding agent)' },
		{ label: 'Timeline', value: 'September 2026 (launched September 28, 2026)' }
	];

	const stack = [
		'Next.js 14 (App Router)',
		'React 18',
		'TypeScript',
		'Tailwind CSS',
		'Sanity CMS',
		'GROQ',
		'Vercel',
		'Vercel Analytics',
		'Resend',
		'Canvas API',
		'Pointer Events',
		'Schema.org structured data',
		'Figma',
		'Claude (AI coding agent)'
	];
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<link rel="canonical" href="https://dykema.dev/projects/fresh-coast" />
	<meta property="og:type" content="article" />
	<meta property="og:url" content="https://dykema.dev/projects/fresh-coast" />
	<meta property="og:title" content="Fresh Coast Dock & Lift — case study" />
	<meta property="og:description" content={description} />
</svelte:head>

<article>
	<header class="wrap pb-12 pt-10 md:pb-16 md:pt-16">
		<a href="/#projects" class="link text-[15px]">← All projects</a>
		<p class="kicker mt-10">Case study · Client work · 2026</p>
		<h1 class="mt-4 max-w-[1000px] font-display text-5xl font-semibold leading-[1.04] tracking-[-0.02em] md:text-7xl lg:text-[88px]">
			Fresh Coast <span class="marker">Dock &amp; Lift</span>
		</h1>
		<p class="mt-6 max-w-[760px] text-xl leading-relaxed text-ink-soft md:text-2xl">
			A marketing site, content system and interactive dock designer for a West Michigan waterfront
			service company, built by directing an AI coding agent.
		</p>

		<dl class="mt-12 grid gap-6 border-t-2 border-ink pt-8 sm:grid-cols-2 lg:grid-cols-4">
			{#each facts as fact}
				<div>
					<dt class="font-mono text-[13px] uppercase tracking-[0.12em] text-muted">{fact.label}</dt>
					<dd class="mt-2 text-[17px] leading-normal">{fact.value}</dd>
				</div>
			{/each}
			<div>
				<dt class="font-mono text-[13px] uppercase tracking-[0.12em] text-muted">Live site</dt>
				<dd class="mt-2 text-[17px]">
					<a href="https://www.freshcoastdockandlift.com" target="_blank" rel="noopener noreferrer" class="link">
						freshcoastdockandlift.com ↗
					</a>
				</dd>
			</div>
		</dl>
	</header>

	<div class="wrap">
		<div class="aspect-[16/9] overflow-hidden rounded-2xl border-2 border-ink bg-ink md:aspect-[21/9]">
			<DockArt />
		</div>
	</div>

	<div class="wrap">
		<div class="case-study mx-auto max-w-[760px] py-16 md:py-24">
			<h2>Short version</h2>
			<p>
				I rebuilt Fresh Coast Dock &amp; Lift’s website from a half-finished Next.js project into a fast,
				editable marketing site, now live at freshcoastdockandlift.com. It has a page for each service, a
				quote form that emails leads with attachments, and a browser-based dock designer that lets
				homeowners lay out their dock and send the parts list with a quote request. I directed an AI
				coding agent through the build. I owned the product, design and architecture decisions, and I
				reviewed and tested every change.
			</p>

			<h2>The problem</h2>
			<p>
				Fresh Coast installs, repairs and moves docks and boat lifts on West Michigan lakes. Before this
				project, they had an older site and a partly built Next.js rewrite:
			</p>
			<ul>
				<li>a rough Figma file</li>
				<li>a drag-and-drop dock builder backed by Supabase</li>
				<li>content hard-coded throughout the components</li>
			</ul>
			<p>
				The owner couldn’t change anything without a developer. Adding a dock piece to the builder meant a
				database edit, and the site did little for search.
			</p>
			<p>The goals for v1:</p>
			<ol>
				<li><strong>Look like a trustworthy local business:</strong> clear services, a phone number everywhere, and a quote form one tap away.</li>
				<li><strong>Let the owner run it herself:</strong> text, photos, reviews, services and dock pieces, all without a developer.</li>
				<li><strong>Turn the dock builder into a real lead tool,</strong> instead of a demo.</li>
				<li><strong>Get found:</strong> give each service its own searchable page.</li>
			</ol>

			<h2>What I built</h2>
			<ul>
				<li><strong>A new visual design.</strong> Full-bleed lake photography, bold condensed type and a palette pulled from the logo. It’s responsive from 320px phones to wide desktops.</li>
				<li><strong>Sanity CMS for all content.</strong> Every page’s text and photos, services, reviews, FAQs, the gallery, dock designer pieces and Google titles and descriptions are editable in a custom Studio.</li>
				<li><strong>Service pages built for search.</strong> Each service has its own page with structured data (Service and BreadcrumbList), its own title and description, and a canonical URL, and all of them are listed in the sitemap.</li>
				<li>
					<strong>A rebuilt dock designer.</strong>
					<ul>
						<li>Tap or drag pieces onto a 60 ft grid of water, then rotate, copy and remove them.</li>
						<li>Works with touch and keyboard, and has a full-screen mode.</li>
						<li>Checkbox extras (remotes, ladders) with quantities.</li>
						<li>Designs save automatically, can be shared by link, and download as a picture.</li>
						<li>One click sends the design with a quote request.</li>
					</ul>
				</li>
				<li>
					<strong>A quote pipeline.</strong>
					<ul>
						<li>Requests are emailed through Resend, with the customer’s details, a parts list rebuilt on the server, a link that reopens the design, and a picture of the layout attached.</li>
						<li>A spam trap filters bots.</li>
						<li>A thank-you page lets analytics count quote requests.</li>
					</ul>
				</li>
				<li>
					<strong>Launch tooling.</strong>
					<ul>
						<li>Owner-facing switches to hide unfinished features (like the membership page) and every link to them, so launch didn’t have to wait on them.</li>
						<li>A plain-language privacy page, analytics, and a written editing guide for the client.</li>
					</ul>
				</li>
			</ul>

			<h2>Design</h2>
			<p>
				I gave the agent a set of style-reference and competitor sites plus the Figma file. It came back
				with several design directions side by side on one comparison page. I picked the bolder option:
				full-bleed photos, uppercase condensed headlines, color-blocked sections and pill buttons. It felt
				the most like the company, a crew on the water rather than a corporate brochure.
			</p>
			<p>From there, I reviewed the build in the browser and sent back specific fixes:</p>
			<ul>
				<li>a strip of dead space beside the designer grid</li>
				<li>selected pieces that didn’t visibly highlight</li>
				<li>a stray horizontal scrollbar</li>
				<li>an email address that wrapped mid-word on phones</li>
				<li>an off-center “×” on the FAQ toggle</li>
			</ul>
			<p>Small things, but that level of finish is what makes a small-business site feel professional.</p>

			<h2>Content management: Sanity instead of a database</h2>
			<p>The original builder kept its dock pieces in Supabase. I switched everything to <strong>Sanity</strong>, a hosted content system:</p>
			<ul>
				<li><strong>One place to edit.</strong> Pages, photos and dock pieces all live in one Studio, so the owner doesn’t have to learn two tools.</li>
				<li><strong>No redeploys.</strong> The site reads Sanity’s API on the server and refreshes about once a minute, so edits go live without a rebuild.</li>
				<li><strong>The site never goes blank.</strong> Every content loader falls back to built-in copy if Sanity is unreachable, and empty lists (no reviews yet) simply hide their section.</li>
				<li><strong>The Studio is shaped around the owner, not the data model.</strong> It uses single-page documents for things like “Site settings” and “About page”, plain-English field help, length warnings on Google titles, and toggles like “Show the dock designer”.</li>
			</ul>
			<p>
				I wrote a short editing guide covering how to publish, where each section of the site is edited,
				photo and alt-text tips, and an off-site SEO checklist centered on the Google Business Profile.
			</p>

			<h2>The dock designer</h2>
			<p>This is the most distinctive part of the site, and it got a full rebuild.</p>
			<p>
				<strong>Architecture.</strong> The designer’s logic lives in one pure TypeScript module: placement,
				collision-free spot finding, the parts list, and encoding designs for links. It has no browser or
				React code, so <strong>the same code runs in the browser and in the quote API.</strong> When a
				customer sends a design, the server doesn’t trust the parts list the browser sends. It unpacks the
				layout and rebuilds the list from the live product catalog.
			</p>
			<p><strong>Sharing and saving.</strong></p>
			<ul>
				<li>Designs are packed into a compact, versioned format.</li>
				<li>It’s stored in the browser and in a base64url fragment for share links.</li>
				<li>When the grid widened from 50 to 60 ft, old designs and links were migrated automatically, so they stay centered.</li>
				<li>Pieces that were discontinued since a design was saved are removed, with a notice.</li>
			</ul>
			<p><strong>Interaction.</strong></p>
			<ul>
				<li>Pointer events handle mouse and touch the same way.</li>
				<li>The grid sizes to fit the screen and only scrolls sideways on narrow phones.</li>
				<li>Full-screen mode fits the full 60 ft width and about 50 ft of water on desktop. On phones it fills the width and suggests turning the phone sideways.</li>
				<li>Corner pieces render as rotatable triangles.</li>
			</ul>
			<p>
				<strong>Catalog in the CMS.</strong> In Sanity, each product is set as either a piece placed on the
				grid (with size, shape and color) or a checkbox extra (with an optional quantity). The owner can add
				a new lift size in a minute.
			</p>

			<h2>Search and launch details</h2>
			<ul>
				<li>A page per service with descriptive URLs. I renamed them to keyword-rich slugs before launch, with permanent redirects from the old ones.</li>
				<li>Google titles and descriptions for every page are editable in Sanity, with sensible defaults.</li>
				<li>There’s a canonical www domain, and the sitemap and robots file are generated from live content, so hidden pages stay out.</li>
				<li>Open Graph and Twitter images: each service page uses its own photo, and the business can set a default share image.</li>
				<li>LocalBusiness structured data site-wide.</li>
			</ul>

			<h2>Working with an AI coding agent</h2>
			<p>
				I built this with Claude working as a coding agent. It could write files into my repository, run
				type checks in its own workspace, and drive a browser against my local dev server. It had no shell
				on my machine, so I ran installs, builds and deploys. I treated it like a fast, capable
				junior-to-mid engineer who needs clear direction and review.
			</p>
			<p><strong>What I owned:</strong></p>
			<ul>
				<li>
					<strong>Product decisions.</strong> For example:
					<ul>
						<li>Moving from Supabase to a CMS.</li>
						<li>Keeping the triangle corner pieces.</li>
						<li>Hiding the unfinished membership offer until it’s ready.</li>
					</ul>
				</li>
				<li><strong>Design direction,</strong> by picking between the options the agent laid out and specifying the details.</li>
				<li><strong>Scope and sequencing.</strong> I asked the agent for options with effort estimates, then chose. Examples: fit-to-screen sizing over full zoom controls, and a simple extras checklist over add-ons tied to individual lifts.</li>
				<li><strong>Review.</strong> I tested every change myself and reported regressions with screenshots.</li>
			</ul>
			<p><strong>What made the collaboration work:</strong></p>
			<ul>
				<li><strong>Verification before “done”.</strong> The agent checked each change against the running site with scripted browser checks, measuring layouts at 320 to 1440px widths, testing the designer’s interactions, and sending a real test quote through Resend and confirming it landed in my inbox. That caught problems like a React StrictMode double-load that stopped share links from opening.</li>
				<li><strong>Honest gap reports.</strong> When something couldn’t be verified, it said so. One example was the extras checklist, which it couldn’t see until real extras existed in the CMS.</li>
				<li><strong>Guardrails.</strong> It never touched credentials or created accounts. I added API keys and environment variables myself, and it walked me through each one.</li>
				<li><strong>Written state.</strong> A running plan document in the project kept decisions and open items straight across sessions.</li>
			</ul>
			<p>
				<strong>What I’d do differently:</strong> set up a preview deployment with the CMS connected on day
				one. One bug, the preview site silently showing fallback content because its CMS settings were
				missing, only showed up late. It’s now handled in code with a safe default.
			</p>

			<h2>Results</h2>
			<ul>
				<li>The site launched on September 28, 2026, at <a href="https://www.freshcoastdockandlift.com" target="_blank" rel="noopener noreferrer">freshcoastdockandlift.com</a>.</li>
				<li>The owner updates her whole site without a developer.</li>
				<li>Every service has its own page for search.</li>
				<li>Leads arrive as organized emails, with dock designs attached when the customer made one.</li>
				<li>The dock designer went from a database-backed demo to a lead tool the owner controls.</li>
				<li>Unfinished features can be switched on from the CMS when they’re ready, with no code change.</li>
			</ul>
			<p><em>Next up: Google Search Console and Business Profile setup, and collecting real customer reviews.</em></p>

			<h2>Tech stack</h2>
			<ul class="stack">
				{#each stack as item}
					<li>{item}</li>
				{/each}
			</ul>
		</div>
	</div>

	<div class="wrap">
		<div class="flex flex-col items-start justify-between gap-6 rounded-3xl bg-orange p-8 sm:flex-row sm:items-center md:p-12">
			<p class="font-display text-3xl font-semibold leading-tight md:text-4xl">Want something like this built?</p>
			<a href="/#contact" class="btn btn-ink shrink-0">Get in touch</a>
		</div>
	</div>
</article>

<style>
	.case-study {
		font-size: 1.125rem;
		line-height: 1.75;
		color: #22385a;
	}

	.case-study h2 {
		margin: 3.5rem 0 1rem;
		font-family: Fraunces, Georgia, serif;
		font-size: 2.25rem;
		font-weight: 600;
		line-height: 1.1;
		color: #002147;
	}

	.case-study h2:first-child {
		margin-top: 0;
	}

	.case-study p {
		margin: 0 0 1.25rem;
	}

	.case-study strong {
		font-weight: 700;
		color: #002147;
	}

	.case-study ul,
	.case-study ol {
		margin: 0 0 1.5rem;
		padding-left: 1.4rem;
	}

	.case-study ul {
		list-style: disc;
	}

	.case-study ol {
		list-style: decimal;
	}

	.case-study li {
		margin: 0.4rem 0;
		padding-left: 0.25rem;
	}

	.case-study li::marker {
		color: #002147;
	}

	.case-study li ul {
		margin: 0.4rem 0 0.6rem;
		list-style: circle;
	}

	.case-study a {
		font-weight: 600;
		color: #002147;
		text-decoration: underline;
		text-decoration-thickness: 2px;
		text-underline-offset: 4px;
	}

	.case-study .stack {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		padding: 0;
		list-style: none;
	}

	.case-study .stack li {
		margin: 0;
		padding: 0.35rem 0.8rem;
		border: 1px solid #002147;
		border-radius: 999px;
		font-family: 'JetBrains Mono', ui-monospace, monospace;
		font-size: 0.8125rem;
		color: #002147;
	}

	@media (min-width: 768px) {
		.case-study h2 {
			font-size: 2.75rem;
		}
	}
</style>
