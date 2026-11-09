import { useRef, useState } from "react";
import html2canvas from "html2canvas";
import {
  FaMapMarkerAlt,
  FaUtensils,
  FaDownload,
  FaCamera,
  FaBus,
} from "react-icons/fa";
import "./UbicacionesChecadores.css";

const ubicaciones = [
  {
    id: "chedraui",
    nombre: "CHEDRAUI",
    descripcion: "Punto de checado",
    encargados: [
      {
        dias: "LUNES A VIERNES",
        nombre: "Fernando",
        foto: "fernando",
      },
      {
        dias: "SÁBADO Y DOMINGO",
        nombre: "Marlen Citlali",
        foto: "marlen",
      },
    ],
    horarios: [
      {
        dias: "LUNES A VIERNES",
        entrada: "9:30 AM",
        comida: "3:30 – 4:30 PM",
        salida: "4:30 – 8:30 PM",
      },
      {
        dias: "SÁBADO Y DOMINGO",
        entrada: "9:00 AM",
        comida: "2:30 – 3:30 PM",
        salida: "3:30 – 8:00 PM",
      },
    ],
  },
  {
    id: "internado",
    nombre: "INTERNADO",
    descripcion: "Punto de checado",
    encargados: [
      {
        dias: "LUNES A VIERNES",
        nombre: "Francisco",
        foto: "francisco",
      },
      {
        dias: "SÁBADO Y DOMINGO",
        nombre: "Marcos",
        foto: "marcos",
      },
    ],
    horarios: [
      {
        dias: "LUNES A VIERNES",
        entrada: "9:00 AM",
        comida: "2:30 – 3:30 PM",
        salida: "3:30 – 8:30 PM",
      },
      {
        dias: "SÁBADO Y DOMINGO",
        entrada: "9:30 AM",
        comida: "3:30 – 4:30 PM",
        salida: "4:30 – 8:30 PM",
      },
    ],
  },
];

// RECORTAR FOTOGRAFÍA AL CENTRO
const recortarImagenCuadrada = (archivo) => {
  return new Promise((resolve, reject) => {
    const lector = new FileReader();

    lector.onload = () => {
      const imagen = new Image();

      imagen.onload = () => {
        // Tomar el lado más pequeño
        const lado = Math.min(imagen.width, imagen.height);

        // Calcular el recorte centrado
        const x = (imagen.width - lado) / 2;
        const y = (imagen.height - lado) / 2;

        const canvas = document.createElement("canvas");

        canvas.width = 600;
        canvas.height = 600;

        const ctx = canvas.getContext("2d");

        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = "high";

        // Recortar y convertir a 600 x 600
        ctx.drawImage(
          imagen,
          x,
          y,
          lado,
          lado,
          0,
          0,
          600,
          600
        );

        resolve(canvas.toDataURL("image/png"));
      };

      imagen.onerror = () => {
        reject(new Error("No se pudo cargar la fotografía."));
      };

      imagen.src = lector.result;
    };

    lector.onerror = () => {
      reject(new Error("No se pudo leer el archivo."));
    };

    lector.readAsDataURL(archivo);
  });
};

