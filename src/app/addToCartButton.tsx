"use client";
import { useState } from "react";

const AddToCartButton = ({ onAddToCart }) => {
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    setIsAdded(true);
    if (typeof onAddToCart === "function") {
      onAddToCart();
    }
  };

  return (
    <button
      className={`bg-emerald-600 hover:bg-gray-400 text-white p-1 rounded m-2 ${
        isAdded ? "bg-gray-400" : ""
      }`}
      onClick={handleAddToCart}
    >
      {isAdded ? "Added to Cart" : "Add to Cart"}
    </button>
  );
};

export default AddToCartButton;
