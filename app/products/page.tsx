"use client"
import Filter from "@/components/Filter"
import ProductCard from "@/components/ProductCard"
function page() {
  return (
    <div className="px-10 py-10">
        <p className="text-3xl font-semibold">Mens Trainers</p>
        <Filter />
        <ProductCard/>
    </div>
  )
}

export default page