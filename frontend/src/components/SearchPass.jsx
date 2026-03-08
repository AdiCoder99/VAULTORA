import React from 'react'

const SearchPass = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    
  }
  return (
    <div className='flex justify-center items-center mt-10 mx-auto text-white'>
      <form onSubmit={handleSubmit} action="" className=' flex justify-center items-center w-full gap-2 text-black'>
        <input 
        type="text" 
        placeholder='Search passwords...'
        className='border-gray-600 border-2 rounded-md p-2 w-1/2 text-gray-700 bg-white'
        />
        <button type= "submit" className='border-2 border-gray-400 py-2 px-2 rounded-md bg-green-600 text-white'>Search</button>
      </form>
    </div>
  )
}

export default SearchPass
