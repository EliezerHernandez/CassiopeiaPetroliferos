import * as React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

export const MainHeader: React.FunctionComponent = () => {
	return (
		<header className="pt-4 pb-8 px-inside shadow-lg flex items-end justify-between">
			<StaticImage
				src="../../images/tilesets/logo.png"
				alt="Cassiopeia Logo"
				placeholder="tracedSVG"
				width={255}
				loading="eager"
			/>

			<nav className="flex items-center gap-4">
				<ul className="flex gap-4">
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
				<a href="https://cassiopeia.strappberry.com/admin/login">
					<button className="btn primary">Ingresar</button>
				</a>
			</nav>
		</header>
	);
};