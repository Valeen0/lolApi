import { useState } from 'react'
import { Buscador } from './components/Buscador'
import UserPage from './components/UserPage';

function App() {

  const [userData, setUserData] = useState(null);

  return (
    <div className='App'>
      
      <UserPage />

    </div>
  )
}

export default App
