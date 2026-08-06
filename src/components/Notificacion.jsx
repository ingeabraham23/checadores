// eslint-disable-next-line no-unused-vars
import React, { useRef, useState } from "react";

import "./Internado.css";

import FormularioNotificacion from "../components/FormularioNotificacion";

import Comunicado from "../components/Comunicado";

import BotonDescargar from "../components/BotonDescargar";

function Notificacion() {
  const [inputs, setInputs] = useState({
    nombre: "",
    numero: "",
    deuda: "",
    fecha: "",
    lugar: "",
  });

  const adeudoRef = useRef(null);
  const servicioRef = useRef(null);

  const fechaActual = new Date().toLocaleDateString(
    "es-ES",

    {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    },
  );

  const handleChange = (e) => {
    const { name, value } = e.target;

    setInputs((prev) => ({
      ...prev,

      [name]: value,
    }));
  };

  return (
    <div className="contenedor-notificacion">
      <FormularioNotificacion inputs={inputs} handleChange={handleChange} />

      {/* =============================
              NOTIFICACION ADEUDO
      ============================== */}

      <Comunicado
        ref={adeudoRef}
        tipo="adeudo"
        titulo="Notificación de adeudo"
        fecha={fechaActual}
        nombre={inputs.nombre}
        numero={inputs.numero}
        deuda={inputs.deuda}
        imagen="/notificacion.png"
        footer="@el.joyboy.de.chignautla"
      />

      <BotonDescargar
        referencia={adeudoRef}
        texto="Descargar Notificación de Adeudo"
        nombreArchivo="Notificacion-adeudo.png"
      />

      <br />

      <br />

      {/* =============================
            AVISO SIN SERVICIO
      ============================== */}

      <Comunicado
        ref={servicioRef}
        tipo="sinServicio"
        titulo="Aviso Importante"
        fecha={fechaActual}
        fechaServicio={inputs.fecha}
        lugar={inputs.lugar}
        imagen="/notificacion.png"
        footer="@el.joyboy.de.chignautla"
      />

      <BotonDescargar
        referencia={servicioRef}
        texto="Descargar Aviso Sin Servicio"
        nombreArchivo="Aviso-sin-servicio.png"
      />
    </div>
  );
}

export default Notificacion;
