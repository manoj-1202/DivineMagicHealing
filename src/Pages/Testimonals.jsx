import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import videoBanner from "../Assets/about/videoBanner.png";
import testiBanner from "../Assets/about/testiBanner.png";
import serviceBanner from "../Assets/about/serviceBanner.png";
import { services } from "../Data/ServicesData";
import { Link } from "react-router-dom";

import reiki from "../Assets/courses/Reiki.jpg";
import ho from "../Assets/courses/Ho.jpg";
import law from "../Assets/courses/Law.jpg";
import pendulum from "../Assets/courses/Pendulum.jpg";
import crystals from "../Assets/courses/Crystals.jpg";
import gratitude from "../Assets/courses/Gratitude.jpg";

const Testimonals = () => {
  const [playingIndex, setPlayingIndex] = useState(null);

  const getYoutubeID = (url) => {
    const regex =
      /(?:\/|v=|be\/|embed\/|shorts\/|watch\?v=|youtu\.be\/|\/live\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
  };

  const videos = [
    "https://youtu.be/XHw0bDa16xA?si=N2N7oOSmUDCe1cis",
    "https://youtu.be/unCya_-8ECs?si=r-6T1hFTwW8cQYHw",
    "https://youtu.be/vPvIxwh9N2w?si=rN1ysYh3_Go3J_vi",
    "https://www.youtube.com/live/Id_uSx5fzLQ?si=aSg4CIiNs-t7pEQa",
    "https://youtu.be/DeymFcnRZqU?si=9LYh8jt8OVref3kC",
    "https://youtu.be/XpqCYC5ncF0?si=eahL7Y0QcUbWQHxf",
  ];

  const testimonials = [
    {
      name: "Anonymous",
      location: "India",
      image: reiki,
      text: `The power of collective healing, the power of facilitator.
            In this particular career FC I choose to heal the curse upon me or my family. I see great changes around me and my family members.`,
    },
    {
      name: "Veena",
      location: "India",
      image: ho,
      text: `I went through an entity release session from Jayashree Ma'am, an Akashic Reading session from Vidya Kaval Ma'am, and my younger brother went through inner child healing sessions from Eshanye.`,
    },
    {
      name: "Sadaf",
      location: "India",
      image: law,
      text: `Dipti has been my go-to person whenever I felt stuck. She listens first and helps find the most appropriate healing modality. greatly helped me in terms of physical health and moving forward in life.`,
    },
    {
      name: "Vanathi",
      location: "India",
      image: gratitude,
      text: `I did a Family Constellation for a relationship which had been cold and awkward for the last 20 years. Though things didn’t shift immediately, a month later I noticed warmth and laughter in our relationship.`,
    },
    {
      name: "Parul",
      location: "India",
      image: pendulum,
      text: `Very satisfactory interaction with Smt Jayashree M over telephonic chakra healing. Her level of intuition and empathy was very high. Never felt like it was the first time speaking over the phone.`,
    },
    {
      name: "Shantanu Ghosal",
      location: "India",
      image: crystals,
      text: `Thank you Eshanye for holding such a safe and positive space for me. It was easy to share without fear of judgment. She helped me go deeper to the root.`,
    },
  ];

  return (
    <>
      <div className="w-full font-title ">
        <div className="max-w-[1300px] mx-auto">
          {/* headding */}
          <div
            className="relative w-full h-[250px] sm:h-[200px] lg:h-[200px] bg-center bg-cover  overflow-hidden shadow-lg"
            style={{ backgroundImage: `url(${videoBanner})` }}
          >
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0 flex justify-center items-center text-center px-6"
            >
              <div className="text-white z-10 space-y-4">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold drop-shadow-xl">
                  Divine Magic Healing Space Gallery
                </h1>
                <p className="text-sm md:text-base font-light text-gray-200 max-w-xl mx-auto">
                  Explore transformational journeys through our curated video
                  collection.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Youtube Video Section */}
          <section className="py-5 px-4 md:px-10 lg:px-20 bg-gray-100">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10"
            >
              {videos.map((url, idx) => {
                const id = getYoutubeID(url);
                const thumbnail = `https://img.youtube.com/vi/${id}/hqdefault.jpg`;

                return (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="aspect-video w-full overflow-hidden rounded-xl shadow-xl bg-white cursor-pointer relative"
                    onClick={() => setPlayingIndex(idx)}
                  >
                    {playingIndex === idx ? (
                      <iframe
                        className="w-full h-full"
                        src={`https://www.youtube.com/embed/${id}?autoplay=1`}
                        title={`Samyama Video ${idx + 1}`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    ) : (
                      <div className="w-full h-full relative">
                        <img
                          src={thumbnail}
                          alt={`Video ${idx + 1}`}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-12 w-12 text-white"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </motion.div>
          </section>

          {/* services etc */}
          <div
            className="relative w-full h-[250px] sm:h-[200px] lg:h-[200px] bg-center bg-cover "
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

          <div className="snap-x flex overflow-x-auto scrollbar-hide  space-x-4 py-5 px-6 sm:px-10 lg:px-20 text-center bg-gray-100">
            {services.map((services, index) => (
              <div
                key={index}
                className="snap-start min-w-[250px] bg-white rounded-lg shadow-md overflow-hidden flex flex-col justify-between"
              >
                {/* Image Section */}
                <img
                  src={services.image}
                  alt={services.title}
                  className="w-full h-48 object-cover"
                />

                {/* Content Section */}
                <div className="flex flex-col justify-between flex-grow p-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      {services.title}
                    </h3>
                    <p className="text-sm text-gray-500">{services.category}</p>
                    <p className="text-sm text-gray-600 mt-1">
                      {services.duration}
                    </p>
                    <p className="text-sm text-gray-700 mt-2 line-clamp-3">
                      {services.description}
                    </p>
                  </div>

                  {/* Button Section */}
                  <div className="mt-4">
                    <Link
                      to={`/services/${services.title
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                    >
                      <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 w-full transition-colors duration-300">
                        Book Now
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* What Our Clients Say  */}
      <div className="w-full  font-title">
        <div className="max-w-[1300px] mx-auto">
          {/* headding */}
          <div
            className="relative w-full h-[250px] sm:h-[200px] lg:h-[200px] bg-center bg-cover  overflow-hidden shadow-lg"
            style={{ backgroundImage: `url(${testiBanner})` }}
          >
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0 flex justify-center items-center text-center px-6"
            >
              <div className="text-white z-10 space-y-4">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold drop-shadow-xl">
                  What Our Clients Say
                </h1>
              </div>
            </motion.div>
          </div>

          <div className="bg-gray-100 px-4 sm:px-6 lg:px-8 py-10">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={30}
              loop={true}
              autoplay={{ delay: 3000 }}
              navigation={true}
              pagination={{ clickable: true }}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                640: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
              className="testimonial-slider "
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide
                  key={index}
                  className="flex justify-center items-center"
                >
                  <div className="bg-white p-5 rounded-2xl shadow-lg max-w-md mx-auto text-center ">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                    />
                    <p className="text-lg text-gray-900 mb-4 whitespace-pre-line">
                      "{testimonial.text}"
                    </p>
                    <p className="font-semibold text-lg text-purple-700">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-500">
                      {testimonial.location}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonals;
