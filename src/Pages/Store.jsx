import React, { useEffect, useState } from "react";
import { products } from "../Data/StoreData";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import storeBanner from "../Assets/about/storeBanner.png";
import SocialMedia from "../Components/SocialMedia";

const filterOptions = ["All", "Healing", "Spiritual", "Accessories"];

const Store = () => {
  const [selectedFilter, setSelectedFilter] = useState("All");

  const filteredProducts =
    selectedFilter === "All"
      ? products
      : products.filter((product) => product.category === selectedFilter);

      useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

  return (
    <div className="w-full bg-gray-100 font-title">
      {/* Healing banner */}
      <div className="max-w-[1300px] mx-auto">
        <div
          className="relative w-full h-[250px] sm:h-[200px] lg:h-[200px] bg-center bg-cover"
          style={{ backgroundImage: `url(${storeBanner})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/30 rounded-b-xl"></div>
          <div className="absolute inset-0 flex justify-center items-center text-center px-6">
            <div className="text-white z-10 space-y-4">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold drop-shadow-lg">
                Energy Products Store
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

      {/* Back button and Filter */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full px-4 sm:px-6 lg:px-8 mt-5 flex flex-col sm:flex-row justify-between items-center">
          <h3 className="text-center sm:text-left text-black text-base sm:text-lg font-medium mb-4 sm:mb-0">
            <Link
              to="/"
              className="hover:underline hover:text-gray-500 transition-colors duration-200"
            >
              Home
            </Link>
            <span className="mx-2">|</span>
            <span className="text-gray-500">Store</span>
          </h3>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mt-5">
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

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          <AnimatePresence>
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <motion.div
                  key={product.id}
                  className="bg-gray-200 p-4 text-black rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 50 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-2xl sm:text-3xl md:text-base font-semibold mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mb-2">{product.description}</p>
                  <p className="text-sm text-gray-500 mb-2">
                    {product.category}
                  </p>
                  <div className="text-lg font-bold text-green-600 mb-4">
                    {product.price}
                  </div>
                  <Link
                    to={`/products/${product.name
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                  >
                    <button className="mt-2 w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 rounded-xl transition-colors duration-300">
                      Book Now
                    </button>
                  </Link>
                </motion.div>
              ))
            ) : (
              <motion.p
                className="text-gray-600 col-span-full text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                No products found for this category.
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </div>

      <SocialMedia />
    </div>
  );
};

export default Store;
