"use client";

import React from "react";
import Link from "next/link";
import ContactUs from "../contactUs/page";
import { franchises } from "../../franchises";

function Store() {
  return (
    <div className="bg-green-50 py-12 px-6 sm:px-12 lg:px-24">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6 text-black bg-clip-text ">
          Our Stores
        </h2>
        {franchises.map((franchise, index) => (
          <Link href={`/store/${franchise.id}`}>
            {" "}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8 hover:shadow-xl transition duration-300">
              <h3 className="text-xl font-semibold mb-2 text-green-800">
                {franchise.name}
              </h3>
              <p className="text-gray-700">ID: {franchise.id}</p>
              <p className="text-gray-700">Address: {franchise.address}</p>
              <p className="text-gray-700">Phone: {franchise.phone}</p>
              <p className="text-gray-700">Email: {franchise.email}</p>
              <p className="text-gray-700">Location: {franchise.location}</p>
            </div>
          </Link>
        ))}
      </div>
      <ContactUs />
    </div>
  );
}

export default Store;
