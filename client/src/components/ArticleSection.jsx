import React from "react";

// Component that renders the article section
const ArticleSection = () => {
  return (
    <div className="mt-8 w-4/5 max-w-6xl flex flex-col space-y-8">
      {/* Section heading */}
      <h2
        className="text-3xl font-serif font-regular mt-20 text-gray-900 text-center"
        role="heading"
        aria-level="2"
      >
        Latest Tech Articles
      </h2>

      {/* Featured article */}
      <div className="relative bg-gray-200 rounded-lg overflow-hidden shadow-lg">
        {/* Article image */}
        <img
          src="https://source.unsplash.com/800x400/?technology,elderly"
          alt="An elderly person using a laptop"
          className="w-full h-60 object-cover opacity-80"
        />
        {/* Article overlay content */}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center p-6 text-white">
          <h3 className="text-2xl font-bold">5 Tips To Stay Safe Online</h3>
          <p className="mt-2">
            Discover essential tips to protect yourself from online threats.
          </p>
          {/* Read more link */}
          <a
            href="https://www.linkedin.com/pulse/5-tips-keep-seniors-safe-online-amica-senior-lifestyles-ox6oc"
            target="_blank"
            className="mt-3 text-blue-300 underline"
            aria-label="Read more about online safety tips for seniors"
          >
            Read More
          </a>
        </div>
      </div>

      {/* Additional articles section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* First smaller article */}
        <div className="bg-white rounded-lg shadow-lg p-6 flex items-center space-x-6 hover:shadow-xl transition duration-300">
          {/* Article image */}
          <img
            src="https://us.123rf.com/450wm/artinspiring/artinspiring2306/artinspiring230600163/206001427-modern-old-characters-using-internet-and-computer-seniors-confidently.jpg?ver=6"
            alt="Elderly people learning how to use technology"
            className="w-24 h-24 rounded-lg object-cover"
          />
          {/* Article content */}
          <div>
            <h3 className="text-xl font-bold">
              Support For Using Modern Technology
            </h3>
            <p className="text-gray-600">
              Learn how to embrace modern technology safely.
            </p>
            {/* Read more link */}
            <a
              href="https://www.linkedin.com/pulse/supporting-older-people-use-technology-michael-jeffrey-xyrhc"
              target="_blank"
              className="text-blue-600 underline"
              aria-label="Read more about supporting older people using technology"
            >
              Read More
            </a>
          </div>
        </div>

        {/* Second smaller article */}
        <div className="bg-white rounded-lg shadow-lg p-6 flex items-center space-x-6 hover:shadow-xl transition duration-300">
          {/* Article image */}
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6Qm7mihuZMoB21x881bs9l-Eyu9u9k_QdBA&s"
            alt="Elderly person learning about scam protection"
            className="w-24 h-24 rounded-lg object-cover"
          />
          {/* Article content */}
          <div>
            <h3 className="text-xl font-bold">
              Get The Best Protection From Scams
            </h3>
            <p className="text-gray-600">
              Understand common scams and how to avoid them.
            </p>
            {/* Read more link */}
            <a
              href="https://www.linkedin.com/pulse/protecting-seniors-from-scams-eydle-aph2e"
              target="_blank"
              className="text-blue-600 underline"
              aria-label="Read more about protecting seniors from scams"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleSection;
