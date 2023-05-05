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
					Contamos con múltiples servicios en nuestra empresa, conoce algunos de
					ellos.
				</p>
			</Hero>

			<section className="flex flex-col">
				<article className="fadeable servicios-item">
					<div className="flex-1">
						<h2>Combustibles con respaldo de laboratorios certificados</h2>
						<p>
							Ponemos a tu disposición toda la documentación correspondiente a
							Certificado de Calidad en combustible bajo la NOM.
						</p>
					</div>
					<StaticImage
						className="img"
						src="../images/pictures/1.png"
						alt=""
						placeholder="blurred"
						width={320}
					/>
				</article>
				<article className="fadeable servicios-item">
					<div className="flex-1">
						<h2>Sinergia con compañías de transporte especializado</h2>
						<p>
							Nuestros operadores están calificados en servicio al cliente y nos
							comprometemos a realizar entregas en el tiempo establecido, además
							de conocer los procesos más seguros en materia de descargas.
						</p>
					</div>
					<StaticImage
						className="img"
						src="../images/pictures/2.png"
						alt=""
						placeholder="blurred"
						layout="fixed"
						width={320}
					/>
				</article>
				<article className="fadeable servicios-item">
					<div className="flex-1">
						<h2>Colocación de tanques de autoconsumo</h2>
						<p>
							Te ofrecemos nuestro servicio más competitivo donde la colocación
							de un tanque de autoconsumo nos permitirá ofrecerte los mejores
							precios y el monitoreo 24/7 de tu combustible además de un surtido
							automatizado con la Calidad Cassiopeia.
						</p>
					</div>
					<StaticImage
						className="img"
						src="../images/pictures/3.png"
						alt=""
						placeholder="blurred"
						layout="fixed"
						width={320}
					/>
				</article>
				<article className="fadeable servicios-item">
					<div className="flex-1">
						<h2>Personal altamente capacitado</h2>
						<p>
							Trabajamos bajo estándares de calidad y nos mantenemos
							actualizados con nuestro programa de mejora continua que nos
							permite ofrecerte la mejor calidad en servicio y atención desde tu
							cotización hasta la descarga de combustible.
						</p>
					</div>
					<StaticImage
						className="img"
						src="../images/pictures/4.JPG"
						alt=""
						placeholder="blurred"
						width={320}
					/>
				</article>
				<article className="fadeable servicios-item">
					<div className="flex-1">
						<h2>Ventas directas con clientes</h2>
						<p>
							Ponemos a tu disposición todos nuestros canales de comunicación
							para la comodidad de tu equipo y una comunicación constante y
							transparente.
						</p>
					</div>
					<StaticImage
						className="img"
						src="../images/pictures/5.png"
						alt=""
						placeholder="blurred"
						width={320}
					/>
				</article>
				<article className="fadeable servicios-item">
					<div className="flex-1">
						<h2>Garantía de seguridad y confiabilidad operativa</h2>
						<p>
							Nuestro equipo estará en constante comunicación y total
							disponibilidad atendiendo seguimientos, dudas e indicaciones para
							llevar a cabo la operación con seguridad y profesionalismo.
						</p>
					</div>
					<StaticImage
						className="img"
						src="../images/pictures/6.JPG"
						alt=""
						placeholder="blurred"
						width={320}
					/>
				</article>
			</section>

			<section className="py-8 px-4 lg:px-inside flex flex-col gap-8">
				<h2 className="text-center">Trabajamos en colaboración con</h2>

				<span className="flex gap-8 justify-center items-center flex-wrap">
					<StaticImage
						className="fadeable"
						src="../images/icons/pemex.png"
						alt=""
						placeholder="tracedSVG"
						width={150}
						layout="fixed"
					/>
					<StaticImage
						className="fadeable"
						src="../images/icons/cre.png"
						alt=""
						placeholder="tracedSVG"
						width={150}
						layout="fixed"
					/>
					<StaticImage
						className="fadeable"
						src="../images/icons/canacar.png"
						alt=""
						placeholder="tracedSVG"
						width={150}
						layout="fixed"
					/>
					<StaticImage
						className="fadeable"
						src="../images/icons/grupo-transportes.png"
						alt=""
						placeholder="tracedSVG"
						width={150}
						layout="fixed"
					/>
				</span>
			</section>
		</Layout>
	);
};

export default ServiciosPage;