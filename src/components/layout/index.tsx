import * as React from 'react';
import { MainFooter } from './main-footer';
import { MainHeader } from './main-header';

export const Layout: React.FunctionComponent = ({ children }) => {
	return (
		<Layout>
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
						<div className="bg-white border-2 border-white rounded-full h-4 w-4"></div>
						<div className="border-2 border-white rounded-full h-4 w-4"></div>
						<div className="border-2 border-white rounded-full h-4 w-4"></div>
					</div>
				</div>
			</section>
			<section className=""></section>
		</Layout>
	);
};