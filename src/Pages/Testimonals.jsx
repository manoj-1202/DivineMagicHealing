import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import reiki from "../Assets/courses/Reiki.jpg";
import ho from "../Assets/courses/Ho.jpg";
import law from "../Assets/courses/Law.jpg";
import pendulum from "../Assets/courses/Pendulum.jpg";
import crystals from "../Assets/courses/Crystals.jpg";
import gratitude from "../Assets/courses/Gratitude.jpg";

const Testimonals = () => {
  const videos = [
    "https://www.youtube.com/embed/xyz1",
    "https://www.youtube.com/embed/xyz2",
    "https://www.youtube.com/embed/xyz3",
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
      text: `Thank you Eshanye for holding such a safe and positive space for me. It was easy to share without fear of judgment. She helped me go deeper to the root of my issues and empowered me to know my next steps.`,
    },
  ];

  return (
    <div className="w-full  font-title">
      <div className="max-w-[1300px] mx-auto">
        {/* Youttube Vido section */}

        <section className="bg-gray-100 py-6 px-4 md:px-10 lg:px-20 font-title">
            {/* Page Heading */}
            <div className="flex justify-center px-4 sm:px-6 lg:px-20 py-2">
            <div className="bg-gray-200 shadow-lg rounded-3xl p-5 text-center max-w-4xl mx-auto border border-gray-400">
            <h2 className="text-3xl sm:text-3xl font-bold text-black mb-4">
            Divine Magic Healing Space Gallery
              </h2>
              
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {videos.map((link, idx) => (
              <div
                key={idx}
                className="aspect-video w-full overflow-hidden rounded-lg shadow-lg"
              >
                <iframe
                  className="w-full h-full"
                  src={link}
                  title={`Samyama Video ${idx + 1}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            ))}
          </div>
        </section>

        {/* What Our Clients Say */}

        <div className="bg-gray-100 px-4 sm:px-6 lg:px-8">
           {/* Page Heading */}
           <div className="flex justify-center px-4 sm:px-6 lg:px-20 py-2">
            <div className="bg-gray-200 shadow-lg rounded-3xl p-5 text-center max-w-4xl mx-auto border border-gray-400">
            <h2 className="text-3xl sm:text-3xl font-bold text-black mb-4">
            What Our Clients Say
              </h2>
              
            </div>
          </div>

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
            className="testimonial-slider"
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
  );
};

export default Testimonals;
