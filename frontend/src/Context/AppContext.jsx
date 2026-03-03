import { createContext, useContext, useEffect, useState } from "react";


const AppContext = createContext();

export const AppContextProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [password, setPassword] = useState([])
    const [token, setToken] = useState(localStorage.getItem('token') || null)

    const fetchUser = async () => {
        try{
            const { data } = await fetch()
        }
    }


    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}