import * as React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import type { IGatsbyImageData } from 'gatsby-plugin-image';

interface Props {
	images: {
		thumb: IGatsbyImageData;
		full: IGatsbyImageData;
	}[];
	imageClass?: string;
}

export const Gallery: React.FunctionComponent<Props> = ({
	images,
	imageClass,
}) => {
	const [isVisorOpen, setIsVisorOpen] = React.useState(false);
	const [currentImage, setCurrentImage] = React.useState<IGatsbyImageData>();

	const openImage = (imgToOpen: IGatsbyImageData) => {
		setCurrentImage(imgToOpen);
		setIsVisorOpen(true);
	};

	const closeImage = () => {
		setCurrentImage(undefined);
		setIsVisorOpen(false);
	};

	return (
		<>
			{isVisorOpen && (
				<div className="bg-black/75 fixed top-0 left-0 bottom-0 right-0 z-20 flex flex-col py-8 px-inside">
					<div className="pb-4 text-white">
						<p className="cursor-pointer font-bold" onClick={closeImage}>
							Cerrar foto
						</p>
					</div>
					<GatsbyImage image={currentImage} alt="" />
					<div className="pt-4 text-white flex justify-between">
						<p className="cursor-pointer font-bold">&larr; Anterior foto</p>
						<p className="cursor-pointer font-bold">Siguiente foto &rarr;</p>
					</div>
				</div>
			)}

			{images.map((img, i) => (
				<GatsbyImage
					key={i}
					image={getImage(img.thumb)}
					alt=""
					onClick={() => openImage(img.full)}
					className={imageClass}
				/>
			))}
		</>
	);
};