import React from 'react'
import { useState } from 'react'
import { assets } from '../assets/assets.js'

const Manager = () => {
    const [passwords, setPasswords] = useState([{
        id: 1,
        site: "Github",
        username: "adi123",
        password: "mypassword123",
    },
])


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
                    {passwords.map((items) => (
                        <tr key={items.id} className='text-center'>
                            <td className='border border-gray-400 px-4 py-2'>{items.id}</td>
                            <td className="border border-gray-400 px-4 py-2">{items.site}</td>
                            <td className="border border-gray-400 px-4 py-2">{items.username}</td>
                            <td className="border border-gray-400 px-4 py-2">{items.password}</td>
                            <td className="border border-gray-400 px-4 py-2 w-50  justify-between">
                                <div className='flex justify-between'>
                                <span><img src={assets.delete_icon} alt="" className="w-5 h-5" /></span>
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
