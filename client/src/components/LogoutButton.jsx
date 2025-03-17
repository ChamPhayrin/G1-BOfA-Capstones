import useLogout from "../hooks/useLogout";
import { useNavigate } from "react-router-dom";

export default function LogoutButton() {
  const logout = useLogout();
  const navigate = useNavigate();

  const signout = async () => {
    await logout();
    navigate('/');
  };

  return (
    <button onClick={signout}>Log Out</button>
  );
}
