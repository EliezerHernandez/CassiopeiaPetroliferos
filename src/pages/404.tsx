import { Link } from 'gatsby';
import * as React from 'react';
import SEO from '../components/common/SEO';
import { Layout } from '../components/layout';

const ErrorPage: React.FunctionComponent = () => {
	return (
		<Layout>
			<SEO title="Inicio | Cassiopeia" />
			<section className="h-[calc(100vh-259px)] py-8 px-4 lg:px-inside bg-neutral-100 text-center flex flex-col gap-4">
				<h1>😥</h1>
				<h1>¡Oops! Parece que te has equivocado de página</h1>
				<p>El enlace al que querías acceder no existe en nuestro sitio.</p>
				<p>
					Da clic{' '}
					<Link to="/" className="link text-primary-300">
						aquí
					</Link>{' '}
					para volver a la página principal.
				</p>
			</section>
		</Layout>
	);
};

export default ErrorPage;