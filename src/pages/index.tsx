import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
import SEO from '../components/common/SEO';
import { Layout } from '../components/layout';

//@ts-ignore
import heroVideo from '../assets/main-hero-vid.mp4';
import { Hero } from '../components/common/Hero';
import { Link } from 'gatsby';

const IndexPage: React.FunctionComponent = () => {
	return (
		<Layout>
			<SEO title="Inicio | Cassiopeia" />
			<Hero
				image={
					<StaticImage
						src="../images/wallpapers/caminosoleado.JPG"
						alt=""
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
				<h1 className="sm:text-6xl">Somos una empresa 100% Mexicana</h1>
				<p className="sm:text-xl">
					Dedicados a la comercialización de petrolíferos a nivel nacional a
					precios competitivos. Comprometidos a suministrar combustibles de
					calidad certificada, que garanticen la seguridad y confiabilidad
					operativa en las instalaciones y equipos de nuestros clientes.
				</p>
				<Link to="/servicios" className="btn secondary">
					Ver nuestros servicios
				</Link>
			</Hero>
			<section className="fadeable py-8 px-4 lg:px-inside flex gap-8 flex-col md:flex-row">
				<div className="flex flex-col gap-8">
					<div>
						<h2>Contamos con cobertura nacional</h2>
						<p>
							Estamos disponibles en los siguientes estados de la república.
						</p>
					</div>
					<div className="flex gap-8">
						<ul>
							<li>Tamaulipas</li>
							<li>Nuevo León</li>
							<li>Estado de México</li>
							<li>Veracruz</li>
							<li></li>
							<li></li>
						</ul>
						<ul>
							<li>Campeche</li>
							<li>Hidalgo</li>
							<li>Quintana Roo</li>
							<li></li>
							<li></li>
							<li></li>
						</ul>
					</div>
				</div>
				<StaticImage
					src="../images/tilesets/mapacobertura.png"
					alt="Mapa de cobertura"
					placeholder="tracedSVG"
					width={730}
					layout="constrained"
				/>
			</section>

			<section className=" bg-neutral-100 py-8 px-4 lg:px-inside">
				<h2 className="text-center">
					En Cassiopeia nos comprometemos con el servicio que brindamos
				</h2>
				<p className="text-center">Tenemos cualidades que nos distinguen.</p>

				<section className="flex gap-8 mt-8 flex-wrap justify-center">
					<article className="fadeable rounded shadow max-w-sm overflow-hidden bg-white">
						<div className="h-40 overflow-hidden">
							<StaticImage
								src="../images/pictures/calidad-operativa.png"
								alt=""
								layout="fullWidth"
							/>
						</div>
						<div className="p-4 flex flex-col gap-4">
							<h3>Comprometidos con la calidad operativa</h3>
							<p>
								Capacitación constante a todos nuestros operadores bajo los
								controles de calidad NOM y Procedimientos de descarga en
								Estaciones de Servicio.
							</p>
						</div>
					</article>

					<article className="fadeable rounded shadow max-w-sm overflow-hidden bg-white">
						<div className="h-40 overflow-hidden">
							<StaticImage
								className="-translate-y-24"
								src="../images/pictures/certificados.JPG"
								alt=""
								layout="fullWidth"
							/>
						</div>
						<div className="p-4 flex flex-col gap-4">
							<h3>Combustibles de calidad certificada</h3>
							<p>
								Suministro de Combustible de alta calidad bajo estándares de
								calidad de comercialización.
							</p>
						</div>
					</article>

					<article className="fadeable rounded shadow max-w-sm overflow-hidden bg-white">
						<div className="h-40 overflow-hidden">
							<StaticImage
								src="../images/pictures/distribuidor-pemex.png"
								alt=""
								layout="fullWidth"
							/>
						</div>
						<div className="p-4 flex flex-col gap-4">
							<h3>Somos distribuidores de PEMEX</h3>
							<p>
								Al ser distribuidores autorizados de PEMEX, nos comprometemos a
								respetar todos los procesos y lineamientos para qué la carga y
								descarga sea transparente y puntual con nuestros clientes.
							</p>
						</div>
					</article>

					<article className="fadeable rounded shadow max-w-sm overflow-hidden bg-white">
						<div className="h-40 overflow-hidden">
							<StaticImage
								className="-translate-y-8"
								src="../images/pictures/contacto-servicio.jpeg"
								alt=""
								layout="fullWidth"
							/>
						</div>
						<div className="p-4 flex flex-col gap-4">
							<h3>Atención 24/7 los 365 días del año</h3>
							<p>
								Nuestro equipo está preparado para atender todas tus dudas,
								logística y lineamientos necesarios para efectuar el viaje y
								descarga en todo momento, además de poner a tu disposición
								nuestras cuentas de monitoreo satelital.
							</p>
						</div>
					</article>
				</section>
			</section>

			{/* <section className="py-8 px-4 lg:px-inside flex flex-col md:flex-row gap-8 md:items-center justify-center">
				<StaticImage
					className="fadeable mx-auto md:mx-0"
					src="../images/tilesets/device.png"
					alt=""
					width={300}
					layout="fixed"
				/>
				<div className="fadeable mx-auto md:mx-0 flex-1 flex flex-col gap-4 max-w-md">
					<h2>¡Descarga nuestra app!</h2>
					<p className="font-bold">Bienvenido a Cassiopeia</p>
					<p>
						Este 2022 iniciamos con nuestra nueva aplicación desde la cual
						podrás:
					</p>
					<ul className="list-disc ml-5 text-primary-300 flex flex-col gap-2">
						<li>Dar de alta tus estaciones y cantidad de almacenamiento.</li>
						<li>Recibir atención personalizada 24/7.</li>
						<li>
							Recibir tu oferta de compra y firma la documentación
							correspondiente.
						</li>
						<li>Recibir nuestras mejores tarifas.</li>
						<li>Comunicarte de forma segura con nosotros.</li>
						<li>
							Seguir envíos: siempre podrás saber en dónde está tu producto y
							cuándo llega.
						</li>
						<li>Gestiona tus órdenes e historial de compras.</li>
						<li>Gestión de toda tu documentación.</li>
					</ul>

					<p className="mt-4 font-bold text-sm text-neutral-700">
						La aplicación está disponible en:
					</p>
					<a href="https://play.google.com/store/apps/details?id=com.strappberry.cassiopeia">
						<StaticImage
							className="link shadow cursor-pointer overflow-hidden"
							src="../images/tilesets/googleplay-btn.png"
							alt=""
							width={200}
							placeholder="blurred"
						/>
						<StaticImage
							className="link shadow cursor-pointer overflow-hidden"
							src="../images/tilesets/applestore-btn.png"
							alt=""
							width={200}
							placeholder="blurred"
						/>
						</a>
					<span className="flex gap-4 flex-wrap justify-center md:justify-start">
					</span>
				</div>
			</section> */}
		</Layout>
	);
};

export default IndexPage;