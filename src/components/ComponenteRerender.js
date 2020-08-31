import React from 'react'

const ComponenteRerender = ({array}) => {
    console.log("re render component") //se hará console log solo si renderiza de nuevo según la dependencia de useMemo
    return (
        <div>
            <h1>Componente re render</h1>
            {
                array.map(el=>{
                    return <span key={el}>{el}</span>
                })
            }
        </div>
    )
}

export default ComponenteRerender
