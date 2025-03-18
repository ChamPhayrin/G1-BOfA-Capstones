import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faHome } from "@fortawesome/free-solid-svg-icons";

export default function Unauthorized() {
  const navigate = useNavigate();

  const goHome = () => {
    navigate('/');
  };

  return (
    <main className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <section 
        className="bg-white rounded-lg shadow-lg p-6 md:p-8 max-w-md w-full text-center"
        aria-labelledby="unauthorized-heading"
        role="alert"
      >
        <div className="mb-6">
          <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-red-100 mb-4">
            <FontAwesomeIcon icon={faLock} className="text-red-600 text-2xl" aria-hidden="true" />
          </div>
          
          <h1 id="unauthorized-heading" className="text-2xl font-bold text-gray-800 mb-2">
            Access Denied
          </h1>
          
          <p className="text-gray-600">
            You do not have permission to access this page. Please contact your administrator if you believe this is an error.
          </p>
        </div>
        
        <button
          onClick={goHome}
          className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-2 bg-gradient-to-r from-sky-600 to-slate-600 text-white font-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 transition-colors"
          aria-label="Go to home page"
        >
          <FontAwesomeIcon icon={faHome} className="mr-2" aria-hidden="true" />
          Return to Home
        </button>
      </section>
      
      <footer className="mt-8 text-center text-gray-500">
        <p>If you need assistance, please contact support.</p>
      </footer>
    </main>
  );
}