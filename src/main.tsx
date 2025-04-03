import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
//Simple Context V1
// import SimpleContext from './SimpleContext.tsx'

//Simple Context V2
import { SimpleProvider } from "./SimpleContextV2.tsx"; 


createRoot(document.getElementById('root')!).render(
  //Simple Context V1
  // {/* <StrictMode>
  // <SimpleProvider.Provider value={5}>
  // <App />
  // </SimpleProvider.Provider>
  // </StrictMode>, */}

  //Simple Context V2
  <StrictMode>
    <SimpleProvider>
    <App />
    </SimpleProvider>
  </StrictMode>

)
