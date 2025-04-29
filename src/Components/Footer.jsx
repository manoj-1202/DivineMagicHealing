import React from 'react'

const Footer = () => {
  return (
    <div className="w-full  font-title">
     <div className="max-w-[1300px] mx-auto">
    <footer className="w-full  mx-auto px-4 sm:px-6 lg:px-8 py-10 border-t border-gray-200 bg-gradient-to-r from-gray-400 via-gray-300 to-gray-200 mt-auto ">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div>
          <h3 className="text-2xl sm:text-3xl lg:text-base font-semibold text-gray-800">About Us</h3>
          <p className="text-sm sm:text-base text-gray-600 mt-3">
            We provide spiritual and healing services to bring peace and balance into your life. Discover
            your inner energy through our wide range of offerings.
          </p>
        </div>

        <div>
          <h3 className="text-2xl sm:text-3xl lg:text-base font-semibold text-gray-800">Contact</h3>
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
          <h3 className="text-2xl sm:text-3xl lg:text-base font-semibold text-gray-800">Quick Links</h3>
          <ul className="mt-3 space-y-3">
            <li>
              <a href="/about" className="text-sm sm:text-base text-gray-600 hover:text-yellow-400 transition duration-300">
                About Us
              </a>
            </li>
            <li>
              <a href="/services" className="text-sm sm:text-base text-gray-600 hover:text-yellow-400 transition duration-300">
                Services
              </a>
            </li>
            <li>
              <a href="/contact" className="text-sm sm:text-base text-gray-600 hover:text-yellow-400 transition duration-300">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-8 text-center text-sm sm:text-base text-gray-500">
        <p>&copy; 2025 Divine Magic Healing Space. All Rights Reserved.</p>
      </div>
    </footer>
    </div>
    </div>
    
  )
}

export default Footer;
