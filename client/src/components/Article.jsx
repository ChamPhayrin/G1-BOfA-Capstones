import React from "react";

const Article = ({ category, title, description, link }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-5 border-2 border-gray-300 w-full max-w-3xl">
      <h3 className="text-xl font-semibold text-blue-600">{category}</h3>
      <h2 className="text-2xl font-bold mt-2">{title}</h2>
      <p className="text-gray-700 mt-2">{description}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-3 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
      >
        Read More
      </a>
    </div>
  );
};

export default Article;
