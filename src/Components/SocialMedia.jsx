import React from "react";
import facebook from "../Assets/socialicons/facebook.png";
import instagram from "../Assets/socialicons/instagram.png";
import linkedin from "../Assets/socialicons/linkedin.png";
import social from "../Assets/socialicons/social.png";
import twitter from "../Assets/socialicons/twitter.png";
import youtube from "../Assets/socialicons/youtube.png";
import sociall from "../Assets/banner/social.jpg";

const SocialMedia = () => {
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
      <div className="max-w-[1300px] mx-auto">
        {/* Stay connected section */}
        <section className="bg-gray-100 py-12 px-4 md:px-10 lg:px-20">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
            {/* Left Image */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <img
                src={sociall}
                alt="Stay Connected"
                className="w-full max-w-[550px] object-contain rounded-xl"
              />
            </div>

            {/* Right Content */}
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <div className="max-w-xl mx-auto p-6 bg-white shadow-lg rounded-2xl border border-gray-200 text-center">
                <h2 className="text-3xl font-bold text-gray-900 ">
                  Stay Connected with
                </h2>
                <p className="text-gray-700 text-lg">
                  Divine Magic Healing Space
                  <br className="block lg:hidden" /> on Social Media
                </p>
              </div>

              <div className="flex justify-center lg:justify-start mt-5">
                <div className="space-y-4 text-center lg:text-left">
                  <SocialLink
                    icon={
                      <img
                        src={facebook}
                        alt="Facebook"
                        className="w-5 h-5 mx-auto lg:mx-0"
                      />
                    }
                    label="facebook"
                    url="https://facebook.com"
                  />
                  <SocialLink
                    icon={
                      <img
                        src={twitter}
                        alt="X"
                        className="w-5 h-5 mx-auto lg:mx-0"
                      />
                    }
                    label="X"
                    url="https://twitter.com"
                  />
                  <SocialLink
                    icon={
                      <img
                        src={youtube}
                        alt="YouTube"
                        className="w-5 h-5 mx-auto lg:mx-0"
                      />
                    }
                    label="youtube"
                    url="https://youtube.com"
                  />
                  <SocialLink
                    icon={
                      <img
                        src={social}
                        alt="WhatsApp"
                        className="w-5 h-5 mx-auto lg:mx-0"
                      />
                    }
                    label="whatsapp"
                    url="https://wa.me/your-number"
                  />
                  <SocialLink
                    icon={
                      <img
                        src={instagram}
                        alt="Instagram"
                        className="w-5 h-5 mx-auto lg:mx-0"
                      />
                    }
                    label="instagram"
                    url="https://instagram.com"
                  />
                  <SocialLink
                    icon={
                      <img
                        src={linkedin}
                        alt="LinkedIn"
                        className="w-5 h-5 mx-auto lg:mx-0"
                      />
                    }
                    label="linkedin"
                    url="https://linkedin.com"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SocialMedia;
