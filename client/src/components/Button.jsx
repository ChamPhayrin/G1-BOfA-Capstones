import React from "react";

// Button component that renders a styled button with dynamic text and an onClick function
const Button = ({ text, onClick }) => {
  return (
    <button
      // Tailwind classes for styling the button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300"
      // Calls the function passed via onClick prop when the button is clicked
      onClick={onClick}
    >
      {text} {/* Displays the button text dynamically */}
    </button>
  );
};

export default Button; // Exporting the Button component for reuse in other files
