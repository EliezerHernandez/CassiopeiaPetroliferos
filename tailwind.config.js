module.exports = {
	mode: 'jit',
	purge: ['./src/**/*.{js,jsx,ts,tsx}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			spacing: {
				page: '800px',
				inside: 'calc((100% - 800px) / 2)',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};