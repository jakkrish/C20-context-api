import './App.css'

//Simple Context V1
// import { useContext } from 'react'
// import simpleContext from './SimpleContext'

//Simple Context V2
import { useSimpleContext } from "./SimpleContextV2"; // Use the custom hook

function App() {
  //Simple Context V1
  // const valueToPrint = useContext(simpleContext)
  
  //Simple Context V2
  const valueToPrint = useSimpleContext();

  return (
    <>
      Value from context: {valueToPrint}
    </>
  )
}

export default App
