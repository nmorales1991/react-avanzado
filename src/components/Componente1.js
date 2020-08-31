import React, { useContext ,useCallback, useState,useMemo} from "react";
import Componente2 from "./Componente2";
import ComponenteRerender from "./ComponenteRerender";
import PropTypes from 'prop-types';


import { PruebaContext } from "../context/Context";

const Componente1 = ({texto,numero,objeto,array}) => {

  const [count, setcount] = useState(0)

  const actualizarCount = () =>{
    setcount(count+1)
  }


  const holaMundo = useCallback(() =>{//función se ejecuta sólo cuando cambian las dependencias, se pasa al componente hijo. Si no se usara useCallback, si el componente se re-renderiza entonces la función se vuelve a crear y se ejecuta. Con useCallback la función no se vuelve a crear y no se ejecuta a menos que las dependencias cambien
        console.log(numero)
  },[numero])

  const memo = useMemo(() => <ComponenteRerender array={array}/>, [array]) //solo se renderizará si la dependencia cambia

  const context = useContext(PruebaContext);//obtengo el contexto
  //console.log("render comp1");
  return (
    <div>
      {context.testContext}
      <button
        onClick={() =>
          context.settestContext(
            "cambio el valor de context1 desde componente1"
          )
        }
      >
        Cambiar valor context1
      </button>
      <button onClick={actualizarCount}> contador componente 1 : {count}</button>
      <Componente2 objeto={objeto} holaMundo={holaMundo} />
      {memo}
    </div>
  );
};

Componente1.propTypes ={ //agregar en cada componente que reciba props, esto llevará un orden de que tipo de dato de props llega, y cual es requerido o no
  texto: PropTypes.string,
  numero: PropTypes.number.isRequired,
  objeto: PropTypes.shape({
    nombre:PropTypes.string,
    edad: PropTypes.number
  })
}

export default Componente1;
