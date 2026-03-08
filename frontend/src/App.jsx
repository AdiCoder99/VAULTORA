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
    <div className='relative h-screen w-screen bg-white'>
      <div className="absolute h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      <div className='relative z-10'>
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
    </div>
    
  )
}


export default App



