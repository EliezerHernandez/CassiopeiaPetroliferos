import { graphql, useStaticQuery } from 'gatsby';
import { getImage, StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
import { Gallery } from '../components/common/Gallery';
import { Hero } from '../components/common/Hero';
import SEO from '../components/common/SEO';
import { Layout } from '../components/layout';

const GaleriaPage: React.FunctionComponent = () => {
	const imageQuery = useStaticQuery(graphql`
		query getImagesFromGallery {
			allFile(filter: { sourceInstanceName: { eq: "gallery" } }) {
				nodes {
					childImageSharp {
						thumb: gatsbyImageData(
							width: 250
							height: 250
							placeholder: BLURRED
						)
						full: gatsbyImageData(layout: FULL_WIDTH)
					}
				}
			}
		}
	`);

	const images = imageQuery.allFile.nodes.map((node) => ({
		thumb: getImage(node.childImageSharp.thumb),
		full: getImage(node.childImageSharp.full),
	}));

	return (
		<Layout>
			<SEO title="Galeria | Cassiopeia" />
			<Hero
				image={
					<StaticImage
						src="../images/wallpapers/ciudad.png"
						alt="Banner"
						placeholder="blurred"
						transformOptions={{
							duotone: {
								highlight: '#8B94E1',
								shadow: '#242B71',
								opacity: 80,
							},
						}}
					/>
				}>
				<h1>Galeria</h1>
				<p className="text-lg">
					Mira nuestra galeria operativa donde ponemos evidencias de servicio
				</p>
			</Hero>

			<section className="py-8 px-inside flex flex-wrap justify-center gap-4">
				<Gallery images={images} imageClass="img cursor-pointer" />
			</section>
		</Layout>
	);
};
export default GaleriaPage;