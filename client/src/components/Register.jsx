import React, { useEffect, useState, useRef } from "react";
import {
  faCheck,
  faTimes,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "../api/axios";

export default function Register({ register_url, title }) {
  const user_regex = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
  const pwd_regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%]).{8,24}$/;
  const email_regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    const result = user_regex.test(user);
    setValidName(result);
  }, [user]);

  useEffect(() => {
    const result = email_regex.test(email);
    setValidEmail(result);
  }, [email]);

  useEffect(() => {
    const result = pwd_regex.test(pwd);
    setValidPwd(result);
    const match = pwd === matchPwd;
    setValidMatch(match);
  }, [pwd, matchPwd]);

  useEffect(() => {
    setErrMsg("");
  }, [user, email, pwd, matchPwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validName || !validEmail || !validPwd || !validMatch) {
      setErrMsg("Invalid input. Please check your entries.");
      return;
    }

    try {
      const response = await axios.post(
        register_url,
        JSON.stringify({ username: user, email, password: pwd }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      setSuccess(true);
      setUser("");
      setEmail("");
      setPwd("");
      setMatchPwd("");
      setErrMsg("");
    } catch (error) {
      if (!error?.response) {
        setErrMsg("No Server Response");
      } else if (error.response?.status === 409) {
        setErrMsg("Username or email already exists");
      } else {
        setErrMsg("Registration failed");
      }
      errRef.current.focus();
    }
  };

  return (
    <>
      {success ? (
        <section className="flex min-h-screen">
          <div className="w-full md:w-1/2 p-8 flex flex-col justify-center bg-gray-800 text-white">
            <h1 className="text-2xl mb-4">Success!</h1>
            <p className="underline">
              <a href="#">Sign in</a>
            </p>
          </div>
          <div
            className="hidden md:block w-1/2 bg-cover bg-center"
            style={{ backgroundImage: 'url("/path/to/your/image.jpg")' }}
          ></div>
        </section>
      ) : (
        <section className="flex min-h-screen">
          <div className="w-full md:w-1/2 p-8 flex flex-col justify-center bg-white text-black">
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
            <h1 className="text-2xl mb-4">{title}</h1>
            <div className="max-w-md mx-auto w-full">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Username input */}
                <div className="flex flex-col">
                  <label htmlFor="username" className="text-black mt-2">
                    Username:
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="username"
                      ref={userRef}
                      autoComplete="off"
                      onChange={(e) => setUser(e.target.value)}
                      required
                      aria-invalid={validName ? "false" : "true"}
                      onFocus={() => setUserFocus(true)}
                      onBlur={() => setUserFocus(false)}
                      className="w-full p-2 rounded-lg text-black border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <span
                      className={`absolute right-3 top-3 ${
                        validName ? "text-green-500" : "hidden"
                      }`}
                    >
                      <FontAwesomeIcon icon={faCheck} />
                    </span>
                    <span
                      className={`absolute right-3 top-3 ${
                        validName || !user ? "hidden" : "text-red-500"
                      }`}
                    >
                      <FontAwesomeIcon icon={faTimes} />
                    </span>
                  </div>
                  <p
                    className={`${
                      userFocus && user && !validName
                        ? "text-sm rounded-lg bg-black text-white p-1"
                        : "absolute left-[-9999px]"
                    }`}
                  >
                    <FontAwesomeIcon icon={faInfoCircle} className="mr-1" />4 to
                    24 characters. Must begin with a letter.
                  </p>
                </div>

                {/* Email input */}
                <div className="flex flex-col">
                  <label htmlFor="email" className="text-black mt-4">
                    Email:
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      aria-invalid={validEmail ? "false" : "true"}
                      onFocus={() => setEmailFocus(true)}
                      onBlur={() => setEmailFocus(false)}
                      className="w-full p-2 rounded-lg text-black border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <span
                      className={`absolute right-3 top-3 ${
                        validEmail ? "text-green-500" : "hidden"
                      }`}
                    >
                      <FontAwesomeIcon icon={faCheck} />
                    </span>
                    <span
                      className={`absolute right-3 top-3 ${
                        validEmail || !email ? "hidden" : "text-red-500"
                      }`}
                    >
                      <FontAwesomeIcon icon={faTimes} />
                    </span>
                  </div>
                  <p
                    className={`${
                      emailFocus && email && !validEmail
                        ? "text-sm rounded-lg bg-black text-white p-1"
                        : "absolute left-[-9999px]"
                    }`}
                  >
                    <FontAwesomeIcon icon={faInfoCircle} className="mr-1" />
                    Must be a valid email address.
                  </p>
                </div>

                {/* Password input */}
                <div className="flex flex-col">
                  <label htmlFor="password" className="text-black mt-4">
                    Password:
                  </label>
                  <div className="relative">
                    <input
                      type="password"
                      id="password"
                      onChange={(e) => setPwd(e.target.value)}
                      required
                      aria-invalid={validPwd ? "false" : "true"}
                      onFocus={() => setPwdFocus(true)}
                      onBlur={() => setPwdFocus(false)}
                      className="w-full p-2 rounded-lg text-black border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <span
                      className={`absolute right-3 top-3 ${
                        validPwd ? "text-green-500" : "hidden"
                      }`}
                    >
                      <FontAwesomeIcon icon={faCheck} />
                    </span>
                    <span
                      className={`absolute right-3 top-3 ${
                        validPwd || !pwd ? "hidden" : "text-red-500"
                      }`}
                    >
                      <FontAwesomeIcon icon={faTimes} />
                    </span>
                  </div>
                  <p
                    className={`${
                      pwdFocus && pwd && !validPwd
                        ? "text-sm rounded-lg bg-black text-white p-1"
                        : "absolute left-[-9999px]"
                    }`}
                  >
                    <FontAwesomeIcon icon={faInfoCircle} className="mr-1" />8 to
                    24 characters. Must include uppercase, lowercase, and a
                    special character.
                  </p>
                </div>

                {/* Confirm Password input */}
                <div className="flex flex-col">
                  <label htmlFor="confirm_pwd" className="text-black mt-4">
                    Confirm Password:
                  </label>
                  <div className="relative">
                    <input
                      type="password"
                      id="confirm_pwd"
                      onChange={(e) => setMatchPwd(e.target.value)}
                      required
                      aria-invalid={validMatch ? "false" : "true"}
                      onFocus={() => setMatchFocus(true)}
                      onBlur={() => setMatchFocus(false)}
                      className="w-full p-2 rounded-lg text-black border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <span
                      className={`absolute right-3 top-3 ${
                        validMatch && matchPwd ? "text-green-500" : "hidden"
                      }`}
                    >
                      <FontAwesomeIcon icon={faCheck} />
                    </span>
                    <span
                      className={`absolute right-3 top-3 ${
                        validMatch || !matchPwd ? "hidden" : "text-red-500"
                      }`}
                    >
                      <FontAwesomeIcon icon={faTimes} />
                    </span>
                  </div>
                  <p
                    className={`${
                      matchFocus && matchPwd && !validMatch
                        ? "text-sm rounded-lg bg-black text-white p-1"
                        : "absolute left-[-9999px]"
                    }`}
                  >
                    <FontAwesomeIcon icon={faInfoCircle} className="mr-1" />
                    Must match the password field.
                  </p>
                </div>

                {/* Submit button */}
                <button
                  disabled={
                    !validName || !validEmail || !validPwd || !validMatch
                  }
                  className="bg-blue-500 text-white p-3 mt-6 rounded-lg disabled:bg-gray-400 w-full"
                >
                  Sign Up
                </button>
              </form>
            </div>
          </div>
          {/* Image on the right */}
          <div
            className="hidden md:block w-1/2 bg-cover bg-center"
            style={{ backgroundImage: 'url("./public/cuties.avif")' }}
          ></div>
        </section>
      )}
    </>
  );
}
