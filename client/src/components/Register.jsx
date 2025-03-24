import React, { useEffect, useState, useRef } from "react";
import {
	faCheck,
	faTimes,
	faInfoCircle,
	faEye,
	faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "../api/axios";
import { Link } from "react-router-dom";

export default function Register({
	register_url = "/register",
	title = "Create an Account",
}) {
	// Regex patterns for validation
	const user_regex = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
	const pwd_regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%]).{8,24}$/;
	const email_regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

	// Refs for focus management
	const userRef = useRef();
	const errRef = useRef();

	// State variables
	const [user, setUser] = useState("");
	const [validName, setValidName] = useState(false);
	const [userFocus, setUserFocus] = useState(false);

	const [email, setEmail] = useState("");
	const [validEmail, setValidEmail] = useState(false);
	const [emailFocus, setEmailFocus] = useState(false);

	const [pwd, setPwd] = useState("");
	const [validPwd, setValidPwd] = useState(false);
	const [pwdFocus, setPwdFocus] = useState(false);
	const [showPwd, setShowPwd] = useState(false);

	const [matchPwd, setMatchPwd] = useState("");
	const [validMatch, setValidMatch] = useState(false);
	const [matchFocus, setMatchFocus] = useState(false);
	const [showMatchPwd, setShowMatchPwd] = useState(false);

	const [errMsg, setErrMsg] = useState("");
	const [success, setSuccess] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	// Focus on username input on mount
	useEffect(() => {
		userRef.current.focus();
	}, []);

	// Validate username
	useEffect(() => {
		setValidName(user_regex.test(user));
	}, [user]);

	// Validate email
	useEffect(() => {
		setValidEmail(email_regex.test(email));
	}, [email]);

	// Validate password and match
	useEffect(() => {
		setValidPwd(pwd_regex.test(pwd));
		setValidMatch(pwd === matchPwd);
	}, [pwd, matchPwd]);

	// Clear error message on input change
	useEffect(() => {
		setErrMsg("");
	}, [user, email, pwd, matchPwd]);

	// Handle form submission
	const handleSubmit = async (e) => {
		e.preventDefault();

		// Double-check validation
		if (!validName || !validEmail || !validPwd || !validMatch) {
			setErrMsg("Invalid input. Please check your entries.");
			return;
		}

		setIsLoading(true);

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
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<main className="min-h-screen flex">
			{success ? (
				<section className="w-full flex">
					<div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
						<div className="w-full max-w-md mx-auto bg-white rounded-2xl shadow-xl overflow-hidden p-8 text-center">
							<div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-8 w-8 text-green-500"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M5 13l4 4L19 7"
									/>
								</svg>
							</div>
							<h1 className="text-2xl font-bold text-gray-800 mb-2">
								Registration Successful!
							</h1>
							<p className="text-gray-600 mb-6">
								Your account has been created successfully.
							</p>
							<Link
								to={'/login'}
								className="block w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition duration-200"
							>
								Sign In
							</Link>
						</div>
					</div>
					<div
						className="hidden md:block w-1/2 bg-cover bg-center"
						style={{ backgroundImage: 'url("./public/cuties.avif")' }}
						aria-hidden="true"
					></div>
				</section>
			) : (
				<section className="w-full flex">
					<div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
						<div className="w-full max-w-md mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
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
												d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
											/>
										</svg>
									</div>
								</div>
							</div>

							<div className="p-8 pt-10">
								<h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
									{title}
								</h1>

								{/* Error Message */}
								{errMsg && (
									<div
										ref={errRef}
										className="mb-4 p-3 bg-red-50 border-l-4 border-red-500 text-red-700 rounded"
										role="alert"
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

								<form onSubmit={handleSubmit} className="space-y-4">
									{/* Username field */}
									<div>
										<label
											htmlFor="username"
											className="block text-sm font-medium text-gray-700 mb-1"
										>
											Username
											<span
												className={validName ? "text-green-500 ml-2" : "hidden"}
												aria-hidden="true"
											>
												<FontAwesomeIcon icon={faCheck} />
											</span>
											<span
												className={
													validName || !user ? "hidden" : "text-red-500 ml-2"
												}
												aria-hidden="true"
											>
												<FontAwesomeIcon icon={faTimes} />
											</span>
										</label>
										<div className="relative">
											<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													className="h-5 w-5 text-gray-400"
													fill="none"
													viewBox="0 0 24 24"
													stroke="currentColor"
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth={2}
														d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
													/>
												</svg>
											</div>
											<input
												type="text"
												id="username"
												ref={userRef}
												autoComplete="username"
												onChange={(e) => setUser(e.target.value)}
												value={user}
												required
												aria-invalid={!validName}
												aria-describedby="uidnote"
												onFocus={() => setUserFocus(true)}
												onBlur={() => setUserFocus(false)}
												className="pl-10 w-full py-2 px-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
												placeholder="Enter a username"
											/>
										</div>
										<div
											id="uidnote"
											className={
												userFocus && user && !validName
													? "mt-1 text-xs text-gray-600 bg-gray-100 p-2 rounded-md"
													: "sr-only"
											}
											aria-live="polite"
										>
											<FontAwesomeIcon icon={faInfoCircle} className="mr-1" />
											4 to 24 characters.
											<br />
											Must begin with a letter.
											<br />
											Letters, numbers, underscores, hyphens allowed.
										</div>
									</div>

									{/* Email field */}
									<div>
										<label
											htmlFor="email"
											className="block text-sm font-medium text-gray-700 mb-1"
										>
											Email
											<span
												className={
													validEmail ? "text-green-500 ml-2" : "hidden"
												}
												aria-hidden="true"
											>
												<FontAwesomeIcon icon={faCheck} />
											</span>
											<span
												className={
													validEmail || !email ? "hidden" : "text-red-500 ml-2"
												}
												aria-hidden="true"
											>
												<FontAwesomeIcon icon={faTimes} />
											</span>
										</label>
										<div className="relative">
											<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													className="h-5 w-5 text-gray-400"
													fill="none"
													viewBox="0 0 24 24"
													stroke="currentColor"
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth={2}
														d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
													/>
												</svg>
											</div>
											<input
												type="email"
												id="email"
												autoComplete="email"
												onChange={(e) => setEmail(e.target.value)}
												value={email}
												required
												aria-invalid={!validEmail}
												aria-describedby="emailnote"
												onFocus={() => setEmailFocus(true)}
												onBlur={() => setEmailFocus(false)}
												className="pl-10 w-full py-2 px-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
												placeholder="Enter your email"
											/>
										</div>
										<div
											id="emailnote"
											className={
												emailFocus && email && !validEmail
													? "mt-1 text-xs text-gray-600 bg-gray-100 p-2 rounded-md"
													: "sr-only"
											}
											aria-live="polite"
										>
											<FontAwesomeIcon icon={faInfoCircle} className="mr-1" />
											Must be a valid email address.
										</div>
									</div>

									{/* Password field */}
									<div>
										<label
											htmlFor="password"
											className="block text-sm font-medium text-gray-700 mb-1"
										>
											Password
											<span
												className={validPwd ? "text-green-500 ml-2" : "hidden"}
												aria-hidden="true"
											>
												<FontAwesomeIcon icon={faCheck} />
											</span>
											<span
												className={
													validPwd || !pwd ? "hidden" : "text-red-500 ml-2"
												}
												aria-hidden="true"
											>
												<FontAwesomeIcon icon={faTimes} />
											</span>
										</label>
										<div className="relative">
											<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													className="h-5 w-5 text-gray-400"
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
											<input
												type={showPwd ? "text" : "password"}
												id="password"
												autoComplete="new-password"
												onChange={(e) => setPwd(e.target.value)}
												value={pwd}
												required
												aria-invalid={!validPwd}
												aria-describedby="pwdnote"
												onFocus={() => setPwdFocus(true)}
												onBlur={() => setPwdFocus(false)}
												className="pl-10 w-full py-2 px-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
												placeholder="Create a password"
											/>
											<button
												type="button"
												className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500"
												onClick={() => setShowPwd(!showPwd)}
												aria-label={showPwd ? "Hide password" : "Show password"}
											>
												<FontAwesomeIcon icon={showPwd ? faEyeSlash : faEye} />
											</button>
										</div>
										<div
											id="pwdnote"
											className={
												pwdFocus && !validPwd
													? "mt-1 text-xs text-gray-600 bg-gray-100 p-2 rounded-md"
													: "sr-only"
											}
											aria-live="polite"
										>
											<FontAwesomeIcon icon={faInfoCircle} className="mr-1" />
											8 to 24 characters.
											<br />
											Must include uppercase and lowercase letters and a special
											character.
											<br />
											Allowed special characters:{" "}
											<span aria-label="exclamation mark">!</span>{" "}
											<span aria-label="at symbol">@</span>{" "}
											<span aria-label="hashtag">#</span>{" "}
											<span aria-label="dollar sign">$</span>{" "}
											<span aria-label="percent">%</span>
										</div>
									</div>

									{/* Confirm Password field */}
									<div>
										<label
											htmlFor="confirm_pwd"
											className="block text-sm font-medium text-gray-700 mb-1"
										>
											Confirm Password
											<span
												className={
													validMatch && matchPwd
														? "text-green-500 ml-2"
														: "hidden"
												}
												aria-hidden="true"
											>
												<FontAwesomeIcon icon={faCheck} />
											</span>
											<span
												className={
													validMatch || !matchPwd
														? "hidden"
														: "text-red-500 ml-2"
												}
												aria-hidden="true"
											>
												<FontAwesomeIcon icon={faTimes} />
											</span>
										</label>
										<div className="relative">
											<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													className="h-5 w-5 text-gray-400"
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
											<input
												type={showMatchPwd ? "text" : "password"}
												id="confirm_pwd"
												autoComplete="new-password"
												onChange={(e) => setMatchPwd(e.target.value)}
												value={matchPwd}
												required
												aria-invalid={!validMatch}
												aria-describedby="confirmnote"
												onFocus={() => setMatchFocus(true)}
												onBlur={() => setMatchFocus(false)}
												className="pl-10 w-full py-2 px-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
												placeholder="Confirm your password"
											/>
											<button
												type="button"
												className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500"
												onClick={() => setShowMatchPwd(!showMatchPwd)}
												aria-label={
													showMatchPwd ? "Hide password" : "Show password"
												}
											>
												<FontAwesomeIcon
													icon={showMatchPwd ? faEyeSlash : faEye}
												/>
											</button>
										</div>
										<div
											id="confirmnote"
											className={
												matchFocus && !validMatch
													? "mt-1 text-xs text-gray-600 bg-gray-100 p-2 rounded-md"
													: "sr-only"
											}
											aria-live="polite"
										>
											<FontAwesomeIcon icon={faInfoCircle} className="mr-1" />
											Must match the first password input field.
										</div>
									</div>

									<button
										type="submit"
										disabled={
											!validName ||
											!validEmail ||
											!validPwd ||
											!validMatch ||
											isLoading
										}
										className="w-full py-2 px-4 border border-transparent rounded-lg shadow-sm text-white bg-gradient-to-r from-sky-600 to-slate-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-200 flex justify-center disabled:bg-indigo-300 disabled:cursor-not-allowed"
										aria-label="Sign up"
									>
										{isLoading ? (
											<svg
												className="animate-spin h-5 w-5 text-white"
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 24 24"
											>
												<circle
													className="opacity-25"
													cx="12"
													cy="12"
													r="10"
													stroke="currentColor"
													strokeWidth="4"
												></circle>
												<path
													className="opacity-75"
													fill="currentColor"
													d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
												></path>
											</svg>
										) : (
											"Sign up"
										)}
									</button>
								</form>

								<p className="mt-6 text-center text-sm text-gray-600">
									Already have an account?{" "}
									<Link
										to="/login"
										className="font-medium text-indigo-600 hover:text-indigo-500"
									>
										Log In
									</Link>
								</p>
							</div>
						</div>
					</div>

					<div
						className="hidden md:block w-1/2 bg-cover bg-center"
						style={{ backgroundImage: 'url("./cuties.avif")' }}
						aria-hidden="true"
					></div>
				</section>
			)}
		</main>
	);
}
