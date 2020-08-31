import React,{useState} from "react";
import Componente1 from "./Componente1";
import ComponenteHooks from './ComponenteHooks'

const Componente5 = () => {
  //console.log("render comp5");

  //componente intermedio que está justo debajo del context, como context está creado de manera que acepta childrens, el primer componente justo abajo del Provider no se renderiza si no está usando context. Esto pasa también en el componente intermedio4 pero con React.memo

  const [numero, setnumero] = useState(1)

  const [array, setarray] = useState([1,2,3,4,5])

  const addArray = () =>{
    let arrayaux = [...array]
    arrayaux.push(array[array.length-1]+1)
    setarray(arrayaux)
  }

  return (
    <div>
      Componente intermedio 2
      <ComponenteHooks/> {/* siempre separar los componentes, este componente estaba acá en el mismo nivel y en Flamegraph se mostraba que cuando se hacía una acción tomaba el componente de abajo Componente1, y también re-renderizaba el que está dentro de Componente1, ahora separando la lógica a otro archivo ya no se hacen re-renders innecesarios */}
      <button onClick={()=>setnumero(numero+1)}>Cambiar número</button>
      <button onClick={addArray}>Agregar a array</button>
      <Componente1
        texto={"Hola"}
        numero={numero}
        objeto={{
          nombre: "Nicolás",
          edad: 29,
        }}
        array={array}
      />
    </div>
  );
};

export default Componente5;
