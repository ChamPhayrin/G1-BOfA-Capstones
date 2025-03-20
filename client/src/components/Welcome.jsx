import React from "react";

const Welcome = () => {
  return (
    <div
      className="flex flex-col md:flex-row items-center justify-center w-full max-w-6xl gap-8 px-6"
      role="region"
      aria-labelledby="welcome-heading"
    >
      {/* Left Section: Image Collage with enhanced styling */}
      <div
        className="grid grid-cols-2 gap-4 w-full md:w-1/2"
        role="group"
        aria-labelledby="welcome-images"
      >
        <p id="welcome-images" className="sr-only">
          A collage of images showing elderly individuals using technology.
        </p>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT1s8PXc2zr6VyMSizUtbFrZjfEZ33WYFH9g&s"
          alt="Elderly woman and child using a tablet"
          className="rounded-xl shadow-md object-cover w-full h-40 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzR0UxIA2JBrvL1RrlC0lo30CqmZiZtExjsA&s"
          alt="Elderly people learning to use the internet"
          className="rounded-xl shadow-md object-cover w-full h-40 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJwy3Q3cWu6uck6kQdwBvSFbi2AQ7TCUjkmA&s"
          alt="Elderly person protecting themselves from scams"
          className="rounded-xl shadow-md object-cover w-full h-40 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNuLy63Z7sgE_QDYciZmb0n2l4nK_F86Vffw&s"
          alt="Elderly person browsing the internet"
          className="rounded-xl shadow-md object-cover w-full h-40 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
        />
      </div>

      {/* Right Section: Text Content with styling to match article cards */}
      <div className="w-full md:w-1/2 flex flex-col">
        {/* Subtitle with logo font styling */}
        <div className="mb-4">
          <p
            className="text-3xl font-bold text-gray-800 logo-font"
            role="heading"
            aria-level="2"
          >
            Explore, Connect, and Learn
          </p>
          <div className="h-1 w-16 bg-gradient-to-r from-sky-600 to-slate-600 rounded-full mt-2"></div>
        </div>

        {/* Welcome Box that matches article card styling */}
        <div
          className="bg-white shadow-lg rounded-2xl overflow-hidden w-full"
          role="region"
          aria-labelledby="welcome-heading"
        >
          {/* Card Header with Gradient - matching article cards */}
          <div className="h-3 bg-gradient-to-r from-sky-600 to-slate-600"></div>

          <div className="p-6">
            <h3
              id="welcome-heading"
              className="text-2xl font-bold text-gray-800"
              role="heading"
              aria-level="3"
            >
              Welcome!
            </h3>
            <p className="mt-4 leading-relaxed text-gray-600">
              Technology isn't just for the young—it's for everyone! Stay
              connected, explore new opportunities, and discover how easy and
              fun it can be to learn and engage online. Join us today and take
              the first step toward mastering the digital world!
            </p>
          </div>
        </div>

        {/* Added features bullets to highlight benefits */}
        <div className="mt-6 grid grid-cols-2 gap-4">
          <div className="flex items-start">
            <div className="flex-shrink-0 h-10 w-10 rounded-full bg-sky-100 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-sky-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                />
              </svg>
            </div>
            <div className="ml-3">
              <h4 className="text-sm font-medium text-gray-900">
                Simple Guides
              </h4>
              <p className="mt-1 text-sm text-gray-500">
                Easy steps anyone can follow
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="flex-shrink-0 h-10 w-10 rounded-full bg-sky-100 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-sky-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            </div>
            <div className="ml-3">
              <h4 className="text-sm font-medium text-gray-900">
                Stay Connected
              </h4>
              <p className="mt-1 text-sm text-gray-500">
                Keep in touch with loved ones
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
