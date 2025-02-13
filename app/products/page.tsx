"use client"
import Filter from "@/components/Filter"
import ProductCard from "@/components/ProductCard"
import { ProductType } from "@/types/ProductType"
import { useRouter } from "next/navigation"
import productData from "@/data/products.json"
import { useSearch } from "@/context/SearchContext"

function Page() {
  const { searchQuery } = useSearch()
  const router = useRouter()

  const handleCardClick = (id: number) => {
    router.push(`/product/${id}`)
  }

  const filteredProducts = searchQuery
    ? productData.filter((product: ProductType) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : productData

  return (
    <div className="px-5 sm:px-10 py-10">
      <p className="text-3xl font-semibold">Mens Trainers</p>
      <Filter />
      <div className="grid gap-3 grid-cols-[repeat(auto-fit,minmax(300px,1fr))] 2xl:gap-10">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product: ProductType) => (
            <div
              key={product.id}
              onClick={() => handleCardClick(product.id)}
              className="cursor-pointer mx-auto"
            >
              <ProductCard product={product} />
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 w-full col-span-full">
            No products found.
          </p>
        )}
      </div>
    </div>
  )
}

export default Page