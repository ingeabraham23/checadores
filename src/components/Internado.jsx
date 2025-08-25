// eslint-disable-next-line no-unused-vars
import React, { useRef, useState } from "react";
import "./Internado.css";

import html2canvas from "html2canvas";
import fototarifa from "/tarifa checadores internado.png";
import fotohorarios from "/horarios checadores internado.png";

function Internado() {
  const tablaReglasRef = useRef(null);
  const tablaTurnoRef = useRef(null);
  const tablaTurno2Ref = useRef(null);

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

  const fechaActual = new Date().toLocaleDateString("es-ES", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const [inputs, setInputs] = useState({
    nombre: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar lógica para guardar los datos, si es necesario
  };

  return (
    <div className="contenedor-chedraui">
      <table
        className="tabla-notificacion-turno"
        ref={tablaTurnoRef}
        style={{
          border: "1px solid #000",
          borderCollapse: "collapse",
          width: "100%",
        }}
      >
        <tbody>
          <tr>
            <td className="imagen-notificacion">
              <img
                src="./notificacion.png"
                alt="Notificacion"
                style={{ width: "70px", height: "70px" }}
              />
            </td>
          </tr>

          <tr>
            <td className="encabezado-notificacion-turno">
              Notificación de Horario de Servicio para el Día de Hoy.
            </td>
          </tr>
          <tr>
            <td className="fecha-notificacion-turno">{fechaActual}</td>
          </tr>

          <tr>
            <td className="informe-turno">
              Estimados compañeros, Por medio de la presente, se les informa que
              el día de hoy el servicio se brindará en:
            </td>
          </tr>

          <tr>
            <td className="horario-turno">
              horario continuo de 09:00 a.m. a 8:30 p.m.
            </td>
          </tr>

          <tr>
            <td className="asignacion-turno">
              Para garantizar una adecuada cobertura, la asignación del servicio
              será la siguiente:
            </td>
          </tr>
          <tr>
            <td className="horario-turnos">
              Primer turno: de 9:00 a.m. a 1:00 p.m. Segundo turno: de 1:00 p.m.
              a 8:30 p.m.
            </td>
          </tr>


          <tr>
            <td className="gracias-turno">
              Gracias por tu atención y comprensión.
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
          onClick={() => capturarTabla(tablaTurnoRef.current)}
          className="button-descargar"
        >
          {" "}
          Descargar Horario Continuo
        </button>
      </div>
      <br></br>
      <br></br>
      {/*TURNO SEGMENTADO TURNO SEGMENTADO TURNO SEGMENTADO TURNO SEGMENTADO TURNO SEGMENTADO TURNO SEGMENTADO */}
      <form onSubmit={handleSubmit}>
        <label>
          <select
            name="nombre"
            value={inputs.nombre}
            onChange={handleChange}
            className="entrada-de-texto"
          >
            <option value="">Seleccione un nombre</option>
            <option value="Areli Dionisio Rodrigo">
              Areli Dionisio Rodrigo
            </option>
            <option value="Mario Ivan Santos Belen">
              Mario Ivan Santos Belen
            </option>
            <option value="Uriel Hernandez Ramirez">
              Uriel Hernandez Ramirez
            </option>
            <option value="Marcos Hernandez Ramirez">
              Marcos Hernandez Ramirez
            </option>
            <option value="Abraham Cabrera Benito">
              Abraham Cabrera Benito
            </option>
          </select>
        </label>
        {/* Input para subir la imagen */}
        <button type="submit">Agregar</button>
      </form>
      <table
        className="tabla-notificacion-turno"
        ref={tablaTurno2Ref}
        style={{
          border: "1px solid #000",
          borderCollapse: "collapse",
          width: "100%",
        }}
      >
        <tbody>
          <tr>
            <td className="imagen-notificacion">
              <img
                src="./notificacion.png"
                alt="Notificacion"
                style={{ width: "50px", height: "50px" }}
              />
            </td>
          </tr>

          <tr>
            <td className="encabezado-notificacion-turno">
              Notificación de Horario de Servicio para el Día de Hoy.
            </td>
          </tr>
          <tr>
            <td className="fecha-notificacion-turno">{fechaActual}</td>
          </tr>

          <tr>
            <td className="informe-turno">
              Estimados compañeros, Por medio de la presente, se les informa que
              el día de hoy el servicio sera brindado por:
            </td>
          </tr>

          <tr><td className="servidor">{inputs.nombre}</td></tr>

          <tr>
            <td className="horario-turnos">
              En horario segmentado de la siguiente manera:
            </td>
          </tr>
          <tr>
            <td className="horario-turno-de">Primer turno de:</td>
          </tr>
          <tr>
            <td className="horario-turno">9:30 a.m. a 3:00 p.m.</td>
          </tr>
          <tr>
            <td className="horario-turno-de-comida">Receso para comida de:</td>
          </tr>
          <tr>
            <td className="horario-turno-comida">3:00 p.m. a 4:00 p.m.</td>
          </tr>
          <tr>
            <td className="horario-turno-de">Segundo turno de:</td>
          </tr>
          <tr>
            <td className="horario-turno">4:00 p.m. a 8:30 p.m.</td>
          </tr>

          <tr>
            <td className="gracias-turno">
              Gracias por tu atención y comprensión.
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
          onClick={() => capturarTabla(tablaTurno2Ref.current)}
          className="button-descargar"
        >
          {" "}
          Descargar Horario Segmentado
        </button>
      </div>
      <br></br>
      <br></br>

      <table className="rules-table" ref={tablaReglasRef}>
        <thead>
          <tr>
            <th>Reglas del Grupo: Internado</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <strong>1. Horario de operación:</strong> Los envíos de datos se
              realizarán dentro del horario de 9:30 am a 3:00 pm.{" "}
              <strong style={{ color: "black" }}>
                De 3:00 pm a 4:00 pm será la hora de comida.
              </strong>{" "}
              Posteriormente, el servicio continuará de 4:00 pm a 8:30 pm. Si
              por alguna razón no puedes entregar la comisión en un día, deberás
              reponerla al día siguiente. Esto significa que, al día siguiente,
              deberás entregar $40 pesos en comisiones, considerando el día
              anterior y el día actual.
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
          alt="Horarios para el checador de chedraui"
          className="tarifa"
        />
        <br></br>
        <a
          href={fotohorarios}
          download="horarios-internado.jpg"
          className="download-btn"
        >
          Descargar Imagen de Horarios Internado
        </a>
      </div>
    </div>
  );
}

export default Internado;
