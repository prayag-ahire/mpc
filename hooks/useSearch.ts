import { createContext, useContext } from "react";

interface SearchContext {
    value:string
    setValue: (value:string)=> void
}

export const myContext = createContext<SearchContext | null>(null); 

export const useSearch = ()=>{
    
    const context = useContext(myContext);
    
    if(!context){
        throw new Error("useSearch use with Searchprovider");
    }

    return context;

}