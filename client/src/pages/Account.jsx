import React, { useState, useEffect } from "react";
import {
  BookmarkIcon,
  UserIcon,
  InformationCircleIcon,
  ArrowRightOnRectangleIcon,
  MagnifyingGlassIcon,
  FunnelIcon,
  TrashIcon,
  PencilIcon,
  EyeIcon,
  Bars3Icon,
  XMarkIcon,
  ChartBarIcon,
  ClockIcon,
  ArrowTrendingUpIcon,
  DocumentTextIcon,
  BellIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";
import axios from "../api/axios";

export default function ModernUserAccount() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [articles, setArticles] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [showArticleModal, setShowArticleModal] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    const fetchSavedArticles = async () => {
      setIsLoading(true);
      try {
        // Simulate API call
        setTimeout(() => {
          setArticles([
            {
              id: 1,
              title: "How to Create Engaging Facebook Posts",
              category: "Facebook",
              author: "John Smith",
              savedAt: "2025-03-01",
              readTime: "5 min",
              image: "facebook-post.jpg",
            },
            {
              id: 2,
              title: "Mastering Zoom Virtual Backgrounds",
              category: "Zoom",
              author: "Maria Johnson",
              savedAt: "2025-03-05",
              readTime: "8 min",
              image: "zoom-bg.jpg",
            },
            {
              id: 3,
              title: "Google Search Techniques for 2025",
              category: "Google",
              author: "Alex Wilson",
              savedAt: "2025-03-08",
              readTime: "10 min",
              image: "google-search.jpg",
            },
            {
              id: 4,
              title: "Gmail Organization Tips and Tricks",
              category: "Gmail",
              author: "Sarah Chen",
              savedAt: "2025-03-10",
              readTime: "7 min",
              image: "gmail-tips.jpg",
            },
            {
              id: 5,
              title: "Growing Your YouTube Channel in 2025",
              category: "YouTube",
              author: "Michael Brown",
              savedAt: "2025-03-12",
              readTime: "12 min",
              image: "youtube-growth.jpg",
            },
          ]);
          setIsLoading(false);
        }, 1000);
      } catch (err) {
        setError("Failed to fetch saved articles");
        setIsLoading(false);
      }
    };

    fetchSavedArticles();
  }, []);

  const filteredArticles = articles.filter(
    (article) =>
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleViewArticle = (article) => {
    setSelectedArticle(article);
    setShowArticleModal(true);
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setShowMobileMenu(false);
  };

  // Get total reading time
  const totalReadingTime = articles.reduce((total, article) => {
    return total + parseInt(article.readTime);
  }, 0);

  // Get categories with counts
  const categoryCount = articles.reduce((acc, article) => {
    acc[article.category] = (acc[article.category] || 0) + 1;
    return acc;
  }, {});

  // Find top category
  const topCategory = Object.entries(categoryCount).sort(
    (a, b) => b[1] - a[1]
  )[0] || ["None", 0];

  const ArticleModal = ({ article, onClose }) => {
    if (!article) return null;

    const formatDate = (dateString) => {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(dateString).toLocaleDateString(undefined, options);
    };

    return (
      <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-2 sm:p-4">
        <div className="bg-white rounded-xl shadow-2xl overflow-hidden w-full max-w-md mx-auto animate-fadeIn">
          <div className="relative h-12 bg-gradient-to-r from-sky-600 to-slate-600">
            <button
              onClick={onClose}
              className="absolute right-2 top-2 text-white hover:bg-white/20 rounded-full p-1 transition-colors"
            >
              <XMarkIcon className="w-6 h-6" />
            </button>
          </div>

          <div className="p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-6">
              <div className="bg-sky-100 rounded-full p-3 mx-auto sm:mx-0 sm:mr-4">
                <DocumentTextIcon className="w-6 h-6 text-sky-600" />
              </div>
              <div className="text-center sm:text-left">
                <h2 className="text-xl font-bold text-gray-800 break-words">
                  {article.title}
                </h2>
                <p className="text-gray-500">{article.author}</p>
              </div>
            </div>

            <div className="space-y-3 mb-6">
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="text-gray-600">Category</span>
                <span className="font-medium text-gray-900 capitalize">
                  {article.category}
                </span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="text-gray-600">Read Time</span>
                <span className="font-medium text-gray-900">
                  {article.readTime}
                </span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="text-gray-600">Saved On</span>
                <span className="font-medium text-gray-900">
                  {formatDate(article.savedAt)}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <button
                className="flex items-center justify-center py-2.5 px-4 bg-sky-50 text-sky-700 rounded-lg hover:bg-sky-100 transition-colors font-medium"
                onClick={() =>
                  alert("Read article functionality would go here")
                }
              >
                <EyeIcon className="w-5 h-5 mr-2" />
                Read Article
              </button>
              <button
                className="flex items-center justify-center py-2.5 px-4 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors font-medium"
                onClick={() =>
                  alert(
                    "Remove from saved articles functionality would go here"
                  )
                }
              >
                <TrashIcon className="w-5 h-5 mr-2" />
                Remove
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Category badges with custom colors
  const getCategoryColor = (category) => {
    const colors = {
      Facebook: "bg-blue-100 text-blue-800",
      Zoom: "bg-sky-100 text-sky-800",
      Google: "bg-red-100 text-red-800",
      Gmail: "bg-yellow-100 text-yellow-800",
      YouTube: "bg-red-100 text-red-800",
      Instagram: "bg-purple-100 text-purple-800",
    };
    return colors[category] || "bg-gray-100 text-gray-800";
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Mobile Top Bar */}
      <div className="lg:hidden bg-white shadow-sm p-3 flex items-center justify-between sticky top-0 z-30">
        <button
          onClick={() => setShowMobileMenu(!showMobileMenu)}
          className="p-1.5 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
        >
          <Bars3Icon className="w-5 h-5" />
        </button>

        <div className="text-center">
          <h1 className="text-base sm:text-lg font-bold bg-gradient-to-r from-sky-600 to-slate-600 bg-clip-text text-transparent">
            My Space
          </h1>
        </div>

        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-tr from-sky-600 to-slate-600 rounded-full flex items-center justify-center text-white font-medium shadow-md">
          <span className="text-sm sm:text-base">U</span>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {showMobileMenu && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setShowMobileMenu(false)}
        >
          <div
            className="bg-white w-64 h-full p-5 max-w-[80%] transform transition-transform duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="font-bold text-xl text-gray-800">Menu</h2>
              <button
                onClick={() => setShowMobileMenu(false)}
                className="p-1 rounded-lg text-gray-500 hover:bg-gray-100"
              >
                <XMarkIcon className="w-6 h-6" />
              </button>
            </div>

            <div className="flex flex-col space-y-1 mb-8">
              <button
                onClick={() => handleTabChange("dashboard")}
                className={`flex items-center p-3 rounded-lg ${
                  activeTab === "dashboard"
                    ? "bg-sky-50 text-sky-700"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                <ChartBarIcon className="w-5 h-5 mr-3" />
                <span className="font-medium">Dashboard</span>
              </button>

              <button
                onClick={() => handleTabChange("saved")}
                className={`flex items-center p-3 rounded-lg ${
                  activeTab === "saved"
                    ? "bg-sky-50 text-sky-700"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                <BookmarkIcon className="w-5 h-5 mr-3" />
                <span className="font-medium">Saved Articles</span>
              </button>

              <button
                onClick={() => handleTabChange("profile")}
                className={`flex items-center p-3 rounded-lg ${
                  activeTab === "profile"
                    ? "bg-sky-50 text-sky-700"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                <UserIcon className="w-5 h-5 mr-3" />
                <span className="font-medium">Profile</span>
              </button>

              <button
                onClick={() => handleTabChange("account")}
                className={`flex items-center p-3 rounded-lg ${
                  activeTab === "account"
                    ? "bg-sky-50 text-sky-700"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                <InformationCircleIcon className="w-5 h-5 mr-3" />
                <span className="font-medium">Account</span>
              </button>
            </div>

            <div className="pt-4 border-t border-gray-200">
              <button className="w-full flex items-center p-3 text-gray-600 rounded-lg hover:bg-gray-50">
                <ArrowRightOnRectangleIcon className="w-5 h-5 mr-3" />
                <span className="font-medium">Logout</span>
              </button>
            </div>
          </div>
        </div>
      )}

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

          <div className="p-4">
            <div className="flex flex-col space-y-1 mb-8">
              <button
                onClick={() => setActiveTab("dashboard")}
                className={`flex items-center p-3 rounded-lg ${
                  activeTab === "dashboard"
                    ? "bg-sky-50 text-sky-700"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                <ChartBarIcon className="w-5 h-5 mr-3" />
                <span className="font-medium">Dashboard</span>
              </button>

              <button
                onClick={() => setActiveTab("saved")}
                className={`flex items-center p-3 rounded-lg ${
                  activeTab === "saved"
                    ? "bg-sky-50 text-sky-700"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                <BookmarkIcon className="w-5 h-5 mr-3" />
                <span className="font-medium">Saved Articles</span>
              </button>

              <button
                onClick={() => setActiveTab("profile")}
                className={`flex items-center p-3 rounded-lg ${
                  activeTab === "profile"
                    ? "bg-sky-50 text-sky-700"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                <UserIcon className="w-5 h-5 mr-3" />
                <span className="font-medium">Profile</span>
              </button>

              <button
                onClick={() => setActiveTab("account")}
                className={`flex items-center p-3 rounded-lg ${
                  activeTab === "account"
                    ? "bg-sky-50 text-sky-700"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                <InformationCircleIcon className="w-5 h-5 mr-3" />
                <span className="font-medium">Account</span>
              </button>
            </div>

            <div className="pt-4 border-t border-gray-200">
              <button className="w-full flex items-center p-3 text-gray-600 rounded-lg hover:bg-gray-50">
                <ArrowRightOnRectangleIcon className="w-5 h-5 mr-3" />
                <span className="font-medium">Logout</span>
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          {/* Content area */}
          <div className="p-3 sm:p-4 md:p-6 pb-20 md:pb-6">
            {/* Dashboard View */}
            {activeTab === "dashboard" && (
              <div className="space-y-5">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg md:text-xl font-bold text-gray-800">
                    Your Dashboard
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
                  <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-center mb-4">
                      <h4 className="font-medium text-gray-500 text-sm sm:text-base">
                        Saved Articles
                      </h4>
                      <div className="p-1.5 sm:p-2 bg-sky-100 rounded-lg">
                        <BookmarkIcon className="w-4 h-4 sm:w-5 sm:h-5 text-sky-600" />
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="text-2xl sm:text-3xl font-bold text-gray-800">
                        {articles.length}
                      </div>
                      <div className="text-xs sm:text-sm text-green-600 flex items-center">
                        <ArrowTrendingUpIcon className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                        +3 this week
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-center mb-4">
                      <h4 className="font-medium text-gray-500 text-sm sm:text-base">
                        Reading Time
                      </h4>
                      <div className="p-1.5 sm:p-2 bg-green-100 rounded-lg">
                        <ClockIcon className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="text-2xl sm:text-3xl font-bold text-gray-800">
                        {totalReadingTime} min
                      </div>
                    </div>
                    <div className="text-xs sm:text-sm text-gray-500 mt-1">
                      Total for all saved articles
                    </div>
                  </div>

                  <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-center mb-4">
                      <h4 className="font-medium text-gray-500 text-sm sm:text-base">
                        Top Category
                      </h4>
                      <div className="p-1.5 sm:p-2 bg-orange-100 rounded-lg">
                        <FunnelIcon className="w-4 h-4 sm:w-5 sm:h-5 text-orange-600" />
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="text-2xl sm:text-3xl font-bold text-gray-800 capitalize">
                        {topCategory[0]}
                      </div>
                    </div>
                    <div className="text-xs sm:text-sm text-gray-500 mt-1">
                      {topCategory[1]} articles in this category
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6 mt-4 sm:mt-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-4">
                    Recently Saved
                  </h3>

                  {isLoading ? (
                    <div className="flex justify-center items-center py-8">
                      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-sky-600"></div>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {filteredArticles.slice(0, 3).map((article) => (
                        <div
                          key={article.id}
                          className="flex items-start p-3 hover:bg-gray-50 rounded-lg transition-colors"
                        >
                          <div className="flex-shrink-0 h-8 w-8 sm:h-10 sm:w-10 bg-sky-100 rounded-lg flex items-center justify-center mr-3 sm:mr-4">
                            <span className="text-sky-600 font-bold text-sm sm:text-base">
                              {article.title.charAt(0).toUpperCase()}
                            </span>
                          </div>
                          <div className="flex-1 min-w-0 pr-2">
                            <h4 className="text-xs sm:text-sm font-medium text-gray-900 truncate">
                              {article.title}
                            </h4>
                            <div className="flex flex-wrap items-center mt-1 gap-1">
                              <span className="text-xs text-gray-500 mr-1">
                                {article.author}
                              </span>
                              <span
                                className={`text-xs px-1.5 py-0.5 rounded-full ${getCategoryColor(
                                  article.category
                                )}`}
                              >
                                {article.category}
                              </span>
                            </div>
                          </div>
                          <div className="flex-shrink-0">
                            <button
                              onClick={() => handleViewArticle(article)}
                              className="p-1 text-gray-400 hover:text-sky-600"
                              title="View details"
                            >
                              <EyeIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {!isLoading && (
                    <button
                      onClick={() => setActiveTab("saved")}
                      className="mt-4 text-sky-600 font-medium text-xs sm:text-sm hover:text-sky-800 flex items-center"
                    >
                      View all articles
                      <ArrowTrendingUpIcon className="w-3 h-3 sm:w-4 sm:h-4 ml-1 rotate-90" />
                    </button>
                  )}
                </div>
              </div>
            )}

            {/* Saved Articles View */}
            {activeTab === "saved" && (
              <div>
                <div className="mb-4 sm:mb-6">
                  <h3 className="text-lg md:text-xl font-bold text-gray-800">
                    Saved Articles
                  </h3>
                </div>

                {isLoading ? (
                  <div className="flex justify-center items-center py-12">
                    <div className="animate-spin rounded-full h-8 w-8 sm:h-10 sm:w-10 border-b-2 border-sky-600"></div>
                  </div>
                ) : error ? (
                  <div className="p-4 bg-red-50 border-l-4 border-red-500 text-red-700 rounded">
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                        />
                      </svg>
                      {error}
                    </div>
                  </div>
                ) : (
                  <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                    {/* Desktop view */}
                    <div className="hidden md:block">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th
                              scope="col"
                              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                              Article
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                              Category
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                              Read Time
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                              Saved On
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                              Actions
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {filteredArticles.map((article) => (
                            <tr
                              key={article.id}
                              className="hover:bg-gray-50 transition-colors"
                            >
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex items-center">
                                  <div className="h-10 w-10 bg-sky-100 rounded-lg flex items-center justify-center">
                                    <span className="text-sky-600 font-bold">
                                      {article.title.charAt(0).toUpperCase()}
                                    </span>
                                  </div>
                                  <div className="ml-4">
                                    <div className="text-sm font-medium text-gray-900">
                                      {article.title}
                                    </div>
                                    <div className="text-sm text-gray-500">
                                      {article.author}
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <span
                                  className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getCategoryColor(
                                    article.category
                                  )}`}
                                >
                                  {article.category}
                                </span>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {article.readTime}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {new Date(article.savedAt).toLocaleDateString()}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                <div className="flex justify-end space-x-2">
                                  <button
                                    onClick={() => handleViewArticle(article)}
                                    className="text-sky-600 hover:text-sky-900 transition-colors"
                                    title="View details"
                                  >
                                    <EyeIcon className="w-5 h-5" />
                                  </button>
                                  <button
                                    className="text-gray-600 hover:text-gray-900 transition-colors"
                                    title="Read article"
                                  >
                                    <PencilIcon className="w-5 h-5" />
                                  </button>
                                  <button
                                    className="text-red-600 hover:text-red-900 transition-colors"
                                    title="Remove from saved"
                                  >
                                    <TrashIcon className="w-5 h-5" />
                                  </button>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    {/* Mobile view */}
                    <div className="md:hidden divide-y divide-gray-100">
                      {filteredArticles.map((article) => (
                        <div key={article.id} className="p-3 sm:p-4">
                          <div className="flex items-center mb-3">
                            <div className="h-8 w-8 sm:h-10 sm:w-10 bg-sky-100 rounded-lg flex items-center justify-center mr-3">
                              <span className="text-sky-600 font-bold text-sm sm:text-base">
                                {article.title.charAt(0).toUpperCase()}
                              </span>
                            </div>
                            <div>
                              <h4 className="font-medium text-gray-900 text-sm sm:text-base truncate max-w-[180px] sm:max-w-full">
                                {article.title}
                              </h4>
                              <p className="text-xs sm:text-sm text-gray-500">
                                {article.author}
                              </p>
                            </div>
                          </div>

                          <div className="grid grid-cols-2 gap-2 mb-3 text-xs sm:text-sm">
                            <div>
                              <span className="text-gray-500">Category: </span>
                              <span
                                className={`inline-flex px-1.5 py-0.5 text-xs rounded-full ${getCategoryColor(
                                  article.category
                                )}`}
                              >
                                {article.category}
                              </span>
                            </div>
                            <div>
                              <span className="text-gray-500">Read time: </span>
                              <span className="text-gray-900">
                                {article.readTime}
                              </span>
                            </div>
                            <div className="text-xs col-span-2">
                              <span className="text-gray-500">Saved on: </span>
                              <span className="text-gray-900">
                                {new Date(article.savedAt).toLocaleDateString()}
                              </span>
                            </div>
                          </div>

                          <div className="flex justify-end space-x-3 sm:space-x-4 border-t pt-2 sm:pt-3">
                            <button
                              onClick={() => handleViewArticle(article)}
                              className="text-sky-600 hover:text-sky-900"
                              title="View details"
                            >
                              <EyeIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                            </button>
                            <button
                              className="text-gray-600 hover:text-gray-900"
                              title="Read article"
                            >
                              <PencilIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                            </button>
                            <button
                              className="text-red-600 hover:text-red-900"
                              title="Remove from saved"
                            >
                              <TrashIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Profile View */}
            {activeTab === "profile" && (
              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-4 sm:mb-6">
                    Your Profile
                  </h3>

                  <div className="flex flex-col md:flex-row items-center md:items-start gap-4 sm:gap-6 mb-6 sm:mb-8">
                    <div className="flex flex-col items-center">
                      <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-tr from-sky-600 to-slate-600 rounded-full flex items-center justify-center shadow-md text-white text-2xl sm:text-3xl font-bold mb-3">
                        U
                      </div>
                      <button className="text-xs sm:text-sm bg-sky-50 text-sky-700 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg hover:bg-sky-100 transition-colors font-medium">
                        Change Photo
                      </button>
                    </div>

                    <div className="flex-1 w-full text-center md:text-left">
                      <h4 className="text-xl sm:text-2xl font-bold text-gray-800 mb-1">
                        User Name
                      </h4>
                      <p className="text-gray-500 mb-3 sm:mb-4 text-sm sm:text-base">
                        user@example.com
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-3 sm:px-4 py-1.5 sm:py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                        defaultValue="User Name"
                      />
                    </div>
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        className="w-full px-3 sm:px-4 py-1.5 sm:py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                        defaultValue="user@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                        Username
                      </label>
                      <input
                        type="text"
                        className="w-full px-3 sm:px-4 py-1.5 sm:py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                        defaultValue="username123"
                      />
                    </div>
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="text"
                        className="w-full px-3 sm:px-4 py-1.5 sm:py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                        defaultValue="(555) 123-4567"
                      />
                    </div>
                  </div>

                  <div className="mt-4 sm:mt-6">
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                      Bio
                    </label>
                    <textarea
                      className="w-full px-3 sm:px-4 py-1.5 sm:py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                      rows="3"
                      defaultValue="I'm an avid reader interested in learning new technology."
                    ></textarea>
                  </div>

                  <div className="mt-6 sm:mt-8">
                    <button className="w-full sm:w-auto px-4 sm:px-6 py-2 sm:py-2.5 bg-gradient-to-r from-sky-600 to-slate-600 text-white rounded-lg hover:from-sky-700 hover:to-slate-700 focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 transition-all font-medium text-sm sm:text-base">
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Account View */}
            {activeTab === "account" && (
              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-4 sm:mb-6">
                    Account Settings
                  </h3>

                  <div className="space-y-6 sm:space-y-8">
                    <div className="border-b border-gray-100 pb-4 sm:pb-6">
                      <h4 className="text-base sm:text-lg font-semibold text-gray-700 mb-3 sm:mb-4">
                        Account Overview
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                        <div className="bg-gray-50 rounded-lg p-3 sm:p-4">
                          <div className="font-medium text-gray-800 mb-1 text-sm sm:text-base">
                            Account Type
                          </div>
                          <div className="text-sky-600 font-medium text-sm sm:text-base">
                            Standard
                          </div>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-3 sm:p-4">
                          <div className="font-medium text-gray-800 mb-1 text-sm sm:text-base">
                            Member Since
                          </div>
                          <div className="text-gray-700 text-sm sm:text-base">
                            January 15, 2025
                          </div>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-3 sm:p-4">
                          <div className="font-medium text-gray-800 mb-1 text-sm sm:text-base">
                            Account Status
                          </div>
                          <div className="text-green-600 font-medium flex items-center text-sm sm:text-base">
                            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-600 rounded-full mr-1.5 sm:mr-2"></span>
                            Active
                          </div>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-3 sm:p-4">
                          <div className="font-medium text-gray-800 mb-1 text-sm sm:text-base">
                            Last Login
                          </div>
                          <div className="text-gray-700 text-sm sm:text-base">
                            March 13, 2025
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="border-b border-gray-100 pb-4 sm:pb-6">
                      <h4 className="text-base sm:text-lg font-semibold text-gray-700 mb-3 sm:mb-4">
                        Reading Preferences
                      </h4>

                      <div className="space-y-3 sm:space-y-4">
                        <div className="flex flex-col md:flex-row md:items-center gap-2 sm:gap-3 p-3 sm:p-4 bg-gray-50 rounded-lg">
                          <div className="font-medium text-gray-800 text-sm sm:text-base">
                            Preferred Categories
                          </div>
                          <div className="flex flex-wrap gap-1 sm:gap-2">
                            <span className="px-2 py-0.5 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                              Facebook
                            </span>
                            <span className="px-2 py-0.5 bg-sky-100 text-sky-800 rounded-full text-xs font-medium">
                              Zoom
                            </span>
                            <span className="px-2 py-0.5 bg-red-100 text-red-800 rounded-full text-xs font-medium">
                              YouTube
                            </span>
                            <span className="px-2 py-0.5 bg-yellow-100 text-yellow-800 rounded-full text-xs font-medium">
                              Gmail
                            </span>
                            <span className="px-2 py-0.5 bg-purple-100 text-purple-800 rounded-full text-xs font-medium">
                              Instagram
                            </span>
                          </div>
                        </div>

                        <div className="flex flex-col md:flex-row md:items-center md:justify-between p-3 sm:p-4 bg-gray-50 rounded-lg">
                          <div className="font-medium text-gray-800 mb-2 md:mb-0 text-sm sm:text-base">
                            Email Notifications
                          </div>
                          <div className="flex items-center">
                            <div className="relative inline-block w-8 sm:w-10 mr-2 align-middle select-none">
                              <input
                                type="checkbox"
                                name="toggle"
                                id="notificationToggle"
                                className="toggle-checkbox absolute block w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white border-4 border-gray-300 appearance-none cursor-pointer checked:right-0 checked:border-sky-600 transition-all duration-200"
                                defaultChecked
                              />
                              <label
                                htmlFor="notificationToggle"
                                className="toggle-label block overflow-hidden h-5 sm:h-6 rounded-full bg-gray-300 cursor-pointer"
                              ></label>
                            </div>
                            <label
                              htmlFor="notificationToggle"
                              className="text-gray-700 text-sm sm:text-base"
                            >
                              Weekly Digest
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-base sm:text-lg font-semibold text-gray-700 mb-3 sm:mb-4">
                        Recent Activity
                      </h4>
                      <div className="space-y-2 sm:space-y-3">
                        <div className="p-3 sm:p-4 border border-gray-200 rounded-lg">
                          <div className="flex items-center justify-between">
                            <div className="text-gray-900 font-medium text-sm sm:text-base">
                              Article Saved
                            </div>
                            <div className="text-gray-500 text-xs sm:text-sm">
                              2025-03-12
                            </div>
                          </div>
                          <div className="text-gray-600 mt-1 text-xs sm:text-sm line-clamp-1">
                            "Introduction to Web3 Development"
                          </div>
                        </div>

                        <div className="p-3 sm:p-4 border border-gray-200 rounded-lg">
                          <div className="flex items-center justify-between">
                            <div className="text-gray-900 font-medium text-sm sm:text-base">
                              Article Saved
                            </div>
                            <div className="text-gray-500 text-xs sm:text-sm">
                              2025-03-10
                            </div>
                          </div>
                          <div className="text-gray-600 mt-1 text-xs sm:text-sm line-clamp-1">
                            "Building Accessible Web Applications"
                          </div>
                        </div>

                        <div className="p-3 sm:p-4 border border-gray-200 rounded-lg">
                          <div className="flex items-center justify-between">
                            <div className="text-gray-900 font-medium text-sm sm:text-base">
                              Profile Updated
                            </div>
                            <div className="text-gray-500 text-xs sm:text-sm">
                              2025-03-05
                            </div>
                          </div>
                          <div className="text-gray-600 mt-1 text-xs sm:text-sm">
                            Updated profile information
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Bottom Navigation */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-30 p-1.5 sm:p-2">
        <div className="flex justify-around">
          <button
            onClick={() => setActiveTab("dashboard")}
            className={`flex flex-col items-center p-1.5 sm:p-2 ${
              activeTab === "dashboard" ? "text-sky-600" : "text-gray-500"
            }`}
          >
            <ChartBarIcon className="w-5 h-5 sm:w-6 sm:h-6" />
            <span className="text-[10px] sm:text-xs mt-0.5 sm:mt-1">
              Dashboard
            </span>
          </button>

          <button
            onClick={() => setActiveTab("saved")}
            className={`flex flex-col items-center p-1.5 sm:p-2 ${
              activeTab === "saved" ? "text-sky-600" : "text-gray-500"
            }`}
          >
            <BookmarkIcon className="w-5 h-5 sm:w-6 sm:h-6" />
            <span className="text-[10px] sm:text-xs mt-0.5 sm:mt-1">Saved</span>
          </button>

          <button
            onClick={() => setActiveTab("profile")}
            className={`flex flex-col items-center p-1.5 sm:p-2 ${
              activeTab === "profile" ? "text-sky-600" : "text-gray-500"
            }`}
          >
            <UserIcon className="w-5 h-5 sm:w-6 sm:h-6" />
            <span className="text-[10px] sm:text-xs mt-0.5 sm:mt-1">
              Profile
            </span>
          </button>

          <button
            onClick={() => setActiveTab("account")}
            className={`flex flex-col items-center p-1.5 sm:p-2 ${
              activeTab === "account" ? "text-sky-600" : "text-gray-500"
            }`}
          >
            <Cog6ToothIcon className="w-5 h-5 sm:w-6 sm:h-6" />
            <span className="text-[10px] sm:text-xs mt-0.5 sm:mt-1">
              Settings
            </span>
          </button>
        </div>
      </div>

      {/* Article Details Modal */}
      {showArticleModal && (
        <ArticleModal
          article={selectedArticle}
          onClose={() => setShowArticleModal(false)}
        />
      )}

      {/* CSS for toggle switch */}
      <style jsx>{`
        .toggle-checkbox:checked + .toggle-label {
          background-color: #0284c7;
        }
        .toggle-checkbox:focus + .toggle-label {
          box-shadow: 0 0 0 2px rgba(2, 132, 199, 0.2);
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .line-clamp-1 {
          overflow: hidden;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 1;
        }
      `}</style>
    </div>
  );
}
