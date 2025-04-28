"use client"
import { AppBar } from "@/components/appbar";
import { Products } from "@/components/products";
import { Product } from "@/types/producttype";
import { useProductStore } from "@/hooks/useStore";
import axios from "axios";
import { useEffect, useState } from "react";
import { Skeleton } from "@/components/skeleton";
import Link from "next/link";



export default function Home() {
  const [product,setProduct] = useState<Product[]>([]);
  const [catagory,setCatagory] = useState<any>([]);
    const [loading,setLoading] = useState(true);

  const fetchData = async()=>{
    try{
      const res = await axios.get("https://fakestoreapi.com/products");
      setProduct(res.data);
    }catch(error){
      console.error("error :",error);
    }finally{
      setLoading(false);
    }
    
  }


  useEffect(()=>{
    fetchData();
  },[])

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
    {product?.map((x)=>(
       <div key={x.id}>
        <Link href={`products/${x.id}`}> 
        <Products  value={x} />
        </Link>
      </div> 
    ))}
  </div>);
}
