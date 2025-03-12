import React from "react";

// Welcome component that displays a welcome message with a title and text
const Welcome = ({ text }) => {
  return (
    <div className="bg-white p-5 rounded-lg shadow-md text-center">
      {/* Welcome Title */}
      <h2 className="text-3xl font-semibold text-gray-800">Welcome</h2>

      {/* Welcome Message - Passed as a prop */}
      <p className="text-gray-600 mt-2">{text}</p>
    </div>
  );
};

export default Welcome; // Exporting the Welcome component for use in other files
