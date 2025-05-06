import React, { useEffect } from "react";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-6 sm:p-10 lg:p-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-4 transition-all duration-300 ease-in-out">
          Privacy Policy
        </h1>
        <p className="text-sm text-center text-gray-500 mb-10">Effective Date: 01/05/2025</p>

        <section className="mb-8">
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            Welcome to <strong>Divine Magic Healing Space</strong> Your privacy is critically important to us, and we are committed to protecting it through our compliance with this policy.
          </p>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed mt-4">
            This policy describes the types of information we may collect from you or that you may provide when you visit the website{' '}
            <a
              href="https://www.DivineMagicHealingSpace.com/"
              className="text-blue-600 hover:text-blue-800 underline transition-colors duration-200"
            >
              https://www.DivineMagicHealingSpace.com/
            </a>{' '}
            (our "Website") and our practices for collecting, using, maintaining, protecting, and disclosing that information.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mt-10 mb-4 border-l-4 border-blue-600 pl-4">
            This policy applies to information we collect:
          </h2>
          <ul className="list-disc ml-6 sm:ml-8 text-base sm:text-lg text-gray-700 space-y-2">
            <li>On this Website.</li>
            <li>In email, text, and other electronic messages between you and this Website.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mt-10 mb-4 border-l-4 border-blue-600 pl-4">
            Information We Collect About You and How We Collect It
          </h2>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
            We collect several types of information from and about users of our Website, including information:
          </p>
          <ul className="list-disc ml-6 sm:ml-8 text-base sm:text-lg text-gray-700 space-y-2">
            <li>
              By which you may be personally identified, such as name, postal address, email address, telephone number, or any other identifier by which you may be contacted online or offline ("personal information").
            </li>
            <li>That is about you but individually does not identify you.</li>
          </ul>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed mt-4 mb-4">We collect this information:</p>
          <ul className="list-disc ml-6 sm:ml-8 text-base sm:text-lg text-gray-700 space-y-2">
            <li>Directly from you when you provide it to us.</li>
            <li>
              Automatically as you navigate through the site. Information collected automatically may include usage details, IP addresses, and information collected through cookies, web beacons, and other tracking technologies.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mt-10 mb-4 border-l-4 border-blue-600 pl-4">
            How We Use Your Information
          </h2>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
            We use information that we collect about you or that you provide to us, including any personal information:
          </p>
          <ul className="list-disc ml-6 sm:ml-8 text-base sm:text-lg text-gray-700 space-y-2">
            <li>To present our Website and its contents to you.</li>
            <li>To provide you with information, products, or services that you request from us.</li>
            <li>To fulfill any other purpose for which you provide it.</li>
            <li>
              To carry out our obligations and enforce our rights arising from any contracts entered into between you and us, including for billing and collection.
            </li>
            <li>For any other purpose with your consent.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mt-10 mb-4 border-l-4 border-blue-600 pl-4">
            Disclosure of Your Information
          </h2>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
            We may disclose aggregated information about our users, and information that does not identify any individual, without restriction.
          </p>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
            We may disclose personal information that we collect or you provide as described in this privacy policy:
          </p>
          <ul className="list-disc ml-6 sm:ml-8 text-base sm:text-lg text-gray-700 space-y-2">
            <li>To our subsidiaries and affiliates.</li>
            <li>To contractors, service providers, and other third parties we use to support our business.</li>
            <li>To fulfill the purpose for which you provide it.</li>
            <li>For any other purpose disclosed by us when you provide the information.</li>
            <li>With your consent.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mt-10 mb-4 border-l-4 border-blue-600 pl-4">
            Your Rights
          </h2>
          <ul className="list-disc ml-6 sm:ml-8 text-base sm:text-lg text-gray-700 space-y-2">
            <li>Access and receive a copy of your personal data.</li>
            <li>Request correction or deletion of your personal data.</li>
            <li>Object to or restrict processing of your personal data.</li>
            <li>Request portability of your personal data.</li>
            <li>Withdraw your consent at any time where we rely on consent to process your personal data.</li>
          </ul>
        </section>

        <section className="mb8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mt-10 mb-4 border-l-4 border-blue-600 pl-4">
            Changes to Our Privacy Policy
          </h2>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            It is our policy to post any changes we make to our privacy policy on this page with a notice that the privacy policy has been updated on the Website home page. The date the privacy policy was last revised is identified at the top of the page. You are responsible for periodically visiting our Website and this privacy policy to check for any changes.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mt-10 mb-4 border-l-4 border-blue-600 pl-4">
            Contact Information
          </h2>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-2">
            To ask questions or comment about this privacy policy and our privacy practices, contact us at:
          </p>
          <a
            href="https://www.DivineMagicHealingSpace.com/contact/"
            className="text-blue-600 hover:text-blue-800 underline transition-colors duration-200"
          >
            https://www.DivineMagicHealingSpace.com/contact/
          </a>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;