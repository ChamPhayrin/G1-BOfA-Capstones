import React, { useState } from "react";
import useLogout from "../hooks/useLogout";
import { useNavigate } from "react-router-dom";

const LogoutButton = () => {
  const logout = useLogout();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false); // Loading state for logout

  const signout = async () => {
    setIsLoading(true); // Start loading
    try {
      await logout(); // Call the logout hook
      localStorage.removeItem("persist"); // Clear persistence preference
      navigate("/"); // Navigate to the home page
    } catch (error) {
      console.error("Logout failed:", error);
      alert("Logout failed. Please try again."); // Show error message to the user
    } finally {
      setIsLoading(false); // Stop loading
    }
  };

  return (
    <button onClick={signout} disabled={isLoading}>
      {isLoading ? "Logging out..." : "Log Out"}
    </button>
  );
};

export default LogoutButton;