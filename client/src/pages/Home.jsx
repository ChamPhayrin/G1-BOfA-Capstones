import React from "react";
import Welcome from "../components/Welcome";
import SocialCard from "../components/SocialCard";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen p-5 bg-gray-50 w-full">
      {/* Home Title */}
      <h1 className="text-5xl font-bold mt-10">Home</h1>

      {/* Welcome Section (Set to a Fixed Width for Consistency) */}
      <div className="mt-6 w-3/4 max-w-4xl">
        <Welcome text="Technology isn’t just for the young—it’s for everyone! Stay connected, explore new opportunities, and discover how easy and fun it can be to learn and engage online. Join us today and take the first step toward mastering the digital world!" />
      </div>

      {/* Social Cards - Now Matches the Width of Welcome */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8 w-3/4 max-w-4xl">
        {/* Row 1 */}
        <SocialCard
          logo="f"
          title="Facebook"
          text="Connect with family, discover new communities, and share moments that matter."
          buttonText="Visit Facebook"
          onClick={() => alert("Facebook Clicked!")}
        />

        <SocialCard
          logo="📧"
          title="Gmail"
          text="Stay in touch and manage your emails easily with Gmail."
          buttonText="Check Inbox"
          onClick={() => alert("Gmail Clicked!")}
        />

        {/* Row 2 */}
        <SocialCard
          logo="▶️"
          title="YouTube"
          text="Watch, learn, and explore millions of videos on YouTube."
          buttonText="Watch Now"
          onClick={() => alert("YouTube Clicked!")}
        />

        <SocialCard
          logo="🔍"
          title="Google"
          text="Search for anything, find answers, and explore the web."
          buttonText="Search Now"
          onClick={() => alert("Google Clicked!")}
        />

        {/* Row 3 */}
        <SocialCard
          logo="💼"
          title="LinkedIn"
          text="Stay professionally connected and explore new career opportunities."
          buttonText="Join LinkedIn"
          onClick={() => alert("LinkedIn Clicked!")}
        />

        <SocialCard
          logo="💬"
          title="WhatsApp"
          text="Easily message, call, and stay in touch with family and friends."
          buttonText="Start Chatting"
          onClick={() => alert("WhatsApp Clicked!")}
        />
      </div>
    </div>
  );
};

export default Home;
