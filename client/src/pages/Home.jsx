import React from "react";
import Welcome from "../components/Welcome"; // Welcome section with image collage and intro message
import SocialCard from "../components/SocialCard"; // Component for social media platform cards
import ArticleSection from "../components/ArticleSection"; // Component for latest tech articles
import { Navigate, Link } from "react-router-dom";

// Social media platform logos (Updated to real logos)
const facebookLogo =
  "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg";
const gmailLogo =
  "https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg";
const youtubeLogo =
  "https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg";
const googleLogo =
  "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg";

// Home Page Component
const Home = () => {
  return (
    <div
      className="flex flex-col items-center justify-start min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 w-full pb-16"
      role="main" // Main landmark for screen readers
    >
      {/* Custom font import for logo-matching font */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');
          
          .logo-font {
            font-family: 'Pacifico', cursive;
            letter-spacing: 0.05em;
          }
        `}
      </style>

      {/* Hero Header with Gradient - matching article page */}
      <header className="bg-gradient-to-r from-sky-600 to-slate-600 text-white py-16 px-6 shadow-lg w-full">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-8 text-center md:text-left mb-8 md:mb-0">
            <h1
              className="text-5xl font-bold logo-font"
              role="heading"
              aria-level="1"
            >
              Bringing the Digital World Closer to You
            </h1>
            <p className="mt-4 text-xl text-white/90">
              Simple guides to help you connect with technology and loved ones
              with confidence.
            </p>
          </div>
          <div className="md:w-1/2 relative">
            <div className="rounded-2xl overflow-hidden border-4 border-white/30 shadow-lg">
              <img
                src="https://www.familyeducation.com/sites/default/files/2019-07/iStock-958689848.jpg"
                alt="Elderly people using a tablet together"
                className="w-full h-64 md:h-80 object-cover"
                role="img"
                aria-label="Elderly people using a tablet together"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Welcome Section - wrapped in styled container */}
      <div className="w-full max-w-6xl mx-auto px-6 mt-16">
        <Welcome />
      </div>

      {/* Social Media Platforms Section */}
      <section
        className="mt-16 w-full max-w-6xl px-6"
        role="region"
        aria-labelledby="essential-platforms-heading"
      >
        <h2
          id="essential-platforms-heading"
          className="text-3xl font-bold text-center logo-font text-gray-800 mb-6"
          role="heading"
          aria-level="2"
        >
          Essential Digital Platforms
        </h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-10">
          Start with these popular platforms that make staying connected,
          finding information, and enjoying content easier than ever.
        </p>

        {/* Social Cards with updated styling to match article cards */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          role="list"
        >
          {/* Facebook Card */}
          <div
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden flex flex-col"
            role="listitem"
          >
            {/* Card Header with Gradient - matching article cards */}
            <div className="h-3 bg-gradient-to-r from-sky-600 to-slate-600"></div>

            <div className="p-6 flex flex-col items-center text-center flex-grow">
              <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <img
                  src={facebookLogo}
                  alt="Facebook Logo"
                  className="w-10 h-10 object-contain"
                  aria-hidden="true"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Facebook</h3>
              <p className="text-gray-600 mb-6 flex-grow">
                Connect with family, discover new communities, and share moments
                that matter.
              </p>
            </div>

            <button
              onClick={() =>
                (window.location.href = "https://www.facebook.com/")
              }
              className="w-full bg-gradient-to-r from-sky-600 to-slate-600 text-white py-3 text-center font-medium hover:from-sky-700 hover:to-slate-700 transition-all duration-300 flex items-center justify-center"
              aria-label="Visit Facebook"
            >
              <span>Visit Facebook</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>

          {/* Gmail Card */}
          <div
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden flex flex-col"
            role="listitem"
          >
            <div className="h-3 bg-gradient-to-r from-sky-600 to-slate-600"></div>

            <div className="p-6 flex flex-col items-center text-center flex-grow">
              <div className="w-20 h-20 rounded-full bg-red-100 flex items-center justify-center mb-4">
                <img
                  src={gmailLogo}
                  alt="Gmail Logo"
                  className="w-10 h-10 object-contain"
                  aria-hidden="true"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Gmail</h3>
              <p className="text-gray-600 mb-6 flex-grow">
                Stay in touch and manage your emails easily with Gmail.
              </p>
            </div>

            <button
              onClick={() =>
                (window.location.href = "https://workspace.google.com/gmail/")
              }
              className="w-full bg-gradient-to-r from-sky-600 to-slate-600 text-white py-3 text-center font-medium hover:from-sky-700 hover:to-slate-700 transition-all duration-300 flex items-center justify-center"
              aria-label="Check your Gmail Inbox"
            >
              <span>Visit Gmail</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>

          {/* YouTube Card */}
          <div
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden flex flex-col"
            role="listitem"
          >
            <div className="h-3 bg-gradient-to-r from-sky-600 to-slate-600"></div>

            <div className="p-6 flex flex-col items-center text-center flex-grow">
              <div className="w-20 h-20 rounded-full bg-red-100 flex items-center justify-center mb-4">
                <img
                  src={youtubeLogo}
                  alt="YouTube Logo"
                  className="w-10 h-10 object-contain"
                  aria-hidden="true"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">YouTube</h3>
              <p className="text-gray-600 mb-6 flex-grow">
                Watch, learn, and explore millions of videos.
              </p>
            </div>

            <button
              onClick={() =>
                (window.location.href = "https://www.youtube.com/")
              }
              className="w-full bg-gradient-to-r from-sky-600 to-slate-600 text-white py-3 text-center font-medium hover:from-sky-700 hover:to-slate-700 transition-all duration-300 flex items-center justify-center"
              aria-label="Watch videos on YouTube"
            >
              <span>Visit YouTube</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>

          {/* Google Card */}
          <div
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden flex flex-col"
            role="listitem"
          >
            <div className="h-3 bg-gradient-to-r from-sky-600 to-slate-600"></div>

            <div className="p-6 flex flex-col items-center text-center flex-grow">
              <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <img
                  src={googleLogo}
                  alt="Google Logo"
                  className="w-10 h-10 object-contain"
                  aria-hidden="true"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Google</h3>
              <p className="text-gray-600 mb-6 flex-grow">
                Search for anything, find answers, and explore the web.
              </p>
            </div>

            <button
              onClick={() => (window.location.href = "https://www.google.com/")}
              className="w-full bg-gradient-to-r from-sky-600 to-slate-600 text-white py-3 text-center font-medium hover:from-sky-700 hover:to-slate-700 transition-all duration-300 flex items-center justify-center"
              aria-label="Search on Google"
            >
              <span>Visit Google</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Why Learn Technology Section - New */}
      <section className="w-full bg-gradient-to-r from-sky-600 to-slate-600 text-white py-16 mt-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10 text-center logo-font">
            Why Learn Technology?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">
                Stay Connected
              </h3>
              <p className="text-white/80 text-center">
                Keep in touch with family and friends through video calls,
                messages, and social media.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">
                Learn New Things
              </h3>
              <p className="text-white/80 text-center">
                Access online courses, tutorials, and information on any topic
                that interests you.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">
                Simplify Daily Tasks
              </h3>
              <p className="text-white/80 text-center">
                Make everyday activities easier with online shopping, banking,
                and appointment scheduling.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Article Section - wrapped in styled container */}
      <section className="w-full max-w-6xl mx-auto px-6 mt-16">
        <ArticleSection />
      </section>

      {/* Call to Action */}
      <section className="w-full max-w-6xl mx-auto px-6 mt-16">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="p-8 md:p-10 flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-3 logo-font">
                Ready to Learn More?
              </h2>
              <p className="text-gray-600 mb-6">
                Explore our detailed guides and tutorials to become more
                confident with technology.
              </p>
              <Link
                to="/articles"
                className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-sky-600 to-slate-600 text-white font-medium rounded-lg shadow-md hover:from-sky-700 hover:to-slate-700 transition-colors"
              >
                Browse All Articles
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>
            <div className="md:w-1/3">
              <div className="bg-gradient-to-r from-sky-600/10 to-slate-600/10 p-6 rounded-xl">
                <div className="w-16 h-16 bg-gradient-to-r from-sky-600 to-slate-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">
                  Need Help?
                </h3>
                <p className="text-gray-600 text-center">
                  Our team is here to provide personal assistance with any
                  technology questions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
