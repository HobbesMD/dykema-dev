import type { Action } from 'svelte/action';

/**
 * Fades an element up the first time it scrolls into view.
 * Pair with a `data-reveal` attribute in the markup so the element is hidden
 * from first paint (see the reveal rules in app.css). The optional parameter
 * is a delay in milliseconds, for staggering siblings.
 */
export const reveal: Action<HTMLElement, number | undefined> = (node, delay = 0) => {
	node.style.setProperty('--reveal-delay', `${delay}ms`);

	if (!('IntersectionObserver' in window)) {
		node.classList.add('is-visible');
		return;
	}

	const observer = new IntersectionObserver(
		(entries) => {
			if (entries.some((entry) => entry.isIntersecting)) {
				node.classList.add('is-visible');
				observer.disconnect();
			}
		},
		{ rootMargin: '0px 0px -8% 0px', threshold: 0.1 }
	);
	observer.observe(node);

	return {
		destroy() {
			observer.disconnect();
		}
	};
};
