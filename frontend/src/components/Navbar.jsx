import React from 'react'
import { useAppContext } from '../Context/AppContext'

const Navbar = () => {
  const { user, setToken, setUser } = useAppContext();

  const handleLogout = () => {
    setToken('')
    setUser(null)
  }
  return (
    <nav className='bg-green-600 flex justify-between items-center p-4 text-white'>
        <div className='logo font-bold'>Vaultora</div>
        <div> 
          <span className='mr-6 cursor-pointer'>Welcome, {user.name}</span>
          <button onClick={handleLogout} className='bg-red-600 border rounded-md py-1 px-2 cursor-pointer'>Logout</button>

        </div>
      
    </nav>
  )
}

export default Navbar
