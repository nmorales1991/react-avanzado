import React from "react";
//import { PruebaContext2 } from "../context/Context2"; //importo el context que se había exportado
//import Componente6 from "./Componente6";
import Intermedio from './Intermedio6'
import Context from "../context/Context3";
import ComponenteBoton from "./ComponenteBoton";

const Componente3 = () => {
  
  //console.log("render comp3");
  return (
    <div>
      <ComponenteBoton/>
      <Context>
        <Intermedio />
      </Context>
    </div>
  );
};

export default Componente3;
