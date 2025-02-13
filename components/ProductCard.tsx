"use client";
import Image from "next/image";
function ProductCard() {
  return (
    <div className="mt-5 w-[300px] relative border border-gray-500  shadow-md rounded-xl p-4 ">
      <Image
        src="/images/products/image1.png"
        width={250}
        height={200}
        alt="product image"
        className="object-cover rounded-lg"
      />

      <p className=" absolute top-3 left-0 bg-black text-white pl-2 w-24">
        {" "}
        25% OFF
      </p>
      <Image
        src="/images/heart.png"
        width={50}
        height={50}
        alt="icon"
        className="absolute top-0 right-0"
      />

      <p className="text-[#6B6565] text-xl font-semibold ">Nike</p>
      <p className=" text-lg">Alpha All-Purpose Gen Z</p>
      <div className="flex items-center space-x-2">
        <span className="text-lg font-bold text-red-500">$29.99</span>
        <span className="text-gray-500 line-through">$39.99</span>
      </div>
      <button className="bg-[#FFD470] w-full py-2 rounded-lg mt-2 flex items-center justify-center space-x-2">
        <Image src="/images/plus.png" width={15} height={15} alt="plus icon" />
        <span>Add to Cart</span>
      </button>
    </div>
  );
}

export default ProductCard;
