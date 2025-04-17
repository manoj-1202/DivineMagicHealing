import bannerB from "../Assets/bannerB.jpg";
import facebook from "../Assets/socialicons/facebook.png";
import instagram from "../Assets/socialicons/instagram.png";
import linkedin from "../Assets/socialicons/linkedin.png";
import social from "../Assets/socialicons/social.png";
import twitter from "../Assets/socialicons/twitter.png";
import youtube from "../Assets/socialicons/youtube.png";
import monk from "../Assets/banner/monk.jpg";
import healing from "../Assets/banner/healing.jpg";
import yoga from "../Assets/banner/yoga.jpg";
import singing from "../Assets/banner/singing.jpg";

import { Link } from "react-router-dom";

const Banner = () => {
  const SocialLink = ({ icon, label, url }) => (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 text-gray-800 hover:text-amber-600 transition"
    >
      <span className="w-6 h-6">{icon}</span>
      <span className="capitalize text-lg font-medium">{label}</span>
    </a>
  );

  return (
    <div className="w-full  font-title">
       <div className="max-w-[1300px]  mx-auto px-2 sm:px-0 lg:px-0">
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

      {/* scan session */}

      <section className="py-12 px-4 md:px-10 lg:px-20 bg-gray-200 font-title">
        <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
          {/* Left Content */}
          <div className="text-center lg:text-left max-w-xl">
            <h2 className="text-xl sm:text-3xl lg:text-5xl font-bold text-gray-900 mb-4 ">
              Our Core Vision
            </h2>
            <p className="text-gray-600 text-lg mb-6">
              <span className="text-purple-700 font-semibold">Get started</span>{" "}
              Meditation is one of the greatest ways to obtain inner peace and
              harmony. It is believed that meditation helps to accustom mind to
              positive thinking and calmness. When our mind is serene, it means
              that we are free from stress and open to true happiness. Everyone
              is invited to join our meditation lesson and enjoy the process.
            </p>
            <Link
              to="healingCard"
              className="hover:underline hover:text-purple-900 transition-colors duration-200"
            >
              <button className="bg-teal-500 hover:bg-teal-600 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300">
                Know More Healing
              </button>
            </Link>
            <p className="text-sm text-gray-500 mt-4">
              Medidate do not delay... least
              <br />
              Your later regret it
            </p>
            <h1>"Gautama Buddha"</h1>
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src={healing}
              alt="Energy Scan Mockup"
              className="w-full max-w-[500px] object-contain"
            />
          </div>
        </div>
      </section>

      {/* Stay connect */}
    
      <section className="bg-gray-200 py-12 px-4 md:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* Left Image */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src={monk}
              alt="Stay Connected"
              className="w-full max-w-[500px] object-contain"
            />
          </div>

          {/* Right Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Stay Connected with
            </h2>
            <p className="text-gray-700 text-lg mb-6">
              Divine Magic Healing Space
              <br className="block lg:hidden" /> on Social Media
            </p>

            <div className="space-y-4 text-left">
              <SocialLink
                icon={<img src={facebook} alt="Facebook" className="w-5 h-5" />}
                label="facebook"
                url="https://facebook.com"
              />
              <SocialLink
                icon={<img src={twitter} alt="X" className="w-5 h-5" />}
                label="X"
                url="https://twitter.com"
              />
              <SocialLink
                icon={<img src={youtube} alt="YouTube" className="w-5 h-5" />}
                label="youtube"
                url="https://youtube.com"
              />
              <SocialLink
                icon={<img src={social} alt="WhatsApp" className="w-5 h-5" />}
                label="whatsapp"
                url="https://wa.me/your-number"
              />
              <SocialLink
                icon={
                  <img src={instagram} alt="Instagram" className="w-5 h-5" />
                }
                label="instagram"
                url="https://instagram.com"
              />
              <SocialLink
                icon={<img src={linkedin} alt="LinkedIn" className="w-5 h-5" />}
                label="linkedin"
                url="https://linkedin.com"
              />
            </div>
          </div>
        </div>
      </section>
   

      {/* Another one */}


    {/* Top testimonial */}
    <div className="w-full bg-gray-200 py-12 ">

      <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
          <img
            src={singing}
            alt="Testimonial 2"
            className="rounded-2xl w-full max-w-sm shadow-xl"
          />
          <div className="max-w-xl text-base sm:text-lg md:text-base lg:text-lg">
            <h2 className="text-2xl sm:text-3xl md:text-2xl font-semibold mb-4 leading-snug">
              Releasing over 70 pounds of weight was an extra unexpected
              benefit.
            </h2>
            <p className="mb-2 leading-relaxed text-base sm:text-lg md:text-base">
              “I initially went to Missy because I felt stagnant and unsettled
              in my life. I had recently retired and was burned out…”
            </p>
            <p className="italic mt-4 text-right text-sm sm:text-base">
              – Dorothy, Retired Teacher and Lifelong Learner
            </p>
          </div>
        </div>


   {/* Bottom testimonial */}
          <section className="bg-gray-200 py-20 px-4 sm:px-10 lg:px-24 relative text-black ">
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
          <img
            src={yoga}
            alt="Testimonial 1"
            className="rounded-2xl w-full max-w-sm shadow-xl"
          />
          <div className="max-w-xl text-base sm:text-lg md:text-base lg:text-lg">
            <h2 className="text-2xl sm:text-3xl md:text-2xl font-semibold mb-4 leading-snug">
              Missy was responsible for getting me through the most challenging
              two years of my life.
            </h2>
            <p className="mb-2 leading-relaxed text-base sm:text-lg md:text-base">
              “I was faced with the death of my partner, the mental and physical
              decline of my father, and my own physical ailments...”
            </p>
            <p className="italic mt-4 text-right text-sm sm:text-base">
              – Jacqueline
            </p>
          </div>
        </div>
      </section>
      </div>
      </div>
    </div>
  );
};

export default Banner;
