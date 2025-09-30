// eslint-disable-next-line no-unused-vars
import React, { useState, useRef } from "react";
import "./Empleo.css";
import html2canvas from "html2canvas";

function Empleo() {
  // eslint-disable-next-line no-unused-vars
  const [image, setImage] = useState(null);

  const tablaRef = useRef(null);

  const [inputs, setInputs] = useState({
    horario: "",
    sueldo: "",
    telefono: "",
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

  function capturarTabla(tabla) {
    html2canvas(tabla, { scale: 4 }).then(function (canvas) {
      const pngUrl = canvas.toDataURL("image/png");
      const downloadLink = document.createElement("a");
      downloadLink.href = pngUrl;
      downloadLink.download = `Se busca.png`;
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    });
  }

  /* const fechaActual = new Date().toLocaleDateString("es-ES", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }); */

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            name="horario"
            placeholder="Horario:"
            value={inputs.horario}
            onChange={handleChange}
          />
        </label>
        <label>
          <input
            type="text"
            name="sueldo"
            placeholder="Sueldo:"
            value={inputs.sueldo}
            onChange={handleChange}
          />
        </label>
        <label>
          <input
            type="text"
            name="telefono"
            placeholder="Telefono:"
            value={inputs.telefono}
            onChange={handleChange}
          />
        </label>
        {/* Input para subir la imagen */}
        <button type="submit">Agregar</button>
      </form>
      <hr></hr>
      <table
        className="tabla-empleo"
        ref={tablaRef}
        style={{
          border: "1px solid #000",
          borderCollapse: "collapse",
          width: "100%",
        }}
      >
        <tbody>
          <tr>
            <td className="encabezado-empleo">
              Únete a Nuestro Equipo de Checadores de Transporte público
            </td>
          </tr>
          <tr>
            <td className="requisitos-empleo-encabezado">De lunes a viernes:</td>
          </tr>
          <tr>
            <td className="requisitos-empleo">De 9:00 am a 3:00 pm y de 4:00 pm a 8:30 pm</td>
          </tr>
          <tr>
            <td className="requisitos-empleo">Una hora para comer de 3:00 pm a 4:00 pm</td>
          </tr>
          <tr>
            <td className="requisitos-empleo-encabezado">Requisitos:</td>
          </tr>
          <tr>
            <td className="requisitos-empleo">
              * Estudios mínimos: Secundaria.
            </td>
          </tr>
          <tr>
            <td className="requisitos-empleo">
              * Habilidad para manejar WhatsApp y apps móviles.
            </td>
          </tr>
          <tr>
            <td className="requisitos-empleo">
              * Contar con un celular de gama media.
            </td>
          </tr>
          <tr>
            <td className="requisitos-empleo-encabezado">Ofrecemos:</td>
          </tr>
          <tr>
            <td className="requisitos-empleo">
              * Sueldo por comision: ${inputs.sueldo} aproximados.
            </td>
          </tr>
          <tr>
            <td className="requisitos-empleo">* Capacitación inicial.</td>
          </tr>
          <tr>
            <td className="requisitos-empleo">* Ambiente laboral amigable.</td>
          </tr>

          <tr>
            <td className="requisitos-empleo-encabezado">Actividades:</td>
          </tr>
          <tr>
            <td className="requisitos-empleo">
              * Supervisar y registrar los tiempos de las rutas.
            </td>
          </tr>
          <tr>
            <td className="requisitos-empleo">
              * Comunicación y atención a través de WhatsApp.
            </td>
          </tr>
          <tr>
            <td className="requisitos-empleo">
              * Manejo de aplicaciones móviles para registrar datos.
            </td>
          </tr>
          <tr>
            <td>
              <br></br>
            </td>
          </tr>
          <tr>
            <td className="lugar-empleo">Plaza maravillas.</td>
          </tr>
          <tr>
            <td className="contacto-empleo">
              Para mayor información. Envía un mensaje por WhatsApp al:
            </td>
          </tr>
          <tr>
            <td className="telefono-empleo">
              📞 {inputs.telefono || "231 159 1893"}
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td className="copyright-notificacion">© JoyBoy</td>
          </tr>
        </tfoot>
      </table>
      <button
        className="boton-capturar"
        onClick={() => capturarTabla(tablaRef.current)}
      >
        Capturar
      </button>
    </div>
  );
}

export default Empleo;
