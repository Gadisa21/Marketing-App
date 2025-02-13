"use client"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { HiMenu, HiX } from "react-icons/hi"
import {useSearch} from "@/context/SearchContext"



function NavBar() {
  const { searchQuery, setSearchQuery } = useSearch()
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className="sticky top-0 z-50 bg-white shadow-md">
      {/* Header Section */}
      <div className="flex justify-between items-center px-10 py-3">
        <div className="flex gap-20 w-[50%] items-center">
          <Link href="/">
            <Image src="/images/logo.png" width={100} height={45} alt="logo" />
          </Link>

          {/* Desktop Links */}
          <div className="hidden sm:flex space-x-8">
            <Link href="/">Home</Link>
            <Link href="/products">Products</Link>
            <Link href="/cart">Brand</Link>
          </div>
        </div>

        {/* Mobile Menu Icon - Move to the right */}
        <button
          onClick={toggleMenu}
          className="sm:hidden text-customBlue text-2xl absolute right-4"
        >
          {isMenuOpen ? <HiX /> : <HiMenu />}
        </button>

        {/* Search and Cart */}
        <div className="flex space-x-8 items-center">
          {/* Always visible search bar on large screens */}
          <div className="hidden sm:block relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full focus:ring-0 outline-none p-2 rounded-md pr-10"
              placeholder="Search for products"
            />
            <Image
              src="/images/searchIcon.png"
              width={30}
              height={30}
              alt="search icon"
              className="absolute right-3 top-1/2 transform -translate-y-1/2"
            />
          </div>
          <Image
            src="/images/cart.png"
            width={30}
            height={30}
            alt="cart"
            className="cursor-pointer"
          />
          <Image
            src="/images/user.png"
            width={30}
            height={30}
            alt="user"
            className="cursor-pointer"
          />
        </div>
      </div>

      {/* Mobile Menu Links - Only show search when hamburger is clicked */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } sm:hidden bg-white px-6 py-4 space-y-4 text-customBlue`}
      >
        {/* Show search only in mobile when hamburger is clicked */}
        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full focus:ring-0 outline-none p-2 rounded-md pr-10"
            placeholder="Search for products"
          />
          <Image
            src="/images/searchIcon.png"
            width={30}
            height={30}
            alt="search icon"
            className="absolute right-3 top-1/2 transform -translate-y-1/2"
          />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
