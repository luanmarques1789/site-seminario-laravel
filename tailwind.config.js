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
				orange: {
					tone1: '#ED3B2F',
				},
			},
		},
	},
	plugins: [],
};
