const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			backgroundImage: {
				primary: "url('/background.jpg')",
			},
			fontFamily: {
				sans: ['var(--font-open_sans)'],
				...defaultTheme.fontFamily.sans,
			},
		},
	},
	plugins: [],
};
