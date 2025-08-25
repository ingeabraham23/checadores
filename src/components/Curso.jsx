// eslint-disable-next-line no-unused-vars
import React, {useState} from "react";
import "./Curso.css";

const Curso = () => {
  const [pila, setPila] = useState([]);
  const [nuevoElemento, setNuevoElemento] = useState('');

  const agregarElemento = (elemento) => {
    const nuevo = (elemento || nuevoElemento).trim().toLowerCase();
    if (!nuevo) return;

    setPila(prev => {
      let nuevaPila = [...prev];

      if (nuevo === 'coahuixco') {
        const indices = nuevaPila
          .map((e, i) => (e === 'coahuixco' ? i : -1))
          .filter(i => i !== -1);

        if (indices.length >= 2) {
          const ultimoIndex = indices[indices.length - 1];
          nuevaPila.splice(ultimoIndex, 1);
        }

        nuevaPila.unshift('coahuixco');
      } else {
        nuevaPila = nuevaPila.filter(e => e !== nuevo);
        nuevaPila.unshift(nuevo);
      }

      return nuevaPila;
    });

    setNuevoElemento('');
  };

  const botones = ['coahuixco', 'tezo', 'sosa', 'sani', 'cali'];

  const obtenerColor = (nombre) => {
    switch (nombre) {
      case 'coahuixco': return '#4caf50'; // verde
      case 'tezo': return '#ff9800'; // naranja
      case 'cali': return '#2196f3'; // azul
      case 'sosa': return '#e91e63'; // rosa
      case 'sani': return '#9e9e9e'; // gris
      default: return '#000'; // negro para otros
    }
  };

  return (
    <div className="contenedor-curso-joyvolt">

      <div style={{ padding: 20, fontFamily: 'Arial' }}>
      <h2>Pila dinámica</h2>

      <div style={{ marginBottom: 10 }}>
        {botones.map(btn => (
          <button
            key={btn}
            onClick={() => agregarElemento(btn)}
            style={{
              marginRight: 8,
              marginBottom: 8,
              backgroundColor: obtenerColor(btn),
              color: '#fff',
              border: 'none',
              padding: '8px 12px',
              borderRadius: 6,
              cursor: 'pointer'
            }}
          >
            {btn}
          </button>
        ))}
      </div>

      <div style={{ marginBottom: 20 }}>
        <input
          type="text"
          value={nuevoElemento}
          onChange={e => setNuevoElemento(e.target.value)}
          placeholder="Otro dato"
        />
        <button onClick={() => agregarElemento(null)} style={{ marginLeft: 10 }}>
          Agregar manualmente
        </button>
      </div>

      <h3>Pila actual:</h3>
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
        {pila.map((el, i) => (
          <div
            key={i}
            style={{
              backgroundColor: obtenerColor(el),
              color: '#fff',
              padding: '10px 14px',
              borderRadius: '20px',
              fontWeight: 'bold',
              minWidth: '40px',
              textAlign: 'center'
            }}
            title={el}
          >
            {el.slice(0, 2)}
          </div>
        ))}
      </div>
    </div>


      <p>
        A continuación, te presentamos una serie de videos alojados en YouTube
        que conforman un tutorial detallado sobre el uso de la aplicación para
        checadores de transporte público. Esta herramienta permite registrar los
        tiempos de las unidades y brindar información a los operadores para que
        ajusten su velocidad según la competencia: si los tiempos están muy
        cerrados, pueden ir más lento; si hay mucho espacio, pueden acelerar. El
        tutorial abarca desde la instalación y configuración de la aplicación
        hasta su uso avanzado, incluyendo: Registro de unidades en diferentes
        rutas. Predicción del número de unidad que sigue después de la última
        que pasó. Uso de la función de copy-paste para generar automáticamente
        los tiempos actuales. Generación y filtrado de reportes, con la opción
        de exportarlos en PDF, PNG o XLS. Creación de un archivo JSON de
        respaldo, que puede cargarse nuevamente en la aplicación para
        verificación de datos por parte de los altos mandos. Se recomienda
        seguir cada módulo del tutorial paso a paso para garantizar un uso
        óptimo y seguro de la aplicación.
      </p>
      <p className="titulo-enlace-curso">01 Copy-Paste Otras rutas y tacopan</p>
      {/* Video embebido */}
      <div style={{ width: "50vw", margin: "0 auto" }}>
        <iframe
          width="100%"
          height="auto"
          style={{ aspectRatio: "16 / 9" }}
          src="https://www.youtube.com/embed/ovmaCW8qqyE"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <p className="descripcion-enlace-curso">https://youtu.be/ovmaCW8qqyE</p>
      <div className="link-container-curso">
        <a
          href={"https://youtu.be/ovmaCW8qqyE"}
          target="_blank"
          rel="noopener noreferrer"
          className="boton-enlace-curso"
        >
          Abrir Enlace
        </a>
        <button
          onClick={() => {
            navigator.clipboard.writeText("https://youtu.be/ovmaCW8qqyE");
            alert("Enlace copiado al portapapeles");
          }}
          className="boton-copiar-curso"
        >
          Copiar Enlace
        </button>
      </div>
      <div className="separador-curso-joyvolt"></div>

      <p className="titulo-enlace-curso">
        02 Copy-Paste Talzintan y Loma
      </p>
      {/* Video embebido */}
      <div style={{ width: "50vw", margin: "0 auto" }}>
        <iframe
          width="100%"
          height="auto"
          style={{ aspectRatio: "16 / 9" }}
          src="https://www.youtube.com/embed/OyDWXZj9KzU"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <p className="direccion-web">https://youtu.be/OyDWXZj9KzU</p>
      <div className="link-container-curso">
        <a
          href={"https://youtu.be/OyDWXZj9KzU"}
          target="_blank"
          rel="noopener noreferrer"
          className="boton-enlace-curso"
        >
          Abrir Enlace
        </a>
        <button
          onClick={() => {
            navigator.clipboard.writeText("https://youtu.be/OyDWXZj9KzU");
            alert("Enlace copiado al portapapeles");
          }}
          className="boton-copiar-curso"
        >
          Copiar Enlace
        </button>
      </div>
      <div className="separador-curso-joyvolt"></div>

      <p className="titulo-enlace-curso">
        03 Probabilidades AMOTAC
      </p>
      {/* Video embebido */}
      <div style={{ width: "50vw", margin: "0 auto" }}>
        <iframe
          width="100%"
          height="auto"
          style={{ aspectRatio: "16 / 9" }}
          src="https://www.youtube.com/embed/VJXQvsxaICQ"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <p className="direccion-web">https://youtu.be/VJXQvsxaICQ</p>
      <div className="link-container-curso">
        <a
          href={"https://youtu.be/VJXQvsxaICQ"}
          target="_blank"
          rel="noopener noreferrer"
          className="boton-enlace-curso"
        >
          Abrir Enlace
        </a>
        <button
          onClick={() => {
            navigator.clipboard.writeText("https://youtu.be/VJXQvsxaICQ");
            alert("Enlace copiado al portapapeles");
          }}
          className="boton-copiar-curso"
        >
          Copiar Enlace
        </button>
      </div>
      <div className="separador-curso-joyvolt"></div>
    </div>
  );
};

export default Curso;
