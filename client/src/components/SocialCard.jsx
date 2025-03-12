import React from "react";
import Button from "./Button"; // Importing the reusable Button component

// SocialCard component that displays a social media card with a logo, title, text, and a button
const SocialCard = ({ logo, title, text, buttonText, onClick }) => {
  return (
    <div className="flex items-center bg-white shadow-md rounded-lg p-5 w-full max-w-lg border-2 border-gray-300">
      {/* Left Side - Logo with a Circular Background */}
      <div className="flex justify-center items-center bg-blue-500 text-white w-16 h-16 rounded-full text-3xl font-bold">
        {logo} {/* Displays the logo passed as a prop */}
      </div>

      {/* Right Side - Text & Button (Properly Aligned) */}
      <div className="flex flex-col justify-center ml-5 flex-1">
        {/* Card Title */}
        <h5 className="text-lg font-semibold">{title}</h5>

        {/* Description Text */}
        <p className="text-gray-600 text-sm">{text}</p>

        {/* Action Button - Calls onClick function when clicked */}
        <div className="mt-3">
          <Button text={buttonText} onClick={onClick} />
        </div>
      </div>
    </div>
  );
};

export default SocialCard; // Exporting the SocialCard component for use in other files
