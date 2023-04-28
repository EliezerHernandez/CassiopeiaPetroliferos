import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
import { Hero } from '../components/common/Hero';
import SEO from '../components/common/SEO';
import { Layout } from '../components/layout';

const ServiciosPage: React.FunctionComponent = () => {
	return (
		<Layout>
				<SEO title="Servicios | Cassiopeia" />

			<Hero
				image={
					<StaticImage
						src="../images/wallpapers/camion.png"
						alt="Banner"
						placeholder="blurred"
						transformOptions={{
							duotone: {
								highlight: '#8B94E1',
								shadow: '#242B71',
								opacity: 80,
							},
						}}
						loading="eager"
					/>
				}>
				<h1>Servicios</h1>
				<p className="text-lg">
					Contamos con multiples servicios en nuestra empresa.
				</p>
			</Hero>

			<section className="flex flex-col">
				<article className="servicios-item">
					<div className="flex-1">
						<h2>Combustibles con repaldo de laboratorios certificados</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Asperiores tenetur illum debitis, velit quod rerum repellendus
							ducimus! Cumque atque sit laborum illum, deserunt sequi dolores
							ea. Voluptatibus, vel eum. Excepturi!
						</p>
					</div>
					<StaticImage
						src="../images/placeholder.jpg"
						alt=""
						placeholder="blurred"
						width={320}
					/>
				</article>
				<article className="servicios-item">
					<div className="flex-1">
						<h2>Sinergia con compañias de transporte especializado</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Asperiores tenetur illum debitis, velit quod rerum repellendus
							ducimus! Cumque atque sit laborum illum, deserunt sequi dolores
							ea. Voluptatibus, vel eum. Excepturi!
						</p>
					</div>
					<StaticImage
						src="../images/placeholder.jpg"
						alt=""
						placeholder="blurred"
						width={320}
					/>
				</article>
				<article className="servicios-item">
					<div className="flex-1">
						<h2>Colocación de tanques de autoconsumo</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Asperiores tenetur illum debitis, velit quod rerum repellendus
							ducimus! Cumque atque sit laborum illum, deserunt sequi dolores
							ea. Voluptatibus, vel eum. Excepturi!
						</p>
					</div>
					<StaticImage
						src="../images/placeholder.jpg"
						alt=""
						placeholder="blurred"
						width={320}
					/>
				</article>
				<article className="servicios-item">
					<div className="flex-1">
						<h2>Personal altamente capacitado</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Asperiores tenetur illum debitis, velit quod rerum repellendus
							ducimus! Cumque atque sit laborum illum, deserunt sequi dolores
							ea. Voluptatibus, vel eum. Excepturi!
						</p>
					</div>
					<StaticImage
						src="../images/placeholder.jpg"
						alt=""
						placeholder="blurred"
						width={320}
					/>
				</article>
				<article className="servicios-item">
					<div className="flex-1">
						<h2>Ventas directas con clientes</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Asperiores tenetur illum debitis, velit quod rerum repellendus
							ducimus! Cumque atque sit laborum illum, deserunt sequi dolores
							ea. Voluptatibus, vel eum. Excepturi!
						</p>
					</div>
					<StaticImage
						src="../images/placeholder.jpg"
						alt=""
						placeholder="blurred"
						width={320}
					/>
				</article>
				<article className="servicios-item">
					<div className="flex-1">
						<h2>Garantia de seguridad y confiabilidad operativa</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Asperiores tenetur illum debitis, velit quod rerum repellendus
							ducimus! Cumque atque sit laborum illum, deserunt sequi dolores
							ea. Voluptatibus, vel eum. Excepturi!
						</p>
					</div>
					<StaticImage
						src="../images/placeholder.jpg"
						alt=""
						placeholder="blurred"
						width={320}
					/>
				</article>
			</section>

			<section className="py-8 px-inside flex flex-col gap-8">
				<h2 className="text-center">Trabajamos en coolaboración con</h2>

				<span className="flex gap-8 justify-center flex-wrap">
					<StaticImage
						src="../images/placeholder.jpg"
						alt=""
						placeholder="blurred"
						width={150}
						height={60}
					/>
					<StaticImage
						src="../images/placeholder.jpg"
						alt=""
						placeholder="blurred"
						width={150}
						height={60}
					/>
					<StaticImage
						src="../images/placeholder.jpg"
						alt=""
						placeholder="blurred"
						width={150}
						height={60}
					/>
					<StaticImage
						src="../images/placeholder.jpg"
						alt=""
						placeholder="blurred"
						width={150}
						height={60}
					/>
				</span>
			</section>
		</Layout>
	);
};

export default ServiciosPage;