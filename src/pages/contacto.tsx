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
						<p className="font-bold">Teléfono</p>
						<p>
							<a className="text-primary-300" href="tel:+5559513012">
								Tel. (55) 5951 3012
							</a>
							<br />
						</p>
						<p>
							<a
								href="https://api.whatsapp.com/send/?phone=5215559513012&text&app_absent=0"
								target="_blank"
								rel="noopener noreferrer">
								<button className="btn bg-green-600 text-white p-2 rounded text-sm font-bold flex gap-4 justify-center items-center">
									Llamar por Whatsapp
									<svg
										className="fill-current w-4 h-4"
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										viewBox="0 0 24 24">
										<path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
									</svg>
								</button>
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