import React,{useState} from 'react'

export const PruebaContext = React.createContext();//exporto el context para usarlo con useContext

const Context = props => {
    const [testContext, settestContext] = useState('hola desde context1')
    return (
        <PruebaContext.Provider value={{testContext, settestContext}}> {/* envuelvo los children con el context y le envío valores */}
            {props.children}
        </PruebaContext.Provider>
    )
}

export default Context
