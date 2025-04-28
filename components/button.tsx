import React from "react"

export const Button = ({children,onclick}:{children:React.ReactNode,onclick?:any})=>{
    return(<div className="bg-green-500 w-20 rounded h-8 flex justify-center font-bold items-center text-2xl">
        <button onClick={onclick}>{children}</button>
    </div>)
}