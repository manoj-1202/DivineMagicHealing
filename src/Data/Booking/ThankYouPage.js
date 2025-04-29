import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const ThankYouPage = () => {
  const { state } = useLocation();
  const { name = 'Guest', itemTitle = 'your item', type = 'item' } = state || {};

  return (
    <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
      <h1 className="text-3xl sm:text-4xl font-semibold text-gray-800 mb-6">
        Thank You, {name}!
      </h1>
      <p className="text-lg text-gray-600 mb-4">
        Your booking for the {type} <strong>{itemTitle}</strong> has been successfully received.
      </p>
      <p className="text-lg text-gray-600 mb-8">
        We’ll send you a confirmation email soon with further details.
      </p>
      <Link to="/">
        <button className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600">
          Return to Home
        </button>
      </Link>
    </div>
  );
};

export default ThankYouPage;