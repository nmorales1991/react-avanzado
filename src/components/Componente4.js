import React from "react";
import Componente3 from "../components/Componente3";
import Context from "../context/Context2";

const Componente4 = React.memo(() => {//no se re-renderiza cuando se cambie el contexto, ya que uso React.memo y no estoy consumiendo el contexto
    //React.memo funciona sólo con componentes funcionales, esto trabaja sólo con props, si el componente no cambiará de props, entonces usará las props antiguas y no re-renderizará
    //Esto sólo funciona con props, si este componente tuviera useState o useContext, entonces renderizará igual
  //console.log("render comp4");

  return (
    <div>
      Componente intermedio
      <Context>
        <Componente3 />
      </Context>
    </div>
  );
});

export default Componente4;
