// eslint-disable-next-line no-unused-vars
import React, { useState, useRef } from "react";
import "./Notificacion.css";
import html2canvas from "html2canvas";

function Notificacion() {
  // eslint-disable-next-line no-unused-vars
  const [image, setImage] = useState(null);

  const tablaRef = useRef(null);

  const [inputs, setInputs] = useState({
    nombre: "",
    numero: "",
    deuda: "",
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

  const fechaActual = new Date().toLocaleDateString("es-ES", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            name="nombre"
            placeholder="Nombre:"
            value={inputs.nombre}
            onChange={handleChange}
          />
        </label>
        <label>
          <input
            type="text"
            name="numero"
            placeholder="Numero de unidad:"
            value={inputs.numero}
            onChange={handleChange}
          />
        </label>
        <label>
          <input
            type="text"
            name="deuda"
            placeholder="Deuda:"
            value={inputs.deuda}
            onChange={handleChange}
          />
        </label>
        {/* Input para subir la imagen */}
        <button type="submit">Agregar</button>
      </form>
      <hr></hr>
      <table
        className="tabla-notificacion"
        ref={tablaRef}
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
            <td className="encabezado-notificacion">Notificacion de adeudo</td>
          </tr>
          <tr>
            <td className="fecha-notificacion">{fechaActual}</td>
          </tr>
          <tr>
            <td className="nombre-notificacion">{inputs.nombre}</td>
          </tr>
          <tr>
            <td className="operador-notificacion">Operador de la unidad:</td>
          </tr>
          <tr>
            <td className="numero-notificacion"># {inputs.numero}</td>
          </tr>
          <tr>
            <td>
              <br></br>
            </td>
          </tr>
          <tr>
            <td className="deuda-notificacion">
              Te notifico que el día de hoy no se registró el pago de tu cuota
              para la checadora. Te recuerdo que mañana deberás cubrir el monto
              de{" "}
              <span className="cantidad-notificacion">$ {inputs.deuda}.00</span>{" "}
              correspondiente al día de hoy, además de la cuota diaria.
            </td>
          </tr>
          <tr>
            <td>
              <br></br>
            </td>
          </tr>
          <tr>
            <td className="recomendacion-notificacion">
              Te agradecería que realices el pago de manera puntual cada día,
              preferentemente en horas de menor actividad, como en la mañana,
              para facilitar el proceso.
            </td>
          </tr>
          <tr>
            <td>
              <br></br>
            </td>
          </tr>
          <tr>
            <td className="gracias-notificacion">
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

export default Notificacion;