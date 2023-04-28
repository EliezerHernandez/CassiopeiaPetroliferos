import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: 'Cassiopeia Petrolíferos',
		description: 'Lema de la empresa.',
		image: '/src/images/logocompleto.jpeg',
		siteUrl: 'https://www.cassiopeia.com.mx/',
  },
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-image", 
    "gatsby-plugin-sitemap", 
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        "icon": "src/images/icon.png"
      }
    }, 
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp", 
    "gatsby-transformer-sharp", 
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/images/"
      },
      __key: "images"
    },
    // {
    //   resolve: "gatsby-plugin-google-analytics",
    //   options: {
    //     trackingId: "",
    //   },
    // },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `./src/pages/`,
      },
    },
    // {
		// 	resolve: 'gatsby-source-filesystem',
		// 	options: {
		// 		name: 'gallery',
		// 		path: './src/gallery/',
		// 	},
		// 	__key: 'gallery',
		// },
    {
			resolve: 'gatsby-plugin-web-font-loader',
			options: {
				google: {
					families: ['Inter:400,600'],
				},
			},
		},
  ]
};

export default config;
