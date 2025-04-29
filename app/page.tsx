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
  const [currentPage , setCurrentPage] = useState(1);
  const productsPerPage = 5;
  
  const displayedProducts = value
  ? product.filter((x) =>
      x.title.toLowerCase().includes(value.toLowerCase())
    )
  : product;

  const indexOfLast = currentPage * productsPerPage;
  const indexOfFirst = indexOfLast - productsPerPage;
  const currentProducts = displayedProducts.slice(indexOfFirst, indexOfLast);

  const totalPages = Math.ceil(displayedProducts.length / productsPerPage);
  const paginate = (pageNumber:number) => setCurrentPage(pageNumber);

  function getErrorMessage(error: unknown) {
    if (error instanceof Error) return error.message
    return String(error)
  }

  const fetchData = async()=>{
    try{
      const res = await axios.get("https://fakestoreapi.com/products");
      console.log(res.data);
      setProduct(res.data);
    }catch(error){
      return (
        <div className="text-red-600 font-bold">
          Error fetching products: {getErrorMessage(error)}
        </div>
      );
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



  if(loading){
    return(<div className="flex flex-col h-screen text-4xl ">
      <Skeleton/>
      <Skeleton/>
      <Skeleton/>
      <Skeleton/>
    </div>)
  }
  return (<div className="w-screen">
    <div><AppBar/></div>
    <div className="flex p-2">
    <div><Button onclick={()=> setOpen(!open)}>Filter</Button></div>
    {/* {value} */}
    {open && 
      <div className="absolute ml-22  grid bg-white text-black font-bold">
        <div className="border p-2" onClick={()=>{pricehandler("asc")}}><button>low price</button></div>
        <div className="border p-2" onClick={()=>{pricehandler("desc")}}><button>high price</button></div>
      </div>}
    </div>
    <div className="grid  justify-center">
    {currentProducts.map((x) => (
  <div key={x.id}>
    <Link href={`products/${x.id}`}>
      <Products value={x} />
    </Link>
  </div>
))}</div>

  <div className="flex gap-2 mt-4 justify-center">
  {Array.from({ length: totalPages }, (_, i) => (
    <button
      key={i}
      onClick={() => paginate(i + 1)}
      className={`px-4 py-2 border rounded ${ currentPage === i + 1 ? "bg-blue-500 text-white" : ""}`}>
      {i + 1}
    </button>
  ))}
</div>
  </div>);
}