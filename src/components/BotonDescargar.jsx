/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import html2canvas from "html2canvas";


function BotonDescargar({

    referencia,

    texto = "Descargar Imagen",

    nombreArchivo = "Comunicado.png"

}) {



    const descargar = async () => {


        if (!referencia?.current) {

            console.error(
                "No se encontró el elemento para capturar"
            );

            return;

        }



        try {


            const canvas = await html2canvas(
                referencia.current,
                {
                    scale:4,

                    backgroundColor:"#ffffff",

                    useCORS:true,

                }
            );



            const pngUrl = canvas.toDataURL(
                "image/png"
            );



            const enlace =
                document.createElement("a");



            enlace.href = pngUrl;

            enlace.download = nombreArchivo;



            document.body.appendChild(enlace);


            enlace.click();


            document.body.removeChild(enlace);



        } catch(error){


            console.error(
                "Error al generar imagen:",
                error
            );


        }


    };



    return (

        <button

            className="button-descargar"

            onClick={descargar}

        >

            {texto}

        </button>

    );

}


export default BotonDescargar;