"use client"

import { Button } from "@/components/button";
import { Skeleton } from "@/components/skeleton";
import  type { Product } from "@/types/productType";
import axios from "axios";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Product(){

const params = useParams<{id:string}>();
const router = useRouter();
const { id } = params;
const [value,setValue] = useState<Product | null>(null);
const [loading,setLoading] = useState(true);


const fetchData = async()=>{
    try{
        const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
        setValue(res.data);
    }catch(error){
        
      }finally{
        setLoading(false);
      } 
}
useEffect(()=>{
    if(id)
    fetchData();
},[id])

const handler = ()=>{
    
    router.push("/");
}
if(loading){
    return(<div className="flex flex-col h-screen text-4xl ">
      <Skeleton/>
    </div>)
  }
return(<div>
    <div><Button onclick={handler}>Back</Button></div>
        <div className="grid grid-cols-3 max-w-full py-5" >
            <div className="col-span-1" ><Image alt={`${value?.title}`} width={300} height={100} src={`${value?.image}`}></Image></div>
            <div className="col-span-2 ">
                <div className="text-2xl font-bold pb-10">{value?.title}</div>
                <div className="w-full pb-10">{value?.description}</div>
                <div className=""><p>{value?.rating.rate} ratings</p></div>
                <div><p className="text-2xl font-bold ">${value?.price}</p></div>
                <div><p>remaning Stock {value?.rating.count}</p></div>
            </div>
        </div>
    </div>)
}