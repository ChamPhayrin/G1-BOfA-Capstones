import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import {
  faPhoneAlt,
  faEnvelope,
  faMapMarkerAlt,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-slate-600 to-sky-600 text-white shadow-lg">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">
          {/* Column 1: About Us */}
          <section>
            <h3 className="font-bold text-lg mb-4 border-b border-white/20 pb-2">
              About Us
            </h3>
            <p className="text-white/80 leading-relaxed">
              We are the BofA Team 1, creating seamless experiences through
              innovative technology.
            </p>
            <div className="mt-6 flex space-x-4 text-xl">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition duration-200"
                aria-label="Facebook"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition duration-200"
                aria-label="Twitter"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition duration-200"
                aria-label="LinkedIn"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition duration-200"
                aria-label="Instagram"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
          </section>

          {/* Column 2: Quick Links */}
          <nav aria-labelledby="quick-links">
            <h3
              id="quick-links"
              className="font-bold text-lg mb-4 border-b border-white/20 pb-2"
            >
              Quick Links
            </h3>
            <ul className="space-y-3 list-none pl-0">
              <li>
                <NavLink
                  to="/"
                  className="flex items-center group text-white/80 hover:text-white transition-colors duration-200"
                >
                  <span className="w-2 h-2 rounded-full bg-white/50 group-hover:bg-white mr-2 transition-colors duration-200"></span>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/articles"
                  className="flex items-center group text-white/80 hover:text-white transition-colors duration-200"
                >
                  <span className="w-2 h-2 rounded-full bg-white/50 group-hover:bg-white mr-2 transition-colors duration-200"></span>
                  Articles
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className="flex items-center group text-white/80 hover:text-white transition-colors duration-200"
                >
                  <span className="w-2 h-2 rounded-full bg-white/50 group-hover:bg-white mr-2 transition-colors duration-200"></span>
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/login"
                  className="flex items-center group text-white/80 hover:text-white transition-colors duration-200"
                >
                  <span className="w-2 h-2 rounded-full bg-white/50 group-hover:bg-white mr-2 transition-colors duration-200"></span>
                  Login
                </NavLink>
              </li>
            </ul>
          </nav>

          {/* Column 3: Contact Information */}
          <section aria-labelledby="contact-info">
            <h3
              id="contact-info"
              className="font-bold text-lg mb-4 border-b border-white/20 pb-2"
            >
              Contact
            </h3>
            <address className="text-white/80 not-italic space-y-3">
              <p className="flex items-start">
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  className="mr-3 mt-1 text-white"
                />
                <span>
                  123 Innovation Drive
                  <br />
                  Tech Valley, CA 94043
                </span>
              </p>
              <p className="flex items-center">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="mr-3 text-white"
                />
                <a
                  href="mailto:support@capstones.com"
                  className="hover:text-white transition-colors duration-200"
                >
                  support@capstones.com
                </a>
              </p>
              <p className="flex items-center">
                <FontAwesomeIcon
                  icon={faPhoneAlt}
                  className="mr-3 text-white"
                />
                <a
                  href="tel:+11234567890"
                  className="hover:text-white transition-colors duration-200"
                >
                  +1 123-456-7890
                </a>
              </p>
            </address>
          </section>

          {/* Column 4: Business Hours */}
          <section>
            <h3 className="font-bold text-lg mb-4 border-b border-white/20 pb-2">
              Business Hours
            </h3>
            <ul className="space-y-3 text-white/80">
              <li className="flex justify-between">
                <span>Monday - Friday:</span>
                <span className="text-white">9am - 5pm</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday:</span>
                <span className="text-white">10am - 2pm</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday:</span>
                <span className="text-white">Closed</span>
              </li>
            </ul>
          </section>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-white/70 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Capstones. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-white/70">
            <a
              href="#"
              className="hover:text-white transition-colors duration-200"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors duration-200"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors duration-200"
            >
              Cookies Settings
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
