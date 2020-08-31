import React,{ useContext } from 'react'
import { PruebaContext3 } from "../context/Context3";

const Intermedio6 = React.memo(() => {
    const { testContext, settestContext } = useContext(PruebaContext3);
    return (
        <div>
        {testContext}
        <button
          onClick={() =>
            settestContext("cambió valor context3 desde componente6")
          }
        >
          Cambiar valor context3
        </button>
      </div>
    )
})

export default Intermedio6
