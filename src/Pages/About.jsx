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
            Divine Magic Healing Space is a sacred & Holistic Healing Haven & I use a Multi-modality Healing technique known as Intuitive Energy Healing (IEH) and I render all Healing sessions in remote/distance mode itself.
          </p>
        </div>

        {/* Our Approach + What Sets Us Apart */}
        <section className="bg-purple-50 py-16 px-6 sm:px-10 lg:px-20">
          <div className="max-w-6xl mx-auto space-y-12">
            {/* Our Approach Card */}
            <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-10 border-l-8 border-purple-400 transition hover:shadow-2xl">
              <h2 className="text-2xl sm:text-3xl font-bold text-purple-800 mb-4">
                Integrated Energy Healing (IEH) Sessions
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                IEH Sessions amalgamate elements of Reiki, Pranic Healing, Lama Fera, Quan Yin, Crystal Energies, Quantum Healing, Natural remedies, (Yoga, Bach Flower Remedies & Aromatherapy consultations if Client requests) to create a receptive, relaxing environment where healing can begin.
              </p>
            </div>

            {/* What Sets Us Apart Card */}
            <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-10 border-l-8 border-yellow-400 transition hover:shadow-2xl space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-yellow-600">
                Universal Life Force
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                Our Healing Modalities channel a pure form of healing energy called the 'Universal Life Force'. It is a powerful therapy which can help by increasing your ability to create and improve self-awareness. It helps to free up blocked energies in the body and thus it helps you feel stronger mentally and spiritually. It is a great tool for personal growth and relaxation. It treats the whole person including body, emotions, mind and spirit and creates many beneficial effects including relaxation and feelings of peace, security, and well-being. IEH is a simple, natural, and safe method of spiritual healing and self-improvement that everyone can use.
              </p>
            </div>

            {/* Book Consultation + Commitment */}
            <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-10 border-l-8 border-pink-400 transition hover:shadow-2xl">
              <h2 className="text-2xl sm:text-3xl font-bold text-pink-600 mb-4">
                Our Work as an Energy Healer
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                In my Energy healing sessions, I intuitively connect with each client and utilise the healing modality or approach most suited to them. Through this intuitive connection, I'm able to pinpoint and release issues within the body, mind, and spirit facilitating a profound healing experience and harmony within.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                Our approach is practical and professional, and I enjoy helping others to lead happier lives. I assist my clients and students with personal growth and with deepening their spiritual connection.
              </p>

              <div className="mt-6 bg-gray-50 rounded-2xl p-6 border-l-8 border-teal-400">
                <h3 className="text-xl sm:text-2xl font-semibold text-teal-600 mb-4">
                  Energy Healing Certifications
                </h3>
                <ul className="list-disc ml-6 sm:ml-8 text-gray-700 text-lg leading-relaxed space-y-2">
                  <li>Reiki Grand Master/Teacher - Usui System</li>
                  <li>Crystal Therapist</li>
                  <li>Lama Fera</li>
                  <li>Advanced Ho’oponopono</li>
                  <li>Emotional Freedom Techniques</li>
                  <li>Neuro Linguistic Programming</li>
                </ul>
              </div>

              <h3 className="text-xl sm:text-2xl font-semibold text-blue-600 mt-6 mb-4">
                Professional Qualifications
              </h3>
              <ul className="list-disc ml-6 sm:ml-8 text-gray-700 text-lg leading-relaxed space-y-2">
                <li>Bachelor of Siddha Studies (USA)</li>
                <li>MSc in Yoga for Human Excellence</li>
              </ul>

              <div className="mt-6 text-center">
                <a
                  href="/contact"
                  className="inline-block px-6 py-3 bg-pink-500 text-white font-semibold rounded-full hover:bg-pink-600 transition focus:outline-none focus:ring-2 focus:ring-pink-600 focus:ring-offset-2"
                  aria-label="Book a Consultation"
                >
                  Book a Consultation
                </a>
              </div>
            </div>
          </div>
        </section>
        <SocialMedia />
      </div>
    </div>
  );
};

export default About;