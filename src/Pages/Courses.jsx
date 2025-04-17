import React, { useState } from "react";
import { Link } from "react-router-dom";
import { coursesData } from "../Data/CoursesData";
import { motion, AnimatePresence } from "framer-motion";

const filterOptions = ["All", "Healing", "Spiritual", "Mental"];

const Courses = () => {
  const [selectedFilter, setSelectedFilter] = useState("All");

  const filteredCourses =
    selectedFilter === "All"
      ? coursesData
      : coursesData.filter((course) => course.category === selectedFilter);

  return (
    <div className="w-full bg-gray-100 py-12 border-t border-purple-200 font-title">
    <h2 className="text-center text-2xl sm:text-3xl font-bold text-black mb-10">
        Our Courses
      </h2>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back button */}
        <div className="w-full px-4 sm:px-6 lg:px-8 mb-4">
          <h3 className="text-center sm:text-left text-black text-base sm:text-lg font-medium">
            <Link
              to="/"
              className="hover:underline hover:text-gray-500 transition-colors duration-200"
            >
              Home
            </Link>
            <span className="mx-2">|</span>
            <span className="text-gray-500">Courses</span>
          </h3>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
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

        {/* Course Cards with Animation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {filteredCourses.map((course, idx) => (
              <motion.div
                key={course.title + idx}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-gray-200 p-4  rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover rounded-xl mb-4"
                />
                <h2 className="text-xl font-bold  text-black mb-2">
                  {course.title}
                </h2>
                <p className="text-gray-600 text-sm mb-2">
                  Duration: {course.duration}
                </p>
                <p className="text-gray-700 text-sm line-clamp-3 mb-4">
                  {course.description}
                </p>
                <div className="flex justify-between">
                  <span className="text-sm font-medium text-blue-500 hover:underline">
                    View Details
                  </span>
                  <Link
                    to={`/courseBooking/${course.title
                      .replace(/ /g, "-")
                      .toLowerCase()}`}
                  >
                    <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-400">
                      Book Now
                    </button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Courses;
