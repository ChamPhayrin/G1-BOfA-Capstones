import React, { useState, useEffect } from "react";
import {
  UserIcon,
  ArrowRightOnRectangleIcon,
  BookmarkIcon,
  ChevronRightIcon,
  CalendarIcon,
  ClockIcon,
  TrashIcon
} from "@heroicons/react/24/outline";
import axios from "../api/axios";

export default function ModernUserAccount() {
  const [activeTab, setActiveTab] = useState("profile");
  const [accountCreatedDate, setAccountCreatedDate] = useState("2025-01-15");
  const [savedArticles, setSavedArticles] = useState([
    {
      id: 1,
      title: "Understanding Modern JavaScript Features",
      excerpt: "An in-depth look at the latest ES2023 features and how to use them effectively in your applications.",
      date: "Mar 10, 2025",
      readTime: "8 min read",
      category: "Development"
    },
    {
      id: 2,
      title: "Mastering React Hooks",
      excerpt: "Learn how to leverage the power of React hooks to build cleaner, more efficient components.",
      date: "Mar 5, 2025",
      readTime: "12 min read",
      category: "Frontend"
    },
    {
      id: 3,
      title: "Tailwind CSS Best Practices",
      excerpt: "Optimize your workflow and improve design consistency with these Tailwind CSS techniques.",
      date: "Feb 28, 2025",
      readTime: "6 min read",
      category: "Design"
    },
  ]);

  // Function to handle article deletion
  const handleDeleteArticle = (articleId) => {
    setSavedArticles(savedArticles.filter(article => article.id !== articleId));
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Mobile Top Bar */}
      <div className="lg:hidden bg-white shadow-sm p-3 flex items-center justify-between sticky top-0 z-30">
        <div className="text-center">
          <h1 className="text-base sm:text-lg font-bold bg-gradient-to-r from-sky-600 to-slate-600 bg-clip-text text-transparent">
            My Space
          </h1>
        </div>
      </div>

      <div className="flex flex-1">
        {/* Desktop Sidebar */}
        <div className="hidden lg:block w-64 border-r border-gray-200 bg-white h-screen sticky top-0">
          <div className="p-6 border-b border-gray-200">
            <h1 className="text-xl font-bold bg-gradient-to-r from-sky-600 to-slate-600 bg-clip-text text-transparent">
              My Space
            </h1>
            <div className="mt-6 flex items-center">
              <div className="w-12 h-12 bg-gradient-to-tr from-sky-600 to-slate-600 rounded-full flex items-center justify-center text-white font-medium mr-3 shadow-md">
                U
              </div>
              <div>
                <h2 className="font-medium text-gray-800">User Name</h2>
                <p className="text-gray-500 text-sm">user@example.com</p>
              </div>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="mt-6">
            <ul>
              <li>
                <button
                  onClick={() => setActiveTab("profile")}
                  className={`flex items-center w-full px-6 py-3 text-left ${
                    activeTab === "profile"
                      ? "bg-sky-50 text-sky-600 border-l-4 border-sky-600"
                      : "text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  <UserIcon className="w-5 h-5 mr-3" />
                  <span>Profile</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab("savedArticles")}
                  className={`flex items-center w-full px-6 py-3 text-left ${
                    activeTab === "savedArticles"
                      ? "bg-sky-50 text-sky-600 border-l-4 border-sky-600"
                      : "text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  <BookmarkIcon className="w-5 h-5 mr-3" />
                  <span>Saved Articles</span>
                </button>
              </li>
            </ul>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6">
          {/* Mobile Navigation Tabs */}
          <div className="lg:hidden flex mb-6 border-b border-gray-200">
            <button
              onClick={() => setActiveTab("profile")}
              className={`flex-1 py-3 text-center font-medium ${
                activeTab === "profile"
                  ? "text-sky-600 border-b-2 border-sky-600"
                  : "text-gray-500"
              }`}
            >
              Profile
            </button>
            <button
              onClick={() => setActiveTab("savedArticles")}
              className={`flex-1 py-3 text-center font-medium ${
                activeTab === "savedArticles"
                  ? "text-sky-600 border-b-2 border-sky-600"
                  : "text-gray-500"
              }`}
            >
              Saved Articles
            </button>
          </div>

          {/* Profile View */}
          {activeTab === "profile" && (
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Profile</h3>
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                  <UserIcon className="w-8 h-8 text-gray-600" />
                </div>
                <div>
                  <h4 className="text-gray-800 font-medium">User Name</h4>
                  <p className="text-gray-500 text-sm">user@example.com</p>
                  <p className="text-gray-500 text-sm">Account Created: {accountCreatedDate}</p>
                </div>
              </div>
            </div>
          )}

          {/* Saved Articles */}
          {activeTab === "savedArticles" && (
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-bold text-gray-800">Saved Articles</h3>
                <span className="bg-sky-100 text-sky-800 text-xs font-medium px-2.5 py-1 rounded-full">
                  {savedArticles.length} Articles
                </span>
              </div>
              
              {savedArticles.length > 0 ? (
                <div className="space-y-4">
                  {savedArticles.map((article) => (
                    <div key={article.id} className="group border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition duration-200">
                      <div className="p-5">
                        <div className="flex justify-between items-start">
                          <div>
                            <span className="inline-block px-2 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-md mb-2">
                              {article.category}
                            </span>
                            <h4 className="font-medium text-gray-900 group-hover:text-sky-600 transition-colors">
                              {article.title}
                            </h4>
                            <p className="text-gray-500 text-sm mt-1 line-clamp-2">
                              {article.excerpt}
                            </p>
                          </div>
                          <button 
                            className="text-gray-400 hover:text-red-500 rounded-full p-1 hover:bg-red-50 transition-colors"
                            onClick={() => handleDeleteArticle(article.id)}
                            aria-label="Delete article"
                          >
                            <TrashIcon className="w-5 h-5" />
                          </button>
                        </div>
                        
                        <div className="flex items-center mt-4 text-xs text-gray-500 justify-between">
                          <div className="flex items-center space-x-4">
                            <div className="flex items-center">
                              <CalendarIcon className="w-4 h-4 mr-1" />
                              <span>{article.date}</span>
                            </div>
                            <div className="flex items-center">
                              <ClockIcon className="w-4 h-4 mr-1" />
                              <span>{article.readTime}</span>
                            </div>
                          </div>
                          
                          <button className="flex items-center text-sky-600 hover:text-sky-800 font-medium text-sm">
                            Read
                            <ChevronRightIcon className="w-4 h-4 ml-1" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
                    <BookmarkIcon className="w-8 h-8 text-gray-400" />
                  </div>
                  <h4 className="text-gray-800 font-medium mb-1">No saved articles yet</h4>
                  <p className="text-gray-500 text-sm">Articles you save will appear here.</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}