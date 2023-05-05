import * as React from 'react';
import * as mailClient from 'emailjs-com';

export const ContactForm: React.FunctionComponent = ({}) => {
	const formRef = React.useRef<HTMLFormElement>(null);

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		// try {
		// 	await mailClient.sendForm(
		// 		'contact_service',
		// 		'contact_form',
		// 		null,
		// 		'user_nOipuykrCKn1qxgbo30mo'
		// 	);
		// } catch (e) {
		// 	console.error(e);
		// }
	};

	return (
		<form onSubmit={handleSubmit} className="mt-8 form" ref={formRef}>
			<div className="input-group">
				<label>Nombre o Razón social</label>
				<input type="text" />
			</div>

			<div className="input-group">
				<label>Combustible de interés</label>
				<select name="" id="">
					<option value="">Diesel Automotriz</option>
					<option value="">Diesel Ultra bajo azufre</option>
					<option value="">Gasolina Regular</option>
					<option value="">Gasolina Premium</option>
				</select>
			</div>

			<div className="form-row">
				<div className="input-group">
					<label>Correo</label>
					<input type="text" />
				</div>

				<div className="input-group">
					<label>Teléfono (Opcional)</label>
					<input type="text" />
				</div>
			</div>

			<div className="form-row">
				<div className="input-group">
					<label>Estado</label>
					<input type="text" />
				</div>

				<div className="input-group">
					<label>Municipio</label>
					<input type="text" />
				</div>
			</div>

			<div className="input-group">
				<label>Descripción/Detalles</label>
				<input type="text" />
			</div>

			<button className="btn primary">Enviar mensaje</button>
		</form>
	);
};