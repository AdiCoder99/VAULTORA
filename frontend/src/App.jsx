import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Manager from './components/Manager'
import SearchPass from './components/SearchPass'
import AddPass from './components/AddPass'
import Login from '../Pages/Login'
import { useAppContext } from './Context/AppContext'

function App() {
  // const [count, setCount] = useState(0)
  const { user, setUser } = useAppContext();
  
  return (
      <div>
      {
        user ? (
          <>
          <Navbar />
          <SearchPass />
          <AddPass />
          <Manager />
          </>
        )
        :
        (
          <Login/>
        )
      }
      </div>
    
  )
}


export default App



