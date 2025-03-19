import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons"; // Importing brand icons
import { faPhoneAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons"; // Importing solid icons for contact info

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Column 1: About Us */}
        <section>
          <h3 className="font-bold text-lg mb-4">About Us</h3>
          <p className="text-sm">
            We are the BofA Team 1, creating seamless experiences through
            innovative technology.
          </p>
        </section>

        {/* Column 2: Quick Links */}
        <nav aria-labelledby="quick-links">
          <h3 id="quick-links" className="font-bold text-lg mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm list-none pl-0">
            <li>
              <NavLink to="/" className="hover:text-blue-400">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/articles" className="hover:text-blue-400">
                Articles
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="hover:text-blue-400">
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* Column 3: Contact Information */}
        <section aria-labelledby="contact-info">
          <h3 id="contact-info" className="font-bold text-lg mb-4">
            Contact
          </h3>
          <address className="text-sm">
            <p className="mb-2">
              <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
              support@capstones.com
            </p>
            <p>
              <FontAwesomeIcon icon={faPhoneAlt} className="mr-2" />
              +1 123-456-7890
            </p>
          </address>
        </section>

        {/* Column 4: Social Media */}
        <section aria-labelledby="social-media">
          <h3 id="social-media" className="font-bold text-lg mb-4">
            Follow Us
          </h3>
          <div className="flex space-x-4 text-xl">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
              aria-label="Facebook"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
              aria-label="Twitter"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
              aria-label="LinkedIn"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
              aria-label="Instagram"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </section>
      </div>

      {/* Bottom Copyright */}
      <div className="text-center py-4 mt-8">
        <p className="text-xs md:text-sm text-gray-400 tracking-wide">
          &copy; {new Date().getFullYear()} Capstones. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
