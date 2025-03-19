import { useState, useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth"; // Use the custom useAuth hook
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faHome,
  faNewspaper,
  faEnvelope,
  faUser,
  faSignInAlt,
} from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { auth } = useAuth(); // Get auth state from context
  const location = useLocation();
  const navigate = useNavigate();

  // Close the mobile menu when the route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // Check if the user is logged in based on the presence of auth data
  const isLoggedIn = !!auth?.user_id;

  // Check if the user is an admin (role code 5150)
  const isAdmin = auth?.roles === 5150;

  // Handle account navigation
  const handleAccountClick = () => {
    if (isAdmin) {
      navigate("/admin"); // Redirect to admin page if the user is an admin
    } else {
      navigate("/account"); // Redirect to regular account page if not an admin
    }
  };

  return (
    <header className="bg-gray-900 text-white sticky top-0 z-50 shadow-md">
      <nav
        className="p-5 flex justify-between items-center max-w-7xl mx-auto"
        aria-label="Main Navigation"
      >
        {/* Hamburger Menu Button */}
        <button
          onClick={() => setMenuOpen(true)}
          className="lg:hidden focus:outline-none"
          aria-label="Open menu"
        >
          <FontAwesomeIcon icon={faBars} className="w-8 h-8 text-white" />
        </button>

        {/* Logo */}
        <NavLink to="/" className="flex items-center" aria-label="Home">
          <img src="/logo.png" alt="Website Logo" className="w-28 h-auto" />
        </NavLink>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex space-x-6 ml-auto text-lg">
          <NavLink to="/" className="hover:text-blue-400 transition">
            Home
          </NavLink>
          <NavLink to="/articles" className="hover:text-blue-400 transition">
            Articles
          </NavLink>
          <NavLink to="/contact" className="hover:text-blue-400 transition">
            Contact
          </NavLink>
          {isLoggedIn ? (
            <button
              onClick={handleAccountClick}
              className="hover:text-blue-400 transition"
            >
              {isAdmin ? "Admin" : "Account"}
            </button>
          ) : (
            <NavLink to="/login" className="hover:text-blue-400 transition">
              Login
            </NavLink>
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
              {/* Close Button */}
              <button
                onClick={() => setMenuOpen(false)}
                className="text-white mb-4 flex items-center"
                aria-label="Close menu"
              >
                <FontAwesomeIcon icon={faTimes} className="w-6 h-6" />
              </button>

              {/* Mobile Navigation Links */}
              <ul className="space-y-4 text-lg list-none pl-0">
                <li>
                  <NavLink
                    to="/"
                    className="flex items-center hover:text-blue-400"
                  >
                    <FontAwesomeIcon icon={faHome} className="w-6 h-6 mr-3" />{" "}
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/articles"
                    className="flex items-center hover:text-blue-400"
                  >
                    <FontAwesomeIcon
                      icon={faNewspaper}
                      className="w-6 h-6 mr-3"
                    />{" "}
                    Articles
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/contact"
                    className="flex items-center hover:text-blue-400"
                  >
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      className="w-6 h-6 mr-3"
                    />{" "}
                    Contact
                  </NavLink>
                </li>
                {isLoggedIn ? (
                  <li>
                    <button
                      onClick={handleAccountClick}
                      className="flex items-center hover:text-blue-400 w-full text-left"
                    >
                      <FontAwesomeIcon icon={faUser} className="w-6 h-6 mr-3" />
                      {isAdmin ? "Admin" : "Account"}
                    </button>
                  </li>
                ) : (
                  <li>
                    <NavLink
                      to="/login"
                      className="flex items-center hover:text-blue-400"
                    >
                      <FontAwesomeIcon
                        icon={faSignInAlt}
                        className="w-6 h-6 mr-3"
                      />{" "}
                      Login
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
