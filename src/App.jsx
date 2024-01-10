import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Parent from './parent'
function App() {
 const data ="mongo"

  return (
    <div>
    
      <Parent data={data}/>
     
    </div>
  )
    
      
}
  


export default App
