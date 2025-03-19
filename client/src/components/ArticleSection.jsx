import React from "react";

// Component that renders the article section
const ArticleSection = () => {
  return (
    <section
      className="w-full max-w-6xl flex flex-col space-y-8 px-6"
      role="region"
      aria-labelledby="latest-tech-articles"
    >
      {/* Section heading - kept your heading but updated styling */}
      <h2
        id="latest-tech-articles"
        className="text-3xl font-bold text-gray-800 text-center logo-font"
        role="heading"
        aria-level="2"
      >
        Latest Tech Articles
      </h2>

      {/* Featured article - enhanced styling */}
      <article
        className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300"
        role="article"
        aria-labelledby="featured-article-title"
      >
        {/* Gradient header bar to match other cards */}
        <div className="h-3 bg-gradient-to-r from-sky-600 to-slate-600 absolute top-0 left-0 right-0 z-10"></div>

        {/* Article image with updated styling */}
        <img
          src="./photo11.avif"
          alt="An elderly person using a laptop"
          className="w-full h-72 object-cover"
          aria-hidden="true"
        />

        {/* Article overlay content with improved styling */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent flex flex-col justify-end p-8 text-white">
          <span className="bg-sky-600 text-white text-xs font-semibold px-3 py-1 rounded-full w-max mb-3">
            Featured
          </span>
          <h3 id="featured-article-title" className="text-2xl font-bold">
            5 Tips To Stay Safe Online
          </h3>
          <p className="mt-2 text-white/90">
            Discover essential tips to protect yourself from online threats.
          </p>

          {/* Read more link with improved styling */}
          <a
            href="https://www.linkedin.com/pulse/5-tips-keep-seniors-safe-online-amica-senior-lifestyles-ox6oc"
            target="_blank"
            className="mt-4 inline-flex items-center bg-white text-sky-600 font-medium px-4 py-2 rounded-lg hover:bg-gray-100 transition duration-200 w-max"
            aria-label="Read more about online safety tips for seniors"
          >
            Read More
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
          </a>
        </div>
      </article>

      {/* Additional articles section - updated grid */}
      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
        role="list"
        aria-label="Additional articles about technology for seniors"
      >
        {/* First smaller article - updated card style */}
        <article
          className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden flex flex-col"
          role="listitem"
          aria-labelledby="article-title-1"
        >
          {/* Card Header with Gradient */}
          <div className="h-3 bg-gradient-to-r from-sky-600 to-slate-600"></div>

          <div className="p-6 flex items-start space-x-6 flex-grow">
            {/* Article image */}
            <img
              src="https://us.123rf.com/450wm/artinspiring/artinspiring2306/artinspiring230600163/206001627-modern-old-characters-using-internet-and-computer-seniors-confidently.jpg?ver=6"
              alt="Elderly people learning how to use technology"
              className="w-24 h-24 rounded-lg object-cover"
              aria-hidden="true"
            />

            {/* Article content */}
            <div className="flex-grow">
              <span className="bg-sky-100 text-sky-800 text-xs font-semibold px-3 py-1 rounded-full w-max">
                Learning
              </span>
              <h3
                id="article-title-1"
                className="text-xl font-bold mt-2 text-gray-800"
              >
                Support For Using Modern Technology
              </h3>
              <p className="text-gray-600 mt-2">
                Learn how to embrace modern technology safely.
              </p>
            </div>
          </div>

          {/* Read more link as a button at bottom */}
          <a
            href="https://www.linkedin.com/pulse/supporting-older-people-use-technology-michael-jeffrey-xyrhc"
            target="_blank"
            className="mt-auto block bg-gradient-to-r from-sky-600 to-slate-600 text-white py-3 text-center font-medium hover:from-sky-700 hover:to-slate-700 transition-all duration-300"
            aria-label="Read more about supporting older people using technology"
          >
            <div className="flex items-center justify-center">
              Read Article
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
            </div>
          </a>
        </article>

        {/* Second smaller article - updated card style */}
        <article
          className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden flex flex-col"
          role="listitem"
          aria-labelledby="article-title-2"
        >
          {/* Card Header with Gradient */}
          <div className="h-3 bg-gradient-to-r from-sky-600 to-slate-600"></div>

          <div className="p-6 flex items-start space-x-6 flex-grow">
            {/* Article image */}
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6Qm7mihuZMoB21x881bs9l-Eyu9u9k_QdBA&s"
              alt="Elderly person learning about scam protection"
              className="w-24 h-24 rounded-lg object-cover"
              aria-hidden="true"
            />

            {/* Article content */}
            <div className="flex-grow">
              <span className="bg-red-100 text-red-800 text-xs font-semibold px-3 py-1 rounded-full w-max">
                Security
              </span>
              <h3
                id="article-title-2"
                className="text-xl font-bold mt-2 text-gray-800"
              >
                Get The Best Protection From Scams
              </h3>
              <p className="text-gray-600 mt-2">
                Understand common scams and how to avoid them.
              </p>
            </div>
          </div>

          {/* Read more link as a button at bottom */}
          <a
            href="https://www.linkedin.com/pulse/protecting-seniors-from-scams-eydle-aph2e"
            target="_blank"
            className="mt-auto block bg-gradient-to-r from-sky-600 to-slate-600 text-white py-3 text-center font-medium hover:from-sky-700 hover:to-slate-700 transition-all duration-300"
            aria-label="Read more about protecting seniors from scams"
          >
            <div className="flex items-center justify-center">
              Read Article
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
            </div>
          </a>
        </article>
      </div>
    </section>
  );
};

export default ArticleSection;
