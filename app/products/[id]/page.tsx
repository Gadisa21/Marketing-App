"use client";
import React from 'react'
import { useParams } from "next/navigation";
import ProductDetail from "@/components/ProductDetail";
function  ProductPage() {
    const { id } = useParams();
    console.log("id:",id);
  return (
     <ProductDetail id={id}/>
  )
}

export default  ProductPage