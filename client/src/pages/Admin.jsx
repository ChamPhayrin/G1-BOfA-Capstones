import React, { useState, useEffect } from "react";
import {
  faUsers,
  faSignOutAlt,
  faSearch,
  faFilter,
  faTrash,
  faEdit,
  faEye,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import LogoutButton from "../components/LogoutButton";

// Reusable UserModal Component (same as before)
const UserModal = ({ user, onClose, onDelete, onUpdate }) => {
  if (!user) return null;

  const handleEscapeKey = (e) => {
    if (e.key === "Escape") onClose();
  };

  useEffect(() => {
    const modalElement = document.getElementById("user-modal");
    if (modalElement) modalElement.focus();

    window.addEventListener("keydown", handleEscapeKey);
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
              onClick={() => onUpdate(user.id, { role: "admin" })}
              aria-label={`Edit ${user.username}`}
            >
              <FontAwesomeIcon icon={faEdit} className="mr-2" /> Edit
            </button>
            <button
              className="py-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition flex items-center justify-center"
              onClick={() => onDelete(user.id)}
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

// Main Admin Component
export default function Admin() {
  const [activeTab, setActiveTab] = useState("users");
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);
  const [showUserModal, setShowUserModal] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(10);

  const axiosPrivate = useAxiosPrivate();

  // Fetch users from the backend
  useEffect(() => {
    const fetchUsers = async () => {
      setIsLoading(true);
      try {
        const response = await axiosPrivate.get("/users");
        setUsers(response.data);
      } catch (err) {
        setError("Failed to fetch users");
      } finally {
        setIsLoading(false);
      }
    };

    fetchUsers();
  }, [axiosPrivate]);

  // Handle viewing user details
  const handleViewUser = (user) => {
    setSelectedUser(user);
    setShowUserModal(true);
  };

  // Handle deleting a user
  const handleDeleteUser = async (userId) => {
    try {
      await axiosPrivate.delete(`/users/${userId}`);
      setUsers(users.filter((user) => user.id !== userId));
    } catch (err) {
      setError("Failed to delete user");
    }
  };

  // Handle updating a user
  const handleUpdateUser = async (userId, updatedData) => {
    try {
      await axiosPrivate.put(`/users/${userId}`, updatedData);
      setUsers(
        users.map((user) =>
          user.id === userId ? { ...user, ...updatedData } : user
        )
      );
    } catch (err) {
      setError("Failed to update user");
    }
  };

  // Pagination logic
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-100">
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
          </ul>
          <div className="mt-8 pt-4 border-t">
            <LogoutButton /> {/* Use the LogoutButton component */}
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <header className="h-16 bg-white shadow-sm flex items-center justify-between px-4 sm:px-6 sticky top-0 z-5">
          <h2 className="text-lg font-medium ml-8 lg:ml-0">User Management</h2>
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
          {/* User Management Section */}
          {/* ... (rest of the JSX remains the same) ... */}
        </div>
      </main>

      {/* User Details Modal */}
      {showUserModal && (
        <UserModal
          user={selectedUser}
          onClose={() => setShowUserModal(false)}
          onDelete={handleDeleteUser}
          onUpdate={handleUpdateUser}
        />
      )}
    </div>
  );
}