
import React, { useState, useEffect } from "react";
import {
  faUsers,
  faInfoCircle,
  faSignOutAlt,
  faSearch,
  faFilter,
  faTrash,
  faEdit,
  faEye,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "../api/axios";

export default function Admin() {
  const [activeTab, setActiveTab] = useState("users");
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);
  const [showUserModal, setShowUserModal] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    // Simulating fetching users
    const fetchUsers = async () => {
      setIsLoading(true);
      try {
        // For demo purposes, using mock data
        setTimeout(() => {
          setUsers([
            {
              id: 1,
              username: "johndoe",
              email: "john@example.com",
              role: "admin",
              createdAt: "2025-02-15",
              status: "active",
            },
            {
              id: 2,
              username: "janedoe",
              email: "jane@example.com",
              role: "user",
              createdAt: "2025-02-20",
              status: "active",
            },
            {
              id: 3,
              username: "mikebrown",
              email: "mike@example.com",
              role: "user",
              createdAt: "2025-02-25",
              status: "inactive",
            },
            {
              id: 4,
              username: "sarahsmith",
              email: "sarah@example.com",
              role: "moderator",
              createdAt: "2025-03-01",
              status: "active",
            },
            {
              id: 5,
              username: "davidlee",
              email: "david@example.com",
              role: "user",
              createdAt: "2025-03-05",
              status: "pending",
            },
          ]);
          setIsLoading(false);
        }, 1000);
      } catch (err) {
        setError("Failed to fetch users");
        setIsLoading(false);
      }
    };

    fetchUsers();
  }, []);

  // Close sidebar when clicking outside on mobile
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        isSidebarOpen &&
        !event.target.closest(".sidebar") &&
        !event.target.closest(".hamburger-menu")
      ) {
        setIsSidebarOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isSidebarOpen]);

  // Close sidebar when window is resized to desktop view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsSidebarOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const filteredUsers = users.filter(
    (user) =>
      user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleViewUser = (user) => {
    setSelectedUser(user);
    setShowUserModal(true);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const UserModal = ({ user, onClose }) => {
    if (!user) return null;

    const handleEscapeKey = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    // Trap focus inside modal when it's open
    useEffect(() => {
      // Focus the modal when it opens
      const modalElement = document.getElementById("user-modal");
      if (modalElement) {
        modalElement.focus();
      }

      window.addEventListener("keydown", handleEscapeKey);

      // Prevent scrolling of the body when modal is open
      document.body.style.overflow = "hidden";

      return () => {
        window.removeEventListener("keydown", handleEscapeKey);
        document.body.style.overflow = "auto";
      };
    }, []);

    return (
      <div
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose();
        }}
      >
        <div
          id="user-modal"
          className="bg-white rounded-2xl shadow-xl overflow-hidden w-full max-w-md mx-2 sm:mx-auto"
          tabIndex="-1"
        >
          <div className="relative h-16 bg-gradient-to-r from-sky-600 to-slate-600">
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
              <div
                className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md"
                aria-hidden="true"
              >
                <FontAwesomeIcon icon={faUsers} className="text-indigo-600" />
              </div>
            </div>
          </div>

          <div className="p-4 sm:p-8 pt-10">
            <h2
              id="modal-title"
              className="text-xl sm:text-2xl font-bold text-center text-gray-800 mb-6"
            >
              User Details
            </h2>

            <div className="space-y-4">
              <div className="flex justify-between border-b pb-2">
                <span className="font-medium text-gray-600">Username:</span>
                <span className="text-right">{user.username}</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="font-medium text-gray-600">Email:</span>
                <span className="text-right break-all">{user.email}</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="font-medium text-gray-600">Role:</span>
                <span className="capitalize text-right">{user.role}</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="font-medium text-gray-600">Status:</span>
                <span
                  className={`capitalize text-right ${
                    user.status === "active"
                      ? "text-green-600"
                      : user.status === "inactive"
                      ? "text-red-600"
                      : "text-yellow-600"
                  }`}
                >
                  {user.status}
                </span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="font-medium text-gray-600">Created:</span>
                <span className="text-right">
                  {new Date(user.createdAt).toLocaleDateString()}
                </span>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
              <button
                className="py-2 bg-indigo-100 text-indigo-600 rounded-lg hover:bg-indigo-200 transition flex items-center justify-center"
                onClick={() => alert("Edit functionality would go here")}
                aria-label={`Edit ${user.username}`}
              >
                <FontAwesomeIcon icon={faEdit} className="mr-2" /> Edit
              </button>
              <button
                className="py-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition flex items-center justify-center"
                onClick={() => alert("Delete functionality would go here")}
                aria-label={`Delete ${user.username}`}
              >
                <FontAwesomeIcon icon={faTrash} className="mr-2" /> Delete
              </button>
            </div>

            <button
              onClick={onClose}
              className="mt-4 w-full py-2 px-4 bg-gradient-to-r from-sky-600 to-slate-600 text-white rounded-lg hover:opacity-90 transition"
              aria-label="Close modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-100">
      {/* Mobile hamburger menu button */}
      <button
        className="hamburger-menu lg:hidden fixed top-4 left-4 z-20 p-2 rounded-md bg-slate-600 text-white shadow-lg"
        onClick={toggleSidebar}
        aria-label={
          isSidebarOpen ? "Close navigation menu" : "Open navigation menu"
        }
        aria-expanded={isSidebarOpen}
        aria-controls="sidebar-menu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={
              isSidebarOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
            }
          />
        </svg>
      </button>

      {/* Sidebar */}
      <aside
        className={`sidebar fixed lg:static top-0 left-0 z-10 w-64 h-full bg-white shadow-md transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        } transition-transform duration-200 ease-in-out`}
        id="sidebar-menu"
        aria-label="Main navigation"
      >
        <div className="h-16 bg-gradient-to-r from-sky-600 to-slate-600 flex items-center justify-center">
          <h1 className="text-white text-xl font-bold">Admin Dashboard</h1>
        </div>
        <nav className="px-4 py-6">
          <ul className="space-y-2" role="menu">
            <li role="none">
              <button
                onClick={() => {
                  setActiveTab("users");
                  setIsSidebarOpen(false);
                }}
                className={`w-full flex items-center p-3 text-gray-700 rounded-lg ${
                  activeTab === "users"
                    ? "bg-indigo-50 text-indigo-600"
                    : "hover:bg-gray-50"
                }`}
                role="menuitem"
                aria-current={activeTab === "users" ? "page" : undefined}
              >
                <FontAwesomeIcon
                  icon={faUsers}
                  className="mr-3"
                  aria-hidden="true"
                />
                <span>Users</span>
              </button>
            </li>
            <li role="none">
              <button
                onClick={() => {
                  setActiveTab("adminInfo");
                  setIsSidebarOpen(false);
                }}
                className={`w-full flex items-center p-3 text-gray-700 rounded-lg ${
                  activeTab === "adminInfo"
                    ? "bg-indigo-50 text-indigo-600"
                    : "hover:bg-gray-50"
                }`}
                role="menuitem"
                aria-current={activeTab === "adminInfo" ? "page" : undefined}
              >
                <FontAwesomeIcon
                  icon={faInfoCircle}
                  className="mr-3"
                  aria-hidden="true"
                />
                <span>Admin Info</span>
              </button>
            </li>
          </ul>
          <div className="mt-8 pt-4 border-t">
            <button
              className="w-full flex items-center p-3 text-gray-700 rounded-lg hover:bg-gray-50"
              aria-label="Logout from admin dashboard"
            >
              <FontAwesomeIcon
                icon={faSignOutAlt}
                className="mr-3"
                aria-hidden="true"
              />
              <span>Logout</span>
            </button>
          </div>
        </nav>
      </aside>

      {/* Overlay when sidebar is open on mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-0 lg:hidden"
          aria-hidden="true"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <header className="h-16 bg-white shadow-sm flex items-center justify-between px-4 sm:px-6 sticky top-0 z-5">
          <h2 className="text-lg font-medium ml-8 lg:ml-0">
            {activeTab === "users" && "User Management"}
            {activeTab === "adminInfo" && "Admin Information"}
          </h2>
          <div className="flex items-center space-x-2 sm:space-x-4">
            <div className="relative">
              <label htmlFor="search-input" className="sr-only">
                Search users
              </label>
              <input
                id="search-input"
                type="text"
                placeholder="Search..."
                className="pl-8 sm:pl-10 py-2 pr-2 sm:pr-4 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 w-28 sm:w-auto"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <div className="absolute inset-y-0 left-0 pl-2 sm:pl-3 flex items-center pointer-events-none">
                <FontAwesomeIcon
                  icon={faSearch}
                  className="text-gray-400 text-sm"
                  aria-hidden="true"
                />
              </div>
            </div>
            <div
              className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-200 rounded-full flex items-center justify-center"
              aria-hidden="true"
            >
              <span className="font-medium text-gray-600">A</span>
            </div>
          </div>
        </header>

        <div className="p-2 sm:p-4 md:p-6">
          {activeTab === "users" && (
            <>
              <section
                className="bg-white rounded-2xl shadow-xl overflow-hidden mb-6"
                aria-labelledby="users-section-title"
              >
                <div className="p-3 sm:p-6">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-2 sm:gap-4">
                    <h3
                      id="users-section-title"
                      className="text-lg sm:text-xl font-bold text-gray-800"
                    >
                      Users
                    </h3>
                    <div className="flex flex-wrap gap-2 w-full sm:w-auto justify-between sm:justify-end">
                      <button
                        className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200"
                        aria-label="Filter users"
                      >
                        <FontAwesomeIcon icon={faFilter} aria-hidden="true" />
                      </button>
                      <button
                        className="py-2 px-4 bg-gradient-to-r from-sky-600 to-slate-600 text-white rounded-lg hover:opacity-90 transition"
                        aria-label="Add new user"
                      >
                        Add User
                      </button>
                    </div>
                  </div>

                  {isLoading ? (
                    <div
                      className="flex justify-center items-center py-12"
                      aria-live="polite"
                      aria-busy="true"
                    >
                      <svg
                        className="animate-spin h-8 w-8 text-indigo-600"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      <span className="sr-only">Loading users...</span>
                    </div>
                  ) : error ? (
                    <div
                      className="p-4 bg-red-50 border-l-4 border-red-500 text-red-700 rounded"
                      role="alert"
                      aria-live="assertive"
                    >
                      <div className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
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
                    <div className="overflow-x-auto -mx-3 sm:mx-0">
                      <table
                        className="min-w-full divide-y divide-gray-200"
                        aria-labelledby="users-section-title"
                      >
                        <thead className="bg-gray-50">
                          <tr>
                            <th
                              scope="col"
                              className="px-2 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                              User
                            </th>
                            <th
                              scope="col"
                              className="px-2 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden sm:table-cell"
                            >
                              Role
                            </th>
                            <th
                              scope="col"
                              className="px-2 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden sm:table-cell"
                            >
                              Status
                            </th>
                            <th
                              scope="col"
                              className="px-2 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden sm:table-cell"
                            >
                              Created
                            </th>
                            <th
                              scope="col"
                              className="px-2 sm:px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                              Actions
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {filteredUsers.length === 0 ? (
                            <tr>
                              <td
                                colSpan="5"
                                className="px-2 sm:px-6 py-4 text-center text-sm text-gray-500"
                              >
                                No users found matching your search criteria
                              </td>
                            </tr>
                          ) : (
                            filteredUsers.map((user) => (
                              <tr key={user.id} className="hover:bg-gray-50">
                                <td className="px-2 sm:px-6 py-4 whitespace-nowrap">
                                  <div className="flex items-center">
                                    <div
                                      className="flex-shrink-0 h-8 w-8 sm:h-10 sm:w-10 bg-indigo-100 rounded-full flex items-center justify-center"
                                      aria-hidden="true"
                                    >
                                      <span className="text-xs sm:text-sm text-indigo-600 font-medium">
                                        {user.username.charAt(0).toUpperCase()}
                                      </span>
                                    </div>
                                    <div className="ml-2 sm:ml-4">
                                      <div className="text-xs sm:text-sm font-medium text-gray-900">
                                        {user.username}
                                      </div>
                                      <div className="text-xs text-gray-500 truncate max-w-[100px] sm:max-w-none">
                                        {user.email}
                                      </div>
                                      {/* Mobile-only role and status display */}
                                      <div className="flex space-x-2 sm:hidden text-xs mt-1">
                                        <span className="capitalize text-gray-700">
                                          {user.role}
                                        </span>
                                        <span
                                          className="inline-block w-2 h-2 rounded-full mt-1.5 mr-1"
                                          style={{
                                            backgroundColor:
                                              user.status === "active"
                                                ? "#10B981"
                                                : user.status === "inactive"
                                                ? "#EF4444"
                                                : "#F59E0B",
                                          }}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </td>
                                <td className="px-2 sm:px-6 py-4 whitespace-nowrap hidden sm:table-cell">
                                  <div className="text-sm text-gray-900 capitalize">
                                    {user.role}
                                  </div>
                                </td>
                                <td className="px-2 sm:px-6 py-4 whitespace-nowrap hidden sm:table-cell">
                                  <span
                                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                      user.status === "active"
                                        ? "bg-green-100 text-green-800"
                                        : user.status === "inactive"
                                        ? "bg-red-100 text-red-800"
                                        : "bg-yellow-100 text-yellow-800"
                                    }`}
                                  >
                                    {user.status}
                                  </span>
                                </td>
                                <td className="px-2 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-500 hidden sm:table-cell">
                                  {new Date(
                                    user.createdAt
                                  ).toLocaleDateString()}
                                </td>
                                <td className="px-2 sm:px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                  <div className="flex justify-end space-x-2">
                                    <button
                                      onClick={() => handleViewUser(user)}
                                      className="text-indigo-600 hover:text-indigo-900"
                                      aria-label={`View details for ${user.username}`}
                                    >
                                      <FontAwesomeIcon
                                        icon={faEye}
                                        aria-hidden="true"
                                      />
                                    </button>
                                    <button
                                      className="text-gray-600 hover:text-gray-900"
                                      aria-label={`Edit ${user.username}`}
                                    >
                                      <FontAwesomeIcon
                                        icon={faEdit}
                                        aria-hidden="true"
                                      />
                                    </button>
                                    <button
                                      className="text-red-600 hover:text-red-900"
                                      aria-label={`Delete ${user.username}`}
                                    >
                                      <FontAwesomeIcon
                                        icon={faTrash}
                                        aria-hidden="true"
                                      />
                                    </button>
                                  </div>
                                </td>
                              </tr>
                            ))
                          )}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              </section>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                <section
                  className="bg-white rounded-2xl shadow-xl overflow-hidden"
                  aria-labelledby="total-users-title"
                >
                  <div className="p-4 sm:p-6">
                    <div className="flex justify-between items-center mb-4">
                      <h3
                        id="total-users-title"
                        className="text-base sm:text-lg font-bold text-gray-800"
                      >
                        Total Users
                      </h3>
                      <div
                        className="h-8 w-8 sm:h-10 sm:w-10 bg-indigo-100 rounded-full flex items-center justify-center"
                        aria-hidden="true"
                      >
                        <FontAwesomeIcon
                          icon={faUsers}
                          className="text-indigo-600 text-sm sm:text-base"
                        />
                      </div>
                    </div>
                    <div className="text-2xl sm:text-3xl font-bold text-gray-800">
                      {users.length}
                    </div>
                    <div className="text-xs sm:text-sm text-green-600 mt-2">
                      +12% from last month
                    </div>
                  </div>
                </section>

                <section
                  className="bg-white rounded-2xl shadow-xl overflow-hidden"
                  aria-labelledby="active-users-title"
                >
                  <div className="p-4 sm:p-6">
                    <div className="flex justify-between items-center mb-4">
                      <h3
                        id="active-users-title"
                        className="text-base sm:text-lg font-bold text-gray-800"
                      >
                        Active Users
                      </h3>
                      <div
                        className="h-8 w-8 sm:h-10 sm:w-10 bg-green-100 rounded-full flex items-center justify-center"
                        aria-hidden="true"
                      >
                        <FontAwesomeIcon
                          icon={faUsers}
                          className="text-green-600 text-sm sm:text-base"
                        />
                      </div>
                    </div>
                    <div className="text-2xl sm:text-3xl font-bold text-gray-800">
                      {users.filter((user) => user.status === "active").length}
                    </div>
                    <div className="text-xs sm:text-sm text-green-600 mt-2">
                      +8% from last month
                    </div>
                  </div>
                </section>
              </div>
            </>
          )}

          {activeTab === "adminInfo" && (
            <section
              className="bg-white rounded-2xl shadow-xl overflow-hidden p-3 sm:p-6"
              aria-labelledby="admin-info-title"
            >
              <h3
                id="admin-info-title"
                className="text-lg sm:text-xl font-bold text-gray-800 mb-4 sm:mb-6"
              >
                Admin Information
              </h3>

              <div className="space-y-4 sm:space-y-6">
                <div className="border-b pb-4">
                  <h4
                    id="system-overview-title"
                    className="text-base sm:text-lg font-semibold text-gray-700 mb-2 sm:mb-3"
                  >
                    System Overview
                  </h4>
                  <div
                    className="grid grid-cols-1 xs:grid-cols-2 gap-2 sm:gap-4"
                    aria-labelledby="system-overview-title"
                  >
                    <div className="p-3 sm:p-4 bg-indigo-50 rounded-lg">
                      <div className="font-medium text-indigo-800 text-sm sm:text-base">
                        Version
                      </div>
                      <div className="text-gray-700 text-sm">v2.5.0</div>
                    </div>
                    <div className="p-3 sm:p-4 bg-indigo-50 rounded-lg">
                      <div className="font-medium text-indigo-800 text-sm sm:text-base">
                        Last Updated
                      </div>
                      <div className="text-gray-700 text-sm">
                        March 10, 2025
                      </div>
                    </div>
                    <div className="p-3 sm:p-4 bg-indigo-50 rounded-lg">
                      <div className="font-medium text-indigo-800 text-sm sm:text-base">
                        Server Status
                      </div>
                      <div className="text-green-600 text-sm">Online</div>
                    </div>
                    <div className="p-3 sm:p-4 bg-indigo-50 rounded-lg">
                      <div className="font-medium text-indigo-800 text-sm sm:text-base">
                        Database
                      </div>
                      <div className="text-gray-700 text-sm">MySQL 8.4</div>
                    </div>
                  </div>
                </div>

                <div className="border-b pb-4">
                  <h4
                    id="admin-team-title"
                    className="text-base sm:text-lg font-semibold text-gray-700 mb-2 sm:mb-3"
                  >
                    Admin Team
                  </h4>
                  <ul
                    className="space-y-2 sm:space-y-3"
                    aria-labelledby="admin-team-title"
                  >
                    <li className="flex items-center p-2 sm:p-3 bg-gray-50 rounded-lg">
                      <div
                        className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-100 rounded-full flex items-center justify-center mr-2 sm:mr-3"
                        aria-hidden="true"
                      >
                        <span className="text-blue-600 font-medium text-sm">
                          J
                        </span>
                      </div>
                      <div>
                        <div className="font-medium text-sm sm:text-base">
                          John Doe
                        </div>
                        <div className="text-xs sm:text-sm text-gray-500">
                          Lead Administrator
                        </div>
                      </div>
                    </li>
                    <li className="flex items-center p-2 sm:p-3 bg-gray-50 rounded-lg">
                      <div
                        className="w-8 h-8 sm:w-10 sm:h-10 bg-green-100 rounded-full flex items-center justify-center mr-2 sm:mr-3"
                        aria-hidden="true"
                      >
                        <span className="text-green-600 font-medium text-sm">
                          S
                        </span>
                      </div>
                      <div>
                        <div className="font-medium text-sm sm:text-base">
                          Sarah Smith
                        </div>
                        <div className="text-xs sm:text-sm text-gray-500">
                          Content Manager
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4
                    id="system-logs-title"
                    className="text-base sm:text-lg font-semibold text-gray-700 mb-2 sm:mb-3"
                  >
                    Recent System Logs
                  </h4>
                  <ul className="space-y-2" aria-labelledby="system-logs-title">
                    <li className="p-2 sm:p-3 border border-gray-200 rounded-lg text-xs sm:text-sm">
                      <div className="text-gray-900 break-words">
                        [2025-03-12 09:45:21] User Login
                      </div>
                      <div className="text-gray-500 text-xs break-words">
                        Admin user 'johndoe' logged in successfully
                      </div>
                    </li>
                    <li className="p-2 sm:p-3 border border-gray-200 rounded-lg text-xs sm:text-sm">
                      <div className="text-gray-900 break-words">
                        [2025-03-12 08:30:15] System Update
                      </div>
                      <div className="text-gray-500 text-xs break-words">
                        Database backup completed successfully
                      </div>
                    </li>
                    <li className="p-2 sm:p-3 border border-gray-200 rounded-lg text-xs sm:text-sm">
                      <div className="text-gray-900 break-words">
                        [2025-03-11 17:22:43] User Created
                      </div>
                      <div className="text-gray-500 text-xs break-words">
                        New user 'alexwilson' created by admin 'johndoe'
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          )}
        </div>
      </main>

      {/* User Details Modal */}
      {showUserModal && (
        <UserModal
          user={selectedUser}
          onClose={() => setShowUserModal(false)}
        />
      )}
    </div>
  );
}
