import * as React from 'react';
import { AccordeonItem } from '../components/common/AccordeonItem';
import SEO from '../components/common/SEO';
import { Layout } from '../components/layout';

const LegalidadPage: React.FunctionComponent = () => {
	return (
		<Layout>
			<SEO title="Legalidad | Cassiopeia" />

			<section className="py-8 px-4 lg:px-inside text-center flex flex-col gap-4">
				<h1>Legalidad</h1>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
					viverra risus. Aenean et aliquet purus. Proin vitae tincidunt metus.
					Mauris posuere malesuada efficitur. In quis tortor turpis...
				</p>
			</section>

			<section className="bg-neutral-100 py-8 px-4 lg:px-inside flex flex-col gap-8">
				{[...Array(10)].map((_) => (
					<AccordeonItem title="Lorem ipsum dolor sit amet">
						<h2>Lorem ipsum</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo
							necessitatibus aliquid tenetur rerum cumque placeat possimus
							adipisci expedita molestiae harum optio quaerat libero quis veniam
							doloremque voluptas excepturi, nostrum quibusdam?
						</p>
					</AccordeonItem>
				))}
			</section>
		</Layout>
	);
};

export default LegalidadPage;