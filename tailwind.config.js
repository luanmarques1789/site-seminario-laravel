/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				quicksand: ['Quicksand', 'sans-serif'],
				poppins: ['Poppins', 'sans-serif'],
			},
			colors: {
				custom: {
					red1: '#F9322C',
					red2: '#ED3B2F',
					yellow: '#DBCB71',
					'light-blue': '#8BE9FD',
				},
			},
		},
	},
	plugins: [],
};
