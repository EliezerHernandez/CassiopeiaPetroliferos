import * as React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { NavLinks } from './NavLinks';

export const MainHeader: React.FunctionComponent = () => {
	const hamburgerRef = React.useRef(null);
	const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = React.useState(false);

	const openMenu = () => setIsHamburgerMenuOpen(true);
	const closeMenu = () => setIsHamburgerMenuOpen(false);

	const handleMenuClose = async () => {
		const modal = hamburgerRef.current;
		modal.animate(
			[
				{
					opacity: 1,
				},
				{
					opacity: 0,
				},
			],
			{
				easing: 'ease',
				duration: 400,
			}
		);
		setTimeout(closeMenu, 400);
	};

	return (
		<header className="pt-4 pb-8 px-4 lg:px-inside shadow-lg flex flex-col items-center gap-8 md:items-end md:flex-row md:justify-between">
			<StaticImage
				className="-ml-2"
				src="../../images/tilesets/logo.png"
				alt="Cassiopeia Logo"
				placeholder="tracedSVG"
				width={255}
				loading="eager"
			/>

			<div className="absolute right-4 top-4 md:hidden">
				<button
					className="text-2xl font-bold text-neutral-700 bg-white p-2 border-2 rounded w-10 h-10 text-center flex justify-center items-center"
					onClick={openMenu}>
					☰
				</button>
			</div>

			{isHamburgerMenuOpen && (
				<div
					className="fade fixed bg-black/50 left-0 right-0 top-0 bottom-0 z-30 py-8 px-4"
					ref={hamburgerRef}>
					<div className="fixed left-0 top-0 bottom-0 bg-white py-8 px-4 flex flex-col items-start gap-8 max-w-xs w-full">
						<header className="flex justify-between w-full items-center">
							<h2>Enlaces</h2>
							<button
								className="text-2xl font-bold text-neutral-700 bg-white p-2 border-2 rounded w-10 h-10 text-center flex justify-center items-center"
								onClick={handleMenuClose}>
								✕
							</button>
						</header>
						<ul className="flex flex-col gap-8 justify-center">
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
								<Link
									to="/galeria"
									className="link"
									activeClassName="link primary">
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
						</a>{' '}
					</div>
				</div>
			)}

			<nav className="hidden md:flex items-center gap-4 justify-center flex-wrap">
				<NavLinks />
			</nav>
		</header>
	);
};