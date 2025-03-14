import axios from "../api/axios";
import useAuth from "./useAuth";

const useLogout = () => {
  const { setAuth, setPersist } = useAuth();

  const logout = async () => {
    // Reset auth and persist state
    setAuth({});
    setPersist(false);  // Reset persist on logout

    try {
      await axios('/logout', {
        withCredentials: true,
      });
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return logout;
};

export default useLogout;
