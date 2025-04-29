import Image from "next/image"
import { Product } from "../types/productType"

export const Products = ({value,onclick}:{value:Product,onclick?:any})=>{
    const x = 0;

    return <div key={value.id} className="w-10/12">
    <div className="grid grid-cols-3 border-2 max-w-full py-5" onClick={onclick}>
        <div className="col-span-1" ><Image width={300} height={100} alt={`${value?.title.toString()}`} src={`${value?.image}`}></Image></div>
        <div className="col-span-2 ">
            <div className="text-2xl font-bold pb-10">{value.title}</div>
            <div className="flex space-x-4">
                <div><p className="text-2xl font-bold ">${value.price}</p></div>
                <div className=" flex">{`Catagory : ${value.category}`}</div>
            </div>
        </div>
    </div>
  </div>
}