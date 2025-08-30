import React, { useState } from 'react'
import Title from './../Components/Title';
import { userBookingsDummyData, assets } from '../assets/assets';

const MyBookings = () => {
  const [bookings, setBookings] = useState(userBookingsDummyData);

  return (
    <div className='py-28 md:pb-35 md:pt-32 px-4 md:px-16 lg:px-24 xl:px-32'>
      
      <Title 
        title='My Bookings' 
        subTitle="Easily manage all your reservations in one place. View your upcoming stays, check-in and check-out dates, room details, and booking status. Need to make changes? Modify or cancel your bookings instantly with just a few clicks." 
        align='left' 
      />

      <div className='max-w-6xl mt-8 w-full text-gray-800'>
        {/* Table header for desktop */}
        <div className='hidden md:grid md:grid-cols-[3fr_2fr_1fr] w-full border-b border-gray-400 font-medium text-base py-3'>
          <div>Hotels</div>
          <div>Date and Timings</div>
          <div>Payments</div>
        </div>

        {/* Booking list */}
        {bookings.map((booking) => (
          <div 
            key={booking._id} 
            className='grid grid-cols-1 md:grid-cols-[3fr_2fr_1fr] w-full border-b border-gray-800 py-6 first:border-t'
          >
            {/* Hotel details */}
            <div className='flex flex-col md:flex-row gap-4'>
              <img 
                src={booking.room.images[0]} 
                alt="hotel-img" 
                className='md:w-44 h-32 rounded shadow object-cover' 
              />
              <div className='flex flex-col justify-between'>
                <p className='font-playfair text-2xl'>
                  {booking.hotel.name}{' '}
                  <span className='font-inter text-sm text-gray-500'>
                    ({booking.room.roomType})
                  </span>
                </p>
                <div className='flex items-center gap-1 text-sm text-gray-500'>
                  <img src={assets.locationIcon} alt="location-icon" className='w-4 h-4'/>
                  <span>{booking.hotel.address}</span>
                </div>
                <div className='flex items-center gap-1 text-sm text-gray-500'>
                  <img src={assets.guestsIcon} alt="guests-icon" className='w-4 h-4'/>
                  <span>Guests: {booking.guests}</span>
                </div>
                <p className='text-base font-medium'>Total: ${booking.totalPrice}</p>
              </div>
            </div>

            {/* Date and timings */}
            <div className='flex flex-col justify-center text-sm text-gray-600 mt-4 md:mt-0'>
              <p>Check-in: <span className='font-medium'>{booking.checkIn}</span></p>
              <p>Check-out: <span className='font-medium'>{booking.checkOut}</span></p>
            </div>

            {/* Payment status */}
            <div className='flex flex-col justify-center mt-4 md:mt-0'>
              <span 
                className={`px-3 py-1 rounded-full text-sm font-medium w-fit ${
                  booking.paymentStatus === 'Paid' 
                    ? 'bg-green-100 text-green-700' 
                    : 'bg-red-100 text-red-700'
                }`}
              >
                {booking.paymentStatus}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MyBookings
