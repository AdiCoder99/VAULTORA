import React from 'react'
import { useState } from 'react'
import { assets } from '../assets/assets.js'
import { useAppContext } from '../Context/AppContext.jsx'

const Manager = () => {
    const { passwords, setPassdelete } = useAppContext();

    const handleDelete = (id) =>{
        // e.preventDefault();
        setPassdelete(id)

    }

    return (
        <div className='flex items-center justify-center mt-10'>
            <table className=' border border-gray-500 w-300'>
                <thead className='rounded-md'>
                    <tr className='bg-green-500'>
                        <th className='border border-gray-400 px-4 py-2 w-2'>S.No.</th>
                        <th className="border border-gray-400 px-4 py-2">Website</th>
                        <th className="border border-gray-400 px-4 py-2">Username</th>
                        <th className="border border-gray-400 px-4 py-2">Password</th>
                        <th className="border border-gray-400 px-4 py-2">Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {passwords?.map((items) => (
                        <tr key={items._id} className='text-center'>
                            <td className='border border-gray-400 px-4 py-2'>{items._id}</td>
                            <td className="border border-gray-400 px-4 py-2">{items.website}</td>
                            <td className="border border-gray-400 px-4 py-2">{items.username}</td>
                            <td className="border border-gray-400 px-4 py-2">{items.password}</td>
                            <td className="border border-gray-400 px-4 py-2 w-50  justify-between">
                                <div className='flex justify-between'>
                                <span><img onClick={() => handleDelete(items._id)} src={assets.delete_icon} alt="" className="w-5 h-5 cursor-pointer" /></span>
                                <span><img src={assets.edit_icon} alt="" className="w-5 h-5" /></span>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Manager
