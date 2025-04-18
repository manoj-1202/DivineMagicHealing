import { useState } from "react";
import { healings } from "../Data/HealingData";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import healingBanner from "../Assets/about/healingBanner.png";

const filterOptions = ["All", "Energy", "Sound", "Mental", "Divine", "Crystal"];

const HealingCard = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredHealings =
    selectedCategory === "All"
      ? healings
      : healings.filter((h) => h.category === selectedCategory);

  return (
    <div className="w-full bg-gray-100  font-title">
      {/* Healing  banner */}
      <div className="max-w-[1300px] mx-auto">
        <div
          className="relative w-full h-[250px] sm:h-[200px] lg:h-[200px] bg-center bg-cover"
          style={{ backgroundImage: `url(${healingBanner})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/30 rounded-b-xl"></div>
          <div className="absolute inset-0 flex justify-center items-center text-center px-6">
            <div className="text-white z-10 space-y-4">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold drop-shadow-lg">
                Healing
              </h1>
              <p className="text-base sm:text-lg lg:text-xl font-light tracking-wide max-w-3xl mx-auto">
                Learn Various Modalities of Healing Learn in-depth about the
                deeper sciences of energy and implement their superpowers in
                your life.
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
            <span className="text-gray-500">Healing</span>
          </h3>
        </div>

        {/* Filter Buttons */}

        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {filterOptions.map((option) => (
            <button
              key={option}
              onClick={() => setSelectedCategory(option)}
              className={`px-4 py-2 rounded-full border transition duration-300 ${
                selectedCategory === option
                  ? "bg-purple-600 text-white"
                  : "bg-white text-black border-black"
              }`}
            >
              {option}
            </button>
          ))}
        </div>

        {/* Healing Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredHealings.map((healing, index) => (
              <motion.div
                key={healing.title + index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-gray-200 p-4  rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <img
                  src={healing.image}
                  alt={healing.title}
                  className="w-full h-48 object-cover rounded-xl mb-4"
                />
                <h3 className="text-xl font-semibold text-black mb-2">
                  {healing.title}
                </h3>
                <p className="text-gray-600 mb-3">{healing.description}</p>
                <span className="inline-block text-sm text-white bg-purple-500 px-3 py-1 rounded-full">
                  {healing.duration}
                </span>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default HealingCard;
