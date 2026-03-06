import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios"
import toast from "react-hot-toast";

const AppContext = createContext();

export const AppContextProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [passwords, setPasswords] = useState([])
    const [token, setToken] = useState(localStorage.getItem('token') || null)

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

    const getPasswords = async () => {
        try {
            const { data } = await axios.get(process.env.URI + "/api/password", {
                headers : {
                    token : `Bearer ${token}`
                }
            }
        )
        if(data.success){
            setPasswords(data.passwords)
        }
        else{
            toast.error("Failed to fetch passwords")
        }
        }
        catch(error){
            console.log(error)
        }
    }

    
    
    const value = {
        setToken
    };



    return (
        
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}



    

export const useAppContext = () => useContext(AppContext);