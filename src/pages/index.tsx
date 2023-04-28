import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
import SEO from '../components/common/SEO';
import { Layout } from '../components/layout';
const IndexPage: React.FunctionComponent = () => {
	return (
		<Layout>
			<SEO title="Inicio | Cassiopeia" />
			<section className="bg-primary-400 grid relative">
				<StaticImage
					className="absolute w-full h-full "
					src="../images/wallpapers/caminosoleado.JPG"
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
				<div className="flex flex-col gap-20 items-center p-8 col-span-full row-span-full z-10">
					<div className="flex flex-col gap-4 text-center items-center px-inside text-white text-shadow">
						<h1>Empresa 100% Mexicana</h1>
						<p className="text-lg">
							Dedicados a la comercialización de petrolíferos a nivel nacional a
							precios competitivos.
							<br />
							Comprometidos a suministrar combustibles de calidad certificada,
							que garanticen la seguridad y confiabilidad operativa en las
							instalaciones y equipos de nuestros clientes.
						</p>
					</div>
					<div className="flex gap-2">
						<div className="bg-white border-2 border-white rounded-full h-3 w-3"></div>
						<div className="border-2 border-white rounded-full h-3 w-3"></div>
						<div className="border-2 border-white rounded-full h-3 w-3"></div>
					</div>
				</div>
			</section>

			<section className="py-8 px-inside flex gap-8 flex-col md:flex-row">
				<div className="flex flex-col gap-8">
					<div>
						<h2>Contamos con cobertura nacional</h2>
						<p>
							Estamos disponibles en los siguientes estados de la republica.
						</p>
					</div>
					<div className="flex gap-8">
						<ul>
							<li>CDMX</li>
							<li>Coahuila</li>
							<li>Estado de México</li>
							<li>Nuevo León</li>
							<li>Puebla</li>
						</ul>
						<ul>
							<li>Querétaro</li>
							<li>San Luis Potosí</li>
							<li>Tamaulipas</li>
							<li>Veracruz</li>
						</ul>
					</div>
				</div>
				<StaticImage
					src="../images/tilesets/mapacobertura.png"
					alt="Mapa de cobertura"
					placeholder="tracedSVG"
					aspectRatio={738 / 499}
				/>
			</section>

			<section className="bg-neutral-100 py-8 px-inside">
				<h2 className="text-center">
					En Cassiopeia nos comprometemos con el servicio que brindamos
				</h2>
				<p className="text-center">Tenemos cualidades que nos distinguen</p>

				<section className="flex gap-8 mt-8 flex-wrap justify-center">
					<article className="rounded shadow max-w-sm overflow-hidden bg-white">
						<div className="h-40 overflow-hidden">
							<StaticImage
								src="../images/placeholder.jpg"
								alt=""
								layout="fullWidth"
							/>
						</div>
						<div className="p-4 flex flex-col gap-4">
							<h3>Comprometidos con la calidad operativa</h3>
							<p>
								Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae
								excepturi quis ex? Provident expedita veritatis fugit harum sunt
								delectus quasi asperiores voluptate quis voluptatibus excepturi
								et, sit exercitationem odit vel?
							</p>
						</div>
					</article>

					<article className="rounded shadow max-w-sm overflow-hidden bg-white">
						<div className="h-40 overflow-hidden">
							<StaticImage
								src="../images/placeholder.jpg"
								alt=""
								layout="fullWidth"
							/>
						</div>
						<div className="p-4 flex flex-col gap-4">
							<h3>Combustibles de calidad certificada</h3>
							<p>
								Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae
								excepturi quis ex? Provident expedita veritatis fugit harum sunt
								delectus quasi asperiores voluptate quis voluptatibus excepturi
								et, sit exercitationem odit vel?
							</p>
						</div>
					</article>

					<article className="rounded shadow max-w-sm overflow-hidden bg-white">
						<div className="h-40 overflow-hidden">
							<StaticImage
								src="../images/placeholder.jpg"
								alt=""
								layout="fullWidth"
							/>
						</div>
						<div className="p-4 flex flex-col gap-4">
							<h3>Somos distribuidores de PEMEX</h3>
							<p>
								Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae
								excepturi quis ex? Provident expedita veritatis fugit harum sunt
								delectus quasi asperiores voluptate quis voluptatibus excepturi
								et, sit exercitationem odit vel?
							</p>
						</div>
					</article>

					<article className="rounded shadow max-w-sm overflow-hidden bg-white">
						<div className="h-40 overflow-hidden">
							<StaticImage
								src="../images/placeholder.jpg"
								alt=""
								layout="fullWidth"
							/>
						</div>
						<div className="p-4 flex flex-col gap-4">
							<h3>Atención 24/7 los 365 dias del año</h3>
							<p>
								Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae
								excepturi quis ex? Provident expedita veritatis fugit harum sunt
								delectus quasi asperiores voluptate quis voluptatibus excepturi
								et, sit exercitationem odit vel?
							</p>
						</div>
					</article>
				</section>
			</section>

			<section className="py-8 px-inside flex gap-8 md:items-center justify-center">
				<StaticImage src="../images/tilesets/device.png" alt="" width={180} />
				<div className="flex-1 flex flex-col gap-4 max-w-md">
					<h2>Descarga nuestra app!</h2>
					<p className="font-bold">Bienvenido a Cassiopeia</p>
					<p>
						Dedicados a la comercialización de petrolífero a nivel nacional a
						precios competitivos.
					</p>
					<p>
						Comprometidos a suministrar combustibles de calidad certificada, que
						garanticen la seguridad y confiabilidad operativa en las
						instalaciones y equipos de nuestros clientes.
					</p>

					<p>La aplicación esta disponible en</p>

					<span className="flex gap-4">
						<StaticImage
							class="link shadow cursor-pointer overflow-hidden"
							src="../images/tilesets/googleplay-btn.png"
							alt=""
							width={200}
							placeholder="blurred"
						/>
						<StaticImage
							class="link shadow cursor-pointer overflow-hidden"
							src="../images/tilesets/applestore-btn.png"
							alt=""
							width={200}
							placeholder="blurred"
						/>
					</span>
				</div>
			</section>
		</Layout>
	);
};
export default IndexPage;