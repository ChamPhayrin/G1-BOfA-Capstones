import React, { useState, useEffect, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faTrash,
  faUsers,
  faBars,
  faTimes,
  faEye,
} from "@fortawesome/free-solid-svg-icons";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import LogoutButton from "../components/LogoutButton";

// Reusable Confirmation Modal
const ConfirmationModal = ({ message, onConfirm, onCancel, isDeleting }) => {
  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
      role="dialog"
      aria-labelledby="confirmation-title"
      aria-describedby="confirmation-message"
      aria-modal="true"
    >
      <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg max-w-md w-full">
        <h2
          id="confirmation-title"
          className="text-xl font-bold text-gray-800 mb-4"
        >
          Confirm Deletion
        </h2>
        <p id="confirmation-message" className="text-gray-600 mb-6">
          {message}
        </p>
        <div className="flex justify-end gap-4">
          <button
            onClick={onCancel}
            className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 transition-colors"
            disabled={isDeleting}
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition-colors"
            disabled={isDeleting}
            aria-busy={isDeleting}
          >
            {isDeleting ? "Deleting..." : "Delete"}
          </button>
        </div>
      </div>
    </div>
  );
};

// Users Table Component
const UsersTable = ({ users, confirmDelete }) => {
  return (
    <section
      className="bg-white rounded-lg shadow-sm p-4"
      aria-labelledby="users-heading"
    >
      <h2 id="users-heading" className="text-xl font-bold text-gray-800 mb-4">
        Users
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full" aria-label="Users list">
          <thead>
            <tr>
              <th scope="col" className="text-left p-2">
                Username
              </th>
              <th scope="col" className="text-left p-2">
                Email
              </th>
              <th scope="col" className="text-left p-2">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {users.length === 0 ? (
              <tr>
                <td colSpan="3" className="p-4 text-center text-gray-500">
                  No users found
                </td>
              </tr>
            ) : (
              users.map((user) => (
                <tr key={user.id} className="border-b">
                  <td className="p-2">{user.username}</td>
                  <td className="p-2">{user.email}</td>
                  <td className="p-2">
                    <button
                      onClick={() => confirmDelete("user", user.id)}
                      className="text-red-600 hover:text-red-800 focus:outline-none focus:ring-2 focus:ring-red-500 rounded-full p-1"
                      aria-label={`Delete user ${user.username}`}
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
};

// Messages Table Component
const MessagesTable = ({ messages, confirmDelete, setSelectedMessage }) => {
  return (
    <section
      className="bg-white rounded-lg shadow-sm p-4"
      aria-labelledby="messages-heading"
    >
      <h2
        id="messages-heading"
        className="text-xl font-bold text-gray-800 mb-4"
      >
        Messages
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full" aria-label="Messages list">
          <thead>
            <tr>
              <th scope="col" className="text-left p-2">
                Name
              </th>
              <th scope="col" className="text-left p-2 hidden sm:table-cell">
                Email
              </th>
              <th scope="col" className="text-left p-2">
                Subject
              </th>
              <th scope="col" className="text-left p-2">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {messages.length === 0 ? (
              <tr>
                <td colSpan="4" className="p-4 text-center text-gray-500">
                  No messages found
                </td>
              </tr>
            ) : (
              messages.map((message) => (
                <tr key={message.id} className="border-b">
                  <td className="p-2">{message.name}</td>
                  <td className="p-2 hidden sm:table-cell">{message.email}</td>
                  <td className="p-2 truncate max-w-xs">{message.subject}</td>
                  <td className="p-2 flex gap-2">
                    <button
                      onClick={() => setSelectedMessage(message)}
                      className="text-blue-600 hover:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full p-1"
                      aria-label={`View message from ${message.name}`}
                    >
                      <FontAwesomeIcon icon={faEye} />
                      <span className="sr-only">View</span>
                    </button>
                    <button
                      onClick={() => confirmDelete("message", message.id)}
                      className="text-red-600 hover:text-red-800 focus:outline-none focus:ring-2 focus:ring-red-500 rounded-full p-1"
                      aria-label={`Delete message from ${message.name}`}
                    >
                      <FontAwesomeIcon icon={faTrash} />
                      <span className="sr-only">Delete</span>
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
};

// Message Details Component
const MessageDetails = ({ message, onClose }) => {
  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
      role="dialog"
      aria-labelledby="message-details-title"
      aria-modal="true"
    >
      <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg max-w-md w-full">
        <h2
          id="message-details-title"
          className="text-xl font-bold text-gray-800 mb-4"
        >
          Message Details
        </h2>
        <div className="space-y-4">
          <dl>
            <div className="flex flex-col sm:flex-row sm:gap-2">
              <dt className="font-medium text-gray-600">Name:</dt>
              <dd className="break-words">{message.name}</dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-2">
              <dt className="font-medium text-gray-600">Email:</dt>
              <dd className="break-words">{message.email}</dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-2">
              <dt className="font-medium text-gray-600">Subject:</dt>
              <dd className="break-words">{message.subject}</dd>
            </div>
            <div className="flex flex-col">
              <dt className="font-medium text-gray-600">Message:</dt>
              <dd className="mt-2 text-gray-800 break-words">
                {message.message}
              </dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-2">
              <dt className="font-medium text-gray-600">Status:</dt>
              <dd>{message.status}</dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-2">
              <dt className="font-medium text-gray-600">Created At:</dt>
              <dd>{new Date(message.created_at).toLocaleString()}</dd>
            </div>
          </dl>
        </div>
        <button
          onClick={onClose}
          className="mt-4 w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
          aria-label="Close message details"
        >
          Close
        </button>
      </div>
    </div>
  );
};

// Main Admin Component
export default function Admin() {
  const [activeTab, setActiveTab] = useState("messages");
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [itemToDelete, setItemToDelete] = useState({ type: null, id: null });
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const axiosPrivate = useAxiosPrivate();

  // Fetch data based on the active tab
  const fetchData = useCallback(async () => {
    setIsLoading(true);
    setError("");
    try {
      if (activeTab === "messages") {
        const messagesResponse = await axiosPrivate.get("/messages");
        setMessages(messagesResponse.data);
      } else if (activeTab === "users") {
        const usersResponse = await axiosPrivate.get("/users");
        setUsers(usersResponse.data);
      }
    } catch (err) {
      setError("Failed to fetch data");
    } finally {
      setIsLoading(false);
    }
  }, [axiosPrivate, activeTab]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setSidebarOpen(false);
  };

  // Handle deleting a user or message
  const handleDelete = async () => {
    setIsDeleting(true);
    try {
      if (!itemToDelete.id) {
        setError("ID is required.");
        return;
      }
      if (itemToDelete.type === "user") {
        await axiosPrivate.delete(`/users/${itemToDelete.id}`);
        setUsers(users.filter((user) => user.id !== itemToDelete.id));
      } else if (itemToDelete.type === "message") {
        await axiosPrivate.delete(`/messages/${itemToDelete.id}`);
        setMessages(
          messages.filter((message) => message.id !== itemToDelete.id)
        );
      }
      setShowConfirmation(false);
      setError("");
    } catch (err) {
      setError("Failed to delete item");
    } finally {
      setIsDeleting(false);
    }
  };

  // Show confirmation modal
  const confirmDelete = (type, id) => {
    setItemToDelete({ type, id });
    setShowConfirmation(true);
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-100">
      {/* Mobile Header */}
      <header
        className="lg:hidden flex items-center justify-between h-16 bg-gradient-to-r from-sky-600 to-slate-600 text-white px-4"
        role="banner"
      >
        <h1 className="text-xl font-bold">Admin Dashboard</h1>
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-label={sidebarOpen ? "Close menu" : "Open menu"}
          aria-expanded={sidebarOpen}
          aria-controls="sidebar-menu"
          className="text-white p-2 focus:outline-none focus:ring-2 focus:ring-white rounded-md"
        >
          <FontAwesomeIcon
            icon={sidebarOpen ? faTimes : faBars}
            size="lg"
            aria-hidden="true"
          />
        </button>
      </header>

      {/* Overlay for mobile sidebar */}
      {sidebarOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-20"
          onClick={() => setSidebarOpen(false)}
          aria-hidden="true"
        ></div>
      )}

      {/* Sidebar */}
      <aside
        id="sidebar-menu"
        className={`fixed lg:static top-0 left-0 z-30 w-64 h-full bg-white shadow-md transform transition-transform duration-300 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
        aria-label="Admin navigation"
      >
        <div className="h-16 bg-gradient-to-r from-sky-600 to-slate-600 flex items-center justify-center">
          <h1 className="text-white text-xl font-bold">Admin Dashboard</h1>
        </div>
        <nav className="px-4 py-6" aria-label="Admin sections">
          <ul className="space-y-2" list-none pl-0 role="list">
            <li>
              <button
                onClick={() => handleTabChange("users")}
                className={`w-full flex items-center p-3 text-gray-700 rounded-lg ${
                  activeTab === "users"
                    ? "bg-indigo-50 text-indigo-600"
                    : "hover:bg-gray-50"
                }`}
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
            <li>
              <button
                onClick={() => handleTabChange("messages")}
                className={`w-full flex items-center p-3 text-gray-700 rounded-lg ${
                  activeTab === "messages"
                    ? "bg-indigo-50 text-indigo-600"
                    : "hover:bg-gray-50"
                }`}
                aria-current={activeTab === "messages" ? "page" : undefined}
              >
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="mr-3"
                  aria-hidden="true"
                />
                <span>Messages</span>
              </button>
            </li>
          </ul>
          <div className="mt-8 pt-4 border-t">
            <LogoutButton />
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto pt-0 lg:pt-0" id="main-content">
        <header className="h-16 bg-white shadow-sm flex items-center justify-between px-4 sticky top-0 z-10">
          <h2 className="text-lg font-medium">
            {activeTab === "users" ? "User Management" : "Message Management"}
          </h2>
        </header>

        <div className="p-2 sm:p-4 md:p-6">
          {isLoading ? (
            <div
              className="flex justify-center items-center h-64"
              role="status"
              aria-live="polite"
            >
              <span className="text-gray-600">Loading...</span>
            </div>
          ) : error ? (
            <div
              className="bg-red-50 border-l-4 border-red-500 p-4 mb-6"
              role="alert"
              aria-live="assertive"
            >
              <p className="text-red-700">{error}</p>
            </div>
          ) : activeTab === "users" ? (
            <UsersTable users={users} confirmDelete={confirmDelete} />
          ) : (
            <MessagesTable
              messages={messages}
              confirmDelete={confirmDelete}
              setSelectedMessage={setSelectedMessage}
            />
          )}
        </div>
      </main>

      {/* Confirmation Modal */}
      {showConfirmation && (
        <ConfirmationModal
          message={`Are you sure you want to delete this ${itemToDelete.type}?`}
          onConfirm={handleDelete}
          onCancel={() => setShowConfirmation(false)}
          isDeleting={isDeleting}
        />
      )}

      {/* Message Details Pop-up */}
      {selectedMessage && (
        <MessageDetails
          message={selectedMessage}
          onClose={() => setSelectedMessage(null)}
        />
      )}
    </div>
  );
}
