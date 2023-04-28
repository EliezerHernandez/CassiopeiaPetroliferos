import { IStaticImageProps } from 'gatsby-plugin-image/dist/src/components/static-image.server';
import * as React from 'react';

interface Props {
	image: any;
}

export const Hero: React.FunctionComponent<Props> = ({ image, children }) => {
	return (
		<section className="bg-primary-400 grid relative">
			<div className="hero-container">{image}</div>

			<div className="flex flex-col gap-20 items-center p-8 col-span-full row-span-full z-10">
				<div className="flex flex-col gap-4 text-center items-center px-inside text-white text-shadow">
					{children}
				</div>
			</div>
		</section>
	);
};