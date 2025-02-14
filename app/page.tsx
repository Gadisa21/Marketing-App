"use client"
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

function Page() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.8 }}
      className="mx-10 mt-10 text-center"
    >
      <motion.p 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="font-bold text-3xl"
      >
        Alpha All-Purpose Gen Z 
      </motion.p>
      
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative w-full max-w-[800px] mx-auto aspect-[16/9] md:w-auto md:h-auto"
      >
        <Image 
          src="/images/products/banner.png" 
          alt="banner"
          fill
          className="object-cover mt-20 sm:mt-10"
        />
      </motion.div>
      
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="my-20 sm:my-10 font-semibold text-lg"
      >
        Our products are designed for the modern generation. We have a wide range of products that cater to all your needs.
      </motion.p>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.9 }}
      >
        <Link href="/products" className="mx-auto p-4 w-fit text-lg font-semibold text-white block bg-black rounded-md">
          Explore More Products
        </Link>
      </motion.div>
    </motion.div>
  );
}

export default Page;
