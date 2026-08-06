import { useMemo, useState } from "react";
import "./Directorio.css";
import { contactos } from "./contactos";

import {
  FaPhoneAlt,
  FaWhatsapp,
  FaCopy,
  FaShareAlt,
  FaSearch,
} from "react-icons/fa";

function Directorio() {
  const [busqueda, setBusqueda] = useState("");
  const [mensajeCopiado, setMensajeCopiado] = useState("");

  const contactosFiltrados = useMemo(() => {
    return contactos.filter((contacto) =>
      contacto.nombre.toLowerCase().includes(busqueda.toLowerCase())
    );
  }, [busqueda]);

  const llamar = (telefono) => {
    window.location.href = `tel:${telefono}`;
  };

  const whatsapp = (telefono) => {
    const numero = telefono.replace(/\D/g, "");
    window.open(`https://wa.me/52${numero}`, "_blank");
  };

  const copiar = async (telefono) => {
    try {
      await navigator.clipboard.writeText(telefono);

      setMensajeCopiado("Número copiado");

      setTimeout(() => {
        setMensajeCopiado("");
      }, 1800);
    } catch {
      alert("No fue posible copiar el número.");
    }
  };

  const compartir = async (contacto) => {
    const texto = `${contacto.nombre}\n${contacto.telefono}`;

    if (navigator.share) {
      try {
        await navigator.share({
          title: contacto.nombre,
          text: texto,
        });
      // eslint-disable-next-line no-empty
      } catch {}
    } else {
      copiar(contacto.telefono);
    }
  };

  return (
    <div className="directorio">

      <h2 className="titulo-directorio">
        Directorio Telefónico
      </h2>

      <div className="busqueda">

        <FaSearch className="icono-busqueda" />

        <input
          type="text"
          placeholder="Buscar operador..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />

      </div>

      {mensajeCopiado && (
        <div className="mensaje-copiado">
          {mensajeCopiado}
        </div>
      )}

      <div className="lista-contactos">

        {contactosFiltrados.length === 0 && (
          <div className="sin-resultados">
            No se encontraron contactos.
          </div>
        )}

        {contactosFiltrados.map((contacto) => (
          <div
            className="tarjeta-contacto"
            key={contacto.id}
          >

            <div className="info-contacto">

              {contacto.foto ? (
                <img
                  src={contacto.foto}
                  alt={contacto.nombre}
                  className="foto-contacto"
                />
              ) : (
                <div className="foto-inicial">
                  {contacto.nombre.charAt(0).toUpperCase()}
                </div>
              )}

              <div className="datos-contacto">

                <div className="nombre-contacto">
                  {contacto.nombre}
                </div>

                <div
                  className="telefono-contacto"
                  onClick={() => copiar(contacto.telefono)}
                >
                  {contacto.telefono}
                </div>

              </div>

            </div>

            <div className="acciones-contacto">

              <button
                className="btn-accion btn-llamar"
                onClick={() => llamar(contacto.telefono)}
                title="Llamar"
              >
                <FaPhoneAlt />
              </button>

              <button
                className="btn-accion btn-whatsapp"
                onClick={() => whatsapp(contacto.telefono)}
                title="WhatsApp"
              >
                <FaWhatsapp />
              </button>

              <button
                className="btn-accion btn-copiar"
                onClick={() => copiar(contacto.telefono)}
                title="Copiar número"
              >
                <FaCopy />
              </button>

              <button
                className="btn-accion btn-compartir"
                onClick={() => compartir(contacto)}
                title="Compartir"
              >
                <FaShareAlt />
              </button>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}

export default Directorio;