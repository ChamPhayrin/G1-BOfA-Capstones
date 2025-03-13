import axios from "../api/axios";
import useAuth from "./useAuth";

const useRefreshToken = () => {
  const { setAuth } = useAuth();

  const refresh = async () => {
    try {
      const response = await axios.get("/refresh", {
        withCredentials: true, // Allows sending cookies with the request
      });

      // Update the authentication state with the new access token
      setAuth((prev) => {
        console.log("Previous auth state:", JSON.stringify(prev));
        console.log("New access token:", response.data.accessToken);
        return { 
          ...prev, 
          roles: response.data.roles,
          accessToken: response.data.accessToken
        };
      });

      // Return the new access token for use in the interceptor
      return response.data.accessToken;
    } catch (error) {
      console.error("Error refreshing token:", error);
      throw error; // Propagate the error to the caller
    }
  };

  return refresh; // Return the refresh function
};

export default useRefreshToken;