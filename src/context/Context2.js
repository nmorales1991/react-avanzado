import React,{useState} from 'react'

export const PruebaContext2 = React.createContext();

const Context2 = props => {
    const [testContext, settestContext] = useState('hola desde context2')
    return (
        <PruebaContext2.Provider value={{testContext, settestContext}}>
            {props.children}
        </PruebaContext2.Provider>
    )
}

export default Context2
