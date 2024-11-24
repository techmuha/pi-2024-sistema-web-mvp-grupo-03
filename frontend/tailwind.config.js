/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
	plugins: [],
	theme: {
		fontFamily: {
			sans: ["Roboto"],
			serif: ["Suez One"],
		},
		extend: {
			colors: {
				primary: "#703EDB",
				secondary: "#EE9A1D",
				red: {
					50: "#fef2f2",
					100: "#fde3e3",
					200: "#fdcbcc",
					300: "#faa7a9",
					400: "#f57476",
					500: "#eb484b",
					600: "#db3e41",
					700: "#b52023",
					800: "#961e20",
					900: "#7d1f21",
					950: "#440b0c",
				},
			},
		},
	},
};
