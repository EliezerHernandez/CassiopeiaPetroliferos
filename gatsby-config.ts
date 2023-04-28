import { config } from "process";

module.exports = {
	siteMetadata: {
		title: 'Cassiopeia Industries',
		description: 'Lema de la empresa.',
		image: '/src/images/logocompleto.jpeg',
		siteUrl: 'https://www.cassiopeia.com.mx/',
	},
	plugins: [
		'gatsby-plugin-postcss',
		'gatsby-plugin-image',
		// {
		//   resolve: "gatsby-plugin-google-analytics",
		//   options: {
		//     trackingId: "",
		//   },
		// },
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-sitemap',
		{
			resolve: 'gatsby-plugin-manifest',
			options: {
				icon: 'src/images/icon.png',
			},
		},
		'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',
		{
			resolve: 'gatsby-plugin-web-font-loader',
			options: {
				google: {
					families: ['Inter:400,600'],
				},
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'images',
				path: '/src/images/',
			},
			__key: 'images',
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'gallery',
				path: '/src/gallery/',
			},
			__key: 'gallery',
		},
	],
};export default config;