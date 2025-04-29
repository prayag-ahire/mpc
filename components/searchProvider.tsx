"use client"
import { ReactNode, useState } from "react"
import { myContext } from "@/hooks/useSearch";


export const SearchProvider = ({children}:{children:ReactNode})=>{
    const [value , setValue] = useState("");

    return(
        <myContext.Provider value={{value,setValue}}>
            {children}
        </myContext.Provider>
    )
}