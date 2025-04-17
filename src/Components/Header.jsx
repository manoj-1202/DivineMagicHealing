import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import logo from "../Assets/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState({
    services: false,
    courses: false,
    healing: false,
    store: false,
  });

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const handleMouseEnter = (menu) => setHoveredMenu(menu);
  const handleMouseLeave = () => setHoveredMenu(null);

  const toggleDropdown = (menu) => {
    setDropdownOpen((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  };

  const linkClass = ({ isActive }) =>
    `relative text-lg md:text-xl lg:text-2xl transition-all duration-200 pb-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-purple-900 hover:after:w-full after:transition-all after:duration-300 ${
      isActive ? "text-black font-bold after:w-full" : "text-black"
    }  hover:text-gray-500`;

  const dropdownLinkClass = ({ isActive }) =>
    `block px-4 py-2 text-[16px] sm:text-[16px] md:text-[16px] transition-all duration-200 ${
      isActive ? "text-black font-bold" : "text-black"
    } hover:bg-gray-400`;

  const dropdownAnim = {
    initial: { opacity: 0, y: -10 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.2 } },
    exit: { opacity: 0, y: -10, transition: { duration: 0.15 } },
  };

  const mobileMenuAnim = {
    initial: { x: "100%" },
    animate: { x: 0, transition: { duration: 0.3 } },
    exit: { x: "100%", transition: { duration: 0.3 } },
  };

  return (
    <div className="w-full  font-title">
       <div className="max-w-[1300px]   mx-auto px-2 sm:px-0 lg:px-0">
    <header className="bg-gray-300 shadow-lg relative z-50 font-title">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <NavLink to="/" className="block w-[140px] sm:w-[160px]">
          <img
            src={logo}
            alt="Divine Magic Healing Logo"
            className="w-full h-auto object-contain"
          />
        </NavLink>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 relative ">
          <NavLink to="/" className={linkClass}>
            Home
          </NavLink>

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("services")}
            onMouseLeave={handleMouseLeave}
          >
            <span className="relative text-lg md:text-xl lg:text-2xl text-black cursor-pointer transition-all duration-200 hover:text-gray-600 pb-1 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-purple-900 hover:after:w-full after:transition-all after:duration-300">
              Services
            </span>

            <AnimatePresence>
              {hoveredMenu === "services" && (
                <motion.div
                  {...dropdownAnim}
                  className="absolute left-0 top-full mt-2 w-56 bg-gray-200 shadow-md rounded-lg py-2 z-40"
                >
                  <NavLink to="/services" className={dropdownLinkClass}>
                    Pregnancy Healing
                  </NavLink>
                  <NavLink
                    to="/services"
                    className={dropdownLinkClass}
                  >
                    Negative Cords Cutting
                  </NavLink>
                  <NavLink to="/services" className={dropdownLinkClass}>
                    Meditation
                  </NavLink>
                  <NavLink to="/services" className={dropdownLinkClass}>
                    More...
                  </NavLink>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Courses Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("courses")}
            onMouseLeave={handleMouseLeave}
          >
            <span className="relative text-lg md:text-xl lg:text-2xl text-black cursor-pointer transition-all duration-200 hover:text-gray-600 pb-1 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-purple-900 hover:after:w-full after:transition-all after:duration-300">
              Courses
            </span>

            <AnimatePresence>
              {hoveredMenu === "courses" && (
                <motion.div
                  {...dropdownAnim}
                  className="absolute left-0 top-full mt-2 w-56 bg-gray-200 shadow-md rounded-lg py-2 z-40"
                >
                  <NavLink
                    to="/courses"
                    className={dropdownLinkClass}
                  >
                    Reiki Level 1,2,3&4
                  </NavLink>
                  <NavLink to="/courses" className={dropdownLinkClass}>
                    Ho’oponopono Basic & Advanced
                  </NavLink>
                  <NavLink to="/courses" className={dropdownLinkClass}>
                    Gratitude Journal Workshop (JoyShop)
                  </NavLink>
                  <NavLink to="/courses" className={dropdownLinkClass}>
                    More...
                  </NavLink>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Healing Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("healing")}
            onMouseLeave={handleMouseLeave}
          >
            <span className="relative text-lg md:text-xl lg:text-2xl text-black cursor-pointer transition-all duration-200 hover:text-gray-600 pb-1 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-purple-900 hover:after:w-full after:transition-all after:duration-300">
              Healing
            </span>

            <AnimatePresence>
              {hoveredMenu === "healing" && (
                <motion.div
                  {...dropdownAnim}
                  className="absolute left-0 top-full mt-2 w-56 bg-gray-200 shadow-md rounded-lg py-2 z-40"
                >
                  <NavLink to="/healingCard" className={dropdownLinkClass}>
                    Reiki Healing
                  </NavLink>
                  <NavLink to="/healingCard" className={dropdownLinkClass}>
                    Advanced Ho’ oponopono Healing
                  </NavLink>
                  <NavLink to="/healingCard" className={dropdownLinkClass}>
                    Crystal Healing
                  </NavLink>
                  <NavLink to="/healingCard" className={dropdownLinkClass}>
                    More...
                  </NavLink>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Store Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("store")}
            onMouseLeave={handleMouseLeave}
          >
            <span className="relative text-lg md:text-xl lg:text-2xl text-black cursor-pointer transition-all duration-200 hover:text-gray-600 pb-1 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-purple-900 hover:after:w-full after:transition-all after:duration-300">
              Store
            </span>

            <AnimatePresence>
              {hoveredMenu === "store" && (
                <motion.div
                  {...dropdownAnim}
                  className="absolute left-0 top-full mt-2 w-56 bg-gray-200 shadow-md rounded-lg py-2 z-40"
                >
                  <NavLink to="/store" className={dropdownLinkClass}>
                    Reiki Healing Crystal
                  </NavLink>
                  <NavLink
                    to="/store"
                    className={dropdownLinkClass}
                  >
                    Aura Cleansing Spray
                  </NavLink>
                  <NavLink
                    to="/store"
                    className={dropdownLinkClass}
                  >
                    Chakra Balancing Bracelet
                  </NavLink>
                  <NavLink to="/store" className={dropdownLinkClass}>
                    More...
                  </NavLink>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <NavLink to="/about" className={linkClass}>
            About
          </NavLink>
          <NavLink to="/contact" className={linkClass}>
            Contact
          </NavLink>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-teal-500 focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            {...mobileMenuAnim}
            className="md:hidden fixed top-0 right-0 w-64 h-full bg-white shadow-lg z-50 px-4 py-6"
          >
            <nav className="flex flex-col space-y-4">
              <NavLink to="/" className={linkClass} onClick={toggleMenu}>
                Home
              </NavLink>

              {/* Services Dropdown */}
              <div>
                <button
                  onClick={() => toggleDropdown("services")}
                  className={`${linkClass} flex items-center justify-between w-full`}
                >
                  <span>Services</span>
                  {dropdownOpen.services ? (
                    <ChevronUp className="w-4 h-4 ml-2" />
                  ) : (
                    <ChevronDown className="w-4 h-4 ml-2" />
                  )}
                </button>
                {dropdownOpen.services && (
                  <div className="pl-4 mt-2 space-y-2">
                    <NavLink
                      to="/services/healing"
                      className={dropdownLinkClass}
                      onClick={toggleMenu}
                    >
                      Pregnancy Healing
                    </NavLink>
                    <NavLink
                      to="/services/consultation"
                      className={dropdownLinkClass}
                      onClick={toggleMenu}
                    >
                      Negative Cords Cutting
                    </NavLink>
                    <NavLink
                      to="/services/therapy"
                      className={dropdownLinkClass}
                      onClick={toggleMenu}
                    >
                      Meditation
                    </NavLink>
                    <NavLink
                      to="/services"
                      className={dropdownLinkClass}
                      onClick={toggleMenu}
                    >
                      More...
                    </NavLink>
                  </div>
                )}
              </div>

              {/* Courses Dropdown */}
              <div>
                <button
                  onClick={() => toggleDropdown("courses")}
                  className={`${linkClass} flex items-center justify-between w-full`}
                >
                  <span>Courses</span>
                  {dropdownOpen.courses ? (
                    <ChevronUp className="w-4 h-4 ml-2" />
                  ) : (
                    <ChevronDown className="w-4 h-4 ml-2" />
                  )}
                </button>
                {dropdownOpen.courses && (
                  <div className="pl-4 mt-2 space-y-2">
                    <NavLink
                      to="/courses/meditation"
                      className={dropdownLinkClass}
                      onClick={toggleMenu}
                    >
                      Reiki Level 1,2,3&4
                    </NavLink>
                    <NavLink
                      to="/courses/reiki"
                      className={dropdownLinkClass}
                      onClick={toggleMenu}
                    >
                      Ho’oponopono Basic & Advanced
                    </NavLink>
                    <NavLink
                      to="/courses/reiki"
                      className={dropdownLinkClass}
                      onClick={toggleMenu}
                    >
                      Gratitude Journal Workshop (JoyShop)
                    </NavLink>
                    <NavLink
                      to="/courses"
                      className={dropdownLinkClass}
                      onClick={toggleMenu}
                    >
                      More...
                    </NavLink>
                  </div>
                )}
              </div>

              {/* Healing Dropdown */}
              <div>
                <button
                  onClick={() => toggleDropdown("healing")}
                  className={`${linkClass} flex items-center justify-between w-full`}
                >
                  <span>Healing</span>
                  {dropdownOpen.healing ? (
                    <ChevronUp className="w-4 h-4 ml-2" />
                  ) : (
                    <ChevronDown className="w-4 h-4 ml-2" />
                  )}
                </button>
                {dropdownOpen.healing && (
                  <div className="pl-4 mt-2 space-y-2">
                    <NavLink
                      to="/healingCard"
                      className={dropdownLinkClass}
                      onClick={toggleMenu}
                    >
                      Reiki Healing
                    </NavLink>
                    <NavLink
                      to="/healing/sessions"
                      className={dropdownLinkClass}
                      onClick={toggleMenu}
                    >
                      Advanced Ho’ oponopono Healing
                    </NavLink>
                    <NavLink
                      to="/healing/sessions"
                      className={dropdownLinkClass}
                      onClick={toggleMenu}
                    >
                      Crystal Healing
                    </NavLink>
                    <NavLink
                      to="/healing/sessions"
                      className={dropdownLinkClass}
                      onClick={toggleMenu}
                    >
                      More...
                    </NavLink>
                  </div>
                )}
              </div>

              {/* Store Dropdown */}
              <div>
                <button
                  onClick={() => toggleDropdown("store")}
                  className={`${linkClass} flex items-center justify-between w-full`}
                >
                  <span>Store</span>
                  {dropdownOpen.store ? (
                    <ChevronUp className="w-4 h-4 ml-2" />
                  ) : (
                    <ChevronDown className="w-4 h-4 ml-2" />
                  )}
                </button>
                {dropdownOpen.store && (
                  <div className="pl-4 mt-2 space-y-2">
                    <NavLink
                      to="/store"
                      className={dropdownLinkClass}
                      onClick={toggleMenu}
                    >
                      Reiki Healing Crystal
                    </NavLink>
                    <NavLink
                      to="/store/energy-crystals"
                      className={dropdownLinkClass}
                      onClick={toggleMenu}
                    >
                      Aura Cleansing Spray
                    </NavLink>
                    <NavLink
                      to="/store/aura-sprays"
                      className={dropdownLinkClass}
                      onClick={toggleMenu}
                    >
                      Chakra Balancing Bracelet
                    </NavLink>
                    <NavLink
                      to="/store/aura-sprays"
                      className={dropdownLinkClass}
                      onClick={toggleMenu}
                    >
                      More...
                    </NavLink>
                  </div>
                )}
              </div>

              {/* Static links */}
              <NavLink to="/about" className={linkClass} onClick={toggleMenu}>
                About
              </NavLink>
              <NavLink to="/contact" className={linkClass} onClick={toggleMenu}>
                Contact
              </NavLink>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
    </div>
    </div>
  );
};

export default Header;
