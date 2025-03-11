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
        <section className="w-full max-w-[420px] min-h-[400px] flex flex-col justify-start p-4 bg-[rgba(0,0,0,0.4)]">
          <h1 className="text-white text-2xl mb-4">You're logged in!</h1>
          <p className="underline">
            <a href="#">Go to Home</a>
          </p>
        </section>
      ) : (
        <main>
          <section className="w-full max-w-[420px] min-h-[400px] flex flex-col justify-start p-4 bg-[rgba(0,0,0,0.4)]">
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

            <h1 className="text-white text-2xl mb-4">Sign In</h1>

            <form onSubmit={handleSubmit}>
              <label htmlFor="username" className="text-white mt-4">
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
                className="w-full p-2 rounded-lg text-black bg-white"
              />
              <label htmlFor="password" className="text-white mt-4">
                Password:
              </label>
              <input
                type="password"
                id="password"
                onChange={(e) => setPwd(e.target.value)}
                value={pwd}
                required
                className="w-full p-2 rounded-lg text-black bg-white"
              />

              <button className="w-full py-2 mt-4 bg-blue-500 text-white rounded-lg">
                Sign In
              </button>
            </form>

            <p className="text-white mt-4">
              Need an Account? <br />
              <span className="underline">
                <a href="#">Sign up</a>
              </span>
            </p>
          </section>
        </main>
      )}
    </>
  );
}
