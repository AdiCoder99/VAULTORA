import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-green-600 flex justify-between items-center p-4 text-white'>
        <div className='logo font-bold'>Vaultora</div>
        <ul >
            <li className='flex gap-4'>
                <a className='hover:scale-105' href="#">Home</a>
                <a className='hover:scale-105' href="#">About</a>
                <a className='hover:scale-105' href="#">Contact</a>
            </li>
        </ul>
      
    </nav>
  )
}

export default Navbar
