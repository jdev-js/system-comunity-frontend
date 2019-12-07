import { createContext, useEffect, useState } from 'react'

type User = {
    name: string
    id: string
}

type AuthValue = {
    auth: null | User
    changeAuth: (newValue: User) => void
}

export const authContex = createContext<AuthValue | null>(null)

export function AuthProvider({children}: { children: React.ReactNode }){
    const [auth,setAuth] = useState<User | null>(null)

    const changeAuth = (newValue: User) => {
        setAuth(newValue)
    }

    useEffect(() => {
        const userString = window.localStorage.getItem('auth')
        if(userString !== null){
            const userParser = JSON.parse(userString ?? '')
            if(userParser !== null){
                setAuth(userParser)
            }
        }
    },[])

    return(
        <authContex.Provider value={{auth,changeAuth}}>
            {children}
        </authContex.Provider>
    )
}