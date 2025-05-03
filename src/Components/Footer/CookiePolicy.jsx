import React from 'react';

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-6 sm:p-10 lg:p-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-4 transition-all duration-300 ease-in-out">
          Cookie Policy
        </h1>
        <p className="text-sm text-center text-gray-500 mb-10">Last Updated: 14/03/2024</p>

        <section className="mb-8">
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            Welcome to <strong>Divine Magic Healing Space</strong>! Like most websites, we use cookies to help enhance your experience on our site, improve our services, and for analytical purposes. This Cookie Policy explains what cookies are, how we use them on Divine Magic Healing Space, your choices regarding cookies, and further information about cookies.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mt-10 mb-4 border-l-4 border-blue-600 pl-4">
            What are cookies?
          </h2>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            Cookies are small pieces of text sent by your web browser by a website you visit. A cookie file is stored in your web browser and allows us or a third-party to recognize you and make your next visit easier and the service more useful to you.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mt-10 mb-4 border-l-4 border-blue-600 pl-4">
            How Divine Magic Healing Space uses cookies
          </h2>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
            When you use and access our site, we may place a number of cookie files in your web browser. We use cookies for the following purposes:
          </p>
          <ul className="list-disc ml-6 sm:ml-8 text-base sm:text-lg text-gray-700 space-y-2">
            <li>
              <strong>Essential cookies:</strong> We may use essential cookies to authenticate users and prevent fraudulent use of user accounts.
            </li>
            <li>
              <strong>Performance and Analytics cookies:</strong> These cookies collect information about how you interact with our website, like which pages you visited and which links you clicked on. None of this information can be used to identify you. It is all aggregated and, therefore, anonymized.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mt-10 mb-4 border-l-4 border-blue-600 pl-4">
            Your choices regarding cookies
          </h2>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            If you'd like to delete cookies or instruct your web browser to delete or refuse cookies, please visit the help pages of your web browser. Please note, however, that if you delete cookies or refuse to accept them, you might not be able to use all of the features we offer, you may not be able to store your preferences, and some of our pages might not display properly.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mt-10 mb-4 border-l-4 border-blue-600 pl-4">
            More information about cookies
          </h2>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
            Learn more about cookies:
          </p>
          <ul className="list-disc ml-6 sm:ml-8 text-base sm:text-lg text-gray-700 space-y-2">
            <li>
              <a
                href="http://www.allaboutcookies.org/"
                className="text-blue-600 hover:text-blue-800 underline transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="All About Cookies"
              >
                AllAboutCookies: http://www.allaboutcookies.org/
              </a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default CookiePolicy;