import React from 'react';

const Disclaimer = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-6 sm:p-10 lg:p-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-4 transition-all duration-300 ease-in-out">
          Disclaimer
        </h1>
        <p className="text-sm text-center text-gray-500 mb-10">Last Updated: 03/05/2025</p>

        <section className="mb-8">
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
            Eastern esoteric teachings such as <strong>Yoga</strong>, <strong>Meditation</strong>, and <strong>Energy Healing</strong> offer promising emotional, spiritual, and physical health benefits. However, these practices have yet to be fully researched by the Western academic, medical, and psychological communities. Therefore, <strong>Yoga Therapy</strong>, <strong>Energy Medicine</strong>, or <strong>Energy Healing</strong> is considered <strong>Alternative Medicine</strong> or experimental.
          </p>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
            <strong>Energy Healing</strong> is self-regulated, and the State of Tamil Nadu, India, does not license any Energy Medicine practitioners. It is considered alternative or complementary to the healing arts that are licensed by the State of Tamil Nadu, India.
          </p>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            <strong>Energy Healing</strong> is a natural modality and not a replacement for modern medicine. <strong>Divine Magic Healing Space</strong> does not diagnose or provide any medical advice.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Disclaimer;