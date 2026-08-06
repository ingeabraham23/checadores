/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { forwardRef } from "react";

const Comunicado = forwardRef(
  (
    {
      // eslint-disable-next-line no-unused-vars
      empresa = "Urbanos Rojos",

      sistema = "Sistema de Checadores",

      titulo = "Comunicado",

      fecha = "",

      mensaje = "",

      nombre = "",

      /*
 TIPOS DISPONIBLES

 continuo
 segmentado
 adeudo
 sinServicio

*/

      tipo = "continuo",

      // horarios

      horario = "",

      primerTitulo = "Primer Turno",

      primerHorario = "",

      comidaTitulo = "Receso",

      comidaHorario = "",

      segundoTitulo = "Segundo Turno",

      segundoHorario = "",

      // datos adeudo

      numero = "",

      deuda = "",

      // datos sin servicio

      fechaServicio = "",

      lugar = "",

      mostrarGracias = true,

      footer = "© JoyBoy",
    },

    ref,
  ) => {
    return (
      <div className="comunicado" ref={ref}>
        {/* ===========================
        ENCABEZADO
=========================== */}

        <div className="comunicado-header">
          <div className="logo-subtitulo">{sistema}</div>

          <div className="comunicado-titulo">{titulo}</div>

          <div className="comunicado-fecha">{fecha}</div>
        </div>

        <div className="comunicado-body">
          <div className="comunicado-texto">{mensaje}</div>

          {nombre !== "" && (
            <div className="tarjeta-nombre">
              <div className="nombre-servidor">{nombre}</div>
            </div>
          )}
          {/* ==================================
        AVISO DE ADEUDO
================================== */}

          {tipo === "adeudo" && (
            <>
                <div className="tarjeta-nombre">
                  <div className="nombre-servidor-deuda">Unidad # {numero}</div>
                </div>
                


              <div className="comunicado-texto">
                Te notifico que el día de hoy no se registró el pago de tu cuota
                para el servicio de checador. Te recuerdo que mañana deberás
                cubrir el monto de:
              </div>
              <div className="comunicado-texto-grande">
                <strong>$ {deuda}.00</strong>
              </div>
              <div className="comunicado-texto">
                correspondiente al día de hoy, además de la cuota diaria.
              </div>

              <div className="tarjeta-horario">
                <div className="tarjeta-body-corto">
                  <div className="comunicado-texto">
                    <strong>
                      Te agradecería que realices el pago de manera puntual cada
                      día, preferentemente en horarios de menor actividad para
                      facilitar el proceso.
                    </strong>
                  </div>
                </div>
              </div>
            </>
          )}

          {/* ==================================
        AVISO SIN SERVICIO
================================== */}

          {tipo === "sinServicio" && (
            <>
              <div className="comunicado-texto">
                Se informa que el día de:
                <div className="tarjeta-hora-servicio">{fechaServicio}</div>
                no se contará con servicio de checador(a).
              </div>

              <div className="tarjeta-horario">
                <div className="tarjeta-header">
                  <div className="tarjeta-titulo">Lugar</div>
                </div>

                <div className="tarjeta-body">
                  <div className="tarjeta-hora">{lugar}</div>
                </div>
              </div>
              <hr></hr>

              <div className="comunicado-texto-servicio">
                🟢Esta situación se debe a motivos de carácter personal del
                encargado del servicio.
                <br />
                🟢Se realizó la búsqueda de una persona que pudiera cubrir la
                jornada; sin embargo, no fue posible encontrar quien pudiera
                asumir dicha responsabilidad.
                <br />
                🟢El servicio se reanudará de manera normal al día siguiente en
                los horarios habituales.
                <br />
                🟢Ofrecemos una disculpa por cualquier inconveniente que esto
                pueda ocasionar y agradecemos su apoyo.
              </div>
            </>
          )}

          {/* ==================================
        HORARIO CONTINUO
================================== */}

          {tipo === "continuo" && (
            <div className="tarjeta-continuo">
              <div className="tarjeta-continuo-titulo">Horario Continuo</div>

              <div className="tarjeta-continuo-hora">{horario}</div>
            </div>
          )}

          {/* ==================================
        HORARIO SEGMENTADO
================================== */}

          {tipo === "segmentado" && (
            <div className="horarios-container">
              {/* PRIMER TURNO */}

              <div className="tarjeta-horario">
                <div className="tarjeta-header">
                  <div className="tarjeta-titulo">{primerTitulo}</div>
                </div>

                <div className="tarjeta-body">
                  <div className="tarjeta-hora">{primerHorario}</div>
                </div>
              </div>

              {/* COMIDA */}

              <div className="tarjeta-horario tarjeta-comida">
                <div className="tarjeta-header">
                  <div className="tarjeta-titulo">🍽 {comidaTitulo}</div>
                </div>

                <div className="tarjeta-body">
                  <div className="tarjeta-hora">{comidaHorario}</div>
                </div>
              </div>

              {/* SEGUNDO TURNO */}

              <div className="tarjeta-horario">
                <div className="tarjeta-header">
                  <div className="tarjeta-titulo">{segundoTitulo}</div>
                </div>

                <div className="tarjeta-body">
                  <div className="tarjeta-hora">{segundoHorario}</div>
                </div>
              </div>
            </div>
          )}

          {/* ==================================
        MENSAJE FINAL
================================== */}

          {mostrarGracias && (
            <div className="comunicado-final">
              Gracias por su atención y comprensión.
            </div>
          )}
        </div>

        {/* ==================================
            FOOTER
================================== */}

        <div className="comunicado-footer">{footer}</div>
      </div>
    );
  },
);

Comunicado.displayName = "Comunicado";

export default Comunicado;
