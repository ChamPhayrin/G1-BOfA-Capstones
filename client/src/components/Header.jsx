import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth"; // Use the custom useAuth hook

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { auth } = useAuth(); // Get auth state from context
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // Check if the user is logged in based on the presence of auth data
  const isLoggedIn = !!auth?.accessToken;

  return (
    <header className="bg-gray-900 text-white sticky top-0 z-50 shadow-md">
      <nav className="p-5 flex justify-between items-center max-w-7xl mx-auto" aria-label="Main Navigation">
        {/* Hamburger Menu Button */}
        <button
          onClick={() => setMenuOpen(true)}
          className="lg:hidden focus:outline-none"
          aria-label="Open menu"
        >
          <img src="/hamburger-menu.svg" alt="Menu" className="w-8 h-8" />
        </button>

        {/* Logo */}
        <NavLink to="/" className="flex items-center" aria-label="Home">
          <img src="/logo.png" alt="Website Logo" className="w-28 h-auto" />
        </NavLink>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex space-x-6 ml-auto text-lg">
          <NavLink to="/" className="hover:text-blue-400 transition">Home</NavLink>
          <NavLink to="/articles" className="hover:text-blue-400 transition">Articles</NavLink>
          {isLoggedIn ? (
            <>
              <NavLink to="/contact" className="hover:text-blue-400 transition">Contact</NavLink>
              <NavLink to="/account" className="hover:text-blue-400 transition">Account</NavLink>
            </>
          ) : (
            <NavLink to="/login" className="hover:text-blue-400 transition">Login</NavLink>
          )}
        </div>

        {/* Mobile Navigation Drawer */}
        {menuOpen && (
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
            onClick={() => setMenuOpen(false)}
            aria-hidden="true"
          >
            <div
              className="bg-gray-900 w-64 h-full p-6 shadow-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setMenuOpen(false)}
                className="text-white mb-4 flex items-center"
                aria-label="Close menu"
              >
                <img src="/close.svg" alt="Close menu" className="w-6 h-6" />
              </button>

              <ul className="space-y-4 text-lg">
                <li>
                  <NavLink to="/" className="flex items-center hover:text-blue-400">
                    <img src="/home.svg" alt="Home" className="w-6 h-6 mr-3" /> Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/articles" className="flex items-center hover:text-blue-400">
                    <img src="/articles.svg" alt="Articles" className="w-6 h-6 mr-3" /> Articles
                  </NavLink>
                </li>
                {isLoggedIn ? (
                  <>
                    <li>
                      <NavLink to="/contact" className="flex items-center hover:text-blue-400">
                        <img src="/contact.svg" alt="Contact" className="w-6 h-6 mr-3" /> Contact
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/account" className="flex items-center hover:text-blue-400">
                        <img src="/account.svg" alt="Account" className="w-6 h-6 mr-3" /> Account
                      </NavLink>
                    </li>
                  </>
                ) : (
                  <li>
                    <NavLink to="/login" className="flex items-center hover:text-blue-400">
                      <img src="/login.svg" alt="Login" className="w-6 h-6 mr-3" /> Login
                    </NavLink>
                  </li>
                )}
              </ul>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
