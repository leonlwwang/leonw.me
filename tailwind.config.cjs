/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx}'],
	theme: {
		colors: {
			'base' : '#f8f0e2',
			'text' : '#292626',
		},
		fontFamily: {
			'sans' : ['IBM Plex Mono'],
			'mono' : ['Anonymous Pro', 'monospace']
		},
		extend: {},
	},
	plugins: [],
}
