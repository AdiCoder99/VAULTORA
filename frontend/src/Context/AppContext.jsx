import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios"
import toast from "react-hot-toast";

const AppContext = createContext();

export const AppContextProvider = ({children}) => {
    const [user, setUser] = useState(null);
    // const [passwords, setPasswords] = useState([])
    const [token, setToken] = useState(localStorage.getItem('token') || null)

    const [passwords, setPasswords] = useState([])
    const [passdelete, setPassdelete] = useState("")




    const fetchUser = async () => {
        try{
            const { data } = await  axios.get(import.meta.env.VITE_API_URL + "/api/user/me", {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
                
            })
            if(data.success){
                setUser(data.user)
            }
            else{
                toast.error("Failed to fetch user data")
            }
        }
        catch(error){
            console.log(error)
                }
    }

    // Fetch Passwords
    const getPasswords = async () => {
        try {
            const { data } = await axios.get(import.meta.env.VITE_API_URL + "/api/password/all", {
                headers : {
                    Authorization : `Bearer ${token}`
                }
            }
        )
        if(data.success){
            setPasswords(data.data)
        }
        else{
            toast.error("Failed to fetch passwords")
        }
        }
        catch(error){
            console.log(error)
        }
    }

    // Delete Password
    const deletePassword = () => {
        try{
            const {data } = axios.delete(import.meta.env.VITE_API_URL+`/api/password/${passdelete}`,
                {headers :{
                    Authorization : `Bearer ${token}`
                }
            }
            )

            if(data.success){
                toast.success(data.message)
                setPasswords(prev => prev.filter(p => p.id !== passdelete))
            }
            else{
                toast.error(data.message)
            }
        }
        catch(error){
            toast.error(error.message)
        }
    }

    // Search Passwords
    const searchPasswords = async(query) => {
        try{
            const { data } = await axios.get(import.meta.env.VITE_API_URL + `/api/password/search?query=${query}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            if(data.success){
                setPasswords(data.data) 
            }
            else{
                toast.error("Failed to search passwords")
            }
        }
        catch(error){
            toast.error(error.message)
        }
    }

    useEffect(() => {
        if(token){
            localStorage.setItem('token', token)
        }
        else{
            localStorage.removeItem('token')
        }
    }, [token])


    useEffect(() => {
        if(token){
            fetchUser();
        }
    }, [token])

    useEffect(() => {
        if(token){
            getPasswords()
        }
    }, [token ])

    useEffect(() => {
        if(passdelete){
            deletePassword();
            getPasswords()
        }
    }, [passdelete])
    

    const value = {
        token,
        setToken,
        user,
        setUser,
        passwords,
        setPasswords,
        fetchUser,
        getPasswords,
        searchPasswords,
        setPassdelete
    };

    return (
        
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}



    

export const useAppContext = () => useContext(AppContext);