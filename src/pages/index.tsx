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
			<section className=""></section>
		</Layout>
	);
};
export default IndexPage;