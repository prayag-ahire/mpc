
import { Button } from "./button"
import { Search } from "./search"
import { UserIcon } from "./userIcon"

export const AppBar = ()=>{
    return(<div className="lg:pl-5 md:pl-4 sm:pl-2 h-20 w-full  border-b-2 flex items-center justify-between">
        <div className="lg:text-5xl md:text-4xl font-bold font-serif text-3xl  pt-2">BuyNow</div>
        <div className="flex space-x-5 items-center">
            <div className="hidden sm:block"><Search/></div>
            <div><Button>login</Button></div>
            <div><UserIcon/></div>
        </div>
    </div>)
}