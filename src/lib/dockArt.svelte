<script lang="ts">
	// Decorative stand-in for the Fresh Coast project image: a top-down dock layout
	// on a grid of water, echoing the site's dock designer. Used when no screenshot is set.
</script>

<svg
	viewBox="0 0 640 480"
	preserveAspectRatio="xMidYMid slice"
	class="h-full w-full"
	aria-hidden="true"
	focusable="false"
>
	<defs>
		<pattern id="dock-grid" width="32" height="32" patternUnits="userSpaceOnUse">
			<path d="M32 0H0V32" fill="none" stroke="#F6F2E9" stroke-opacity="0.1" stroke-width="1" />
		</pattern>
	</defs>
	<rect width="640" height="480" fill="#002147" />
	<rect width="640" height="480" fill="url(#dock-grid)" />
	<!-- shoreline -->
	<path d="M0 404 C120 392 220 414 320 402 C430 390 530 412 640 398 V480 H0 Z" fill="#E9E2D2" />
	<!-- walkway -->
	<rect x="304" y="176" width="32" height="236" fill="#F6F2E9" />
	<!-- T-head -->
	<rect x="208" y="144" width="224" height="32" fill="#F6F2E9" />
	<!-- corner piece -->
	<path d="M208 176 L240 176 L208 208 Z" fill="#F6F2E9" />
	<!-- boat lift -->
	<rect x="352" y="192" width="72" height="112" fill="none" stroke="#FFAF13" stroke-width="4" />
	<path d="M366 212 Q388 196 410 212 L410 288 L366 288 Z" fill="#FFAF13" fill-opacity="0.25" />
	<!-- second slip -->
	<rect x="224" y="192" width="64" height="96" fill="none" stroke="#F6F2E9" stroke-opacity="0.5" stroke-width="2" stroke-dasharray="6 6" />
	<!-- scale label -->
	<g font-family="JetBrains Mono, monospace" font-size="13" fill="#F6F2E9" fill-opacity="0.75">
		<text x="32" y="44">60 ft</text>
		<line x1="32" y1="56" x2="608" y2="56" stroke="#F6F2E9" stroke-opacity="0.4" />
	</g>
</svg>