export default function UbicacionesChecadores() {
  const refs = {
    chedraui: useRef(null),
    internado: useRef(null),
  };

  const [fotos, setFotos] = useState({
    fernando: null,
    marlen: null,
    francisco: null,
    marcos: null,
  });

  const [descargando, setDescargando] = useState("");

  // CARGAR Y RECORTAR FOTOGRAFÍA
  const cargarFoto = async (evento, encargado) => {
    const archivo = evento.target.files?.[0];

    if (!archivo) return;

    if (!archivo.type.startsWith("image/")) {
      alert("Selecciona un archivo de imagen válido.");
      evento.target.value = "";
      return;
    }

    try {
      const imagenRecortada = await recortarImagenCuadrada(archivo);

      setFotos((actuales) => ({
        ...actuales,
        [encargado]: imagenRecortada,
      }));
    } catch (error) {
      console.error("Error al procesar fotografía:", error);
      alert("No fue posible procesar la fotografía.");
    }

    // Permite volver a seleccionar la misma fotografía
    evento.target.value = "";
  };

  // ESPERAR A QUE LAS IMÁGENES ESTÉN CARGADAS
  const esperarImagenes = async (elemento) => {
    const imagenes = Array.from(elemento.querySelectorAll("img"));

    await Promise.all(
      imagenes.map((imagen) => {
        if (imagen.complete && imagen.naturalWidth > 0) {
          return Promise.resolve();
        }

        return new Promise((resolve) => {
          imagen.onload = resolve;
          imagen.onerror = resolve;
        });
      })
    );
  };

  // DESCARGAR IMAGEN
  const descargarImagen = async (ubicacion) => {
    const elemento = refs[ubicacion.id].current;

    if (!elemento || descargando) return;

    try {
      setDescargando(ubicacion.id);

      await esperarImagenes(elemento);

      if (document.fonts?.ready) {
        await document.fonts.ready;
      }

      const canvas = await html2canvas(elemento, {
        scale: 6,
        backgroundColor: "#f8fafc",
        useCORS: true,
        logging: false,
      });

      const enlace = document.createElement("a");

      enlace.download = `Horarios-${ubicacion.id}.png`;
      enlace.href = canvas.toDataURL("image/png");
      enlace.click();
    } catch (error) {
      console.error("Error al generar imagen:", error);
      alert("No fue posible generar la imagen.");
    } finally {
      setDescargando("");
    }
  };

  return (
    <main className="ubicaciones-pagina">

      <header className="ubicaciones-titulo">
        <span>SIERRA NORTE</span>
        <h1>Ubicaciones y horarios</h1>
        <p>Información de nuestros puntos de checado</p>
      </header>

      {ubicaciones.map((ubicacion) => (
        <section
          className="ubicacion-contenedor"
          key={ubicacion.id}
        >

          {/* IMAGEN QUE SE DESCARGARÁ */}
          <div
            className="ubicacion-cartel"
            ref={refs[ubicacion.id]}
          >

            <header className="ubicacion-encabezado">
              <div className="ubicacion-icono">
                <FaMapMarkerAlt />
              </div>

              <span className="ubicacion-etiqueta">
                PUNTO DE CHECADO
              </span>

              <h2>{ubicacion.nombre}</h2>

              <p>{ubicacion.descripcion}</p>
            </header>

            {/* ENCARGADOS */}
            <div className="ubicacion-encargados">

              {ubicacion.encargados.map((encargado) => (
                <div
                  className="encargado"
                  key={encargado.foto}
                >

                  <div className="encargado-foto">
                    {fotos[encargado.foto] ? (
                      <img
                        src={fotos[encargado.foto]}
                        alt={encargado.nombre}
                      />
                    ) : (
                      <FaCamera />
                    )}
                  </div>

                  <span className="encargado-dias">
                    {encargado.dias}
                  </span>

                  <strong>{encargado.nombre}</strong>

                </div>
              ))}

            </div>

            {/* HORARIOS */}
            <div className="ubicacion-horarios">

              {/* <div className="horarios-titulo">
                <FaClock />
                <span>HORARIOS DE ATENCIÓN</span>
              </div> */}

              <div className="horarios-columnas">

                {ubicacion.horarios.map((horario, index) => (
                  <div
                    className="horario-columna"
                    key={horario.dias}
                  >

                    <div className="horario-dias">
                      {index === 0 ? "ENTRE SEMANA" : "FIN DE SEMANA"}
                    </div>

                    <div className="horario-fila">
                      <span>Entrada</span>
                      <strong>{horario.entrada}</strong>
                    </div>

                    <div className="horario-fila horario-comida">
                      <span>
                        <FaUtensils />
                        Comida
                      </span>
                      <strong>{horario.comida}</strong>
                    </div>

                    <div className="horario-fila">
                      <span>Segundo turno</span>
                      <strong>{horario.salida}</strong>
                    </div>

                  </div>
                ))}

              </div>
            </div>

            {/* PIE DE IMAGEN */}
            <footer className="ubicacion-pie">
              <div>
                <FaBus />
                <span>LÍNEA INTERURBANA SIERRA NORTE</span>
              </div>

              <strong>@el.joyboy.de.chignautla</strong>
            </footer>

          </div>

          {/* CONTROLES FUERA DE LA IMAGEN */}
          <div className="ubicacion-controles">

            <p className="controles-titulo">
              <FaCamera />
              Fotografías de los encargados
            </p>

            <div className="controles-fotos">

              {ubicacion.encargados.map((encargado) => (
                <label
                  className="control-foto"
                  key={encargado.foto}
                >
                  <span>
                    {encargado.nombre}
                  </span>

                  <div className="control-foto-boton">
                    <FaCamera />
                    {fotos[encargado.foto]
                      ? "Cambiar foto"
                      : "Subir foto"}
                  </div>

                  <input
                    type="file"
                    accept="image/*"
                    onChange={(evento) =>
                      cargarFoto(evento, encargado.foto)
                    }
                  />
                </label>
              ))}

            </div>

            <button
              className="ubicacion-descargar"
              onClick={() => descargarImagen(ubicacion)}
              disabled={descargando !== ""}
            >
              <FaDownload />

              {descargando === ubicacion.id
                ? "Generando imagen..."
                : `Descargar ${ubicacion.nombre}`}
            </button>

          </div>

        </section>
      ))}

    </main>
  );
}
