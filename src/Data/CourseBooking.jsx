// src/pages/CourseData.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { coursesData} from "../Data/CoursesData"

const CourseBooking = () => {
  const { courseTitle } = useParams();

  const course = coursesData.find(
    (c) => c.title.toLowerCase().replace(/\s+/g, '-') === courseTitle
  );

  if (!course) {
    return (
      <div className="text-center py-20 text-gray-600">
        <h1 className="text-2xl font-semibold">Course not found</h1>
      </div>
    );
  }

  return (

    <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
  <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-semibold text-center mb-8 text-gray-800">
    Book Your Course: {course.title}
  </h1>

  <div className="flex flex-col md:flex-row md:items-start gap-8">
    {/* Left Column - Course Details */}
    <div className="md:w-1/2">
      <img
        src={course.image}
        alt={course.title}
        className="w-full h-64 object-cover rounded-xl shadow-md mb-4"
      />
      <p className="text-gray-700 mb-2">
        <strong>Category:</strong> {course.category}
      </p>
      <p className="text-gray-700 mb-2">
        <strong>Duration:</strong> {course.duration}
      </p>
      <p className="text-gray-600 text-lg">{course.description}</p>
    </div>

    {/* Right Column - Booking Form */}
    <div className="md:w-1/2">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full">
        <form className="space-y-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
            type="tel"
            placeholder="Your Phone Number"
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button
            type="submit"
            className="bg-green-500 text-white w-full py-3 rounded-lg hover:bg-green-600"
          >
            Confirm Booking
          </button>
        </form>
      </div>
    </div>
  </div>
</div>

  );
};

export default CourseBooking;
