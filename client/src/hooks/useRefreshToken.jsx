import axios from "../api/axios";
import useAuth from "./useAuth";

const useRefreshToken = () => {
  const { setAuth } = useAuth();

  const refresh = async () => {
    try {
      const response = await axios.get("/refresh", {
        withCredentials: true, // Include cookies in the request
      });

      setAuth((prev) => ({
        ...prev,
        accessToken: response.data.accessToken,
        user: response.data.user,
        roles: response.data.roles,
      }));

      return response.data.accessToken;
    } catch (error) {
      console.error("Error refreshing token:", error);
      throw error;
    }
  };

  return refresh;
};

export default useRefreshToken;