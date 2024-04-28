"use client";
import Image from "next/image";
import React from "react";
import { useState } from "react";

const HeartButton = () => {
  const [isLiked, setIsLiked] = useState(false);

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <button className="text-white p-1 rounded m-2" onClick={toggleLike}>
      <div
        className={`hover:bg-amber-400 rounded-full p-1 ${
          isLiked ? "bg-amber-400" : ""
        }`}
      >
        <Image
          src="/heart.png"
          width={20}
          height={20}
          alt="heart"
          className="w-full h-full"
        />
      </div>
    </button>
  );
};

export default HeartButton;
