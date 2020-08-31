import React,{ useContext } from "react";
import { PruebaContext2 } from "../context/Context2"; //importo el context que se había exportado

const ComponenteBoton = () => {
  const context = useContext(PruebaContext2); //lo uso con useContext y obtengo los valores de ese context
  console.log("re render botón")
  return (
    <div>
      {context.testContext}

      <button
        onClick={() =>
          context.settestContext("cambio valor context2 desde componente3")
        }
      >
        Cambiar valor context2
      </button>
    </div>
  );
};

export default ComponenteBoton;
