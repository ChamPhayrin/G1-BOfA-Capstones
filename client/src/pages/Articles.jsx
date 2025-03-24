import React from "react";
import { CalendarIcon, ClockIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
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
      title: "Facebook: A Beginner’s Guide to Connecting with Friends",
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
    <div className="min-h-screen bg-gray-50 p-6">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900">Tech Articles for Everyone</h1>
        <p className="text-lg text-gray-700 mt-2 max-w-2xl mx-auto">
          Simple and easy guides to help you use technology with confidence.
        </p>
      </header>

      <main>
        {articleData.length > 0 ? (
          <div className="space-y-6 max-w-3xl mx-auto">
            {articleData.map((article) => (
              <div
                key={article.id}
                className="border border-gray-300 rounded-lg p-6 bg-white shadow-md hover:shadow-lg transition"
              >
                <div className="flex flex-col gap-2">
                  <span className="bg-gray-200 text-gray-800 text-xs font-semibold px-3 py-1 rounded-full w-max">
                    {article.category}
                  </span>
                  <h2 className="text-2xl font-semibold text-gray-900 leading-tight">{article.title}</h2>
                  <p className="text-gray-600 text-base leading-relaxed">{article.excerpt}</p>
                </div>

                <div className="flex justify-between items-center mt-5 text-gray-500 text-sm">
                  <div className="flex gap-4">
                    <div className="flex items-center">
                      <CalendarIcon className="w-5 h-5 mr-1" />
                      <span>{article.date}</span>
                    </div>
                    <div className="flex items-center">
                      <ClockIcon className="w-5 h-5 mr-1" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Link
                      to={article.link}
                      className="flex items-center text-white bg-sky-600 hover:bg-sky-700 font-medium px-5 py-2 rounded-lg shadow-md text-lg"
                    >
                      Read More
                      <ChevronRightIcon className="w-6 h-6 ml-2" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h2 className="text-gray-900 font-medium mt-4 text-2xl">No articles available</h2>
            <p className="text-gray-600 text-lg">New articles will appear here when added.</p>
          </div>
        )}
      </main>
    </div>
  );
}
