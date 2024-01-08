/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors:{
				primary:'#29353c',
				titles:'#09f',
				bg:'#292F33',
				naranja:'#95a6a7',
				probando:'#2b3d4f',
				nav:'#354a5f'
			}
		},
	},
	plugins: [require("daisyui")],
}


