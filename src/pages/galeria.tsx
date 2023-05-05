import { graphql, useStaticQuery } from 'gatsby';
import { getImage, StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
import { Hero } from '../components/common/Hero';
import SEO from '../components/common/SEO';
import { Layout } from '../components/layout';
import Gallery from '@browniebroke/gatsby-image-gallery';

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

	const images = imageQuery.allFile.nodes.map((node) => node.childImageSharp);

	console.log(images);
	
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
								<h1>Galería</h1>
				<p className="text-lg">
					Mira nuestra galería operativa donde ponemos evidencias de servicio.
				</p>
			</Hero>

			<section className="fadeable py-8 px-4 lg:px-inside flex flex-wrap justify-center gap-4">
				<Gallery images={images} customWrapper={imgWrapper} />
			</section>
		</Layout>
	);
};

interface wrapperProps {
	[x: string]: any;
}

const imgWrapper: React.FunctionComponent<wrapperProps> = ({
	children,
	onClick,
}) => (
	<div className="img-gallery" onClick={onClick}>
		{children}
	</div>
);

export default GaleriaPage;