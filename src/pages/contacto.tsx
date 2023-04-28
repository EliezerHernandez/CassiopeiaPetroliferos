import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
import { Hero } from '../components/common/Hero';
import { Layout } from '../components/layout';

const ContactoPage: React.FunctionComponent = () => {
	return (
		<Layout>
			<Hero
				image={
					<StaticImage
						src="../images/wallpapers/perfil.png"
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
				<h1>Contacto</h1>
				<p className="text-lg">
					Comunicate con nuestro personal y pongamonos en contacto.
				</p>{' '}
			</Hero>

			<section className=""></section>
		</Layout>
	);
};

export default ContactoPage;