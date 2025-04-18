import bannerB from "../Assets/bannerB.jpg";
import shaman from "../Assets/banner/shaman.jpg";
import healing from "../Assets/banner/healing.jpg";
import yoga from "../Assets/banner/yoga.jpg";
import singing from "../Assets/banner/singing.jpg";
import reiki from "../Assets/courses/Reiki.jpg";
import ho from "../Assets/courses/Ho.jpg";
import law from "../Assets/courses/Law.jpg";
import courseBanner from "../Assets/about/courseBanner.png";
import serviceBanner from "../Assets/about/serviceBanner.png";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="w-full  font-title">
      <div className="max-w-[1300px] mx-auto">
        {/* Top Banner */}
        <div
          className="relative w-full h-[450px] sm:h-[500px] lg:h-[600px] bg-cover bg-center"
          style={{ backgroundImage: `url(${bannerB})` }} //
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
          {/* Overlay */}
          <div className="absolute inset-0 flex justify-center items-center text-center px-4 sm:px-6 lg:px-8">
            <div className="text-white z-10">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
                Welcome to Divine Magic Healing Space
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl mb-6">
                A sanctuary for healing, balance, and inner peace. Discover your
                true self.
              </p>

              <div className="flex flex-col sm:flex-row justify-center items-center gap-3 lg:mt-20 px-4">
                <a
                  href="/services"
                  className="px-4 py-2 sm:px-6 sm:py-3 bg-yellow-400 text-gray-900 rounded-full text-base sm:text-lg font-semibold hover:bg-yellow-500 transition-all duration-300 w-full sm:w-auto text-center"
                >
                  Explore Our Services
                </a>
                <a
                  href="/healingCard"
                  className="px-4 py-2 sm:px-6 sm:py-3 bg-yellow-400 text-gray-900 rounded-full text-base sm:text-lg font-semibold hover:bg-yellow-500 transition-all duration-300 w-full sm:w-auto text-center"
                >
                  Explore Healing Modalities
                </a>
                <a
                  href="/courses"
                  className="px-4 py-2 sm:px-6 sm:py-3 bg-yellow-400 text-gray-900 rounded-full text-base sm:text-lg font-semibold hover:bg-yellow-500 transition-all duration-300 w-full sm:w-auto text-center"
                >
                  Explore Our Courses
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Real Stories & Real Transformations. */}

        <div
          className="w-full bg-cover bg-center bg-no-repeat relative"
          style={{ backgroundImage: `url(${shaman})` }}
        >
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-white/60 backdrop-blur-sm"></div>

          <div className="relative z-10">
            {/* Intro Section */}
            <div className="flex justify-center px-4 sm:px-6 lg:px-20 py-2">
            <div className="bg-gray-200 shadow-lg rounded-3xl p-5 text-center max-w-4xl mx-auto border border-gray-200">
                <h2 className="text-3xl sm:text-3xl font-bold text-black mb-4">
                  Real Stories & Real Transformations.
                </h2>
                <p className="text-gray-900 text-lg leading-relaxed">
                  Discover how lives have been deeply touched and transformed
                  through Divine Magic Healing Space.
                </p>
              </div>
            </div>

            {/* Top Testimonial */}
            <div className="max-w-7xl mx-auto px-6 lg:px-20 mt-10">
              <div className="flex flex-col lg:flex-row-reverse items-center gap-12 mb-20">
                <img
                  src={singing}
                  alt="Testimonial"
                  className="w-full max-w-[250px] object-contain"
                />
                <div className="max-w-xl text-center lg:text-left">
                  <h2 className="text-2xl sm:text-2xl font-semibold text-black mb-4 leading-snug">
                    Releasing over 70 pounds of weight was an extra unexpected
                    benefit.
                  </h2>
                  <p className="text-black text-base sm:text-base leading-relaxed">
                    “I initially went to Missy because I felt stagnant and
                    unsettled in my life. I had recently retired and was burned
                    out…”
                  </p>
                  <p className="italic mt-4 text-sm sm:text-base text-gray-900 text-right">
                    – Dorothy, Retired Teacher and Lifelong Learner
                  </p>
                </div>
              </div>

              {/* Bottom Testimonial */}
              <div className="flex flex-col lg:flex-row items-center gap-12 ">
                <img
                  src={yoga}
                  alt="Testimonial"
                  className="w-full max-w-[250px] object-contain mb-5"
                />
                <div className="max-w-xl text-center lg:text-left">
                  <h2 className="text-2xl sm:text-2xl font-semibold text-black mb-4 leading-snug">
                    Missy was responsible for getting me through the most
                    challenging two years of my life.
                  </h2>
                  <p className="text-black text-base sm:text-base leading-relaxed">
                    “I was faced with the death of my partner, the mental and
                    physical decline of my father, and my own physical
                    ailments...”
                  </p>
                  <p className="italic mt-4 text-sm sm:text-base text-gray-900 text-right">
                    – Jacqueline
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Our core vesion */}

        <section className="py-5 px-4 md:px-10 lg:px-20 bg-gray-100 font-title">
          {/* Page Heading */}
          <div className="flex justify-center px-4 sm:px-6 lg:px-20 py-2">
            <div className="bg-gray-200 shadow-lg rounded-3xl p-5 text-center max-w-4xl mx-auto border border-gray-200">
            <h2 className="text-3xl sm:text-3xl font-bold text-black mb-4">
                Step Into a World of Inner Peace & Healing
              </h2>
              <p className="text-lg sm:text-xl text-gray-600">
                Discover peace, purpose, and transformation through our holistic
                services and guided healing sessions.
              </p>
            </div>
          </div>

          {/* Section Content */}
          <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
            {/* Left Content */}
            <div className="w-full lg:w-1/2 bg-white p-8 rounded-3xl shadow-lg border border-gray-200">
              {/* Heading as Card */}
              <div className="bg-purple-50 shadow-inner rounded-xl p-6 mb-6">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-black">
                  Our Core Vision
                </h2>
              </div>

              {/* Description */}
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                <span className="text-purple-900 font-semibold underline decoration-purple-300">
                  Get started
                </span>{" "}
                — Meditation is one of the greatest ways to obtain inner peace
                and harmony. It is believed that meditation helps to accustom
                the mind to positive thinking and calmness. When our mind is
                serene, we are free from stress and open to true happiness.
                Everyone is invited to join our meditation lesson and enjoy the
                process.
              </p>

              {/* Button */}
              <Link to="healingCard" className="inline-block mb-10">
                <button className="bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-900 text-white font-bold px-8 py-3 rounded-full shadow-md hover:shadow-xl transition-all duration-300">
                  Know More Healing
                </button>
              </Link>

              {/* Quote */}
              <div className="text-center lg:text-right">
                <p className="text-sm italic text-gray-600 leading-snug">
                  "Medidate, do not delay... <br />
                  or you may regret it later."
                </p>
                <h1 className="text-md font-semibold mt-2 text-purple-800">
                  — Gautama Buddha
                </h1>
              </div>
            </div>

            {/* Right Image */}
            <div className="w-full lg:w-1/2 flex justify-center mt-5">
              <img
                src={healing}
                alt="Energy Scan Mockup"
                className="w-full max-w-md object-contain rounded-xl shadow-md"
              />
            </div>
          </div>
        </section>

        {/* course etc */}
        <div
          className="relative w-full h-[250px] sm:h-[200px] lg:h-[200px] bg-center bg-cover"
          style={{ backgroundImage: `url(${courseBanner})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/30 rounded-b-xl"></div>
          <div className="absolute inset-0 flex justify-center items-center text-center px-6">
            <div className="text-white z-10 space-y-4">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold drop-shadow-lg">
                Courses
              </h1>
              <p className="text-base sm:text-lg lg:text-xl font-light tracking-wide max-w-3xl mx-auto">
                Learn Various Modalities of Healing Learn in-depth about the
                deeper sciences of energy and implement their superpowers in
                your life.
              </p>
            </div>
          </div>
        </div>
        <div className="py-5 px-6 sm:px-10 lg:px-20 text-center">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {/* Card 1 */}
            <div className="bg-white shadow-lg rounded-2xl overflow-hidden">
              <img
                src={reiki}
                alt="Reiki"
                className="w-full h-40 object-cover"
              />
              <div className="p-4 space-y-2">
                <h3 className="text-xl font-semibold text-black">
                  Reiki Level -1, 2, 3 & 4
                </h3>
                <p className="text-sm text-gray-500">{`Category: Healing | Duration: 4 Weeks`}</p>
                <p className="text-gray-700 text-sm">
                  Comprehensive Reiki training covering all four levels of
                  healing energy work.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white shadow-lg rounded-2xl overflow-hidden">
              <img
                src={ho}
                alt="Ho’oponopono"
                className="w-full h-40 object-cover"
              />
              <div className="p-4 space-y-2">
                <h3 className="text-xl font-semibold text-black">
                  Ho’oponopono Basic & Advanced
                </h3>
                <p className="text-sm text-gray-500">{`Category: Spiritual | Duration: 2 Days`}</p>
                <p className="text-gray-700 text-sm">
                  Ancient Hawaiian practice for reconciliation and forgiveness,
                  taught in both basic and advanced levels.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white shadow-lg rounded-2xl overflow-hidden">
              <img
                src={law}
                alt="Law of Attraction"
                className="w-full h-40 object-cover"
              />
              <div className="p-4 space-y-2">
                <h3 className="text-xl font-semibold text-black">
                  Law of Attraction – Advanced Manifestation
                </h3>
                <p className="text-sm text-gray-500">{`Category: Mental | Duration: 1 Week`}</p>
                <p className="text-gray-700 text-sm">
                  Master powerful techniques to manifest desires using the Law
                  of Attraction.
                </p>
              </div>
            </div>

            {/* View More Card */}
            <Link
              to="/courses"
              className="bg-purple-100 border-2 border-dashed border-purple-300 rounded-2xl flex items-center justify-center text-purple-700 hover:bg-purple-200 transition cursor-pointer"
            >
              <div className="text-center p-4">
                <h3 className="text-lg font-semibold">View More Courses</h3>
                <p className="text-sm">
                  Explore all our healing, mental & spiritual courses
                </p>
              </div>
            </Link>
          </div>
        </div>

        {/* services etc */}
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
                deeper sciences of energy and implement their superpowers in
                your life.
              </p>
            </div>
          </div>
        </div>
        <div className="py-5 px-6 sm:px-10 lg:px-20 text-center">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {/* Card 1 */}
            <div className="bg-white shadow-lg rounded-2xl overflow-hidden">
              <img
                src={reiki}
                alt="Reiki"
                className="w-full h-40 object-cover"
              />
              <div className="p-4 space-y-2">
                <h3 className="text-xl font-semibold text-black">
                  Reiki Level -1, 2, 3 & 4
                </h3>
                <p className="text-sm text-gray-500">{`Category: Healing | Duration: 4 Weeks`}</p>
                <p className="text-gray-700 text-sm">
                  Comprehensive Reiki training covering all four levels of
                  healing energy work.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white shadow-lg rounded-2xl overflow-hidden">
              <img
                src={ho}
                alt="Ho’oponopono"
                className="w-full h-40 object-cover"
              />
              <div className="p-4 space-y-2">
                <h3 className="text-xl font-semibold text-black">
                  Ho’oponopono Basic & Advanced
                </h3>
                <p className="text-sm text-gray-500">{`Category: Spiritual | Duration: 2 Days`}</p>
                <p className="text-gray-700 text-sm">
                  Ancient Hawaiian practice for reconciliation and forgiveness,
                  taught in both basic and advanced levels.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white shadow-lg rounded-2xl overflow-hidden">
              <img
                src={law}
                alt="Law of Attraction"
                className="w-full h-40 object-cover"
              />
              <div className="p-4 space-y-2">
                <h3 className="text-xl font-semibold text-black">
                  Law of Attraction – Advanced Manifestation
                </h3>
                <p className="text-sm text-gray-500">{`Category: Mental | Duration: 1 Week`}</p>
                <p className="text-gray-700 text-sm">
                  Master powerful techniques to manifest desires using the Law
                  of Attraction.
                </p>
              </div>
            </div>

            {/* View More Card */}
            <Link
              to="/services"
              className="bg-purple-100 border-2 border-dashed border-purple-300 rounded-2xl flex items-center justify-center text-purple-700 hover:bg-purple-200 transition cursor-pointer"
            >
              <div className="text-center p-4">
                <h3 className="text-lg font-semibold">View More Courses</h3>
                <p className="text-sm">
                  Explore all our healing, mental & spiritual courses
                </p>
              </div>
            </Link>
          </div>
        </div>

        {/*Page Layout divs  */}
      </div>
    </div>
  );
};

export default Banner;
