/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				paper: '#F6F2E9',
				sand: '#E9E2D2',
				ink: '#002147',
				'ink-soft': '#22385A',
				muted: '#4A5E7C',
				mist: '#B9C6D8',
				orange: '#FFAF13'
			},
			fontFamily: {
				display: ['Fraunces', 'Georgia', 'serif'],
				sans: ['"Public Sans"', 'system-ui', 'sans-serif'],
				mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace']
			}
		}
	},
	plugins: []
};
