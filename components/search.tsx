import { myContext, useSearch } from "@/hooks/useSearch";
import { useState} from "react"


export const Search = ()=>{
    const {setValue} = useSearch();

    return(
        <div className="border-2 rounded-2xl p-2">
           
            <input className="text-2xl " placeholder="Search" onChange={(x)=>setValue(x.target.value)} />
        </div>
    )
}