// eslint-disable-next-line no-unused-vars
import React, { useRef } from "react";
import "./Chedraui.css";

import html2canvas from "html2canvas";

import fototarifa from "/tarifa checadores chedraui.png";
import fotohorarios from "/horarios checadores chedraui.png";

function Chedraui() {
  const tablaReglasRef = useRef(null);

  function capturarTabla(tabla) {
    html2canvas(tabla, { scale: 4 }).then(function (canvas) {
      const pngUrl = canvas.toDataURL("image/png");
      const downloadLink = document.createElement("a");
      downloadLink.href = pngUrl;
      downloadLink.download = `Perfil.png`;
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    });
  }

  return (
    <div className="contenedor-chedraui">
      <table className="rules-table" ref={tablaReglasRef}>
        <thead>
          <tr>
            <th>Reglas del Grupo: Cinco maravillas</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <strong>1. Horario de operación:</strong> Los envíos de datos se
              realizarán dentro del horario de 10 am a 8:30 pm. Si por alguna
              razón no puedes entregar la comisión en un día, deberás reponerla
              al día siguiente. Esto significa que, al día siguiente, deberás
              entregar $40 pesos en comisiones, considerando el día anterior y
              el día actual.
            </td>
          </tr>
          <tr>
            <td>
              <strong>2. Horario estratégico:</strong> Trata de entregar la
              comisión en un horario con poca afluencia de pasajeros y
              camionetas de transporte público. Esto ayudará a minimizar errores
              y asegurar un proceso más eficiente.
            </td>
          </tr>
          <tr>
            <td>
              <strong>3. Comisión diaria:</strong> La comisión diaria es de $20
              pesos. Asegúrate de cumplir con esta cantidad diariamente.
            </td>
          </tr>
          <tr>
            <td>
              <strong>4. Contenido respetuoso y específico:</strong> Solo se
              permite compartir información relacionada con el trabajo. No se
              permite el envío de contenido ofensivo, insultante, despreciativo
              o información que no esté relacionada con Urbanos Rojos.
            </td>
          </tr>
          <tr>
            <td>
              <strong>
                5. No compartir información con personas ajenas a Urbanos Rojos:
              </strong>{" "}
              Está estrictamente prohibido compartir información del grupo con
              personas que no estén involucradas en el trabajo con Urbanos
              Rojos.
            </td>
          </tr>
          <tr>
            <td>
              <strong>6. No enviar spam, cadenas, etc.:</strong> No se permite
              el envío de mensajes no solicitados, spam, cadenas, ni contenido
              que no esté relacionado con el trabajo.
            </td>
          </tr>
          <tr>
            <td>
              <strong>
                7. Comunicación mediante mensajes y audios de WhatsApp
                únicamente:
              </strong>{" "}
              Se prohíben las llamadas de voz o video en el grupo, ya que esto
              puede afectar la capacidad de recabar datos de manera eficiente.
            </td>
          </tr>
          <tr>
            <td>
              <strong>8. Consecuencias por incumplimiento:</strong> Si no se
              cumplen las reglas, se eliminará al miembro del grupo y se dejará
              de brindar información. En caso de trabajar por privado, también
              se dejará de proporcionar información.
            </td>
          </tr>
          <tr>
            <td>
              <strong>9. Administración del grupo:</strong> Los miembros del
              comíte encargado del sistema de checadores tienen la autoridad
              para hacer cumplir estas reglas. Si surgen problemas o desacuerdos
              en el grupo, trata de resolverlos de manera pacífica y respetuosa.
              Si no puedes llegar a una solución, puedes comunicarte con los
              miembros del comíte para que te ayuden a resolver el problema.
            </td>
          </tr>
          <tr>
            <td>
              Estas reglas actualizadas y las consecuencias por su
              incumplimiento deberían ayudar a mantener un ambiente de trabajo
              productivo y eficiente en el grupo de WhatsApp. Asegúrate de
              comunicar estas reglas a todos los miembros para que estén al
              tanto de las normas y las consecuencias a seguir.
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td>
              <br></br>
            </td>
          </tr>
          <tr>
            <td className="copyright-notificacion">© JoyBoy</td>
          </tr>
          <br></br>
        </tfoot>
      </table>
      <br></br>
      <div>
        <button
          onClick={() => capturarTabla(tablaReglasRef.current)}
          className="button-descargar"
        >
          {" "}
          Descargar Reglas
        </button>
      </div>

      <br></br>
      <div className="contenedor-imagen">
        <img
          src={fototarifa}
          alt="Tarifa pra el checador de chedraui"
          className="tarifa"
        />
        <br></br>
        <a
          href={fototarifa}
          download="tarifa-chedraui.jpg"
          className="download-btn"
        >
          Descargar Imagen de Tarifa
        </a>
      </div>

      <br></br>
      <div className="contenedor-imagen">
        <img
          src={fotohorarios}
          alt="Horarios checadores de chedraui"
          className="tarifa"
        />
        <br></br>
        <a
          href={fotohorarios}
          download="horario-chedraui.jpg"
          className="download-btn"
        >
          Descargar Imagen de Horarios
        </a>
      </div>
    </div>
  );
}

export default Chedraui;
