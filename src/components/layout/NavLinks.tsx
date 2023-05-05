import { Link } from 'gatsby';
import * as React from 'react';

export const NavLinks: React.FunctionComponent = ({}) => (
	<>
		<ul className="flex gap-4 justify-center">
			<li>
				<Link to="/" className="link" activeClassName="link primary">
					Inicio
				</Link>
			</li>
			<li>
				<Link to="/servicios/" className="link" activeClassName="link primary">
					Servicios
				</Link>
			</li>
			<li>
				<Link to="/galeria/" className="link" activeClassName="link primary">
					Galería
				</Link>
			</li>
			<li>
				<Link to="/contacto/" className="link" activeClassName="link primary">
					Contacto
				</Link>
			</li>
		</ul>
		<a
			className="btn primary"
			href="https://cassiopeia.strappberry.com/admin/login">
			Ingresar
		</a>{' '}
	</>
);