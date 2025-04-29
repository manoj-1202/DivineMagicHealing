import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

// import account from "../Assets/account/account.png";
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



  const linkClass = ({ isActive }) =>
    `relative text-lg md:text-xl lg:text-2xl transition-all duration-200 pb-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-purple-900 hover:after:w-full after:transition-all after:duration-300 ${
      isActive ? "text-black font-bold after:w-full" : "text-black"
    }  hover:text-gray-500`;

  const dropdownLinkClass = ({ isActive }) =>
    `block px-4 py-2 text-[16px] transition-all duration-200 ${
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

  const renderDropdown = (menu, links) => (
    <AnimatePresence>
      {hoveredMenu === menu && (
        <motion.div
          {...dropdownAnim}
          className="absolute left-0 top-full mt-2 w-56 bg-gray-200 shadow-md rounded-lg py-2 z-40"
        >
          {links.map((link, index) => (
            <NavLink key={index} to={link.to} className={dropdownLinkClass}>
              {link.label}
            </NavLink>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );

  const menuItems = {
    services: [
      { label: "Pregnancy Healing", to: "/services/pregnancy-healing" },
      { label: "Negative Cords Cutting", to: "/services/negative-cords-cutting" },
      { label: "Meditation", to: "/services/meditation" },
      { label: "More...", to: "/services" },
    ],
    courses: [
      { label: "Reiki Level 1,2,3&4", to: "/courses/reiki-level--1,-2,-3-&-4" },
      { label: "Ho’oponopono Basic & Advanced", to: "/courses/ho’oponopono-basic-&-advanced" },
      { label: "Gratitude Journal Workshop (JoyShop)", to: "/courses/gratitude-journal-workshop-(joyshop)" },
      { label: "More...", to: "/courses" },
    ],
    healing: [
      { label: "Reiki Healing", to: "/healings/reiki-healing" },
      { label: "Advanced Ho’ oponopono Healing", to: "/healings/advanced-ho’-oponopono-healing" },
      { label: "Crystal Healing", to: "/healings/crystal-healing" },
      { label: "More...", to: "/healingCard" },
    ],
    store: [
      { label: "Reiki Healing Crystal", to: "/Products/reiki-healing-crystal" },
      { label: "Aura Cleansing Spray", to: "/Products/aura-cleansing-spray" },
      { label: "Chakra Balancing Bracelet", to: "/Products/chakra-balancing-bracelet" },
      { label: "More...", to: "/store" },
    ],
  };

  return (
    <div className="w-full font-title sticky top-0 z-50">
      <header className="bg-gradient-to-r from-gray-400 via-gray-300 to-gray-200  max-w-[1300px] mx-auto">
        <div className=" px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          {/* Logo */}
          <NavLink to="/" className="block w-[140px] sm:w-[160px]">
            <img
              src={logo}
              alt="Logo"
              className="w-full h-auto object-contain"
            />
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 relative">
            <NavLink to="/" className={linkClass}>
              Home
            </NavLink>

            {Object.keys(menuItems).map((menu) => (
              <div
                key={menu}
                className="relative"
                onMouseEnter={() => handleMouseEnter(menu)}
                onMouseLeave={handleMouseLeave}
              >
                <span className="relative text-lg md:text-xl lg:text-2xl text-black cursor-pointer transition-all duration-200 hover:text-gray-600 pb-1 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-purple-900 hover:after:w-full after:transition-all after:duration-300">
                  {menu.charAt(0).toUpperCase() + menu.slice(1)}
                </span>
                {renderDropdown(menu, menuItems[menu])}
              </div>
            ))}

            <NavLink to="/about" className={linkClass}>
              About
            </NavLink>
            <NavLink to="/contact" className={linkClass}>
              Contact
            </NavLink>
            {/* <NavLink to="/auth" className={linkClass}>
              <img src={account} alt="Account Icon" className="w-6 h-6" />
            </NavLink> */}
          </nav>

          {/* Mobile Toggle */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-purple-900 focus:outline-none"
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
            <>
              {/* Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 bg-black bg-opacity-30 z-40"
                onClick={toggleMenu}
              />

              {/* Slide Menu */}
              <motion.div
                {...mobileMenuAnim}
                className="md:hidden fixed top-0 right-0 w-64 h-full bg-gray-100 shadow-lg z-50 px-4 py-6 overflow-y-auto"
              >
                <nav className="flex flex-col space-y-4 font-bold">
                  {/* <NavLink
                    to="/auth"
                    className={linkClass}
                    onClick={toggleMenu}
                  >
                    <div className="flex items-center gap-2">
                      <img
                        src={account}
                        alt="Account Icon"
                        className="w-6 h-6"
                      />
                      <span>My Account</span>
                    </div>
                  </NavLink> */}

                  <NavLink to="/" className={linkClass} onClick={toggleMenu}>
                    Home
                  </NavLink>

                  {Object.entries(menuItems).map(([menu, links]) => (
                    <div key={menu}>
                      <button
                        onClick={() =>
                          setDropdownOpen((prev) => ({
                            [menu]: !prev[menu],
                          }))
                        }
                        className="flex items-center justify-between text-left w-full text-lg text-black font-semibold px-2 py-2 hover:text-purple-700"
                      >
                        <span>
                          {menu.charAt(0).toUpperCase() + menu.slice(1)}
                        </span>
                        {dropdownOpen[menu] ? (
                          <ChevronUp className="w-4 h-4 ml-2" />
                        ) : (
                          <ChevronDown className="w-4 h-4 ml-2" />
                        )}
                      </button>

                      <AnimatePresence>
                        {dropdownOpen[menu] && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="pl-4 mt-2 space-y-2 overflow-hidden"
                          >
                            {links.map((link, index) => (
                              <NavLink
                                key={index}
                                to={link.to}
                                className="block text-base text-gray-800 hover:text-purple-700"
                                onClick={toggleMenu}
                              >
                                {link.label}
                              </NavLink>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}

                  <NavLink
                    to="/about"
                    className={linkClass}
                    onClick={toggleMenu}
                  >
                    About
                  </NavLink>
                  <NavLink
                    to="/contact"
                    className={linkClass}
                    onClick={toggleMenu}
                  >
                    Contact
                  </NavLink>
                </nav>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </header>
    </div>
  );
};

export default Header;
