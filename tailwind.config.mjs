/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors:{
				velde:'#6bff66',
				
			}
		},
		boxShadow: {
			green: '0 4px 6px -1px rgba(107, 255, 102, 0.1), 0 2px 4px -1px rgba(107, 255, 102, 0.06)', // Definir la sombra verde personalizada
		  },
	},
	plugins: [require("daisyui"),
		require('tailwindcss-animated')
	  ],
}


