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
	const [currentImageIndx, setCurrentImageIndx] = React.useState<number>();
	const visorBg = React.useRef();

	const openImage = (index: number) => {
		setCurrentImageIndx(index);
		setIsVisorOpen(true);
	};

	const closeImage = () => {
		setCurrentImageIndx(undefined);
		setIsVisorOpen(false);
	};

	return (
		<>
			{isVisorOpen && (
				<div
					className="bg-black/75 fixed top-0 left-0 bottom-0 right-0 z-20 flex flex-col py-8 px-4"
					onClick={(e) => {
						if (e.target == visorBg.current) {
							closeImage();
						}
					}}
					ref={visorBg}>
					<div className="pb-4 text-white flex justify-between">
						{currentImageIndx - 1 >= 0 ? (
							<button
								className="font-bold text-lg"
								onClick={() => setCurrentImageIndx((prev) => prev - 1)}>
								&larr; Anterior foto
							</button>
						) : (
							<span></span>
						)}
						<button className="font-bold text-lg" onClick={closeImage}>
							Cerrar foto
						</button>
						{currentImageIndx + 1 < images.length && (
							<button
								className="font-bold text-lg"
								onClick={() => setCurrentImageIndx((prev) => prev + 1)}>
								Siguiente foto &rarr;
							</button>
						)}
					</div>
					<GatsbyImage image={images[currentImageIndx].full} alt="" />
				</div>
			)}

			{images.map((img, i) => (
				<GatsbyImage
					tabIndex={0}
					key={i}
					image={img.thumb}
					alt=""
					onKeyPress={(e) => {
						if (e.code == 'Space' || e.code == 'Enter') {
							e.preventDefault();
							openImage(i);
						}
					}}
					onClick={() => openImage(i)}
					className={imageClass}
				/>
			))}
		</>
	);
};