import React,{useContext, useEffect} from 'react'
import Componente4 from './Componente4'

import {PruebaContext} from '../context/Context'

const Componente2 = ({holaMundo}) => {
    const {testContext,settestContext} = useContext(PruebaContext)
    
    useEffect(() => {
       holaMundo()
    }, [holaMundo])

    return (
        <div>
            {testContext}
            <button onClick={()=>settestContext("cambió valor context1 desde componente2")}>Cambiar valor context1</button>

            <Componente4/>
           
        </div>
    )
}

export default Componente2
