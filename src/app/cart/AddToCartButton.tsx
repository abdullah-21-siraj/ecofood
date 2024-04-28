// main button and gives prompt

"use client";

import React, { useState } from "react";

const AddToCartButton = ({ addToCart, item }) => {
  const [showMessage, setShowMessage] = useState(false);

  const addToCartHandler = () => {
    if (typeof addToCart === "function") {
      addToCart(item);
      setShowMessage(true);
      setTimeout(() => {
        setShowMessage(false);
      }, 3000);
    } else {
      console.error("addToCart is not a function");
    }
  };

  const handleCloseMessage = () => {
    setShowMessage(false);
  };

  return (
    <div className="relative">
      <button
        onClick={addToCartHandler}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Add to Cart
      </button>
      {showMessage && (
        <div className="fixed top-0 right-0 m-4">
          <div className="bg-green-200 text-black p-4 rounded-lg flex justify-between items-center">
            <span>Added to Cart</span>
            <button
              onClick={handleCloseMessage}
              className="text-black hover:text-gray-800"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M6.293 7.293a1 1 0 011.414 0L10 10.586l2.293-2.293a1 1 0 111.414 1.414L11.414 12l2.293 2.293a1 1 0 01-1.414 1.414L10 13.414l-2.293 2.293a1 1 0 01-1.414-1.414L8.586 12 6.293 9.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddToCartButton;
