import React from 'react';
import Navbar from './Components/Navbar';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Footer from './Components/Footer';
import AllRooms from './pages/AllRooms';
import RoomDetails from './pages/RoomDetails';
import { Toaster } from "react-hot-toast";
import MyBookings from './pages/MyBookings';
import Hotelreg from './Components/Hotelreg';
import Layout from './pages/hotelOwner/Layout';
import DashBoard from './pages/hotelOwner/DashBoard';
import AddRoom from './pages/hotelOwner/AddRoom';
import ListRoom from './pages/hotelOwner/ListRoom';

const App = () => {
  const pathname = useLocation().pathname;
  const isOwnerPath = pathname.startsWith('/owner'); // a bit stricter

  return (
    <div>
      {!isOwnerPath && <Navbar />}
      {false && <Hotelreg />}

      <div className='min-h-[70vh]'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/rooms' element={<AllRooms />} />
          <Route path='/rooms/:id' element={<RoomDetails />} />
          <Route path='/my-bookings' element={<MyBookings />} />

          {/* Owner area with nested routes */}
          <Route path='/owner' element={<Layout />}>
            <Route index element={<DashBoard />} />
            <Route path='add-room' element={<AddRoom />} />
            <Route path='list-room' element={<ListRoom />} />
          </Route>
        </Routes>
      </div>

      {!isOwnerPath && <Footer />}

      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default App;
