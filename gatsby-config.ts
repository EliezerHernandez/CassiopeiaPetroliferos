import { config } from "process";

module.exports = {
	siteMetadata: {
		title: 'Cassiopeia Industries',
		description:
			'Dedicados a la comercialización de petrolíferos a nivel nacional a precios competitivos. Comprometidos a suministrar combustibles de calidad certificada, que garanticen la seguridad y confiabilidad operativa en las instalaciones y equipos de nuestros clientes.',
		image: 'src/images/logocompleto.jpeg',
		siteUrl: 'https://www.cassiopeia.com.mx/',
	},
	plugins: [
		'gatsby-plugin-postcss',
		'gatsby-plugin-image',
		{
			resolve: 'gatsby-plugin-google-analytics',
			options: {
				trackingId: 'G-ZKNP9KCMSY',
			},
		},
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
				path: `${__dirname}/src/images/`,
			},
			__key: 'images',
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'gallery',
				path: `${__dirname}/src/gallery/`,
			},
			__key: 'gallery',
		},
	],
};export default config;