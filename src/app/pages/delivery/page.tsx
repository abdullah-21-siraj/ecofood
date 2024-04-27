"use client";

import React, { useState } from "react";

const TrackPage = () => {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [trackingDetails, setTrackingDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setTrackingNumber(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setTrackingDetails({
        trackingNumber: 1234,
        status: "Out for Delivery",
        location: "City, Country",
        estimatedDelivery: "April 30, 2024",
      });
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Track Your Parcel</h1>
      <form onSubmit={handleSubmit} className="max-w-md">
        <div className="mb-4">
          <label
            htmlFor="trackingNumber"
            className="block text-sm font-medium text-gray-700"
          >
            Enter Tracking Number:
          </label>
          <input
            type="text"
            id="trackingNumber"
            name="trackingNumber"
            value={trackingNumber}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Track
        </button>
      </form>
      {isLoading && <p>Loading...</p>}
      {trackingDetails && (
        <div className="mt-8 p-4 border border-gray-300 rounded-md">
          <h2 className="text-lg font-bold mb-2">Tracking Details</h2>
          <p>
            <strong>Tracking Number:</strong> {trackingDetails.trackingNumber}
          </p>
          <p>
            <strong>Status:</strong> {trackingDetails.status}
          </p>
          <p>
            <strong>Location:</strong> {trackingDetails.location}
          </p>
          <p>
            <strong>Estimated Delivery:</strong>{" "}
            {trackingDetails.estimatedDelivery}
          </p>
        </div>
      )}
    </div>
  );
};

export default TrackPage;
