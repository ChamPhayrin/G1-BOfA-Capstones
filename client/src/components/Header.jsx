//  Imports State for our hamburger menu
import { useState, useEffect } from "react";

// Imports NavLink which allows us to switch pages in React without reloading
// Imports useLocation to track the current route and trigger the sidenav to close once the user navigates to a different page, thus changing the route
// useLoco = returns obj respresenting current URL and updates auto when changes
import { NavLink, useLocation } from "react-router-dom";

// Semantic Header component which holds our Navbar
export function Header() {
  // State that toggles opening and closing hamburger menu
  const [menuOpen, setMenuOpen] = useState(false);

  // location = obj that holds "pathname" property we want
  const location = useLocation();
  // location.pathname = current route (Home = /, Profile = /profile)

  // useEffect will run everytime location.pathway changes, essentially meaning once the sidenav is open and a new Link is clicked, the sidenav with auto close since state is set back to false
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className="bg-black text-white sticky top-0 z-50">
      <nav className="p-5 flex justify-between items-center">
        {/* Button that wraps our svg ham-menu icon on mobile */}
        <button
          // When button is clicked, state changes to true, displaying sidenav
          onClick={() => setMenuOpen(true)}
          // Hides on medium screens and larger.
          className="lg:hidden focus:outline-none"
        >
          <img src="hamburger-menu.svg" alt="" />
        </button>

        {/* Change h1 for logo img later */}
        <h1 className="text-2xl font-bold">Capstone</h1>

        {/* Empty Placeholder for Right Side of Navbar (Mobile/Tablet). We use this so when we use space-between on our nav's flexbox, our logo stays centered */}
        <div className="w-7 h-7"></div>

        {/* NAVIGATION MENUS */}

        {/* Desktop Navigation (HIDDEN ON MOBILE. only seen on TABLET AND DEKSTOP) */}
        {/* hidden hides on all screen sizes, but md:flex changes display for medium screens and up, showing our links */}
        <div className="hidden lg:flex space-x-4 ml-auto">
          <NavLink to="/" className="hover:text-blue-400">
            Home
          </NavLink>
          <NavLink to="/contact" className="hover:text-blue-400">
            Contact
          </NavLink>
          <NavLink to="/signup" className="hover:text-blue-400">
            Sign Up
          </NavLink>
          {/* Profile but no settings link. Looks too much of navbar. We'll have a settings button on the top of the profile page */}
          <NavLink to="/login" className="hover:text-blue-400">
            Login
          </NavLink>
        </div>

        {/* Mobile sidenav, DEPENDANT ON "menuOpen" STATE (MOBILE ONLY) */}
        {/* When menuOpen is true, return our sidenav menu */}
        {menuOpen && (
          // Overlay background covers entire screen w/ slight blur
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-[1px] z-40"
            onClick={() => setMenuOpen(false)}
          >
            {/* Nav list container on left side */}
            <div
              className="bg-black w-64 h-full p-6 "
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setMenuOpen(false)}
                className="text-white mb-4"
              >
                <img src="close.svg" alt="" />
              </button>

              <ul>
                <li>
                  <NavLink to="/" className="hover:text-blue-400 flex mb-4">
                    <img src="home.svg" alt="Home icon" className="mr-2" />
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/contact"
                    className="hover:text-blue-400 flex mb-4"
                  >
                    <img
                      src="contact.svg"
                      alt="Contact icon"
                      className="mr-2"
                    />
                    Contact
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/signup"
                    className="hover:text-blue-400 flex mb-4"
                  >
                    <img src="signup.svg" alt="Sign Up icon" className="mr-2" />
                    Sign Up
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/login"
                    className="hover:text-blue-400 flex mb-4"
                  >
                    <img src="login.svg" alt="Login icon" className="mr-2" />
                    Login
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
