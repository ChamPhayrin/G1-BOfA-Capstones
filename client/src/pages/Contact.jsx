import React, { useState, useRef, useEffect } from "react";
import axios from "../api/axios";

const Contact = () => {
  const nameRef = useRef();
  const errRef = useRef();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const email_regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Focus on the name field when the component loads
  useEffect(() => {
    if (nameRef.current) {
      nameRef.current.focus();
    }
  }, []);

  // Validate email whenever the email value changes
  useEffect(() => {
    setValidEmail(email_regex.test(email));
  }, [email]);

  // Clear error message when form fields change
  useEffect(() => {
    setErrMsg("");
  }, [name, email, subject, message]);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation for required fields
    if (!name.trim() || !validEmail || !subject || !message.trim()) {
      setErrMsg("Please fill in all fields correctly.");
      return;
    }

    setIsLoading(true);

    try {
      // Make the API call to submit the contact form
      const response = await axios.post(
        "/messages",
        {
          name,
          email,
          subject,
          message,
        }
      );

      // If the response is successful, reset the form and show success
        setSuccess(true);
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
    } catch (error) {
      // Error handling
      if (error.response && error.response.status === 401) {
        setErrMsg("Unauthorized. Please log in.");
      } else {
        setErrMsg("Failed to submit your message. Please try again later.");
      }
      if (errRef.current) {
        errRef.current.focus(); // Focus the error message
      }
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
                Message Sent Successfully!
              </h1>
              <p className="text-gray-600 mb-6">
                Thank you for your message. We'll get back to you shortly.
              </p>
              <button
                onClick={() => setSuccess(false)}
                className="block w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition duration-200"
              >
                Send Another Message
              </button>
            </div>
          </div>
          <div
            className="hidden md:block w-1/2 bg-cover bg-center"
            style={{
              backgroundImage:
                'url("https://cdn.aarp.net/content/dam/aarp/research/surveys_statistics/technology/images/1140-mature-man-using-cellphone.jpg")',
            }}
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
                        d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="p-8 pt-10">
                <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
                  Contact Us
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
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      ref={nameRef}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
                      required
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      onFocus={() => setEmailFocus(true)}
                      onBlur={() => setEmailFocus(false)}
                      className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
                      required
                    />
                    {emailFocus && email && !validEmail && (
                      <p className="text-xs text-red-500 mt-1">
                        Please enter a valid email.
                      </p>
                    )}
                  </div>

                  {/* Subject Dropdown */}
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Subject
                    </label>
                    <select
                      id="subject"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
                      required
                    >
                      <option value="">Select a Subject</option>
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Support Request">Support Request</option>
                      <option value="Feedback">Feedback</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows="4"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
                      required
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="mt-6">
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition duration-200"
                    >
                      {isLoading ? "Sending..." : "Send Message"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div
            className="hidden md:block w-1/2 bg-cover bg-center"
            style={{
              backgroundImage: 'url("/api/placeholder/800/600")',
            }}
            aria-hidden="true"
          ></div>
        </section>
      )}
    </main>
  );
};

export default Contact;
