<script lang="ts">
	type Status = 'idle' | 'sending' | 'sent' | 'error';

	let status: Status = 'idle';

	async function handleSubmit(event: SubmitEvent & { currentTarget: HTMLFormElement }) {
		const form = event.currentTarget;
		status = 'sending';

		try {
			const response = await fetch(form.action, {
				method: 'POST',
				body: new FormData(form),
				headers: { Accept: 'application/json' }
			});

			if (response.ok) {
				status = 'sent';
				form.reset();
			} else {
				status = 'error';
			}
		} catch {
			status = 'error';
		}
	}

	const field =
		'h-[52px] w-full rounded-[10px] border-2 border-ink bg-white px-4 text-[17px] text-ink placeholder:text-muted';
</script>

<form
	action="https://formspree.io/f/xvgpbybr"
	method="POST"
	class="flex w-full max-w-[560px] flex-col"
	on:submit|preventDefault={handleSubmit}
>
	<label for="contact-name" class="text-[15px] font-semibold">Name</label>
	<input id="contact-name" name="name" type="text" autocomplete="name" required placeholder="First Last" class="mt-2 {field}" />

	<label for="contact-email" class="mt-4 text-[15px] font-semibold">Email</label>
	<input id="contact-email" name="email" type="email" autocomplete="email" required placeholder="you@company.com" class="mt-2 {field}" />

	<label for="contact-message" class="mt-4 text-[15px] font-semibold">Message</label>
	<textarea
		id="contact-message"
		name="message"
		rows="5"
		required
		placeholder="What would you like to talk about?"
		class="mt-2 w-full resize-none rounded-[10px] border-2 border-ink bg-white px-4 py-3.5 text-[17px] text-ink placeholder:text-muted"
	></textarea>

	<!-- Honeypot: Formspree drops submissions that fill this in. -->
	<input type="text" name="_gotcha" tabindex="-1" autocomplete="off" class="hidden" aria-hidden="true" />

	<button
		type="submit"
		class="btn btn-ink mt-6 h-14 w-full text-[17px] disabled:cursor-wait disabled:opacity-70"
		disabled={status === 'sending'}
	>
		{status === 'sending' ? 'Sending…' : 'Send message'}
	</button>

	<p class="mt-4 min-h-[1.5rem] text-center font-semibold" role="status" aria-live="polite">
		{#if status === 'sent'}
			Thanks — I’ll get back to you soon.
		{:else if status === 'error'}
			Something went wrong. Please try again or reach me on LinkedIn.
		{/if}
	</p>
</form>
