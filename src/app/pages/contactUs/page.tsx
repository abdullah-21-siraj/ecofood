"use client";

import Link from "next/link";
import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <div>
        <div className="flex justify-center items-center h-screen">
          <form
            className="bg-white p-8 rounded shadow-md"
            onSubmit={handleSubmit}
          >
            <h2 className="text-2xl mb-4 font-bold">Contact Us</h2>
            <div className="mb-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Contact Name"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Contact Email"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Let's talk about your idea"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                rows="4"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-3 rounded hover:bg-blue-600 focus:outline-none"
            >
              Submit
            </button>
            <div className="mt-4 text-sm text-gray-600">
              <span>Phone 111 111 111 111</span>
              <br />
              <span>Email info@company.com</span>
              <br />
              <span>
                Help Desk
                <Link href="https://help.company.com" className="text-blue-500">
                  https://help.company.com
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
      <div>
        <div className="h-full p-10 ">
          <iframe
            className="w-full h-full rounded-lg"
            title="map"
            loading="lazy"
            allowfullscreen
            src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d202315.8062375346!2d105.7968991!3d20.9980405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135acbc84a08653%3A0xe8a6197396098ebb!2sEcoFoods!5e0!3m2!1sen!2sin!4v1619555881270!5m2!1sen!2sin`}
            frameborder="0"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
