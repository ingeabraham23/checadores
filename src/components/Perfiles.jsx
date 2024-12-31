// eslint-disable-next-line no-unused-vars
import React, { useRef } from "react";
import "./Perfiles.css";

import html2canvas from "html2canvas";

import fotoareli from "/areli.png";

function Perfiles() {
  const tablaRef = useRef(null);

  function capturarTabla(tabla) {
    html2canvas(tabla).then(function (canvas) {
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
    <div>
      <table className="tabla-areli" ref={tablaRef}>
        <thead></thead>
        <tbody>
          <tr>
            <td className="photo-cell" colSpan="2">
              <img
                src={fotoareli}
                alt="Fotografía del empleado"
                className="profile-photo"
              />
            </td>
          </tr>
          <tr>
            <td>
              <strong>Nombre:</strong>
            </td>
            <td>DIONISIO RODRIGO ARELI</td>
          </tr>
          <tr>
            <td>
              <strong>Posición:</strong>
            </td>
            <td>Checadora Internado</td>
          </tr>
          <tr>
            <td>
              <strong>Departamento:</strong>
            </td>
            <td>Logistica</td>
          </tr>
          <tr>
            <td>
              <strong>Teléfono:</strong>
            </td>
            <td>
              <a className="phone-link" href="tel:2311400365">
                231 140 0365
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <strong>Fecha de Contratación:</strong>
            </td>
            <td>21 de junio de 2024</td>
          </tr>
          <tr>
            <td>
              <strong>Dirección:</strong>
            </td>
            <td>Calle 16 de septimbre #1313 B</td>
          </tr>
        </tbody>
      </table>
      <div>
        <button onClick={() => capturarTabla(tablaRef.current)}>
          {" "}
          Descargar Perfil
        </button>
      </div>
    </div>
  );
}

export default Perfiles;
