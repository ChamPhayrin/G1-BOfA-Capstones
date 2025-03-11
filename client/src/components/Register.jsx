import React, { useEffect, useState, useRef } from "react";
import {
  faCheck,
  faTimes,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "../api/axios";

export default function Register({register_url, title}) {
  const user_regex = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/; // First character must be a letter, 3-23 characters
  const pwd_regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%]).{8,24}$/; // One lowercase, one uppercase, one special character, 8-24 characters
  const email_regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email validation regex


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

  //Set focus on user input on page load
  useEffect(() => {
    userRef.current.focus();
  }, []);

  // Validates username
  useEffect(() => {
    const result = user_regex.test(user);
    setValidName(result);
  }, [user]);

  // Validates email
  useEffect(() => {
    const result = email_regex.test(email);
    setValidEmail(result);
  }, [email]);

  // Validates password
  useEffect(() => {
    const result = pwd_regex.test(pwd);
    setValidPwd(result);
    const match = pwd === matchPwd;
    setValidMatch(match);
  }, [pwd, matchPwd]);

  // Clears error message when changes are made
  useEffect(() => {
    setErrMsg("");
  }, [user, email, pwd, matchPwd]);


  //Handle form submission
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
                headers: { 'Content-Type': 'application/json' }, 
                withCredentials: true
            }
        );
        console.log(response.data);
        setSuccess(true);
        setUser('');
        setEmail('');
        setPwd('');
        setMatchPwd('');
        setErrMsg('');
    } catch (error) {
        if (!error?.response) {
            setErrMsg('No Server Response');
        } else if (error.response?.status === 409) {
            setErrMsg('Username or email already exists');
        } else {
            setErrMsg('Registration failed');
        }
        errRef.current.focus();
    }
};

  return (
    <>
      {success ? (
        <section className="w-full max-w-[420px] min-h-[400px] flex flex-col justify-start p-4 bg-[rgba(0,0,0,0.4)]">
          <h1 className="text-white text-2xl mb-4">Sucess!</h1>
          <p className="underline">
            <a href="#">Sign in</a>
          </p>
        </section>
      ) : (
        <section className="w-full max-w-[420px] min-h-[400px] flex flex-col justify-start p-4 bg-[rgba(0,0,0,0.4)]">
          {/* Displays error message */}
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
          <h1 className="text-white text-2xl mb-4">{title}</h1>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col justify-evenly flex-grow pb-4"
          >
            {/* Username input */}
            <label htmlFor="username" className="text-white mt-4">
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
                aria-describedby="uidnote"
                onFocus={() => setUserFocus(true)}
                onBlur={() => setUserFocus(false)}
                className="w-full p-1 rounded-lg text-black"
              />
              <span
                className={`absolute right-1 top-1 ${
                  validName ? "text-green-500" : "hidden"
                }`}
              >
                <FontAwesomeIcon icon={faCheck} />
              </span>
              <span
                className={`absolute right-1 top-1 ${
                  validName || !user ? "hidden" : "text-red-500"
                }`}
              >
                <FontAwesomeIcon icon={faTimes} />
              </span>
            </div>
            <p
              id="uidnote"
              className={`${
                userFocus && user && !validName
                  ? "text-[0.75rem] rounded-lg bg-black text-white p-1 relative -bottom-2.5"
                  : "absolute left-[-9999px]"
              }`}
            >
              <FontAwesomeIcon icon={faInfoCircle} className="mr-1" />
              4 to 24 characters. <br />
              Must begin with a letter. <br />
              Letters, numbers, underscores, hyphens allowed.
            </p>

            {/* Email input */}
            <label htmlFor="email" className="text-white mt-4">
              Email:
            </label>
            <div className="relative">
              <input
                type="email"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                required
                aria-invalid={validEmail ? "false" : "true"}
                aria-describedby="emailnote"
                onFocus={() => setEmailFocus(true)}
                onBlur={() => setEmailFocus(false)}
                className="w-full p-1 rounded-lg text-black"
              />
              <span
                className={`absolute right-1 top-1 ${
                  validEmail ? "text-green-500" : "hidden"
                }`}
              >
                <FontAwesomeIcon icon={faCheck} />
              </span>
              <span
                className={`absolute right-1 top-1 ${
                  validEmail || !email ? "hidden" : "text-red-500"
                }`}
              >
                <FontAwesomeIcon icon={faTimes} />
              </span>
            </div>
            <p
              id="emailnote"
              className={`${
                emailFocus && email && !validEmail
                  ? "text-[0.75rem] rounded-lg bg-black text-white p-1 relative -bottom-2.5"
                  : "absolute left-[-9999px]"
              }`}
            >
              <FontAwesomeIcon icon={faInfoCircle} className="mr-1" />
              Must be a valid email address.
            </p>

            {/* Password input */}
            <label htmlFor="password" className="text-white mt-4">
              Password:
            </label>
            <div className="relative">
              <input
                type="password"
                id="password"
                onChange={(e) => setPwd(e.target.value)}
                required
                aria-invalid={validPwd ? "false" : "true"}
                aria-describedby="pwdnote"
                onFocus={() => setPwdFocus(true)}
                onBlur={() => setPwdFocus(false)}
                className="w-full p-1 rounded-lg text-black"
              />
              <span
                className={`absolute right-1 top-1 ${
                  validPwd ? "text-green-500" : "hidden"
                }`}
              >
                <FontAwesomeIcon icon={faCheck} />
              </span>
              <span
                className={`absolute right-1 top-1 ${
                  validPwd || !pwd ? "hidden" : "text-red-500"
                }`}
              >
                <FontAwesomeIcon icon={faTimes} />
              </span>
            </div>
            <p
              id="pwdnote"
              className={`${
                pwdFocus && pwd && !validPwd
                  ? "text-[0.75rem] rounded-lg bg-black text-white p-1 relative -bottom-2.5"
                  : "absolute left-[-9999px]"
              }`}
            >
              <FontAwesomeIcon icon={faInfoCircle} className="mr-1" />
              8 to 24 characters. <br />
              Must include uppercase, lowercase, and a special character.
            </p>

            {/* Confirm Password input */}
            <label htmlFor="confirm_pwd" className="text-white mt-4">
              Confirm Password:
            </label>
            <div className="relative">
              <input
                type="password"
                id="confirm_pwd"
                onChange={(e) => setMatchPwd(e.target.value)}
                required
                aria-invalid={validMatch ? "false" : "true"}
                aria-describedby="confirmnote"
                onFocus={() => setMatchFocus(true)}
                onBlur={() => setMatchFocus(false)}
                className="w-full p-1 rounded-lg text-black"
              />
              <span
                className={`absolute right-1 top-1 ${
                  validMatch && matchPwd ? "text-green-500" : "hidden"
                }`}
              >
                <FontAwesomeIcon icon={faCheck} />
              </span>
              <span
                className={`absolute right-1 top-1 ${
                  validMatch || !matchPwd ? "hidden" : "text-red-500"
                }`}
              >
                <FontAwesomeIcon icon={faTimes} />
              </span>
            </div>
            <p
              id="confirmnote"
              className={`${
                matchFocus && matchPwd && !validMatch
                  ? "text-[0.75rem] rounded-lg bg-black text-white p-1 relative -bottom-2.5"
                  : "absolute left-[-9999px]"
              }`}
            >
              <FontAwesomeIcon icon={faInfoCircle} className="mr-1" />
              Must match the password field.
            </p>

            {/* Submit button */}
            <button
              disabled={!validName || !validEmail || !validPwd || !validMatch}
              className="bg-blue-500 text-white p-2 mt-4 rounded-lg disabled:bg-gray-400"
            >
              Sign Up
            </button>
          </form>

          {/* Success message */}
          {success && (
            <p className="text-green-500 mt-4">Registration successful!</p>
          )}

          {/* Sign-in link */}
          <p className="text-white mt-4">
            Already registered? <br />
            <span className="underline">
              <a href="#">Sign in</a>
            </span>
          </p>
        </section>
      )}
    </>
  );
}
