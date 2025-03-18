import React, { useState, useEffect } from "react";
import { UserIcon } from "@heroicons/react/24/outline";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import { useNavigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useLogout from "../hooks/useLogout";

export default function UserAccount() {
  const [userData, setUserData] = useState({ name: "", email: "", accountCreated: "", id: "" });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [newUsername, setNewUsername] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);

  const axiosPrivate = useAxiosPrivate();
  const navigate = useNavigate();
  const location = useLocation();
  const { auth } = useAuth();
  const user_id = auth?.user_id;
  const logout = useLogout();

  // Fetch user data on component mount
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axiosPrivate.get(`/users/${user_id}`);
        setUserData({
          name: response.data.username,
          email: response.data.email,
          accountCreated: response.data.created_at,
          id: response.data.id,
        });
        setError(null);
      } catch (error) {
        console.error("Error fetching user data:", error);
        setError("We couldn't load your account information. Please try again later.");
        if (error.response?.status === 401) {
          navigate("/login", { state: { from: location }, replace: true });
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserData();
  }, [axiosPrivate, navigate, user_id, location]);

  // Handle username update
  const handleUpdateUser = async () => {
    if (!newUsername || newUsername.trim() === "") {
      setError("Please enter a username before updating.");
      return;
    }

    try {
      const payload = { id: userData.id, username: newUsername };
      await axiosPrivate.put(`/users/${userData.id}`, payload);

      setUserData((prev) => ({ ...prev, name: newUsername }));
      setNewUsername("");
      setError(null);
      setSuccess("Your username has been updated successfully!");

      // Clear success message after 5 seconds
      setTimeout(() => setSuccess(null), 5000);
    } catch (error) {
      console.error("Error updating user:", error);
      setError("We couldn't update your username. Please try again later.");
    }
  };

  // Handle account deletion
  const handleDeleteUser = async () => {
    try {
      const payload = { id: userData.id };
      await axiosPrivate.delete(`/users/${userData.id}`, { data: payload });

      // Log out the user after deletion
      await logout();
      navigate("/", { replace: true });
    } catch (error) {
      console.error("Error deleting user:", error);
      setError("We couldn't delete your account. Please try again later.");
      setShowConfirmation(false);
    }
  };

  // Handle logout
  const handleLogout = async () => {
    try {
      await logout();
      navigate("/login", { state: { from: location }, replace: true });
    } catch (error) {
      console.error("Error logging out:", error);
      setError("We couldn't log you out. Please try again.");
    }
  };

  // Handle keydown for modal
  const handleKeyDown = (e) => {
    if (e.key === 'Escape' && showConfirmation) {
      setShowConfirmation(false);
    }
  };

  // Focus trap for modal
  useEffect(() => {
    if (showConfirmation) {
      // Add event listener for escape key
      document.addEventListener('keydown', handleKeyDown);
      // Find all focusable elements
      const modal = document.getElementById('delete-confirmation-modal');
      const focusableElements = modal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];
      
      // Focus the first element
      firstElement.focus();

      // Add event listener for tab key to create focus trap
      const trapFocus = (e) => {
        if (e.key === 'Tab') {
          if (e.shiftKey && document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          } else if (!e.shiftKey && document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      };
      
      document.addEventListener('keydown', trapFocus);
      
      // Clean up
      return () => {
        document.removeEventListener('keydown', handleKeyDown);
        document.removeEventListener('keydown', trapFocus);
      };
    }
  }, [showConfirmation]);

  // Loading state
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div role="status" aria-label="Loading account information" className="text-center">
          <svg className="inline mr-2 w-8 h-8 text-gray-200 animate-spin fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
          </svg>
          <span className="sr-only">Loading</span>
          <p className="mt-2 text-lg">Loading your account information...</p>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <header className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Your Account</h1>
          <p className="text-gray-600">Manage your personal information</p>
        </header>

        {/* Error Message */}
        {error && (
          <div role="alert" className="bg-red-50 border-l-4 border-red-500 p-4 mb-6 rounded-md">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-red-700">{error}</p>
              </div>
            </div>
          </div>
        )}

        {/* Success Message */}
        {success && (
          <div role="status" className="bg-green-50 border-l-4 border-green-500 p-4 mb-6 rounded-md">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-green-700">{success}</p>
              </div>
            </div>
          </div>
        )}

        {/* Profile Section */}
        <section className="bg-white rounded-xl shadow-sm p-6 mb-6" aria-labelledby="profile-heading">
          <h2 id="profile-heading" className="text-xl font-bold text-gray-800 mb-4">Your Profile</h2>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0" aria-hidden="true">
              <UserIcon className="w-10 h-10 text-blue-600" aria-hidden="true" />
            </div>
            <div className="flex-1">
              <dl>
                <div className="mb-2">
                  <dt className="text-sm font-medium text-gray-500">Username</dt>
                  <dd className="text-lg font-medium text-gray-900">{userData.name}</dd>
                </div>
                <div className="mb-2">
                  <dt className="text-sm font-medium text-gray-500">Email Address</dt>
                  <dd className="text-lg text-gray-900">{userData.email}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500">Member Since</dt>
                  <dd className="text-lg text-gray-900">
                    {new Date(userData.accountCreated).toLocaleDateString(undefined, {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        {/* Update Username Section */}
        <section className="bg-white rounded-xl shadow-sm p-6 mb-6" aria-labelledby="update-heading">
          <h2 id="update-heading" className="text-xl font-bold text-gray-800 mb-4">Change Your Username</h2>
          <form 
            className="max-w-md"
            onSubmit={(e) => {
              e.preventDefault();
              handleUpdateUser();
            }}
          >
            <div className="mb-4">
              <label htmlFor="newUsername" className="block text-lg font-medium text-gray-700 mb-2">
                New Username
              </label>
              <input
                type="text"
                id="newUsername"
                name="newUsername"
                value={newUsername}
                onChange={(e) => setNewUsername(e.target.value)}
                className="w-full px-4 py-3 text-lg border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your new username"
                aria-describedby="username-description"
              />
              <p id="username-description" className="mt-2 text-sm text-gray-500">
                Your username is how other users will see you.
              </p>
            </div>
            <button
              type="submit"
              className="w-full sm:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-lg font-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
            >
              Save New Username
            </button>
          </form>
        </section>

        {/* Account Actions Section */}
        <section className="bg-white rounded-xl shadow-sm p-6" aria-labelledby="account-actions-heading">
          <h2 id="account-actions-heading" className="text-xl font-bold text-gray-800 mb-4">Account Actions</h2>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={handleLogout}
              className="px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-700 text-lg font-medium rounded-lg flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V4a1 1 0 00-1-1H3zm11 4a1 1 0 10-2 0v4a1 1 0 102 0V7z" clipRule="evenodd" />
                <path d="M8.293 7.293a1 1 0 011.414 0L11 8.586l1.293-1.293a1 1 0 111.414 1.414l-2 2a1 1 0 01-1.414 0l-2-2a1 1 0 010-1.414z" />
              </svg>
              Log Out
            </button>
            <button
              onClick={() => setShowConfirmation(true)}
              className="px-6 py-3 bg-red-100 hover:bg-red-200 text-red-700 text-lg font-medium rounded-lg flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors"
              aria-haspopup="dialog"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              Delete Account
            </button>
          </div>
        </section>

        {/* Delete Confirmation Modal */}
        {showConfirmation && (
          <div 
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" 
            role="dialog" 
            aria-labelledby="delete-modal-title" 
            aria-modal="true"
            id="delete-confirmation-modal"
          >
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
              <h2 id="delete-modal-title" className="text-xl font-bold text-gray-800 mb-4">Delete Your Account?</h2>
              <p className="text-gray-600 mb-6">
                Are you sure you want to delete your account? This action cannot be undone.
              </p>
              <div className="flex justify-end gap-4">
                <button
                  onClick={() => setShowConfirmation(false)}
                  className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleDeleteUser}
                  className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition-colors"
                >
                  Delete Account
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}