import * as React from 'react';
import { AvisoDePrivacidad } from '../AvisoDePrivacidad';

export const MainFooter: React.FunctionComponent = () => {
	const avisoDePrivacidadRef = React.useRef(null);
	const [showAvisoPrivacidad, setShowAvisoPrivacidad] = React.useState(false);

	const openAvisoPrivacidad = () => setShowAvisoPrivacidad(true);
	const closeAvisoPrivacidad = () => setShowAvisoPrivacidad(false);

	const handleAvisoClose = async () => {
		const modal = avisoDePrivacidadRef.current;
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
		setTimeout(closeAvisoPrivacidad, 400);
	};

	return (
		<>
			{showAvisoPrivacidad && (
				<div
					className="fade fixed bg-black/50 left-0 right-0 top-0 bottom-0 z-20 py-8 px-4"
					ref={avisoDePrivacidadRef}>
					<div className="md:max-w-lg flex flex-col gap-4 rounded shadow bg-white mx-auto h-5/6 p-4">
						<button
							className="ml-auto text-2xl font-bold text-neutral-700 bg-white p-2 border-2 rounded w-10 h-10 text-center flex justify-center items-center"
							onClick={handleAvisoClose}>
							✕
						</button>

						<div className="overflow-y-scroll pr-2 -mr-2 flex flex-col gap-8">
							<AvisoDePrivacidad />
						</div>
					</div>
				</div>
			)}

			<footer className="p-8 px-4 lg:px-inside bg-primary-400 text-white flex flex-col gap-4 text-center sm:text-left">
				<div className="flex gap-8 flex-wrap justify-center sm:justify-start">
					<button className="font-bold" onClick={openAvisoPrivacidad}>
						Aviso de privacidad
					</button>
					<a href="/legalidad/" className="font-bold">
						Legalidad
					</a>
				</div>
				<p>Derechos reservados Cassiopeia Industries S.A de C.V.</p>
			</footer>
		</>
	);
};