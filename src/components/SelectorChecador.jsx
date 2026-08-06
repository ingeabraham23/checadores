/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";


function SelectorChecador({
  nombre,
  setNombre,
  onAgregar,
}) {


  const personas = [
    "Areli Dionisio Rodrigo",
    "Mario Ivan Santos Belen",
    "Uriel Hernandez Ramirez",
    "Marcos Hernandez Ramirez",
    "Abraham Cabrera Benito",
    "Fernando Hernandez Hernandez",
  ];



  const handleSubmit = (e) => {

    e.preventDefault();


    if (!nombre) {
      return;
    }


    if (onAgregar) {

      onAgregar(nombre);

    }

  };



  return (

    <form
      className="form-checador"
      onSubmit={handleSubmit}
    >


      <label>
        Seleccione el checador:
      </label>



      <select

        className="entrada-de-texto"

        value={nombre}

        onChange={(e)=>setNombre(e.target.value)}

      >


        <option value="">
          Seleccione un nombre
        </option>



        {personas.map((persona)=>(
          
          <option
            key={persona}
            value={persona}
          >

            {persona}

          </option>

        ))}


      </select>



      <button

        type="submit"

        className="boton-agregar"

      >

        Agregar

      </button>



    </form>

  );

}


export default SelectorChecador;