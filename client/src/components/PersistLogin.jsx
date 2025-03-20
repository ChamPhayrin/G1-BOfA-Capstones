import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import useRefreshToken from "../hooks/useRefreshToken";
import useAuth from "../hooks/useAuth";

const PersistLogin = () => {
  const [isLoading, setIsLoading] = useState(true);
  const refresh = useRefreshToken();
  const { auth, persist } = useAuth();

  useEffect(() => {
    let isMounted = true;

    const verifyRefreshToken = async () => {
      try {
        await refresh(); // Refresh the access token using the refresh token
      } catch (error) {
        console.error("Error refreshing token:", error);
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    // Only verify refresh token if persistence is enabled and no access token exists
    if (persist && !auth?.accessToken) {
      verifyRefreshToken();
    } else {
      setIsLoading(false);
    }

    return () => {
      isMounted = false;
    };
  }, [auth, persist, refresh]);

  return isLoading ? <p>Loading...</p> : <Outlet />;
};

export default PersistLogin;