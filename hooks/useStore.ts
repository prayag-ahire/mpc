import { Product } from "@/types/productType";
import { create } from "zustand";

type State = {
    value: Product,
    updateValues:(value:Product) => void
}

export const useProductStore = create<State>((set)=>({
    value: {
        id:0,
        title:"",
        description:"",
        category:"",
        image:"",
        price:0,
        rating:{
            count:0,
            rate:0
        }
    },

    updateValues: (value:Product)=>set(()=>({
        value:value
    }))
}))