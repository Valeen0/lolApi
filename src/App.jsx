import { useState } from 'react'
import { Buscador } from './components/Buscador'

function App() {

  return (

    <div className='App'>
      
      <Buscador setState={setLoading} />

    </div>
  )
}

export default App
