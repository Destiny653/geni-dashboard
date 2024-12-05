'use client'
import { createContext, useState } from "react";



export const GlobalContext = createContext()


export function GlobalProvider({children}){

    const [actionPath, setActionPath] = useState('')
    const [updateValue, setUpdateValue] = useState({})
    const [pageName, setPageName] = useState('')

    return(
        <GlobalContext.Provider value={{actionPath, updateValue,pageName, setPageName, setUpdateValue, setActionPath}}>
            {children}
        </GlobalContext.Provider>
    )
}