import React from 'react'
import { useState } from 'react'
import { useAppContext } from '../src/Context/AppContext'
import axios from 'axios'
import toast from 'react-hot-toast'

const Login = () => {

    const [login, setLogin] = useState(true)
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { setToken} = useAppContext();

    const signUpbtn = () => {
        setLogin(!login)
    }
    
    const api = import.meta.env.VITE_API_URL;

    const handleSubmit = async (e) => {
        e.preventDefault();

        const url = login ? a+ `/api/user/login` : a+ '/api/user/register'

        try{
            const { data } = await axios.post(url, {name, email, password});
            if(data.success){
                setToken(data.token)
                localStorage.setItem('token', data.token)
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
    {login ? (
        <div className='flex justify-center items-center mt-50'>
        <form className="bg-white text-gray-500 max-w-[350px] mx-4 md:p-6 p-4 text-left text-sm rounded-xl shadow-[0px_0px_10px_0px] shadow-black/10">
            <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">Login Now</h2>
            <input id="email" onChange={(e) => {setEmail(e)}} className="w-full border my-3 border-gray-500/30 outline-none rounded-full py-2.5 px-4" type="email" placeholder="Enter your email" required />

            <input id="password" onChange={(e) => {setPassword(e)}} className="w-full border mt-1 border-gray-500/30 outline-none rounded-full py-2.5 px-4" type="password" placeholder="Enter your password" required />
            {/* <div className="text-right py-4">
                <a className="text-blue-600 underline" href="#">Forgot Password</a>
            </div> */}
            <button type="submit" className="mt-5 w-full mb-3 bg-green-500 hover:bg-green-600/90 active:scale-95 transition py-2.5 rounded-full text-white">Log in</button>
            <p className="text-center mt-4">Don't have an account? 
              <a onClick={(e) => signUpbtn(e) } href="#" className="text-blue-500 underline">Signup Now</a>
            </p>
        </form>
        </div>
    )
    :
    (
        <div className='flex justify-center items-center mt-50'>
        <form className="bg-white text-gray-500 max-w-[350px] mx-4 md:p-6 p-4 text-left text-sm rounded-xl shadow-[0px_0px_10px_0px] shadow-black/10">
            <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">Register Now</h2>
            <input id="name" onChange={(e) => {setName(e)}} className="w-full border mb-2 my-3 border-gray-500/30 outline-none rounded-full py-2.5 px-4" type="name" placeholder="Enter your Name" required />

            <input id="email" onChange={(e) => {setEmail(e)}} className="w-full border mt-2 my-3 border-gray-500/30 outline-none rounded-full py-2.5 px-4" type="email" placeholder="Enter your email" required />

            <input id="password" onChange={(e) => {setPassword(e)}} className="w-full border mt-1 border-gray-500/30 outline-none rounded-full py-2.5 px-4" type="password" placeholder="Enter your password" required />
            {/* <div className="text-right py-4">
                <a className="text-blue-600 underline" href="#">Forgot Password</a>
            </div> */}
            <button type="submit" className="mt-5 w-full mb-3 bg-green-500 hover:bg-green-600/90 active:scale-95 transition py-2.5 rounded-full text-white">Sign Up</button>
            <p className="text-center mt-4">Don't have an account?
              <a onClick={(e) => signUpbtn(e)} href="#" className="text-blue-500 underline">Login Now</a>
            </p>
        </form>
        </div>
    )}
    
        </>
    );
}

export default Login
