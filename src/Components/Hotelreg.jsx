import React from 'react'
import { assets, cities } from '../assets/assets'

const Hotelreg = () => {
  return (
    <div className='fixed top-0 bottom-0 left-0 right-0 z-100 flex items-center justify-center bg-black/70'>
      <form className='flex bg-white rounded-xl shadow-2xl max-w-4xl max-md:mx-2 overflow-hidden'>
        {/* Left Image */}
        <img
          src={assets.regImage}
          alt="reg-image"
          className='w-1/2 object-cover hidden md:block'
        />

        {/* Right Form */}
        <div className='relative flex flex-col items-center md:w-1/2 p-8 md:p-10'>
          <img
            src={assets.closeIcon}
            alt="close-icon"
            className='absolute top-4 right-4 h-5 w-5 cursor-pointer hover:scale-110 transition-transform'
          />

          <p className='text-2xl font-semibold mt-6 text-gray-800'>
            Register Your Hotel
          </p>
          <p className='text-gray-500 text-sm mt-1'>
            Fill in the details below to list your hotel with us.
          </p>

          {/* Input Fields */}
          <div className='w-full mt-5'>
            <label htmlFor="name" className='font-medium text-gray-600 text-sm'>
              Hotel Name
            </label>
            <input
              id='name'
              type="text"
              placeholder='Enter Hotel Name'
              className='border border-gray-300 rounded-lg w-full px-3 py-2 mt-1 focus:ring-2 focus:ring-indigo-400 outline-none text-gray-700 placeholder-gray-400'
              required
            />
          </div>

          <div className='w-full mt-4'>
            <label htmlFor="contact" className='font-medium text-gray-600 text-sm'>
              Phone
            </label>
            <input
              id='contact'
              type="text"
              placeholder='Enter Phone Number'
              className='border border-gray-300 rounded-lg w-full px-3 py-2 mt-1 focus:ring-2 focus:ring-indigo-400 outline-none text-gray-700 placeholder-gray-400'
              required
            />
          </div>

          <div className='w-full mt-4'>
            <label htmlFor="address" className='font-medium text-gray-600 text-sm'>
              Address
            </label>
            <input
              id='address'
              type="text"
              placeholder='Enter Address'
              className='border border-gray-300 rounded-lg w-full px-3 py-2 mt-1 focus:ring-2 focus:ring-indigo-400 outline-none text-gray-700 placeholder-gray-400'
              required
            />
          </div>

          {/* City Dropdown */}
          <div className='w-full mt-4'>
            <label htmlFor="city" className='font-medium text-gray-600 text-sm'>
              City
            </label>
            <select
              id="city"
              className='border border-gray-300 rounded-lg w-full px-3 py-2 mt-1 focus:ring-2 focus:ring-indigo-400 outline-none text-gray-700'
              required
            >
              <option value="">Select City</option>
              {cities.map((city) => (
                <option key={city} value={city}>{city}</option>
              ))}
            </select>
          </div>

          {/* Button */}
          <button className='bg-indigo-500 hover:bg-indigo-600 transition-all text-white w-full py-2.5 rounded-lg mt-6 font-medium shadow-md'>
            Register
          </button>
        </div>
      </form>
    </div>
  )
}

export default Hotelreg
