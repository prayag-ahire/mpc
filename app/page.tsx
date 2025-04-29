"use client"
import { AppBar } from "@/components/appbar";
import { Products } from "@/components/products";
import { Product } from "@/types/productType";
import axios from "axios";
import { useEffect, useState } from "react";
import { Skeleton } from "@/components/skeleton";
import Link from "next/link";
import { Button } from "@/components/button";
import { useSearch } from "@/hooks/useSearch";



export default function Home() {
    
  const [product,setProduct] = useState<Product[]>([]);
  const [loading,setLoading] = useState(true);
  const [open,setOpen] = useState(false);
  const {value} = useSearch();
  

  const fetchData = async()=>{
    try{
      const res = await axios.get("https://fakestoreapi.com/products");
      console.log(res.data);
      setProduct(res.data);
    }catch(error){
      console.error("error :",error);
    }finally{
      setLoading(false);
    }
    
  }

  const pricehandler = (order:"asc" | "desc")=>{
    setOpen(!open)
    const sorte =[...product].sort((a,b)=>{
      return order === "asc" ? a.price - b.price : b.price - a.price
    })

    setProduct(sorte);
  }

  useEffect(()=>{
    fetchData();
  },[])
  const ans = product.filter((x)=>{return x.title.toLowerCase().includes(value.toLowerCase())});
  if(loading){
    return(<div className="flex flex-col h-screen text-4xl ">
      <Skeleton/>
      <Skeleton/>
      <Skeleton/>
      <Skeleton/>
    </div>)
  }
  return (<div className="w-fit">
    <div><AppBar/></div>
    <div className="flex p-2">
    <div><Button onclick={()=> setOpen(!open)}>Filter</Button></div>
    {value}
    {open && 
      <div className="absolute ml-22  grid bg-white text-black font-bold">
        <div className="border p-2" onClick={()=>{pricehandler("asc")}}><button>low price</button></div>
        <div className="border p-2" onClick={()=>{pricehandler("desc")}}><button>high price</button></div>
      </div>}
    </div>
    {ans.length >0 ? ans.map((x)=>(
      <div key={x.id}>
      <Link href={`products/${x.id}`}> 
      <Products  value={x} />
      </Link>
    </div> 
    )) : 
    product?.map((x)=>(
       <div key={x.id}>
        <Link href={`products/${x.id}`}> 
        <Products  value={x} />
        </Link>
      </div> 
    ))}
  </div>);
}