import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  // Set page title for screen readers when component mounts
  useEffect(() => {
    document.title = "404 - Page Not Found";
    
    // Announce to screen readers that a 404 error has occurred
    const announcer = document.createElement('div');
    announcer.setAttribute('aria-live', 'assertive');
    announcer.setAttribute('role', 'alert');
    announcer.classList.add('sr-only'); // visually hidden
    announcer.textContent = "404 Error. Page not found.";
    document.body.appendChild(announcer);
    
    // Clean up
    return () => {
      document.body.removeChild(announcer);
    };
  }, []);

  return (
    <main 
      className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4"
      role="main"
      aria-labelledby="not-found-title"
    >
      <div className="max-w-md w-full text-center">
        <div className="mb-8" aria-hidden="true">
          <svg 
            className="mx-auto h-32 w-32 text-gray-400" 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="1" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M16 16s-1.5-2-4-2-4 2-4 2" />
            <line x1="9" y1="9" x2="9.01" y2="9" />
            <line x1="15" y1="9" x2="15.01" y2="9" />
          </svg>
        </div>
        
        <h1 id="not-found-title" className="text-6xl font-bold text-gray-800 mb-2" tabIndex="-1">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Page Not Found</h2>
        
        <p className="text-gray-600 mb-8">
          We couldn't find the page you're looking for. The page may have been moved, 
          deleted, or never existed in the first place.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            to="/" 
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
            aria-label="Go to homepage"
          >
            Back to Home
          </Link>
          <button 
            onClick={() => window.history.back()}
            className="px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors"
            aria-label="Go back to previous page"
          >
            Go Back
          </button>
        </div>
      </div>
      
      {/* Help section for users */}
      <section 
        className="mt-12 max-w-lg text-center"
        aria-labelledby="help-heading"
      >
        <h2 id="help-heading" className="text-lg font-medium text-gray-700 mb-3">Need Help?</h2>
        <p className="text-gray-600 mb-4">
          If you're having trouble finding what you're looking for, try one of these options:
        </p>
        <ul 
          className="list-disc text-left pl-8 mb-6 mx-auto max-w-md text-gray-600"
          aria-label="Helpful suggestions"
        >
          <li>Check that the URL is spelled correctly</li>
          <li>Search for the content you're looking for</li>
          <li>Visit our sitemap to find what you need</li>
          <li>Contact our support team for assistance</li>
        </ul>
        <Link 
          to="/contact"
          className="text-blue-600 hover:text-blue-800 underline font-medium"
          aria-label="Go to contact page for support"
        >
          Contact Support
        </Link>
      </section>

      {/* Hidden element for screen readers */}
      <div className="sr-only" aria-live="polite">
        404 page not found. Navigation options are available.
      </div>
    </main>
  );
}