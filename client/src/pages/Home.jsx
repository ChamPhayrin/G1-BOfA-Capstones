import React from "react";
import Welcome from "../components/Welcome"; // Welcome section with image collage and intro message
import SocialCard from "../components/SocialCard"; // Component for social media platform cards
import ArticleSection from "../components/ArticleSection"; // Component for latest tech articles
import { Navigate } from "react-router-dom";

// Social media platform logos (Updated to real logos)
const facebookLogo =
  "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg";
const gmailLogo =
  "https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg";
const youtubeLogo =
  "https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg";
const googleLogo =
  "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg";

// Home Page Component
const Home = () => {
  return (
    <div
      className="flex flex-col items-center justify-start min-h-screen bg-gray-50 w-full pb-16"
      role="main" // Main landmark for screen readers
    >
      {/* Main Heading */}
      <h1
        className="text-4xl font-serif font-regular mt-12 text-gray-900 text-center pb-10 tracking-wide"
        role="heading"
        aria-level="1"
      >
        Bringing the Digital World Closer to You
      </h1>

      {/* Hero Image */}
      <div
        className="relative w-full mt-6"
        role="img"
        aria-label="Elderly people using a tablet together"
      >
        <img
          src="https://www.familyeducation.com/sites/default/files/2019-07/iStock-958689848.jpg"
          alt="Elderly people using a tablet together"
          className="w-full h-96 object-cover"
        />
      </div>

      {/* Welcome Section */}
      <Welcome />

      {/* Social Media Platforms Section */}
      <section
        className="mt-16 w-3/4 max-w-6xl"
        role="region"
        aria-labelledby="essential-platforms-heading"
      >
        <h2
          id="essential-platforms-heading"
          className="text-3xl font-serif font-regular text-gray-800 text-center"
          role="heading"
          aria-level="2"
        >
          Essential Digital Platforms
        </h2>

        {/* Social Cards for different platforms */}
        <div
          className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8"
          role="list" // Denotes a list of important platforms
        >
          <div role="listitem">
            <SocialCard
              logo={
                <img
                  src={facebookLogo}
                  alt="Facebook Logo"
                  className="w-16 h-16 object-contain"
                  aria-hidden="true" // Marks decorative images as ignored for screen readers
                />
              }
              title="Facebook"
              text="Connect with family, discover new communities, and share moments that matter."
              buttonText="Click Here"
              onClick={() => (window.location.href = "/articles/facebook")}
              aria-label="Visit Facebook"
            />
          </div>

          <div role="listitem">
            <SocialCard
              logo={
                <img
                  src={gmailLogo}
                  alt="Gmail Logo"
                  className="w-16 h-16 object-contain"
                  aria-hidden="true"
                />
              }
              title="Gmail"
              text="Stay in touch and manage your emails easily with Gmail."
              buttonText="Click Here"
              onClick={() => (window.location.href = "/articles/gmail")}
              aria-label="Check your Gmail Inbox"
            />
          </div>

          <div role="listitem">
            <SocialCard
              logo={
                <img
                  src={youtubeLogo}
                  alt="YouTube Logo"
                  className="w-16 h-16 object-contain"
                  aria-hidden="true"
                />
              }
              title="YouTube"
              text="Watch, learn, and explore millions of videos."
              buttonText="Click Here"
              onClick={() => (window.location.href = "/articles/youtube")}
              aria-label="Watch videos on YouTube"
            />
          </div>

          <div role="listitem">
            <SocialCard
              logo={
                <img
                  src={googleLogo}
                  alt="Google Logo"
                  className="w-16 h-16 object-contain"
                  aria-hidden="true"
                />
              }
              title="Google"
              text="Search for anything, find answers, and explore the web."
              buttonText="Click Here"
              onClick={() => (window.location.href = "/articles/google")}
              aria-label="Search on Google"
            />
          </div>
        </div>
      </section>

      {/* Article Section Component */}
      <ArticleSection />
    </div>
  );
};

export default Home;
