<script lang="ts">
	import { onMount } from 'svelte';

	/** Final number to show; it is rendered as-is on the server and for reduced motion. */
	export let value: number;
	export let suffix = '';
	export let duration = 1400;

	let display = value;
	let el: HTMLSpanElement;

	onMount(() => {
		if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;

		display = 0;
		let frame = 0;

		const observer = new IntersectionObserver(
			(entries) => {
				if (!entries.some((entry) => entry.isIntersecting)) return;
				observer.disconnect();

				const start = performance.now();
				const tick = (now: number) => {
					const t = Math.min(1, (now - start) / duration);
					display = Math.round(value * (1 - Math.pow(1 - t, 3))); // ease-out cubic
					if (t < 1) frame = requestAnimationFrame(tick);
				};
				frame = requestAnimationFrame(tick);
			},
			{ threshold: 0.6 }
		);
		observer.observe(el);

		return () => {
			observer.disconnect();
			cancelAnimationFrame(frame);
		};
	});
</script>

<span bind:this={el} class="tabular-nums" aria-hidden="true">{display}{suffix}</span><span
	class="sr-only">{value}{suffix}</span
>
