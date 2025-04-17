
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import SocialMedia from "../Components/SocialMedia";

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
      image: "/assets/testimonials/client1.jpg",
      text: `The power of collective healing, the power of facilitator.
  
  In this particular career FC I choose to heal the curse upon me or my family. After every collective course I take under Eshanye, I see great changes around me and my family members. My sister and father's relationship was in a very negative state for more than 2.5 decades. Today, both behave like best friends. Just like that. Thank you Esha.`,
    },
    {
      name: "Veena",
      location: "India",
      image: "/assets/testimonials/client2.jpg",
      text: `I went through an entity release session from Jayashree Ma'am, an Akashic Reading session from Vidya Kaval Ma'am, and my younger brother went through inner child healing sessions from Eshanye. I've found profound healing and shifts in my life after them. I'm beyond grateful to HealClinic for the healers here who are experienced, compassionate, and do their best to genuinely help you with your issue.`,
    },
    {
      name: "Sadaf",
      location: "India",
      image: "/assets/testimonials/client3.jpg",
      text: `Dipti has been my go-to person whenever I felt stuck. She listens first and helps find the most appropriate healing modality. My sessions with Swati have greatly helped me in terms of physical health and moving forward in life. She's honest and doesn't do a journey just for the sake of it. Her guidance and journeys are inherently powerful.`,
    },
    {
      name: "Vanathi",
      location: "India",
      image: "/assets/testimonials/client4.jpg",
      text: `I did a Family Constellation for a relationship which had been cold and awkward for the last 20 years. Though things didn’t shift immediately, a month later I noticed warmth and laughter in our relationship. I’m grateful to Eshanye for this wonderful modality.`,
    },
    {
      name: "Parul",
      location: "India",
      image: "/assets/testimonials/client5.jpg",
      text: `Very satisfactory interaction with Smt Jayashree M over telephonic chakra healing. Her level of intuition and empathy was very high. Never felt like it was the first time speaking over the phone.`,
    },
    {
      name: "Shantanu Ghosal",
      location: "India",
      image: "/assets/testimonials/client6.jpg",
      text: `Thank you Eshanye for holding such a safe and positive space for me. It was easy to share without fear of judgment. She helped me go deeper to the root of my issues and empowered me to know my next steps. Thank you Deepti for helping me find the right support.`,
    },
  ];

  return (
    <div className="w-full  font-title">
        <div className="max-w-[1300px] mx-auto">

      {/* Youttube Vido section */}

      <section className="bg-gray-200 py-12 px-4 md:px-10 lg:px-20 font-title">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-900 mb-8 text-center">
          Divine Magic Healing Space Gallery
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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

      <div className="w-full py-12 bg-white font-title">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl sm:text-4xl lg:text-5xl font-semibold mb-8">
            What Our Clients Say
          </h2>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 3000 }}
            navigation={true}
            pagination={{ clickable: true }}
            className="testimonial-slider"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide
                key={index}
                className="flex justify-center items-center"
              >
                <div className="bg-white p-8 rounded-2xl shadow-lg max-w-md mx-auto text-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-20 h-20 rounded-full mx-auto mb-4"
                  />
                  <p className="text-xl text-gray-800 mb-4 whitespace-pre-line">
                    "{testimonial.text}"
                  </p>
                  <p className="font-semibold text-lg text-yellow-500">
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
     


           <SocialMedia/>

       </div>
      </div>
    
   
  );
};

export default Testimonals;
