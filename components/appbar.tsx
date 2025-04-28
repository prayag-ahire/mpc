
import { Button } from "./button"
import { Search } from "./search"
import { UserIcon } from "./userIcon"

export const AppBar = ()=>{
    return(<div className="px-10 h-20 w-full  border-b-2 flex items-center justify-between">
        <div className="font-bold font-serif text-6xl pl-2 pt-2">BuyNow</div>
        <div className="flex space-x-5 items-center">
            <div><Search/></div>
            <div><Button>login</Button></div>
            <div><UserIcon/></div>
        </div>
    </div>)
}