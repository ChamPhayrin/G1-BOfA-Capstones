import React from "react";
import {
  CalendarIcon,
  ClockIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

export default function Articles() {
  const articleData = [
    {
      id: 1,
      title: "How to Shop on Amazon – A Simple Guide",
      excerpt:
        "Learn how to shop on Amazon from your computer or phone. We'll show you step-by-step how to find what you need, place an order, and get your items delivered.",
      date: "Mar 10, 2025",
      readTime: "8 min read",
      category: "Shopping",
      link: "/amazon",
    },
    {
      id: 2,
      title: "Facebook: A Beginner's Guide to Connecting with Friends",
      excerpt:
        "In this guide, you'll learn how to use Facebook to stay connected with family and friends, share photos, and join groups with similar interests.",
      date: "Mar 12, 2025",
      readTime: "10 min read",
      category: "Social Media",
      link: "/facebook",
    },
    {
      id: 3,
      title: "Getting the Most Out of Gmail: Email Made Easy",
      excerpt:
        "This article will show you how to use Gmail to send emails, organize your inbox, and keep track of important messages—all in a simple and clear way.",
      date: "Mar 14, 2025",
      readTime: "7 min read",
      category: "Email",
      link: "/gmail",
    },
    {
      id: 4,
      title: "Google Search: Finding What You Need Quickly",
      excerpt:
        "Learn how to search on Google and find information easily. We'll show you how to enter simple search terms and use helpful tips to find answers fast.",
      date: "Mar 16, 2025",
      readTime: "9 min read",
      category: "Productivity",
      link: "/google",
    },
    {
      id: 5,
      title: "Google Maps: How to Get Directions and Explore the World",
      excerpt:
        "This article explains how to use Google Maps to get directions, find nearby places, and explore new locations. It's perfect for those who want to travel easily and safely.",
      date: "Mar 18, 2025",
      readTime: "6 min read",
      category: "Navigation",
      link: "/google-maps",
    },
    {
      id: 6,
      title: "How to Use YouTube: Watch Videos and Stay Informed",
      excerpt:
        "Learn how to watch videos on YouTube, find helpful tutorials, and explore your favorite topics—all with easy steps to follow.",
      date: "Mar 20, 2025",
      readTime: "11 min read",
      category: "Video Content",
      link: "/youtube",
    },
    {
      id: 7,
      title: "Zoom: How to Join and Enjoy Video Calls",
      excerpt:
        "If you're new to Zoom, this guide will walk you through how to join a video call, chat with friends or family, and get comfortable with video meetings.",
      date: "Mar 22, 2025",
      readTime: "7 min read",
      category: "Remote Work",
      link: "/zoom",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Custom font import for logo-matching font */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');
          
          .logo-font {
            font-family: 'Pacifico', cursive;
            letter-spacing: 0.05em;
          }
        `}
      </style>

      {/* Hero Header with Gradient */}
      <header className="bg-gradient-to-r from-sky-600 to-slate-600 text-white py-16 px-6 shadow-lg">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-center md:text-center logo-font">
            Tech Articles
          </h1>
          <p className="text-lg mt-6 text-white/90  mx-auto md:mx-0 md:text-center">
            Simple and easy guides to help you use technology with confidence.
          </p>
        </div>
      </header>

      {/* Featured Article (First Article) */}
      {articleData.length > 0 && (
        <div className="max-w-6xl mx-auto px-6 py-10">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row">
            <div className="md:w-7/12 p-8 flex flex-col">
              <span className="bg-sky-100 text-sky-800 text-xs font-semibold px-3 py-1 rounded-full w-max">
                {articleData[0].category}
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mt-3 leading-tight">
                {articleData[0].title}
              </h2>
              <p className="text-gray-600 mt-4 flex-grow">
                {articleData[0].excerpt}
              </p>
              <div className="flex justify-between items-center mt-6 pt-4 border-t border-gray-100 text-gray-500 text-sm">
                <div className="flex items-center">
                  <CalendarIcon className="w-4 h-4 mr-1" />
                  <span>{articleData[0].date}</span>
                </div>
                <div className="flex items-center">
                  <ClockIcon className="w-4 h-4 mr-1" />
                  <span>{articleData[0].readTime}</span>
                </div>
              </div>
              <Link
                to={articleData[0].link}
                className="mt-6 inline-flex items-center justify-center bg-gradient-to-r from-sky-600 to-slate-600 text-white py-3 px-6 rounded-lg text-center font-medium hover:from-sky-700 hover:to-slate-700 transition-all duration-300 w-full md:w-auto"
              >
                Read Featured Article
                <ChevronRightIcon className="w-5 h-5 ml-1" />
              </Link>
            </div>
            <div className="md:w-5/12 bg-gradient-to-r from-sky-600/20 to-slate-600/20 flex items-center justify-center p-8">
              <div className="w-full h-full bg-white/60 backdrop-blur-sm rounded-xl p-6 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-r from-sky-600 to-slate-600 rounded-full flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 w-10 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </svg>
                  </div>
                  <p className="mt-4 text-xl font-semibold text-gray-800">
                    Featured Guide
                  </p>
                  <p className="mt-2 text-gray-600">
                    Our most popular article for beginners.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Rest of Articles in a Better Layout for 6 Remaining Articles */}
      <main className="max-w-6xl mx-auto px-6 pb-16">
        {articleData.length > 1 ? (
          <>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              More Helpful Guides
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articleData.slice(1).map((article) => (
                <div
                  key={article.id}
                  className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden flex flex-col"
                >
                  {/* Card Header with Gradient */}
                  <div className="h-3 bg-gradient-to-r from-sky-600 to-slate-600"></div>

                  <div className="p-6 flex flex-col flex-grow">
                    <span className="bg-sky-100 text-sky-800 text-xs font-semibold px-3 py-1 rounded-full w-max">
                      {article.category}
                    </span>

                    <h2 className="text-xl font-bold text-gray-800 mt-3 leading-tight">
                      {article.title}
                    </h2>

                    <p className="text-gray-600 mt-3 flex-grow">
                      {article.excerpt}
                    </p>

                    <div className="flex justify-between items-center mt-6 pt-4 border-t border-gray-100 text-gray-500 text-sm">
                      <div className="flex items-center">
                        <CalendarIcon className="w-4 h-4 mr-1" />
                        <span>{article.date}</span>
                      </div>
                      <div className="flex items-center">
                        <ClockIcon className="w-4 h-4 mr-1" />
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                  </div>

                  <Link
                    to={article.link}
                    className="block bg-gradient-to-r from-sky-600 to-slate-600 text-white py-3 text-center font-medium hover:from-sky-700 hover:to-slate-700 transition-all duration-300"
                  >
                    <div className="flex items-center justify-center">
                      Read Article
                      <ChevronRightIcon className="w-5 h-5 ml-1" />
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="text-center py-16 bg-white rounded-2xl shadow-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16 mx-auto text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <h2 className="text-gray-800 font-medium mt-4 text-2xl">
              No articles available
            </h2>
            <p className="text-gray-600 mt-2">
              New articles will appear here when added.
            </p>
            <button className="mt-6 px-6 py-3 bg-gradient-to-r from-sky-600 to-slate-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition">
              Check back later
            </button>
          </div>
        )}
      </main>
    </div>
  );
}
