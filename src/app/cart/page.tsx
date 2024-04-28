"use client";

import React from "react";

interface CartItem {
  name: string;
}

interface CartPageProps {
  cart: CartItem[];
}

const CartPage: React.FC<CartPageProps> = ({ cart }) => {
  return (
    <div>
      <h2>Cart Items</h2>
      <ul>
        {cart && cart.map((item, index) => <li key={index}>{item.name}</li>)}
      </ul>
    </div>
  );
};

export default CartPage;
