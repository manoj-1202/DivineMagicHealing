import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter } from "lucide-react";
import React, { useEffect } from "react";

const Footer = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full  font-title">
      <div className="max-w-[1300px] mx-auto">
        <footer className="w-full  mx-auto px-4 sm:px-6 lg:px-8 py-10 border-t border-gray-200 bg-gradient-to-r from-gray-400 via-gray-300 to-gray-200 mt-auto ">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl sm:text-3xl lg:text-base font-semibold text-gray-800">
                About Us
              </h3>
              <p className="text-sm sm:text-base text-gray-800 mt-3">
                Divine Magic Healing Space is a sacred & Holistic Healing Haven
                & I use a Multi-modality Healing technique known as Intuitive
                Energy Healing (IEH) and I render all Healing sessions in
                remote/distance mode itself.
              </p>
            </div>

            <div>
              <h3 className="text-2xl sm:text-3xl lg:text-base font-semibold text-gray-800">
                Contact
              </h3>
              <ul className="mt-3 space-y-3">
                <li className="text-sm sm:text-base text-gray-600">
                  <strong>Email:</strong> info@divinemagichealing.com
                </li>
                <li className="text-sm sm:text-base text-gray-600">
                  <strong>Phone:</strong> +91 98765 43210
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl sm:text-3xl lg:text-base font-semibold text-gray-800">
                Quick Links
              </h3>
              <ul className="mt-3 space-y-3">
                
                <li>
                  <a
                    href="/services"
                    className="text-sm sm:text-base text-gray-800 hover:text-blue-800 transition duration-300"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="/healingCard"
                    className="text-sm sm:text-base text-gray-800 hover:text-blue-800 transition duration-300"
                  >
                    Healing
                  </a>
                </li>
                <li>
                  <a
                    href="/store"
                    className="text-sm sm:text-base text-gray-800 hover:text-blue-800 transition duration-300"
                  >
                    Store
                  </a>
                </li>
                <li>
                  <a
                    href="/about"
                    className="text-sm sm:text-base text-gray-800 hover:text-blue-800 transition duration-300"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="text-sm sm:text-base text-gray-800 hover:text-blue-800 transition duration-300"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Social Media */}
            <div>
              <h2 className="font-bold text-lg mb-2">Reach Us On</h2>
              <div className="flex gap-4 mt-2">
                <button
                  className=" border border-black p-2 rounded-full hover:text-blue-800 transition"
                  aria-label="Facebook"
                >
                  <Facebook size={20} />
                </button>
                <button
                  className=" border border-black p-2 rounded-full hover:text-blue-800 transition"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </button>
                <button
                  className=" border border-black p-2  rounded-full hover:text-blue-800 transition"
                  aria-label="Twitter"
                >
                  <Twitter size={20} />
                </button>
              </div>
            </div>
          </div>

          <div className="mt-10 text-center">
            <p className="text-sm sm:text-base text-gray-800 mb-4">
              © 2025 Divine Magic Healing Space. All Rights Reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
              <Link
                to="/privacyPolicy"
                className="text-sm  text-blue-800 hover:text-blue-800 "
                aria-label="Privacy Policy"
              >
                Privacy Policy |
              </Link>
              <Link
                to="/cookiePolicy"
                className="text-sm  text-blue-800 hover:text-blue-800 "
                aria-label="Cookie Policy"
              >
                Cookie Policy |
              </Link>
              <Link
                to="/termsConditions"
                className="text-sm  text-blue-800 hover:text-blue-800 "
                aria-label="Terms & Conditions"
              >
                Terms & Conditions |
              </Link>
              <Link
                to="/disclaimer"
                className="text-sm  text-blue-800 hover:text-blue-800 "
                aria-label="Disclaimer"
              >
                Disclaimer
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
