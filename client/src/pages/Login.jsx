import React, { useState, useRef, useEffect, useContext } from "react";
import AuthContext from "../context/AuthProvider";
import axios from "../api/axios";

const login_url = "/auth";

export default function Login() {
  const { setAuth } = useContext(AuthContext);

  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        login_url,
        JSON.stringify({ user, pwd }),
        {
          headers: { "Content-type": "application/json" },
          withCredentials: true,
        }
      );
      console.log(JSON.stringify(response?.data));
      const accessToken = response?.data?.accessToken;
      const roles = response?.data?.roles;
      setAuth({ user, pwd, roles, accessToken });
      setUser("");
      setPwd("");
      setSuccess(true);
    } catch (error) {
      if (!error?.response) {
        setErrMsg("No Server Response");
      } else if (error.response?.status === 400) {
        setErrMsg("Missing Username or Password");
      } else if (error.response?.status === 401) {
        setErrMsg("Incorrect Username or Password");
      } else {
        setErrMsg("Login failed");
      }
      errRef.current.focus();
    }
  };

  return (
    <>
      {success ? (
        <section className="flex min-h-screen">
          <div className="w-full md:w-1/2 p-8 flex flex-col justify-center bg-gray-800 text-white">
            <h1 className="text-2xl mb-4">You're logged in!</h1>
            <p className="underline">
              <a href="#">Go to Home</a>
            </p>
          </div>
          <div
            className="hidden md:block w-1/2 bg-cover bg-center"
            style={{
              backgroundImage: 'url("/purpleShirt.avif")',
            }}
          ></div>
        </section>
      ) : (
        <section className="flex min-h-screen bg-gray-100">
          {/* Image on the left */}
          <div
            className="hidden md:block w-1/2 bg-cover bg-center"
            style={{ backgroundImage: 'url("/purpleShirt.avif")' }}
          ></div>
          <div className="w-full md:w-1/2 p-8 flex flex-col justify-center bg-white text-black">
            {/* Error Message */}
            <p
              ref={errRef}
              className={`${
                errMsg
                  ? "bg-lightpink text-firebrick font-bold p-2 mb-2"
                  : "absolute left-[-9999px]"
              }`}
              aria-live="assertive"
            >
              {errMsg}
            </p>

            {/* Form Title */}
            <h1 className="text-blue-600 text-2xl text-center mb-4">Sign In</h1>

            {/* Form Container with Box Shadow */}
            <div className="w-full max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
              <form onSubmit={handleSubmit}>
                {/* Username */}
                <label
                  htmlFor="username"
                  className="block text-left text-lg font-semibold mb-2 text-black"
                >
                  Username:
                </label>
                <input
                  type="text"
                  id="username"
                  ref={userRef}
                  autoComplete="off"
                  onChange={(e) => setUser(e.target.value)}
                  value={user}
                  required
                  className="w-full p-3 rounded-lg text-black bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                {/* Password */}
                <label
                  htmlFor="password"
                  className="block text-left text-lg font-semibold mb-2 text-black"
                >
                  Password:
                </label>
                <input
                  type="password"
                  id="password"
                  onChange={(e) => setPwd(e.target.value)}
                  value={pwd}
                  required
                  className="w-full p-3 rounded-lg text-black bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                {/* Submit Button */}
                <button className="w-full py-3 mt-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  Sign In
                </button>
              </form>
            </div>

            {/* Sign up Link */}
            <p className="text-center text-black mt-4">
              Need an Account? <br />
              <span className="underline text-blue-600">
                <a href="#">Sign up</a>
              </span>
            </p>
          </div>
        </section>
      )}
    </>
  );
}
