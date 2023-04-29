import * as React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

export const MainHeader: React.FunctionComponent = () => {
	return (
		<header className="pt-4 pb-8 px-4 lg:px-inside shadow-lg flex flex-col items-center gap-8 md:items-end md:flex-row md:justify-between">
			<StaticImage
				src="../../images/tilesets/logo.png"
				alt="Cassiopeia Logo"
				placeholder="tracedSVG"
				width={255}
				loading="eager"
			/>

			<nav className="flex items-center gap-4 justify-center flex-wrap">
				<ul className="flex gap-4 justify-center">
					<li>
						<Link to="/" className="link" activeClassName="link primary">
							Inicio
						</Link>
					</li>
					<li>
						<Link
							to="/servicios"
							className="link"
							activeClassName="link primary">
							Servicios
						</Link>
					</li>
					<li>
						<Link to="/galeria" className="link" activeClassName="link primary">
							Galeria
						</Link>
					</li>
					<li>
						<Link
							to="/contacto"
							className="link"
							activeClassName="link primary">
							Contacto
						</Link>
					</li>
				</ul>
				<a
					className="btn primary"
					href="https://cassiopeia.strappberry.com/admin/login">
					Ingresar
				</a>
			</nav>
		</header>
	);
};