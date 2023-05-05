import * as React from 'react';
import * as mailClient from 'emailjs-com';
import { EntidadesFederativas } from './utils/EntidadesFederativas';
import { Spinner } from './common/Spinner';

export const ContactForm: React.FunctionComponent = ({}) => {
	const formRef = React.useRef<HTMLFormElement>(null);
	const [isLoading, setLoading] = React.useState(false);
	const [entidadSeleccionada, setEntidadSeleccionada] = React.useState(null);
	const [msgStatus, setMsgStatus] = React.useState(0);

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setMsgStatus(0);
		setLoading(true);
		try {
			await mailClient.sendForm(
				'service_yecf4o4',
				'contact_form',
				formRef.current,
				'user_nOipuykrCKn1qxgbo30mo'
			);
			setMsgStatus(1);
			formRef.current.reset();
			setEntidadSeleccionada(null);
		} catch (e) {
			console.error(e);
			setMsgStatus(2);
		} finally {
			setLoading(false);
			//Remover msg despues de 2 segundos
			setTimeout(() => setMsgStatus(0), 4000);
		}
	};

	return (
		<form onSubmit={handleSubmit} className="mt-8 form" ref={formRef}>
			<div className="input-group">
				<label>Nombre o Razón social</label>
				<input type="text" name="nombre_usuario" required />
			</div>

			<div className="input-group">
				<label>Combustible de interés</label>
				<select name="combustible_interes" required>
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
					<input type="email" name="correo_usuario" required />
				</div>

				<div className="input-group">
					<label>Teléfono (Opcional)</label>
					<input
						type="tel"
						name="telefono_usuario"
						// pattern="[0-9]{2,3}-[0-9]{3}-[0-9]{4}"
					/>
					{/* <p className="text-xs text-neutral-700">
						Ingresa un telefono xxx-xxx-xxxx
					</p> */}
				</div>
			</div>

			<div className="form-row">
				<div className="input-group">
					<label>Estado de la república</label>
					<select
						name="estado_usuario"
						onChange={(e) => {
							setEntidadSeleccionada(e.target.value);
						}}
						required>
						<option value="" disabled selected={!entidadSeleccionada}>
							Seleccione un estado
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
				<textarea
					rows={5}
					name="descripcion_contacto"
					maxLength={300}
					required></textarea>
				<p className="text-xs text-neutral-700">Escriba en 300 caracteres</p>
			</div>

			{msgStatus == 1 ? (
				<p className="border-success-300 border-2 rounded p-4 bg-green-100 font-bold text-success-300">
					Tu mensaje ha sido recibido por nuestro personal, nos comunicaremos
					contigo lo más pronto posible.
				</p>
			) : msgStatus == 2 ? (
				<p className="border-danger-300 border-2 rounded p-4 bg-red-100 font-bold text-danger-300">
					Ha sucedido un error al enviar el mensaje, prueba de nuevo o inténtalo más tarde. 
				</p>
			) : null}

			<button className="btn primary flex justify-center items-center">
				{isLoading && <Spinner />}
				Enviar mensaje
			</button>
		</form>
	);
};