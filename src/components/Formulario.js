import React, { Fragment, useState } from 'react';
import uuid from 'uuid/v4'
import PropTypes from 'prop-types';

const Formulario = ({crearCita}) => {
    //crear States de citas
    const [cita, actualizarCita] = useState({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''
    });

    //Creo otro State
    const [error, actualizaError] = useState(false)

    //Función que se ejecuta cada que el usuario escribe en un input
    const actualizarState = e =>{
        //console.log(e.target.name);
        actualizarCita ({
            ...cita,
            [e.target.name]: e.target.value
        })

    }

      //Extraer los valores  con esto evito poner "cita.mascota"  distroctori
      const { mascota, propietario, fecha, hora, sintomas } = cita;

      //Cuando el usuario presiona el boton de agregar cita
      const submitCita = e => {
           // alert('Enviando')
           e.preventDefault();
           //Validar
           if(mascota.trim() === '' || propietario.trim === '' || fecha.trim === '' || hora.trim === '' || sintomas.trim === ''){
            actualizaError(true);
               return;
           }
           actualizaError(false);

           //Asignar un ID
           cita.id = uuid();
           console.log(cita);

           //Crear la Cita
           crearCita(cita);

           //Reiniciar el Form
           actualizarCita({
            mascota: '',
            propietario: '',
            fecha: '',
            hora: '',
            sintomas: ''
           })
      }


    return ( 
        <Fragment>
            <h2>Crear Cita</h2>
                { error ? <p className="alerta-error">Todos los campos son obligatorios</p> : null }
            <form
                onSubmit={submitCita}
            >
                <labe>Nombre Mascota</labe>
                <input 
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="Nombre Mascota"
                    onChange={actualizarState}
                    value={mascota}
                />

                <labe>Nombre Dueño</labe>
                <input 
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Nombre Dueño de la mascota"
                    onChange={actualizarState}
                    value={propietario}
                />

                <labe>Fecha</labe>
                <input 
                    type="date"
                    name="fecha"
                    className="u-full-width"   
                    onChange={actualizarState}     
                    value={fecha}           
                />

                <labe>Hora</labe>
                <input 
                    type="time"
                    name="hora"
                    className="u-full-width"       
                    onChange={actualizarState}  
                    value={hora}          
                />

                <label>Síntomas</label>
                <textarea 
                    className="u-full-width"
                    name="sintomas"
                    onChange={actualizarState}
                    value={sintomas}
                ></textarea>

                <button
                    type="submit"
                    className="u-full-width button-primary"
                >Agregar Citas</button>

            </form>
        </Fragment>
     );    
}

Formulario.propTypes = {
    crearCita: PropTypes.func.isRequired
}
 
export default Formulario;