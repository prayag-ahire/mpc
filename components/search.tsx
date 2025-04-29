import { useSearch } from "@/hooks/useSearch";

export const Search = ()=>{
    const {setValue} = useSearch();

    return(
        <div className=" border-2 rounded-2xl p-2">
            <input className="lg:text-2xl md:text-xl text-lg " placeholder="Search" onChange={(x)=>setValue(x.target.value)} />
        </div>
    )
}