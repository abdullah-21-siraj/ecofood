"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header className="bg-contrast-green-500 text-black bg-zinc-100">
        <div className="flex flex-row flex-grow lg:flex bg-emerald-600 text-white">
          <Link
            href="/"
            className="p-2 bg-contrast-green-700 flex-grow hover:text-white transition duration-300 hidden lg:block md:block text-center"
          >
            Get 15% Off Your First Full-Price Purchase When You Subscribe To Our
            Emails / Subscribe Now →
          </Link>
        </div>

        <nav className="flex flex-wrap lg:flex-row p-2 justify-between items-center">
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
            <div className="text-center m-3 hover:text-white transition duration-300 hidden lg:block md:block">
              My Compare
            </div>
            <div className="text-center m-3 hover:text-white transition duration-300 hidden lg:block md:block">
              My Favourites
            </div>
            <div className="text-center m-3 hover:text-white transition duration-300 hidden lg:block md:block">
              Search
            </div>
          </div>

          <div className="ml-auto flex flex-row items-center justify-center lg:justify-end hidden lg:block md:block">
            <div className="text-center m-3 hover:text-white transition duration-300">
              My Account
            </div>
            <div className="text-center m-3 hover:text-white transition duration-300">
              Add to Cart
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
        <div className="flex flex-wrap justify-center p-2 lg:bg-white md:bg-white">
          <Link
            href="/"
            className="text-center m-3 hover:text-contrast-green-500 transition duration-300 hidden lg:block md:block"
          >
            Home
          </Link>
          <Link
            href="/"
            className="text-center m-3 hover:text-contrast-green-500 transition duration-300 hidden lg:block md:block"
          >
            Shop
          </Link>
          <Link
            href="/"
            className="text-center m-3 hover:text-contrast-green-500 transition duration-300 hidden lg:block md:block"
          >
            Blog
          </Link>
          <Link
            href="/"
            className="text-center m-3 hover:text-contrast-green-500 transition duration-300 hidden lg:block md:block"
          >
            Features
          </Link>
          <Link
            href="/"
            className="text-center m-3 hover:text-contrast-green-500 transition duration-300 hidden lg:block md:block"
          >
            Fruits
          </Link>
          <Link
            href="/"
            className="text-center m-3 hover:text-contrast-green-500 transition duration-300 hidden lg:block md:block"
          >
            Vegetables
          </Link>
          <Link
            href="/"
            className="text-center m-3 hover:text-contrast-green-500 transition duration-300 hidden lg:block md:block"
          >
            Delivery
          </Link>
          <Link
            href="/"
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
            href="/"
            className="text-center m-3 hover:text-contrast-green-500 transition duration-300 hidden lg:block md:block"
          >
            Stores
          </Link>
        </div>
        <div
          className={`${
            menuOpen ? "flex flex-col" : "hidden"
          } lg:hidden md:hidden`}
        >
          <Link
            href="/"
            className="text-center m-3 hover:text-contrast-green-500 transition duration-300"
          >
            Home
          </Link>
          <Link
            href="/"
            className="text-center m-3 hover:text-contrast-green-500 transition duration-300"
          >
            Shop
          </Link>
          <Link
            href="/"
            className="text-center m-3 hover:text-contrast-green-500 transition duration-300"
          >
            Blog
          </Link>
          <Link
            href="/"
            className="text-center m-3 hover:text-contrast-green-500 transition duration-300"
          >
            Features
          </Link>
          <Link
            href="/"
            className="text-center m-3 hover:text-contrast-green-500 transition duration-300"
          >
            Fruits
          </Link>
          <Link
            href="/"
            className="text-center m-3 hover:text-contrast-green-500 transition duration-300"
          >
            Vegetables
          </Link>
          <Link
            href="/"
            className="text-center m-3 hover:text-contrast-green-500 transition duration-300"
          >
            Delivery
          </Link>
          <Link
            href="/"
            className="text-center m-3 hover:text-contrast-green-500 transition duration-300"
          >
            About Us
          </Link>
          <Link
            href="/ContactUs"
            className="text-center m-3 hover:text-contrast-green-500 transition duration-300"
          >
            Contact Us
          </Link>
          <Link
            href="/"
            className="text-center m-3 hover:text-contrast-green-500 transition duration-300"
          >
            Stores
          </Link>
        </div>
        <hr className="bg-green-800" />
      </header>
    </>
  );
}
