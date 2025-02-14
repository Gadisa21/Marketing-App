"use client";
import React from "react";
import { useParams } from "next/navigation";
import ProductDetail from "@/components/ProductDetail";

function ProductPage() {
  const { id } = useParams();

  // Convert id to a number safely
  const productId = id ? Number(id) : 0; 

  return <ProductDetail id={productId} />;
}

export default ProductPage;
