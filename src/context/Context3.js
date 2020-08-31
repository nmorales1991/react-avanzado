import React,{useState} from 'react'

export const PruebaContext3 = React.createContext();

const Context3 = props => {
    const [testContext, settestContext] = useState('hola desde context3')
    return (
        <PruebaContext3.Provider value={{testContext, settestContext}}>
            {props.children}
        </PruebaContext3.Provider>
    )
}

export default Context3
