/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";


function FormularioNotificacion({

  inputs,

  handleChange

}) {


  return (


    <div className="form-checador">


      <h3 className="tarjeta-continuo-titulo">

        Datos de la notificación

      </h3>




      <input

        className="entrada-de-texto"

        type="text"

        name="nombre"

        placeholder="Nombre"

        value={inputs.nombre}

        onChange={handleChange}

      />




      <input

        className="entrada-de-texto"

        type="text"

        name="numero"

        placeholder="Número de unidad"

        value={inputs.numero}

        onChange={handleChange}

      />





      <input

        className="entrada-de-texto"

        type="number"

        name="deuda"

        placeholder="Cantidad pendiente"

        value={inputs.deuda}

        onChange={handleChange}

      />



      <input

        className="entrada-de-texto"

        type="text"

        name="fecha"

        placeholder="Ejemplo: viernes 25 de julio"

        value={inputs.fecha}

        onChange={handleChange}

      />




      <input

        className="entrada-de-texto"

        type="text"

        name="lugar"

        placeholder="Lugar donde no habrá servicio"

        value={inputs.lugar}

        onChange={handleChange}

      />




    </div>


  );

}


export default FormularioNotificacion;