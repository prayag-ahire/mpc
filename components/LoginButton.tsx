import React from "react"

export const LoginButton = ({children   }:{children:React.ReactNode})=>{
    return(<div className="bg-green-500 w-20 rounded h-8 flex justify-center font-bold items-center text-2xl">
        <button>{children}</button>
    </div>)
}