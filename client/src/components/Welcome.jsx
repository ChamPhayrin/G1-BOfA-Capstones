import React from "react";

const Welcome = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center mt-12 w-4/5 max-w-6xl gap-8">
      {/* Left Section: Image Collage */}
      <div className="grid grid-cols-2 gap-3 w-full md:w-1/2">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT1s8PXc2zr6VyMSizUtbFrZjfEZ33WYFH9g&s"
          alt="Elderly woman and child using a tablet"
          className="rounded-lg shadow-md object-cover w-full h-32"
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzR0UxIA2JBrvL1RrlC0lo30CqmZiZtExjsA&s"
          alt="Elderly people learning to use the internet"
          className="rounded-lg shadow-md object-cover w-full h-32"
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJwy3Q3cWu6uck6kQdwBvSFbi2AQ7TCUjkmA&s"
          alt="Elderly person protecting themselves from scams"
          className="rounded-lg shadow-md object-cover w-full h-32"
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNuLy63Z7sgE_QDYciZmb0n2l4nK_F86Vffw&s"
          alt="Elderly person browsing the internet"
          className="rounded-lg shadow-md object-cover w-full h-32"
        />
      </div>

      {/* Right Section: Text Content */}
      <div className="w-full md:w-1/2 flex flex-col items-center text-center">
        {/* Subtitle Positioned Above the Welcome Box */}
        <p className="text-3xl font-serif font-regular mt-16 text-gray-800 md:self-start md:ml-4">
          Explore, Connect, and Learn
        </p>

        {/* Welcome Box */}
        <div className="bg-white shadow-lg rounded-lg p-6 text-gray-700 w-full">
          <h3 className="text-3xl font-bold text-gray-900">Welcome!</h3>
          <p className="mt-4 leading-relaxed text-lg">
            Technology isn't just for the young—it's for everyone! Stay
            connected, explore new opportunities, and discover how easy and fun
            it can be to learn and engage online. Join us today and take the
            first step toward mastering the digital world!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
