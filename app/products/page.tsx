"use client"
import Filter from "@/components/Filter"
import ProductCard from "@/components/ProductCard"
import { ProductType} from "@/types/ProductType"
import Link from "next/link"
import { useRouter } from "next/navigation"
import productData from "@/data/products.json"

function page() {
  const router=useRouter()

  const handleCardClick=(id:number)=>{
    router.push(`/product/${id}`)
  }
  return (
    <div className=" px-5 sm:px-10 py-10">
        <p className="text-3xl font-semibold">Mens Trainers</p>
        <Filter />
        <div className="grid gap-3 grid-cols-[repeat(auto-fit,minmax(300px,1fr))] 2xl:gap-10">
      {productData.map((product: ProductType) => (
        <div
          key={product.id}
          onClick={() => handleCardClick(product.id)}
          className="cursor-pointer mx-auto"
        >
          <ProductCard product={product} />
        </div>
      ))}
    </div>
    </div>
  )
}

export default page