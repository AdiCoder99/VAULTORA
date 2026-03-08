import React, { useState, useEffect } from 'react'
import { useAppContext } from '../Context/AppContext';

const SearchPass = () => {
  const [ search, setSearch ] = useState('')
  const { searchPasswords, getPasswords } = useAppContext();

  useEffect(() => {
    if (search === '') {
      getPasswords();
    }
  }, [search]); 
  const handleSubmit = (e) => {
    e.preventDefault();
    // const query = search.
    // if(!query)
    console.log("submitted");
    console.log(search)
    searchPasswords(search);
  }
  return (
    <div className='flex justify-center items-center mt-10 mx-auto text-white'>
      <form onSubmit={handleSubmit} className=' flex justify-center items-center w-full gap-2 text-black'>
        <input 
        onChange={(e) => setSearch(e.target.value)}
        type="text" 
        placeholder='Search passwords...'
        className='border-gray-600 border-2 rounded-md p-2 w-1/2 text-gray-700 bg-white'
        />
        <button type= "submit"
        onClick={() => console.log("button clicked")}
        className='cursor-pointer border-2 border-gray-400 py-2 px-2 rounded-md bg-green-600 text-white'>Search</button>
      </form>
    </div>
  )
}

export default SearchPass
