import { useState, useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faHome,
  faNewspaper,
  faEnvelope,
  faUser,
  faSignInAlt,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { auth } = useAuth();
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
      navigate("/admin");
    } else {
      navigate("/account");
    }
  };

  return (
    <header className="bg-gradient-to-r from-sky-600 to-slate-600 text-white sticky top-0 z-50 shadow-lg">
      <nav
        className="py-3 px-5 flex justify-between items-center max-w-7xl mx-auto"
        aria-label="Main Navigation"
      >
        {/* Hamburger Menu Button */}
        <button
          onClick={() => setMenuOpen(true)}
          className="lg:hidden focus:outline-none focus:ring-2 focus:ring-white/50 rounded-lg p-1 transition duration-200"
          aria-label="Open menu"
        >
          <FontAwesomeIcon icon={faBars} className="w-6 h-6 text-white" />
        </button>

        {/* Logo */}
        <NavLink
          to="/"
          className="flex items-center transition duration-200 transform hover:scale-105"
          aria-label="Home"
        >
          <img src="/finalLogoo.png" alt="Website Logo" className="w-65 h-35" />
        </NavLink>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex space-x-2 ml-auto">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `px-5 py-3 rounded-lg transition duration-200 text-lg font-medium ${
                isActive
                  ? "bg-white/10 text-white"
                  : "hover:bg-white/10 hover:text-white"
              }`
            }
          >
            <FontAwesomeIcon icon={faHome} className="mr-2" />
            Home
          </NavLink>

          <NavLink
            to="/articles"
            className={({ isActive }) =>
              `px-5 py-3 rounded-lg transition duration-200 text-lg font-medium ${
                isActive
                  ? "bg-white/10 text-white"
                  : "hover:bg-white/10 hover:text-white"
              }`
            }
          >
            <FontAwesomeIcon icon={faNewspaper} className="mr-2" />
            Articles
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `px-5 py-3 rounded-lg transition duration-200 text-lg font-medium ${
                isActive
                  ? "bg-white/10 text-white"
                  : "hover:bg-white/10 hover:text-white"
              }`
            }
          >
            <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
            Contact
          </NavLink>

          {isLoggedIn ? (
            <button
              onClick={handleAccountClick}
              className="px-5 py-3 rounded-lg transition duration-200 hover:bg-white/10 hover:text-white flex items-center text-lg font-medium"
            >
              <FontAwesomeIcon
                icon={isAdmin ? faUser : faUser}
                className="mr-2"
              />
              {isAdmin ? "Admin" : "Account"}
            </button>
          ) : (
            <NavLink
              to="/login"
              className={({ isActive }) =>
                `px-5 py-3 rounded-lg transition duration-200 text-lg font-medium ${
                  isActive
                    ? "bg-white/10 text-white"
                    : "hover:bg-white/10 hover:text-white"
                }`
              }
            >
              <FontAwesomeIcon icon={faSignInAlt} className="mr-2" />
              Login
            </NavLink>
          )}

          {isLoggedIn && (
            <NavLink
              to="/logout"
              className="px-5 py-3 rounded-lg transition duration-200 hover:bg-white/10 hover:text-white text-lg font-medium"
            >
              <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" />
              Logout
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
              className="bg-gradient-to-b from-sky-600 to-slate-600 w-72 h-full p-6 shadow-lg rounded-r-2xl transition-transform duration-300 transform translate-x-0"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header in mobile menu */}
              <div className="flex items-center justify-between mb-8 border-b border-white/20 pb-4">
                <div>
                  <img
                    src="/finalLogoo.png"
                    alt="Website Logo"
                    className="w-40 h-20"
                  />
                </div>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition duration-200"
                  aria-label="Close menu"
                >
                  <FontAwesomeIcon icon={faTimes} className="w-5 h-5" />
                </button>
              </div>

              {/* Mobile Navigation Links */}
              <ul className="space-y-3 text-xl list-none pl-0">
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      `flex items-center p-4 rounded-lg transition duration-200 font-medium ${
                        isActive
                          ? "bg-white/10 text-white"
                          : "hover:bg-white/10 hover:text-white"
                      }`
                    }
                  >
                    <FontAwesomeIcon icon={faHome} className="w-6 h-6 mr-3" />
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/articles"
                    className={({ isActive }) =>
                      `flex items-center p-4 rounded-lg transition duration-200 font-medium ${
                        isActive
                          ? "bg-white/10 text-white"
                          : "hover:bg-white/10 hover:text-white"
                      }`
                    }
                  >
                    <FontAwesomeIcon
                      icon={faNewspaper}
                      className="w-6 h-6 mr-3"
                    />
                    Articles
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                      `flex items-center p-4 rounded-lg transition duration-200 font-medium ${
                        isActive
                          ? "bg-white/10 text-white"
                          : "hover:bg-white/10 hover:text-white"
                      }`
                    }
                  >
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      className="w-6 h-6 mr-3"
                    />
                    Contact
                  </NavLink>
                </li>
                {isLoggedIn ? (
                  <>
                    <li>
                      <button
                        onClick={handleAccountClick}
                        className="flex items-center p-4 rounded-lg w-full text-left transition duration-200 hover:bg-white/10 hover:text-white font-medium"
                      >
                        <FontAwesomeIcon
                          icon={faUser}
                          className="w-6 h-6 mr-3"
                        />
                        {isAdmin ? "Admin" : "Account"}
                      </button>
                    </li>
                  </>
                ) : (
                  <li>
                    <NavLink
                      to="/login"
                      className={({ isActive }) =>
                        `flex items-center p-4 rounded-lg transition duration-200 font-medium ${
                          isActive
                            ? "bg-white/10 text-white"
                            : "hover:bg-white/10 hover:text-white"
                        }`
                      }
                    >
                      <FontAwesomeIcon
                        icon={faSignInAlt}
                        className="w-6 h-6 mr-3"
                      />
                      Login
                    </NavLink>
                  </li>
                )}
              </ul>

              {/* Footer in mobile menu */}
              <div className="absolute bottom-8 left-0 right-0 px-6">
                <div className="border-t border-white/20 pt-4 text-sm text-white/70">
                  {isLoggedIn ? (
                    <p>Logged in as: {auth?.username || "User"}</p>
                  ) : (
                    <p>Not logged in</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
