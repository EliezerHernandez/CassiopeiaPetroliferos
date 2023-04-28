import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
import { Hero } from '../components/common/Hero';
import { Layout } from '../components/layout';

const GaleriaPage: React.FunctionComponent = () => {
	return (
		<Layout>
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
					Contamos con multiples servicios en nuestra empresa.
				</p>
			</Hero>

			<section className=""></section>
		</Layout>
	);
};

export default GaleriaPage;