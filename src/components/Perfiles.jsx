// eslint-disable-next-line no-unused-vars
import React, { useRef, useState } from "react";
import "./Perfiles.css";

import html2canvas from "html2canvas";

import fotoareli from "/areli.png";
//import fotoivan from "/ivan.png";
import fotouriel from "/uriel.png";
import fotomarcos from "/marcos.png";
import fotofernando from "/fernando.png";

const compartirNumero = async (telefono, nombre = "Contacto") => {
  if (navigator.share) {
    try {
      await navigator.share({
        title: nombre,
        text: `Teléfono: ${telefono}`,
      });
    } catch (error) {
      console.log(error);
    }
  } else {
    try {
      await navigator.clipboard.writeText(telefono);
      alert("Número copiado al portapapeles");
      // eslint-disable-next-line no-unused-vars
    } catch (error) {
      alert("No fue posible copiar el número");
    }
  }
};

function Perfiles() {
  const tablaAreliRef = useRef(null);
  //const tablaIvanRef = useRef(null);
  const tablaUrielRef = useRef(null);
  const tablaMarcosRef = useRef(null);
  const tablaFernandoRef = useRef(null);

  function capturarTabla(tabla, nombre) {
    html2canvas(tabla, { scale: 8 }).then(function (canvas) {
      const pngUrl = canvas.toDataURL("image/png");
      const downloadLink = document.createElement("a");
      downloadLink.href = pngUrl;
      downloadLink.download = `${nombre}.png`;
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    });
  }

  return (
    <div>
      <table className="tabla-areli" ref={tablaAreliRef}>
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
      <div className="acciones-contacto">
        <a
          href="https://wa.me/522311400365"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-contacto btn-whatsapp"
        >
          📱 WhatsApp
        </a>

        <button
          className="btn-contacto btn-share"
          onClick={() =>
            compartirNumero("2311400365", "DIONISIO RODRIGO ARELI")
          }
        >
          📤 Compartir
        </button>
      </div>
      <div>
        <button
          onClick={() => capturarTabla(tablaAreliRef.current, "Perfil Areli")}
          className="button-descargar"
        >
          {" "}
          Descargar Perfil Areli
        </button>
      </div>

      

      <br></br>

      {/* <table className="tabla-areli" ref={tablaIvanRef}>
        <thead></thead>
        <tbody>
          <tr>
            <td className="photo-cell" colSpan="2">
              <img
                src={fotoivan}
                alt="Fotografía del empleado"
                className="profile-photo"
              />
            </td>
          </tr>
          <tr>
            <td>
              <strong>Nombre:</strong>
            </td>
            <td>SANTOS BELEN MARIO IVAN</td>
          </tr>
          <tr>
            <td>
              <strong>Posición:</strong>
            </td>
            <td>Checador Chedraui</td>
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
              <a className="phone-link" href="tel:2311647556">
                231 164 7556
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <strong>Fecha de Contratación:</strong>
            </td>
            <td>25 de abril de 2021</td>
          </tr>
          <tr>
            <td>
              <strong>Dirección:</strong>
            </td>
            <td>Calle Díaz Ordaz #33 Sosa</td>
          </tr>
        </tbody>
      </table>
      <div>
        <button
          onClick={() => capturarTabla(tablaIvanRef.current, "Perfil Mario Ivan")}
          className="button-descargar"
        >
          {" "}
          Descargar Perfil Ivan
        </button>
      </div>
      <br></br> */}

      <table className="tabla-areli" ref={tablaUrielRef}>
        <thead></thead>
        <tbody>
          <tr>
            <td className="photo-cell" colSpan="2">
              <img
                src={fotouriel}
                alt="Fotografía del empleado"
                className="profile-photo"
              />
            </td>
          </tr>
          <tr>
            <td>
              <strong>Nombre:</strong>
            </td>
            <td>HERNANDEZ RAMIREZ URIEL</td>
          </tr>
          <tr>
            <td>
              <strong>Posición:</strong>
            </td>
            <td>Checador Chedraui</td>
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
              <a className="phone-link" href="tel:2311815657">
                231 181 5657
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <strong>Fecha de Contratación:</strong>
            </td>
            <td>04 de julio de 2020</td>
          </tr>
          <tr>
            <td>
              <strong>Dirección:</strong>
            </td>
            <td>Privada Zafiro #2 Talzintan</td>
          </tr>
        </tbody>
      </table>
      <div className="acciones-contacto">
        <a
          href="https://wa.me/2311815657"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-contacto btn-whatsapp"
        >
          📱 WhatsApp
        </a>

        <button
          className="btn-contacto btn-share"
          onClick={() =>
            compartirNumero("2311815657", "HERNANDEZ RAMIREZ URIEL")
          }
        >
          📤 Compartir
        </button>
      </div>
      <div>
        <button
          onClick={() => capturarTabla(tablaUrielRef.current, "Perfil Uriel")}
          className="button-descargar"
        >
          {" "}
          Descargar Perfil Uriel
        </button>
      </div>
      <br></br>

      <table className="tabla-areli" ref={tablaMarcosRef}>
        <thead></thead>
        <tbody>
          <tr>
            <td className="photo-cell" colSpan="2">
              <img
                src={fotomarcos}
                alt="Fotografía del empleado"
                className="profile-photo"
              />
            </td>
          </tr>
          <tr>
            <td>
              <strong>Nombre:</strong>
            </td>
            <td>HERNANDEZ RAMIREZ MARCOS</td>
          </tr>
          <tr>
            <td>
              <strong>Posición:</strong>
            </td>
            <td>Checador Internado y Chedraui</td>
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
              <a className="phone-link" href="tel:2311397328">
                231 139 7328
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <strong>Fecha de Contratación:</strong>
            </td>
            <td>04 de julio de 2023</td>
          </tr>
          <tr>
            <td>
              <strong>Dirección:</strong>
            </td>
            <td>Privada Zafiro #2 Talzintan</td>
          </tr>
        </tbody>
      </table>
      <div className="acciones-contacto">
        <a
          href="https://wa.me/2311397328"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-contacto btn-whatsapp"
        >
          📱 WhatsApp
        </a>

        <button
          className="btn-contacto btn-share"
          onClick={() =>
            compartirNumero("2311397328", "HERNANDEZ RAMIREZ MARCOS")
          }
        >
          📤 Compartir
        </button>
      </div>
      <div>
        <button
          onClick={() => capturarTabla(tablaMarcosRef.current, "Perfil Marcos")}
          className="button-descargar"
        >
          {" "}
          Descargar Perfil Marcos
        </button>
      </div>

      <table className="tabla-areli" ref={tablaFernandoRef}>
        <thead></thead>
        <tbody>
          <tr>
            <td className="photo-cell" colSpan="2">
              <img
                src={fotofernando}
                alt="Fotografía del empleado"
                className="profile-photo"
              />
            </td>
          </tr>
          <tr>
            <td>
              <strong>Nombre:</strong>
            </td>
            <td>HERNANDEZ HERNANDEZ FERNANDO</td>
          </tr>
          <tr>
            <td>
              <strong>Posición:</strong>
            </td>
            <td>Checador Internado y Chedraui</td>
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
              <a className="phone-link" href="tel:2311486468">
                231 148 6468
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <strong>Fecha de Contratación:</strong>
            </td>
            <td>Miercoles 22 de julio de 2026</td>
          </tr>
          <tr>
            <td>
              <strong>Dirección:</strong>
            </td>
            <td>Calle 20 de Febrero #22 Col San Antonio</td>
          </tr>
        </tbody>
      </table>
      <div className="acciones-contacto">
        <a
          href="https://wa.me/2311486468"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-contacto btn-whatsapp"
        >
          📱 WhatsApp
        </a>

        <button
          className="btn-contacto btn-share"
          onClick={() =>
            compartirNumero("2311486468", "HERNANDEZ HERNANDEZ FERNANDO")
          }
        >
          📤 Compartir
        </button>
      </div>
      <div>
        <button
          onClick={() =>
            capturarTabla(tablaFernandoRef.current, "Perfil Fernando")
          }
          className="button-descargar"
        >
          {" "}
          Descargar Perfil Fernando
        </button>
      </div>

      <br></br>
    </div>
  );
}

export default Perfiles;
