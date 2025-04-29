import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios'; 
import { coursesData } from '../CoursesData';
import { healings } from '../HealingData';
import { services } from '../ServicesData';
import { products } from '../StoreData';

const Booking = ({ type }) => {
  const paramKey = {
    course: 'courseTitle',
    healing: 'healingTitle',
    service: 'serviceTitle',
    product: 'productName',
  }[type];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false); 
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { [paramKey]: itemTitle } = useParams();

  const dataSource = {
    course: coursesData,
    healing: healings,
    service: services,
    product: products,
  }[type];

  const config = {
    course: {
      title: 'Book Your Course',
      notFound: 'Course not found',
      buttonColor: 'bg-green-500 hover:bg-green-600',
      ringColor: 'focus:ring-green-500',
      titleColor: 'text-gray-800',
    },
    healing: {
      title: 'Book Healing Session',
      notFound: 'Healing Service not found',
      buttonColor: 'bg-purple-600 hover:bg-purple-700',
      ringColor: 'focus:ring-purple-500',
      titleColor: 'text-purple-800',
    },
    service: {
      title: 'Book Service',
      notFound: 'Service not found',
      buttonColor: 'bg-purple-600 hover:bg-purple-700',
      ringColor: 'focus:ring-purple-500',
      titleColor: 'text-purple-800',
    },
    product: {
      title: 'Book Your Product',
      notFound: 'Product not found',
      buttonColor: 'bg-green-500 hover:bg-green-600',
      ringColor: 'focus:ring-green-500',
      titleColor: 'text-gray-800',
    },
  }[type];

  const item = dataSource.find(
    (i) => i.title?.toLowerCase().replace(/\s+/g, '-') === itemTitle || 
            i.name?.toLowerCase().replace(/\s+/g, '-') === itemTitle
  );

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      setStatus({ type: 'error', message: 'Please fill in all fields' });
      return;
    }

    setLoading(true); 
    setStatus(null); 

    try {
      const response = await axios.post('http://localhost:5000/book', {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        item: {
          title: item.title || item.name,
          category: item.category,
          duration: item.duration,
          price: item.price,
          type,
        },
      });
      setStatus({ type: 'success', message: response.data.message });
      setFormData({ name: '', email: '', phone: '' });
      navigate('/thankYou', {
        state: {
          name: formData.name,
          itemTitle: item.title || item.name,
          type,
        },
      });
    } catch (error) {
      setStatus({
        type: 'error',
        message: error.response?.data?.message || 'Failed to send booking request',
      });
    } finally {
      setLoading(false); 
    }
  };

  if (!item) {
    return (
      <div className="text-center py-20 text-black">
        <h1 className="text-2xl font-semibold">{config.notFound}</h1>
      </div>
    );
  }

  return (
    <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1
        className={`text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-semibold text-center mb-8 ${config.titleColor}`}
      >
        {config.title}: {item.title || item.name}
      </h1>

      {status && (
        <div
          className={`mb-4 p-4 rounded-lg text-center ${
            status.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
          }`}
        >
          {status.message}
        </div>
      )}

      <div className="flex flex-col md:flex-row md:items-start gap-8">
        {/* Left Column - Item Details */}
        <div className="md:w-1/2">
          <img
            src={item.image}
            alt={item.title || item.name}
            className="w-full h-64 object-cover rounded-xl shadow-md mb-4"
          />
          <p className="text-gray-700 mb-2">
            <strong>Category:</strong> {item.category}
          </p>
          {type === 'product' ? (
            <p className="text-gray-700 mb-2">
              <strong>Price:</strong> {item.price}
            </p>
          ) : (
            <p className="text-gray-700 mb-2">
              <strong>Duration:</strong> {item.duration}
            </p>
          )}
          <p className="text-gray-600 text-lg">{item.description}</p>
        </div>

        {/* Right Column - Booking Form */}
        <div className="md:w-1/2">
          <div className="bg-white shadow-lg rounded-xl p-8 w-full">
            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                className={`w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 ${config.ringColor}`}
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleInputChange}
                className={`w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 ${config.ringColor}`}
              />
              <input
                type="tel"
                name="phone"
                placeholder="Your Phone Number"
                value={formData.phone}
                onChange={handleInputChange}
                className={`w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 ${config.ringColor}`}
              />
              <button
                type="submit"
                className={`text-white w-full py-3 rounded-lg ${config.buttonColor} ${
                  loading ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-90'
                } flex items-center justify-center`}
                disabled={loading}
              >
                {loading ? (
                  <>
                    <svg
                      className="animate-spin h-5 w-5 mr-2 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v8H4z"
                      />
                    </svg>
                    Loading...
                  </>
                ) : (
                  'Confirm Booking'
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;