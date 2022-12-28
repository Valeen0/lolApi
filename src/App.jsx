import { useState } from 'react'
import './App.css'
import { Buscador } from './components/Buscador'

function App() {

  const [userData, setUserData] = useState(null);

  return (
    <div className='App'>
      
      <Buscador setState={setUserData}/>

    </div>
  )
}

export default App
