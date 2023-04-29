import * as React from 'react';

export const MainFooter: React.FunctionComponent = () => {
	return (
		<footer className="p-8 px-4 lg:px-inside bg-primary-400 text-white flex flex-col gap-4 text-center sm:text-left">
		<div className="flex gap-8 flex-wrap justify-center sm:justify-start">
				<a href="" className="font-bold">
					Mapa del sitio
				</a>
				<a href="/legalidad" className="font-bold">
					Legalidad
				</a>
			</div>
			<p>Derechos reservados Cassiopeia Industries S.A de C.V.</p>
		</footer>
	);
};