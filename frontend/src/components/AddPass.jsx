import React, { useState } from 'react'
import { assets } from '../assets/assets';
import { useAppContext } from '../Context/AppContext';
import axios from 'axios';
import toast from 'react-hot-toast';

const AddPass = () => {
    const { token } = useAppContext();
    const [showForm, setShowForm] = useState(false);
    // const {  password, setPassword, user } = useAppContext();
    const [website, setWebsite] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        const url = import.meta.env.VITE_API_URL + '/api/password/add'
        console.log("Sending Data", website, username, password)

        try{
            const {data} = await axios.post(url, 
                {website, username, password},
                {headers : {
                    Authorization: `Bearer ${token}`
                }
                }
            )
            if (data.success){
                toast.success(data.message)
            }
            else{
                toast.error(data.message)
            }
        }
        catch(error){
            toast.error(error.message)
        }
    }

    



    return (
        <>
            <div className='flex justify-center items-center mt-8'>
                <button onClick={() => setShowForm(true)} className=' bg-green-600 pt-2 items-center text-center w-16 rounded-md py-1.5 text-white hover:cursor-pointer'>Add</button>
            </div>

            {showForm && (
                <div className='fixed inset-0 flex items-center justify-center backdrop-blur-sm bg-black/30 z-50'>

                    <div className='bg-green-50 h-80 pb-2 w-xl rounded-xl shadow-2xl'>
                        <div className='bg-green-500 h-12 rounded-t-xl flex justify-between items-center px-4'>
                            <span>Add a New Password</span>
                            <span><img onClick={() => setShowForm(false)} src= {assets.close_icon} width={12} alt="" className='hover:cursor-pointer'/></span>
                        </div>


                        <form onSubmit={(e) => {handleSubmit(e) , setShowForm(false)}}  action="" className='grid grid-cols-2 px-4 gap-6 mx-5 place-items-center mt-5'>
                            <div className='flex flex-col'>
                            <label htmlFor="website">Website</label>
                            <input
                            onChange={(e) => setWebsite(e.target.value)}
                                type="text"
                                id='website'
                                placeholder='Website'
                                className='px-2 py-1 w-50 bg-white rounded-md border border-gray-500'
                            />
                            </div>

                            <div className='flex flex-col'>
                            <label htmlFor="username">Username</label>
                            <input
                            onChange={(e) => setUsername(e.target.value)}
                                type="text"
                                name=""
                                id="username"
                                placeholder='Username'
                                className='px-2 py-1 w-50 bg-white rounded-md border border-gray-500'
                            />
                            </div>

                            <div className='flex flex-col col-span-2 items-center '>
                            <label htmlFor="password">Password</label>
                            <input
                                onChange={(e) => setPassword(e.target.value)}
                                type="text"
                                name="password"
                                id="password"
                                placeholder='Password'
                                className='px-2 py-1 w-50 bg-white rounded-md border border-gray-500'
                            />
                            </div>
                            <div className='flex items-center justify-center col-span-2'>
                            <button className='bg-green-600 px-2 py-1 rounded-md mt-5 text-white hover:cursor-pointer'
                            type='submit'>
                                Submit
                            </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    )
}

export default AddPass
