"use client";

import React, { ReactNode, useState } from "react";
import products from "../../product";
import HeartButton from "../../heartButton";
import CartPage from "../../cart/page";
import AddToCartButton from "../../cart/AddToCartButton";
import QuantityButton from "../../cart/quantityButton";
interface Product {
  [x: string]: ReactNode;
  id: number;
  category: string;
  price: string;
  availability: boolean;
  show?: string;
  image: string;
  description: string;
}

function Shop() {
  const [available, setAvailable] = useState<boolean>(false);
  const [category, setCategory] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<string | null>(null);
  const [itemsPerPage, setItemsPerPage] = useState<number>(10);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [showCart, setShowCart] = useState(false);

  function toggleCart() {
    setShowCart((prevShowCart) => !prevShowCart);
  }

  function checkAvailable() {
    setAvailable((prevAvailable) => !prevAvailable);
  }

  function checkCategory(category: string) {
    setCategory((prevCategory) =>
      prevCategory === category ? null : category
    );
  }

  function handleSortChange(sortOption: string | null) {
    setSortBy(sortOption);
  }

  function sortProducts(products: Product[]): Product[] {
    if (sortBy === "lowToHigh") {
      return [...products].sort(
        (a, b) =>
          parseFloat(a.price.replace("$", "")) -
          parseFloat(b.price.replace("$", ""))
      );
    } else if (sortBy === "highToLow") {
      return [...products].sort(
        (a, b) =>
          parseFloat(b.price.replace("$", "")) -
          parseFloat(a.price.replace("$", ""))
      );
    }
    return products;
  }

  const filteredProducts = sortProducts(
    products.filter((product) => {
      const isCategoryMatch =
        category === null || product.category === category;
      const isAvailabilityMatch = !available || product.availability;
      return isCategoryMatch && isAvailabilityMatch;
    })
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredProducts.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  function handleReset() {
    setAvailable(false);
    setCategory(null);
    setSortBy("");
    setCurrentPage(1);
  }

  function handleItemsPerPageChange(
    event: React.ChangeEvent<HTMLSelectElement>
  ) {
    setItemsPerPage(parseInt(event.target.value));
    setCurrentPage(1);
  }

  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      <div className="col-span-1 md:col-span-1 flex flex-col p-4 rounded-lg shadow-md">
        <div className="text-lg font-semibold text-gray-800 mb-4">
          Categories
        </div>
        <label
          htmlFor="fruit"
          className="flex items-center mb-2 text-lg font-extralight text-gray-800 cursor-pointer"
        >
          <input
            type="checkbox"
            id="fruit"
            checked={category === "fruit"}
            onChange={() => checkCategory("fruit")}
            className="mr-2 cursor-pointer"
          />
          Fruit
        </label>
        <label
          htmlFor="vegetable"
          className="flex items-center mb-2 text-lg font-extralight text-gray-800 cursor-pointer"
        >
          <input
            type="checkbox"
            id="vegetable"
            checked={category === "vegetable"}
            onChange={() => checkCategory("vegetable")}
            className="mr-2 cursor-pointer"
          />
          Vegetable
        </label>
        <div className="text-lg font-semibold text-gray-800 mb-4">
          Availability
        </div>
        <label
          htmlFor="available"
          className="flex items-center mb-2 text-lg font-extralight text-gray-800 cursor-pointer"
        >
          <input
            type="checkbox"
            id="available"
            checked={available}
            onChange={checkAvailable}
            className="mr-2 cursor-pointer"
          />
          In Stock
        </label>
        <div>
          <label htmlFor="sortBy" className="font-semibold text-lg">
            Sort by:
          </label>
          <select
            id="sortBy"
            value={sortBy}
            onChange={(e) => handleSortChange(e.target.value)}
            className="border border-gray-300 rounded-md px-2 py-1 mt-1 flex font-extralight"
          >
            <option value="">-- Select --</option>
            <option value="lowToHigh">Low to High</option>
            <option value="highToLow">High to Low</option>
          </select>
          <button
            onClick={handleReset}
            className="bg-emerald-400 text-white p-2 mt-2 rounded-md hover:bg-amber-600 flex"
          >
            Reset
          </button>
        </div>

        {/* Items per page */}
        <div className="text-lg font-semibold text-gray-800 mb-4">
          Items per page
        </div>
        <select
          value={itemsPerPage}
          onChange={handleItemsPerPageChange}
          className="border border-gray-300 rounded-md px-2 py-1 mt-1 flex font-extralight"
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={15}>15</option>
          <option value={20}>20</option>
        </select>
        <div className="my-4 bg-amber-100 rounded-lg flex justify-center item-center mx-12">
          <button className="mx-5" onClick={toggleCart}>
            View Cart
          </button>
          <div className="flex flex-col bg-red-100">
            {showCart && <CartPage cart={cart} />}
          </div>
        </div>
      </div>

      <div className="col-span-1 md:col-span-3 ">
        <div className="flex flex-wrap justify-center md:justify-between my-10">
          {currentItems.map((product) => (
            <div
              key={product.id}
              className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-2 mb-2 sm:mb-4"
            >
              <div className="max-w-xs mx-auto bg-neutral-200 rounded-sm overflow-hidden shadow-lg p-3">
                <img
                  src={product.image}
                  alt="Product Image"
                  className="w-full h-auto rounded-lg my-1"
                />
                <div className="px-4 py-2">
                  <span className="text-gray-800 font-bold text-xl bg-amber-400 p-1 rounded-md">
                    {product.price}
                  </span>
                </div>
                <div className="px-4 py-2">
                  <p className="text-gray-700">{product.name}</p>
                </div>
                <div className="py-2 mx-2 flex justify-between">
                  <AddToCartButton addToCart={addToCart} item={product} />
                  <HeartButton />
                </div>
                <div className=" flex justify-center">
                  <QuantityButton />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center my-4">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-l"
            onClick={() =>
              setCurrentPage((prevPage) =>
                prevPage > 1 ? prevPage - 1 : prevPage
              )
            }
            disabled={currentPage === 1}
          >
            Prev
          </button>
          <span className="px-4">
            Page {currentPage} of{" "}
            {Math.ceil(filteredProducts.length / itemsPerPage)}
          </span>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r"
            onClick={() =>
              setCurrentPage((prevPage) =>
                prevPage < Math.ceil(filteredProducts.length / itemsPerPage)
                  ? prevPage + 1
                  : prevPage
              )
            }
            disabled={
              currentPage === Math.ceil(filteredProducts.length / itemsPerPage)
            }
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default Shop;
