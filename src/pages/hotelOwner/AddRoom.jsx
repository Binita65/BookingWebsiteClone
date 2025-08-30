import React, { useState } from "react";

const AddRoom = () => {
  const [formData, setFormData] = useState({
    roomName: "",
    hotelName: "",
    address: "",
    price: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setFormData({ ...formData, image: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Room added:", formData);
    // later you can send this data to backend using axios/fetch
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-xl shadow-md mt-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-5 text-center">
        ➕ Add New Room
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Room Name */}
        <div>
          <label className="block text-gray-600 mb-1">Room Name</label>
          <input
            type="text"
            name="roomName"
            value={formData.roomName}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
            placeholder="Enter room name"
            required
          />
        </div>

        {/* Hotel Name */}
        <div>
          <label className="block text-gray-600 mb-1">Hotel Name</label>
          <input
            type="text"
            name="hotelName"
            value={formData.hotelName}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
            placeholder="Enter hotel name"
            required
          />
        </div>

        {/* Address */}
        <div>
          <label className="block text-gray-600 mb-1">Address</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
            placeholder="Enter address"
            required
          />
        </div>

        {/* Price */}
        <div>
          <label className="block text-gray-600 mb-1">Price (per night)</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
            placeholder="Enter price"
            required
          />
        </div>

        {/* Image Upload */}
        <div>
          <label className="block text-gray-600 mb-1">Room Image</label>
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleChange}
            className="w-full"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition"
        >
          Add Room
        </button>
      </form>
    </div>
  );
};

export default AddRoom;
