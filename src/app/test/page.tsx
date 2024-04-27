"use client";

import React, { useState } from "react";
import products from "../product"; // Importing product data

interface Product {
  id: number;
  category: string;
  price: string;
  availability: boolean;
  show?: string;
}

function Test() {
  // State variables for managing filters, sorting, pagination, and items per page
  const [available, setAvailable] = useState<boolean>(false);
  const [category, setCategory] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<string | null>(null);
  const [itemsPerPage, setItemsPerPage] = useState<number>(5);
  const [currentPage, setCurrentPage] = useState<number>(1);

  // Function to toggle available filter
  function checkAvailable() {
    setAvailable((prevAvailable) => !prevAvailable);
  }

  // Function to toggle category filter
  function checkCategory(category: string) {
    setCategory((prevCategory) =>
      prevCategory === category ? null : category
    );
  }

  // Function to handle sorting option change
  function handleSortChange(sortOption: string | null) {
    setSortBy(sortOption);
  }

  // Function to sort products based on selected sorting option
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

  // Filtering products based on selected filters
  const filteredProducts = sortProducts(
    products.filter((product) => {
      const isCategoryMatch =
        category === null || product.category === category;
      const isAvailabilityMatch = !available || product.availability;
      return isCategoryMatch && isAvailabilityMatch;
    })
  );

  // Pagination calculations
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredProducts.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  // Function to handle pagination
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  // Function to reset all filters, sorting, and pagination settings
  function handleReset() {
    setAvailable(false);
    setCategory(null);
    setSortBy(null);
    setCurrentPage(1);
    setItemsPerPage(5); // Reset items per page to default value
  }

  // Function to handle items per page change
  function handleItemsPerPageChange(
    event: React.ChangeEvent<HTMLSelectElement>
  ) {
    setItemsPerPage(parseInt(event.target.value));
    setCurrentPage(1); // Reset to first page when changing items per page
  }

  // Rendering UI components
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Filters section */}
      <div className="flex flex-col my-5">
        {/* Available filter */}
        <label className="inline-flex items-center ml-4">
          <input
            type="checkbox"
            id="available"
            checked={available}
            onChange={checkAvailable}
            className="form-checkbox h-5 w-5 text-gray-600"
          />
          <span className="ml-2 text-gray-700">Available</span>
        </label>

        {/* Fruit filter */}
        <label className="inline-flex items-center ml-4">
          <input
            type="checkbox"
            id="fruit"
            checked={category === "fruit"}
            onChange={() => checkCategory("fruit")}
            className="form-checkbox h-5 w-5 text-gray-600"
          />
          <span className="ml-2 text-gray-700">Fruit</span>
        </label>

        {/* Vegetable filter */}
        <label className="inline-flex items-center ml-4">
          <input
            type="checkbox"
            id="vegetable"
            checked={category === "vegetable"}
            onChange={() => checkCategory("vegetable")}
            className="form-checkbox h-5 w-5 text-gray-600"
          />
          <span className="ml-2 text-gray-700">Vegetables</span>
        </label>
      </div>

      {/* Sorting section */}
      <div className="flex items-center my-5">
        <label className="mr-4 text-gray-700">Sort by:</label>
        <select
          id="sortBy"
          value={sortBy || ""}
          onChange={(e) => handleSortChange(e.target.value || null)}
          className="border border-gray-300 rounded-md px-2 py-1"
        >
          <option value="">-- Select --</option>
          <option value="lowToHigh">Low to High</option>
          <option value="highToLow">High to Low</option>
        </select>
        {/* Reset button */}
        <button
          className="ml-4 bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>

      {/* Displaying filtered products */}
      {currentItems.map((product) => (
        <div className="flex items-center" key={product.id}>
          <h1 className="mr-4">{product.category}</h1>
          <div className="mx-auto"></div>
          <h1 className="mr-4">{product.price}</h1>
          <h1>{product.show}</h1>
        </div>
      ))}

      {/* Items per page dropdown */}
      <div className="flex justify-center items-center my-4">
        <span className="text-gray-700 mr-2">Items per page:</span>
        <select
          value={itemsPerPage}
          onChange={handleItemsPerPageChange}
          className="border border-gray-300 rounded-md px-2 py-1"
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={15}>15</option>
        </select>
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center my-4">
        {/* Previous page button */}
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
        {/* Current page indicator */}
        <span className="px-4">
          Page {currentPage} of{" "}
          {Math.ceil(filteredProducts.length / itemsPerPage)}
        </span>
        {/* Next page button */}
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
  );
}

export default Test;
