// State used for bookmark feature (filling specifically)
import { useState } from "react";

// Links used for "Click Here" buttons
import { Link } from "react-router-dom";

// Component that hold previews for articles w/ Link
export default function ArticlePrev({ technology, desc, logo }) {
  // State currently controlling fill color of bookmark btn's icon
  const [bookmarked, setBookmarked] = useState(false);

  const handleBookmarkClick = () => {
    setBookmarked(!bookmarked);
  };

  return (
    <div className="flex items-center shadow-md border-blue-100 border-1 rounded-md m-2 p-4 mb-4 xl:pl-0">
      <div className="mr-3 w-1/4 h-auto flex justify-center">
        <img
          src={logo}
          alt={`${technology} company logo`}
          className="w-full max-w-[180px] object-contain md:w-24 md:h-24 lg:w-30 lg:h-30"
        />
      </div>
      <div className="flex flex-col w-3/4">
        {/* Article tehcnology/title */}
        <h3 className="mb-1 font-bold md:text-2xl lg:text-4xl">{technology}</h3>
        {/* Description of article */}
        <p className="text-xs md:text-base mb-1 lg:text-xl text-gray-700">
          {desc}
        </p>

        {/* Buttons container */}
        <div className="flex items-center border-1">
          {/* Using prop to link path. The regex at the end only applies to "Google Maps" as theres a space in the name, which would break the path. This solution avoids havign to make a "path" prop */}
          <Link to={`/${technology.toLowerCase().replace(/\s+/g, "-")}`}>
            <button
              className="bg-blue-400 rounded-md text-white font-semibold p-2 cursor-pointer md:px-6 md:py-3 md:text-lg lg:px-8 lg:py-4 lg:text-xl"
              aria-label={`Read more about ${technology}`}
            >
              Click Here
            </button>
          </Link>

          {/* Bookmark Button */}
          <button className="cursor-pointer ml-2" onClick={handleBookmarkClick}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="42px"
              viewBox="0 -960 960 960"
              width="42px"
              fill={bookmarked ? "#50a2ff" : "#8c8c8c"} // Changes color dynamically
              className="transition-all duration-300 md:w-13 md:h-13 lg:w-16 lg:h-16"
              aria-label="Click this button to bookmark this article"
            >
              <path d="M240-144v-600q0-30 21-51t51-21h336q30 0 51 21t21 51v600l-240-96-240 96Z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
