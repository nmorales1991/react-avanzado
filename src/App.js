import React from 'react'
import Context from './context/Context' //importo el Provider
import Componente5 from './components/Componente5'

const App = () => {
  //console.log("render app")
  return (
    <Context> {/* englobo los componentes en los que necesito el context*/}
        <Componente5/>
    </Context>
  )
}

export default App
