
import { useRef, useState } from "react";
import html2canvas from "html2canvas";
import {
  FaBell,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaMoneyBillWave,
  FaDownload,
  FaCheckCircle,
  FaPhoneAlt,
} from "react-icons/fa";
import "./NotificacionComision.css";

export default function NotificacionComision() {
  const notificacionRef = useRef(null);
  const [descargando, setDescargando] = useState(false);

  const descargarImagen = async () => {
    if (!notificacionRef.current || descargando) return;

    try {
      setDescargando(true);

      await document.fonts.ready;

      const canvas = await html2canvas(notificacionRef.current, {
        scale: 6,
        backgroundColor: "#f8fafc",
        useCORS: true,
        logging: false,
      });

      const enlace = document.createElement("a");
      enlace.download = "Notificacion-Comision-Sierra-Norte.png";
      enlace.href = canvas.toDataURL("image/png");
      enlace.click();
    } catch (error) {
      console.error("Error al generar la imagen:", error);
      alert("No fue posible generar la imagen. Intenta nuevamente.");
    } finally {
      setDescargando(false);
    }
  };

  const checadores = [
    {
      ubicacion: "Chedraui",
      dias: "Lunes a viernes",
      nombre: "Fernando",
      telefono: "231 148 6468",
    },
    {
      ubicacion: "Chedraui",
      dias: "Sábados y domingos",
      nombre: "Marlen Citlali",
      telefono: "220 370 9069",
    },
    {
      ubicacion: "Internado",
      dias: "Lunes a viernes",
      nombre: "Francisco",
      telefono: "231 233 2132",
    },
    {
      ubicacion: "Internado",
      dias: "Sábados y domingos",
      nombre: "Marcos",
      telefono: "231 139 7328",
    },
  ];

  return (
    <main className="notificacion-pagina">
      <section
        ref={notificacionRef}
        className="notificacion-cartel"
      >
        <header className="notificacion-encabezado">
          <div className="notificacion-icono">
            <FaBell />
          </div>

          <span className="notificacion-etiqueta">
            AVISO IMPORTANTE
          </span>

          <h1>Comisión del checador</h1>

          <div className="notificacion-fecha">
            <FaCalendarAlt />
            <span>
              Nuevos lineamientos de servicio
            </span>
          </div>
        </header>

        <div className="notificacion-contenido">
          <p className="notificacion-introduccion">
            Compañeros, les informamos sobre la actualización
            de la comisión y los puntos de checado disponibles
            para brindarles servicio durante toda la semana.
          </p>

          <section className="notificacion-seccion">
            <h2>
              <FaMoneyBillWave />
              Comisión vigente
            </h2>

            <div className="notificacion-tarifas">
              <div className="notificacion-tarifa obligatoria">
                <span className="tarifa-etiqueta">
                  Comisión obligatoria
                </span>
                <strong>$20</strong>
                <span className="tarifa-pesos">MXN</span>
              </div>

              <div className="notificacion-tarifa recomendada">
                <span className="tarifa-etiqueta">
                  Comisión recomendada
                </span>
                <strong>$25</strong>
                <span className="tarifa-pesos">MXN</span>
              </div>
            </div>
          </section>

          <section className="notificacion-seccion">
            <h2>
              <FaMapMarkerAlt />
              Puntos de checado
            </h2>

            <div className="notificacion-puntos">
              <div className="notificacion-punto">
                <FaMapMarkerAlt />
                <div>
                  <strong>Internado</strong>
                  <span>Servicio de lunes a domingo</span>
                </div>
              </div>

              <div className="notificacion-punto">
                <FaMapMarkerAlt />
                <div>
                  <strong>Chedraui</strong>
                  <span>Servicio de lunes a domingo</span>
                </div>
              </div>
            </div>
          </section>

          <section className="notificacion-seccion">
            <h2>
              <FaPhoneAlt />
              Contacto de checadores
            </h2>

            <div className="notificacion-contactos">
              {checadores.map((checador, index) => (
                <div
                  className="notificacion-contacto"
                  key={index}
                >
                  <div className="contacto-encabezado">
                    <strong>{checador.ubicacion}</strong>
                    <span>{checador.dias}</span>
                  </div>

                  <div className="contacto-datos">
                    <span>{checador.nombre}</span>
                    <strong>{checador.telefono}</strong>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <div className="notificacion-recordatorio">
            <FaCheckCircle />
            <p>
              Agradecemos su apoyo y colaboración.
              Contamos con servicio de checadores todos
              los días en ambas ubicaciones.
            </p>
          </div>
        </div>

        <footer className="notificacion-pie">
          <span className="notificacion-copyright">
            @el.joyboy.de.chignautla
          </span>
        </footer>
      </section>

      <button
        className="notificacion-boton"
        onClick={descargarImagen}
        disabled={descargando}
      >
        <FaDownload />
        {descargando
          ? "Generando imagen..."
          : "Descargar imagen"}
      </button>
    </main>
  );
}
