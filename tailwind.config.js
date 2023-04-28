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
			colors: {
				primary: {
					100: '#8B94E1',
					200: '#6C76D6',
					300: '#505BC0',
					400: '#38429C',
					500: '#242B71',
				},
				neutral: {
					100: '#F0F1F9',
					200: '#CDCEDA',
					300: '#B2B3BF',
					400: '#9596A5',
					500: '#787A8C',
					600: '#5E6072',
					700: '#434556',
					800: '#2C2E3A',
					900: '#1B1C24',
				},
				accent: 'FF601F',
				success: {
					100: '#73DFB2',
					200: '#50C091',
					300: '#328C66',
				},
				danger: {
					100: '#E5778B',
					200: '#C05064',
					300: '#953042',
				},
				warning: {
					100: '#E4D47C',
					200: '#C0AE50',
					300: '#9E8E38',
				},
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};