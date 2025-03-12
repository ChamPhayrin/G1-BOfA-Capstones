import React from "react";
import Button from "./Button";

const SocialCard = ({ logo, title, text, buttonText, onClick }) => {
  return (
    <div className="flex items-center bg-white shadow-md rounded-lg p-5 w-full max-w-lg border-2 border-gray-300">
      {/* Left Side - Logo with Circle Background */}
      <div className="flex justify-center items-center bg-blue-500 text-white w-16 h-16 rounded-full text-3xl font-bold">
        {logo}
      </div>

      {/* Right Side - Text & Button (Aligned Properly) */}
      <div className="flex flex-col justify-center ml-5 flex-1">
        <h5 className="text-lg font-semibold">{title}</h5>
        <p className="text-gray-600 text-sm">{text}</p>
        <div className="mt-3">
          <Button text={buttonText} onClick={onClick} />
        </div>
      </div>
    </div>
  );
};

export default SocialCard;
