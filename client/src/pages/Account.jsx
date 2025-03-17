import React, { useState, useEffect } from "react";
import { UserIcon } from "@heroicons/react/24/outline";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import { useNavigate, useLocation } from "react-router-dom"; // Import useLocation
import useAuth from "../hooks/useAuth";

export default function ModernUserAccount() {
  const [userData, setUserData] = useState({ name: "", email: "", accountCreated: "", id: "" });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const axiosPrivate = useAxiosPrivate();
  const navigate = useNavigate();
  const location = useLocation(); // Use useLocation
  const { auth } = useAuth();
  const user_id = auth?.user_id;

  // Fetch user data
  useEffect(() => {
    if (!user_id) {
      console.error("User ID is undefined. Redirecting to login...");
      navigate("/login", { state: { from: location }, replace: true });
      return;
    }

    const fetchUserData = async () => {
      try {
        const response = await axiosPrivate.get(`/users/${user_id}`);
        console.log("API Response:", response.data); // Debugging
        setUserData({
          name: response.data.username,
          email: response.data.email,
          accountCreated: response.data.created_at,
          id: response.data.id,
        });
        setError(null);
      } catch (error) {
        console.error("Error fetching user data:", error);
        setError("Failed to fetch user data.");
        if (error.response?.status === 401) {
          navigate("/login", { state: { from: location }, replace: true });
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserData();
  }, [axiosPrivate, navigate, user_id, location]);

  // Update user
  const handleUpdateUser = async (newUsername) => {
    try {
      await axiosPrivate.put(`/users/${userData.id}`, { username: newUsername });
      setUserData((prev) => ({ ...prev, name: newUsername }));
    } catch (error) {
      console.error("Error updating user:", error);
      setError("Failed to update username.");
    }
  };

  // Delete user
  const handleDeleteUser = async () => {
    try {
      await axiosPrivate.delete(`/users/${userData.id}`);
      // Handle logout or redirect after deletion
      navigate("/login", { state: { from: location }, replace: true });
    } catch (error) {
      console.error("Error deleting user:", error);
      setError("Failed to delete account.");
    }
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="flex-1 p-6">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-bold text-gray-800 mb-4">Profile</h3>
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
              <UserIcon className="w-8 h-8 text-gray-600" />
            </div>
            <div>
              <h4 className="text-gray-800 font-medium">{userData.name}</h4>
              <p className="text-gray-500 text-sm">{userData.email}</p>
              <p className="text-gray-500 text-sm">
                Account Created: {new Date(userData.accountCreated).toLocaleDateString()}
              </p>
              <button
                onClick={() => handleUpdateUser("NewUsername")}
                className="mt-2 text-sky-600"
              >
                Update Username
              </button>
              <button
                onClick={handleDeleteUser}
                className="ml-4 mt-2 text-red-600"
              >
                Delete Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}