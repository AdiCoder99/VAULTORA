import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Manager from './components/Manager'
import SearchPass from './components/SearchPass'
import AddPass from './components/AddPass'
import Login from '../Pages/Login'

function App() {
  // const [count, setCount] = useState(0)
  const [user, setUser] = useState(null)

  return (
      <>
      {
        user ? (
          <div>
          <Navbar />
          <SearchPass />
          <AddPass />
          <Manager />
          </div>
        )
        :
        (
          <Login/>
        )
      }
      </>
    
  )
}


export default App



