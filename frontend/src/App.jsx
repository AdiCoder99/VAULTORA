import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Manager from './components/Manager'
import SearchPass from './components/SearchPass'
import AddPass from './components/AddPass'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]'>
    <Navbar/>
    <SearchPass />
    <AddPass/>
    <Manager/>
    </div>
  )
}

export default App



