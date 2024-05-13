/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'primary': '#FFEAE7',
				'dorado': '#FFC108',
				'dorado-100': '#f0dc60',
				'dorado-200': '#e9cc18',
				'dorado-300': '#e2c71f',
				'dorado-400': '#dabf17',
				'dorado-500': '#F2C12C',
				'dorado-600': '#d9ad26',
				'dorado-700': '#75660c',
			},
		},
	},
	plugins: [],
}
