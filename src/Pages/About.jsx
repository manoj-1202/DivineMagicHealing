import about from "../Assets/about/about.jpg";
import SocialMedia from "../Components/SocialMedia";
import React, { useEffect } from "react";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="w-full font-title bg-purple-50">
      <div className="max-w-7xl mx-auto">
        {/* Hero Banner */}
        <div
          className="relative w-full h-[300px] sm:h-[350px] lg:h-[400px] bg-center bg-cover"
          style={{ backgroundImage: `url(${about})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/30 rounded-b-xl"></div>
          <div className="absolute inset-0 flex justify-center items-center text-center px-6">
            <div className="text-white z-10 space-y-4">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold drop-shadow-lg">
                Welcome to Divine Magic Healing Space
              </h1>
              <p className="text-base sm:text-lg lg:text-2xl font-light tracking-wide max-w-3xl mx-auto">
                Empowering Your Journey to Wellness and Transformation
              </p>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className="py-10 px-6 sm:px-10 lg:px-20 text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold text-black mb-4">
            About Divine Magic Healing Space
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed max-w-4xl mx-auto">
            At Divine Magic Healing Space, we offer a sacred space where individuals can reconnect with their true selves, heal emotional wounds, and embark on a path of spiritual transformation. Our mission is to guide you toward peace, balance, and inner awakening through holistic modalities.
          </p>
        </div>

        {/* Our Approach + What Sets Us Apart */}
        <section className="bg-purple-50 py-16 px-6 sm:px-10 lg:px-20">
          <div className="max-w-6xl mx-auto space-y-12">
            {/* Our Approach Card */}
            
            <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-10 border-l-8 border-purple-400 transition hover:shadow-2xl">
              <h2 className="text-2xl sm:text-3xl font-bold text-purple-800 mb-4">
                Our Approach
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                At Gateway of Healing, we embrace a holistic approach that recognizes the interconnectedness of mind, body, and spirit. We understand that true healing encompasses all aspects of one’s being, and we address each dimension with care and expertise. Whether you seek emotional healing, physical well-being, spiritual growth, or personal transformation, we are here to guide and support you every step of the way.
              </p>
            </div>

            {/* What Sets Us Apart Card */}
            <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-10 border-l-8 border-yellow-400 transition hover:shadow-2xl space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-yellow-600">
                What Sets Us Apart
              </h2>
              <ul className="list-disc pl-6 space-y-3 text-gray-700 text-lg">
                <li>
                  <span className="font-semibold text-purple-700">Personalized Care:</span> We recognize that every individual is unique, and our healing plans are tailored to meet your specific needs and goals.
                </li>
                <li>
                  <span className="font-semibold text-purple-700">Integrative Modalities:</span> Dr. Chandni is proficient in diverse healing techniques, allowing her to create a personalized and comprehensive path for your well-being.
                </li>
                <li>
                  <span className="font-semibold text-purple-700">Supportive Community:</span> Join a nurturing environment that celebrates your progress and encourages your growth.
                </li>
                <li>
                  <span className="font-semibold text-purple-700">Transformational Results:</span> Experience profound shifts through our proven healing and coaching services.
                </li>
              </ul>
            </div>

            {/* Book Consultation + Commitment */}
            <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-10 border-l-8 border-pink-400 transition hover:shadow-2xl">
              <h2 className="text-2xl sm:text-3xl font-bold text-pink-600 mb-4">
                Our Commitment
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                Your well-being and success are at the heart of everything we do. At Gateway of Healing, we are devoted to providing you with the highest level of care, compassion, and expertise. Our team will walk alongside you on your healing journey, empowering you to overcome obstacles, embrace your strengths, and achieve your goals.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Are you ready to venture on a transformative journey of healing and personal growth? Allow Gateway of Healing to be your guide as you step into a life of abundance, joy, and fulfilment. Whether you seek emotional healing, clarity of purpose, or personal transformation, we are here to support you on this empowering path.
              </p>

              <div className="mt-6 text-center">
                <a
                  href="/contact"
                  className="inline-block px-6 py-3 bg-pink-500 text-white font-semibold rounded-full hover:bg-pink-600 transition"
                >
                  Book a Consultation
                </a>
              </div>
            </div>
          </div>
        </section>
        <SocialMedia/>
      </div>
    </div>
  );
};

export default About;
