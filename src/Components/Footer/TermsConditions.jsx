import React, { useEffect } from "react";
import { Link } from 'react-router-dom';

const TermsConditions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-6 sm:p-10 lg:p-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-4 transition-all duration-300 ease-in-out">
          Terms and Conditions
        </h1>
        <p className="text-sm text-center text-gray-500 mb-10">Last Updated: 03/05/2025</p>

        <section className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mt-10 mb-4 border-l-4 border-blue-600 pl-4">
            1. Introduction
          </h2>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            Welcome to <strong>Divine Magic Healing Space</strong>. By accessing or using our Website, you agree to be bound by these Terms and Conditions ("Terms"). If you disagree with any part of these terms, please do not use our Website.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mt-10 mb-4 border-l-4 border-blue-600 pl-4">
            2. Use of Website
          </h2>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            This Website is designed to offer visitors general information regarding our services and products, encompassing a broad spectrum of complementary therapies and related products. The content presented is intended solely for informational purposes and may be updated or changed without prior notice.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mt-10 mb-4 border-l-4 border-blue-600 pl-4">
            3. Intellectual Property Rights
          </h2>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            Unless otherwise stated, we or our licensors own the intellectual property rights for all material on Divine Magic Healing Space. All intellectual property rights are reserved. You may access this from Divine Magic Healing Space for your own personal use subjected to restrictions set in these terms and conditions.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mt-10 mb-4 border-l-4 border-blue-600 pl-4">
            4. Restrictions
          </h2>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
            You are specifically restricted from:
          </p>
          <ul className="list-disc ml-6 sm:ml-8 text-base sm:text-lg text-gray-700 space-y-2">
            <li>Publishing any Website material in any media without our prior written consent.</li>
            <li>Selling, sublicensing, and/or otherwise commercializing any Website material.</li>
            <li>Publicly performing and/or showing any Website material.</li>
            <li>Using this Website in any way that is damaging, or that could be damaging to this Website.</li>
            <li>Using this Website in any way that impacts user access to this Website.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mt-10 mb-4 border-l-4 border-blue-600 pl-4">
            5. Content Liability
          </h2>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            We shall not be held responsible for any content that appears on our Website. You agree to protect and defend us against all claims arising out of or based upon our Website. No link(s) should appear on our Website that may be interpreted as libelous, obscene, or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of, any third-party rights.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mt-10 mb-4 border-l-4 border-blue-600 pl-4">
            6. Your Privacy
          </h2>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            Please read our{' '}
            <Link
              to="/privacyPolicy"
              className="text-blue-600 hover:text-blue-800 underline transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
              aria-label="Privacy Policy"
            >
              Privacy Policy
            </Link>.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mt-10 mb-4 border-l-4 border-blue-600 pl-4">
            7. Reservation of Rights
          </h2>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            We reserve the right to request that you remove all links or any particular link to our Website. You approve to immediately remove all links to our Website upon request. We also reserve the right to amend these terms and conditions and its linking policy at any time. By continuously using our Website, you agree to be bound to and follow these linking terms and conditions.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mt-10 mb-4 border-l-4 border-blue-600 pl-4">
            8. Removal of links from our website
          </h2>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            If you find any link on our Website that is offensive for any reason, you are free to contact and inform us at any moment. We will consider requests to remove links but we are not obligated to or so or to respond to you directly.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mt-10 mb-4 border-l-4 border-blue-600 pl-4">
            9. Disclaimer
          </h2>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            The information and services on the Website are provided free of charge, we will not be liable for any loss or damage of any nature.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mt-10 mb-4 border-l-4 border-blue-600 pl-4">
            Contact Information
          </h2>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            For any inquiries regarding these Terms, please contact us at:{' '}
            <a
              href="https://www.DivineMagicHealingSpace.com/contact"
              className="text-blue-600 hover:text-blue-800 underline transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contact Us"
            >
              https://www.DivineMagicHealingSpace.com/contact
            </a>
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsConditions;