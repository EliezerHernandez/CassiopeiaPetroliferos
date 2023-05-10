import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
import { Hero } from '../components/common/Hero';
import SEO from '../components/common/SEO';
import { ContactForm } from '../components/ContactForm';
import { Layout } from '../components/layout';

const ContactoPage: React.FunctionComponent = () => {
	return (
		<Layout>
			<SEO title="Contacto | Cassiopeia" />

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
					Comunícate con nuestro personal y cotiza con nosotros.
				</p>{' '}
			</Hero>

			<section className="fadeable py-8 px-4 lg:px-inside flex gap-8 flex-col md:flex-row">
				<div className="flex-1 flex flex-col gap-4">
					<h2>Información de contacto</h2>
					<div>
						<p className="font-bold">Correo</p>
						<p>
							<a
								className="text-primary-300"
								href="mailto:ventas@cassiopeia.com.mx">
								ventas@cassiopeia.com.mx
							</a>
						</p>
					</div>
					<div>
						<p className="font-bold">Dirección</p>
						<p>
							Av. Veracruz No. 85, Col. Condesa, Cuahutémoc, C.P. 06140 CDMX.
						</p>
					</div>
				</div>
				<StaticImage
					className="img"
					src="../images/pictures/atencion-siempre.JPG"
					alt=""
					placeholder="blurred"
					width={320}
				/>
			</section>

			<section className="bg-neutral-100 py-8 px-4 lg:px-inside">
				<article className="fadeable p-8 w-full bg-white rounded shadow">
					<h2>Cotiza con nosotros</h2>
					<p>
						Haznos saber tu situación en el formulario y te atendemos en la
						brevedad.
					</p>

					<ContactForm />
				</article>
			</section>
		</Layout>
	);
};

export default ContactoPage;