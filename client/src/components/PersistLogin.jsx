import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import useRefreshToken from "../hooks/useRefreshToken";
import useAuth from "../hooks/useAuth";

const PersistLogin = () => {
  const [isLoading, setIsLoading] = useState(true);
  const refresh = useRefreshToken();
  const { auth, persist } = useAuth();

  useEffect(() => {
    let isMounted = true; // Prevent state updates if the component unmounts

    const verifyRefreshToken = async () => {
      try {
        await refresh();
      } catch (error) {
        console.error(error);
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    // If there's no access token and persistence is enabled, try refreshing
    if (persist && !auth?.accessToken) {
      verifyRefreshToken();
    } else {
      setIsLoading(false);
    }

    return () => {
      isMounted = false;
    }; // Cleanup function to prevent memory leaks
  }, [auth, persist, refresh]);

  useEffect(() => {
  }, [isLoading, auth]);

  // Conditionally render the Outlet based on persist and loading state
  if (isLoading) {
    return <p>Loading...</p>; // Show loading until the refresh token process is complete
  }

  return <Outlet />; // Render the Outlet after loading is complete
};

export default PersistLogin;
