"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
// import SearchComponent from "@/app/searchComponents";
import { Search } from 'lucide-react';
import { Repeat2 } from 'lucide-react';
import { Heart } from "lucide-react";
import { User } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';
import { motion } from "framer-motion";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showSubTypes, setShowSubTypes] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [showAccountInfo, setShowAccountInfo] = useState(false);

  const FADE_DOWN_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: -10 },
    show: { opacity: 1, y: 0, transition: { type: "spring" } },
  };

  const FADE_UP_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { type: "spring" } },
  };




  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };


  const searchProducts = [{ id: 1, name: "mango", price: "$23.12" }, { id: 2, name: "Apple", price: "$11.12" }, { id: 3, name: "Orange", price: "$50.12" }, { id: 4, name: "Banana", price: "$26.07" }, { id: 5, name: "Grapes", price: "$21.56" }, { id: 6, name: "Guava", price: "$12.53" }]

  const handleInputChange = (event: any) => {
    setSearchTerm(event.target.value);
  };

  // function searchProductOnChange(search:any)
  // {
  //  const searchedProducts = searchProducts?.includes(search);
  // }

  const searchedProducts = searchTerm
    ? searchProducts.filter((product: any) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    : [];

  return (
    <motion.div>
      <header className="bg-contrast-green-500 text-black bg-zinc-100">
        <div className="flex flex-row flex-grow lg:flex bg-[#458E7A] text-white">
          <Link
            href="/pages/contactUs"
            className="p-2 bg-contrast-green-700 flex-grow hover:text-white transition duration-300 hidden lg:block md:block text-center"
          >
            Get 15% Off Your First Full-Price Purchase When You Subscribe To Our
            Emails / Subscribe Now →
          </Link>
        </div>

        <nav className="flex flex-wrap lg:flex-row p-2 justify-between items-center bg-[#F2F2F2]">
          <div className="text-center m-3 font-bold">
            <Link href="/">
              <Image
                src="/ecofood.png"
                width={100}
                height={50}
                alt="logo"
                className="rounded-lg"
              />
            </Link>
          </div>
          <div className="flex flex-row items-center justify-center flex-grow lg:flex">

            <div className="flex flex-row justify-between items-center">
              <div className="text-center m-3  items-center cursor-pointer transition space-x-3 font-semibold duration-300 hidden lg:flex md:flex">
                <Repeat2 size={20} />
                <span>My Compare</span>
              </div>
              <span className="mx-3 text-[#CECECE]">|</span>

              <div className="text-center m-3  space-x-3 cursor-pointer items-center transition font-semibold duration-300 hidden lg:flex md:flex">
                <Heart size={20} />
                <span>My Favourites</span>
              </div>
            </div>


            <div className="text-center relative m-3 w-[40%] bg-white flex justify-between flex-row px-8 py-3 rounded-full transition duration-300  lg:flex md:flex">
              <input className="bg-transparent outline-none focus:outline-none" placeholder="Search..." type="search" name="" id="" value={searchTerm}
                onChange={handleInputChange} />
              <Search color="#458E7A" size={20} />
              <div className={`absolute ${searchedProducts.length > 0 ? 'block' : 'hidden'} cursor-pointer z-20 mt-12 left-2  w-[400px] shadow-md  h-[600px] bg-white max-h-[600px] overflow-y-auto`}>

                <div className="flex flex-col space-y-3">
                  {searchedProducts.map((product: any) => (<div className=" space-x-2 py-4 px-2 flex items-center text-black ">
                    <Image alt="/productImage" src={"/randomPhoto.jpg"} width={100} height={100} />

                    <div className="flex flex-col justify-start space-y-6 ">
                      <h1 className="text-xl font-semibold">{product.name}</h1>
                      <span className="text-xs text-gray-600">{product.price}</span>
                    </div>

                  </div>
                  ))}
                </div>
              </div>
            </div>



          </div>

          <div className="ml-auto flex flex-row items-center justify-center lg:justify-end  lg:block md:block ">
            <div onMouseEnter={() => setShowAccountInfo(true)} onMouseLeave={() => setShowAccountInfo(false)} className="relative text-center m-3 cursor-pointer flex space-x-3 transition duration-500">
              <User />
              <span className="font-semibold"> My Account </span>
              <motion.div variants={FADE_DOWN_ANIMATION_VARIANTS}
                initial="hidden"
                animate={showAccountInfo ? "show" : "hidden"} className={`bg-white ${showAccountInfo ? 'block' : 'hidden'} w-[200px] text-left right-0 top-6 h-[220px] shadow-md  z-20 absolute`}>

                <div className="border-b-2  py-3 px-3 delay-75 transition-all border-gray-300 hover:bg-[#313537] hover:text-white">
                  <Link className=" px-4  " href={"/login"}>INFORMATION</Link>
                </div>

                <div className="border-b-2 py-3 px-3 delay-75 transition-all  border-gray-300 hover:bg-[#313537] hover:text-white">
                  <Link href={"#"}>ADD FIRST ADDRESS</Link>
                </div>


                <div className="border-b-2 py-3 px-3 delay-75 transition-all  border-gray-300 hover:bg-[#313537] hover:text-white">
                  <Link href={"#"}>ORDER HISTORY AND DETAILS</Link>
                </div>

                <div className="border-b-2 py-3 px-3 delay-75 transition-all  border-gray-300 hover:bg-[#313537] hover:text-white">
                  <Link href={"#"}>CREDIT SLIPS</Link>
                </div>

              </motion.div>


            </div>
            <div className="text-center m-3 cursor-pointer flex space-x-3 transition duration-300">
              <ShoppingCart />
              <span className="font-semibold">Add to Cart</span>
            </div>
          </div>
          <div className="ml-auto flex flex-row items-center justify-center lg:justify-end">
            <div className="text-center m-3 hover:text-white transition duration-300 lg:hidden md:hidden">
              <Link href="/">User</Link>
            </div>
            <div className="text-center m-3 hover:text-white transition duration-300 lg:hidden md:hidden">
              <Link href="/">Cart</Link>
            </div>
          </div>
          <div className="ml-auto flex flex-row items-center justify-center lg:justify-end">
            <div
              className="text-center m-3 hover:text-white transition duration-300 cursor-pointer lg:hidden md:hidden"
              onClick={toggleMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    menuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </div>
          </div>
        </nav>
        <div className="flex flex-wrap justify-center p-2 lg:bg-emerald-200 md:bg-emerald-200">
          <Link
            href="/"
            className="text-center m-3 hover:text-contrast-green-500 transition duration-300 hidden lg:block md:block"
          >
            Home
          </Link>
          <Link
            href="/pages/shop"
            className="text-center m-3 hover:text-contrast-green-500 transition duration-300 hidden lg:block md:block"
          >
            Shop
          </Link>
          <Link
            href="/pages/blog"
            className="text-center m-3 hover:text-contrast-green-500 transition duration-300 hidden lg:block md:block"
          >
            Blog
          </Link>
          <Link
            href="/"
            className="text-center m-3 hover:text-contrast-green-500 transition duration-300 hidden lg:block md:block relative"
            onMouseEnter={() => setShowSubTypes(true)}
            onMouseLeave={() => setShowSubTypes(false)}
          >
            Features
            {showSubTypes && (
              <div className="absolute top-full left-0 bg-white p-4 border border-gray-300 shadow-lg flex">
                <div className="mx-3">
                  <Link href="/featuresType/sweet">Sweet</Link>
                </div>
                <div className="mx-3">
                  <Link href="/featuresType/sour">Sour</Link>
                </div>
                <div className="mx-3">
                  <Link href="/featuresType/mild">Mild</Link>
                </div>
                <div className="mx-3">
                  <Link href="/featuresType/toxic">Toxic</Link>
                </div>
              </div>
            )}
          </Link>
          <Link
            href="/pages/fruits"
            className="text-center m-3 hover:text-contrast-green-500 transition duration-300 hidden lg:block md:block"
          >
            Fruits
          </Link>
          <Link
            href="/pages/vegetables"
            className="text-center m-3 hover:text-contrast-green-500 transition duration-300 hidden lg:block md:block"
          >
            Vegetables
          </Link>
          <Link
            href="/pages/delivery"
            className="text-center m-3 hover:text-contrast-green-500 transition duration-300 hidden lg:block md:block"
          >
            Delivery
          </Link>
          <Link
            href="/pages/aboutUs"
            className="text-center m-3 hover:text-contrast-green-500 transition duration-300 hidden lg:block md:block"
          >
            About Us
          </Link>
          <Link
            href="/pages/contactUs"
            className="text-center m-3 hover:text-contrast-green-500 transition duration-300 hidden lg:block md:block"
          >
            Contact Us
          </Link>
          <Link
            href="/pages/stores"
            className="text-center m-3 hover:text-contrast-green-500 transition duration-300 hidden lg:block md:block"
          >
            Stores
          </Link>
        </div>
        <div
          className={`${menuOpen ? "flex flex-col" : "hidden"
            } lg:hidden md:hidden`}
        >
          <Link
            href="/"
            className="text-center m-3 hover:text-contrast-green-500 transition duration-300"
          >
            Home
          </Link>
          <Link
            href="/pages/shop"
            className="text-center m-3 hover:text-contrast-green-500 transition duration-300"
          >
            Shop
          </Link>
          <Link
            href="/pages/blog"
            className="text-center m-3 hover:text-contrast-green-500 transition duration-300"
          >
            Blog
          </Link>
          <Link
            href="/"
            className="text-center m-3 hover:text-contrast-green-500 transition duration-300 hidden lg:block md:block relative"
            onMouseEnter={() => setShowSubTypes(true)}
            onMouseLeave={() => setShowSubTypes(false)}
          >
            Features
            {showSubTypes && (
              <div className="absolute top-full left-0 bg-white p-4 border border-gray-300 shadow-lg flex">
                <div className="mx-3">
                  <Link href="/featuresType/sweet">Sweet</Link>
                </div>
                <div className="mx-3">
                  <Link href="/featuresType/sour">Sour</Link>
                </div>
                <div className="mx-3">
                  <Link href="/featuresType/mild">Mild</Link>
                </div>
                <div className="mx-3">
                  <Link href="/featuresType/toxic">Toxic</Link>
                </div>
              </div>
            )}
          </Link>
          <Link
            href="/pages/fruits"
            className="text-center m-3 hover:text-contrast-green-500 transition duration-300"
          >
            Fruits
          </Link>
          <Link
            href="/pages/vegetables"
            className="text-center m-3 hover:text-contrast-green-500 transition duration-300"
          >
            Vegetables
          </Link>
          <Link
            href="/pages/delivery"
            className="text-center m-3 hover:text-contrast-green-500 transition duration-300"
          >
            Delivery
          </Link>
          <Link
            href="/pages/aboutUs"
            className="text-center m-3 hover:text-contrast-green-500 transition duration-300"
          >
            About Us
          </Link>
          <Link
            href="/pages/contactUs"
            className="text-center m-3 hover:text-contrast-green-500 transition duration-300"
          >
            Contact Us
          </Link>
          <Link
            href="/pages/stores"
            className="text-center m-3 hover:text-contrast-green-500 transition duration-300"
          >
            Stores
          </Link>
        </div>
        <hr className="bg-green-800" />
      </header>
    </motion.div>
  );
}
