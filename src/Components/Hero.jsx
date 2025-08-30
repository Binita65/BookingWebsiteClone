import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { assets, cities } from "../assets/assets";

// ✅ Import images correctly
import bg4 from "../assets/bg4.png";
import heroImage from "../assets/heroImage.png";
import bg1 from "../assets/bg1.png";
import bg2 from "../assets/bg2.png";
import bg3 from "../assets/bg3.png";

const Hero = () => {
  const bgImages = [bg4, heroImage, bg1, bg2, bg3]; // ✅ imports

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % bgImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [bgImages.length]);

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background Images with Fade Animation */}
      {bgImages.map((image, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: index === currentImageIndex ? 1 : 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0 bg-no-repeat bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 flex flex-col items-start justify-center px-6 md:px-16 lg:px-24 xl:px-32 text-white h-full">
        <p className="bg-[#49B9FF]/50 px-3.5 py-1 rounded-full mt-20">
          the ultimate hotel Experience
        </p>
        <h1 className="font-playfair text-2xl md:text-5xl md:text-[56px] md:leading-[56px] font-bold md:font-extrabold max-w-xl mt-4">
          Where Elegance Meets Comfort.
        </h1>
        <p className="max-w-130 mt-2 text-sm md:text-base">
          Enjoy delicious cuisines at our in-house restaurant. From continental
          breakfast to local delicacies, our chefs serve dishes made with love
          and fresh ingredients.
        </p>

        {/* form */}
        <form className="bg-white text-gray-500 rounded-lg px-6 py-4 mt-8 flex flex-col md:flex-row max-md:items-start gap-4 max-md:mx-auto">
          <div>
            <div className="flex items-center gap-2">
              <img src={assets.calenderIcon} alt="" className="h-4" />
              <label htmlFor="destinationInput">Destination</label>
            </div>
            <input
              list="destinations"
              id="destinationInput"
              type="text"
              className="rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none"
              placeholder="Type here"
              required
            />
            <datalist id="destinations">
              {cities.map((city, index) => (
                <option value={city} key={index} />
              ))}
            </datalist>
          </div>

          <div>
            <div className="flex items-center gap-2">
              <img src={assets.calenderIcon} alt="" className="h-4" />
              <label htmlFor="checkIn">Check in</label>
            </div>
            <input
              id="checkIn"
              type="date"
              className="rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none"
            />
          </div>

          <div>
            <div className="flex items-center gap-2">
              <img src={assets.calenderIcon} alt="" className="h-4" />
              <label htmlFor="checkOut">Check out</label>
            </div>
            <input
              id="checkOut"
              type="date"
              className="rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none"
            />
          </div>

          <div className="flex md:flex-col max-md:gap-2 max-md:items-center">
            <label htmlFor="guests">Guests</label>
            <input
              min={1}
              max={4}
              id="guests"
              type="number"
              className="rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none max-w-16"
              placeholder="0"
            />
          </div>

          <button className="flex items-center justify-center gap-1 rounded-md bg-black py-3 px-4 text-white my-auto cursor-pointer max-md:w-full max-md:py-1">
            <img src={assets.searchIcon} alt="searchIcon" className="h-7" />
            <span>Search</span>
          </button>
        </form>
      </div>

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/40 z-0"></div>
    </div>
  );
};

export default Hero;
