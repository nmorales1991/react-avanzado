import React, { useState, useEffect, useReducer } from "react";

const carroInicial = [
  //state inicial del reducer
  {
    id: 1,
    nombre: "Pollo",
  },
  {
    id: 2,
    nombre: "Tomate",
  },
];

const reducer = (state, action) => {
  //reducer, recibe el estado actual y una acción
  switch (
    action.type //casi siempre viene action.type para saber a que case entrar
  ) {
    case "agrega":
      return { carro: [...state.carro, action.payload] }; //retorno mi estado con una propiedad carro, la cual tiene un array con el state actual más lo que viene en payload
    case "elimina":
      return {
        carro: [...state.carro.filter((elem) => elem.id !== action.payload)],
      }; //retorno el estado con la propiedad carro, que tiene un array creado a partir del estado actual filtrando por payload
    case "agregado":
      return { ...state, mensaje: "Agregado" }; //retorno un mensaje, saco copia del state para que no se pierdan las otras propiedades
    case "eliminado":
      return { ...state, mensaje: "Eliminado" };
    default:
      return state;
  }
};
const ComponenteHooks = () => {
  const [state, dispatch] = useReducer(reducer, {
    carro: carroInicial,
    mensaje: "",
  }); //usereducer devuelve el estado actual y el método dispatch para llamar al reducer, recibe el reducer y un estado inicial
  const [count, setcount] = useState(0); //usestate devuelve un estado y una función para actualizarlo, recibe un valor inicial que se renderiza en el primer render, este valor inicial puede ser una función que devuelva un valor.
  useEffect(() => {
    //se ejecuta después de que el DOM se cargue
    return () => {
      //función opcional que se ejecute antes del siguiente renderizado, para limpiar algún estado al desmontar el componente
      console.log("salir");
    };
  }, [count]); //se carga tantas veces como cambie la dependencia que está entre corchetes.
  //la función para setear el estado recibe un nuevo valor, y re-renderiza el componente. Si el valor a setear es el mismo que el estado anterior, entonces se omite el re-renderizado
  const agregarProducto = () => {
    dispatch({ type: "agrega", payload: { id: 3, nombre: "Lechuga" } }); //con dispatch llamo al reducer, envío un objeto con type para el case, y mi payload, en este caso un objeto de producto
    dispatch({ type: "agregado" });
  };
  const eliminarProducto = () => {
    dispatch({ type: "elimina", payload: 3 }); //cada dispatch será diferente casi siempre
    dispatch({ type: "eliminado" }); //use reducer hace lo mismo que useState, pero es preferible cuando los estados tienen una lógica más compleja por ej múltiples subvalores. También sirve cuando se necesita trabajar con el estado anterior.
  };
  return (
    <div>
      count:{count}
      <button onClick={() => setcount(0)}>Reset</button>
      <button onClick={() => setcount((prevcount) => prevcount + 1)}>
        +
      </button>{" "}
      {/* también puedo usar el estado anterior dentro de la función para setear el estado */}
      <button onClick={() => setcount((prevcount) => prevcount - 1)}>-</button>
      Carro de compra:
      {state.carro.map((element) => {
        return <span key={element.id}>{element.nombre}, </span>;
      })}
      <button onClick={() => agregarProducto()}>+</button>
      <button onClick={() => eliminarProducto()}>-</button>
      {state.mensaje}
    </div>
  );
};

export default ComponenteHooks;
