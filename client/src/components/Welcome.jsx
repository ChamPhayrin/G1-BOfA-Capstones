import React from "react";

const Welcome = ({ text }) => {
  return (
    <div className="bg-white p-5 rounded-lg shadow-md text-center">
      <h2 className="text-3xl font-semibold text-gray-800">Welcome</h2>
      <p className="text-gray-600 mt-2">{text}</p>
    </div>
  );
};

export default Welcome;
