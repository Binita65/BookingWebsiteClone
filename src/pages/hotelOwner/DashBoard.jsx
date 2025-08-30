import React from "react";
import { Users, BedDouble, CalendarDays, DollarSign } from "lucide-react";

const DashBoard = () => {
  const stats = [
    {
      name: "Total Bookings",
      value: "1,248",
      icon: <CalendarDays className="w-8 h-8 text-blue-600" />,
      color: "bg-blue-100",
    },
    {
      name: "Available Rooms",
      value: "42",
      icon: <BedDouble className="w-8 h-8 text-green-600" />,
      color: "bg-green-100",
    },
    {
      name: "Revenue This Month",
      value: "₹5,24,000",
      icon: <DollarSign className="w-8 h-8 text-yellow-600" />,
      color: "bg-yellow-100",
    },
    {
      name: "Guests Staying",
      value: "315",
      icon: <Users className="w-8 h-8 text-purple-600" />,
      color: "bg-purple-100",
    },
  ];

  return (
    <div className="p-6">
      {/* Header */}
      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        🏨 Hotel Dashboard
      </h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-2xl p-5 flex items-center justify-between hover:scale-105 transition-all duration-300"
          >
            <div>
              <h2 className="text-gray-600 text-sm font-medium">{stat.name}</h2>
              <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
            </div>
            <div className={`p-3 rounded-full ${stat.color}`}>
              {stat.icon}
            </div>
          </div>
        ))}
      </div>

      {/* Welcome Section */}
      <div className="mt-10 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-2xl p-8 shadow-xl">
        <h2 className="text-2xl font-semibold">Welcome Back, Admin! 👋</h2>
        <p className="mt-2 text-lg opacity-90">
          Here’s an overview of today’s hotel performance.  
          Keep an eye on bookings and guest experience to grow your success!
        </p>
      </div>
    </div>
  );
};

export default DashBoard;
