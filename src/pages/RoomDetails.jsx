import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { facilityIcons, roomsDummyData } from '../assets/assets'
import { assets } from './../assets/assets'
import toast from "react-hot-toast"

const RoomDetails = () => {
  const { id } = useParams()
  const [room, setRoom] = useState(null)
  const [mainImage, setMainImage] = useState(null)

  useEffect(() => {
    const room = roomsDummyData.find(room => room._id === id)
    if (room) {
      setRoom(room)
      setMainImage(room.images[0])
    }
  }, [id])

  return room && (
    <div className='py-28 md:py-35 px-4 md:px-16 lg:px-24 xl:px-32'>
      {/* room details */}
      <div className='flex flex-col md:flex-row items-start md:items-center gap-2'>
        <h1 className='text-3xl md:text-4xl font-playfair'>
          {room.hotel.name}
          <span className='font-inter text-sm ml-2'>({room.roomType})</span>
        </h1>
        <p className='text-xs font-inter py-1.5 px-3 text-white bg-orange-500 rounded-full'>
          20% Off
        </p>
      </div>

      {/* room rating */}
      <div className='flex items-center gap-1 mt-2'>
        ⭐⭐⭐⭐⭐
      </div>
      <p className='ml-2'>200+ Reviews</p>

      {/* room address */}
      <div className='flex items-center gap-1 text-gray-600 mt-2'>
        <img src={assets.locationIcon} alt="location-icon" className="w-4 h-4" />
        <span>{room.hotel.address}</span>
      </div>

      {/* room images */}
      <div className='flex flex-col lg:flex-row mt-6 gap-6'>
        <div className='lg:w-1/2 w-full'>
          <img 
            src={mainImage} 
            alt="room-image" 
            className='w-full rounded-xl shadow-lg object-cover' 
          />
        </div>
        <div className='grid grid-cols-2 gap-4 lg:w-1/2 w-full'>
          {room?.images.length > 1 && room.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt="room-thumbnail"
              onClick={() => setMainImage(image)}
              className={`w-full rounded-xl shadow-md object-cover cursor-pointer ${mainImage === image ? 'outline outline-2 outline-orange-600' : ''}`}
            />
          ))}
        </div>
      </div>

      {/* room highlights */}
      <div className='flex flex-col md:flex-row md:justify-between mt-10'>
        <div className='flex flex-col'>
          <h1 className='text-3xl md:text-4xl font-playfair'>Experience Luxury like never before</h1>
          <div className='flex flex-wrap items-center mt-3 mb-6 gap-4'>
            {room.amenities.map((item , index)=>(
              <div key={index} className='flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-200'>
                <img src={facilityIcons[item]} alt={item} className='w-5 h-5' />
                <p className='text-xs'>{item}</p>
              </div>
            ))}
          </div>
        </div>
        {/* room price */}
        <p className='text-2xl font-medium'>${room.pricePerNight}/night</p>
      </div>

      {/* checkin , checkout form */}
      <form 
        onSubmit={(e) => {
          e.preventDefault()
          toast.success("🎉 Room successfully booked! 🏨")
        }} 
        className="mt-10 border-2 border-orange-500 p-6 rounded-2xl w-full md:w-1/2"
      >
        <h2 className="text-2xl font-semibold text-center mb-6">Book Your Stay</h2>

        <div className="flex flex-col gap-4">
          {/* Check-in Date */}
          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1">Check-in</label>
            <input 
              type="date" 
              className="border border-orange-500 rounded-lg px-3 py-2 outline-none" 
              required
            />
          </div>

          {/* Check-out Date */}
          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1">Check-out</label>
            <input 
              type="date" 
              className="border border-orange-500 rounded-lg px-3 py-2 outline-none" 
              required
            />
          </div>

          {/* Guests */}
          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1">Guests</label>
            <input 
              type="number" 
              min="1"
              className="border border-orange-500 rounded-lg px-3 py-2 outline-none" 
              placeholder="Number of Guests"
              required
            />
          </div>

          {/* Book Now Button */}
          <button 
            type="submit" 
            className="bg-orange-500 text-white py-2 px-4 rounded-xl font-medium hover:bg-orange-600 transition"
          >
            Book Now
          </button>
        </div>
      </form>
    </div>
  )
}

export default RoomDetails
