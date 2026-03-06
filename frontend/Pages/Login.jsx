import React from 'react'
import { useState, useEffect } from 'react'
import { useAppContext } from '../src/Context/AppContext'
import axios from 'axios'
import toast from 'react-hot-toast'

const Login = () => {

    const [login, setLogin] = useState(true)
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { setToken, setUser, user } = useAppContext();

    useEffect(() => {
        if(user){
            window.location.href = '/'
        }
    }, [user])

    const signUpbtn = async (e) => {
        e.preventDefault();
        setLogin(!login)
    }
    
    const api = import.meta.env.VITE_API_URL;

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Submitting form", email, password);

        const url = login ? api+`/api/user/login` : api+'/api/user/register'

        try{
            const { data } = await axios.post(url, login ? {email, password} : {name, email, password});
            if(data.success){
                setToken(data.token)
                setUser(data.user)
                setName("");
                setEmail("");
                setPassword("");
                toast.success(data.message || "Success!");
            }
            else{
                toast.error(data.message)
            }
        }
        catch(error){
            toast.error(error.response?.data?.message || error.message)
        }
    }
    
  
  return (
    <>
    {login ? (
        <div className='flex justify-center items-center mt-50'>
        <form onSubmit={(e) => handleSubmit(e)} className="bg-white text-gray-500 max-w-[350px] mx-4 md:p-6 p-4 text-left text-sm rounded-xl shadow-[0px_0px_10px_0px] shadow-black/10">
            <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">Login Now</h2>
            <input id="email" onChange={(e) => setEmail(e.target.value)} className="w-full border my-3 border-gray-500/30 outline-none rounded-full py-2.5 px-4" type="email" placeholder="Enter your email" required />

            <input id="password" onChange={(e) => setPassword(e.target.value)} className="w-full border mt-1 border-gray-500/30 outline-none rounded-full py-2.5 px-4" type="password" placeholder="Enter your password" required />
            {/* <div className="text-right py-4">
                <a className="text-blue-600 underline" href="#">Forgot Password</a>
            </div> */}
            <button type="submit" className="mt-5 w-full mb-3 bg-green-500 hover:bg-green-600/90 active:scale-95 transition py-2.5 rounded-full text-white">Log in</button>
            <p className="text-center mt-4">Don't have an account? 
              <button type="button" onClick={(e) => signUpbtn(e)} className="text-blue-500 underline bg-none border-none cursor-pointer">Signup Now</button>
            </p>
        </form>
        </div>
    )
    :
    (
        <div className='flex justify-center items-center mt-50'>
        <form onSubmit={handleSubmit} className="bg-white text-gray-500 max-w-[350px] mx-4 md:p-6 p-4 text-left text-sm rounded-xl shadow-[0px_0px_10px_0px] shadow-black/10">
            <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">Register Now</h2>
            <input id="name" onChange={(e) => setName(e.target.value)} className="w-full border mb-2 my-3 border-gray-500/30 outline-none rounded-full py-2.5 px-4" type="text" placeholder="Enter your Name" required />

            <input id="email" onChange={(e) => setEmail(e.target.value)} className="w-full border mt-2 my-3 border-gray-500/30 outline-none rounded-full py-2.5 px-4" type="email" placeholder="Enter your email" required />

            <input id="password" onChange={(e) => setPassword(e.target.value)} className="w-full border mt-1 border-gray-500/30 outline-none rounded-full py-2.5 px-4" type="password" placeholder="Enter your password" required />
            {/* <div className="text-right py-4">
                <a className="text-blue-600 underline" href="#">Forgot Password</a>
            </div> */}
            <button type="submit" className="mt-5 w-full mb-3 bg-green-500 hover:bg-green-600/90 active:scale-95 transition py-2.5 rounded-full text-white">Sign Up</button>
            <p className="text-center mt-4">Don't have an account?
              <div onClick={(e) => signUpbtn(e)} href="#" className="text-blue-500 underline">Login Now</div>
            </p>
        </form>
        </div>
    )}
    
        </>
    );
}

export default Login
