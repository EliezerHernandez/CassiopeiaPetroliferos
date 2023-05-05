import * as React from 'react';
import * as mailClient from 'emailjs-com';
import { EntidadesFederativas } from './utils/EntidadesFederativas';

export const ContactForm: React.FunctionComponent = ({}) => {
	const formRef = React.useRef<HTMLFormElement>(null);
	const [loading, setLoading] = React.useState(false);
	const [entidadSeleccionada, setEntidadSeleccionada] = React.useState(null);

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		console.log('send');
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
				<input type="text" name="nombre_usuario" required />
			</div>

			<div className="input-group">
				<label>Combustible de interés</label>
				<select name="combustible_interes">
					<option value="Diesel Automotriz">Diesel Automotriz</option>
					<option value="Diesel Ultra bajo azufre">
						Diesel Ultra bajo azufre
					</option>
					<option value="Gasolina Regular">Gasolina Regular</option>
					<option value="Gasolina Premium">Gasolina Premium</option>
				</select>
			</div>

			<div className="form-row">
				<div className="input-group">
					<label>Correo</label>
					<input type="mail" name="correo_usuario" required />
				</div>

				<div className="input-group">
					<label>Teléfono (Opcional)</label>
					<input type="text" name="telefono_usuario" />
				</div>
			</div>

			<div className="form-row">
				<div className="input-group">
					<label>Estado</label>
					<select
						name="estado_usuario"
						value={entidadSeleccionada}
						onChange={(e) => {
							setEntidadSeleccionada(e.target.value);
						}}
						required>
						<option value="" disabled selected>
							Seleccione un municipio
						</option>
						{[...Object.keys(EntidadesFederativas)].map((entidad, i) => (
							<option key={i} value={entidad}>
								{entidad}
							</option>
						))}
					</select>
				</div>

				<div className="input-group">
					<label>Municipio (Opcional)</label>
					<select name="municipio_usuario" required>
						{entidadSeleccionada ? (
							EntidadesFederativas[entidadSeleccionada].map((entidad, i) => (
								<option key={i} value={entidad}>
									{entidad}
								</option>
							))
						) : (
							<option value="" disabled selected>
								Seleccione un municipio
							</option>
						)}
					</select>
				</div>
			</div>

			<div className="input-group">
				<label>Descripción/Detalles</label>
				<textarea rows={5} name="descripcion" required></textarea>
			</div>

			<button className="btn primary">Enviar mensaje</button>
		</form>
	);
};