"use client";
import Image from "next/image";
import { ProductType } from "@/types/ProductType";
import { motion } from "framer-motion";

interface ProductCardProps {
  product: ProductType;
}

function ProductCard({ product }: ProductCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.8 }} 
      animate={{ opacity: 1, scale: 1 }} 
      transition={{ duration: 0.5 }}
      className="mt-5 w-[300px] relative border border-gray-500 shadow-md rounded-xl p-4"
    >
      <Image
        src={product.small_image}
        width={250}
        height={200}
        alt="product image"
        className="object-cover rounded-lg"
      />

      <motion.p 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="absolute top-3 left-0 bg-black text-white pl-2 w-24"
      >
        {product.discount_percentage}% OFF
      </motion.p>
      
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="absolute top-0 right-0"
      >
        <Image
          src="/images/heart.png"
          width={50}
          height={50}
          alt="icon"
        />
      </motion.div>

      <p className="text-[#6B6565] text-xl font-semibold">{product.brand}</p>
      <p className="text-lg">{product.name}</p>
      <div className="flex items-center space-x-2">
        <span className="text-lg font-bold text-red-500">${product.price}</span>
        <span className="text-gray-500 line-through">${product.original_price}</span>
      </div>
      
      <motion.button 
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="bg-[#FFD470] w-full py-2 rounded-lg mt-2 flex items-center justify-center space-x-2"
      >
        <Image src="/images/plus.png" width={15} height={15} alt="plus icon" />
        <span>Add to Cart</span>
      </motion.button>
    </motion.div>
  );
}

export default ProductCard;
