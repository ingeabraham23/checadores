// eslint-disable-next-line no-unused-vars
import React, { useRef, useState } from "react";

import "./Internado.css";

import Comunicado from "./Comunicado";

import SelectorChecador from "./SelectorChecador";

import BotonDescargar from "./BotonDescargar";

import ReglasInternado from "./ReglasInternado";

function Internado() {
  const [nombre, setNombre] = useState("");

  const fechaActual = new Date().toLocaleDateString("es-ES", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const continuoRef = useRef(null);

  const segmentadoRef = useRef(null);

  const segmentado2Ref = useRef(null);

  const completoRef = useRef(null);

  const reglasRef = useRef(null);

  const tarifaRef = useRef(null);

  return (
    <div className="contenedor-chedraui">
      {/* ==================================
              HORARIO CONTINUO
      =================================== */}

      <Comunicado
        ref={continuoRef}
        titulo="Checador(a) Internado"
        fecha={fechaActual}
        mensaje="
        Estimados compañeros, por medio de la presente,
        se les informa que el día de hoy el servicio será
        brindado en horario continuo.
        "
        tipo="continuo"
        horario="09:00 a.m. a 8:30 p.m."
      />

      <BotonDescargar
        referencia={continuoRef}
        texto="Descargar Horario Continuo"
        nombreArchivo="Horario-continuo.png"
      />

      {/* ==================================
            SELECTOR CHECADOR
      =================================== */}

      <SelectorChecador nombre={nombre} setNombre={setNombre} />

      {/* ==================================
              HORARIO SEGMENTADO
      =================================== */}

      <Comunicado
        ref={segmentadoRef}
        titulo="Checador(a) Internado"
        fecha={fechaActual}
        nombre={nombre}
        mensaje="
        Estimados compañeros, por medio de la presente,
        se les informa que el día de hoy el servicio será
        brindado por:
        "
        tipo="segmentado"
        primerHorario="9:30 a.m. a 3:00 p.m."
        comidaHorario="3:00 p.m. a 4:00 p.m."
        segundoHorario="4:00 p.m. a 8:30 p.m."
      />

      <BotonDescargar
        referencia={segmentadoRef}
        texto="Descargar Horario Segmentado"
        nombreArchivo="Horario-segmentado.png"
      />

      {/* ==================================
          HORARIO SEGMENTADO 2
          9:30 - 2:30 / COMIDA / 3:30 - 8:30
      =================================== */}

      <Comunicado
        ref={segmentado2Ref}
        titulo="Checador(a) Internado"
        fecha={fechaActual}
        nombre={nombre}
        mensaje="
        Estimados compañeros, por medio de la presente,
        se les informa que el día de hoy el servicio será
        brindado por:
        "
        tipo="segmentado"
        primerHorario="9:30 a.m. a 2:30 p.m."
        comidaHorario="2:30 p.m. a 3:30 p.m."
        segundoHorario="3:30 p.m. a 8:30 p.m."
      />

      <BotonDescargar
        referencia={segmentado2Ref}
        texto="Descargar Horario Segmentado 2"
        nombreArchivo="Horario-segmentado-2.png"
      />

      {/* ==================================
              HORARIO COMPLETO
              10:00 - 8:30
      =================================== */}

      <Comunicado
        ref={completoRef}
        titulo="Checador(a) Internado"
        fecha={fechaActual}
        nombre={nombre}
        mensaje="
        Estimados compañeros, por medio de la presente,
        se les informa que el día de hoy el servicio será
        brindado por:
        "
        tipo="continuo"
        horario="10:00 a.m. a 8:30 p.m."
      />

      <BotonDescargar
        referencia={completoRef}
        texto="Descargar Horario Completo"
        nombreArchivo="Horario-completo.png"
      />

      {/* ==================================
                 REGLAS
      =================================== */}

      <div ref={reglasRef}>
        <ReglasInternado />
      </div>

      <BotonDescargar
        referencia={reglasRef}
        texto="Descargar Reglas"
        nombreArchivo="Reglas-internado.png"
      />

      <div className="comunicado" ref={tarifaRef}>
        <div className="comunicado-header">
          <div className="logo-subtitulo">Sistema de Checadores</div>

          <div className="logo-subtitulo">Tarifa y Reglas del Servicio</div>
        </div>

        <div className="comunicado-body">
          <div className="tarjeta-horario">
            <div className="tarjeta-header">
              <div className="tarjeta-titulo">💵 Tarifa</div>
            </div>

            <div className="tarjeta-body">
              <div className="tarjeta-hora">$20.00 diarios</div>
            </div>
          </div>

          <div className="linea-decorativa"></div>

          <div className="comunicado-texto">
            <hr></hr>
            <strong>• Horario recomendado: </strong>
            Se recomienda realizar el pago en un horario con poca afluencia de
            pasajeros y unidades, con la finalidad de facilitar el trabajo del
            checador y evitar errores.
            <hr></hr>
            <strong>• Pago pendiente: </strong>
            Si por alguna causa de fuerza mayor no fue posible realizar el pago,
            deberá cubrirse al día siguiente a primera hora, junto con la cuota
            correspondiente al nuevo día.
            <hr></hr>
            <strong>• Comunicación: </strong>
            La comunicación con los checadores deberá limitarse exclusivamente a
            temas relacionados con el trabajo y el servicio.
          </div>
        </div>
        <div className="comunicado-footer">© JoyBoy</div>
      </div>

      <BotonDescargar
        referencia={tarifaRef}
        texto="Descargar Tarifa y Reglas"
        nombreArchivo="Tarifa-y-Reglas-Internado.png"
      />
    </div>
  );
}
export default Internado;
