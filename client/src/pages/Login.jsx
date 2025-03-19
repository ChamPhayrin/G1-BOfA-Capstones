import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "../api/axios";
import useAuth from "../hooks/useAuth";

const LOGIN_URL = "/auth";

export default function Login() {
  const { setAuth, persist, setPersist } = useAuth(); // Add persist and setPersist
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/"; // Redirect to the intended page after login
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [trustAccount, setTrustAccount] = useState(persist); // Add trustAccount state

  // Focus on the username input when the component mounts
  useEffect(() => {
    userRef.current.focus();
  }, []);

  // Clear the error message when the user or password changes
  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  // Handle trust account checkbox change
  const handleTrustAccountChange = () => {
    setTrustAccount((prev) => !prev);
    setPersist((prev) => !prev); // Update persist state in AuthContext
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ user, pwd }),
        { headers: { "Content-Type": "application/json" }, withCredentials: true }
      );
      const accessToken = response?.data?.accessToken;
      const roles = response?.data?.role_code;
      const user_id = response?.data?.user_id; // Ensure this is included in the response
      setAuth({ user, roles, accessToken, user_id }); // Set user_id in auth
      navigate(from, { replace: true });
    } catch (error) {
      console.error("Login failed:", error);
      if (!error?.response) {
        setErrMsg("No Server Response");
      } else if (error.response?.status === 400) {
        setErrMsg("Missing Username or Password");
      } else if (error.response?.status === 401) {
        setErrMsg("Incorrect Username or Password");
      } else {
        setErrMsg("Login Failed");
      }
      errRef.current.focus();
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 animated-background">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="relative h-16 bg-gradient-to-r from-sky-600 to-slate-600">
          <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-indigo-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="p-8 pt-10">
          <h1 className="text-2xl font-bold text-center text-gray-800 mb-8">
            Welcome Back
          </h1>

          {errMsg && (
            <div
              ref={errRef}
              className="mb-4 p-3 bg-red-50 border-l-4 border-red-500 text-red-700 rounded"
              aria-live="assertive"
            >
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
                {errMsg}
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                ref={userRef}
                autoComplete="off"
                onChange={(e) => setUser(e.target.value)}
                value={user}
                required
                className="w-full py-2 px-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter your username"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  onChange={(e) => setPwd(e.target.value)}
                  value={pwd}
                  required
                  className="w-full py-2 px-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-gray-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-gray-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Trust Account Checkbox */}
            <div className="flex items-center">
              <input
                type="checkbox"
                id="trustAccount"
                checked={trustAccount}
                onChange={handleTrustAccountChange}
                className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
              />
              <label
                htmlFor="trustAccount"
                className="ml-2 text-sm text-gray-700"
              >
                Trust this device
              </label>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-2 px-4 border border-transparent rounded-lg shadow-sm text-white bg-gradient-to-r from-sky-600 to-slate-600 hover:from-sky-700 hover:to-slate-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
            >
              {isLoading ? "Logging In..." : "Login"}
            </button>
          </form>

          <div className="text-center mt-6">
            <p>
              Need an Account? 
            </p>
            <Link
              to="/signup"
              className="text-sm text-indigo-600 hover:text-indigo-700"
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}