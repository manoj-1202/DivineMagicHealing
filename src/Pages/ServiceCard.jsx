import { useState } from "react";
import { services } from "../Data/ServicesData";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import serviceBanner from "../Assets/about/serviceBanner.png";
import SocialMedia from "../Components/SocialMedia";

const filterOptions = [
  "All",
  "Pregnancy",
  "Emotional",
  "Adolescence",
  "Finance",
  "Spiritual",
  "Relationship",
  "Aromatherapy",
  "Counselling",
  "Meditation",
];

const ServiceCard = () => {
  const [selectedFilter, setSelectedFilter] = useState("All");

  const filteredServices =
    selectedFilter === "All"
      ? services
      : services.filter((service) => service.category === selectedFilter);

  return (
    <div className="w-full bg-gray-100 border-t font-title">
        
        {/* Services banner */}
    <div className="max-w-[1300px] mx-auto">
    <div
          className="relative w-full h-[250px] sm:h-[200px] lg:h-[200px] bg-center bg-cover"
          style={{ backgroundImage: `url(${serviceBanner})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/30 rounded-b-xl"></div>
          <div className="absolute inset-0 flex justify-center items-center text-center px-6">
            <div className="text-white z-10 space-y-4">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold drop-shadow-lg">
                Services
              </h1>
              <p className="text-base sm:text-lg lg:text-xl font-light tracking-wide max-w-3xl mx-auto">
              Learn Various Modalities of Healing Learn in-depth about the
              deeper sciences of energy and implement their superpowers in your
              life.
              </p>
            </div>
          </div>
        </div>
        </div>

           {/* Back button  */}
           <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
           <div className="w-full px-4 sm:px-6 lg:px-8 mt-5">
                  <h3 className="text-center sm:text-left text-black text-base sm:text-lg font-medium">
                    <Link
                      to="/"
                      className="hover:underline hover:text-gray-500 transition-colors duration-200"
                    >
                      Home
                    </Link>
                    <span className="mx-2">|</span>
                    <span className="text-gray-500">Services</span>
                  </h3>
                </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mt-5 ">
          {filterOptions.map((option) => (
            <button
              key={option}
              onClick={() => setSelectedFilter(option)}
              className={`px-4 py-2 rounded-full border transition ${
                selectedFilter === option
                 ? "bg-purple-600 text-white"
                  : "bg-white text-black border-black"
              }`}
            >
              {option}
            </button>
          ))}
        </div>

        {/* Animated Service Cards */}
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          <AnimatePresence>
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-gray-200 p-4 rounded-2xl shadow-md hover:shadow-lg"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover rounded-xl mb-4"
                />
                <h3 className="text-xl font-semibold text-black mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  {service.description}
                </p>
                <p className="text-sm text-gray-500">
                  Duration: {service.duration}
                </p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      <SocialMedia/>
    </div>
  );
};

export default ServiceCard;
