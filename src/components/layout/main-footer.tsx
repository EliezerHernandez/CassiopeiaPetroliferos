import * as React from 'react';
import { AvisoDePrivacidad } from '.././AvisodePrivacidad';

export const MainFooter: React.FunctionComponent = () => {
	const [showAvisoPrivacidad, setShowAvisoPrivacidad] = React.useState(false);

	const openAvisoPrivacidad = () => setShowAvisoPrivacidad(true);
	const closeAvisoPrivacidad = () => setShowAvisoPrivacidad(false);

	return (
		<>
			{showAvisoPrivacidad && (
				<div className="fixed bg-black/50 left-0 right-0 top-0 bottom-0 z-20 py-8 px-4">
					<div className="md:max-w-lg flex flex-col gap-8 p-4 rounded shadow bg-white mx-auto h-5/6 overflow-y-scroll">
						<button
							className="font-bold text-neutral-700 self-end"
							onClick={closeAvisoPrivacidad}>
							Cerrar ventana
						</button>

						<AvisoDePrivacidad />
					</div>
				</div>
			)}

			<footer className="p-8 px-4 lg:px-inside bg-primary-400 text-white flex flex-col gap-4 text-center sm:text-left">
				<div className="flex gap-8 flex-wrap justify-center sm:justify-start">
					<button className="font-bold" onClick={openAvisoPrivacidad}>
						Aviso de privacidad
					</button>
					<a href="/legalidad" className="font-bold">
						Legalidad
					</a>
				</div>
				<p>Derechos reservados Cassiopeia Industries S.A de C.V.</p>
			</footer>
		</>
	);
};