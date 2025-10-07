// eslint-disable-next-line no-unused-vars
import React, { useState, useRef } from "react";
import "./Empleo.css";
import html2canvas from "html2canvas";

function Empleo() {
  // eslint-disable-next-line no-unused-vars
  const [image, setImage] = useState(null);

  const tablaRef = useRef(null);
  const tablaRefDetalles = useRef(null);
  const tablaRefDetalles2 = useRef(null);
  const tablaRefDetalles3 = useRef(null);

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
            <td className="requisitos-empleo">* Sexo indistinto.</td>
          </tr>
          <tr>
            <td className="requisitos-empleo">* Mayor de 16 años.</td>
          </tr>
          {/*           <tr>
            <td className="requisitos-empleo">
              * Estudios mínimos: Secundaria.
            </td>
          </tr> */}
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
            <td className="requisitos-empleo">
              * Contar con bateria externa (power bank).
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
      {/* DETALLES DETALLES DETALLES DETALLES DETALLES */}
      <table
        className="tabla-empleo"
        ref={tablaRefDetalles}
        style={{
          border: "1px solid #000",
          borderCollapse: "collapse",
          width: "100%",
        }}
      >
        <tbody>
          <tr>
            <td className="numero-pagina">
              <div className="circulo-pagina">1</div>
            </td>
          </tr>
          <tr>
            <td className="encabezado-empleo">
              Información sobre Comisión, Capacitación y Proceso Operativo del Checador
            </td>
          </tr>

          <tr>
            <td className="requisitos-empleo-encabezado">Comisión:</td>
          </tr>
          <tr>
            <td className="requisitos-empleo">
              * Cada chofer aporta una comisión fija de $20.00 pesos diarios, siempre y cuando la información proporcionada sea clara, precisa y completa.
            </td>
          </tr>
          <tr>
            <td className="requisitos-empleo">
              * En promedio, se atienden al menos 25 choferes por jornada, lo que representa una ganancia superior a los $500.00 pesos diarios.
            </td>
          </tr>

          <tr>
            <td className="requisitos-empleo-encabezado">Capacitación:</td>
          </tr>
          <tr>
            <td className="requisitos-empleo">
              * Antes de comenzar a laborar, es necesario completar un periodo de capacitación práctica supervisada.
            </td>
          </tr>
          <tr>
            <td className="requisitos-empleo">
              * La duración de la capacitación dependerá de las habilidades y desempeño del candidato; si aprende con rapidez, la capacitación será más breve.
            </td>
          </tr>
          <tr>
            <td className="requisitos-empleo">
              * Durante la capacitación, el candidato trabajará junto a un checador experimentado, quien lo orientará y corregirá cualquier error que pueda presentarse.
            </td>
          </tr>
          <tr>
            <td className="requisitos-empleo">
              * El capacitador evaluará si el candidato es apto para el puesto. Si no cumple con los estándares requeridos, no podrá continuar en el proceso.
            </td>
          </tr>
          <tr>
            <td className="requisitos-empleo">
              * La capacitación no es remunerada; se requiere compromiso, disposición y una actitud responsable para aprovechar este proceso formativo.
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
        onClick={() => capturarTabla(tablaRefDetalles.current)}
      >
        Capturar Detalles
      </button>

      {/* DETALLES 2 DETALLES 2 DETALLES 2 DETALLES 2 */}

      <table
        className="tabla-empleo"
        ref={tablaRefDetalles2}
        style={{
          border: "1px solid #000",
          borderCollapse: "collapse",
          width: "100%",
        }}
      >
        <tbody>
          <tr>
            <td className="numero-pagina">
              <div className="circulo-pagina">2</div>
            </td>
          </tr>
          <tr>
            <td className="requisitos-empleo-encabezado">Proceso de Trabajo:</td>
          </tr>
          <tr>
            <td className="requisitos-empleo">
              * El trabajo consiste en brindar información precisa a los choferes sobre los tiempos entre unidades de distintas rutas, como por ejemplo Calicapan.
            </td>
          </tr>
          <tr>
            <td className="requisitos-empleo">
              * Cuando un chofer solicita información, el checador debe indicar cuánto tiempo ha transcurrido desde que pasó la última unidad hacia esa misma ruta, especificando si fue una unidad Roja o Ruta 3.
            </td>
          </tr>
          <tr>
            <td className="requisitos-empleo">
              * Si otra unidad pasa antes de que llegue quien solicitó la información, el checador debe informar qué unidad está pasando y cuánto tiempo se lleva respecto a la anterior.
            </td>
          </tr>
          <tr>
            <td className="requisitos-empleo">
              * Cuando pase la unidad del chofer que solicitó la información, deberá indicársele el tiempo que se lleva con la unidad que pasó antes de él.
            </td>
          </tr>
          <tr>
            <td className="requisitos-empleo">
              * Finalmente, al pasar la unidad siguiente, el checador debe informar al chofer que recién pasó qué unidad va detrás de él y cuánto tiempo lo separa.
            </td>
          </tr>
          <tr>
            <td className="requisitos-empleo">
              * Todo este proceso se realiza principalmente por medio de WhatsApp; sin embargo, algunos choferes no utilizan esta aplicación, por lo que será necesario brindarles la información verbalmente al momento de su paso, indicando el tiempo respecto a la unidad que va adelante.
            </td>
          </tr>
          <tr>
            <td className="requisitos-empleo">
              * Este procedimiento se realiza con todos los choferes que cuentan con servicio de checador. En horas pico puede ser necesario atender hasta cuatro unidades simultáneamente, lo cual requiere agilidad, concentración y capacidad de organización.
            </td>
          </tr>
          <tr>
            <td className="requisitos-empleo">
              * Es normal que al inicio existan errores; la práctica diaria permitirá mejorar la precisión y rapidez. Se valora la disposición por aprender y mejorar continuamente.
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
        onClick={() => capturarTabla(tablaRefDetalles2.current)}
      >
        Capturar Detalles 2
      </button>



      {/* DETALLES 3 DETALLES 3 DETALLES 3 DETALLES 3 */}
      <table
        className="tabla-empleo"
        ref={tablaRefDetalles3}
        style={{
          border: "1px solid #000",
          borderCollapse: "collapse",
          width: "100%",
        }}
      >
        <tbody>
          <tr>
            <td className="numero-pagina">
              <div className="circulo-pagina">3</div>
            </td>
          </tr>
          <tr>
            <td className="encabezado-empleo">
              Registro de Información, Aplicación Móvil y Proceso de Mejora
            </td>
          </tr>

          <tr>
            <td className="requisitos-empleo-encabezado">Registro y Organización:</td>
          </tr>
          <tr>
            <td className="requisitos-empleo">
              * Toda la información se registra en una tabla en hoja física, dividida por rutas, anotando el número de unidad, tipo de unidad (Roja o Ruta 3) y la hora exacta de paso.
            </td>
          </tr>
          <tr>
            <td className="requisitos-empleo">
              * Es necesario tener habilidad básica para sumar o restar tiempos con el fin de calcular los intervalos con precisión.
            </td>
          </tr>

          <tr>
            <td className="requisitos-empleo-encabezado">Uso de Aplicación Móvil:</td>
          </tr>
          <tr>
            <td className="requisitos-empleo">
              * Después de tres meses de trabajo continuo y satisfactorio, el checador podrá utilizar una aplicación móvil diseñada para agilizar y automatizar el registro de datos.
            </td>
          </tr>
          <tr>
            <td className="requisitos-empleo">
              * La aplicación permite registrar los tiempos de manera más rápida y también generar predicciones y reportes adicionales.
            </td>
          </tr>
          <tr>
            <td className="requisitos-empleo">
              * El acceso a la aplicación se otorga una vez que el trabajador demuestra responsabilidad, precisión y confianza en el manejo de la información.
            </td>
          </tr>
          <tr>
            <td>
              <br></br>
            </td>
          </tr>
          <tr>
            <td className="requisitos-empleo">
              <b>Este proceso garantiza un servicio confiable y profesional para los choferes, asegurando calidad en la información, eficiencia en la operación y crecimiento continuo dentro del equipo de trabajo.</b>
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
        onClick={() => capturarTabla(tablaRefDetalles3.current)}
      >
        Capturar Detalles 3
      </button>
    </div>
  );
}

export default Empleo;
