"use client"
import React from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import products from "@/data/products.json"

interface ProductDetailProps {
  id: number
}

const ProductDetail: React.FC<ProductDetailProps> = ({ id }) => {
 

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full overflow-x-hidden min-h-screen pb-[2.3%] lg:pb-0 sm:h-screen bg-white pt-[7.6%] text-black sm:px-[10%] lg:px-[2%] px-[2%] xl:px-[4%] flex flex-col lg:flex-row justify-start items-start"
      >
        <motion.div
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-[47.5%] aspect-[1.36/1] flex justify-center items-center"
        >
          <div className="w-full aspect-[1.695/1] border-[3px] border-[#D9D9D9] relative flex justify-center items-center">
            <Image 
              src={products[id].large_image} 
              alt="Product Image" 
              width={500} 
              height={500} 
              className="object-contain" 
            />
            <div className="absolute top-0 -left-[3px] bg-black text-white text-[24px] font-semibold">
              {products[id].discount_percentage}% OFF
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col justify-start items-start px-2 lg:px-0 w-full lg:w-[44%] xl:w-[38.72%] lg:ml-[5.6%] self-start"
        >
          <div className="w-full flex flex-row justify-between items-start mt-16">
            <div className="flex flex-col gap-2">
              <span className="text-[#6B6565] font-semibold tracking-[1px] text-[18px]">
                {products[id].brand}
              </span>
              <span className="text-black font-bold tracking-[1px] text-[22px]">
                {products[id].name}
              </span>
            </div>
            <div className="">
              <Image src="/images/heart.png" alt="Heart Icon" width={30} height={30} />
            </div>
          </div>
          <div className="mt-[1.7%]">
            <p className="w-full lg:w-[72.2%] text-black xl:text-[16px] text-[14px] tracking-[1px]">
              {products[id].description}
            </p>
          </div>
          <div className="mt-[1.7%] flex gap-1 justify-start items-center text-lg">
            <span>
              <strong className="font-bold">{products[id].sold_amount}</strong>{" "}
              <span className="text-gray-600">+ sold</span>
            </span>
            <div className="w-2 h-2 ml-2 rounded-full bg-black"></div>
            <div className="ml-2 flex items-center">
              <span className="text-yellow-500 text-xl">⭐️</span>
              <span className="text-gray-600">
                <strong className="text-black">{products[id].rating}</strong> ({products[id].reviews} reviews)
              </span>
            </div>
          </div>
          <div className="mt-[1.7%] flex items-center gap-4">
            <span className="text-black text-[24px] font-bold tracking-[1px]">
              ${products[id].price}
            </span>
            <div className="relative flex justify-start items-center">
              <span className="text-red-600 font-bold tracking-[1px]">
                ${products[id].original_price}
              </span>
              <div className="w-full h-1 bg-red-400 bg-opacity-60 absolute"></div>
            </div>
          </div>
          <motion.button
            className="mt-[1.7%] w-full bg-[#FFD470] aspect-[11.57/1] tracking-[1px] rounded-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            + ADD TO CART
          </motion.button>
        </motion.div>
      </motion.div>
    </>
  )
}

export default ProductDetail
