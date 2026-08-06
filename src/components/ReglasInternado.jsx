// eslint-disable-next-line no-unused-vars
import React from "react";


function ReglasInternado() {


  const reglas = [

    {
      titulo:"Horario de operación:",
      texto:
      "Los envíos de datos se realizarán dentro del horario establecido."
    },


    {
      titulo:"Horario estratégico:",
      texto:
      "Trata de entregar la comisión en un horario con poca afluencia de pasajeros y camionetas de transporte público. Esto ayudará a minimizar errores y asegurar un proceso más eficiente."
    },


    {
      titulo:"Comisión diaria:",
      texto:
      "La comisión diaria es de $20 pesos. Asegúrate de cumplir con esta cantidad diariamente."
    },


    {
      titulo:"Contenido respetuoso y específico:",
      texto:
      "Solo se permite compartir información relacionada con el trabajo. No se permite enviar contenido ofensivo, insultante, despreciativo o información que no esté relacionada con Urbanos Rojos."
    },


    {
      titulo:
      "No compartir información con personas ajenas a Urbanos Rojos:",
      texto:
      "Está estrictamente prohibido compartir información del grupo con personas que no estén involucradas en el trabajo."
    },


    {
      titulo:
      "No enviar spam, cadenas, etc.:",
      texto:
      "No se permite el envío de mensajes no solicitados, spam, cadenas ni contenido que no esté relacionado con el trabajo."
    },


    {
      titulo:
      "Comunicación mediante WhatsApp únicamente:",
      texto:
      "Se prohíben las llamadas de voz o video en el grupo, ya que pueden afectar la capacidad de recabar datos de manera eficiente."
    },


    {
      titulo:
      "Consecuencias por incumplimiento:",
      texto:
      "Si no se cumplen las reglas, se eliminará al miembro del grupo y se dejará de brindar información."
    },


    {
      titulo:
      "Administración del grupo:",
      texto:
      "Los miembros del comité encargado del sistema de checadores tienen autoridad para hacer cumplir estas reglas. Los problemas deberán resolverse de manera pacífica y respetuosa."
    }

  ];



  return (

    <table className="rules-table">


      <thead>

        <tr>

          <th>
            Reglas del Grupo: Internado
          </th>

        </tr>

      </thead>



      <tbody>


        {reglas.map((regla,index)=>(


          <tr key={index}>


            <td>


              <strong>
                {index + 1}. {regla.titulo}
              </strong>


              {" "}


              {regla.texto}


            </td>


          </tr>


        ))}



        <tr>

          <td>

            Estas reglas tienen como objetivo mantener
            un ambiente de trabajo organizado,
            respetuoso y eficiente para todos los
            integrantes de Urbanos Rojos.

          </td>

        </tr>



      </tbody>



      <tfoot>

        <tr>

          <td>

            <br />

            <div className="copyright-notificacion">

              © JoyBoy

            </div>

          </td>

        </tr>

      </tfoot>


    </table>

  );

}


export default ReglasInternado;