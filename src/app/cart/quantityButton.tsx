"use client";

import React, { useState } from "react";

function QuantityButton() {
  const [quantity, setQuantity] = useState(0);

  const incrementCount = () => {
    setQuantity(quantity + 1);
  };

  const decrementCount = () => {
    setCounter((c) => Math.max(c - 1, 0));
  };

  return (
    <div className="flex items-center">
      <button
        type="button"
        className="px-3 py-1 bg-yellow-500 text-white rounded-md mr-2"
        onClick={decrementCount}
        disabled={quantity === 0}
      >
        -
      </button>
      <input
        type="number"
        min="1"
        defaultValue={quantity}
        className="w-16 px-3 py-1 border rounded-md text-center"
      />
      <button
        type="button"
        className="px-3 py-1 bg-yellow-500 text-white rounded-md ml-2"
        onClick={incrementCount}
      >
        +
      </button>
    </div>
  );
}

export default QuantityButton;
